"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodsClient = exports.MethodsService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("./SylkApi");
exports.MethodsService = {
    /** [webezyio] - */
    getMethod: {
        path: "/Methods/GetMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetMethodResponse.decode(value),
    },
    /** [webezyio] - */
    createMethod: {
        path: "/Methods/CreateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreateMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreateMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreateMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreateMethodResponse.decode(value),
    },
    /** [webezyio] - */
    updateMethod: {
        path: "/Methods/UpdateMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateMethodResponse.decode(value),
    },
    /** [webezyio] - */
    deleteMethod: {
        path: "/Methods/DeleteMethod",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.DeleteMethodRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.DeleteMethodRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.DeleteMethodResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.DeleteMethodResponse.decode(value),
    },
};
exports.MethodsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MethodsService, "Methods");
//# sourceMappingURL=Methods.js.map