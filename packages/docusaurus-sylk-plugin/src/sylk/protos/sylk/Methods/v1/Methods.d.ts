/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateMethodRequest, CreateMethodResponse, DeleteMethodRequest, DeleteMethodResponse, GetMethodRequest, GetMethodResponse, UpdateMethodRequest, UpdateMethodResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type MethodsService = typeof MethodsService;
export declare const MethodsService: {
    /** [sylk] - None */
    readonly createMethod: {
        readonly path: "/sylk.Methods.v1.Methods/CreateMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateMethodRequest;
        readonly responseSerialize: (value: CreateMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateMethodResponse;
    };
    /** [sylk] - None */
    readonly getMethod: {
        readonly path: "/sylk.Methods.v1.Methods/GetMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetMethodRequest;
        readonly responseSerialize: (value: GetMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetMethodResponse;
    };
    /** [sylk] - None */
    readonly deleteMethod: {
        readonly path: "/sylk.Methods.v1.Methods/DeleteMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMethodRequest;
        readonly responseSerialize: (value: DeleteMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteMethodResponse;
    };
    /** [sylk] - None */
    readonly updateMethod: {
        readonly path: "/sylk.Methods.v1.Methods/UpdateMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateMethodRequest;
        readonly responseSerialize: (value: UpdateMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateMethodResponse;
    };
};
export interface MethodsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    createMethod: handleUnaryCall<CreateMethodRequest, CreateMethodResponse>;
    /** [sylk] - None */
    getMethod: handleUnaryCall<GetMethodRequest, GetMethodResponse>;
    /** [sylk] - None */
    deleteMethod: handleUnaryCall<DeleteMethodRequest, DeleteMethodResponse>;
    /** [sylk] - None */
    updateMethod: handleUnaryCall<UpdateMethodRequest, UpdateMethodResponse>;
}
export interface MethodsClient extends Client {
    /** [sylk] - None */
    createMethod(request: CreateMethodRequest, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    createMethod(request: CreateMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    createMethod(request: CreateMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    getMethod(request: GetMethodRequest, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    getMethod(request: GetMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    getMethod(request: GetMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteMethod(request: DeleteMethodRequest, callback: (error: ServiceError | null, response: DeleteMethodResponse) => void): ClientUnaryCall;
    deleteMethod(request: DeleteMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteMethodResponse) => void): ClientUnaryCall;
    deleteMethod(request: DeleteMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteMethodResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateMethod(request: UpdateMethodRequest, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    updateMethod(request: UpdateMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    updateMethod(request: UpdateMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
}
export declare const MethodsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MethodsClient;
    service: typeof MethodsService;
};
