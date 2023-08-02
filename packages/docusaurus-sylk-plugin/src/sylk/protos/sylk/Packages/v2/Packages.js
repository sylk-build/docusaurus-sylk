"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesClient = exports.PackagesService = exports.UpdatePackageResponse = exports.UpdatePackageRequest = exports.DeletePackageRequest = exports.CreatePackageResponse = exports.CreatePackageRequest = exports.GetPackageResponse = exports.GetPackageRequest = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../google/protobuf/empty");
const SylkPackage_1 = require("../../SylkPackage/v2/SylkPackage");
function createBaseGetPackageRequest() {
    return { projectId: "", package: "" };
}
exports.GetPackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPackageRequest();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.GetPackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetPackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetPackageResponse() {
    return { result: undefined };
}
exports.GetPackageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPackageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
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
        return { result: isSet(object.result) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkPackage_1.SylkPackageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetPackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetPackageResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreatePackageRequest() {
    return { projectId: "", package: undefined, tags: [] };
}
exports.CreatePackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.package, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.tags) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePackageRequest();
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
                    message.package = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tags.push(reader.string());
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
            package: isSet(object.package) ? SylkPackage_1.SylkPackage.fromJSON(object.package) : undefined,
            tags: Array.isArray(object === null || object === void 0 ? void 0 : object.tags) ? object.tags.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package ? SylkPackage_1.SylkPackage.toJSON(message.package) : undefined);
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        return obj;
    },
    create(base) {
        return exports.CreatePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreatePackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (object.package !== undefined && object.package !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.package)
            : undefined;
        message.tags = ((_b = object.tags) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseCreatePackageResponse() {
    return { projectId: "", result: undefined };
}
exports.CreatePackageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.result !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePackageResponse();
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
                    message.result = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
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
            result: isSet(object.result) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.result !== undefined &&
            (obj.result = message.result ? SylkPackage_1.SylkPackageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreatePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreatePackageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseDeletePackageRequest() {
    return { projectId: "", package: "" };
}
exports.DeletePackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePackageRequest();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.DeletePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeletePackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdatePackageRequest() {
    return { projectId: "", package: "", update: undefined };
}
exports.UpdatePackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.update !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePackageRequest();
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
                    message.update = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
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
            update: isSet(object.update) ? SylkPackage_1.SylkPackage.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.update !== undefined && (obj.update = message.update ? SylkPackage_1.SylkPackage.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdatePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdatePackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdatePackageResponse() {
    return { projectId: "", package: "", updated: undefined };
}
exports.UpdatePackageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.updated !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePackageResponse();
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
                    message.updated = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
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
            updated: isSet(object.updated) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkPackage_1.SylkPackageDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdatePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdatePackageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
exports.PackagesService = {
    /** [sylk] - None */
    getPackage: {
        path: "/sylk.Packages.v2.Packages/GetPackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetPackageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetPackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetPackageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetPackageResponse.decode(value),
    },
    /** [sylk] - None */
    createPackage: {
        path: "/sylk.Packages.v2.Packages/CreatePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreatePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreatePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreatePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreatePackageResponse.decode(value),
    },
    /** [sylk] - None */
    deletePackage: {
        path: "/sylk.Packages.v2.Packages/DeletePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeletePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeletePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(empty_1.Empty.encode(value).finish()),
        responseDeserialize: (value) => empty_1.Empty.decode(value),
    },
    /** [sylk] - None */
    updatePackage: {
        path: "/sylk.Packages.v2.Packages/UpdatePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.UpdatePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.UpdatePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.UpdatePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.UpdatePackageResponse.decode(value),
    },
};
exports.PackagesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PackagesService, "sylk.Packages.v2.Packages");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=Packages.js.map