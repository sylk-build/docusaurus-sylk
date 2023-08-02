"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkCliConfigs = exports.SylkProjectConfigs = exports.SylkTemplateConfigs = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseSylkTemplateConfigs() {
    return { include: [], exclude: [], name: "", description: "", outPath: "", includeCode: false, author: "" };
}
exports.SylkTemplateConfigs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _h = message.include; _i < _h.length; _i++) {
            var v = _h[_i];
            writer.uint32(26).string(v);
        }
        for (var _j = 0, _k = message.exclude; _j < _k.length; _j++) {
            var v = _k[_j];
            writer.uint32(18).string(v);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.outPath !== "") {
            writer.uint32(50).string(message.outPath);
        }
        if (message.includeCode === true) {
            writer.uint32(8).bool(message.includeCode);
        }
        if (message.author !== "") {
            writer.uint32(58).string(message.author);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkTemplateConfigs();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.include.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.exclude.push(reader.string());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.outPath = reader.string();
                    continue;
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.includeCode = reader.bool();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.author = reader.string();
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
            include: Array.isArray(object === null || object === void 0 ? void 0 : object.include) ? object.include.map(function (e) { return String(e); }) : [],
            exclude: Array.isArray(object === null || object === void 0 ? void 0 : object.exclude) ? object.exclude.map(function (e) { return String(e); }) : [],
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            outPath: isSet(object.outPath) ? String(object.outPath) : "",
            includeCode: isSet(object.includeCode) ? Boolean(object.includeCode) : false,
            author: isSet(object.author) ? String(object.author) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.include) {
            obj.include = message.include.map(function (e) { return e; });
        }
        else {
            obj.include = [];
        }
        if (message.exclude) {
            obj.exclude = message.exclude.map(function (e) { return e; });
        }
        else {
            obj.exclude = [];
        }
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.outPath !== undefined && (obj.outPath = message.outPath);
        message.includeCode !== undefined && (obj.includeCode = message.includeCode);
        message.author !== undefined && (obj.author = message.author);
        return obj;
    },
    create: function (base) {
        return exports.SylkTemplateConfigs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseSylkTemplateConfigs();
        message.include = ((_a = object.include) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.exclude = ((_b = object.exclude) === null || _b === void 0 ? void 0 : _b.map(function (e) { return e; })) || [];
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.outPath = (_e = object.outPath) !== null && _e !== void 0 ? _e : "";
        message.includeCode = (_f = object.includeCode) !== null && _f !== void 0 ? _f : false;
        message.author = (_g = object.author) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseSylkProjectConfigs() {
    return {
        description: "",
        host: "",
        template: undefined,
        port: 0,
        currentVersion: "",
        plugins: [],
        protoBasePath: "",
        protoCompiledPath: "",
    };
}
exports.SylkProjectConfigs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.template !== undefined) {
            exports.SylkTemplateConfigs.encode(message.template, writer.uint32(42).fork()).ldelim();
        }
        if (message.port !== 0) {
            writer.uint32(16).int32(message.port);
        }
        if (message.currentVersion !== "") {
            writer.uint32(34).string(message.currentVersion);
        }
        for (var _i = 0, _h = message.plugins; _i < _h.length; _i++) {
            var v = _h[_i];
            writer.uint32(50).string(v);
        }
        if (message.protoBasePath !== "") {
            writer.uint32(58).string(message.protoBasePath);
        }
        if (message.protoCompiledPath !== "") {
            writer.uint32(66).string(message.protoCompiledPath);
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.template = exports.SylkTemplateConfigs.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.port = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.currentVersion = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.plugins.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.protoBasePath = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.protoCompiledPath = reader.string();
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
            host: isSet(object.host) ? String(object.host) : "",
            template: isSet(object.template) ? exports.SylkTemplateConfigs.fromJSON(object.template) : undefined,
            port: isSet(object.port) ? Number(object.port) : 0,
            currentVersion: isSet(object.currentVersion) ? String(object.currentVersion) : "",
            plugins: Array.isArray(object === null || object === void 0 ? void 0 : object.plugins) ? object.plugins.map(function (e) { return String(e); }) : [],
            protoBasePath: isSet(object.protoBasePath) ? String(object.protoBasePath) : "",
            protoCompiledPath: isSet(object.protoCompiledPath) ? String(object.protoCompiledPath) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.description !== undefined && (obj.description = message.description);
        message.host !== undefined && (obj.host = message.host);
        message.template !== undefined &&
            (obj.template = message.template ? exports.SylkTemplateConfigs.toJSON(message.template) : undefined);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.currentVersion !== undefined && (obj.currentVersion = message.currentVersion);
        if (message.plugins) {
            obj.plugins = message.plugins.map(function (e) { return e; });
        }
        else {
            obj.plugins = [];
        }
        message.protoBasePath !== undefined && (obj.protoBasePath = message.protoBasePath);
        message.protoCompiledPath !== undefined && (obj.protoCompiledPath = message.protoCompiledPath);
        return obj;
    },
    create: function (base) {
        return exports.SylkProjectConfigs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseSylkProjectConfigs();
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.host = (_b = object.host) !== null && _b !== void 0 ? _b : "";
        message.template = (object.template !== undefined && object.template !== null)
            ? exports.SylkTemplateConfigs.fromPartial(object.template)
            : undefined;
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        message.currentVersion = (_d = object.currentVersion) !== null && _d !== void 0 ? _d : "";
        message.plugins = ((_e = object.plugins) === null || _e === void 0 ? void 0 : _e.map(function (e) { return e; })) || [];
        message.protoBasePath = (_f = object.protoBasePath) !== null && _f !== void 0 ? _f : "";
        message.protoCompiledPath = (_g = object.protoCompiledPath) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseSylkCliConfigs() {
    return { sylkTemplates: [], port: 0, token: "", analytics: false, firstRun: false, host: "", plugins: [] };
}
exports.SylkCliConfigs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _h = message.sylkTemplates; _i < _h.length; _i++) {
            var v = _h[_i];
            writer.uint32(50).string(v);
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
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        for (var _j = 0, _k = message.plugins; _j < _k.length; _j++) {
            var v = _k[_j];
            writer.uint32(58).string(v);
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
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.sylkTemplates.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.port = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.analytics = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.firstRun = reader.bool();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.host = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.plugins.push(reader.string());
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
            sylkTemplates: Array.isArray(object === null || object === void 0 ? void 0 : object.sylkTemplates) ? object.sylkTemplates.map(function (e) { return String(e); }) : [],
            port: isSet(object.port) ? Number(object.port) : 0,
            token: isSet(object.token) ? String(object.token) : "",
            analytics: isSet(object.analytics) ? Boolean(object.analytics) : false,
            firstRun: isSet(object.firstRun) ? Boolean(object.firstRun) : false,
            host: isSet(object.host) ? String(object.host) : "",
            plugins: Array.isArray(object === null || object === void 0 ? void 0 : object.plugins) ? object.plugins.map(function (e) { return String(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.sylkTemplates) {
            obj.sylkTemplates = message.sylkTemplates.map(function (e) { return e; });
        }
        else {
            obj.sylkTemplates = [];
        }
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.token !== undefined && (obj.token = message.token);
        message.analytics !== undefined && (obj.analytics = message.analytics);
        message.firstRun !== undefined && (obj.firstRun = message.firstRun);
        message.host !== undefined && (obj.host = message.host);
        if (message.plugins) {
            obj.plugins = message.plugins.map(function (e) { return e; });
        }
        else {
            obj.plugins = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.SylkCliConfigs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseSylkCliConfigs();
        message.sylkTemplates = ((_a = object.sylkTemplates) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        message.port = (_b = object.port) !== null && _b !== void 0 ? _b : 0;
        message.token = (_c = object.token) !== null && _c !== void 0 ? _c : "";
        message.analytics = (_d = object.analytics) !== null && _d !== void 0 ? _d : false;
        message.firstRun = (_e = object.firstRun) !== null && _e !== void 0 ? _e : false;
        message.host = (_f = object.host) !== null && _f !== void 0 ? _f : "";
        message.plugins = ((_g = object.plugins) === null || _g === void 0 ? void 0 : _g.map(function (e) { return e; })) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
