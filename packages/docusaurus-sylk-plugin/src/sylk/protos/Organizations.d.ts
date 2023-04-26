/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { AcceptUserInviteRequest, AcceptUserInviteResponse, AddUserRequest, AddUserResponse, GetOrganizationRequest, GetOrganizationResponse, ListOrganizationsRequest, RemoveUserRequest, RemoveUserResponse, UpdateOrganizationRequest, UpdateOrganizationResponse, UpdateUserRoleRequest, UpdateUserRoleResponse, UpdateUserStatusRequest, UpdateUserStatusResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type OrganizationsService = typeof OrganizationsService;
export declare const OrganizationsService: {
    /** [webezyio] - */
    readonly getOrganization: {
        readonly path: "/Organizations/GetOrganization";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOrganizationRequest;
        readonly responseSerialize: (value: GetOrganizationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetOrganizationResponse;
    };
    /** [webezyio] - */
    readonly updateOrganization: {
        readonly path: "/Organizations/UpdateOrganization";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOrganizationRequest;
        readonly responseSerialize: (value: UpdateOrganizationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateOrganizationResponse;
    };
    /** [webezyio] - */
    readonly listOrganizations: {
        readonly path: "/Organizations/ListOrganizations";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListOrganizationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOrganizationsRequest;
        readonly responseSerialize: (value: GetOrganizationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetOrganizationResponse;
    };
    /** [webezyio] - */
    readonly acceprUserInvite: {
        readonly path: "/Organizations/AcceprUserInvite";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AcceptUserInviteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AcceptUserInviteRequest;
        readonly responseSerialize: (value: AcceptUserInviteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AcceptUserInviteResponse;
    };
    /** [webezyio] - */
    readonly addUser: {
        readonly path: "/Organizations/AddUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddUserRequest;
        readonly responseSerialize: (value: AddUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AddUserResponse;
    };
    /** [webezyio] - */
    readonly updateUserRole: {
        readonly path: "/Organizations/UpdateUserRole";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRoleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRoleRequest;
        readonly responseSerialize: (value: UpdateUserRoleResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserRoleResponse;
    };
    /** [webezyio] - */
    readonly updateUserStatus: {
        readonly path: "/Organizations/UpdateUserStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserStatusRequest;
        readonly responseSerialize: (value: UpdateUserStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserStatusResponse;
    };
    /** [webezyio] - */
    readonly removeUser: {
        readonly path: "/Organizations/RemoveUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveUserRequest;
        readonly responseSerialize: (value: RemoveUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RemoveUserResponse;
    };
};
export interface OrganizationsServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getOrganization: handleUnaryCall<GetOrganizationRequest, GetOrganizationResponse>;
    /** [webezyio] - */
    updateOrganization: handleUnaryCall<UpdateOrganizationRequest, UpdateOrganizationResponse>;
    /** [webezyio] - */
    listOrganizations: handleServerStreamingCall<ListOrganizationsRequest, GetOrganizationResponse>;
    /** [webezyio] - */
    acceprUserInvite: handleUnaryCall<AcceptUserInviteRequest, AcceptUserInviteResponse>;
    /** [webezyio] - */
    addUser: handleUnaryCall<AddUserRequest, AddUserResponse>;
    /** [webezyio] - */
    updateUserRole: handleUnaryCall<UpdateUserRoleRequest, UpdateUserRoleResponse>;
    /** [webezyio] - */
    updateUserStatus: handleUnaryCall<UpdateUserStatusRequest, UpdateUserStatusResponse>;
    /** [webezyio] - */
    removeUser: handleUnaryCall<RemoveUserRequest, RemoveUserResponse>;
}
export interface OrganizationsClient extends Client {
    /** [webezyio] - */
    getOrganization(request: GetOrganizationRequest, callback: (error: ServiceError | null, response: GetOrganizationResponse) => void): ClientUnaryCall;
    getOrganization(request: GetOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetOrganizationResponse) => void): ClientUnaryCall;
    getOrganization(request: GetOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetOrganizationResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateOrganization(request: UpdateOrganizationRequest, callback: (error: ServiceError | null, response: UpdateOrganizationResponse) => void): ClientUnaryCall;
    updateOrganization(request: UpdateOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateOrganizationResponse) => void): ClientUnaryCall;
    updateOrganization(request: UpdateOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateOrganizationResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    listOrganizations(request: ListOrganizationsRequest, options?: Partial<CallOptions>): ClientReadableStream<GetOrganizationResponse>;
    listOrganizations(request: ListOrganizationsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetOrganizationResponse>;
    /** [webezyio] - */
    acceprUserInvite(request: AcceptUserInviteRequest, callback: (error: ServiceError | null, response: AcceptUserInviteResponse) => void): ClientUnaryCall;
    acceprUserInvite(request: AcceptUserInviteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AcceptUserInviteResponse) => void): ClientUnaryCall;
    acceprUserInvite(request: AcceptUserInviteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AcceptUserInviteResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    addUser(request: AddUserRequest, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUser(request: AddUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUser(request: AddUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateUserRole(request: UpdateUserRoleRequest, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRole(request: UpdateUserRoleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRole(request: UpdateUserRoleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateUserStatus(request: UpdateUserStatusRequest, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatus(request: UpdateUserStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatus(request: UpdateUserStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    removeUser(request: RemoveUserRequest, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUser(request: RemoveUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUser(request: RemoveUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
}
export declare const OrganizationsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OrganizationsClient;
    service: typeof OrganizationsService;
};
