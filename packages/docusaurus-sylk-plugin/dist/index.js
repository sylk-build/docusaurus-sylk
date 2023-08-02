"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptions = void 0;
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var generators_1 = require("./generators");
var Sylk_1 = require("./sylk/protos/sylk/Sylk/v2/Sylk");
function validateOptions(_a) {
    var options = _a.options, validate = _a.validate;
    var sylkJsonPaths = options.sylkJsonPaths, sylkDocsPath = options.sylkDocsPath, sidebarPath = options.sidebarPath;
    // sylkJsonPath is an existing json file
    var isValidSylkJsons = sylkJsonPaths.map(function (p) { return p.includes('sylk.json'); }).find(function (p) { return p === false; }) !== undefined;
    var isFilesExists = sylkJsonPaths.map(function (p) { return (0, fs_1.existsSync)(p); }).find(function (p) { return p === false; }) !== undefined;
    if (!sylkJsonPaths || sylkJsonPaths.length === 0 || isFilesExists || isValidSylkJsons) {
        throw new Error("Expected sylkJsonPaths option to reference a present file. Check your path: ".concat(sylkJsonPaths));
    }
    // sylkDocsPath is a directory. we only check if it's a directory if it already exists.
    if (!sylkDocsPath || ((0, fs_1.existsSync)(sylkDocsPath) && !(0, fs_1.lstatSync)(sylkDocsPath).isDirectory())) {
        throw new Error('Expected sylkDocsPath option to reference a directory.');
    }
    // sidebarPath is a present file
    if (!sidebarPath) {
        throw new Error('Expected sidebarPath option to reference a file.');
    }
    return options;
}
exports.validateOptions = validateOptions;
;
var validateSylkJson = function (json) {
    if (json.project === undefined) {
        throw new Error('Error in sylk.json: missing "project" property data.');
    }
    if (json.packages === undefined || Object.keys(json.packages).length === 0) {
        throw new Error('Error in sylk.json: missing "packages" property data.');
    }
    // deprecated
    // if (json.services === undefined || Object.keys(json.services).length === 0) {
    //   throw new Error('Error in sylk.json: missing "services" property data.');
    // }
};
function plugin(context, options) {
    return {
        name: "docusaurus-sylk-plugin",
        extendCli: function (cli) {
            cli
                .command("generate-sylk-docs")
                .description("Generate documentation for a sylk workspace.")
                .action(function () {
                var sylkJsons = [];
                var sidebarSylkContents = [];
                options.sylkJsonPaths.forEach(function (sylkJsonPath) {
                    var _a;
                    // read file sylk JSON file
                    var fileJsonInput = JSON.parse((0, fs_1.readFileSync)(sylkJsonPath).toString());
                    var sylkJson = Sylk_1.SylkJson.fromJSON(fileJsonInput);
                    var inlines = [];
                    Object.keys(fileJsonInput.packages).forEach(function (p) {
                        var pkg = fileJsonInput.packages[p];
                        if (pkg.messages) {
                            var inlineMsgs = pkg.messages.filter(function (m) { return m.inlines && m.inlines.length > 0; });
                            inlineMsgs.map(function (m) { return m.inlines.map(function (i) { return inlines.push(i); }); });
                        }
                    });
                    // Validating sylk.json format
                    validateSylkJson(sylkJson);
                    sylkJsons.push(sylkJson);
                    // generate markdown files for each in fileDescriptors
                    var docFiles = (0, generators_1.generateSylkDocFiles)(sylkJson, inlines);
                    // write files to appropriate directories
                    docFiles.forEach(function (docFile) {
                        var _a;
                        var fileName = "".concat(options.sylkDocsPath, "/").concat((_a = sylkJson.project) === null || _a === void 0 ? void 0 : _a.name, "/").concat(docFile.fileName, ".mdx");
                        var fileDir = path_1.default.dirname(fileName);
                        // ensure directory exists
                        (0, fs_1.mkdirSync)(fileDir, { recursive: true });
                        // write file
                        (0, fs_1.writeFileSync)(fileName, docFile.fileContents);
                    });
                    sidebarSylkContents.push((0, generators_1.generateSidebarFileCategory)(docFiles, (_a = sylkJson.project) === null || _a === void 0 ? void 0 : _a.name));
                });
                // generate sidebar object for all files
                var sidebarFileContents = (0, generators_1.generateSidebarFileContents)(options.sylkDocsPath, sidebarSylkContents);
                // write sidebar object
                (0, fs_1.writeFileSync)(options.sidebarPath, sidebarFileContents);
                var sylkIntro = (0, generators_1.generateSylkIntroFile)(sylkJsons, options.sylkDocsPath, options.routeBasePath);
                sylkIntro.forEach(function (json) {
                    var sylkIntroFilename = "".concat(options.sylkDocsPath, "/").concat(json.fileName, ".mdx");
                    var sylkIntroFileDir = path_1.default.dirname(sylkIntroFilename);
                    // ensure directory exists
                    (0, fs_1.mkdirSync)(sylkIntroFileDir, { recursive: true });
                    // write file
                    (0, fs_1.writeFileSync)(sylkIntroFilename, json.fileContents);
                });
            });
        },
        getThemePath: function () {
            return path_1.default.resolve(__dirname, "./theme");
        }
    };
}
exports.default = plugin;
