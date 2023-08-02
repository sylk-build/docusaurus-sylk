"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesClient = exports.ServicesService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.ServicesService = {
    /** [sylk] - None */
    createService: {
        path: "/sylk.Services.v1.Services/CreateService",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateServiceRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateServiceRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateServiceResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateServiceResponse.decode(value); },
    },
    /** [sylk] - None */
    getService: {
        path: "/sylk.Services.v1.Services/GetService",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetServiceRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetServiceRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetServiceResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetServiceResponse.decode(value); },
    },
    /** [sylk] - None */
    updateService: {
        path: "/sylk.Services.v1.Services/UpdateService",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateServiceRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateServiceRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateServiceResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateServiceResponse.decode(value); },
    },
    /** [sylk] - None */
    listServices: {
        path: "/sylk.Services.v1.Services/ListServices",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.ListServicesRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.ListServicesRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetServiceResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetServiceResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteService: {
        path: "/sylk.Services.v1.Services/DeleteService",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteServiceRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteServiceRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteServiceResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteServiceResponse.decode(value); },
    },
};
exports.ServicesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ServicesService, "sylk.Services.v1.Services");
