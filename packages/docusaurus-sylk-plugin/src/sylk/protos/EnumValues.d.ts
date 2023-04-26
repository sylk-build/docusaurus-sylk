/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateEnumValueRequest, CreateEnumValueResponse, DeleteEnumValueRequest, DeleteEnumValueResponse, GetEnumValueRequest, GetEnumValueResponse, UpdateEnumValueRequest, UpdateEnumValueResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type EnumValuesService = typeof EnumValuesService;
export declare const EnumValuesService: {
    /** [webezyio] - */
    readonly getEnumValue: {
        readonly path: "/EnumValues/GetEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetEnumValueRequest;
        readonly responseSerialize: (value: GetEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetEnumValueResponse;
    };
    /** [webezyio] - */
    readonly createEnumValue: {
        readonly path: "/EnumValues/CreateEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateEnumValueRequest;
        readonly responseSerialize: (value: CreateEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateEnumValueResponse;
    };
    /** [webezyio] - */
    readonly updateEnumValue: {
        readonly path: "/EnumValues/UpdateEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateEnumValueRequest;
        readonly responseSerialize: (value: UpdateEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateEnumValueResponse;
    };
    /** [webezyio] - */
    readonly deleteEnumValue: {
        readonly path: "/EnumValues/DeleteEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteEnumValueRequest;
        readonly responseSerialize: (value: DeleteEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteEnumValueResponse;
    };
};
export interface EnumValuesServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getEnumValue: handleUnaryCall<GetEnumValueRequest, GetEnumValueResponse>;
    /** [webezyio] - */
    createEnumValue: handleUnaryCall<CreateEnumValueRequest, CreateEnumValueResponse>;
    /** [webezyio] - */
    updateEnumValue: handleUnaryCall<UpdateEnumValueRequest, UpdateEnumValueResponse>;
    /** [webezyio] - */
    deleteEnumValue: handleUnaryCall<DeleteEnumValueRequest, DeleteEnumValueResponse>;
}
export interface EnumValuesClient extends Client {
    /** [webezyio] - */
    getEnumValue(request: GetEnumValueRequest, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    getEnumValue(request: GetEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    getEnumValue(request: GetEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createEnumValue(request: CreateEnumValueRequest, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    createEnumValue(request: CreateEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    createEnumValue(request: CreateEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateEnumValue(request: UpdateEnumValueRequest, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    updateEnumValue(request: UpdateEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    updateEnumValue(request: UpdateEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deleteEnumValue(request: DeleteEnumValueRequest, callback: (error: ServiceError | null, response: DeleteEnumValueResponse) => void): ClientUnaryCall;
    deleteEnumValue(request: DeleteEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteEnumValueResponse) => void): ClientUnaryCall;
    deleteEnumValue(request: DeleteEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteEnumValueResponse) => void): ClientUnaryCall;
}
export declare const EnumValuesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EnumValuesClient;
    service: typeof EnumValuesService;
};
