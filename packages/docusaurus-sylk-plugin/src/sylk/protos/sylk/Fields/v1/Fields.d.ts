/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateFieldRequest, CreateFieldResponse, DeleteFieldRequest, DeleteFieldResponse, GetFieldRequest, GetFieldResponse, UpdateFieldRequest, UpdateFieldResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type FieldsService = typeof FieldsService;
export declare const FieldsService: {
    /** [sylk] - None */
    readonly createField: {
        readonly path: "/sylk.Fields.v1.Fields/CreateField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFieldRequest;
        readonly responseSerialize: (value: CreateFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateFieldResponse;
    };
    /** [sylk] - None */
    readonly getField: {
        readonly path: "/sylk.Fields.v1.Fields/GetField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFieldRequest;
        readonly responseSerialize: (value: GetFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetFieldResponse;
    };
    /** [sylk] - None */
    readonly deleteField: {
        readonly path: "/sylk.Fields.v1.Fields/DeleteField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFieldRequest;
        readonly responseSerialize: (value: DeleteFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteFieldResponse;
    };
    /** [sylk] - None */
    readonly updateField: {
        readonly path: "/sylk.Fields.v1.Fields/UpdateField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFieldRequest;
        readonly responseSerialize: (value: UpdateFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateFieldResponse;
    };
};
export interface FieldsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    createField: handleUnaryCall<CreateFieldRequest, CreateFieldResponse>;
    /** [sylk] - None */
    getField: handleUnaryCall<GetFieldRequest, GetFieldResponse>;
    /** [sylk] - None */
    deleteField: handleUnaryCall<DeleteFieldRequest, DeleteFieldResponse>;
    /** [sylk] - None */
    updateField: handleUnaryCall<UpdateFieldRequest, UpdateFieldResponse>;
}
export interface FieldsClient extends Client {
    /** [sylk] - None */
    createField(request: CreateFieldRequest, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    createField(request: CreateFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    createField(request: CreateFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    getField(request: GetFieldRequest, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    getField(request: GetFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    getField(request: GetFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteField(request: DeleteFieldRequest, callback: (error: ServiceError | null, response: DeleteFieldResponse) => void): ClientUnaryCall;
    deleteField(request: DeleteFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteFieldResponse) => void): ClientUnaryCall;
    deleteField(request: DeleteFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteFieldResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateField(request: UpdateFieldRequest, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    updateField(request: UpdateFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    updateField(request: UpdateFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
}
export declare const FieldsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FieldsClient;
    service: typeof FieldsService;
};
