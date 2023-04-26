"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumsClient = exports.EnumsService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("./SylkApi");
exports.EnumsService = {
    /** [webezyio] - */
    getEnum: {
        path: "/Enums/GetEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetEnumResponse.decode(value),
    },
    /** [webezyio] - */
    createEnum: {
        path: "/Enums/CreateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreateEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreateEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreateEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreateEnumResponse.decode(value),
    },
    /** [webezyio] - */
    updateEnum: {
        path: "/Enums/UpdateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateEnumResponse.decode(value),
    },
    /** [webezyio] - */
    deleteEnum: {
        path: "/Enums/DeleteEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.DeleteEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.DeleteEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.DeleteEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.DeleteEnumResponse.decode(value),
    },
};
exports.EnumsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EnumsService, "Enums");
//# sourceMappingURL=Enums.js.map