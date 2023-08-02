"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValuesClient = exports.EnumValuesService = exports.DeleteEnumValueRequest = exports.UpdateEnumValueResponse = exports.UpdateEnumValueRequest = exports.CreateEnumValueResponse = exports.CreateEnumValueRequest = exports.GetEnumValueResponse = exports.GetEnumValueRequest = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var empty_1 = require("../../../google/protobuf/empty");
var SylkEnumValue_1 = require("../../SylkEnumValue/v1/SylkEnumValue");
function createBaseGetEnumValueRequest() {
    return { projectId: "", package: "", enumValue: "" };
}
exports.GetEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enumValue !== "") {
            writer.uint32(26).string(message.enumValue);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumValueRequest();
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
                    message.enumValue = reader.string();
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
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGetEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.enumValue = (_c = object.enumValue) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGetEnumValueResponse() {
    return { result: undefined };
}
exports.GetEnumValueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumValueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetEnumValueResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumValueRequest() {
    return { projectId: "", package: "", enumValue: undefined };
}
exports.CreateEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enumValue !== undefined) {
            SylkEnumValue_1.SylkEnumValue.encode(message.enumValue, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumValueRequest();
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
                    message.enumValue = SylkEnumValue_1.SylkEnumValue.decode(reader, reader.uint32());
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
            enumValue: isSet(object.enumValue) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.enumValue) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enumValue !== undefined &&
            (obj.enumValue = message.enumValue ? SylkEnumValue_1.SylkEnumValue.toJSON(message.enumValue) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.enumValue = (object.enumValue !== undefined && object.enumValue !== null)
            ? SylkEnumValue_1.SylkEnumValue.fromPartial(object.enumValue)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumValueResponse() {
    return { result: undefined };
}
exports.CreateEnumValueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumValueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCreateEnumValueResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumValueRequest() {
    return { projectId: "", enumValue: "", package: "", update: undefined };
}
exports.UpdateEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        if (message.package !== "") {
            writer.uint32(34).string(message.package);
        }
        if (message.update !== undefined) {
            SylkEnumValue_1.SylkEnumValue.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumValueRequest();
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
                    message.enumValue = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkEnumValue_1.SylkEnumValue.decode(reader, reader.uint32());
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
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            package: isSet(object.package) ? String(object.package) : "",
            update: isSet(object.update) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.package !== undefined && (obj.package = message.package);
        message.update !== undefined && (obj.update = message.update ? SylkEnumValue_1.SylkEnumValue.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUpdateEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkEnumValue_1.SylkEnumValue.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumValueResponse() {
    return { projectId: "", enumValue: "", updated: undefined };
}
exports.UpdateEnumValueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        if (message.updated !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumValueResponse();
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
                    message.enumValue = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
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
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            updated: isSet(object.updated) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateEnumValueResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteEnumValueRequest() {
    return { projectId: "", enumValue: "", package: "" };
}
exports.DeleteEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        if (message.package !== "") {
            writer.uint32(26).string(message.package);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteEnumValueRequest();
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
                    message.enumValue = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.package = reader.string();
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
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create: function (base) {
        return exports.DeleteEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDeleteEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
exports.EnumValuesService = {
    /** [sylk] - None */
    getEnumValue: {
        path: "/sylk.EnumValues.v2.EnumValues/GetEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.GetEnumValueResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.GetEnumValueResponse.decode(value); },
    },
    /** [sylk] - None */
    createEnumValue: {
        path: "/sylk.EnumValues.v2.EnumValues/CreateEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.CreateEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.CreateEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.CreateEnumValueResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.CreateEnumValueResponse.decode(value); },
    },
    /** [sylk] - None */
    updateEnumValue: {
        path: "/sylk.EnumValues.v2.EnumValues/UpdateEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.UpdateEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.UpdateEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.UpdateEnumValueResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.UpdateEnumValueResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteEnumValue: {
        path: "/sylk.EnumValues.v2.EnumValues/DeleteEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.DeleteEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.DeleteEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(empty_1.Empty.encode(value).finish()); },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); },
    },
};
exports.EnumValuesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EnumValuesService, "sylk.EnumValues.v2.EnumValues");
function isSet(value) {
    return value !== null && value !== undefined;
}
