"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkServer = exports.sylkServerLanguagesToJSON = exports.sylkServerLanguagesFromJSON = exports.SylkServerLanguages = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkServer.v1.SylkServerLanguages] - None */
var SylkServerLanguages;
(function (SylkServerLanguages) {
    /** DEFAULT_SYLKSERVERLANGUAGES - [sylk.SylkServer.v1.SylkServerLanguages] - Default enum value for "sylk.SylkServer.v1.SylkServerLanguages" */
    SylkServerLanguages[SylkServerLanguages["DEFAULT_SYLKSERVERLANGUAGES"] = 0] = "DEFAULT_SYLKSERVERLANGUAGES";
    /** python - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    SylkServerLanguages[SylkServerLanguages["python"] = 1] = "python";
    /** nodejs - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    SylkServerLanguages[SylkServerLanguages["nodejs"] = 2] = "nodejs";
    /** typescript - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    SylkServerLanguages[SylkServerLanguages["typescript"] = 3] = "typescript";
    /** go - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    SylkServerLanguages[SylkServerLanguages["go"] = 4] = "go";
    SylkServerLanguages[SylkServerLanguages["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SylkServerLanguages = exports.SylkServerLanguages || (exports.SylkServerLanguages = {}));
function sylkServerLanguagesFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SYLKSERVERLANGUAGES":
            return SylkServerLanguages.DEFAULT_SYLKSERVERLANGUAGES;
        case 1:
        case "python":
            return SylkServerLanguages.python;
        case 2:
        case "nodejs":
            return SylkServerLanguages.nodejs;
        case 3:
        case "typescript":
            return SylkServerLanguages.typescript;
        case 4:
        case "go":
            return SylkServerLanguages.go;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SylkServerLanguages.UNRECOGNIZED;
    }
}
exports.sylkServerLanguagesFromJSON = sylkServerLanguagesFromJSON;
function sylkServerLanguagesToJSON(object) {
    switch (object) {
        case SylkServerLanguages.DEFAULT_SYLKSERVERLANGUAGES:
            return "DEFAULT_SYLKSERVERLANGUAGES";
        case SylkServerLanguages.python:
            return "python";
        case SylkServerLanguages.nodejs:
            return "nodejs";
        case SylkServerLanguages.typescript:
            return "typescript";
        case SylkServerLanguages.go:
            return "go";
        case SylkServerLanguages.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sylkServerLanguagesToJSON = sylkServerLanguagesToJSON;
function createBaseSylkServer() {
    return { language: 0 };
}
exports.SylkServer = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.language !== 0) {
            writer.uint32(8).int32(message.language);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSylkServer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.language = reader.int32();
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
        return { language: isSet(object.language) ? sylkServerLanguagesFromJSON(object.language) : 0 };
    },
    toJSON: function (message) {
        var obj = {};
        message.language !== undefined && (obj.language = sylkServerLanguagesToJSON(message.language));
        return obj;
    },
    create: function (base) {
        return exports.SylkServer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseSylkServer();
        message.language = (_a = object.language) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
