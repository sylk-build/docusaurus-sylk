"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkEnumValueDisplay = exports.SylkEnumValue = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSylkEnumValue() {
    return { uri: "", name: "", fullName: "", index: 0, number: 0, description: "", type: "", kind: "" };
}
exports.SylkEnumValue = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.fullName !== "") {
            writer.uint32(26).string(message.fullName);
        }
        if (message.index !== 0) {
            writer.uint32(32).int32(message.index);
        }
        if (message.number !== 0) {
            writer.uint32(40).int32(message.number);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.type !== "") {
            writer.uint32(58).string(message.type);
        }
        if (message.kind !== "") {
            writer.uint32(66).string(message.kind);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkEnumValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.uri = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.fullName = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.index = reader.int32();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.number = reader.int32();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            uri: isSet(object.uri) ? String(object.uri) : "",
            name: isSet(object.name) ? String(object.name) : "",
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            index: isSet(object.index) ? Number(object.index) : 0,
            number: isSet(object.number) ? Number(object.number) : 0,
            description: isSet(object.description) ? String(object.description) : "",
            type: isSet(object.type) ? String(object.type) : "",
            kind: isSet(object.kind) ? String(object.kind) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.name !== undefined && (obj.name = message.name);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.description !== undefined && (obj.description = message.description);
        message.type !== undefined && (obj.type = message.type);
        message.kind !== undefined && (obj.kind = message.kind);
        return obj;
    },
    create: function (base) {
        return exports.SylkEnumValue.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseSylkEnumValue();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.fullName = (_c = object.fullName) !== null && _c !== void 0 ? _c : "";
        message.index = (_d = object.index) !== null && _d !== void 0 ? _d : 0;
        message.number = (_e = object.number) !== null && _e !== void 0 ? _e : 0;
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : "";
        message.kind = (_h = object.kind) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseSylkEnumValueDisplay() {
    return { enumValue: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.SylkEnumValueDisplay = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.enumValue !== undefined) {
            exports.SylkEnumValue.encode(message.enumValue, writer.uint32(10).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkEnumValueDisplay();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.enumValue = exports.SylkEnumValue.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            enumValue: isSet(object.enumValue) ? exports.SylkEnumValue.fromJSON(object.enumValue) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.enumValue !== undefined &&
            (obj.enumValue = message.enumValue ? exports.SylkEnumValue.toJSON(message.enumValue) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create: function (base) {
        return exports.SylkEnumValueDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSylkEnumValueDisplay();
        message.enumValue = (object.enumValue !== undefined && object.enumValue !== null)
            ? exports.SylkEnumValue.fromPartial(object.enumValue)
            : undefined;
        message.createdAt = (_a = object.createdAt) !== null && _a !== void 0 ? _a : undefined;
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
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
