"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSidebarFileCategory = exports.generateSylkIntroFile = exports.generateSylkDocFiles = exports.generateSidebarFileContents = void 0;
var sidebar_1 = require("./generators/sidebar");
Object.defineProperty(exports, "generateSidebarFileContents", { enumerable: true, get: function () { return sidebar_1.generateSidebarFileContents; } });
Object.defineProperty(exports, "generateSidebarFileCategory", { enumerable: true, get: function () { return sidebar_1.generateSidebarFileCategory; } });
var docfile_1 = require("./generators/docfile");
Object.defineProperty(exports, "generateSylkDocFiles", { enumerable: true, get: function () { return docfile_1.generateSylkDocFiles; } });
Object.defineProperty(exports, "generateSylkIntroFile", { enumerable: true, get: function () { return docfile_1.generateSylkIntroFile; } });
