/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateServiceRequest, CreateServiceResponse, DeleteServiceRequest, DeleteServiceResponse, GetServiceRequest, GetServiceResponse, ListServicesRequest, UpdateServiceRequest, UpdateServiceResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type ServicesService = typeof ServicesService;
export declare const ServicesService: {
    /** [sylk] - None */
    readonly createService: {
        readonly path: "/sylk.Services.v1.Services/CreateService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateServiceRequest;
        readonly responseSerialize: (value: CreateServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateServiceResponse;
    };
    /** [sylk] - None */
    readonly getService: {
        readonly path: "/sylk.Services.v1.Services/GetService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetServiceRequest;
        readonly responseSerialize: (value: GetServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetServiceResponse;
    };
    /** [sylk] - None */
    readonly updateService: {
        readonly path: "/sylk.Services.v1.Services/UpdateService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateServiceRequest;
        readonly responseSerialize: (value: UpdateServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateServiceResponse;
    };
    /** [sylk] - None */
    readonly listServices: {
        readonly path: "/sylk.Services.v1.Services/ListServices";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListServicesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListServicesRequest;
        readonly responseSerialize: (value: GetServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetServiceResponse;
    };
    /** [sylk] - None */
    readonly deleteService: {
        readonly path: "/sylk.Services.v1.Services/DeleteService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteServiceRequest;
        readonly responseSerialize: (value: DeleteServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteServiceResponse;
    };
};
export interface ServicesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    createService: handleUnaryCall<CreateServiceRequest, CreateServiceResponse>;
    /** [sylk] - None */
    getService: handleUnaryCall<GetServiceRequest, GetServiceResponse>;
    /** [sylk] - None */
    updateService: handleUnaryCall<UpdateServiceRequest, UpdateServiceResponse>;
    /** [sylk] - None */
    listServices: handleServerStreamingCall<ListServicesRequest, GetServiceResponse>;
    /** [sylk] - None */
    deleteService: handleUnaryCall<DeleteServiceRequest, DeleteServiceResponse>;
}
export interface ServicesClient extends Client {
    /** [sylk] - None */
    createService(request: CreateServiceRequest, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    createService(request: CreateServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    createService(request: CreateServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    getService(request: GetServiceRequest, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    getService(request: GetServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    getService(request: GetServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateService(request: UpdateServiceRequest, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    updateService(request: UpdateServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    updateService(request: UpdateServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    listServices(request: ListServicesRequest, options?: Partial<CallOptions>): ClientReadableStream<GetServiceResponse>;
    listServices(request: ListServicesRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetServiceResponse>;
    /** [sylk] - None */
    deleteService(request: DeleteServiceRequest, callback: (error: ServiceError | null, response: DeleteServiceResponse) => void): ClientUnaryCall;
    deleteService(request: DeleteServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteServiceResponse) => void): ClientUnaryCall;
    deleteService(request: DeleteServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteServiceResponse) => void): ClientUnaryCall;
}
export declare const ServicesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServicesClient;
    service: typeof ServicesService;
};
