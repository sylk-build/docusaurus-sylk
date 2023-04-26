/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreatePackageRequest, CreatePackageResponse, DeletePackageRequest, DeletePackageResponse, GetPackageRequest, GetPackageResponse, ListPackagesRequest, UpdatePackageRequest, UpdatePackageResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type PackagesService = typeof PackagesService;
export declare const PackagesService: {
    /** [webezyio] - */
    readonly getPackage: {
        readonly path: "/Packages/GetPackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPackageRequest;
        readonly responseSerialize: (value: GetPackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetPackageResponse;
    };
    /** [webezyio] - */
    readonly createPackage: {
        readonly path: "/Packages/CreatePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePackageRequest;
        readonly responseSerialize: (value: CreatePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreatePackageResponse;
    };
    /** [webezyio] - */
    readonly updatePackage: {
        readonly path: "/Packages/UpdatePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePackageRequest;
        readonly responseSerialize: (value: UpdatePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdatePackageResponse;
    };
    /** [webezyio] - */
    readonly deletePackage: {
        readonly path: "/Packages/DeletePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeletePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeletePackageRequest;
        readonly responseSerialize: (value: DeletePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeletePackageResponse;
    };
    /** [webezyio] - */
    readonly listPackages: {
        readonly path: "/Packages/ListPackages";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListPackagesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPackagesRequest;
        readonly responseSerialize: (value: GetPackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetPackageResponse;
    };
};
export interface PackagesServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getPackage: handleUnaryCall<GetPackageRequest, GetPackageResponse>;
    /** [webezyio] - */
    createPackage: handleUnaryCall<CreatePackageRequest, CreatePackageResponse>;
    /** [webezyio] - */
    updatePackage: handleUnaryCall<UpdatePackageRequest, UpdatePackageResponse>;
    /** [webezyio] - */
    deletePackage: handleUnaryCall<DeletePackageRequest, DeletePackageResponse>;
    /** [webezyio] - */
    listPackages: handleServerStreamingCall<ListPackagesRequest, GetPackageResponse>;
}
export interface PackagesClient extends Client {
    /** [webezyio] - */
    getPackage(request: GetPackageRequest, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    getPackage(request: GetPackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    getPackage(request: GetPackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createPackage(request: CreatePackageRequest, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    createPackage(request: CreatePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    createPackage(request: CreatePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updatePackage(request: UpdatePackageRequest, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    updatePackage(request: UpdatePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    updatePackage(request: UpdatePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deletePackage(request: DeletePackageRequest, callback: (error: ServiceError | null, response: DeletePackageResponse) => void): ClientUnaryCall;
    deletePackage(request: DeletePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeletePackageResponse) => void): ClientUnaryCall;
    deletePackage(request: DeletePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeletePackageResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    listPackages(request: ListPackagesRequest, options?: Partial<CallOptions>): ClientReadableStream<GetPackageResponse>;
    listPackages(request: ListPackagesRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetPackageResponse>;
}
export declare const PackagesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PackagesClient;
    service: typeof PackagesService;
};
