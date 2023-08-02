"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumsClient = exports.EnumsService = exports.UpdateEnumResponse = exports.UpdateEnumRequest = exports.DeleteEnumRequest = exports.CreateEnumResponse = exports.CreateEnumRequest = exports.GetEnumResponse = exports.GetEnumRequest = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var empty_1 = require("../../../google/protobuf/empty");
var SylkEnum_1 = require("../../SylkEnum/v2/SylkEnum");
function createBaseGetEnumRequest() {
    return { projectId: "", package: "", enum: "" };
}
exports.GetEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enum !== "") {
            writer.uint32(26).string(message.enum);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumRequest();
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
                    message.enum = reader.string();
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
            enum: isSet(object.enum) ? String(object.enum) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enum !== undefined && (obj.enum = message.enum);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGetEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.enum = (_c = object.enum) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGetEnumResponse() {
    return { result: undefined };
}
exports.GetEnumResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkEnum_1.SylkEnumDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetEnumResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumRequest() {
    return { projectId: "", package: "", enum: undefined };
}
exports.CreateEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enum !== undefined) {
            SylkEnum_1.SylkEnum.encode(message.enum, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumRequest();
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
                    message.enum = SylkEnum_1.SylkEnum.decode(reader, reader.uint32());
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
            enum: isSet(object.enum) ? SylkEnum_1.SylkEnum.fromJSON(object.enum) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enum !== undefined && (obj.enum = message.enum ? SylkEnum_1.SylkEnum.toJSON(message.enum) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.enum = (object.enum !== undefined && object.enum !== null) ? SylkEnum_1.SylkEnum.fromPartial(object.enum) : undefined;
        return message;
    },
};
function createBaseCreateEnumResponse() {
    return { result: undefined };
}
exports.CreateEnumResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkEnum_1.SylkEnumDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCreateEnumResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseDeleteEnumRequest() {
    return { projectId: "", package: "", enum: "" };
}
exports.DeleteEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enum !== "") {
            writer.uint32(26).string(message.enum);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteEnumRequest();
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
                    message.enum = reader.string();
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
            enum: isSet(object.enum) ? String(object.enum) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enum !== undefined && (obj.enum = message.enum);
        return obj;
    },
    create: function (base) {
        return exports.DeleteEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDeleteEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.enum = (_c = object.enum) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUpdateEnumRequest() {
    return { projectId: "", package: "", enum: "", update: undefined };
}
exports.UpdateEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enum !== "") {
            writer.uint32(26).string(message.enum);
        }
        if (message.update !== undefined) {
            SylkEnum_1.SylkEnum.encode(message.update, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumRequest();
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
                    message.enum = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.update = SylkEnum_1.SylkEnum.decode(reader, reader.uint32());
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
            enum: isSet(object.enum) ? String(object.enum) : "",
            update: isSet(object.update) ? SylkEnum_1.SylkEnum.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enum !== undefined && (obj.enum = message.enum);
        message.update !== undefined && (obj.update = message.update ? SylkEnum_1.SylkEnum.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUpdateEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.enum = (_c = object.enum) !== null && _c !== void 0 ? _c : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkEnum_1.SylkEnum.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumResponse() {
    return { projectId: "", enum: "", update: undefined };
}
exports.UpdateEnumResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.update !== undefined) {
            SylkEnum_1.SylkEnum.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumResponse();
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
                    message.enum = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkEnum_1.SylkEnum.decode(reader, reader.uint32());
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
            enum: isSet(object.enum) ? String(object.enum) : "",
            update: isSet(object.update) ? SylkEnum_1.SylkEnum.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        message.update !== undefined && (obj.update = message.update ? SylkEnum_1.SylkEnum.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateEnumResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkEnum_1.SylkEnum.fromPartial(object.update)
            : undefined;
        return message;
    },
};
exports.EnumsService = {
    /** [sylk] - None */
    getEnum: {
        path: "/sylk.Enums.v2.Enums/GetEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.GetEnumResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.GetEnumResponse.decode(value); },
    },
    /** [sylk] - None */
    createEnum: {
        path: "/sylk.Enums.v2.Enums/CreateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.CreateEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.CreateEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.CreateEnumResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.CreateEnumResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteEnum: {
        path: "/sylk.Enums.v2.Enums/DeleteEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.DeleteEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.DeleteEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(empty_1.Empty.encode(value).finish()); },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); },
    },
    /** [sylk] - None */
    updateEnum: {
        path: "/sylk.Enums.v2.Enums/UpdateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.UpdateEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.UpdateEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.UpdateEnumResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.UpdateEnumResponse.decode(value); },
    },
};
exports.EnumsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EnumsService, "sylk.Enums.v2.Enums");
function isSet(value) {
    return value !== null && value !== undefined;
}
