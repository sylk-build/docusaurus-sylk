"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldsClient = exports.FieldsService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("./SylkApi");
exports.FieldsService = {
    /** [webezyio] - */
    getField: {
        path: "/Fields/GetField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetFieldResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetFieldResponse.decode(value),
    },
    /** [webezyio] - */
    createField: {
        path: "/Fields/CreateField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreateFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreateFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreateFieldResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreateFieldResponse.decode(value),
    },
    /** [webezyio] - */
    updateField: {
        path: "/Fields/UpdateField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateFieldResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateFieldResponse.decode(value),
    },
    /** [webezyio] - */
    deleteField: {
        path: "/Fields/DeleteField",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.DeleteFieldRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.DeleteFieldRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.DeleteFieldResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.DeleteFieldResponse.decode(value),
    },
};
exports.FieldsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.FieldsService, "Fields");
//# sourceMappingURL=Fields.js.map