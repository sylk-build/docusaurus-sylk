"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodsClient = exports.MethodsService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.MethodsService = {
    /** [sylk] - None */
    createMethod: {
        path: "/sylk.Methods.v1.Methods/CreateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreateMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreateMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreateMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreateMethodResponse.decode(value),
    },
    /** [sylk] - None */
    getMethod: {
        path: "/sylk.Methods.v1.Methods/GetMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetMethodResponse.decode(value),
    },
    /** [sylk] - None */
    deleteMethod: {
        path: "/sylk.Methods.v1.Methods/DeleteMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.DeleteMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.DeleteMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.DeleteMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.DeleteMethodResponse.decode(value),
    },
    /** [sylk] - None */
    updateMethod: {
        path: "/sylk.Methods.v1.Methods/UpdateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateMethodResponse.decode(value),
    },
};
exports.MethodsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MethodsService, "sylk.Methods.v1.Methods");
//# sourceMappingURL=Methods.js.map