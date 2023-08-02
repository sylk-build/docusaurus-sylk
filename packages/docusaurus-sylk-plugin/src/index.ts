import { Plugin, LoadContext } from "@docusaurus/types"
import { existsSync, lstatSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

import { generateSylkDocFiles, generateSidebarFileContents, generateSylkIntroFile, generateSidebarFileCategory } from './generators';
import { SylkJson } from "./sylk/protos/sylk/Sylk/v2/Sylk";
import { GeneratedDocFile } from "./types";

export interface PluginOptions {
  // Path to Sylk JSON file.
  sylkJsonPaths: string[]
  // Path to generate data on filesystem relative to site dir.
  sylkDocsPath: string;
  // Path to sidebar configuration for showing a list of markdown pages.
  sidebarPath: string;
  // URL route for the docs section of your site.
  routeBasePath: string;
  // URL for github repository
  git?: string;
}

export function validateOptions({ options, validate }: { options: PluginOptions, validate: () => void }): PluginOptions {
  const { sylkJsonPaths, sylkDocsPath, sidebarPath } = options;
  // sylkJsonPath is an existing json file
  const isValidSylkJsons = sylkJsonPaths.map(p => p.includes('sylk.json')).find(p => p === false) !== undefined
  const isFilesExists = sylkJsonPaths.map(p => existsSync(p)).find(p => p === false) !== undefined
  if (!sylkJsonPaths || sylkJsonPaths.length === 0 || isFilesExists || isValidSylkJsons ) {
    throw new Error(`Expected sylkJsonPaths option to reference a present file. Check your path: ${sylkJsonPaths}`);
  }

  // sylkDocsPath is a directory. we only check if it's a directory if it already exists.
  if (!sylkDocsPath || (existsSync(sylkDocsPath) && !lstatSync(sylkDocsPath).isDirectory())) {
    throw new Error('Expected sylkDocsPath option to reference a directory.');
  }

  // sidebarPath is a present file
  if (!sidebarPath) {
    throw new Error('Expected sidebarPath option to reference a file.');
  }

  return options;
};

const validateSylkJson = function(json:SylkJson) {
  if(json.project === undefined) {
    throw new Error('Error in sylk.json: missing "project" property data.');
  }
  if (json.packages === undefined || Object.keys(json.packages).length === 0) {
    throw new Error('Error in sylk.json: missing "packages" property data.');
  }
  // deprecated
  // if (json.services === undefined || Object.keys(json.services).length === 0) {
  //   throw new Error('Error in sylk.json: missing "services" property data.');
  // }
}

export default function plugin(
  context: LoadContext,
  options: PluginOptions,
): Plugin<never> {
  return {
    name: "docusaurus-sylk-plugin",

    extendCli(cli) {
      cli
        .command("generate-sylk-docs")
        .description("Generate documentation for a sylk workspace.")
        .action(() => {
          let sylkJsons :SylkJson[] = [];
          let sidebarSylkContents : any[] = [];
          options.sylkJsonPaths.forEach(sylkJsonPath => {
            // read file sylk JSON file
            const fileJsonInput = JSON.parse(readFileSync(sylkJsonPath).toString());
            const sylkJson = SylkJson.fromJSON(fileJsonInput)

            let inlines:any = []
            Object.keys(fileJsonInput.packages).forEach(p => {
              const pkg = fileJsonInput.packages[p];
              if(pkg.messages) {
                const inlineMsgs = pkg.messages.filter((m:any) => m.inlines && m.inlines.length >0)
                inlineMsgs.map((m:any) => m.inlines.map((i:any) => inlines.push(i)))
              }
            })
            // Validating sylk.json format
            validateSylkJson(sylkJson)
            sylkJsons.push(sylkJson)

            // generate markdown files for each in fileDescriptors
            const docFiles = generateSylkDocFiles(sylkJson,inlines);
            // write files to appropriate directories
            docFiles.forEach((docFile:GeneratedDocFile) => {
              const fileName = `${options.sylkDocsPath}/${sylkJson.project?.name}/${docFile.fileName}.mdx`;
              const fileDir = path.dirname(fileName);
  
              // ensure directory exists
              mkdirSync(fileDir, { recursive: true });
  
              // write file
              writeFileSync(fileName, docFile.fileContents);
            });
            sidebarSylkContents.push(generateSidebarFileCategory(docFiles,<any>sylkJson.project?.name))
          });

          // generate sidebar object for all files
          const sidebarFileContents = generateSidebarFileContents(options.sylkDocsPath,sidebarSylkContents);
          // write sidebar object
          writeFileSync(options.sidebarPath, sidebarFileContents);

          const sylkIntro = generateSylkIntroFile(sylkJsons, options.sylkDocsPath, options.routeBasePath);
          sylkIntro.forEach(json => {
            let sylkIntroFilename = `${options.sylkDocsPath}/${json.fileName}.mdx`;
            const sylkIntroFileDir = path.dirname(sylkIntroFilename);
            // ensure directory exists
            mkdirSync(sylkIntroFileDir, { recursive: true });
            // write file
            writeFileSync(sylkIntroFilename, json.fileContents);
          });
         
        })
    },

    getThemePath() {
      return path.resolve(__dirname, "./theme");
    }
  }
}