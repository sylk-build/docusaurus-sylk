"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkEnumDisplay = exports.SylkEnum = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
const SylkEnumValue_1 = require("../../SylkEnumValue/v1/SylkEnumValue");
function createBaseSylkEnum() {
    return { type: "", kind: "", description: "", values: [], name: "", uri: "", fullName: "", tag: "" };
}
exports.SylkEnum = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(50).string(message.type);
        }
        if (message.kind !== "") {
            writer.uint32(58).string(message.kind);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        for (const v of message.values) {
            SylkEnumValue_1.SylkEnumValue.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        if (message.fullName !== "") {
            writer.uint32(26).string(message.fullName);
        }
        if (message.tag !== "") {
            writer.uint32(66).string(message.tag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkEnum();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.values.push(SylkEnumValue_1.SylkEnumValue.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fullName = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.tag = reader.string();
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
            type: isSet(object.type) ? String(object.type) : "",
            kind: isSet(object.kind) ? String(object.kind) : "",
            description: isSet(object.description) ? String(object.description) : "",
            values: Array.isArray(object === null || object === void 0 ? void 0 : object.values) ? object.values.map((e) => SylkEnumValue_1.SylkEnumValue.fromJSON(e)) : [],
            name: isSet(object.name) ? String(object.name) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            tag: isSet(object.tag) ? String(object.tag) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.kind !== undefined && (obj.kind = message.kind);
        message.description !== undefined && (obj.description = message.description);
        if (message.values) {
            obj.values = message.values.map((e) => e ? SylkEnumValue_1.SylkEnumValue.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.tag !== undefined && (obj.tag = message.tag);
        return obj;
    },
    create(base) {
        return exports.SylkEnum.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseSylkEnum();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.kind = (_b = object.kind) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.values = ((_d = object.values) === null || _d === void 0 ? void 0 : _d.map((e) => SylkEnumValue_1.SylkEnumValue.fromPartial(e))) || [];
        message.name = (_e = object.name) !== null && _e !== void 0 ? _e : "";
        message.uri = (_f = object.uri) !== null && _f !== void 0 ? _f : "";
        message.fullName = (_g = object.fullName) !== null && _g !== void 0 ? _g : "";
        message.tag = (_h = object.tag) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseSylkEnumDisplay() {
    return { updatedAt: undefined, enum: undefined, createdAt: undefined, id: "" };
}
exports.SylkEnumDisplay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.enum !== undefined) {
            exports.SylkEnum.encode(message.enum, writer.uint32(10).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(34).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkEnumDisplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.enum = exports.SylkEnum.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
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
    fromJSON(object) {
        return {
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
            enum: isSet(object.enum) ? exports.SylkEnum.fromJSON(object.enum) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.enum !== undefined && (obj.enum = message.enum ? exports.SylkEnum.toJSON(message.enum) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.SylkEnumDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSylkEnumDisplay();
        message.updatedAt = (_a = object.updatedAt) !== null && _a !== void 0 ? _a : undefined;
        message.enum = (object.enum !== undefined && object.enum !== null) ? exports.SylkEnum.fromPartial(object.enum) : undefined;
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=SylkEnum.js.map