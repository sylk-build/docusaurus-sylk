"use strict";
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
exports.generateSidebarFileCategory = exports.generateSidebarFileContents = void 0;
var generateSidebarFileContents = function (sidebarItems) {
    // TODO: run through prettier for consistent formatting.
    return "\nmodule.exports = ".concat(JSON.stringify(generateSidebarObject(sidebarItems), null, 2), ";\n  ");
};
exports.generateSidebarFileContents = generateSidebarFileContents;
var generateSidebarObject = function (sidebarItems) {
    return {
        sylkdocs: __spreadArray([], sidebarItems, true)
    };
};
var generateSidebarFileCategory = function (docFiles, apiName) {
    var fileDirectory = buildFileDirectory(docFiles);
    compactFileDirectory(fileDirectory);
    var sidebarObject = convertDirectoryToSidebar(fileDirectory, apiName);
    var sidebarItems = sidebarObject.label == '/' ? sidebarObject.items : [sidebarObject];
    var index = {
        type: 'doc',
        label: 'Project',
        id: apiName
    };
    var items = sidebarObject.items ? sidebarObject.items : [];
    return {
        type: 'category',
        label: apiName,
        // link: {
        //   type:'doc',
        //   id:`${apiName}/intro`
        // },
        items: __spreadArray([index], items, true),
    };
};
exports.generateSidebarFileCategory = generateSidebarFileCategory;
// build nested file directory map
// eg. /one/two/hello.proto
// => { name: 'one', nested: [{ name: 'two', files: ['hello.proto'] }] }
var buildFileDirectory = function (files) {
    var root = { name: '', fullName: '' };
    files.forEach(function (file) {
        // split by folder names
        var splitFilePath = file.fileName.split("/");
        // remove last item, which is the .proto file.
        var relevantSplitFilePath = splitFilePath.slice(0, splitFilePath.length - 1);
        // initialize nested directories
        var current = root;
        relevantSplitFilePath.forEach(function (folder) {
            var _a;
            current.nested || (current.nested = {});
            (_a = current.nested)[folder] || (_a[folder] = { name: folder, fullName: "".concat(current.fullName, "/").concat(folder) });
            current = current.nested[folder];
        });
        // push file into current which is now the leaf folder node
        current.files || (current.files = []);
        current.files.push(file);
    });
    return root;
};
// compact file directory so that each directory has either
// - two or more subfolders OR
// - contains at least one file
// eg. /one/two/hello.proto
// { name: 'one/two', files: ['hello.proto'] }
var compactFileDirectory = function (fileDir) {
    var _a;
    if (!(fileDir && fileDir.nested))
        return;
    // loop nested packages while they can be compacted (length 1)
    while (fileDir.nested && Object.keys(fileDir.nested).length === 1) {
        // compact directory with nested. eg. { protobuf: { example: {} } -> { 'protobuf.example': {} }
        var nestedDir = fileDir.nested[Object.keys(fileDir.nested)[0]];
        // concat name
        fileDir.name = fileDir.name === '' ? nestedDir.name : "".concat(fileDir.name, "/").concat(nestedDir.name);
        // override fullName with nested
        fileDir.fullName = nestedDir.fullName;
        // bubble up files
        if (nestedDir.files) {
            fileDir.files || (fileDir.files = []);
            (_a = fileDir.files).push.apply(_a, nestedDir.files);
        }
        // bubble up nested
        fileDir.nested = nestedDir.nested;
    }
    if (fileDir.nested) {
        // continue compacting for all remaining nested
        Object.keys(fileDir.nested).forEach(function (dir) {
            compactFileDirectory(fileDir.nested[dir]);
        });
    }
};
// convert FileDirectory to a docusaurus sidebar object
var convertDirectoryToSidebar = function (fileDir, apiName) {
    var _a;
    var _b;
    // construct category
    var nestedResourceType = fileDir.files ? (_b = fileDir.files[0].resourceDescriptor) === null || _b === void 0 ? void 0 : _b.resource.type : 'sylkRoot';
    // console.log(fileDir.files?.map(f => f.resourceDescriptor?.resource.fullName?.split('.').pop()?.split('v')[1]))
    var sidebarItem = {
        type: 'category',
        label: fileDir.name,
    };
    // if(nestedResourceType !== 'sylkRoot') {
    //   sidebarItem.link = {
    //     type:'doc',
    //     id: fileDir.name.split('/').length>1 ? `${apiName}/${fileDir.name}/v1` : `${apiName}/${nestedResourceType}/${fileDir.name}/v1`
    //   }
    // }
    // assign nested category items
    if (fileDir.nested) {
        Object.keys(fileDir.nested).forEach(function (nestedKey) {
            var nested = fileDir.nested[nestedKey];
            var nestedSidebarItem = convertDirectoryToSidebar(nested, apiName);
            sidebarItem.items || (sidebarItem.items = []);
            sidebarItem.items.push(nestedSidebarItem);
        });
    }
    // assign file doc items
    if (fileDir.files) {
        sidebarItem.items || (sidebarItem.items = []);
        (_a = sidebarItem.items).push.apply(_a, fileDir.files.map(function (file) { return ({
            type: 'doc',
            id: "".concat(apiName, "/").concat(file.fileName),
            // label: file.fileName.split("/").pop()
        }); }));
    }
    return sidebarItem;
};
