#!/usr/bin/env node

import fs from 'fs';
// import chalk from 'chalk';
import path from 'path';
import { execSync } from 'child_process';
// import template from './templates/docusaurus.config';
const DEFAULT_TEMPLATE = 'classic';

export default async function init(
  siteName: string,
  options: any
) {
  console.log('Triggering @docusaurus/core project creation.');

  try {
    execSync(`npx @docusaurus/init@latest init --use-npm ${siteName} ${DEFAULT_TEMPLATE} `, { stdio: 'inherit' });
  } catch (err) {
    console.log('Generation of base template from @docusaurus/init failed.');
    throw err;
  }

  console.log('Installing docusaurus-sylk with recommended plugins.');

  try {
    execSync(`cd ${siteName} && npm install --save docusaurus-sylk`, { stdio: 'inherit' });
  } catch (err) {
    console.log('Installation of Sylk preset failed.');
    throw err;
  }

  console.log('Initializing docusaurus-sylk with default options and sample fixtures.')

  let jsonsToServe: any[] = [];
  let sylkDocsPath = 'sylkdocs';
  let json;
  let sidebarPath = 'sidebarsSylkdocs.js'
  let routeBasePath = 'sylkdocs'
  if(options) {
    
    json = fs.readFileSync(options.json,{
      encoding:'utf-8'
    })
    
    if(json) {
      json = JSON.parse(json)
    }

    if(!options.sylkDocsPath) {
      console.log(`warning: "sylkDocsPath" is not specified at execution of docusaurus-sylk-init\n- Fallback to defualt value: "${sylkDocsPath}"`)
    } 

    options.sylkJsonsPaths.forEach((sylkJson:string) => {
      jsonsToServe.push(sylkJson)
    })

    if (options.routeBasePath) {
      routeBasePath = options.routeBasePath;
    }
 
  } else {
    fs.copyFileSync(path.resolve(__dirname, 'templates/docusaurus.config.js'), `${siteName}/docusaurus.config.js`);
    fs.copyFileSync(path.resolve(__dirname, 'templates/sylk.json'), `${siteName}/sylk/TodoAppPy/sylk.json`);
  }

  fs.mkdirSync(`${siteName}/${sylkDocsPath}`);
  fs.mkdirSync(`${siteName}/sylk`);

  jsonsToServe.forEach((sylkJson:string) => {
    let prjName = sylkJson.split('/')[2];
    fs.mkdirSync(`${siteName}/${sylkDocsPath}/${prjName}/`);
    fs.mkdirSync(`${siteName}/sylk/${prjName}`);
  });

  if(json) {
    fs.copyFileSync(options.json, `${siteName}/sylk/${json.project.name}/sylk.json`);
  }

  fs.writeFileSync(`${siteName}/docusaurus.config.js`,overrideDocusaurusConfigs(jsonsToServe,sylkDocsPath,sidebarPath,routeBasePath))

  fs.writeFileSync(`${siteName}/${sidebarPath}`, '');

  fs.writeFileSync(`${siteName}/src/css/custom.css`, overrideStyles());

  fs.copyFileSync(path.resolve(__dirname, 'templates/landing_page.js'), `${siteName}/src/pages/index.js`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/landing_page.module.css'), `${siteName}/src/pages/styles.module.css`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/logo.png'), `${siteName}/static/img/logo.png`);
  fs.copyFileSync(path.resolve(__dirname, 'templates/favicon.ico'), `${siteName}/static/img/favicon.ico`);
  
  console.log('Generating Sylk doc files for sample fixtures.');

  try {
    execSync(`cd ${siteName} && npx docusaurus generate-sylk-docs`, { stdio: 'inherit' });
  } catch (err) {
    console.log('Generation of Sylk docs failed.');
    throw err;
  }

  console.log('Successful setup of Docusaurus site with Sylk preset! Try it out with `npm run start` in the site directory.');
}

const overrideStyles = () => {
  return `/**
  * Any CSS included here will be global. The classic template
  * bundles Infima by default. Infima is a CSS framework designed to
  * work well for content-centric websites.
  */
 
 /* You can override the default Infima variables here. */
 :root {
   --ifm-color-primary: #57E344;
   --ifm-color-primary-dark: #2AA819;
   --ifm-color-primary-darker: #238A15;
   --ifm-color-primary-darkest: #185E0E;
   --ifm-color-primary-light: #7FEA70;
   --ifm-color-primary-lighter: #A7F09D;
   --ifm-color-primary-lightest: #DCF9D8;
   --ifm-code-font-size: 95%;
}

.docusaurus-highlight-code-line {
  background-color: #091C2E;
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
}

html[data-theme='dark'] .docusaurus-highlight-code-line {
  background-color: #091C2E;
}
`
}

const overrideDocusaurusConfigs = (sylkJsonPaths:string[],sylkDocsPath:string,sidebarPath:string,routeBasePath:string) => {
  console.log(sylkJsonPaths)
  return `/** @type {import('@docusaurus/types').DocusaurusConfig} */
  module.exports = {
      title: 'Sylk Docs',
      tagline: 'Documentation Toolset for Your Sylk Workspace',
      url: 'https://sylk.build',
      baseUrl: '/',
      organizationName: 'sylk-build', // Usually your GitHub org/user name.
      projectName: 'docusaurus-sylk', // Usually your repo name.
      onBrokenLinks: 'throw',
      onBrokenMarkdownLinks: 'warn',
      favicon: 'img/favicon.ico',
      themeConfig: {
        navbar: {
          title: 'Sylk',
          logo: {
            alt: 'Sylk Logo',
            src: 'img/logo.png',
          },
          items: [
            {
              to: 'sylkdocs/intro',
              activeBasePath: 'sylkdocs',
              label: 'Sylk Docs',
              position: 'left',
            },
            {
              href: 'https://github.com/sylk-build/docusaurus-sylk',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Sylk',
              items: [
                {
                  label: 'Overview',
                  to: 'https://docs.sylk.build/',
                },
              ],
            },
            {
              title: 'Guides',
              items: [
                {
                  label: 'Installation',
                  to: 'https://docs.sylk.build/cli/installation',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'GitHub',
                  href: 'https://github.com/sylk-build/sylk',
                },
              ],
            },
          ],
          copyright: \`Copyright © ${new Date().getFullYear()} Sylk. Built with Docusaurus.\`,
        },
      },
      presets: [
        [
          '@docusaurus/preset-classic',
          {
            docs: {
              sidebarPath: require.resolve('./sidebars.js'),
              // Please change this to your repo.
              editUrl:
                'https://github.com/facebook/docusaurus/edit/master/website/',
            },
            blog: {
              showReadingTime: true,
              // Please change this to your repo.
              editUrl:
                'https://github.com/facebook/docusaurus/edit/master/website/blog/',
            },
            theme: {
              customCss: require.resolve('./src/css/custom.css'),
            },
          },
        ],
        [
          'docusaurus-sylk',
          {
            sylk: {
              sylkJsonPaths: ['${sylkJsonPaths}'],
              sylkDocsPath: '${sylkDocsPath}',
              sidebarPath: '${sidebarPath}'
            },
            docs: {
              routeBasePath: '${routeBasePath}',
              sidebarPath: '${sidebarPath}',
            }
          }
        ]
      ],
    };`
}