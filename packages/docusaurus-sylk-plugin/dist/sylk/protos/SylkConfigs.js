"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkProjectConfigs = exports.SylkCliConfigs = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseSylkCliConfigs() {
    return { host: "", port: 0, token: "", analytics: false, firstRun: false };
}
exports.SylkCliConfigs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).int32(message.port);
        }
        if (message.token !== "") {
            writer.uint32(26).string(message.token);
        }
        if (message.analytics === true) {
            writer.uint32(32).bool(message.analytics);
        }
        if (message.firstRun === true) {
            writer.uint32(40).bool(message.firstRun);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkCliConfigs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.port = reader.int32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
                case 4:
                    if (tag != 32) {
                        break;
                    }
                    message.analytics = reader.bool();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.firstRun = reader.bool();
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
            host: isSet(object.host) ? String(object.host) : "",
            port: isSet(object.port) ? Number(object.port) : 0,
            token: isSet(object.token) ? String(object.token) : "",
            analytics: isSet(object.analytics) ? Boolean(object.analytics) : false,
            firstRun: isSet(object.firstRun) ? Boolean(object.firstRun) : false,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.token !== undefined && (obj.token = message.token);
        message.analytics !== undefined && (obj.analytics = message.analytics);
        message.firstRun !== undefined && (obj.firstRun = message.firstRun);
        return obj;
    },
    create: function (base) {
        return exports.SylkCliConfigs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseSylkCliConfigs();
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : "";
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.analytics = (_d = object.analytics) !== null && _d !== void 0 ? _d : false;
        message.firstRun = (_e = object.firstRun) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseSylkProjectConfigs() {
    return { host: "", port: 0, description: "", currentVersion: "" };
}
exports.SylkProjectConfigs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(16).int32(message.port);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.currentVersion !== "") {
            writer.uint32(34).string(message.currentVersion);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkProjectConfigs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.port = reader.int32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.currentVersion = reader.string();
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
            host: isSet(object.host) ? String(object.host) : "",
            port: isSet(object.port) ? Number(object.port) : 0,
            description: isSet(object.description) ? String(object.description) : "",
            currentVersion: isSet(object.currentVersion) ? String(object.currentVersion) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.description !== undefined && (obj.description = message.description);
        message.currentVersion !== undefined && (obj.currentVersion = message.currentVersion);
        return obj;
    },
    create: function (base) {
        return exports.SylkProjectConfigs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseSylkProjectConfigs();
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : "";
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.currentVersion = (_d = object.currentVersion) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
