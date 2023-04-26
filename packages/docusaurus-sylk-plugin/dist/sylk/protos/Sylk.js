"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkJson_ServicesEntry = exports.SylkJson_PackagesEntry = exports.SylkJson = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var SylkConfigs_1 = require("./SylkConfigs");
var SylkOrganization_1 = require("./SylkOrganization");
var SylkPackage_1 = require("./SylkPackage");
var SylkProject_1 = require("./SylkProject");
var SylkService_1 = require("./SylkService");
function createBaseSylkJson() {
    return {
        organization: undefined,
        packages: {},
        services: {},
        configs: undefined,
        sylkVersion: "",
        project: undefined,
    };
}
exports.SylkJson = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.organization !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.organization, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.packages).forEach(function (_d) {
            var key = _d[0], value = _d[1];
            exports.SylkJson_PackagesEntry.encode({ key: key, value: value }, writer.uint32(18).fork()).ldelim();
        });
        Object.entries(message.services).forEach(function (_d) {
            var key = _d[0], value = _d[1];
            exports.SylkJson_ServicesEntry.encode({ key: key, value: value }, writer.uint32(26).fork()).ldelim();
        });
        if (message.configs !== undefined) {
            SylkConfigs_1.SylkProjectConfigs.encode(message.configs, writer.uint32(34).fork()).ldelim();
        }
        if (message.sylkVersion !== "") {
            writer.uint32(42).string(message.sylkVersion);
        }
        if (message.project !== undefined) {
            SylkProject_1.SylkProject.encode(message.project, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkJson();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.organization = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    var entry2 = exports.SylkJson_PackagesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.packages[entry2.key] = entry2.value;
                    }
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    var entry3 = exports.SylkJson_ServicesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.services[entry3.key] = entry3.value;
                    }
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.configs = SylkConfigs_1.SylkProjectConfigs.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag != 42) {
                        break;
                    }
                    message.sylkVersion = reader.string();
                    continue;
                case 6:
                    if (tag != 50) {
                        break;
                    }
                    message.project = SylkProject_1.SylkProject.decode(reader, reader.uint32());
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
            organization: isSet(object.organization) ? SylkOrganization_1.SylkOrganization.fromJSON(object.organization) : undefined,
            packages: isObject(object.packages)
                ? Object.entries(object.packages).reduce(function (acc, _d) {
                    var key = _d[0], value = _d[1];
                    acc[key] = SylkPackage_1.SylkPackage.fromJSON(value);
                    return acc;
                }, {})
                : {},
            services: isObject(object.services)
                ? Object.entries(object.services).reduce(function (acc, _d) {
                    var key = _d[0], value = _d[1];
                    acc[key] = SylkService_1.SylkService.fromJSON(value);
                    return acc;
                }, {})
                : {},
            configs: isSet(object.configs) ? SylkConfigs_1.SylkProjectConfigs.fromJSON(object.configs) : undefined,
            sylkVersion: isSet(object.sylkVersion) ? String(object.sylkVersion) : "",
            project: isSet(object.project) ? SylkProject_1.SylkProject.fromJSON(object.project) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.organization !== undefined &&
            (obj.organization = message.organization ? SylkOrganization_1.SylkOrganization.toJSON(message.organization) : undefined);
        obj.packages = {};
        if (message.packages) {
            Object.entries(message.packages).forEach(function (_d) {
                var k = _d[0], v = _d[1];
                obj.packages[k] = SylkPackage_1.SylkPackage.toJSON(v);
            });
        }
        obj.services = {};
        if (message.services) {
            Object.entries(message.services).forEach(function (_d) {
                var k = _d[0], v = _d[1];
                obj.services[k] = SylkService_1.SylkService.toJSON(v);
            });
        }
        message.configs !== undefined &&
            (obj.configs = message.configs ? SylkConfigs_1.SylkProjectConfigs.toJSON(message.configs) : undefined);
        message.sylkVersion !== undefined && (obj.sylkVersion = message.sylkVersion);
        message.project !== undefined && (obj.project = message.project ? SylkProject_1.SylkProject.toJSON(message.project) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SylkJson.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseSylkJson();
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.organization)
            : undefined;
        message.packages = Object.entries((_a = object.packages) !== null && _a !== void 0 ? _a : {}).reduce(function (acc, _d) {
            var key = _d[0], value = _d[1];
            if (value !== undefined) {
                acc[key] = SylkPackage_1.SylkPackage.fromPartial(value);
            }
            return acc;
        }, {});
        message.services = Object.entries((_b = object.services) !== null && _b !== void 0 ? _b : {}).reduce(function (acc, _d) {
            var key = _d[0], value = _d[1];
            if (value !== undefined) {
                acc[key] = SylkService_1.SylkService.fromPartial(value);
            }
            return acc;
        }, {});
        message.configs = (object.configs !== undefined && object.configs !== null)
            ? SylkConfigs_1.SylkProjectConfigs.fromPartial(object.configs)
            : undefined;
        message.sylkVersion = (_c = object.sylkVersion) !== null && _c !== void 0 ? _c : "";
        message.project = (object.project !== undefined && object.project !== null)
            ? SylkProject_1.SylkProject.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseSylkJson_PackagesEntry() {
    return { key: "", value: undefined };
}
exports.SylkJson_PackagesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkJson_PackagesEntry();
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
                    message.value = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? SylkPackage_1.SylkPackage.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? SylkPackage_1.SylkPackage.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SylkJson_PackagesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSylkJson_PackagesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseSylkJson_ServicesEntry() {
    return { key: "", value: undefined };
}
exports.SylkJson_ServicesEntry = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            SylkService_1.SylkService.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkJson_ServicesEntry();
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
                    message.value = SylkService_1.SylkService.decode(reader, reader.uint32());
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
            value: isSet(object.value) ? SylkService_1.SylkService.fromJSON(object.value) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? SylkService_1.SylkService.toJSON(message.value) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.SylkJson_ServicesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSylkJson_ServicesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? SylkService_1.SylkService.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
