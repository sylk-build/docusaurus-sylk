"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodsClient = exports.MethodsService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("./SylkApi");
exports.MethodsService = {
    /** [webezyio] - */
    getMethod: {
        path: "/Methods/GetMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetMethodResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetMethodResponse.decode(value); },
    },
    /** [webezyio] - */
    createMethod: {
        path: "/Methods/CreateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateMethodResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateMethodResponse.decode(value); },
    },
    /** [webezyio] - */
    updateMethod: {
        path: "/Methods/UpdateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateMethodResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateMethodResponse.decode(value); },
    },
    /** [webezyio] - */
    deleteMethod: {
        path: "/Methods/DeleteMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteMethodRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteMethodRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteMethodResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteMethodResponse.decode(value); },
    },
};
exports.MethodsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MethodsService, "Methods");
