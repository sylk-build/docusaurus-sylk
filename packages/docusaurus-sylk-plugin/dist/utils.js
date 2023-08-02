"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersionFileName = exports.getLeafFileName = exports.shortenFileName = void 0;
// convert google/protobuf/any.proto to /goo/pro/any.proto
var shortenFileName = function (fileName) {
    var splitName = fileName.split("/");
    return splitName
        .map(function (name, i) { return i == (splitName.length - 1) ? name : name.substr(0, 3); })
        .join("/");
};
exports.shortenFileName = shortenFileName;
// convert google/protobuf/any.proto to any.proto
var getLeafFileName = function (fileName) {
    return fileName.split("/").pop();
};
exports.getLeafFileName = getLeafFileName;
var getVersionFileName = function (fullName) {
    return fullName ? fullName.split('.').pop() : fullName;
};
exports.getVersionFileName = getVersionFileName;
