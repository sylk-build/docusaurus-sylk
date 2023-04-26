/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateAccessTokenRequest, CreateAccessTokenResponse, CreateUserRequest, CreateUserResponse, GetAccessTokenRequest, GetAccessTokenResponse, GetUserRequest, GetUserResponse, ListAccessTokensRequest, RevokeAccessTokenRequest, RevokeAccessTokenResponse, UpdateUserRequest, UpdateUserResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type UsersService = typeof UsersService;
export declare const UsersService: {
    /** [webezyio] - */
    readonly getUser: {
        readonly path: "/Users/GetUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserRequest;
        readonly responseSerialize: (value: GetUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetUserResponse;
    };
    /** [webezyio] - */
    readonly updateUser: {
        readonly path: "/Users/UpdateUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRequest;
        readonly responseSerialize: (value: UpdateUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserResponse;
    };
    /** [webezyio] - */
    readonly createUser: {
        readonly path: "/Users/CreateUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: CreateUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateUserResponse;
    };
    /** [webezyio] - */
    readonly createAccessToken: {
        readonly path: "/Users/CreateAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAccessTokenRequest;
        readonly responseSerialize: (value: CreateAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateAccessTokenResponse;
    };
    /** [webezyio] - */
    readonly getAccessToken: {
        readonly path: "/Users/GetAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAccessTokenRequest;
        readonly responseSerialize: (value: GetAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetAccessTokenResponse;
    };
    /** [webezyio] - */
    readonly listAccessTokens: {
        readonly path: "/Users/ListAccessTokens";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListAccessTokensRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessTokensRequest;
        readonly responseSerialize: (value: GetAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetAccessTokenResponse;
    };
    /** [webezyio] - */
    readonly revokeAccessToken: {
        readonly path: "/Users/RevokeAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RevokeAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RevokeAccessTokenRequest;
        readonly responseSerialize: (value: RevokeAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RevokeAccessTokenResponse;
    };
};
export interface UsersServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getUser: handleUnaryCall<GetUserRequest, GetUserResponse>;
    /** [webezyio] - */
    updateUser: handleUnaryCall<UpdateUserRequest, UpdateUserResponse>;
    /** [webezyio] - */
    createUser: handleUnaryCall<CreateUserRequest, CreateUserResponse>;
    /** [webezyio] - */
    createAccessToken: handleUnaryCall<CreateAccessTokenRequest, CreateAccessTokenResponse>;
    /** [webezyio] - */
    getAccessToken: handleUnaryCall<GetAccessTokenRequest, GetAccessTokenResponse>;
    /** [webezyio] - */
    listAccessTokens: handleServerStreamingCall<ListAccessTokensRequest, GetAccessTokenResponse>;
    /** [webezyio] - */
    revokeAccessToken: handleUnaryCall<RevokeAccessTokenRequest, RevokeAccessTokenResponse>;
}
export interface UsersClient extends Client {
    /** [webezyio] - */
    getUser(request: GetUserRequest, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    getUser(request: GetUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    getUser(request: GetUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateUser(request: UpdateUserRequest, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
    updateUser(request: UpdateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
    updateUser(request: UpdateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createUser(request: CreateUserRequest, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    createUser(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    createUser(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    createAccessToken(request: CreateAccessTokenRequest, callback: (error: ServiceError | null, response: CreateAccessTokenResponse) => void): ClientUnaryCall;
    createAccessToken(request: CreateAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateAccessTokenResponse) => void): ClientUnaryCall;
    createAccessToken(request: CreateAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateAccessTokenResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    getAccessToken(request: GetAccessTokenRequest, callback: (error: ServiceError | null, response: GetAccessTokenResponse) => void): ClientUnaryCall;
    getAccessToken(request: GetAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetAccessTokenResponse) => void): ClientUnaryCall;
    getAccessToken(request: GetAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetAccessTokenResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    listAccessTokens(request: ListAccessTokensRequest, options?: Partial<CallOptions>): ClientReadableStream<GetAccessTokenResponse>;
    listAccessTokens(request: ListAccessTokensRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetAccessTokenResponse>;
    /** [webezyio] - */
    revokeAccessToken(request: RevokeAccessTokenRequest, callback: (error: ServiceError | null, response: RevokeAccessTokenResponse) => void): ClientUnaryCall;
    revokeAccessToken(request: RevokeAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RevokeAccessTokenResponse) => void): ClientUnaryCall;
    revokeAccessToken(request: RevokeAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RevokeAccessTokenResponse) => void): ClientUnaryCall;
}
export declare const UsersClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UsersClient;
    service: typeof UsersService;
};
