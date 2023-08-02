"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumsClient = exports.EnumsService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.EnumsService = {
    /** [sylk] - None */
    getEnum: {
        path: "/sylk.Enums.v1.Enums/GetEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetEnumResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetEnumResponse.decode(value); },
    },
    /** [sylk] - None */
    updateEnum: {
        path: "/sylk.Enums.v1.Enums/UpdateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateEnumResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateEnumResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteEnum: {
        path: "/sylk.Enums.v1.Enums/DeleteEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteEnumResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteEnumResponse.decode(value); },
    },
    /** [sylk] - None */
    createEnum: {
        path: "/sylk.Enums.v1.Enums/CreateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateEnumRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateEnumRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateEnumResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateEnumResponse.decode(value); },
    },
};
exports.EnumsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EnumsService, "sylk.Enums.v1.Enums");
