"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersClient = exports.UsersService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("./SylkApi");
exports.UsersService = {
    /** [webezyio] - */
    getUser: {
        path: "/Users/GetUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetUserRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetUserRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetUserResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetUserResponse.decode(value); },
    },
    /** [webezyio] - */
    updateUser: {
        path: "/Users/UpdateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateUserRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateUserResponse.decode(value); },
    },
    /** [webezyio] - */
    createUser: {
        path: "/Users/CreateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateUserRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateUserRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateUserResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateUserResponse.decode(value); },
    },
    /** [webezyio] - */
    createAccessToken: {
        path: "/Users/CreateAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateAccessTokenRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateAccessTokenRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateAccessTokenResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateAccessTokenResponse.decode(value); },
    },
    /** [webezyio] - */
    getAccessToken: {
        path: "/Users/GetAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetAccessTokenRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetAccessTokenRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetAccessTokenResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetAccessTokenResponse.decode(value); },
    },
    /** [webezyio] - */
    listAccessTokens: {
        path: "/Users/ListAccessTokens",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.ListAccessTokensRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.ListAccessTokensRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetAccessTokenResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetAccessTokenResponse.decode(value); },
    },
    /** [webezyio] - */
    revokeAccessToken: {
        path: "/Users/RevokeAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.RevokeAccessTokenRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.RevokeAccessTokenRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.RevokeAccessTokenResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.RevokeAccessTokenResponse.decode(value); },
    },
};
exports.UsersClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UsersService, "Users");
