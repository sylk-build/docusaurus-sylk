"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkMessageDisplay = exports.SylkMessage_ExtensionsEntry = exports.SylkMessage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const SylkCommons_1 = require("./SylkCommons");
const SylkField_1 = require("./SylkField");
const struct_1 = require("./google/protobuf/struct");
const timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSylkMessage() {
    return {
        uri: "",
        name: "",
        fullName: "",
        description: "",
        fields: [],
        type: "",
        kind: "",
        extensions: {},
        extensionType: 0,
    };
}
exports.SylkMessage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.fullName !== "") {
            writer.uint32(26).string(message.fullName);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        for (const v of message.fields) {
            SylkField_1.SylkField.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.type !== "") {
            writer.uint32(50).string(message.type);
        }
        if (message.kind !== "") {
            writer.uint32(58).string(message.kind);
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.SylkMessage_ExtensionsEntry.encode({ key: key, value }, writer.uint32(66).fork()).ldelim();
            }
        });
        if (message.extensionType !== 0) {
            writer.uint32(72).int32(message.extensionType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    if (tag != 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.fields.push(SylkField_1.SylkField.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    const entry8 = exports.SylkMessage_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.extensions[entry8.key] = entry8.value;
                    }
                    continue;
                case 9:
                    if (tag != 72) {
                        break;
                    }
                    message.extensionType = reader.int32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            uri: isSet(object.uri) ? String(object.uri) : "",
            name: isSet(object.name) ? String(object.name) : "",
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            description: isSet(object.description) ? String(object.description) : "",
            fields: Array.isArray(object === null || object === void 0 ? void 0 : object.fields) ? object.fields.map((e) => SylkField_1.SylkField.fromJSON(e)) : [],
            type: isSet(object.type) ? String(object.type) : "",
            kind: isSet(object.kind) ? String(object.kind) : "",
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
            extensionType: isSet(object.extensionType) ? (0, SylkCommons_1.sylkExtensionsFromJSON)(object.extensionType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.name !== undefined && (obj.name = message.name);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.description !== undefined && (obj.description = message.description);
        if (message.fields) {
            obj.fields = message.fields.map((e) => e ? SylkField_1.SylkField.toJSON(e) : undefined);
        }
        else {
            obj.fields = [];
        }
        message.type !== undefined && (obj.type = message.type);
        message.kind !== undefined && (obj.kind = message.kind);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        message.extensionType !== undefined && (obj.extensionType = (0, SylkCommons_1.sylkExtensionsToJSON)(message.extensionType));
        return obj;
    },
    create(base) {
        return exports.SylkMessage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseSylkMessage();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.fullName = (_c = object.fullName) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.fields = ((_e = object.fields) === null || _e === void 0 ? void 0 : _e.map((e) => SylkField_1.SylkField.fromPartial(e))) || [];
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : "";
        message.kind = (_g = object.kind) !== null && _g !== void 0 ? _g : "";
        message.extensions = Object.entries((_h = object.extensions) !== null && _h !== void 0 ? _h : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.extensionType = (_j = object.extensionType) !== null && _j !== void 0 ? _j : 0;
        return message;
    },
};
function createBaseSylkMessage_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.SylkMessage_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkMessage_ExtensionsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.value = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isObject(object.value) ? object.value : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return exports.SylkMessage_ExtensionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkMessage_ExtensionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSylkMessageDisplay() {
    return { message: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.SylkMessageDisplay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.message !== undefined) {
            exports.SylkMessage.encode(message.message, writer.uint32(10).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkMessageDisplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.message = exports.SylkMessage.decode(reader, reader.uint32());
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
    fromJSON(object) {
        return {
            message: isSet(object.message) ? exports.SylkMessage.fromJSON(object.message) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.message !== undefined && (obj.message = message.message ? exports.SylkMessage.toJSON(message.message) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.SylkMessageDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkMessageDisplay();
        message.message = (object.message !== undefined && object.message !== null)
            ? exports.SylkMessage.fromPartial(object.message)
            : undefined;
        message.createdAt = (_a = object.createdAt) !== null && _a !== void 0 ? _a : undefined;
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=SylkMessage.js.map