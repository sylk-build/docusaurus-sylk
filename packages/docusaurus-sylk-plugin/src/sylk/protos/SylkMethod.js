"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkMethodDisplay = exports.SylkMethod_ExtensionsEntry = exports.SylkMethod = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("./google/protobuf/struct");
const timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSylkMethod() {
    return {
        uri: "",
        name: "",
        fullName: "",
        description: "",
        inputType: "",
        outputType: "",
        clientStreaming: false,
        serverStreaming: false,
        type: "",
        kind: "",
        extensions: {},
    };
}
exports.SylkMethod = {
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
        if (message.inputType !== "") {
            writer.uint32(42).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(50).string(message.outputType);
        }
        if (message.clientStreaming === true) {
            writer.uint32(56).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(64).bool(message.serverStreaming);
        }
        if (message.type !== "") {
            writer.uint32(74).string(message.type);
        }
        if (message.kind !== "") {
            writer.uint32(82).string(message.kind);
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.SylkMethod_ExtensionsEntry.encode({ key: key, value }, writer.uint32(90).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkMethod();
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
                    message.inputType = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.outputType = reader.string();
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.clientStreaming = reader.bool();
                    continue;
                case 8:
                    if (tag != 64) {
                        break;
                    }
                    message.serverStreaming = reader.bool();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    const entry11 = exports.SylkMethod_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.extensions[entry11.key] = entry11.value;
                    }
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
            inputType: isSet(object.inputType) ? String(object.inputType) : "",
            outputType: isSet(object.outputType) ? String(object.outputType) : "",
            clientStreaming: isSet(object.clientStreaming) ? Boolean(object.clientStreaming) : false,
            serverStreaming: isSet(object.serverStreaming) ? Boolean(object.serverStreaming) : false,
            type: isSet(object.type) ? String(object.type) : "",
            kind: isSet(object.kind) ? String(object.kind) : "",
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.name !== undefined && (obj.name = message.name);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.description !== undefined && (obj.description = message.description);
        message.inputType !== undefined && (obj.inputType = message.inputType);
        message.outputType !== undefined && (obj.outputType = message.outputType);
        message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
        message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
        message.type !== undefined && (obj.type = message.type);
        message.kind !== undefined && (obj.kind = message.kind);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.SylkMethod.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseSylkMethod();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.fullName = (_c = object.fullName) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.inputType = (_e = object.inputType) !== null && _e !== void 0 ? _e : "";
        message.outputType = (_f = object.outputType) !== null && _f !== void 0 ? _f : "";
        message.clientStreaming = (_g = object.clientStreaming) !== null && _g !== void 0 ? _g : false;
        message.serverStreaming = (_h = object.serverStreaming) !== null && _h !== void 0 ? _h : false;
        message.type = (_j = object.type) !== null && _j !== void 0 ? _j : "";
        message.kind = (_k = object.kind) !== null && _k !== void 0 ? _k : "";
        message.extensions = Object.entries((_l = object.extensions) !== null && _l !== void 0 ? _l : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSylkMethod_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.SylkMethod_ExtensionsEntry = {
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
        const message = createBaseSylkMethod_ExtensionsEntry();
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
        return exports.SylkMethod_ExtensionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkMethod_ExtensionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSylkMethodDisplay() {
    return { method: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.SylkMethodDisplay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.method !== undefined) {
            exports.SylkMethod.encode(message.method, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseSylkMethodDisplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.method = exports.SylkMethod.decode(reader, reader.uint32());
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
            method: isSet(object.method) ? exports.SylkMethod.fromJSON(object.method) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.method !== undefined && (obj.method = message.method ? exports.SylkMethod.toJSON(message.method) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.SylkMethodDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkMethodDisplay();
        message.method = (object.method !== undefined && object.method !== null)
            ? exports.SylkMethod.fromPartial(object.method)
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
//# sourceMappingURL=SylkMethod.js.map