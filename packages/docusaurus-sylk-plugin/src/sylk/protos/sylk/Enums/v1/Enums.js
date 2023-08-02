"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumsClient = exports.EnumsService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.EnumsService = {
    /** [sylk] - None */
    getEnum: {
        path: "/sylk.Enums.v1.Enums/GetEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetEnumResponse.decode(value),
    },
    /** [sylk] - None */
    updateEnum: {
        path: "/sylk.Enums.v1.Enums/UpdateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateEnumResponse.decode(value),
    },
    /** [sylk] - None */
    deleteEnum: {
        path: "/sylk.Enums.v1.Enums/DeleteEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.DeleteEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.DeleteEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.DeleteEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.DeleteEnumResponse.decode(value),
    },
    /** [sylk] - None */
    createEnum: {
        path: "/sylk.Enums.v1.Enums/CreateEnum",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreateEnumRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreateEnumRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreateEnumResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreateEnumResponse.decode(value),
    },
};
exports.EnumsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.EnumsService, "sylk.Enums.v1.Enums");
//# sourceMappingURL=Enums.js.map