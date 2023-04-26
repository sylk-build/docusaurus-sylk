"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SylkEnumProto = exports.SylkMessageProto = exports.ProtoService = exports.SylkMethodsProto = exports.SylkMethodProto = void 0;
var react_1 = __importDefault(require("react"));
var Link_1 = __importDefault(require("@docusaurus/Link"));
var SylkField_1 = require("../../sylk/protos/SylkField");
var SylkField_2 = require("../../sylk/protos/SylkField");
var leftHeaderStyles = {
    textAlign: "left",
};
var parseNestedTypeLink = function (nestedType, dependencies, fromService) {
    var _a;
    if (fromService === void 0) { fromService = false; }
    var wellKnownTypes = "https://protobuf.dev/reference/protobuf/google.protobuf/#";
    var preNav = '';
    var link = '';
    console.log(dependencies);
    if (dependencies.includes(nestedType.split('.').slice(0, 3).join('.'))) {
        preNav = fromService ? "../../packages/".concat(nestedType.split('.')[1], "/").concat(nestedType.split('.')[2]) : "../".concat(nestedType.split('.')[1], "/").concat(nestedType.split('.')[2]);
    }
    if (nestedType.includes('google.protobuf.')) {
        link = wellKnownTypes + ((_a = nestedType.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase());
    }
    else {
        var tempName = nestedType.split('.').pop();
        if (tempName) {
            link = preNav + '#' + tempName.toLocaleLowerCase();
        }
    }
    return link;
};
var SylkMethodProto = function (_a) {
    var method = _a.method, dependencies = _a.dependencies;
    return (react_1.default.createElement("table", null,
        react_1.default.createElement("tbody", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", { style: leftHeaderStyles }, "Method"),
                react_1.default.createElement("td", null,
                    react_1.default.createElement("code", null, method.name))),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", { style: leftHeaderStyles }, "Request"),
                react_1.default.createElement("td", null,
                    react_1.default.createElement(Link_1.default, { to: parseNestedTypeLink(method.inputType, dependencies, true) },
                        react_1.default.createElement("code", null, method.inputType)),
                    method.clientStreaming === true ? ' stream' : '')),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", { style: leftHeaderStyles }, "Response"),
                react_1.default.createElement("td", null,
                    react_1.default.createElement(Link_1.default, { to: parseNestedTypeLink(method.outputType, dependencies, true) },
                        react_1.default.createElement("code", null, method.outputType)),
                    method.serverStreaming === true ? ' stream' : '')),
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", { style: leftHeaderStyles }, "Description"),
                react_1.default.createElement("td", null, method.description)))));
};
exports.SylkMethodProto = SylkMethodProto;
var SylkMethodsProto = function (props) {
    var methods = props.methods, dependencies = props.dependencies;
    return (react_1.default.createElement(react_1.default.Fragment, null, methods.map(function (method, i) { return (react_1.default.createElement(exports.SylkMethodProto, { dependencies: dependencies, method: method, key: "".concat(method.name, "-").concat(i) })); })));
};
exports.SylkMethodsProto = SylkMethodsProto;
var ProtoService = function (props) {
    var service = props.service;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { style: { whiteSpace: 'pre-wrap' } }, service.description),
        react_1.default.createElement(exports.SylkMethodsProto, { dependencies: service.dependencies, methods: service.methods })));
};
exports.ProtoService = ProtoService;
var SylkProtoMessageFields = function (props) {
    var fields = props.fields, packageDep = props.packageDep;
    var spanP = {
        "font-weight": "bold"
    };
    var spanNt = {
        "color": "#204a87"
    };
    var getFieldTypeLink = function (field) {
        var protobufScalars = "https://protobuf.dev/programming-guides/proto3/#scalar";
        return field.fieldType === SylkField_2.SylkFieldTypes.TYPE_MESSAGE
            ? parseNestedTypeLink(field.messageType, packageDep)
            : field.fieldType === SylkField_2.SylkFieldTypes.TYPE_ENUM
                ? parseNestedTypeLink(field.enumType, packageDep)
                : protobufScalars;
    };
    var FieldsData = function () {
        return (react_1.default.createElement("div", null, fields.map(function (field) {
            var fieldTypeLink = getFieldTypeLink(field);
            var displayFieldType = field.fieldType === SylkField_2.SylkFieldTypes.TYPE_MESSAGE ? field.messageType : field.fieldType === SylkField_2.SylkFieldTypes.TYPE_ENUM ? field.enumType : (0, SylkField_1.sylkFieldTypesToJSON)(field.fieldType).split('_')[1].toLocaleLowerCase();
            return (react_1.default.createElement("dl", null,
                react_1.default.createElement("dt", { style: spanP, id: field.fullName }, field.name),
                react_1.default.createElement("dd", null,
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("span", null,
                            "(",
                            field.label === SylkField_1.SylkFieldLabels.LABEL_REPEATED ? 'repeated ' : '',
                            react_1.default.createElement(Link_1.default, { to: fieldTypeLink }, displayFieldType),
                            ")"),
                        " ",
                        field.description))));
        })));
    };
    var FieldRows = function () { return (react_1.default.createElement("pre", null,
        react_1.default.createElement("span", null),
        react_1.default.createElement("span", null, "{"),
        fields.map(function (field) { return (react_1.default.createElement("div", null,
            react_1.default.createElement("span", null, " "),
            react_1.default.createElement("span", { style: spanNt },
                "\"",
                field.name,
                "\""),
            react_1.default.createElement("span", { style: spanP }, ":"),
            react_1.default.createElement("span", null, " "),
            react_1.default.createElement("span", null,
                field.messageType || field.enumType ? react_1.default.createElement(react_1.default.Fragment, null,
                    field.label === SylkField_1.SylkFieldLabels.LABEL_REPEATED ? '[' : '{',
                    react_1.default.createElement(Link_1.default, { to: getFieldTypeLink(field) }, "..."),
                    field.label === SylkField_1.SylkFieldLabels.LABEL_REPEATED ? ']' : '}') : react_1.default.createElement(react_1.default.Fragment, null, "..."),
                field.index < fields.length ? ',' : ''))); }),
        react_1.default.createElement("span", null, "}"),
        react_1.default.createElement("span", null))); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(FieldRows, null),
        react_1.default.createElement(FieldsData, null)));
};
var SylkMessageProto = function (props) {
    var message = props.message, packageDep = props.packageDep;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { style: { whiteSpace: 'pre-wrap' } }, message.description),
        react_1.default.createElement(SylkProtoMessageFields, { packageDep: packageDep, fields: message.fields })));
};
exports.SylkMessageProto = SylkMessageProto;
var SylkEnumProto = function (props) {
    var enumb = props.enumb;
    var styleDef = {
        "margin-right": ".5rem"
    };
    var styleTitle = {
        "font-weight": "bold"
    };
    var ValueRows = function () { return (react_1.default.createElement(react_1.default.Fragment, null, enumb.values.map(function (enumValue) { return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("dt", { style: styleTitle }, enumValue.name),
        react_1.default.createElement("dd", null,
            react_1.default.createElement("p", null,
                enumValue.number === 0 ? react_1.default.createElement("span", { style: styleDef },
                    react_1.default.createElement("em", null, "(DEFAULT)")) : '',
                enumValue.description)))); }))); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { style: { whiteSpace: 'pre-wrap' } }, enumb.description),
        react_1.default.createElement("dl", null,
            react_1.default.createElement(ValueRows, null))));
};
exports.SylkEnumProto = SylkEnumProto;
var SylkProto = function (props) {
    var _a, _b;
    var fileDescriptor = props.fileDescriptor, components = props.components;
    var deps = fileDescriptor.resource.dependencies ? fileDescriptor.resource.dependencies : [];
    console.log(deps);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(components.h1, null, fileDescriptor.resource.name), (_b = (_a = fileDescriptor.resource) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 :
        _b.map(function (message, i) { return (react_1.default.createElement(exports.SylkMessageProto, { packageDep: deps, message: message, key: i })); })));
};
exports.default = SylkProto;
