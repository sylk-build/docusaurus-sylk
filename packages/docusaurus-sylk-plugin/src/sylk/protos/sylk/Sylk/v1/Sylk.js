"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkJson_PackagesEntry = exports.SylkJson_ServicesEntry = exports.SylkJson = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const SylkConfigs_1 = require("../../SylkConfigs/v1/SylkConfigs");
const SylkOrganization_1 = require("../../SylkOrganization/v1/SylkOrganization");
const SylkPackage_1 = require("../../SylkPackage/v1/SylkPackage");
const SylkProject_1 = require("../../SylkProject/v1/SylkProject");
const SylkService_1 = require("../../SylkService/v1/SylkService");
function createBaseSylkJson() {
    return {
        sylkVersion: "",
        project: undefined,
        organization: undefined,
        services: {},
        packages: {},
        configs: undefined,
    };
}
exports.SylkJson = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sylkVersion !== "") {
            writer.uint32(42).string(message.sylkVersion);
        }
        if (message.project !== undefined) {
            SylkProject_1.SylkProject.encode(message.project, writer.uint32(50).fork()).ldelim();
        }
        if (message.organization !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.organization, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.services).forEach(([key, value]) => {
            exports.SylkJson_ServicesEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        Object.entries(message.packages).forEach(([key, value]) => {
            exports.SylkJson_PackagesEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
        if (message.configs !== undefined) {
            SylkConfigs_1.SylkProjectConfigs.encode(message.configs, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkJson();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.sylkVersion = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.project = SylkProject_1.SylkProject.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.organization = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = exports.SylkJson_ServicesEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.services[entry3.key] = entry3.value;
                    }
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    const entry2 = exports.SylkJson_PackagesEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.packages[entry2.key] = entry2.value;
                    }
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.configs = SylkConfigs_1.SylkProjectConfigs.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            sylkVersion: isSet(object.sylkVersion) ? String(object.sylkVersion) : "",
            project: isSet(object.project) ? SylkProject_1.SylkProject.fromJSON(object.project) : undefined,
            organization: isSet(object.organization) ? SylkOrganization_1.SylkOrganization.fromJSON(object.organization) : undefined,
            services: isObject(object.services)
                ? Object.entries(object.services).reduce((acc, [key, value]) => {
                    acc[key] = SylkService_1.SylkService.fromJSON(value);
                    return acc;
                }, {})
                : {},
            packages: isObject(object.packages)
                ? Object.entries(object.packages).reduce((acc, [key, value]) => {
                    acc[key] = SylkPackage_1.SylkPackage.fromJSON(value);
                    return acc;
                }, {})
                : {},
            configs: isSet(object.configs) ? SylkConfigs_1.SylkProjectConfigs.fromJSON(object.configs) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sylkVersion !== undefined && (obj.sylkVersion = message.sylkVersion);
        message.project !== undefined && (obj.project = message.project ? SylkProject_1.SylkProject.toJSON(message.project) : undefined);
        message.organization !== undefined &&
            (obj.organization = message.organization ? SylkOrganization_1.SylkOrganization.toJSON(message.organization) : undefined);
        obj.services = {};
        if (message.services) {
            Object.entries(message.services).forEach(([k, v]) => {
                obj.services[k] = SylkService_1.SylkService.toJSON(v);
            });
        }
        obj.packages = {};
        if (message.packages) {
            Object.entries(message.packages).forEach(([k, v]) => {
                obj.packages[k] = SylkPackage_1.SylkPackage.toJSON(v);
            });
        }
        message.configs !== undefined &&
            (obj.configs = message.configs ? SylkConfigs_1.SylkProjectConfigs.toJSON(message.configs) : undefined);
        return obj;
    },
    create(base) {
        return exports.SylkJson.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSylkJson();
        message.sylkVersion = (_a = object.sylkVersion) !== null && _a !== void 0 ? _a : "";
        message.project = (object.project !== undefined && object.project !== null)
            ? SylkProject_1.SylkProject.fromPartial(object.project)
            : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.organization)
            : undefined;
        message.services = Object.entries((_b = object.services) !== null && _b !== void 0 ? _b : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = SylkService_1.SylkService.fromPartial(value);
            }
            return acc;
        }, {});
        message.packages = Object.entries((_c = object.packages) !== null && _c !== void 0 ? _c : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = SylkPackage_1.SylkPackage.fromPartial(value);
            }
            return acc;
        }, {});
        message.configs = (object.configs !== undefined && object.configs !== null)
            ? SylkConfigs_1.SylkProjectConfigs.fromPartial(object.configs)
            : undefined;
        return message;
    },
};
function createBaseSylkJson_ServicesEntry() {
    return { key: "", value: undefined };
}
exports.SylkJson_ServicesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            SylkService_1.SylkService.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkJson_ServicesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    message.value = SylkService_1.SylkService.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? SylkService_1.SylkService.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? SylkService_1.SylkService.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.SylkJson_ServicesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSylkJson_ServicesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? SylkService_1.SylkService.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseSylkJson_PackagesEntry() {
    return { key: "", value: undefined };
}
exports.SylkJson_PackagesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkJson_PackagesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
                    message.value = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? SylkPackage_1.SylkPackage.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? SylkPackage_1.SylkPackage.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return exports.SylkJson_PackagesEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSylkJson_PackagesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.value)
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
//# sourceMappingURL=Sylk.js.map