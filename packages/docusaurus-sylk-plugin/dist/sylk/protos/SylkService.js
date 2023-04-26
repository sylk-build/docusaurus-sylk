"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkServiceDisplay = exports.SylkService_ExtensionsEntry = exports.SylkService = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var SylkMethod_1 = require("./SylkMethod");
var struct_1 = require("./google/protobuf/struct");
var timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSylkService() {
    return { uri: "", name: "", fullName: "", description: "", methods: [], type: "", dependencies: [], extensions: {} };
}
exports.SylkService = {
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
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        for (var _i = 0, _j = message.methods; _i < _j.length; _i++) {
            var v = _j[_i];
            SylkMethod_1.SylkMethod.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.type !== "") {
            writer.uint32(50).string(message.type);
        }
        for (var _k = 0, _l = message.dependencies; _k < _l.length; _k++) {
            var v = _l[_k];
            writer.uint32(58).string(v);
        }
        Object.entries(message.extensions).forEach(function (_j) {
            var key = _j[0], value = _j[1];
            if (value !== undefined) {
                exports.SylkService_ExtensionsEntry.encode({ key: key, value: value }, writer.uint32(66).fork()).ldelim();
            }
        });
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkService();
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
                    if (tag != 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.methods.push(SylkMethod_1.SylkMethod.decode(reader, reader.uint32()));
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
                    message.dependencies.push(reader.string());
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    var entry8 = exports.SylkService_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry8.value !== undefined) {
                        message.extensions[entry8.key] = entry8.value;
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
    fromJSON: function (object) {
        return {
            uri: isSet(object.uri) ? String(object.uri) : "",
            name: isSet(object.name) ? String(object.name) : "",
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            description: isSet(object.description) ? String(object.description) : "",
            methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map(function (e) { return SylkMethod_1.SylkMethod.fromJSON(e); }) : [],
            type: isSet(object.type) ? String(object.type) : "",
            dependencies: Array.isArray(object === null || object === void 0 ? void 0 : object.dependencies) ? object.dependencies.map(function (e) { return String(e); }) : [],
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce(function (acc, _j) {
                    var key = _j[0], value = _j[1];
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.name !== undefined && (obj.name = message.name);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.description !== undefined && (obj.description = message.description);
        if (message.methods) {
            obj.methods = message.methods.map(function (e) { return e ? SylkMethod_1.SylkMethod.toJSON(e) : undefined; });
        }
        else {
            obj.methods = [];
        }
        message.type !== undefined && (obj.type = message.type);
        if (message.dependencies) {
            obj.dependencies = message.dependencies.map(function (e) { return e; });
        }
        else {
            obj.dependencies = [];
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(function (_j) {
                var k = _j[0], v = _j[1];
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create: function (base) {
        return exports.SylkService.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseSylkService();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.fullName = (_c = object.fullName) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.methods = ((_e = object.methods) === null || _e === void 0 ? void 0 : _e.map(function (e) { return SylkMethod_1.SylkMethod.fromPartial(e); })) || [];
        message.type = (_f = object.type) !== null && _f !== void 0 ? _f : "";
        message.dependencies = ((_g = object.dependencies) === null || _g === void 0 ? void 0 : _g.map(function (e) { return e; })) || [];
        message.extensions = Object.entries((_h = object.extensions) !== null && _h !== void 0 ? _h : {}).reduce(function (acc, _j) {
            var key = _j[0], value = _j[1];
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSylkService_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.SylkService_ExtensionsEntry = {
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
        var message = createBaseSylkService_ExtensionsEntry();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
        return exports.SylkService_ExtensionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSylkService_ExtensionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSylkServiceDisplay() {
    return { service: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.SylkServiceDisplay = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.service !== undefined) {
            exports.SylkService.encode(message.service, writer.uint32(10).fork()).ldelim();
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
        var message = createBaseSylkServiceDisplay();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.service = exports.SylkService.decode(reader, reader.uint32());
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
            service: isSet(object.service) ? exports.SylkService.fromJSON(object.service) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.service !== undefined && (obj.service = message.service ? exports.SylkService.toJSON(message.service) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create: function (base) {
        return exports.SylkServiceDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSylkServiceDisplay();
        message.service = (object.service !== undefined && object.service !== null)
            ? exports.SylkService.fromPartial(object.service)
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
