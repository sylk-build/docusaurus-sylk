"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesClient = exports.ServicesService = exports.UpdateServiceResponse = exports.UpdateServiceRequest = exports.DeleteServiceRequest = exports.CreateServiceResponse = exports.CreateServiceRequest = exports.GetServiceResponse = exports.GetServiceRequest = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
const SylkService_1 = require("../../SylkService/v2/SylkService");
function createBaseGetServiceRequest() {
    return { projectId: "", service: "" };
}
exports.GetServiceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetServiceRequest();
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
                    message.service = reader.string();
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
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create(base) {
        return exports.GetServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetServiceResponse() {
    return { result: undefined };
}
exports.GetServiceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetServiceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkService_1.SylkServiceDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkService_1.SylkServiceDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetServiceResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateServiceRequest() {
    return { projectId: "", service: undefined };
}
exports.CreateServiceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== undefined) {
            SylkService_1.SylkService.encode(message.service, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateServiceRequest();
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
                    message.service = SylkService_1.SylkService.decode(reader, reader.uint32());
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
            service: isSet(object.service) ? SylkService_1.SylkService.fromJSON(object.service) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service ? SylkService_1.SylkService.toJSON(message.service) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (object.service !== undefined && object.service !== null)
            ? SylkService_1.SylkService.fromPartial(object.service)
            : undefined;
        return message;
    },
};
function createBaseCreateServiceResponse() {
    return { result: undefined };
}
exports.CreateServiceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateServiceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkService_1.SylkServiceDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkService_1.SylkServiceDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateServiceResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseDeleteServiceRequest() {
    return { projectId: "", service: "" };
}
exports.DeleteServiceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteServiceRequest();
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
                    message.service = reader.string();
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
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create(base) {
        return exports.DeleteServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateServiceRequest() {
    return { projectId: "", service: "", update: undefined };
}
exports.UpdateServiceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.update !== undefined) {
            SylkService_1.SylkService.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateServiceRequest();
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
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkService_1.SylkService.decode(reader, reader.uint32());
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
            service: isSet(object.service) ? String(object.service) : "",
            update: isSet(object.update) ? SylkService_1.SylkService.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        message.update !== undefined && (obj.update = message.update ? SylkService_1.SylkService.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkService_1.SylkService.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateServiceResponse() {
    return { projectId: "", service: "", updated: undefined };
}
exports.UpdateServiceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.updated !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateServiceResponse();
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
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
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
            service: isSet(object.service) ? String(object.service) : "",
            updated: isSet(object.updated) ? SylkService_1.SylkServiceDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkService_1.SylkServiceDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateServiceResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
exports.ServicesService = {
    /** [sylk] - None */
    getService: {
        path: "/sylk.Services.v2.Services/GetService",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetServiceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetServiceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetServiceResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetServiceResponse.decode(value),
    },
    /** [sylk] - None */
    deleteService: {
        path: "/sylk.Services.v2.Services/DeleteService",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteServiceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteServiceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
    /** [sylk] - None */
    createService: {
        path: "/sylk.Services.v2.Services/CreateService",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateServiceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateServiceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateServiceResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateServiceResponse.decode(value),
    },
    /** [sylk] - None */
    updateService: {
        path: "/sylk.Services.v2.Services/UpdateService",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateServiceRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateServiceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateServiceResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateServiceResponse.decode(value),
    },
};
exports.ServicesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ServicesService, "sylk.Services.v2.Services");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=Services.js.map