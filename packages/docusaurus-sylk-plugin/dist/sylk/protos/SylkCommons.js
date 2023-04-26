"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkContext = exports.SylkFileContext = exports.SylkMethodContext = exports.sylkExtensionsToJSON = exports.sylkExtensionsFromJSON = exports.SylkExtensions = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkCommons.v1.SylkExtensions] - */
var SylkExtensions;
(function (SylkExtensions) {
    /** DEFAULT_SYLKEXTENSIONS - [sylk.SylkCommons.v1.SylkExtensions] - sylk.descriptor/enum_value */
    SylkExtensions[SylkExtensions["DEFAULT_SYLKEXTENSIONS"] = 0] = "DEFAULT_SYLKEXTENSIONS";
    /** FileOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    SylkExtensions[SylkExtensions["FileOptions"] = 1] = "FileOptions";
    /** MessageOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    SylkExtensions[SylkExtensions["MessageOptions"] = 2] = "MessageOptions";
    /** FieldOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    SylkExtensions[SylkExtensions["FieldOptions"] = 3] = "FieldOptions";
    /** ServiceOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    SylkExtensions[SylkExtensions["ServiceOptions"] = 4] = "ServiceOptions";
    /** MethodOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    SylkExtensions[SylkExtensions["MethodOptions"] = 5] = "MethodOptions";
    SylkExtensions[SylkExtensions["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SylkExtensions = exports.SylkExtensions || (exports.SylkExtensions = {}));
function sylkExtensionsFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SYLKEXTENSIONS":
            return SylkExtensions.DEFAULT_SYLKEXTENSIONS;
        case 1:
        case "FileOptions":
            return SylkExtensions.FileOptions;
        case 2:
        case "MessageOptions":
            return SylkExtensions.MessageOptions;
        case 3:
        case "FieldOptions":
            return SylkExtensions.FieldOptions;
        case 4:
        case "ServiceOptions":
            return SylkExtensions.ServiceOptions;
        case 5:
        case "MethodOptions":
            return SylkExtensions.MethodOptions;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SylkExtensions.UNRECOGNIZED;
    }
}
exports.sylkExtensionsFromJSON = sylkExtensionsFromJSON;
function sylkExtensionsToJSON(object) {
    switch (object) {
        case SylkExtensions.DEFAULT_SYLKEXTENSIONS:
            return "DEFAULT_SYLKEXTENSIONS";
        case SylkExtensions.FileOptions:
            return "FileOptions";
        case SylkExtensions.MessageOptions:
            return "MessageOptions";
        case SylkExtensions.FieldOptions:
            return "FieldOptions";
        case SylkExtensions.ServiceOptions:
            return "ServiceOptions";
        case SylkExtensions.MethodOptions:
            return "MethodOptions";
        case SylkExtensions.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sylkExtensionsToJSON = sylkExtensionsToJSON;
function createBaseSylkMethodContext() {
    return { name: "", code: "", type: "" };
}
exports.SylkMethodContext = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        if (message.type !== "") {
            writer.uint32(26).string(message.type);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkMethodContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.code = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            code: isSet(object.code) ? String(object.code) : "",
            type: isSet(object.type) ? String(object.type) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.code !== undefined && (obj.code = message.code);
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    create: function (base) {
        return exports.SylkMethodContext.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSylkMethodContext();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.code = (_b = object.code) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseSylkFileContext() {
    return { file: "", methods: [], code: Buffer.alloc(0) };
}
exports.SylkFileContext = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.file !== "") {
            writer.uint32(10).string(message.file);
        }
        for (var _i = 0, _d = message.methods; _i < _d.length; _i++) {
            var v = _d[_i];
            exports.SylkMethodContext.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.code.length !== 0) {
            writer.uint32(26).bytes(message.code);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkFileContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.file = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.methods.push(exports.SylkMethodContext.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.code = reader.bytes();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            file: isSet(object.file) ? String(object.file) : "",
            methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(function (e) { return exports.SylkMethodContext.fromJSON(e); }) : [],
            code: isSet(object.code) ? Buffer.from(bytesFromBase64(object.code)) : Buffer.alloc(0),
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.file !== undefined && (obj.file = message.file);
        if (message.methods) {
            obj.methods = message.methods.map(function (e) { return e ? exports.SylkMethodContext.toJSON(e) : undefined; });
        }
        else {
            obj.methods = [];
        }
        message.code !== undefined &&
            (obj.code = base64FromBytes(message.code !== undefined ? message.code : Buffer.alloc(0)));
        return obj;
    },
    create: function (base) {
        return exports.SylkFileContext.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSylkFileContext();
        message.file = (_a = object.file) !== null && _a !== void 0 ? _a : "";
        message.methods = ((_b = object.methods) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.SylkMethodContext.fromPartial(e); })) || [];
        message.code = (_c = object.code) !== null && _c !== void 0 ? _c : Buffer.alloc(0);
        return message;
    },
};
function createBaseSylkContext() {
    return { files: [] };
}
exports.SylkContext = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _d = message.files; _i < _d.length; _i++) {
            var v = _d[_i];
            exports.SylkFileContext.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.files.push(exports.SylkFileContext.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { files: Array.isArray(object === null || object === void 0 ? void 0 : object.files) ? object.files.map(function (e) { return exports.SylkFileContext.fromJSON(e); }) : [] };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.files) {
            obj.files = message.files.map(function (e) { return e ? exports.SylkFileContext.toJSON(e) : undefined; });
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.SylkContext.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSylkContext();
        message.files = ((_a = object.files) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.SylkFileContext.fromPartial(e); })) || [];
        return message;
    },
};
var tsProtoGlobalThis = (function () {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        var bin = tsProtoGlobalThis.atob(b64);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        var bin_1 = [];
        arr.forEach(function (byte) {
            bin_1.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin_1.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
