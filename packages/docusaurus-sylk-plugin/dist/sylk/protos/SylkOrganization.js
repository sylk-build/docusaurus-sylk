"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkOrganizationDisplay = exports.SylkOrganization = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var SylkProject_1 = require("./SylkProject");
var SylkUser_1 = require("./SylkUser");
function createBaseSylkOrganization() {
    return { orgId: "", name: "", domain: "", owner: "" };
}
exports.SylkOrganization = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.domain !== "") {
            writer.uint32(26).string(message.domain);
        }
        if (message.owner !== "") {
            writer.uint32(34).string(message.owner);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkOrganization();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
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
                    message.domain = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.owner = reader.string();
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
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            domain: isSet(object.domain) ? String(object.domain) : "",
            owner: isSet(object.owner) ? String(object.owner) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.name !== undefined && (obj.name = message.name);
        message.domain !== undefined && (obj.domain = message.domain);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    create: function (base) {
        return exports.SylkOrganization.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSylkOrganization();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.domain = (_c = object.domain) !== null && _c !== void 0 ? _c : "";
        message.owner = (_d = object.owner) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseSylkOrganizationDisplay() {
    return { organization: undefined, users: [], projects: [] };
}
exports.SylkOrganizationDisplay = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.organization !== undefined) {
            exports.SylkOrganization.encode(message.organization, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _e = message.users; _i < _e.length; _i++) {
            var v = _e[_i];
            SylkUser_1.SylkUserDisplay.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (var _f = 0, _g = message.projects; _f < _g.length; _f++) {
            var v = _g[_f];
            SylkProject_1.SylkProjectDisplay.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkOrganizationDisplay();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.organization = exports.SylkOrganization.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.users.push(SylkUser_1.SylkUserDisplay.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.projects.push(SylkProject_1.SylkProjectDisplay.decode(reader, reader.uint32()));
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
            organization: isSet(object.organization) ? exports.SylkOrganization.fromJSON(object.organization) : undefined,
            users: Array.isArray(object === null || object === void 0 ? void 0 : object.users) ? object.users.map(function (e) { return SylkUser_1.SylkUserDisplay.fromJSON(e); }) : [],
            projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map(function (e) { return SylkProject_1.SylkProjectDisplay.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.organization !== undefined &&
            (obj.organization = message.organization ? exports.SylkOrganization.toJSON(message.organization) : undefined);
        if (message.users) {
            obj.users = message.users.map(function (e) { return e ? SylkUser_1.SylkUserDisplay.toJSON(e) : undefined; });
        }
        else {
            obj.users = [];
        }
        if (message.projects) {
            obj.projects = message.projects.map(function (e) { return e ? SylkProject_1.SylkProjectDisplay.toJSON(e) : undefined; });
        }
        else {
            obj.projects = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.SylkOrganizationDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseSylkOrganizationDisplay();
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? exports.SylkOrganization.fromPartial(object.organization)
            : undefined;
        message.users = ((_a = object.users) === null || _a === void 0 ? void 0 : _a.map(function (e) { return SylkUser_1.SylkUserDisplay.fromPartial(e); })) || [];
        message.projects = ((_b = object.projects) === null || _b === void 0 ? void 0 : _b.map(function (e) { return SylkProject_1.SylkProjectDisplay.fromPartial(e); })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
