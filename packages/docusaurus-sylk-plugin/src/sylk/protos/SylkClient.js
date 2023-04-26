"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkClient = exports.sylkClientLanguagesToJSON = exports.sylkClientLanguagesFromJSON = exports.SylkClientLanguages = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkClient.v1.SylkClientLanguages] - */
var SylkClientLanguages;
(function (SylkClientLanguages) {
    /** DEFAULT_SYLKCLIENTLANGUAGES - [sylk.SylkClient.v1.SylkClientLanguages] - Default enum value for "sylk.SylkClient.v1.SylkClientLanguages" */
    SylkClientLanguages[SylkClientLanguages["DEFAULT_SYLKCLIENTLANGUAGES"] = 0] = "DEFAULT_SYLKCLIENTLANGUAGES";
    /** python - [sylk.SylkClient.v1.SylkClientLanguages] - */
    SylkClientLanguages[SylkClientLanguages["python"] = 1] = "python";
    /** nodejs - [sylk.SylkClient.v1.SylkClientLanguages] - */
    SylkClientLanguages[SylkClientLanguages["nodejs"] = 2] = "nodejs";
    /** typescript - [sylk.SylkClient.v1.SylkClientLanguages] - */
    SylkClientLanguages[SylkClientLanguages["typescript"] = 3] = "typescript";
    /** go - [sylk.SylkClient.v1.SylkClientLanguages] - */
    SylkClientLanguages[SylkClientLanguages["go"] = 4] = "go";
    SylkClientLanguages[SylkClientLanguages["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SylkClientLanguages = exports.SylkClientLanguages || (exports.SylkClientLanguages = {}));
function sylkClientLanguagesFromJSON(object) {
    switch (object) {
        case 0:
        case "DEFAULT_SYLKCLIENTLANGUAGES":
            return SylkClientLanguages.DEFAULT_SYLKCLIENTLANGUAGES;
        case 1:
        case "python":
            return SylkClientLanguages.python;
        case 2:
        case "nodejs":
            return SylkClientLanguages.nodejs;
        case 3:
        case "typescript":
            return SylkClientLanguages.typescript;
        case 4:
        case "go":
            return SylkClientLanguages.go;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SylkClientLanguages.UNRECOGNIZED;
    }
}
exports.sylkClientLanguagesFromJSON = sylkClientLanguagesFromJSON;
function sylkClientLanguagesToJSON(object) {
    switch (object) {
        case SylkClientLanguages.DEFAULT_SYLKCLIENTLANGUAGES:
            return "DEFAULT_SYLKCLIENTLANGUAGES";
        case SylkClientLanguages.python:
            return "python";
        case SylkClientLanguages.nodejs:
            return "nodejs";
        case SylkClientLanguages.typescript:
            return "typescript";
        case SylkClientLanguages.go:
            return "go";
        case SylkClientLanguages.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sylkClientLanguagesToJSON = sylkClientLanguagesToJSON;
function createBaseSylkClient() {
    return { language: 0, outDir: "" };
}
exports.SylkClient = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.language !== 0) {
            writer.uint32(8).int32(message.language);
        }
        if (message.outDir !== "") {
            writer.uint32(18).string(message.outDir);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSylkClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.language = reader.int32();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.outDir = reader.string();
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
            language: isSet(object.language) ? sylkClientLanguagesFromJSON(object.language) : 0,
            outDir: isSet(object.outDir) ? String(object.outDir) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.language !== undefined && (obj.language = sylkClientLanguagesToJSON(message.language));
        message.outDir !== undefined && (obj.outDir = message.outDir);
        return obj;
    },
    create(base) {
        return exports.SylkClient.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSylkClient();
        message.language = (_a = object.language) !== null && _a !== void 0 ? _a : 0;
        message.outDir = (_b = object.outDir) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=SylkClient.js.map