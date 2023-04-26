"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkFieldDisplay = exports.SylkField_ExtensionsEntry = exports.SylkField = exports.SylkOneOfField = exports.sylkFieldLabelsToJSON = exports.sylkFieldLabelsFromJSON = exports.SylkFieldLabels = exports.sylkFieldTypesToJSON = exports.sylkFieldTypesFromJSON = exports.SylkFieldTypes = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("./google/protobuf/struct");
const timestamp_1 = require("./google/protobuf/timestamp");
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkField.v1.SylkFieldTypes] - */
var SylkFieldTypes;
(function (SylkFieldTypes) {
    /** DEFAULT_SYLKFIELDTYPES - [sylk.SylkField.v1.SylkFieldTypes] - Default enum value for "sylk.SylkField.v1.SylkFieldTypes" */
    SylkFieldTypes[SylkFieldTypes["DEFAULT_SYLKFIELDTYPES"] = 0] = "DEFAULT_SYLKFIELDTYPES";
    /** TYPE_DOUBLE - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    /** TYPE_FLOAT - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /** TYPE_INT64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_INT64"] = 3] = "TYPE_INT64";
    /** TYPE_UINT64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /** TYPE_INT32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_INT32"] = 5] = "TYPE_INT32";
    /** TYPE_FIXED64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    /** TYPE_FIXED32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    /** TYPE_BOOL - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    /** TYPE_STRING - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_STRING"] = 9] = "TYPE_STRING";
    /** TYPE_GROUP - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    /** TYPE_UINT32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    /** TYPE_ENUM - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    /** TYPE_SFIXED32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    /** TYPE_SFIXED64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    /** TYPE_MAP - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_MAP"] = 19] = "TYPE_MAP";
    /** TYPE_ONEOF - [sylk.SylkField.v1.SylkFieldTypes] - None */
    SylkFieldTypes[SylkFieldTypes["TYPE_ONEOF"] = 20] = "TYPE_ONEOF";
    SylkFieldTypes[SylkFieldTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SylkFieldTypes = exports.SylkFieldTypes || (exports.SylkFieldTypes = {}));
function sylkFieldTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SYLKFIELDTYPES":
            return SylkFieldTypes.DEFAULT_SYLKFIELDTYPES;
        case 1:
        case "TYPE_DOUBLE":
            return SylkFieldTypes.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return SylkFieldTypes.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return SylkFieldTypes.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return SylkFieldTypes.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return SylkFieldTypes.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return SylkFieldTypes.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return SylkFieldTypes.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return SylkFieldTypes.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return SylkFieldTypes.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return SylkFieldTypes.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return SylkFieldTypes.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return SylkFieldTypes.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return SylkFieldTypes.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return SylkFieldTypes.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return SylkFieldTypes.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return SylkFieldTypes.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return SylkFieldTypes.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return SylkFieldTypes.TYPE_SINT64;
        case 19:
        case "TYPE_MAP":
            return SylkFieldTypes.TYPE_MAP;
        case 20:
        case "TYPE_ONEOF":
            return SylkFieldTypes.TYPE_ONEOF;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SylkFieldTypes.UNRECOGNIZED;
    }
}
exports.sylkFieldTypesFromJSON = sylkFieldTypesFromJSON;
function sylkFieldTypesToJSON(object) {
    switch (object) {
        case SylkFieldTypes.DEFAULT_SYLKFIELDTYPES:
            return "DEFAULT_SYLKFIELDTYPES";
        case SylkFieldTypes.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case SylkFieldTypes.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case SylkFieldTypes.TYPE_INT64:
            return "TYPE_INT64";
        case SylkFieldTypes.TYPE_UINT64:
            return "TYPE_UINT64";
        case SylkFieldTypes.TYPE_INT32:
            return "TYPE_INT32";
        case SylkFieldTypes.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case SylkFieldTypes.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case SylkFieldTypes.TYPE_BOOL:
            return "TYPE_BOOL";
        case SylkFieldTypes.TYPE_STRING:
            return "TYPE_STRING";
        case SylkFieldTypes.TYPE_GROUP:
            return "TYPE_GROUP";
        case SylkFieldTypes.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case SylkFieldTypes.TYPE_BYTES:
            return "TYPE_BYTES";
        case SylkFieldTypes.TYPE_UINT32:
            return "TYPE_UINT32";
        case SylkFieldTypes.TYPE_ENUM:
            return "TYPE_ENUM";
        case SylkFieldTypes.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case SylkFieldTypes.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case SylkFieldTypes.TYPE_SINT32:
            return "TYPE_SINT32";
        case SylkFieldTypes.TYPE_SINT64:
            return "TYPE_SINT64";
        case SylkFieldTypes.TYPE_MAP:
            return "TYPE_MAP";
        case SylkFieldTypes.TYPE_ONEOF:
            return "TYPE_ONEOF";
        case SylkFieldTypes.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sylkFieldTypesToJSON = sylkFieldTypesToJSON;
/** [sylk.SylkField.v1.SylkFieldLabels] - */
var SylkFieldLabels;
(function (SylkFieldLabels) {
    /** DEFAULT_SYLKFIELDLABELS - [sylk.SylkField.v1.SylkFieldLabels] - Default enum value for "sylk.SylkField.v1.SylkFieldLabels" */
    SylkFieldLabels[SylkFieldLabels["DEFAULT_SYLKFIELDLABELS"] = 0] = "DEFAULT_SYLKFIELDLABELS";
    /** LABEL_OPTIONAL - [sylk.SylkField.v1.SylkFieldLabels] - None */
    SylkFieldLabels[SylkFieldLabels["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    /** LABEL_REQUIRED - [sylk.SylkField.v1.SylkFieldLabels] - None */
    SylkFieldLabels[SylkFieldLabels["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    /** LABEL_REPEATED - [sylk.SylkField.v1.SylkFieldLabels] - None */
    SylkFieldLabels[SylkFieldLabels["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    SylkFieldLabels[SylkFieldLabels["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SylkFieldLabels = exports.SylkFieldLabels || (exports.SylkFieldLabels = {}));
function sylkFieldLabelsFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SYLKFIELDLABELS":
            return SylkFieldLabels.DEFAULT_SYLKFIELDLABELS;
        case 1:
        case "LABEL_OPTIONAL":
            return SylkFieldLabels.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return SylkFieldLabels.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return SylkFieldLabels.LABEL_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SylkFieldLabels.UNRECOGNIZED;
    }
}
exports.sylkFieldLabelsFromJSON = sylkFieldLabelsFromJSON;
function sylkFieldLabelsToJSON(object) {
    switch (object) {
        case SylkFieldLabels.DEFAULT_SYLKFIELDLABELS:
            return "DEFAULT_SYLKFIELDLABELS";
        case SylkFieldLabels.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case SylkFieldLabels.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case SylkFieldLabels.LABEL_REPEATED:
            return "LABEL_REPEATED";
        case SylkFieldLabels.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sylkFieldLabelsToJSON = sylkFieldLabelsToJSON;
function createBaseSylkOneOfField() {
    return { uri: "", name: "", fullName: "", description: "", fieldType: 0, label: 0, messageType: "", enumType: "" };
}
exports.SylkOneOfField = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.fieldType !== 0) {
            writer.uint32(40).int32(message.fieldType);
        }
        if (message.label !== 0) {
            writer.uint32(48).int32(message.label);
        }
        if (message.messageType !== "") {
            writer.uint32(58).string(message.messageType);
        }
        if (message.enumType !== "") {
            writer.uint32(66).string(message.enumType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkOneOfField();
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
                    message.fullName = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.fieldType = reader.int32();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.label = reader.int32();
                    continue;
                case 7:
                    if (tag != 58) {
                        break;
                    }
                    message.messageType = reader.string();
                    continue;
                case 8:
                    if (tag != 66) {
                        break;
                    }
                    message.enumType = reader.string();
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
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            description: isSet(object.description) ? String(object.description) : "",
            fieldType: isSet(object.fieldType) ? sylkFieldTypesFromJSON(object.fieldType) : 0,
            label: isSet(object.label) ? sylkFieldLabelsFromJSON(object.label) : 0,
            messageType: isSet(object.messageType) ? String(object.messageType) : "",
            enumType: isSet(object.enumType) ? String(object.enumType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.name !== undefined && (obj.name = message.name);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.description !== undefined && (obj.description = message.description);
        message.fieldType !== undefined && (obj.fieldType = sylkFieldTypesToJSON(message.fieldType));
        message.label !== undefined && (obj.label = sylkFieldLabelsToJSON(message.label));
        message.messageType !== undefined && (obj.messageType = message.messageType);
        message.enumType !== undefined && (obj.enumType = message.enumType);
        return obj;
    },
    create(base) {
        return exports.SylkOneOfField.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseSylkOneOfField();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.fullName = (_c = object.fullName) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.fieldType = (_e = object.fieldType) !== null && _e !== void 0 ? _e : 0;
        message.label = (_f = object.label) !== null && _f !== void 0 ? _f : 0;
        message.messageType = (_g = object.messageType) !== null && _g !== void 0 ? _g : "";
        message.enumType = (_h = object.enumType) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseSylkField() {
    return {
        uri: "",
        name: "",
        fullName: "",
        description: "",
        fieldType: 0,
        label: 0,
        keyType: 0,
        valueType: 0,
        messageType: "",
        enumType: "",
        type: "",
        kind: "",
        index: 0,
        extensions: {},
        oneofFields: [],
    };
}
exports.SylkField = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        if (message.fieldType !== 0) {
            writer.uint32(40).int32(message.fieldType);
        }
        if (message.label !== 0) {
            writer.uint32(48).int32(message.label);
        }
        if (message.keyType !== 0) {
            writer.uint32(56).int32(message.keyType);
        }
        if (message.valueType !== 0) {
            writer.uint32(64).int32(message.valueType);
        }
        if (message.messageType !== "") {
            writer.uint32(74).string(message.messageType);
        }
        if (message.enumType !== "") {
            writer.uint32(82).string(message.enumType);
        }
        if (message.type !== "") {
            writer.uint32(90).string(message.type);
        }
        if (message.kind !== "") {
            writer.uint32(98).string(message.kind);
        }
        if (message.index !== 0) {
            writer.uint32(104).int32(message.index);
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.SylkField_ExtensionsEntry.encode({ key: key, value }, writer.uint32(114).fork()).ldelim();
            }
        });
        for (const v of message.oneofFields) {
            exports.SylkOneOfField.encode(v, writer.uint32(122).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkField();
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
                    message.fullName = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 5:
                    if (tag != 40) {
                        break;
                    }
                    message.fieldType = reader.int32();
                    continue;
                case 6:
                    if (tag != 48) {
                        break;
                    }
                    message.label = reader.int32();
                    continue;
                case 7:
                    if (tag != 56) {
                        break;
                    }
                    message.keyType = reader.int32();
                    continue;
                case 8:
                    if (tag != 64) {
                        break;
                    }
                    message.valueType = reader.int32();
                    continue;
                case 9:
                    if (tag != 74) {
                        break;
                    }
                    message.messageType = reader.string();
                    continue;
                case 10:
                    if (tag != 82) {
                        break;
                    }
                    message.enumType = reader.string();
                    continue;
                case 11:
                    if (tag != 90) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 12:
                    if (tag != 98) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 13:
                    if (tag != 104) {
                        break;
                    }
                    message.index = reader.int32();
                    continue;
                case 14:
                    if (tag != 114) {
                        break;
                    }
                    const entry14 = exports.SylkField_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry14.value !== undefined) {
                        message.extensions[entry14.key] = entry14.value;
                    }
                    continue;
                case 15:
                    if (tag != 122) {
                        break;
                    }
                    message.oneofFields.push(exports.SylkOneOfField.decode(reader, reader.uint32()));
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
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            description: isSet(object.description) ? String(object.description) : "",
            fieldType: isSet(object.fieldType) ? sylkFieldTypesFromJSON(object.fieldType) : 0,
            label: isSet(object.label) ? sylkFieldLabelsFromJSON(object.label) : 0,
            keyType: isSet(object.keyType) ? sylkFieldTypesFromJSON(object.keyType) : 0,
            valueType: isSet(object.valueType) ? sylkFieldTypesFromJSON(object.valueType) : 0,
            messageType: isSet(object.messageType) ? String(object.messageType) : "",
            enumType: isSet(object.enumType) ? String(object.enumType) : "",
            type: isSet(object.type) ? String(object.type) : "",
            kind: isSet(object.kind) ? String(object.kind) : "",
            index: isSet(object.index) ? Number(object.index) : 0,
            extensions: isObject(object.extensions)
                ? Object.entries(object.extensions).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
            oneofFields: Array.isArray(object === null || object === void 0 ? void 0 : object.oneofFields)
                ? object.oneofFields.map((e) => exports.SylkOneOfField.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.name !== undefined && (obj.name = message.name);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.description !== undefined && (obj.description = message.description);
        message.fieldType !== undefined && (obj.fieldType = sylkFieldTypesToJSON(message.fieldType));
        message.label !== undefined && (obj.label = sylkFieldLabelsToJSON(message.label));
        message.keyType !== undefined && (obj.keyType = sylkFieldTypesToJSON(message.keyType));
        message.valueType !== undefined && (obj.valueType = sylkFieldTypesToJSON(message.valueType));
        message.messageType !== undefined && (obj.messageType = message.messageType);
        message.enumType !== undefined && (obj.enumType = message.enumType);
        message.type !== undefined && (obj.type = message.type);
        message.kind !== undefined && (obj.kind = message.kind);
        message.index !== undefined && (obj.index = Math.round(message.index));
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        if (message.oneofFields) {
            obj.oneofFields = message.oneofFields.map((e) => e ? exports.SylkOneOfField.toJSON(e) : undefined);
        }
        else {
            obj.oneofFields = [];
        }
        return obj;
    },
    create(base) {
        return exports.SylkField.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseSylkField();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.fullName = (_c = object.fullName) !== null && _c !== void 0 ? _c : "";
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.fieldType = (_e = object.fieldType) !== null && _e !== void 0 ? _e : 0;
        message.label = (_f = object.label) !== null && _f !== void 0 ? _f : 0;
        message.keyType = (_g = object.keyType) !== null && _g !== void 0 ? _g : 0;
        message.valueType = (_h = object.valueType) !== null && _h !== void 0 ? _h : 0;
        message.messageType = (_j = object.messageType) !== null && _j !== void 0 ? _j : "";
        message.enumType = (_k = object.enumType) !== null && _k !== void 0 ? _k : "";
        message.type = (_l = object.type) !== null && _l !== void 0 ? _l : "";
        message.kind = (_m = object.kind) !== null && _m !== void 0 ? _m : "";
        message.index = (_o = object.index) !== null && _o !== void 0 ? _o : 0;
        message.extensions = Object.entries((_p = object.extensions) !== null && _p !== void 0 ? _p : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        message.oneofFields = ((_q = object.oneofFields) === null || _q === void 0 ? void 0 : _q.map((e) => exports.SylkOneOfField.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSylkField_ExtensionsEntry() {
    return { key: "", value: undefined };
}
exports.SylkField_ExtensionsEntry = {
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
        const message = createBaseSylkField_ExtensionsEntry();
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
        return exports.SylkField_ExtensionsEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkField_ExtensionsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseSylkFieldDisplay() {
    return { field: undefined, createdAt: undefined, updatedAt: undefined };
}
exports.SylkFieldDisplay = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.field !== undefined) {
            exports.SylkField.encode(message.field, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseSylkFieldDisplay();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.field = exports.SylkField.decode(reader, reader.uint32());
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
            field: isSet(object.field) ? exports.SylkField.fromJSON(object.field) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.field !== undefined && (obj.field = message.field ? exports.SylkField.toJSON(message.field) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.updatedAt !== undefined && (obj.updatedAt = message.updatedAt.toISOString());
        return obj;
    },
    create(base) {
        return exports.SylkFieldDisplay.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkFieldDisplay();
        message.field = (object.field !== undefined && object.field !== null)
            ? exports.SylkField.fromPartial(object.field)
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
//# sourceMappingURL=SylkField.js.map