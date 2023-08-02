"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsClient = exports.FieldsService = exports.DeleteFieldRequest = exports.UpdateFieldResponse = exports.UpdateFieldRequest = exports.CreateFieldResponse = exports.CreateFieldRequest = exports.GetFieldResponse = exports.GetFieldRequest = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
const SylkField_1 = require("../../SylkField/v1/SylkField");
function createBaseGetFieldRequest() {
    return { projectId: "", package: "", field: "" };
}
exports.GetFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.field !== "") {
            writer.uint32(26).string(message.field);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFieldRequest();
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
                    message.field = reader.string();
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
            field: isSet(object.field) ? String(object.field) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.field !== undefined && (obj.field = message.field);
        return obj;
    },
    create(base) {
        return exports.GetFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGetFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.field = (_c = object.field) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseGetFieldResponse() {
    return { result: undefined };
}
exports.GetFieldResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFieldResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkField_1.SylkFieldDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkField_1.SylkFieldDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetFieldResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateFieldRequest() {
    return { projectId: "", package: "", field: undefined };
}
exports.CreateFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.field !== undefined) {
            SylkField_1.SylkField.encode(message.field, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateFieldRequest();
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
                    message.field = SylkField_1.SylkField.decode(reader, reader.uint32());
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
            field: isSet(object.field) ? SylkField_1.SylkField.fromJSON(object.field) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.field !== undefined && (obj.field = message.field ? SylkField_1.SylkField.toJSON(message.field) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.field = (object.field !== undefined && object.field !== null)
            ? SylkField_1.SylkField.fromPartial(object.field)
            : undefined;
        return message;
    },
};
function createBaseCreateFieldResponse() {
    return { result: undefined };
}
exports.CreateFieldResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateFieldResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkField_1.SylkFieldDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkField_1.SylkFieldDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateFieldResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateFieldRequest() {
    return { projectId: "", package: "", field: "", update: undefined, isOneof: false };
}
exports.UpdateFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.field !== "") {
            writer.uint32(26).string(message.field);
        }
        if (message.update !== undefined) {
            SylkField_1.SylkField.encode(message.update, writer.uint32(34).fork()).ldelim();
        }
        if (message.isOneof === true) {
            writer.uint32(40).bool(message.isOneof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateFieldRequest();
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
                    message.field = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.update = SylkField_1.SylkField.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isOneof = reader.bool();
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
            field: isSet(object.field) ? String(object.field) : "",
            update: isSet(object.update) ? SylkField_1.SylkField.fromJSON(object.update) : undefined,
            isOneof: isSet(object.isOneof) ? Boolean(object.isOneof) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.field !== undefined && (obj.field = message.field);
        message.update !== undefined && (obj.update = message.update ? SylkField_1.SylkField.toJSON(message.update) : undefined);
        message.isOneof !== undefined && (obj.isOneof = message.isOneof);
        return obj;
    },
    create(base) {
        return exports.UpdateFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.field = (_c = object.field) !== null && _c !== void 0 ? _c : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkField_1.SylkField.fromPartial(object.update)
            : undefined;
        message.isOneof = (_d = object.isOneof) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseUpdateFieldResponse() {
    return { field: "", updated: undefined };
}
exports.UpdateFieldResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.field !== "") {
            writer.uint32(10).string(message.field);
        }
        if (message.updated !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateFieldResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updated = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
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
            field: isSet(object.field) ? String(object.field) : "",
            updated: isSet(object.updated) ? SylkField_1.SylkFieldDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.field !== undefined && (obj.field = message.field);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkField_1.SylkFieldDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateFieldResponse();
        message.field = (_a = object.field) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteFieldRequest() {
    return { projectId: "", package: "", field: "", isOneof: false };
}
exports.DeleteFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.field !== "") {
            writer.uint32(26).string(message.field);
        }
        if (message.isOneof === true) {
            writer.uint32(32).bool(message.isOneof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteFieldRequest();
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
                    message.field = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isOneof = reader.bool();
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
            field: isSet(object.field) ? String(object.field) : "",
            isOneof: isSet(object.isOneof) ? Boolean(object.isOneof) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.field !== undefined && (obj.field = message.field);
        message.isOneof !== undefined && (obj.isOneof = message.isOneof);
        return obj;
    },
    create(base) {
        return exports.DeleteFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDeleteFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.field = (_c = object.field) !== null && _c !== void 0 ? _c : "";
        message.isOneof = (_d = object.isOneof) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
exports.FieldsService = {
    /** [sylk] - None */
    getField: {
        path: "/sylk.Fields.v2.Fields/GetField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetFieldResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetFieldResponse.decode(value),
    },
    /** [sylk] - None */
    createField: {
        path: "/sylk.Fields.v2.Fields/CreateField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateFieldResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateFieldResponse.decode(value),
    },
    /** [sylk] - None */
    updateField: {
        path: "/sylk.Fields.v2.Fields/UpdateField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdateFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdateFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdateFieldResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdateFieldResponse.decode(value),
    },
    /** [sylk] - None */
    deleteField: {
        path: "/sylk.Fields.v2.Fields/DeleteField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
};
exports.FieldsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FieldsService, "sylk.Fields.v2.Fields");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=Fields.js.map