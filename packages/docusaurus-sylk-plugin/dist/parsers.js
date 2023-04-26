"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFileDescriptors = void 0;
var parseFileDescriptors = function (source, routeBasePath) {
    // TODO: add joi validations
    var parsed = source;
    var messageLinkMap = {};
    var serviceLinkMap = {};
    var enumLinkMap = {};
    var generateLink = function (fileName, objName) {
        // NOTE: ensure prefixed with '/'
        var routeBase = routeBasePath.startsWith('/') ? routeBasePath : "/".concat(routeBasePath);
        return "".concat(routeBase === '/' ? '' : routeBase, "/").concat(fileName, "#").concat(objName.toLowerCase().replace(/\./g, ''));
    };
    // derive link maps
    parsed.files.forEach(function (file) {
        file.messages.forEach(function (msg) {
            messageLinkMap[msg.fullName] = generateLink(file.name, msg.longName);
        });
        file.services.forEach(function (srv) {
            serviceLinkMap[srv.fullName] = generateLink(file.name, srv.name);
        });
        file.enums.forEach(function (enumb) {
            enumLinkMap[enumb.fullName] = generateLink(file.name, enumb.longName);
        });
    });
    // assign links based on derived maps
    parsed.files.forEach(function (file) {
        file.messages.forEach(function (msg) {
            msg.fields.forEach(function (field) {
                field.typeLink = messageLinkMap[field.fullType] || enumLinkMap[field.fullType];
            });
        });
        file.services.forEach(function (srv) {
            srv.methods.forEach(function (meth) {
                meth.requestTypeLink = messageLinkMap[meth.requestFullType];
                meth.responseTypeLink = messageLinkMap[meth.responseFullType];
            });
        });
    });
    return parsed;
};
exports.parseFileDescriptors = parseFileDescriptors;
