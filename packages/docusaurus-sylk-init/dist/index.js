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
var DEFAULT_TEMPLATE = 'classic';
function init(siteName) {
    return __awaiter(this, void 0, void 0, function () {
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
            fs_1.default.mkdirSync("".concat(siteName, "/sylkdocs"));
            fs_1.default.mkdirSync("".concat(siteName, "/sylk"));
            fs_1.default.writeFileSync("".concat(siteName, "/sidebarsSylkdocs.js"), '');
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/docusaurus.config.js'), "".concat(siteName, "/docusaurus.config.js"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/sylk.json'), "".concat(siteName, "/sylk/TodoApp/sylk.json"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/landing_page.js'), "".concat(siteName, "/src/pages/index.js"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/landing_page.module.css'), "".concat(siteName, "/src/pages/styles.module.css"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/logo.png'), "".concat(siteName, "/static/img/logo.png"));
            fs_1.default.copyFileSync(path_1.default.resolve(__dirname, 'templates/favicon.ico'), "".concat(siteName, "/static/img/favicon.ico"));
            console.log('Generating Sylk doc files for sample fixtures.');
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
