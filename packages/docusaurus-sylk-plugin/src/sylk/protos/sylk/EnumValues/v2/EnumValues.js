"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValuesClient = exports.EnumValuesService = exports.DeleteEnumValueRequest = exports.UpdateEnumValueResponse = exports.UpdateEnumValueRequest = exports.CreateEnumValueResponse = exports.CreateEnumValueRequest = exports.GetEnumValueResponse = exports.GetEnumValueRequest = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
const SylkEnumValue_1 = require("../../SylkEnumValue/v1/SylkEnumValue");
function createBaseGetEnumValueRequest() {
    return { projectId: "", package: "", enumValue: "" };
}
exports.GetEnumValueRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create(base) {
        return exports.GetEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetEnumValueRequest();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEnumValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetEnumValueResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            enumValue: isSet(object.enumValue) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.enumValue) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enumValue !== undefined &&
            (obj.enumValue = message.enumValue ? SylkEnumValue_1.SylkEnumValue.toJSON(message.enumValue) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateEnumValueRequest();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateEnumValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateEnumValueResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            package: isSet(object.package) ? String(object.package) : "",
            update: isSet(object.update) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.package !== undefined && (obj.package = message.package);
        message.update !== undefined && (obj.update = message.update ? SylkEnumValue_1.SylkEnumValue.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateEnumValueRequest();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateEnumValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            updated: isSet(object.updated) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateEnumValueResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.DeleteEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeleteEnumValueRequest();
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
        requestSerialize: (value) => Buffer.from(exports.GetEnumValueRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetEnumValueRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetEnumValueResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetEnumValueResponse.decode(value),
    },
    /** [sylk] - None */
    createEnumValue: {
        path: "/sylk.EnumValues.v2.EnumValues/CreateEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateEnumValueRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateEnumValueRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateEnumValueResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateEnumValueResponse.decode(value),
    },
    /** [sylk] - None */
    updateEnumValue: {
        path: "/sylk.EnumValues.v2.EnumValues/UpdateEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateEnumValueRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateEnumValueRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateEnumValueResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateEnumValueResponse.decode(value),
    },
    /** [sylk] - None */
    deleteEnumValue: {
        path: "/sylk.EnumValues.v2.EnumValues/DeleteEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteEnumValueRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteEnumValueRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.EnumValuesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EnumValuesService, "sylk.EnumValues.v2.EnumValues");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=EnumValues.js.map