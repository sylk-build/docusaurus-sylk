"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkProjectDisplay_MembersEntry = exports.SylkProjectDisplay = exports.SylkProject = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const SylkClient_1 = require("./SylkClient");
const SylkServer_1 = require("./SylkServer");
const SylkUser_1 = require("./SylkUser");
const timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSylkProject() {
    return {
        uri: "",
        name: "",
        packageName: "",
        clients: [],
        goPackage: "",
        javaPackage: "",
        server: undefined,
        description: "",
    };
}
exports.SylkProject = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.packageName !== "") {
            writer.uint32(26).string(message.packageName);
        }
        for (const v of message.clients) {
            SylkClient_1.SylkClient.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.goPackage !== "") {
            writer.uint32(42).string(message.goPackage);
        }
        if (message.javaPackage !== "") {
            writer.uint32(50).string(message.javaPackage);
        }
        if (message.server !== undefined) {
            SylkServer_1.SylkServer.encode(message.server, writer.uint32(58).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(66).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkProject();
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
                    message.packageName = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.clients.push(SylkClient_1.SylkClient.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.goPackage = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.javaPackage = reader.string();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.server = SylkServer_1.SylkServer.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.description = reader.string();
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
            packageName: isSet(object.packageName) ? String(object.packageName) : "",
            clients: Array.isArray(object === null || object === void 0 ? void 0 : object.clients) ? object.clients.map((e) => SylkClient_1.SylkClient.fromJSON(e)) : [],
            goPackage: isSet(object.goPackage) ? String(object.goPackage) : "",
            javaPackage: isSet(object.javaPackage) ? String(object.javaPackage) : "",
            server: isSet(object.server) ? SylkServer_1.SylkServer.fromJSON(object.server) : undefined,
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.name !== undefined && (obj.name = message.name);
        message.packageName !== undefined && (obj.packageName = message.packageName);
        if (message.clients) {
            obj.clients = message.clients.map((e) => e ? SylkClient_1.SylkClient.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        message.goPackage !== undefined && (obj.goPackage = message.goPackage);
        message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
        message.server !== undefined && (obj.server = message.server ? SylkServer_1.SylkServer.toJSON(message.server) : undefined);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    create(base) {
        return exports.SylkProject.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseSylkProject();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.packageName = (_c = object.packageName) !== null && _c !== void 0 ? _c : "";
        message.clients = ((_d = object.clients) === null || _d === void 0 ? void 0 : _d.map((e) => SylkClient_1.SylkClient.fromPartial(e))) || [];
        message.goPackage = (_e = object.goPackage) !== null && _e !== void 0 ? _e : "";
        message.javaPackage = (_f = object.javaPackage) !== null && _f !== void 0 ? _f : "";
        message.server = (object.server !== undefined && object.server !== null)
            ? SylkServer_1.SylkServer.fromPartial(object.server)
            : undefined;
        message.description = (_g = object.description) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseSylkProjectDisplay() {
    return {
        project: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        owner: "",
        members: {},
        numMethods: 0,
        numServices: 0,
        numPackages: 0,
        numMessages: 0,
    };
}
exports.SylkProjectDisplay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.project !== undefined) {
            exports.SylkProject.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        Object.entries(message.members).forEach(([key, value]) => {
            exports.SylkProjectDisplay_MembersEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.numMethods !== 0) {
            writer.uint32(48).int32(message.numMethods);
        }
        if (message.numServices !== 0) {
            writer.uint32(56).int32(message.numServices);
        }
        if (message.numPackages !== 0) {
            writer.uint32(64).int32(message.numPackages);
        }
        if (message.numMessages !== 0) {
            writer.uint32(72).int32(message.numMessages);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkProjectDisplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.project = exports.SylkProject.decode(reader, reader.uint32());
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
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    const entry5 = exports.SylkProjectDisplay_MembersEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.members[entry5.key] = entry5.value;
                    }
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.numMethods = reader.int32();
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.numServices = reader.int32();
                    continue;
                case 8:
                    if (tag != 64) {
                        break;
                    }
                    message.numPackages = reader.int32();
                    continue;
                case 9:
                    if (tag != 72) {
                        break;
                    }
                    message.numMessages = reader.int32();
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
            project: isSet(object.project) ? exports.SylkProject.fromJSON(object.project) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
            owner: isSet(object.owner) ? String(object.owner) : "",
            members: isObject(object.members)
                ? Object.entries(object.members).reduce((acc, [key, value]) => {
                    acc[key] = (0, SylkUser_1.sylkUserRolesFromJSON)(value);
                    return acc;
                }, {})
                : {},
            numMethods: isSet(object.numMethods) ? Number(object.numMethods) : 0,
            numServices: isSet(object.numServices) ? Number(object.numServices) : 0,
            numPackages: isSet(object.numPackages) ? Number(object.numPackages) : 0,
            numMessages: isSet(object.numMessages) ? Number(object.numMessages) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined && (obj.project = message.project ? exports.SylkProject.toJSON(message.project) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.owner !== undefined && (obj.owner = message.owner);
        obj.members = {};
        if (message.members) {
            Object.entries(message.members).forEach(([k, v]) => {
                obj.members[k] = (0, SylkUser_1.sylkUserRolesToJSON)(v);
            });
        }
        message.numMethods !== undefined && (obj.numMethods = Math.round(message.numMethods));
        message.numServices !== undefined && (obj.numServices = Math.round(message.numServices));
        message.numPackages !== undefined && (obj.numPackages = Math.round(message.numPackages));
        message.numMessages !== undefined && (obj.numMessages = Math.round(message.numMessages));
        return obj;
    },
    create(base) {
        return exports.SylkProjectDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseSylkProjectDisplay();
        message.project = (object.project !== undefined && object.project !== null)
            ? exports.SylkProject.fromPartial(object.project)
            : undefined;
        message.createdAt = (_a = object.createdAt) !== null && _a !== void 0 ? _a : undefined;
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : undefined;
        message.owner = (_c = object.owner) !== null && _c !== void 0 ? _c : "";
        message.members = Object.entries((_d = object.members) !== null && _d !== void 0 ? _d : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.numMethods = (_e = object.numMethods) !== null && _e !== void 0 ? _e : 0;
        message.numServices = (_f = object.numServices) !== null && _f !== void 0 ? _f : 0;
        message.numPackages = (_g = object.numPackages) !== null && _g !== void 0 ? _g : 0;
        message.numMessages = (_h = object.numMessages) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
function createBaseSylkProjectDisplay_MembersEntry() {
    return { key: "", value: 0 };
}
exports.SylkProjectDisplay_MembersEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkProjectDisplay_MembersEntry();
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
                    if (tag != 16) {
                        break;
                    }
                    message.value = reader.int32();
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
            value: isSet(object.value) ? (0, SylkUser_1.sylkUserRolesFromJSON)(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = (0, SylkUser_1.sylkUserRolesToJSON)(message.value));
        return obj;
    },
    create(base) {
        return exports.SylkProjectDisplay_MembersEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkProjectDisplay_MembersEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
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
//# sourceMappingURL=SylkProject.js.map