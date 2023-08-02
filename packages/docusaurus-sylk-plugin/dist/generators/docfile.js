"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSylkDocFiles = exports.generateSylkIntroFile = void 0;
var SylkClient_1 = require("../sylk/protos/sylk/SylkClient/v1/SylkClient");
var SylkEnum_1 = require("../sylk/protos/sylk/SylkEnum/v2/SylkEnum");
var SylkServer_1 = require("../sylk/protos/sylk/SylkServer/v1/SylkServer");
var utils_1 = require("../utils");
var listify = function (obj, mapFn, inlines) {
    return Object.entries(obj).reduce(function (acc, _a) {
        var k = _a[0], v = _a[1];
        acc.push(__assign(__assign({}, mapFn(k, v)), { inlines: inlines === null || inlines === void 0 ? void 0 : inlines.filter(function (i) { return i.fullName.includes(k.replace('/', '.')); }) }));
        return acc;
    }, []);
};
var generateSylkIntroFile = function (sylkDescriptor, sylkDocsPath, sylkRoutePath) {
    return generateSylkProjectInro(sylkDescriptor, sylkDocsPath, sylkRoutePath);
};
exports.generateSylkIntroFile = generateSylkIntroFile;
var parseFileName = function (resource) {
    var resourcePath = resource.fullName.split('.').slice(0, resource.fullName.split('.').length - 1);
    resourcePath = resourcePath.join('/');
    var fileName = resource.tag ? resource.tag : resource.fullName.split('.')[resource.fullName.split('.').length - 2];
    return "Proto File: [".concat(resourcePath, "/").concat(fileName, ".proto](").concat(resourcePath, ")");
};
var generateSylkProjectInro = function (sylkDescriptors, sylkDocsPath, sylkRoutePath) { return (__spreadArray([
    {
        fileContents: generateDocSylkContents(sylkDescriptors, sylkDocsPath),
        fileName: 'index',
    }
], sylkDescriptors.map(function (sylk) {
    var _a;
    return ({
        fileContents: generateDocProjectContents(sylk, sylkRoutePath),
        fileName: "".concat((_a = sylk.project) === null || _a === void 0 ? void 0 : _a.name, "/index"),
        resourceDescriptor: {
            resource: sylk.project
        }
    });
}), true)); };
var generateDocSylkContents = function (sylks, sylkDocsPath) {
    return ("---\ntitle: Sylk Docs\nhide_title: true\n---\n\n# Sylk Generated Docs\n\n".concat(sylks.map(function (s) { var _a, _b; return "[".concat((_a = s.project) === null || _a === void 0 ? void 0 : _a.name, "](./").concat((_b = s.project) === null || _b === void 0 ? void 0 : _b.name, "/index)"); }).join('\n\n'), "\n"));
};
var generateDocProjectContents = function (sylkDescriptor, sylkRoutePath) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ("---\ntitle: ".concat((0, utils_1.getLeafFileName)(sylkDescriptor.project ? sylkDescriptor.project.name : 'Sylk'), "\nhide_title: true\n---\n\n# ").concat((0, utils_1.getLeafFileName)(sylkDescriptor.project ? sylkDescriptor.project.name : 'Sylk'), " Docs\n\n**Project Package** ").concat((_a = sylkDescriptor.project) === null || _a === void 0 ? void 0 : _a.packageName, "\n").concat(((_b = sylkDescriptor.project) === null || _b === void 0 ? void 0 : _b.goPackage) ? '- Go Package: ' + ((_c = sylkDescriptor.project) === null || _c === void 0 ? void 0 : _c.goPackage) : '', "\n\n**Server** ").concat((0, SylkServer_1.sylkServerLanguagesToJSON)((_e = (_d = sylkDescriptor.project) === null || _d === void 0 ? void 0 : _d.server) === null || _e === void 0 ? void 0 : _e.language), "\n\n**Clients** ").concat((_f = sylkDescriptor.project) === null || _f === void 0 ? void 0 : _f.clients.map(function (c) { return (0, SylkClient_1.sylkClientLanguagesToJSON)(c.language); }).join(', '), "\n\n## Packages\nThe ").concat((_g = sylkDescriptor.project) === null || _g === void 0 ? void 0 : _g.name, " schema is listed below:\n\n***\n\n").concat(Object.keys(sylkDescriptor.packages).map(function (pkg) { var _a; return '\n\n### ' + ((_a = pkg.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('.')[0]) + '\n' + generatePackageDetailsSectionMdx(sylkDescriptor.packages[pkg], sylkRoutePath); }).join(""), "\n\n"));
};
var generateSylkDocFiles = function (sylkDescriptor, inlines) {
    var packages = sylkDescriptor.packages;
    return __spreadArray([], listify(packages, function (key, value) { return ({ resource: __assign({}, value) }); }, inlines), true).map(generateDocFile);
};
exports.generateSylkDocFiles = generateSylkDocFiles;
var generateDocFile = function (resourceDescriptor) {
    var _a, _b;
    return ({
        fileContents: resourceDescriptor.resource.type === 'package'
            ? generateDocPackageContents(resourceDescriptor.resource, resourceDescriptor.inlines)
            : generateDocServiceContents(resourceDescriptor.resource),
        fileName: "".concat(resourceDescriptor.resource.fullName ? resourceDescriptor.resource.fullName.split('.').slice(1).join('/') : (_b = (_a = resourceDescriptor.resource) === null || _a === void 0 ? void 0 : _a.package) === null || _b === void 0 ? void 0 : _b.split('.').slice(1).join('/')),
        resourceDescriptor: resourceDescriptor,
    });
};
var generateDocServiceContents = function (serviceDescriptor) {
    return ("---\ntitle: ".concat((0, utils_1.getVersionFileName)(serviceDescriptor.fullName), "\nhide_title: true\n---\nimport { SylkMethodsProto } from '@theme/SylkProto/SylkProto';\n\n# `").concat((0, utils_1.getLeafFileName)(serviceDescriptor.name), "`\n\n**Full Name** ").concat(serviceDescriptor.fullName, "\n\n<SylkMethodsProto dependencies={").concat(JSON.stringify(serviceDescriptor.dependencies), "} methods={").concat(JSON.stringify(serviceDescriptor.methods), "} />\n"));
};
var _decodeEnum = function (enm) {
    var encodeCache = SylkEnum_1.SylkEnum.decode(enm.value);
    return encodeCache;
};
var generateDocPackageContents = function (fileDescriptor, inlines) {
    // TODO: run through prettier for consistent formatting.
    var enumInlines = inlines === null || inlines === void 0 ? void 0 : inlines.filter(function (i) { return i['@type'].includes('SylkEnum'); }).map(function (i) { return SylkEnum_1.SylkEnum.fromPartial(i); });
    enumInlines = enumInlines && (enumInlines === null || enumInlines === void 0 ? void 0 : enumInlines.length) > 0 ? enumInlines : [];
    return ("---\ntitle: ".concat((0, utils_1.getVersionFileName)(fileDescriptor.package), "\nhide_title: true\n---\nimport { SylkMessageProto, SylkEnumProto, FileLink } from '@theme/SylkProto/SylkProto';\n\n# `").concat((0, utils_1.getLeafFileName)(fileDescriptor.name), "`\n_**path** ").concat(fileDescriptor.name, "_\n\n_**package** ").concat(fileDescriptor.package, "_\n\n").concat(fileDescriptor.description, "\n\n---\n\n").concat([
        generateMessageSectionMdx(fileDescriptor.messages, fileDescriptor.dependencies),
        generateEnumSectionMdx(__spreadArray(__spreadArray([], fileDescriptor.enums, true), enumInlines, true)),
    ].filter(Boolean).map(function (section) { return section + "\n---\n"; }).join(""), "\n\n  "));
};
var generateMessageSectionMdx = function (messages, dependencies) {
    if (messages.length == 0) {
        return null;
    }
    return ("## Messages\n\n".concat(messages.map(function (message, i) { return ("\n### `".concat(message.name, "`\n").concat(parseFileName(message), "\n<SylkMessageProto packageDep={").concat(JSON.stringify(dependencies), "} key={").concat(i, "} message={").concat(JSON.stringify(message), "} />\n")); }).join("\n")));
};
var generateEnumSectionMdx = function (enums) {
    if (enums.length == 0) {
        return null;
    }
    return ("## Enums\n\n".concat(enums.map(function (enumb, i) { return ("\n### `".concat(enumb.name, "`\n").concat(parseFileName(enumb), "\n<SylkEnumProto key={").concat(i, "} enumb={").concat(JSON.stringify(enumb), "} />\n")); }).join("\n")));
};
var generateServiceSectionMdx = function (services) {
    if (services.length == 0) {
        return null;
    }
    return ("## Services\n\n".concat(services.map(function (service, i) { return ("\n### `".concat(service.name, "`\n").concat(parseFileName(service), "\n\n").concat(service.description, "\n\n").concat(service.methods.map(function (method, i) { return ("\n#### `".concat(method.name, "`\n<ProtoServiceMethod key={'").concat(method.name, "-").concat(i, "'} method={").concat(JSON.stringify(method), "} />\n")); }).join("\n"), "\n")); }).join("\n")));
};
var generateServiceDetailsSectionMdx = function (service, apiName) {
    return ("[`".concat(service.fullName, "`](").concat(apiName, "/services/").concat(service.name, "/").concat(service.fullName.split('.').pop(), ") - ").concat(service.description));
};
var generatePackageDetailsSectionMdx = function (pack, apiName) {
    return ("[`".concat(pack.package, "`](./").concat(pack.package.split('.').slice(1).join('/'), ") - ").concat(pack.description));
};
