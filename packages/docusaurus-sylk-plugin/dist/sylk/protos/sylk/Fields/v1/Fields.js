"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsClient = exports.FieldsService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.FieldsService = {
    /** [sylk] - None */
    createField: {
        path: "/sylk.Fields.v1.Fields/CreateField",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateFieldRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateFieldRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateFieldResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateFieldResponse.decode(value); },
    },
    /** [sylk] - None */
    getField: {
        path: "/sylk.Fields.v1.Fields/GetField",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetFieldRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetFieldRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetFieldResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetFieldResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteField: {
        path: "/sylk.Fields.v1.Fields/DeleteField",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteFieldRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteFieldRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteFieldResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteFieldResponse.decode(value); },
    },
    /** [sylk] - None */
    updateField: {
        path: "/sylk.Fields.v1.Fields/UpdateField",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateFieldRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateFieldRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateFieldResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateFieldResponse.decode(value); },
    },
};
exports.FieldsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FieldsService, "sylk.Fields.v1.Fields");
