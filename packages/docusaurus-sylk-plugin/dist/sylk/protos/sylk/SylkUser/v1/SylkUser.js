"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkUserDisplay = exports.SylkUser_OrgsIdsEntry = exports.SylkUser = exports.PersonalAccessToken = exports.sylkUserRolesToJSON = exports.sylkUserRolesFromJSON = exports.SylkUserRoles = exports.sylkUserStatusesToJSON = exports.sylkUserStatusesFromJSON = exports.SylkUserStatuses = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("../../../google/protobuf/timestamp");
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkUser.v1.SylkUserStatuses] - None */
var SylkUserStatuses;
(function (SylkUserStatuses) {
    /** DEFAULT_SYLKUSERSTATUSES - [sylk.SylkUser.v1.SylkUserStatuses] - Default enum value for "sylk.SylkUser.v1.SylkUserStatuses" */
    SylkUserStatuses[SylkUserStatuses["DEFAULT_SYLKUSERSTATUSES"] = 0] = "DEFAULT_SYLKUSERSTATUSES";
    /** ACTIVE - [sylk.SylkUser.v1.SylkUserStatuses] - None */
    SylkUserStatuses[SylkUserStatuses["ACTIVE"] = 1] = "ACTIVE";
    /** INACTIVE - [sylk.SylkUser.v1.SylkUserStatuses] - None */
    SylkUserStatuses[SylkUserStatuses["INACTIVE"] = 2] = "INACTIVE";
    /** PENDING - [sylk.SylkUser.v1.SylkUserStatuses] - None */
    SylkUserStatuses[SylkUserStatuses["PENDING"] = 3] = "PENDING";
    SylkUserStatuses[SylkUserStatuses["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SylkUserStatuses = exports.SylkUserStatuses || (exports.SylkUserStatuses = {}));
function sylkUserStatusesFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SYLKUSERSTATUSES":
            return SylkUserStatuses.DEFAULT_SYLKUSERSTATUSES;
        case 1:
        case "ACTIVE":
            return SylkUserStatuses.ACTIVE;
        case 2:
        case "INACTIVE":
            return SylkUserStatuses.INACTIVE;
        case 3:
        case "PENDING":
            return SylkUserStatuses.PENDING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SylkUserStatuses.UNRECOGNIZED;
    }
}
exports.sylkUserStatusesFromJSON = sylkUserStatusesFromJSON;
function sylkUserStatusesToJSON(object) {
    switch (object) {
        case SylkUserStatuses.DEFAULT_SYLKUSERSTATUSES:
            return "DEFAULT_SYLKUSERSTATUSES";
        case SylkUserStatuses.ACTIVE:
            return "ACTIVE";
        case SylkUserStatuses.INACTIVE:
            return "INACTIVE";
        case SylkUserStatuses.PENDING:
            return "PENDING";
        case SylkUserStatuses.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sylkUserStatusesToJSON = sylkUserStatusesToJSON;
/** [sylk.SylkUser.v1.SylkUserRoles] - None */
var SylkUserRoles;
(function (SylkUserRoles) {
    /** DEFAULT_SYLKUSERROLES - [sylk.SylkUser.v1.SylkUserRoles] - Default enum value for "sylk.SylkUser.v1.SylkUserRoles" */
    SylkUserRoles[SylkUserRoles["DEFAULT_SYLKUSERROLES"] = 0] = "DEFAULT_SYLKUSERROLES";
    /** ADMIN - [sylk.SylkUser.v1.SylkUserRoles] - None */
    SylkUserRoles[SylkUserRoles["ADMIN"] = 1] = "ADMIN";
    /** CONTRIBUTER - [sylk.SylkUser.v1.SylkUserRoles] - None */
    SylkUserRoles[SylkUserRoles["CONTRIBUTER"] = 2] = "CONTRIBUTER";
    /** READER - [sylk.SylkUser.v1.SylkUserRoles] - None */
    SylkUserRoles[SylkUserRoles["READER"] = 3] = "READER";
    SylkUserRoles[SylkUserRoles["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SylkUserRoles = exports.SylkUserRoles || (exports.SylkUserRoles = {}));
function sylkUserRolesFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SYLKUSERROLES":
            return SylkUserRoles.DEFAULT_SYLKUSERROLES;
        case 1:
        case "ADMIN":
            return SylkUserRoles.ADMIN;
        case 2:
        case "CONTRIBUTER":
            return SylkUserRoles.CONTRIBUTER;
        case 3:
        case "READER":
            return SylkUserRoles.READER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SylkUserRoles.UNRECOGNIZED;
    }
}
exports.sylkUserRolesFromJSON = sylkUserRolesFromJSON;
function sylkUserRolesToJSON(object) {
    switch (object) {
        case SylkUserRoles.DEFAULT_SYLKUSERROLES:
            return "DEFAULT_SYLKUSERROLES";
        case SylkUserRoles.ADMIN:
            return "ADMIN";
        case SylkUserRoles.CONTRIBUTER:
            return "CONTRIBUTER";
        case SylkUserRoles.READER:
            return "READER";
        case SylkUserRoles.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sylkUserRolesToJSON = sylkUserRolesToJSON;
function createBasePersonalAccessToken() {
    return {
        token: "",
        orgId: "",
        description: "",
        expiresAt: undefined,
        createdAt: undefined,
        revoked: false,
        userId: "",
    };
}
exports.PersonalAccessToken = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.orgId !== "") {
            writer.uint32(50).string(message.orgId);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.revoked === true) {
            writer.uint32(32).bool(message.revoked);
        }
        if (message.userId !== "") {
            writer.uint32(58).string(message.userId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePersonalAccessToken();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.expiresAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.revoked = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.userId = reader.string();
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
            token: isSet(object.token) ? String(object.token) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            description: isSet(object.description) ? String(object.description) : "",
            expiresAt: isSet(object.expiresAt) ? fromJsonTimestamp(object.expiresAt) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            revoked: isSet(object.revoked) ? Boolean(object.revoked) : false,
            userId: isSet(object.userId) ? String(object.userId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.description !== undefined && (obj.description = message.description);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.revoked !== undefined && (obj.revoked = message.revoked);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create: function (base) {
        return exports.PersonalAccessToken.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBasePersonalAccessToken();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.expiresAt = (_d = object.expiresAt) !== null && _d !== void 0 ? _d : undefined;
        message.createdAt = (_e = object.createdAt) !== null && _e !== void 0 ? _e : undefined;
        message.revoked = (_f = object.revoked) !== null && _f !== void 0 ? _f : false;
        message.userId = (_g = object.userId) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseSylkUser() {
    return {
        email: "",
        orgsIds: {},
        locale: "",
        givenName: "",
        nickname: "",
        status: 0,
        picture: "",
        connection: "",
        userId: "",
        emailVerified: false,
        familyName: "",
    };
}
exports.SylkUser = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        Object.entries(message.orgsIds).forEach(function (_m) {
            var key = _m[0], value = _m[1];
            exports.SylkUser_OrgsIdsEntry.encode({ key: key, value: value }, writer.uint32(90).fork()).ldelim();
        });
        if (message.locale !== "") {
            writer.uint32(50).string(message.locale);
        }
        if (message.givenName !== "") {
            writer.uint32(42).string(message.givenName);
        }
        if (message.nickname !== "") {
            writer.uint32(58).string(message.nickname);
        }
        if (message.status !== 0) {
            writer.uint32(80).int32(message.status);
        }
        if (message.picture !== "") {
            writer.uint32(66).string(message.picture);
        }
        if (message.connection !== "") {
            writer.uint32(74).string(message.connection);
        }
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.emailVerified === true) {
            writer.uint32(24).bool(message.emailVerified);
        }
        if (message.familyName !== "") {
            writer.uint32(34).string(message.familyName);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkUser();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    var entry11 = exports.SylkUser_OrgsIdsEntry.decode(reader, reader.uint32());
                    if (entry11.value !== undefined) {
                        message.orgsIds[entry11.key] = entry11.value;
                    }
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.locale = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.givenName = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nickname = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.picture = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.connection = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.emailVerified = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.familyName = reader.string();
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
            email: isSet(object.email) ? String(object.email) : "",
            orgsIds: isObject(object.orgsIds)
                ? Object.entries(object.orgsIds).reduce(function (acc, _m) {
                    var key = _m[0], value = _m[1];
                    acc[key] = sylkUserRolesFromJSON(value);
                    return acc;
                }, {})
                : {},
            locale: isSet(object.locale) ? String(object.locale) : "",
            givenName: isSet(object.givenName) ? String(object.givenName) : "",
            nickname: isSet(object.nickname) ? String(object.nickname) : "",
            status: isSet(object.status) ? sylkUserStatusesFromJSON(object.status) : 0,
            picture: isSet(object.picture) ? String(object.picture) : "",
            connection: isSet(object.connection) ? String(object.connection) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            emailVerified: isSet(object.emailVerified) ? Boolean(object.emailVerified) : false,
            familyName: isSet(object.familyName) ? String(object.familyName) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.email !== undefined && (obj.email = message.email);
        obj.orgsIds = {};
        if (message.orgsIds) {
            Object.entries(message.orgsIds).forEach(function (_m) {
                var k = _m[0], v = _m[1];
                obj.orgsIds[k] = sylkUserRolesToJSON(v);
            });
        }
        message.locale !== undefined && (obj.locale = message.locale);
        message.givenName !== undefined && (obj.givenName = message.givenName);
        message.nickname !== undefined && (obj.nickname = message.nickname);
        message.status !== undefined && (obj.status = sylkUserStatusesToJSON(message.status));
        message.picture !== undefined && (obj.picture = message.picture);
        message.connection !== undefined && (obj.connection = message.connection);
        message.userId !== undefined && (obj.userId = message.userId);
        message.emailVerified !== undefined && (obj.emailVerified = message.emailVerified);
        message.familyName !== undefined && (obj.familyName = message.familyName);
        return obj;
    },
    create: function (base) {
        return exports.SylkUser.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseSylkUser();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.orgsIds = Object.entries((_b = object.orgsIds) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _m) {
            var key = _m[0], value = _m[1];
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.locale = (_c = object.locale) !== null && _c !== void 0 ? _c : "";
        message.givenName = (_d = object.givenName) !== null && _d !== void 0 ? _d : "";
        message.nickname = (_e = object.nickname) !== null && _e !== void 0 ? _e : "";
        message.status = (_f = object.status) !== null && _f !== void 0 ? _f : 0;
        message.picture = (_g = object.picture) !== null && _g !== void 0 ? _g : "";
        message.connection = (_h = object.connection) !== null && _h !== void 0 ? _h : "";
        message.userId = (_j = object.userId) !== null && _j !== void 0 ? _j : "";
        message.emailVerified = (_k = object.emailVerified) !== null && _k !== void 0 ? _k : false;
        message.familyName = (_l = object.familyName) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBaseSylkUser_OrgsIdsEntry() {
    return { key: "", value: 0 };
}
exports.SylkUser_OrgsIdsEntry = {
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
        var message = createBaseSylkUser_OrgsIdsEntry();
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
            value: isSet(object.value) ? sylkUserRolesFromJSON(object.value) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = sylkUserRolesToJSON(message.value));
        return obj;
    },
    create: function (base) {
        return exports.SylkUser_OrgsIdsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSylkUser_OrgsIdsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseSylkUserDisplay() {
    return { user: undefined, lastActive: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.SylkUserDisplay = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.user !== undefined) {
            exports.SylkUser.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.lastActive !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.lastActive), writer.uint32(34).fork()).ldelim();
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
        var message = createBaseSylkUserDisplay();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = exports.SylkUser.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.lastActive = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updatedAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            user: isSet(object.user) ? exports.SylkUser.fromJSON(object.user) : undefined,
            lastActive: isSet(object.lastActive) ? fromJsonTimestamp(object.lastActive) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.user !== undefined && (obj.user = message.user ? exports.SylkUser.toJSON(message.user) : undefined);
        message.lastActive !== undefined && (obj.lastActive = message.lastActive.toISOString());
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create: function (base) {
        return exports.SylkUserDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSylkUserDisplay();
        message.user = (object.user !== undefined && object.user !== null) ? exports.SylkUser.fromPartial(object.user) : undefined;
        message.lastActive = (_a = object.lastActive) !== null && _a !== void 0 ? _a : undefined;
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.updatedAt = (_c = object.updatedAt) !== null && _c !== void 0 ? _c : undefined;
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
