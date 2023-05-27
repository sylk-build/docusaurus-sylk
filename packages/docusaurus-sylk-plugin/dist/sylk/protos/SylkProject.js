"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkProjectDisplay_MembersEntry = exports.SylkProjectDisplay = exports.SylkProject = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var SylkClient_1 = require("./SylkClient");
var SylkServer_1 = require("./SylkServer");
var SylkUser_1 = require("./SylkUser");
var any_1 = require("./google/protobuf/any");
var timestamp_1 = require("./google/protobuf/timestamp");
function createBaseSylkProject() {
    return {
        description: "",
        javaPackage: "",
        goPackage: "",
        name: "",
        uri: "",
        clients: [],
        server: undefined,
        packageName: "",
        extensions: [],
    };
}
exports.SylkProject = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.description !== "") {
            writer.uint32(66).string(message.description);
        }
        if (message.javaPackage !== "") {
            writer.uint32(50).string(message.javaPackage);
        }
        if (message.goPackage !== "") {
            writer.uint32(42).string(message.goPackage);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        for (var _i = 0, _j = message.clients; _i < _j.length; _i++) {
            var v = _j[_i];
            SylkClient_1.SylkClient.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.server !== undefined) {
            SylkServer_1.SylkServer.encode(message.server, writer.uint32(58).fork()).ldelim();
        }
        if (message.packageName !== "") {
            writer.uint32(26).string(message.packageName);
        }
        for (var _k = 0, _l = message.extensions; _k < _l.length; _k++) {
            var v = _l[_k];
            any_1.Any.encode(v, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkProject();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.javaPackage = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.goPackage = reader.string();
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
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.clients.push(SylkClient_1.SylkClient.decode(reader, reader.uint32()));
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.server = SylkServer_1.SylkServer.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.packageName = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.extensions.push(any_1.Any.decode(reader, reader.uint32()));
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
            description: isSet(object.description) ? String(object.description) : "",
            javaPackage: isSet(object.javaPackage) ? String(object.javaPackage) : "",
            goPackage: isSet(object.goPackage) ? String(object.goPackage) : "",
            name: isSet(object.name) ? String(object.name) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            clients: Array.isArray(object === null || object === void 0 ? void 0 : object.clients) ? object.clients.map(function (e) { return SylkClient_1.SylkClient.fromJSON(e); }) : [],
            server: isSet(object.server) ? SylkServer_1.SylkServer.fromJSON(object.server) : undefined,
            packageName: isSet(object.packageName) ? String(object.packageName) : "",
            extensions: Array.isArray(object === null || object === void 0 ? void 0 : object.extensions) ? object.extensions.map(function (e) { return any_1.Any.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.description !== undefined && (obj.description = message.description);
        message.javaPackage !== undefined && (obj.javaPackage = message.javaPackage);
        message.goPackage !== undefined && (obj.goPackage = message.goPackage);
        message.name !== undefined && (obj.name = message.name);
        message.uri !== undefined && (obj.uri = message.uri);
        if (message.clients) {
            obj.clients = message.clients.map(function (e) { return e ? SylkClient_1.SylkClient.toJSON(e) : undefined; });
        }
        else {
            obj.clients = [];
        }
        message.server !== undefined && (obj.server = message.server ? SylkServer_1.SylkServer.toJSON(message.server) : undefined);
        message.packageName !== undefined && (obj.packageName = message.packageName);
        if (message.extensions) {
            obj.extensions = message.extensions.map(function (e) { return e ? any_1.Any.toJSON(e) : undefined; });
        }
        else {
            obj.extensions = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.SylkProject.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseSylkProject();
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.javaPackage = (_b = object.javaPackage) !== null && _b !== void 0 ? _b : "";
        message.goPackage = (_c = object.goPackage) !== null && _c !== void 0 ? _c : "";
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.uri = (_e = object.uri) !== null && _e !== void 0 ? _e : "";
        message.clients = ((_f = object.clients) === null || _f === void 0 ? void 0 : _f.map(function (e) { return SylkClient_1.SylkClient.fromPartial(e); })) || [];
        message.server = (object.server !== undefined && object.server !== null)
            ? SylkServer_1.SylkServer.fromPartial(object.server)
            : undefined;
        message.packageName = (_g = object.packageName) !== null && _g !== void 0 ? _g : "";
        message.extensions = ((_h = object.extensions) === null || _h === void 0 ? void 0 : _h.map(function (e) { return any_1.Any.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseSylkProjectDisplay() {
    return {
        owner: "",
        updatedAt: undefined,
        numMethods: 0,
        createdAt: undefined,
        members: {},
        numServices: 0,
        numMessages: 0,
        numPackages: 0,
        project: undefined,
    };
}
exports.SylkProjectDisplay = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        if (message.updatedAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.numMethods !== 0) {
            writer.uint32(48).int32(message.numMethods);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.members).forEach(function (_j) {
            var key = _j[0], value = _j[1];
            exports.SylkProjectDisplay_MembersEntry.encode({ key: key, value: value }, writer.uint32(42).fork()).ldelim();
        });
        if (message.numServices !== 0) {
            writer.uint32(56).int32(message.numServices);
        }
        if (message.numMessages !== 0) {
            writer.uint32(72).int32(message.numMessages);
        }
        if (message.numPackages !== 0) {
            writer.uint32(64).int32(message.numPackages);
        }
        if (message.project !== undefined) {
            exports.SylkProject.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkProjectDisplay();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.owner = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.numMethods = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    var entry5 = exports.SylkProjectDisplay_MembersEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.members[entry5.key] = entry5.value;
                    }
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.numServices = reader.int32();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.numMessages = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.numPackages = reader.int32();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.project = exports.SylkProject.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
            numMethods: isSet(object.numMethods) ? Number(object.numMethods) : 0,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            members: isObject(object.members)
                ? Object.entries(object.members).reduce(function (acc, _j) {
                    var key = _j[0], value = _j[1];
                    acc[key] = (0, SylkUser_1.sylkUserRolesFromJSON)(value);
                    return acc;
                }, {})
                : {},
            numServices: isSet(object.numServices) ? Number(object.numServices) : 0,
            numMessages: isSet(object.numMessages) ? Number(object.numMessages) : 0,
            numPackages: isSet(object.numPackages) ? Number(object.numPackages) : 0,
            project: isSet(object.project) ? exports.SylkProject.fromJSON(object.project) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        message.numMethods !== undefined && (obj.numMethods = Math.round(message.numMethods));
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        obj.members = {};
        if (message.members) {
            Object.entries(message.members).forEach(function (_j) {
                var k = _j[0], v = _j[1];
                obj.members[k] = (0, SylkUser_1.sylkUserRolesToJSON)(v);
            });
        }
        message.numServices !== undefined && (obj.numServices = Math.round(message.numServices));
        message.numMessages !== undefined && (obj.numMessages = Math.round(message.numMessages));
        message.numPackages !== undefined && (obj.numPackages = Math.round(message.numPackages));
        message.project !== undefined && (obj.project = message.project ? exports.SylkProject.toJSON(message.project) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SylkProjectDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseSylkProjectDisplay();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.updatedAt = (_b = object.updatedAt) !== null && _b !== void 0 ? _b : undefined;
        message.numMethods = (_c = object.numMethods) !== null && _c !== void 0 ? _c : 0;
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        message.members = Object.entries((_e = object.members) !== null && _e !== void 0 ? _e : {}).reduce(function (acc, _j) {
            var key = _j[0], value = _j[1];
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.numServices = (_f = object.numServices) !== null && _f !== void 0 ? _f : 0;
        message.numMessages = (_g = object.numMessages) !== null && _g !== void 0 ? _g : 0;
        message.numPackages = (_h = object.numPackages) !== null && _h !== void 0 ? _h : 0;
        message.project = (object.project !== undefined && object.project !== null)
            ? exports.SylkProject.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseSylkProjectDisplay_MembersEntry() {
    return { key: "", value: 0 };
}
exports.SylkProjectDisplay_MembersEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== 0) {
            writer.uint32(16).int32(message.value);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkProjectDisplay_MembersEntry();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.value = reader.int32();
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
            value: isSet(object.value) ? (0, SylkUser_1.sylkUserRolesFromJSON)(object.value) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = (0, SylkUser_1.sylkUserRolesToJSON)(message.value));
        return obj;
    },
    create: function (base) {
        return exports.SylkProjectDisplay_MembersEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSylkProjectDisplay_MembersEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
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
