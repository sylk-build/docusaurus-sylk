"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesClient = exports.MessagesService = exports.DeleteMessageRequest = exports.UpdateMessageResponse = exports.UpdateMessageRequest = exports.CreateMessageResponse = exports.CreateMessageRequest = exports.GetMessageResponse = exports.GetMessageRequest = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
const SylkMessage_1 = require("../../SylkMessage/v2/SylkMessage");
function createBaseGetMessageRequest() {
    return { projectId: "", message: "", package: "" };
}
exports.GetMessageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.package !== "") {
            writer.uint32(26).string(message.package);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMessageRequest();
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
                    message.message = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.GetMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGetMessageResponse() {
    return { result: undefined };
}
exports.GetMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMessage_1.SylkMessageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMessageResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateMessageRequest() {
    return { projectId: "", message: undefined, package: "" };
}
exports.CreateMessageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== undefined) {
            SylkMessage_1.SylkMessage.encode(message.message, writer.uint32(18).fork()).ldelim();
        }
        if (message.package !== "") {
            writer.uint32(26).string(message.package);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMessageRequest();
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
                    message.message = SylkMessage_1.SylkMessage.decode(reader, reader.uint32());
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
            message: isSet(object.message) ? SylkMessage_1.SylkMessage.fromJSON(object.message) : undefined,
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message ? SylkMessage_1.SylkMessage.toJSON(message.message) : undefined);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.CreateMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (object.message !== undefined && object.message !== null)
            ? SylkMessage_1.SylkMessage.fromPartial(object.message)
            : undefined;
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateMessageResponse() {
    return { result: undefined };
}
exports.CreateMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMessage_1.SylkMessageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateMessageResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateMessageRequest() {
    return { projectId: "", message: "", package: "", update: undefined };
}
exports.UpdateMessageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.package !== "") {
            writer.uint32(26).string(message.package);
        }
        if (message.update !== undefined) {
            SylkMessage_1.SylkMessage.encode(message.update, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMessageRequest();
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
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.update = SylkMessage_1.SylkMessage.decode(reader, reader.uint32());
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
            message: isSet(object.message) ? String(object.message) : "",
            package: isSet(object.package) ? String(object.package) : "",
            update: isSet(object.update) ? SylkMessage_1.SylkMessage.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.package !== undefined && (obj.package = message.package);
        message.update !== undefined && (obj.update = message.update ? SylkMessage_1.SylkMessage.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkMessage_1.SylkMessage.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateMessageResponse() {
    return { message: "", updated: undefined };
}
exports.UpdateMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== "") {
            writer.uint32(10).string(message.message);
        }
        if (message.updated !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updated = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
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
            message: isSet(object.message) ? String(object.message) : "",
            updated: isSet(object.updated) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkMessage_1.SylkMessageDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateMessageResponse();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteMessageRequest() {
    return { projectId: "", message: "", package: "" };
}
exports.DeleteMessageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.package !== "") {
            writer.uint32(26).string(message.package);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMessageRequest();
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
                    message.message = reader.string();
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
            message: isSet(object.message) ? String(object.message) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.DeleteMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDeleteMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
exports.MessagesService = {
    /** [sylk] - None */
    getMessage: {
        path: "/sylk.Messages.v2.Messages/GetMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetMessageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetMessageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetMessageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetMessageResponse.decode(value),
    },
    /** [sylk] - None */
    createMessage: {
        path: "/sylk.Messages.v2.Messages/CreateMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateMessageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateMessageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateMessageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateMessageResponse.decode(value),
    },
    /** [sylk] - None */
    updateMessage: {
        path: "/sylk.Messages.v2.Messages/UpdateMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateMessageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateMessageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateMessageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateMessageResponse.decode(value),
    },
    /** [sylk] - None */
    deleteMessage: {
        path: "/sylk.Messages.v2.Messages/DeleteMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteMessageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteMessageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.MessagesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MessagesService, "sylk.Messages.v2.Messages");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=Messages.js.map