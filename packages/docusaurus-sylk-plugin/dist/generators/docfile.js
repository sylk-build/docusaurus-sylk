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
var SylkClient_1 = require("../sylk/protos/SylkClient");
var SylkServer_1 = require("../sylk/protos/SylkServer");
var utils_1 = require("../utils");
var listify = function (obj, mapFn) {
    return Object.entries(obj).reduce(function (acc, _a) {
        var k = _a[0], v = _a[1];
        acc.push(mapFn(k, v));
        return acc;
    }, []);
};
var generateSylkIntroFile = function (sylkDescriptor) {
    return generateSylkProjectInro(sylkDescriptor);
};
exports.generateSylkIntroFile = generateSylkIntroFile;
var generateSylkProjectInro = function (sylkDescriptors) { return (__spreadArray([
    {
        fileContents: generateDocSylkContents(sylkDescriptors),
        fileName: 'index',
    }
], sylkDescriptors.map(function (sylk) {
    var _a;
    return ({
        fileContents: generateDocProjectContents(sylk),
        fileName: "".concat((_a = sylk.project) === null || _a === void 0 ? void 0 : _a.name, "/index"),
        resourceDescriptor: {
            resource: sylk.project
        }
    });
}), true)); };
var generateDocSylkContents = function (sylks) {
    return ("---\ntitle: Sylk Docs\nhide_title: true\n---\n\n# Sylk Generated Docs\n\n".concat(sylks.map(function (s) { var _a, _b; return "[".concat((_a = s.project) === null || _a === void 0 ? void 0 : _a.name, "](").concat((_b = s.project) === null || _b === void 0 ? void 0 : _b.name, ")"); }).join('\n\n'), "\n"));
};
var generateDocProjectContents = function (sylkDescriptor) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ("---\ntitle: ".concat((0, utils_1.getLeafFileName)(sylkDescriptor.project ? sylkDescriptor.project.name : 'Sylk'), "\nhide_title: true\n---\n\n# ").concat((0, utils_1.getLeafFileName)(sylkDescriptor.project ? sylkDescriptor.project.name : 'Sylk'), " Docs\n\n**Project Package** ").concat((_a = sylkDescriptor.project) === null || _a === void 0 ? void 0 : _a.packageName, "\n").concat(((_b = sylkDescriptor.project) === null || _b === void 0 ? void 0 : _b.goPackage) ? '- Go Package: ' + ((_c = sylkDescriptor.project) === null || _c === void 0 ? void 0 : _c.goPackage) : '', "\n\n**Server** ").concat((0, SylkServer_1.sylkServerLanguagesToJSON)((_e = (_d = sylkDescriptor.project) === null || _d === void 0 ? void 0 : _d.server) === null || _e === void 0 ? void 0 : _e.language), "\n\n**Clients** ").concat((_f = sylkDescriptor.project) === null || _f === void 0 ? void 0 : _f.clients.map(function (c) { return (0, SylkClient_1.sylkClientLanguagesToJSON)(c.language); }).join(', '), "\n\n## Services\nThe ").concat((_g = sylkDescriptor.project) === null || _g === void 0 ? void 0 : _g.name, " conssists of the services listed below:\n\n***\n\n").concat(Object.keys(sylkDescriptor.services).map(function (svc) { return '\n\n### ' + svc + '\n' + generateServiceDetailsSectionMdx(sylkDescriptor.services[svc]); }).join(""), "\n\n## Packages\nThe ").concat((_h = sylkDescriptor.project) === null || _h === void 0 ? void 0 : _h.name, " schema is listed below:\n\n***\n\n").concat(Object.keys(sylkDescriptor.packages).map(function (pkg) { var _a; return '\n\n### ' + ((_a = pkg.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('.')[0]) + '\n' + generatePackageDetailsSectionMdx(sylkDescriptor.packages[pkg]); }).join(""), "\n\n"));
};
var generateSylkDocFiles = function (sylkDescriptor) {
    var packages = sylkDescriptor.packages, services = sylkDescriptor.services;
    return __spreadArray(__spreadArray([], listify(packages, function (key, value) { return ({ resource: __assign({}, value) }); }), true), listify(services, function (key, value) { return ({ resource: __assign({}, value) }); }), true).map(generateDocFile);
};
exports.generateSylkDocFiles = generateSylkDocFiles;
var generateDocFile = function (resourceDescriptor) {
    var _a, _b;
    return ({
        fileContents: resourceDescriptor.resource.type === 'packages'
            ? generateDocPackageContents(resourceDescriptor.resource)
            : generateDocServiceContents(resourceDescriptor.resource),
        fileName: "".concat(resourceDescriptor.resource.type, "/").concat(resourceDescriptor.resource.name, "/").concat(resourceDescriptor.resource.fullName ? resourceDescriptor.resource.fullName.split('.')[2] : (_b = (_a = resourceDescriptor.resource) === null || _a === void 0 ? void 0 : _a.package) === null || _b === void 0 ? void 0 : _b.split('.')[2]),
        resourceDescriptor: resourceDescriptor,
    });
};
var generateDocServiceContents = function (serviceDescriptor) {
    return ("---\ntitle: ".concat((0, utils_1.getVersionFileName)(serviceDescriptor.fullName), "\nhide_title: true\n---\nimport { SylkMethodsProto } from '@theme/SylkProto/SylkProto';\n\n# `").concat((0, utils_1.getLeafFileName)(serviceDescriptor.name), "`\n\n**Full Name** ").concat(serviceDescriptor.fullName, "\n\n<SylkMethodsProto dependencies={").concat(JSON.stringify(serviceDescriptor.dependencies), "} methods={").concat(JSON.stringify(serviceDescriptor.methods), "} />\n"));
};
var generateDocPackageContents = function (fileDescriptor) {
    // TODO: run through prettier for consistent formatting.
    return ("---\ntitle: ".concat((0, utils_1.getVersionFileName)(fileDescriptor.package), "\nhide_title: true\n---\nimport { SylkMessageProto, SylkEnumProto } from '@theme/SylkProto/SylkProto';\n\n# `").concat((0, utils_1.getLeafFileName)(fileDescriptor.name), "`\n_**path** ").concat(fileDescriptor.name, "_\n\n_**package** ").concat(fileDescriptor.package, "_\n\n").concat(fileDescriptor.description, "\n\n---\n\n").concat([
        generateMessageSectionMdx(fileDescriptor.messages, fileDescriptor.dependencies),
        generateEnumSectionMdx(fileDescriptor.enums),
    ].filter(Boolean).map(function (section) { return section + "\n---\n"; }).join(""), "\n\n  "));
};
var generateMessageSectionMdx = function (messages, dependencies) {
    if (messages.length == 0) {
        return null;
    }
    return ("## Messages\n\n".concat(messages.map(function (message, i) { return ("\n### `".concat(message.name, "`\n<SylkMessageProto packageDep={").concat(JSON.stringify(dependencies), "} key={").concat(i, "} message={").concat(JSON.stringify(message), "} />\n")); }).join("\n")));
};
var generateEnumSectionMdx = function (enums) {
    if (enums.length == 0) {
        return null;
    }
    return ("## Enums\n\n".concat(enums.map(function (enumb, i) { return ("\n### `".concat(enumb.name, "`\n<SylkEnumProto key={").concat(i, "} enumb={").concat(JSON.stringify(enumb), "} />\n")); }).join("\n")));
};
var generateServiceSectionMdx = function (services) {
    if (services.length == 0) {
        return null;
    }
    return ("## Services\n\n".concat(services.map(function (service, i) { return ("\n### `".concat(service.name, "`\n\n").concat(service.description, "\n\n").concat(service.methods.map(function (method, i) { return ("\n#### `".concat(method.name, "`\n<ProtoServiceMethod key={'").concat(method.name, "-").concat(i, "'} method={").concat(JSON.stringify(method), "} />\n")); }).join("\n"), "\n")); }).join("\n")));
};
var generateServiceDetailsSectionMdx = function (service) {
    return ("[`".concat(service.fullName, "`](services/").concat(service.name, "/").concat(service.fullName.split('.').pop(), ") - ").concat(service.description));
};
var generatePackageDetailsSectionMdx = function (pack) {
    return ("[`".concat(pack.package, "`](packages/").concat(pack.name, "/").concat(pack.package.split('.').pop(), ") - ").concat(pack.description));
};
