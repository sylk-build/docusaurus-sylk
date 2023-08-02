#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// import chalk from 'chalk';
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
// import template from './templates/docusaurus.config';
var DEFAULT_TEMPLATE = 'classic';
function init(siteName, options) {
    return __awaiter(this, void 0, void 0, function () {
        var jsonsToServe, sylkDocsPath, json, sidebarPath, routeBasePath;
        return __generator(this, function (_a) {
            console.log('Triggering @docusaurus/core project creation.');
            try {
                (0, child_process_1.execSync)("npx @docusaurus/init@latest init --use-npm ".concat(siteName, " ").concat(DEFAULT_TEMPLATE, " "), { stdio: 'inherit' });
            }
            catch (err) {
                console.log('Generation of base template from @docusaurus/init failed.');
                throw err;
            }
            console.log('Installing docusaurus-sylk with recommended plugins.');
            try {
                (0, child_process_1.execSync)("cd ".concat(siteName, " && npm install --save docusaurus-sylk"), { stdio: 'inherit' });
            }
            catch (err) {
                console.log('Installation of Sylk preset failed.');
                throw err;
            }
            console.log('Initializing docusaurus-sylk with default options and sample fixtures.');
            jsonsToServe = [];
            sylkDocsPath = 'sylkdocs';
            sidebarPath = 'sidebarsSylkdocs.js';
            routeBasePath = 'sylkdocs';
            if (options) {
                console.log(options);
                json = fs_1.default.readFileSync(options.json, {
                    encoding: 'utf-8'
                });
                if (json) {
                    json = JSON.parse(json);
                }
                if (!options.sylkDocsPath) {
                    console.log("warning: \"sylkDocsPath\" is not specified at execution of docusaurus-sylk-init\n- Fallback to defualt value: \"".concat(sylkDocsPath, "\""));
                }
                else {
                    sylkDocsPath = options.sylkDocsPath;
                }
                // if(options.sylkJsonPaths) {
                //   options.sylkJsonPaths.forEach((sylkJson:string) => {
                //     jsonsToServe.push(sylkJson)
                //   })
                // }
                if (options.routeBasePath) {
                    routeBasePath = options.routeBasePath;
                }
                jsonsToServe.push("./".concat(sylkDocsPath, "/").concat(json.project.packageName, "/sylk.json"));
            }
            else {
                fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/docusaurus.config.js'), "".concat(siteName, "/docusaurus.config.js"));
                fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/sylk.json'), "".concat(siteName, "/sylk/TodoAppPy/sylk.json"));
            }
            fs_1.default.mkdirSync("".concat(siteName, "/").concat(sylkDocsPath));
            // fs.mkdirSync(`${siteName}/sylk`);
            jsonsToServe.forEach(function (sylkJson) {
                var prjName = sylkJson.split('/')[2];
                fs_1.default.mkdirSync("".concat(siteName, "/").concat(sylkDocsPath, "/").concat(prjName, "/"));
                // fs.mkdirSync(`${siteName}/sylk/${prjName}`);
            });
            if (json) {
                fs_1.default.copyFileSync(options.json, "".concat(siteName, "/").concat(sylkDocsPath, "/").concat(json.project.name, "/sylk.json"));
            }
            fs_1.default.writeFileSync("".concat(siteName, "/docusaurus.config.js"), overrideDocusaurusConfigs(jsonsToServe, sylkDocsPath, sidebarPath, routeBasePath));
            fs_1.default.writeFileSync("".concat(siteName, "/").concat(sidebarPath), '');
            fs_1.default.writeFileSync("".concat(siteName, "/src/css/custom.css"), overrideStyles());
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/landing_page.js'), "".concat(siteName, "/src/pages/index.js"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/landing_page.module.css'), "".concat(siteName, "/src/pages/styles.module.css"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/logo.png'), "".concat(siteName, "/static/img/logo.png"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/favicon.ico'), "".concat(siteName, "/static/img/favicon.ico"));
            console.log('Generating sylk.build doc files for project.');
            try {
                (0, child_process_1.execSync)("cd ".concat(siteName, " && npx docusaurus generate-sylk-docs"), { stdio: 'inherit' });
            }
            catch (err) {
                console.log('Generation of Sylk docs failed.');
                throw err;
            }
            console.log('Successful setup of Docusaurus site with Sylk preset! Try it out with `npm run start` in the site directory.');
            return [2 /*return*/];
        });
    });
}
exports.default = init;
var overrideStyles = function () {
    return "/**\n  * Any CSS included here will be global. The classic template\n  * bundles Infima by default. Infima is a CSS framework designed to\n  * work well for content-centric websites.\n  */\n \n /* You can override the default Infima variables here. */\n :root {\n    --ifm-color-primary: #006000;\n    --ifm-color-primary-dark: #005600;\n    --ifm-color-primary-darker: #005200;\n    --ifm-color-primary-darkest: #004300;\n    --ifm-color-primary-light: #006a00;\n    --ifm-color-primary-lighter: #006e00;\n    --ifm-color-primary-lightest: #007d00;\n   --ifm-code-font-size: 95%;\n   --ifm-pre-background: #f6f8fa;\n  --ifm-hr-border-color: #E5E5E5;\n  --ifm-background-color: white;\n}\n\nhtml[data-theme='light'] .sylk-field {\n  color: #204a87;\n}\n\nhtml[data-theme='dark'] .sylk-field {\n  color: #57E344;\n}\n\n.docusaurus-highlight-code-line {\n  background-color: #091C2E;\n  display: block;\n  margin: 0 calc(-1 * var(--ifm-pre-padding));\n  padding: 0 var(--ifm-pre-padding);\n}\n\nhtml[data-theme='dark'] .docusaurus-highlight-code-line {\n  background-color: #091C2E\n}\n\n[data-theme='dark'] {\n  --ifm-hr-border-color: #30363D;\n  --ifm-color-primary: #2a74e2;\n  --ifm-color-primary-dark: #1d67d4;\n  --ifm-color-primary-darker: #1b61c9;\n  --ifm-color-primary-darkest: #1650a5;\n  --ifm-color-primary-light: #4283e5;\n  --ifm-color-primary-lighter: #4d8be7;\n  --ifm-color-primary-lightest: #71a2ec;\n  --ifm-background-color: #02040a;\n  --ifm-pre-background: #040B11;\n}\n";
};
var overrideDocusaurusConfigs = function (sylkJsonPaths, sylkDocsPath, sidebarPath, routeBasePath) {
    return "/** @type {import('@docusaurus/types').DocusaurusConfig} */\n  module.exports = {\n      title: 'Sylk Docs',\n      tagline: 'Documentation Toolset for Your Sylk Workspace',\n      url: 'https://sylk.build',\n      baseUrl: '/',\n      organizationName: 'sylk-build', // Usually your GitHub org/user name.\n      projectName: 'docusaurus-sylk', // Usually your repo name.\n      onBrokenLinks: 'throw',\n      onBrokenMarkdownLinks: 'warn',\n      favicon: 'img/favicon.ico',\n      themeConfig: {\n        navbar: {\n          title: 'Sylk',\n          logo: {\n            alt: 'Sylk Logo',\n            src: 'img/logo.png',\n          },\n          items: [\n            {\n              to: '".concat(routeBasePath, "/intro',\n              activeBasePath: '").concat(sylkDocsPath, "',\n              label: 'Sylk Docs',\n              position: 'left',\n            },\n            {\n              href: 'https://github.com/sylk-build/docusaurus-sylk',\n              label: 'GitHub',\n              position: 'right',\n            },\n          ],\n        },\n        footer: {\n          style: 'dark',\n          links: [\n            {\n              title: 'Sylk',\n              items: [\n                {\n                  label: 'Overview',\n                  to: 'https://docs.sylk.build/',\n                },\n              ],\n            },\n            {\n              title: 'Guides',\n              items: [\n                {\n                  label: 'Installation',\n                  to: 'https://docs.sylk.build/cli/installation',\n                },\n              ],\n            },\n            {\n              title: 'Community',\n              items: [\n                {\n                  label: 'GitHub',\n                  href: 'https://github.com/sylk-build/sylk',\n                },\n              ],\n            },\n          ],\n          copyright: `Copyright \u00A9 ").concat(new Date().getFullYear(), " Sylk. Built with Docusaurus.`,\n        },\n      },\n      presets: [\n        [\n          '@docusaurus/preset-classic',\n          {\n            docs: {\n              sidebarPath: require.resolve('./sidebars.js'),\n              // Please change this to your repo.\n              editUrl:\n                'https://github.com/facebook/docusaurus/edit/master/website/',\n            },\n            blog: {\n              showReadingTime: true,\n              // Please change this to your repo.\n              editUrl:\n                'https://github.com/facebook/docusaurus/edit/master/website/blog/',\n            },\n            theme: {\n              customCss: require.resolve('./src/css/custom.css'),\n            },\n          },\n        ],\n        [\n          'docusaurus-sylk',\n          {\n            sylk: {\n              sylkJsonPaths: ").concat(sylkJsonPaths.length > 0 ? "".concat(JSON.stringify(sylkJsonPaths)) : '[]', ",\n              sylkDocsPath: '").concat(sylkDocsPath, "',\n              sidebarPath: '").concat(sidebarPath, "'\n            },\n            docs: {\n              routeBasePath: '").concat(routeBasePath, "',\n              sidebarPath: '").concat(sidebarPath, "',\n            }\n          }\n        ]\n      ],\n    };");
};
