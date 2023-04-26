/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateMethodRequest, CreateMethodResponse, DeleteMethodRequest, DeleteMethodResponse, GetMethodRequest, GetMethodResponse, UpdateMethodRequest, UpdateMethodResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type MethodsService = typeof MethodsService;
export declare const MethodsService: {
    /** [webezyio] - */
    readonly getMethod: {
        readonly path: "/Methods/GetMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetMethodRequest;
        readonly responseSerialize: (value: GetMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetMethodResponse;
    };
    /** [webezyio] - */
    readonly createMethod: {
        readonly path: "/Methods/CreateMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateMethodRequest;
        readonly responseSerialize: (value: CreateMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateMethodResponse;
    };
    /** [webezyio] - */
    readonly updateMethod: {
        readonly path: "/Methods/UpdateMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateMethodRequest;
        readonly responseSerialize: (value: UpdateMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateMethodResponse;
    };
    /** [webezyio] - */
    readonly deleteMethod: {
        readonly path: "/Methods/DeleteMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMethodRequest;
        readonly responseSerialize: (value: DeleteMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteMethodResponse;
    };
};
export interface MethodsServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getMethod: handleUnaryCall<GetMethodRequest, GetMethodResponse>;
    /** [webezyio] - */
    createMethod: handleUnaryCall<CreateMethodRequest, CreateMethodResponse>;
    /** [webezyio] - */
    updateMethod: handleUnaryCall<UpdateMethodRequest, UpdateMethodResponse>;
    /** [webezyio] - */
    deleteMethod: handleUnaryCall<DeleteMethodRequest, DeleteMethodResponse>;
}
export interface MethodsClient extends Client {
    /** [webezyio] - */
    getMethod(request: GetMethodRequest, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    getMethod(request: GetMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    getMethod(request: GetMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createMethod(request: CreateMethodRequest, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    createMethod(request: CreateMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    createMethod(request: CreateMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateMethod(request: UpdateMethodRequest, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    updateMethod(request: UpdateMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    updateMethod(request: UpdateMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deleteMethod(request: DeleteMethodRequest, callback: (error: ServiceError | null, response: DeleteMethodResponse) => void): ClientUnaryCall;
    deleteMethod(request: DeleteMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteMethodResponse) => void): ClientUnaryCall;
    deleteMethod(request: DeleteMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteMethodResponse) => void): ClientUnaryCall;
}
export declare const MethodsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MethodsClient;
    service: typeof MethodsService;
};
