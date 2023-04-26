/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateFieldRequest, CreateFieldResponse, DeleteFieldRequest, DeleteFieldResponse, GetFieldRequest, GetFieldResponse, UpdateFieldRequest, UpdateFieldResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type FieldsService = typeof FieldsService;
export declare const FieldsService: {
    /** [webezyio] - */
    readonly getField: {
        readonly path: "/Fields/GetField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFieldRequest;
        readonly responseSerialize: (value: GetFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetFieldResponse;
    };
    /** [webezyio] - */
    readonly createField: {
        readonly path: "/Fields/CreateField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFieldRequest;
        readonly responseSerialize: (value: CreateFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateFieldResponse;
    };
    /** [webezyio] - */
    readonly updateField: {
        readonly path: "/Fields/UpdateField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFieldRequest;
        readonly responseSerialize: (value: UpdateFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateFieldResponse;
    };
    /** [webezyio] - */
    readonly deleteField: {
        readonly path: "/Fields/DeleteField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFieldRequest;
        readonly responseSerialize: (value: DeleteFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteFieldResponse;
    };
};
export interface FieldsServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getField: handleUnaryCall<GetFieldRequest, GetFieldResponse>;
    /** [webezyio] - */
    createField: handleUnaryCall<CreateFieldRequest, CreateFieldResponse>;
    /** [webezyio] - */
    updateField: handleUnaryCall<UpdateFieldRequest, UpdateFieldResponse>;
    /** [webezyio] - */
    deleteField: handleUnaryCall<DeleteFieldRequest, DeleteFieldResponse>;
}
export interface FieldsClient extends Client {
    /** [webezyio] - */
    getField(request: GetFieldRequest, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    getField(request: GetFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    getField(request: GetFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createField(request: CreateFieldRequest, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    createField(request: CreateFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    createField(request: CreateFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateField(request: UpdateFieldRequest, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    updateField(request: UpdateFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    updateField(request: UpdateFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deleteField(request: DeleteFieldRequest, callback: (error: ServiceError | null, response: DeleteFieldResponse) => void): ClientUnaryCall;
    deleteField(request: DeleteFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteFieldResponse) => void): ClientUnaryCall;
    deleteField(request: DeleteFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteFieldResponse) => void): ClientUnaryCall;
}
export declare const FieldsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FieldsClient;
    service: typeof FieldsService;
};
