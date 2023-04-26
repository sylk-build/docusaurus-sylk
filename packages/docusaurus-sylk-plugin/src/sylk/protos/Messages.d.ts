/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateMessageRequest, CreateMessageResponse, DeleteMessageRequest, DeleteMessageResponse, GetMessageRequest, GetMessageResponse, UpdateMessageRequest, UpdateMessageResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type MessagesService = typeof MessagesService;
export declare const MessagesService: {
    /** [webezyio] - */
    readonly getMessage: {
        readonly path: "/Messages/GetMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetMessageRequest;
        readonly responseSerialize: (value: GetMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetMessageResponse;
    };
    /** [webezyio] - */
    readonly createMessage: {
        readonly path: "/Messages/CreateMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateMessageRequest;
        readonly responseSerialize: (value: CreateMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateMessageResponse;
    };
    /** [webezyio] - */
    readonly updateMessage: {
        readonly path: "/Messages/UpdateMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateMessageRequest;
        readonly responseSerialize: (value: UpdateMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateMessageResponse;
    };
    /** [webezyio] - */
    readonly deleteMessage: {
        readonly path: "/Messages/DeleteMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMessageRequest;
        readonly responseSerialize: (value: DeleteMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteMessageResponse;
    };
};
export interface MessagesServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getMessage: handleUnaryCall<GetMessageRequest, GetMessageResponse>;
    /** [webezyio] - */
    createMessage: handleUnaryCall<CreateMessageRequest, CreateMessageResponse>;
    /** [webezyio] - */
    updateMessage: handleUnaryCall<UpdateMessageRequest, UpdateMessageResponse>;
    /** [webezyio] - */
    deleteMessage: handleUnaryCall<DeleteMessageRequest, DeleteMessageResponse>;
}
export interface MessagesClient extends Client {
    /** [webezyio] - */
    getMessage(request: GetMessageRequest, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    getMessage(request: GetMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    getMessage(request: GetMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createMessage(request: CreateMessageRequest, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    createMessage(request: CreateMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    createMessage(request: CreateMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateMessage(request: UpdateMessageRequest, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    updateMessage(request: UpdateMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    updateMessage(request: UpdateMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deleteMessage(request: DeleteMessageRequest, callback: (error: ServiceError | null, response: DeleteMessageResponse) => void): ClientUnaryCall;
    deleteMessage(request: DeleteMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteMessageResponse) => void): ClientUnaryCall;
    deleteMessage(request: DeleteMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteMessageResponse) => void): ClientUnaryCall;
}
export declare const MessagesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MessagesClient;
    service: typeof MessagesService;
};
