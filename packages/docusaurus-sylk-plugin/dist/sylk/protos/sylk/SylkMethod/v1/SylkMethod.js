"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkMethodDisplay = exports.SylkMethod_ExtensionsEntry = exports.SylkMethod = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var struct_1 = require("../../../google/protobuf/struct");
var timestamp_1 = require("../../../google/protobuf/timestamp");
function createBaseSylkMethod() {
    return {
        clientStreaming: false,
        fullName: "",
        type: "",
        name: "",
        serverStreaming: false,
        description: "",
        kind: "",
        extensions: {},
        inputType: "",
        outputType: "",
        uri: "",
    };
}
exports.SylkMethod = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.clientStreaming === true) {
            writer.uint32(56).bool(message.clientStreaming);
        }
        if (message.fullName !== "") {
            writer.uint32(26).string(message.fullName);
        }
        if (message.type !== "") {
            writer.uint32(74).string(message.type);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.serverStreaming === true) {
            writer.uint32(64).bool(message.serverStreaming);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.kind !== "") {
            writer.uint32(82).string(message.kind);
        }
        Object.entries(message.extensions).forEach(function (_m) {
            var key = _m[0], value = _m[1];
            if (value !== undefined) {
                exports.SylkMethod_ExtensionsEntry.encode({ key: key, value: value }, writer.uint32(90).fork()).ldelim();
            }
        });
        if (message.inputType !== "") {
            writer.uint32(42).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(50).string(message.outputType);
        }
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkMethod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.clientStreaming = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.fullName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.serverStreaming = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    var entry11 = exports.SylkMethod_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.extensions[entry11.key] = entry11.value;
                    }
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.inputType = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.outputType = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.uri = reader.string();
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
            clientStreaming: isSet(object.clientStreaming) ? Boolean(object.clientStreaming) : false,
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            type: isSet(object.type) ? String(object.type) : "",
            name: isSet(object.name) ? String(object.name) : "",
            serverStreaming: isSet(object.serverStreaming) ? Boolean(object.serverStreaming) : false,
            description: isSet(object.description) ? String(object.description) : "",
            kind: isSet(object.kind) ? String(object.kind) : "",
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce(function (acc, _m) {
                    var key = _m[0], value = _m[1];
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
            inputType: isSet(object.inputType) ? String(object.inputType) : "",
            outputType: isSet(object.outputType) ? String(object.outputType) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.clientStreaming !== undefined && (obj.clientStreaming = message.clientStreaming);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.type !== undefined && (obj.type = message.type);
        message.name !== undefined && (obj.name = message.name);
        message.serverStreaming !== undefined && (obj.serverStreaming = message.serverStreaming);
        message.description !== undefined && (obj.description = message.description);
        message.kind !== undefined && (obj.kind = message.kind);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(function (_m) {
                var k = _m[0], v = _m[1];
                obj.extensions[k] = v;
            });
        }
        message.inputType !== undefined && (obj.inputType = message.inputType);
        message.outputType !== undefined && (obj.outputType = message.outputType);
        message.uri !== undefined && (obj.uri = message.uri);
        return obj;
    },
    create: function (base) {
        return exports.SylkMethod.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseSylkMethod();
        message.clientStreaming = (_a = object.clientStreaming) !== null && _a !== void 0 ? _a : false;
        message.fullName = (_b = object.fullName) !== null && _b !== void 0 ? _b : "";
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : "";
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.serverStreaming = (_e = object.serverStreaming) !== null && _e !== void 0 ? _e : false;
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.kind = (_g = object.kind) !== null && _g !== void 0 ? _g : "";
        message.extensions = Object.entries((_h = object.extensions) !== null && _h !== void 0 ? _h : {}).reduce(function (acc, _m) {
            var key = _m[0], value = _m[1];
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.inputType = (_j = object.inputType) !== null && _j !== void 0 ? _j : "";
        message.outputType = (_k = object.outputType) !== null && _k !== void 0 ? _k : "";
        message.uri = (_l = object.uri) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseSylkMethod_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.SylkMethod_ExtensionsEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkMethod_ExtensionsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isObject(object.value) ? object.value : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create: function (base) {
        return exports.SylkMethod_ExtensionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSylkMethod_ExtensionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSylkMethodDisplay() {
    return { createdAt: undefined, method: undefined, updatedAt: undefined, id: "" };
}
exports.SylkMethodDisplay = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.method !== undefined) {
            exports.SylkMethod.encode(message.method, writer.uint32(10).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.id !== "") {
            writer.uint32(34).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkMethodDisplay();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.method = exports.SylkMethod.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
    fromJSON: function (object) {
        return {
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            method: isSet(object.method) ? exports.SylkMethod.fromJSON(object.method) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.method !== undefined && (obj.method = message.method ? exports.SylkMethod.toJSON(message.method) : undefined);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create: function (base) {
        return exports.SylkMethodDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSylkMethodDisplay();
        message.createdAt = (_a = object.createdAt) !== null && _a !== void 0 ? _a : undefined;
        message.method = (object.method !== undefined && object.method !== null)
            ? exports.SylkMethod.fromPartial(object.method)
            : undefined;
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : undefined;
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = (t.seconds || 0) * 1000;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
