"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodsClient = exports.MethodsService = exports.UpdateMethodResponse = exports.UpdateMethodRequest = exports.DeleteMethodRequest = exports.CreateMethodResponse = exports.CreateMethodRequest = exports.GetMethodResponse = exports.GetMethodRequest = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var empty_1 = require("../../../google/protobuf/empty");
var SylkMethod_1 = require("../../SylkMethod/v1/SylkMethod");
function createBaseGetMethodRequest() {
    return { projectId: "", method: "" };
}
exports.GetMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetMethodRequest();
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
                    message.method = reader.string();
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
            method: isSet(object.method) ? String(object.method) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        return obj;
    },
    create: function (base) {
        return exports.GetMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetMethodResponse() {
    return { result: undefined };
}
exports.GetMethodResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetMethodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMethod_1.SylkMethodDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetMethodResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateMethodRequest() {
    return { projectId: "", service: "", method: undefined };
}
exports.CreateMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.method !== undefined) {
            SylkMethod_1.SylkMethod.encode(message.method, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateMethodRequest();
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
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.method = SylkMethod_1.SylkMethod.decode(reader, reader.uint32());
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
            service: isSet(object.service) ? String(object.service) : "",
            method: isSet(object.method) ? SylkMethod_1.SylkMethod.fromJSON(object.method) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        message.method !== undefined && (obj.method = message.method ? SylkMethod_1.SylkMethod.toJSON(message.method) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        message.method = (object.method !== undefined && object.method !== null)
            ? SylkMethod_1.SylkMethod.fromPartial(object.method)
            : undefined;
        return message;
    },
};
function createBaseCreateMethodResponse() {
    return { result: undefined };
}
exports.CreateMethodResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateMethodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMethod_1.SylkMethodDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCreateMethodResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseDeleteMethodRequest() {
    return { projectId: "", method: "" };
}
exports.DeleteMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteMethodRequest();
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
                    message.method = reader.string();
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
            method: isSet(object.method) ? String(object.method) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        return obj;
    },
    create: function (base) {
        return exports.DeleteMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateMethodRequest() {
    return { projectId: "", method: "", update: undefined };
}
exports.UpdateMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        if (message.update !== undefined) {
            SylkMethod_1.SylkMethod.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMethodRequest();
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
                    message.method = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkMethod_1.SylkMethod.decode(reader, reader.uint32());
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
            method: isSet(object.method) ? String(object.method) : "",
            update: isSet(object.update) ? SylkMethod_1.SylkMethod.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        message.update !== undefined && (obj.update = message.update ? SylkMethod_1.SylkMethod.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkMethod_1.SylkMethod.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateMethodResponse() {
    return { method: "", updated: undefined };
}
exports.UpdateMethodResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.method !== "") {
            writer.uint32(10).string(message.method);
        }
        if (message.updated !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMethodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updated = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
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
            method: isSet(object.method) ? String(object.method) : "",
            updated: isSet(object.updated) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.method !== undefined && (obj.method = message.method);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkMethod_1.SylkMethodDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateMethodResponse();
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
exports.MethodsService = {
    /** [sylk] - None */
    getMethod: {
        path: "/sylk.Methods.v2.Methods/GetMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.GetMethodResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.GetMethodResponse.decode(value); },
    },
    /** [sylk] - None */
    createMethod: {
        path: "/sylk.Methods.v2.Methods/CreateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.CreateMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.CreateMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.CreateMethodResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.CreateMethodResponse.decode(value); },
    },
    /** [sylk] - None */
    updateMethod: {
        path: "/sylk.Methods.v2.Methods/UpdateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.UpdateMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.UpdateMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.UpdateMethodResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.UpdateMethodResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteMethod: {
        path: "/sylk.Methods.v2.Methods/DeleteMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.DeleteMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.DeleteMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(empty_1.Empty.encode(value).finish()); },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); },
    },
};
exports.MethodsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MethodsService, "sylk.Methods.v2.Methods");
function isSet(value) {
    return value !== null && value !== undefined;
}
