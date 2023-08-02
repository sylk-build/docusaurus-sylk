"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsClient = exports.TagsService = exports.UntagResourceRequest = exports.ListTagsRequest = exports.TagResourceRequest = exports.UpdateTagRequest = exports.DeleteTagRequest = exports.CreateTagRequest = exports.GetTagRequest = exports.Tag = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var empty_1 = require("../../../google/protobuf/empty");
function createBaseTag() {
    return { name: "" };
}
exports.Tag = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTag();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
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
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create: function (base) {
        return exports.Tag.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseTag();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTagRequest() {
    return { projectId: "", package: "", name: "" };
}
exports.GetTagRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetTagRequest();
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
            package: isSet(object.package) ? String(object.package) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create: function (base) {
        return exports.GetTagRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseGetTagRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCreateTagRequest() {
    return { projectId: "", package: "", tag: undefined };
}
exports.CreateTagRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.tag !== undefined) {
            exports.Tag.encode(message.tag, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateTagRequest();
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
                    message.tag = exports.Tag.decode(reader, reader.uint32());
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
            tag: isSet(object.tag) ? exports.Tag.fromJSON(object.tag) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.tag !== undefined && (obj.tag = message.tag ? exports.Tag.toJSON(message.tag) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateTagRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateTagRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.tag = (object.tag !== undefined && object.tag !== null) ? exports.Tag.fromPartial(object.tag) : undefined;
        return message;
    },
};
function createBaseDeleteTagRequest() {
    return { projectId: "", package: "", name: "" };
}
exports.DeleteTagRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteTagRequest();
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
            package: isSet(object.package) ? String(object.package) : "",
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    create: function (base) {
        return exports.DeleteTagRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDeleteTagRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUpdateTagRequest() {
    return { update: undefined, tag: "", projectId: "", package: "" };
}
exports.UpdateTagRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.update !== undefined) {
            exports.Tag.encode(message.update, writer.uint32(10).fork()).ldelim();
        }
        if (message.tag !== "") {
            writer.uint32(18).string(message.tag);
        }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(34).string(message.package);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateTagRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.update = exports.Tag.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tag = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
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
            update: isSet(object.update) ? exports.Tag.fromJSON(object.update) : undefined,
            tag: isSet(object.tag) ? String(object.tag) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.update !== undefined && (obj.update = message.update ? exports.Tag.toJSON(message.update) : undefined);
        message.tag !== undefined && (obj.tag = message.tag);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create: function (base) {
        return exports.UpdateTagRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUpdateTagRequest();
        message.update = (object.update !== undefined && object.update !== null)
            ? exports.Tag.fromPartial(object.update)
            : undefined;
        message.tag = (_a = object.tag) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseTagResourceRequest() {
    return { projectId: "", package: "", tag: "", resource: "" };
}
exports.TagResourceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.tag !== "") {
            writer.uint32(26).string(message.tag);
        }
        if (message.resource !== "") {
            writer.uint32(34).string(message.resource);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTagResourceRequest();
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
                    message.tag = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resource = reader.string();
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
            tag: isSet(object.tag) ? String(object.tag) : "",
            resource: isSet(object.resource) ? String(object.resource) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.tag !== undefined && (obj.tag = message.tag);
        message.resource !== undefined && (obj.resource = message.resource);
        return obj;
    },
    create: function (base) {
        return exports.TagResourceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTagResourceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.tag = (_c = object.tag) !== null && _c !== void 0 ? _c : "";
        message.resource = (_d = object.resource) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseListTagsRequest() {
    return { projectId: "", package: "" };
}
exports.ListTagsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListTagsRequest();
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
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create: function (base) {
        return exports.ListTagsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseListTagsRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUntagResourceRequest() {
    return { projectId: "", package: "", tag: "", resource: "" };
}
exports.UntagResourceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.tag !== "") {
            writer.uint32(26).string(message.tag);
        }
        if (message.resource !== "") {
            writer.uint32(34).string(message.resource);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUntagResourceRequest();
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
                    message.tag = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resource = reader.string();
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
            tag: isSet(object.tag) ? String(object.tag) : "",
            resource: isSet(object.resource) ? String(object.resource) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.tag !== undefined && (obj.tag = message.tag);
        message.resource !== undefined && (obj.resource = message.resource);
        return obj;
    },
    create: function (base) {
        return exports.UntagResourceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUntagResourceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.tag = (_c = object.tag) !== null && _c !== void 0 ? _c : "";
        message.resource = (_d = object.resource) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
exports.TagsService = {
    /** [sylk] - None */
    getTag: {
        path: "/sylk.Tags.v2.Tags/GetTag",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.GetTagRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.GetTagRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Tag.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Tag.decode(value); },
    },
    /** [sylk] - None */
    updateTag: {
        path: "/sylk.Tags.v2.Tags/UpdateTag",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.UpdateTagRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.UpdateTagRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Tag.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Tag.decode(value); },
    },
    /** [sylk] - None */
    createTag: {
        path: "/sylk.Tags.v2.Tags/CreateTag",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.CreateTagRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.CreateTagRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Tag.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Tag.decode(value); },
    },
    /** [sylk] - None */
    deleteTag: {
        path: "/sylk.Tags.v2.Tags/DeleteTag",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.DeleteTagRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.DeleteTagRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(empty_1.Empty.encode(value).finish()); },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); },
    },
    /** [sylk] - None */
    tagResource: {
        path: "/sylk.Tags.v2.Tags/TagResource",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.TagResourceRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.TagResourceRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(empty_1.Empty.encode(value).finish()); },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); },
    },
    /** [sylk] - None */
    listTags: {
        path: "/sylk.Tags.v2.Tags/ListTags",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(exports.ListTagsRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.ListTagsRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(exports.Tag.encode(value).finish()); },
        responseDeserialize: function (value) { return exports.Tag.decode(value); },
    },
    /** [sylk] - None */
    untagResource: {
        path: "/sylk.Tags.v2.Tags/UntagResource",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(exports.UntagResourceRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return exports.UntagResourceRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(empty_1.Empty.encode(value).finish()); },
        responseDeserialize: function (value) { return empty_1.Empty.decode(value); },
    },
};
exports.TagsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.TagsService, "sylk.Tags.v2.Tags");
function isSet(value) {
    return value !== null && value !== undefined;
}
