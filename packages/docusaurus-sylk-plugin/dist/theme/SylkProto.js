"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkMessage = void 0;
var react_1 = __importDefault(require("react"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var leftHeaderStyles = {
    textAlign: "left",
};
var SylkProtoMessageFields = function (props) {
    var fields = props.fields;
    var protoMessageObject = {};
    var Headers = function () { return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", null,
            react_1.default.createElement("th", null, "Name"),
            react_1.default.createElement("th", null, "Type"),
            react_1.default.createElement("th", null, "Description")))); };
    var FieldTypeCell = function (_a) {
        var field = _a.field;
        var typeCell = field.typeLink === undefined
            ? react_1.default.createElement("code", null, field.longType)
            : react_1.default.createElement(Link_1.default, { to: field.typeLink },
                react_1.default.createElement("code", null, field.longType));
        return (react_1.default.createElement("span", null,
            field.label !== "" && react_1.default.createElement("i", null,
                field.label,
                "\u00A0"),
            typeCell));
    };
    var FieldRows = function () { return (react_1.default.createElement("pre", null,
        react_1.default.createElement("span", null),
        react_1.default.createElement("span", null, "{"),
        fields.map(function (field) { return (react_1.default.createElement("div", null,
            react_1.default.createElement("span", null,
                "\"",
                field.name,
                "\""),
            react_1.default.createElement("span", null, field.type))); }),
        react_1.default.createElement("span", null, "}"),
        react_1.default.createElement("span", null))); };
    return (react_1.default.createElement(FieldRows, null));
};
var SylkMessage = function (props) {
    var message = props.message;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { style: { whiteSpace: 'pre-wrap' } }, message.description),
        react_1.default.createElement(SylkProtoMessageFields, { fields: message.fields })));
};
exports.SylkMessage = SylkMessage;
var SylkProto = function (props) {
    var _a, _b;
    var fileDescriptor = props.fileDescriptor, components = props.components;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components.h1, null, fileDescriptor.resource.name), (_b = (_a = fileDescriptor.resource) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 :
        _b.map(function (message, i) { return (react_1.default.createElement(exports.SylkMessage, { message: message, key: i })); })));
};
exports.default = SylkProto;
