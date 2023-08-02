/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreatePackageRequest, CreatePackageResponse, DeletePackageRequest, DeletePackageResponse, GetPackageRequest, GetPackageResponse, ListPackagesRequest, UpdatePackageRequest, UpdatePackageResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type PackagesService = typeof PackagesService;
export declare const PackagesService: {
    /** [sylk] - None */
    readonly getPackage: {
        readonly path: "/sylk.Packages.v1.Packages/GetPackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPackageRequest;
        readonly responseSerialize: (value: GetPackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetPackageResponse;
    };
    /** [sylk] - None */
    readonly createPackage: {
        readonly path: "/sylk.Packages.v1.Packages/CreatePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePackageRequest;
        readonly responseSerialize: (value: CreatePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreatePackageResponse;
    };
    /** [sylk] - None */
    readonly deletePackage: {
        readonly path: "/sylk.Packages.v1.Packages/DeletePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeletePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeletePackageRequest;
        readonly responseSerialize: (value: DeletePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeletePackageResponse;
    };
    /** [sylk] - None */
    readonly updatePackage: {
        readonly path: "/sylk.Packages.v1.Packages/UpdatePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePackageRequest;
        readonly responseSerialize: (value: UpdatePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdatePackageResponse;
    };
    /** [sylk] - None */
    readonly listPackages: {
        readonly path: "/sylk.Packages.v1.Packages/ListPackages";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListPackagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPackagesRequest;
        readonly responseSerialize: (value: GetPackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetPackageResponse;
    };
};
export interface PackagesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getPackage: handleUnaryCall<GetPackageRequest, GetPackageResponse>;
    /** [sylk] - None */
    createPackage: handleUnaryCall<CreatePackageRequest, CreatePackageResponse>;
    /** [sylk] - None */
    deletePackage: handleUnaryCall<DeletePackageRequest, DeletePackageResponse>;
    /** [sylk] - None */
    updatePackage: handleUnaryCall<UpdatePackageRequest, UpdatePackageResponse>;
    /** [sylk] - None */
    listPackages: handleServerStreamingCall<ListPackagesRequest, GetPackageResponse>;
}
export interface PackagesClient extends Client {
    /** [sylk] - None */
    getPackage(request: GetPackageRequest, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    getPackage(request: GetPackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    getPackage(request: GetPackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createPackage(request: CreatePackageRequest, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    createPackage(request: CreatePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    createPackage(request: CreatePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deletePackage(request: DeletePackageRequest, callback: (error: ServiceError | null, response: DeletePackageResponse) => void): ClientUnaryCall;
    deletePackage(request: DeletePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeletePackageResponse) => void): ClientUnaryCall;
    deletePackage(request: DeletePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeletePackageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updatePackage(request: UpdatePackageRequest, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    updatePackage(request: UpdatePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    updatePackage(request: UpdatePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    listPackages(request: ListPackagesRequest, options?: Partial<CallOptions>): ClientReadableStream<GetPackageResponse>;
    listPackages(request: ListPackagesRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetPackageResponse>;
}
export declare const PackagesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PackagesClient;
    service: typeof PackagesService;
};
