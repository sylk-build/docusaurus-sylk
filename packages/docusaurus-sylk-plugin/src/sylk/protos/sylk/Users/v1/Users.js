"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersClient = exports.UsersService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.UsersService = {
    /** [sylk] - None */
    createUser: {
        path: "/sylk.Users.v1.Users/CreateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreateUserRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreateUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreateUserResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreateUserResponse.decode(value),
    },
    /** [sylk] - None */
    getAccessToken: {
        path: "/sylk.Users.v1.Users/GetAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetAccessTokenResponse.decode(value),
    },
    /** [sylk] - None */
    createAccessToken: {
        path: "/sylk.Users.v1.Users/CreateAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreateAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreateAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreateAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreateAccessTokenResponse.decode(value),
    },
    /** [sylk] - None */
    getUser: {
        path: "/sylk.Users.v1.Users/GetUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetUserRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetUserResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetUserResponse.decode(value),
    },
    /** [sylk] - None */
    listAccessTokens: {
        path: "/sylk.Users.v1.Users/ListAccessTokens",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(SylkApi_1.ListAccessTokensRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.ListAccessTokensRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetAccessTokenResponse.decode(value),
    },
    /** [sylk] - None */
    revokeAccessToken: {
        path: "/sylk.Users.v1.Users/RevokeAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.RevokeAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.RevokeAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.RevokeAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.RevokeAccessTokenResponse.decode(value),
    },
    /** [sylk] - None */
    updateUser: {
        path: "/sylk.Users.v1.Users/UpdateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateUserRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateUserResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateUserResponse.decode(value),
    },
};
exports.UsersClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UsersService, "sylk.Users.v1.Users");
//# sourceMappingURL=Users.js.map