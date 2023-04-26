"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesClient = exports.MessagesService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("./SylkApi");
exports.MessagesService = {
    /** [webezyio] - */
    getMessage: {
        path: "/Messages/GetMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetMessageRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetMessageRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetMessageResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetMessageResponse.decode(value); },
    },
    /** [webezyio] - */
    createMessage: {
        path: "/Messages/CreateMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateMessageRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateMessageRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateMessageResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateMessageResponse.decode(value); },
    },
    /** [webezyio] - */
    updateMessage: {
        path: "/Messages/UpdateMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateMessageRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateMessageRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateMessageResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateMessageResponse.decode(value); },
    },
    /** [webezyio] - */
    deleteMessage: {
        path: "/Messages/DeleteMessage",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteMessageRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteMessageRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteMessageResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteMessageResponse.decode(value); },
    },
};
exports.MessagesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.MessagesService, "Messages");
