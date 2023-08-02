/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateEnumRequest, CreateEnumResponse, DeleteEnumRequest, DeleteEnumResponse, GetEnumRequest, GetEnumResponse, UpdateEnumRequest, UpdateEnumResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type EnumsService = typeof EnumsService;
export declare const EnumsService: {
    /** [sylk] - None */
    readonly getEnum: {
        readonly path: "/sylk.Enums.v1.Enums/GetEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetEnumRequest;
        readonly responseSerialize: (value: GetEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetEnumResponse;
    };
    /** [sylk] - None */
    readonly updateEnum: {
        readonly path: "/sylk.Enums.v1.Enums/UpdateEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateEnumRequest;
        readonly responseSerialize: (value: UpdateEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateEnumResponse;
    };
    /** [sylk] - None */
    readonly deleteEnum: {
        readonly path: "/sylk.Enums.v1.Enums/DeleteEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteEnumRequest;
        readonly responseSerialize: (value: DeleteEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteEnumResponse;
    };
    /** [sylk] - None */
    readonly createEnum: {
        readonly path: "/sylk.Enums.v1.Enums/CreateEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateEnumRequest;
        readonly responseSerialize: (value: CreateEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateEnumResponse;
    };
};
export interface EnumsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getEnum: handleUnaryCall<GetEnumRequest, GetEnumResponse>;
    /** [sylk] - None */
    updateEnum: handleUnaryCall<UpdateEnumRequest, UpdateEnumResponse>;
    /** [sylk] - None */
    deleteEnum: handleUnaryCall<DeleteEnumRequest, DeleteEnumResponse>;
    /** [sylk] - None */
    createEnum: handleUnaryCall<CreateEnumRequest, CreateEnumResponse>;
}
export interface EnumsClient extends Client {
    /** [sylk] - None */
    getEnum(request: GetEnumRequest, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    getEnum(request: GetEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    getEnum(request: GetEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateEnum(request: UpdateEnumRequest, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    updateEnum(request: UpdateEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    updateEnum(request: UpdateEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteEnum(request: DeleteEnumRequest, callback: (error: ServiceError | null, response: DeleteEnumResponse) => void): ClientUnaryCall;
    deleteEnum(request: DeleteEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteEnumResponse) => void): ClientUnaryCall;
    deleteEnum(request: DeleteEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteEnumResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createEnum(request: CreateEnumRequest, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    createEnum(request: CreateEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    createEnum(request: CreateEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
}
export declare const EnumsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EnumsClient;
    service: typeof EnumsService;
};
