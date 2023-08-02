/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateEnumValueRequest, CreateEnumValueResponse, DeleteEnumValueRequest, DeleteEnumValueResponse, GetEnumValueRequest, GetEnumValueResponse, UpdateEnumValueRequest, UpdateEnumValueResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type EnumValuesService = typeof EnumValuesService;
export declare const EnumValuesService: {
    /** [sylk] - None */
    readonly getEnumValue: {
        readonly path: "/sylk.EnumValues.v1.EnumValues/GetEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetEnumValueRequest;
        readonly responseSerialize: (value: GetEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetEnumValueResponse;
    };
    /** [sylk] - None */
    readonly createEnumValue: {
        readonly path: "/sylk.EnumValues.v1.EnumValues/CreateEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateEnumValueRequest;
        readonly responseSerialize: (value: CreateEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateEnumValueResponse;
    };
    /** [sylk] - None */
    readonly deleteEnumValue: {
        readonly path: "/sylk.EnumValues.v1.EnumValues/DeleteEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteEnumValueRequest;
        readonly responseSerialize: (value: DeleteEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteEnumValueResponse;
    };
    /** [sylk] - None */
    readonly updateEnumValue: {
        readonly path: "/sylk.EnumValues.v1.EnumValues/UpdateEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateEnumValueRequest;
        readonly responseSerialize: (value: UpdateEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateEnumValueResponse;
    };
};
export interface EnumValuesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getEnumValue: handleUnaryCall<GetEnumValueRequest, GetEnumValueResponse>;
    /** [sylk] - None */
    createEnumValue: handleUnaryCall<CreateEnumValueRequest, CreateEnumValueResponse>;
    /** [sylk] - None */
    deleteEnumValue: handleUnaryCall<DeleteEnumValueRequest, DeleteEnumValueResponse>;
    /** [sylk] - None */
    updateEnumValue: handleUnaryCall<UpdateEnumValueRequest, UpdateEnumValueResponse>;
}
export interface EnumValuesClient extends Client {
    /** [sylk] - None */
    getEnumValue(request: GetEnumValueRequest, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    getEnumValue(request: GetEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    getEnumValue(request: GetEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createEnumValue(request: CreateEnumValueRequest, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    createEnumValue(request: CreateEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    createEnumValue(request: CreateEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteEnumValue(request: DeleteEnumValueRequest, callback: (error: ServiceError | null, response: DeleteEnumValueResponse) => void): ClientUnaryCall;
    deleteEnumValue(request: DeleteEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteEnumValueResponse) => void): ClientUnaryCall;
    deleteEnumValue(request: DeleteEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteEnumValueResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateEnumValue(request: UpdateEnumValueRequest, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    updateEnumValue(request: UpdateEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    updateEnumValue(request: UpdateEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
}
export declare const EnumValuesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EnumValuesClient;
    service: typeof EnumValuesService;
};
