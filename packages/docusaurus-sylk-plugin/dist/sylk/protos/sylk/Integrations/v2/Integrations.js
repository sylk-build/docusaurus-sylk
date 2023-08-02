"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsClient = exports.IntegrationsService = exports.GetIntegrationResponse = exports.GetIntegrationRequest = exports.Integration = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var any_1 = require("../../../google/protobuf/any");
function createBaseIntegration() {
    return { orgId: "", installedBy: "", active: false, data: undefined };
}
exports.Integration = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.installedBy !== "") {
            writer.uint32(18).string(message.installedBy);
        }
        if (message.active === true) {
            writer.uint32(24).bool(message.active);
        }
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseIntegration();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.installedBy = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.active = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            installedBy: isSet(object.installedBy) ? String(object.installedBy) : "",
            active: isSet(object.active) ? Boolean(object.active) : false,
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.installedBy !== undefined && (obj.installedBy = message.installedBy);
        message.active !== undefined && (obj.active = message.active);
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.Integration.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseIntegration();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.installedBy = (_b = object.installedBy) !== null && _b !== void 0 ? _b : "";
        message.active = (_c = object.active) !== null && _c !== void 0 ? _c : false;
        message.data = (object.data !== undefined && object.data !== null) ? any_1.Any.fromPartial(object.data) : undefined;
        return message;
    },
};
function createBaseGetIntegrationRequest() {
    return { id: "" };
}
exports.GetIntegrationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetIntegrationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create: function (base) {
        return exports.GetIntegrationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetIntegrationRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetIntegrationResponse() {
    return { integration: undefined };
}
exports.GetIntegrationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.integration !== undefined) {
            exports.Integration.encode(message.integration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetIntegrationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.integration = exports.Integration.decode(reader, reader.uint32());
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
        return { integration: isSet(object.integration) ? exports.Integration.fromJSON(object.integration) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.integration !== undefined &&
            (obj.integration = message.integration ? exports.Integration.toJSON(message.integration) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetIntegrationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetIntegrationResponse();
        message.integration = (object.integration !== undefined && object.integration !== null)
            ? exports.Integration.fromPartial(object.integration)
            : undefined;
        return message;
    },
};
exports.IntegrationsService = {
    /** [sylk] - None */
    getIntegration: {
        path: "/sylk.Integrations.v2.Integrations/GetIntegration",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetIntegrationRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetIntegrationRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.GetIntegrationResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.GetIntegrationResponse.decode(value); },
    },
};
exports.IntegrationsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.IntegrationsService, "sylk.Integrations.v2.Integrations");
function isSet(value) {
    return value !== null && value !== undefined;
}
