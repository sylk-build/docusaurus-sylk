/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { CreateAccessTokenRequest, CreateAccessTokenResponse, CreateUserRequest, CreateUserResponse, GetAccessTokenRequest, GetAccessTokenResponse, GetUserRequest, GetUserResponse, ListAccessTokensRequest, RevokeAccessTokenRequest, RevokeAccessTokenResponse, UpdateUserRequest, UpdateUserResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type UsersService = typeof UsersService;
export declare const UsersService: {
    /** [sylk] - None */
    readonly createUser: {
        readonly path: "/sylk.Users.v1.Users/CreateUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateUserRequest;
        readonly responseSerialize: (value: CreateUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateUserResponse;
    };
    /** [sylk] - None */
    readonly getAccessToken: {
        readonly path: "/sylk.Users.v1.Users/GetAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAccessTokenRequest;
        readonly responseSerialize: (value: GetAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetAccessTokenResponse;
    };
    /** [sylk] - None */
    readonly createAccessToken: {
        readonly path: "/sylk.Users.v1.Users/CreateAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAccessTokenRequest;
        readonly responseSerialize: (value: CreateAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateAccessTokenResponse;
    };
    /** [sylk] - None */
    readonly getUser: {
        readonly path: "/sylk.Users.v1.Users/GetUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetUserRequest;
        readonly responseSerialize: (value: GetUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetUserResponse;
    };
    /** [sylk] - None */
    readonly listAccessTokens: {
        readonly path: "/sylk.Users.v1.Users/ListAccessTokens";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListAccessTokensRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessTokensRequest;
        readonly responseSerialize: (value: GetAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetAccessTokenResponse;
    };
    /** [sylk] - None */
    readonly revokeAccessToken: {
        readonly path: "/sylk.Users.v1.Users/RevokeAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RevokeAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RevokeAccessTokenRequest;
        readonly responseSerialize: (value: RevokeAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RevokeAccessTokenResponse;
    };
    /** [sylk] - None */
    readonly updateUser: {
        readonly path: "/sylk.Users.v1.Users/UpdateUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRequest;
        readonly responseSerialize: (value: UpdateUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserResponse;
    };
};
export interface UsersServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    createUser: handleUnaryCall<CreateUserRequest, CreateUserResponse>;
    /** [sylk] - None */
    getAccessToken: handleUnaryCall<GetAccessTokenRequest, GetAccessTokenResponse>;
    /** [sylk] - None */
    createAccessToken: handleUnaryCall<CreateAccessTokenRequest, CreateAccessTokenResponse>;
    /** [sylk] - None */
    getUser: handleUnaryCall<GetUserRequest, GetUserResponse>;
    /** [sylk] - None */
    listAccessTokens: handleServerStreamingCall<ListAccessTokensRequest, GetAccessTokenResponse>;
    /** [sylk] - None */
    revokeAccessToken: handleUnaryCall<RevokeAccessTokenRequest, RevokeAccessTokenResponse>;
    /** [sylk] - None */
    updateUser: handleUnaryCall<UpdateUserRequest, UpdateUserResponse>;
}
export interface UsersClient extends Client {
    /** [sylk] - None */
    createUser(request: CreateUserRequest, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    createUser(request: CreateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    createUser(request: CreateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateUserResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    getAccessToken(request: GetAccessTokenRequest, callback: (error: ServiceError | null, response: GetAccessTokenResponse) => void): ClientUnaryCall;
    getAccessToken(request: GetAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetAccessTokenResponse) => void): ClientUnaryCall;
    getAccessToken(request: GetAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetAccessTokenResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createAccessToken(request: CreateAccessTokenRequest, callback: (error: ServiceError | null, response: CreateAccessTokenResponse) => void): ClientUnaryCall;
    createAccessToken(request: CreateAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateAccessTokenResponse) => void): ClientUnaryCall;
    createAccessToken(request: CreateAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateAccessTokenResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    getUser(request: GetUserRequest, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    getUser(request: GetUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    getUser(request: GetUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetUserResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    listAccessTokens(request: ListAccessTokensRequest, options?: Partial<CallOptions>): ClientReadableStream<GetAccessTokenResponse>;
    listAccessTokens(request: ListAccessTokensRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetAccessTokenResponse>;
    /** [sylk] - None */
    revokeAccessToken(request: RevokeAccessTokenRequest, callback: (error: ServiceError | null, response: RevokeAccessTokenResponse) => void): ClientUnaryCall;
    revokeAccessToken(request: RevokeAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RevokeAccessTokenResponse) => void): ClientUnaryCall;
    revokeAccessToken(request: RevokeAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RevokeAccessTokenResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateUser(request: UpdateUserRequest, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
    updateUser(request: UpdateUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
    updateUser(request: UpdateUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserResponse) => void): ClientUnaryCall;
}
export declare const UsersClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UsersClient;
    service: typeof UsersService;
};
