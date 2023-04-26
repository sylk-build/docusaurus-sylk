/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateEnumRequest, CreateEnumResponse, DeleteEnumRequest, DeleteEnumResponse, GetEnumRequest, GetEnumResponse, UpdateEnumRequest, UpdateEnumResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type EnumsService = typeof EnumsService;
export declare const EnumsService: {
    /** [webezyio] - */
    readonly getEnum: {
        readonly path: "/Enums/GetEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetEnumRequest;
        readonly responseSerialize: (value: GetEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetEnumResponse;
    };
    /** [webezyio] - */
    readonly createEnum: {
        readonly path: "/Enums/CreateEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateEnumRequest;
        readonly responseSerialize: (value: CreateEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateEnumResponse;
    };
    /** [webezyio] - */
    readonly updateEnum: {
        readonly path: "/Enums/UpdateEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateEnumRequest;
        readonly responseSerialize: (value: UpdateEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateEnumResponse;
    };
    /** [webezyio] - */
    readonly deleteEnum: {
        readonly path: "/Enums/DeleteEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteEnumRequest;
        readonly responseSerialize: (value: DeleteEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteEnumResponse;
    };
};
export interface EnumsServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getEnum: handleUnaryCall<GetEnumRequest, GetEnumResponse>;
    /** [webezyio] - */
    createEnum: handleUnaryCall<CreateEnumRequest, CreateEnumResponse>;
    /** [webezyio] - */
    updateEnum: handleUnaryCall<UpdateEnumRequest, UpdateEnumResponse>;
    /** [webezyio] - */
    deleteEnum: handleUnaryCall<DeleteEnumRequest, DeleteEnumResponse>;
}
export interface EnumsClient extends Client {
    /** [webezyio] - */
    getEnum(request: GetEnumRequest, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    getEnum(request: GetEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    getEnum(request: GetEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createEnum(request: CreateEnumRequest, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    createEnum(request: CreateEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    createEnum(request: CreateEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateEnum(request: UpdateEnumRequest, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    updateEnum(request: UpdateEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    updateEnum(request: UpdateEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deleteEnum(request: DeleteEnumRequest, callback: (error: ServiceError | null, response: DeleteEnumResponse) => void): ClientUnaryCall;
    deleteEnum(request: DeleteEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteEnumResponse) => void): ClientUnaryCall;
    deleteEnum(request: DeleteEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteEnumResponse) => void): ClientUnaryCall;
}
export declare const EnumsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EnumsClient;
    service: typeof EnumsService;
};
