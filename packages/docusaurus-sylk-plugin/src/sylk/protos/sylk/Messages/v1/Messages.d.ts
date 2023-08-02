/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateMessageRequest, CreateMessageResponse, DeleteMessageRequest, DeleteMessageResponse, GetMessageRequest, GetMessageResponse, UpdateMessageRequest, UpdateMessageResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type MessagesService = typeof MessagesService;
export declare const MessagesService: {
    /** [sylk] - None */
    readonly getMessage: {
        readonly path: "/sylk.Messages.v1.Messages/GetMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetMessageRequest;
        readonly responseSerialize: (value: GetMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetMessageResponse;
    };
    /** [sylk] - None */
    readonly updateMessage: {
        readonly path: "/sylk.Messages.v1.Messages/UpdateMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateMessageRequest;
        readonly responseSerialize: (value: UpdateMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateMessageResponse;
    };
    /** [sylk] - None */
    readonly createMessage: {
        readonly path: "/sylk.Messages.v1.Messages/CreateMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateMessageRequest;
        readonly responseSerialize: (value: CreateMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateMessageResponse;
    };
    /** [sylk] - None */
    readonly deleteMessage: {
        readonly path: "/sylk.Messages.v1.Messages/DeleteMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMessageRequest;
        readonly responseSerialize: (value: DeleteMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteMessageResponse;
    };
};
export interface MessagesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getMessage: handleUnaryCall<GetMessageRequest, GetMessageResponse>;
    /** [sylk] - None */
    updateMessage: handleUnaryCall<UpdateMessageRequest, UpdateMessageResponse>;
    /** [sylk] - None */
    createMessage: handleUnaryCall<CreateMessageRequest, CreateMessageResponse>;
    /** [sylk] - None */
    deleteMessage: handleUnaryCall<DeleteMessageRequest, DeleteMessageResponse>;
}
export interface MessagesClient extends Client {
    /** [sylk] - None */
    getMessage(request: GetMessageRequest, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    getMessage(request: GetMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    getMessage(request: GetMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateMessage(request: UpdateMessageRequest, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    updateMessage(request: UpdateMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    updateMessage(request: UpdateMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createMessage(request: CreateMessageRequest, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    createMessage(request: CreateMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    createMessage(request: CreateMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteMessage(request: DeleteMessageRequest, callback: (error: ServiceError | null, response: DeleteMessageResponse) => void): ClientUnaryCall;
    deleteMessage(request: DeleteMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteMessageResponse) => void): ClientUnaryCall;
    deleteMessage(request: DeleteMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteMessageResponse) => void): ClientUnaryCall;
}
export declare const MessagesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MessagesClient;
    service: typeof MessagesService;
};
