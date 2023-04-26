"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkPackageDisplay = exports.SylkPackage_ExtensionsEntry = exports.SylkPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const SylkEnum_1 = require("./SylkEnum");
const SylkMessage_1 = require("./SylkMessage");
const struct_1 = require("./google/protobuf/struct");
const timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSylkPackage() {
    return {
        uri: "",
        name: "",
        package: "",
        messages: [],
        enums: [],
        description: "",
        type: "",
        dependencies: [],
        extensions: {},
    };
}
exports.SylkPackage = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(26).string(message.package);
        }
        for (const v of message.messages) {
            SylkMessage_1.SylkMessage.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enums) {
            SylkEnum_1.SylkEnum.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.type !== "") {
            writer.uint32(58).string(message.type);
        }
        for (const v of message.dependencies) {
            writer.uint32(66).string(v);
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.SylkPackage_ExtensionsEntry.encode({ key: key, value }, writer.uint32(74).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkPackage();
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
                    message.package = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.messages.push(SylkMessage_1.SylkMessage.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.enums.push(SylkEnum_1.SylkEnum.decode(reader, reader.uint32()));
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
                    message.dependencies.push(reader.string());
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    const entry9 = exports.SylkPackage_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.extensions[entry9.key] = entry9.value;
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
            package: isSet(object.package) ? String(object.package) : "",
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => SylkMessage_1.SylkMessage.fromJSON(e)) : [],
            enums: Array.isArray(object === null || object === void 0 ? void 0 : object.enums) ? object.enums.map((e) => SylkEnum_1.SylkEnum.fromJSON(e)) : [],
            description: isSet(object.description) ? String(object.description) : "",
            type: isSet(object.type) ? String(object.type) : "",
            dependencies: Array.isArray(object === null || object === void 0 ? void 0 : object.dependencies) ? object.dependencies.map((e) => String(e)) : [],
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
        message.package !== undefined && (obj.package = message.package);
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? SylkMessage_1.SylkMessage.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        if (message.enums) {
            obj.enums = message.enums.map((e) => e ? SylkEnum_1.SylkEnum.toJSON(e) : undefined);
        }
        else {
            obj.enums = [];
        }
        message.description !== undefined && (obj.description = message.description);
        message.type !== undefined && (obj.type = message.type);
        if (message.dependencies) {
            obj.dependencies = message.dependencies.map((e) => e);
        }
        else {
            obj.dependencies = [];
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    create(base) {
        return exports.SylkPackage.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseSylkPackage();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.package = (_c = object.package) !== null && _c !== void 0 ? _c : "";
        message.messages = ((_d = object.messages) === null || _d === void 0 ? void 0 : _d.map((e) => SylkMessage_1.SylkMessage.fromPartial(e))) || [];
        message.enums = ((_e = object.enums) === null || _e === void 0 ? void 0 : _e.map((e) => SylkEnum_1.SylkEnum.fromPartial(e))) || [];
        message.description = (_f = object.description) !== null && _f !== void 0 ? _f : "";
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : "";
        message.dependencies = ((_h = object.dependencies) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.extensions = Object.entries((_j = object.extensions) !== null && _j !== void 0 ? _j : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseSylkPackage_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.SylkPackage_ExtensionsEntry = {
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
        const message = createBaseSylkPackage_ExtensionsEntry();
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
        return exports.SylkPackage_ExtensionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkPackage_ExtensionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSylkPackageDisplay() {
    return { package: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.SylkPackageDisplay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.package !== undefined) {
            exports.SylkPackage.encode(message.package, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseSylkPackageDisplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.package = exports.SylkPackage.decode(reader, reader.uint32());
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
            package: isSet(object.package) ? exports.SylkPackage.fromJSON(object.package) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.package !== undefined && (obj.package = message.package ? exports.SylkPackage.toJSON(message.package) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.SylkPackageDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkPackageDisplay();
        message.package = (object.package !== undefined && object.package !== null)
            ? exports.SylkPackage.fromPartial(object.package)
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
//# sourceMappingURL=SylkPackage.js.map