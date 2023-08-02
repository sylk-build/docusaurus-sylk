"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersClient = exports.FoldersService = exports.UpdatePackageResponse = exports.UpdateFolderRequest = exports.DeleteFolderRequest = exports.ListFoldersRequest = exports.CreateFolderRequest = exports.GetFolderRequest = exports.Folder = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var empty_1 = require("../../../google/protobuf/empty");
var SylkPackage_1 = require("../../SylkPackage/v2/SylkPackage");
function createBaseFolder() {
    return { name: "", path: "", packages: [], folders: [], description: "" };
}
exports.Folder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        for (var _i = 0, _f = message.packages; _i < _f.length; _i++) {
            var v = _f[_i];
            SylkPackage_1.SylkPackage.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (var _g = 0, _h = message.folders; _g < _h.length; _g++) {
            var v = _h[_g];
            exports.Folder.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFolder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.packages.push(SylkPackage_1.SylkPackage.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.folders.push(exports.Folder.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            path: isSet(object.path) ? String(object.path) : "",
            packages: Array.isArray(object === null || object === void 0 ? void 0 : object.packages) ? object.packages.map(function (e) { return SylkPackage_1.SylkPackage.fromJSON(e); }) : [],
            folders: Array.isArray(object === null || object === void 0 ? void 0 : object.folders) ? object.folders.map(function (e) { return exports.Folder.fromJSON(e); }) : [],
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.path !== undefined && (obj.path = message.path);
        if (message.packages) {
            obj.packages = message.packages.map(function (e) { return e ? SylkPackage_1.SylkPackage.toJSON(e) : undefined; });
        }
        else {
            obj.packages = [];
        }
        if (message.folders) {
            obj.folders = message.folders.map(function (e) { return e ? exports.Folder.toJSON(e) : undefined; });
        }
        else {
            obj.folders = [];
        }
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    create: function (base) {
        return exports.Folder.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseFolder();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.packages = ((_c = object.packages) === null || _c === void 0 ? void 0 : _c.map(function (e) { return SylkPackage_1.SylkPackage.fromPartial(e); })) || [];
        message.folders = ((_d = object.folders) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.Folder.fromPartial(e); })) || [];
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseGetFolderRequest() {
    return { projectId: "", path: "" };
}
exports.GetFolderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetFolderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            path: isSet(object.path) ? String(object.path) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    create: function (base) {
        return exports.GetFolderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetFolderRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateFolderRequest() {
    return { folder: undefined, projectId: "" };
}
exports.CreateFolderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.folder !== undefined) {
            exports.Folder.encode(message.folder, writer.uint32(10).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateFolderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.folder = exports.Folder.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            folder: isSet(object.folder) ? exports.Folder.fromJSON(object.folder) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.folder !== undefined && (obj.folder = message.folder ? exports.Folder.toJSON(message.folder) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.CreateFolderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateFolderRequest();
        message.folder = (object.folder !== undefined && object.folder !== null)
            ? exports.Folder.fromPartial(object.folder)
            : undefined;
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListFoldersRequest() {
    return { projectId: "" };
}
exports.ListFoldersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListFoldersRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.ListFoldersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListFoldersRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteFolderRequest() {
    return { projectId: "", folderPath: "" };
}
exports.DeleteFolderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.folderPath !== "") {
            writer.uint32(18).string(message.folderPath);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteFolderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.folderPath = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            folderPath: isSet(object.folderPath) ? String(object.folderPath) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.folderPath !== undefined && (obj.folderPath = message.folderPath);
        return obj;
    },
    create: function (base) {
        return exports.DeleteFolderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteFolderRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.folderPath = (_b = object.folderPath) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateFolderRequest() {
    return { projectId: "", path: "", name: "" };
}
exports.UpdateFolderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateFolderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.path = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            path: isSet(object.path) ? String(object.path) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.path !== undefined && (obj.path = message.path);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create: function (base) {
        return exports.UpdateFolderRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUpdateFolderRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.path = (_b = object.path) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUpdatePackageResponse() {
    return { projectId: "", package: "", updated: undefined };
}
exports.UpdatePackageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.updated !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdatePackageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            updated: isSet(object.updated) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkPackage_1.SylkPackageDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdatePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdatePackageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
exports.FoldersService = {
    /** [sylk] - None */
    getFolder: {
        path: "/sylk.Folders.v2.Folders/GetFolder",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetFolderRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetFolderRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Folder.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Folder.decode(value); },
    },
    /** [sylk] - None */
    createFolder: {
        path: "/sylk.Folders.v2.Folders/CreateFolder",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.CreateFolderRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.CreateFolderRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Folder.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Folder.decode(value); },
    },
    /** [sylk] - None */
    listFolders: {
        path: "/sylk.Folders.v2.Folders/ListFolders",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(exports.ListFoldersRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.ListFoldersRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Folder.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Folder.decode(value); },
    },
    /** [sylk] - None */
    deleteFolder: {
        path: "/sylk.Folders.v2.Folders/DeleteFolder",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.DeleteFolderRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.DeleteFolderRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(empty_1.Empty.encode(value).finish()); },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); },
    },
    /** [sylk] - None */
    updateFolder: {
        path: "/sylk.Folders.v2.Folders/UpdateFolder",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.UpdateFolderRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.UpdateFolderRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Folder.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Folder.decode(value); },
    },
};
exports.FoldersClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FoldersService, "sylk.Folders.v2.Folders");
function isSet(value) {
    return value !== null && value !== undefined;
}
