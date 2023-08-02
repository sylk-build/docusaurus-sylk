"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValuesClient = exports.EnumValuesService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.EnumValuesService = {
    /** [sylk] - None */
    getEnumValue: {
        path: "/sylk.EnumValues.v1.EnumValues/GetEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetEnumValueResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetEnumValueResponse.decode(value); },
    },
    /** [sylk] - None */
    createEnumValue: {
        path: "/sylk.EnumValues.v1.EnumValues/CreateEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateEnumValueResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateEnumValueResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteEnumValue: {
        path: "/sylk.EnumValues.v1.EnumValues/DeleteEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteEnumValueResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteEnumValueResponse.decode(value); },
    },
    /** [sylk] - None */
    updateEnumValue: {
        path: "/sylk.EnumValues.v1.EnumValues/UpdateEnumValue",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateEnumValueRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateEnumValueRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateEnumValueResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateEnumValueResponse.decode(value); },
    },
};
exports.EnumValuesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EnumValuesService, "sylk.EnumValues.v1.EnumValues");
