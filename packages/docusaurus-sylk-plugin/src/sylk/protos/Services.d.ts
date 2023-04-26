/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateServiceRequest, CreateServiceResponse, DeleteServiceRequest, DeleteServiceResponse, GetServiceRequest, GetServiceResponse, ListServicesRequest, UpdateServiceRequest, UpdateServiceResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type ServicesService = typeof ServicesService;
export declare const ServicesService: {
    /** [webezyio] - */
    readonly getService: {
        readonly path: "/Services/GetService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetServiceRequest;
        readonly responseSerialize: (value: GetServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetServiceResponse;
    };
    /** [webezyio] - */
    readonly createService: {
        readonly path: "/Services/CreateService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateServiceRequest;
        readonly responseSerialize: (value: CreateServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateServiceResponse;
    };
    /** [webezyio] - */
    readonly updateService: {
        readonly path: "/Services/UpdateService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateServiceRequest;
        readonly responseSerialize: (value: UpdateServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateServiceResponse;
    };
    /** [webezyio] - */
    readonly deleteService: {
        readonly path: "/Services/DeleteService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteServiceRequest;
        readonly responseSerialize: (value: DeleteServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteServiceResponse;
    };
    /** [webezyio] - */
    readonly listServices: {
        readonly path: "/Services/ListServices";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListServicesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListServicesRequest;
        readonly responseSerialize: (value: GetServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetServiceResponse;
    };
};
export interface ServicesServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getService: handleUnaryCall<GetServiceRequest, GetServiceResponse>;
    /** [webezyio] - */
    createService: handleUnaryCall<CreateServiceRequest, CreateServiceResponse>;
    /** [webezyio] - */
    updateService: handleUnaryCall<UpdateServiceRequest, UpdateServiceResponse>;
    /** [webezyio] - */
    deleteService: handleUnaryCall<DeleteServiceRequest, DeleteServiceResponse>;
    /** [webezyio] - */
    listServices: handleServerStreamingCall<ListServicesRequest, GetServiceResponse>;
}
export interface ServicesClient extends Client {
    /** [webezyio] - */
    getService(request: GetServiceRequest, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    getService(request: GetServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    getService(request: GetServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createService(request: CreateServiceRequest, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    createService(request: CreateServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    createService(request: CreateServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateService(request: UpdateServiceRequest, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    updateService(request: UpdateServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    updateService(request: UpdateServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deleteService(request: DeleteServiceRequest, callback: (error: ServiceError | null, response: DeleteServiceResponse) => void): ClientUnaryCall;
    deleteService(request: DeleteServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteServiceResponse) => void): ClientUnaryCall;
    deleteService(request: DeleteServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteServiceResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    listServices(request: ListServicesRequest, options?: Partial<CallOptions>): ClientReadableStream<GetServiceResponse>;
    listServices(request: ListServicesRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetServiceResponse>;
}
export declare const ServicesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServicesClient;
    service: typeof ServicesService;
};
