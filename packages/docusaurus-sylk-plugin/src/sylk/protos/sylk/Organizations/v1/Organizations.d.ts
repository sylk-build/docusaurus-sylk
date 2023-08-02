/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { AcceptUserInviteRequest, AcceptUserInviteResponse, AddUserRequest, AddUserResponse, GetOrganizationRequest, GetOrganizationResponse, ListOrganizationsRequest, RemoveUserRequest, RemoveUserResponse, UpdateOrganizationRequest, UpdateOrganizationResponse, UpdateUserRoleRequest, UpdateUserRoleResponse, UpdateUserStatusRequest, UpdateUserStatusResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type OrganizationsService = typeof OrganizationsService;
export declare const OrganizationsService: {
    /** [sylk] - None */
    readonly acceprUserInvite: {
        readonly path: "/sylk.Organizations.v1.Organizations/AcceprUserInvite";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AcceptUserInviteRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AcceptUserInviteRequest;
        readonly responseSerialize: (value: AcceptUserInviteResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AcceptUserInviteResponse;
    };
    /** [sylk] - None */
    readonly getOrganization: {
        readonly path: "/sylk.Organizations.v1.Organizations/GetOrganization";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOrganizationRequest;
        readonly responseSerialize: (value: GetOrganizationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetOrganizationResponse;
    };
    /** [sylk] - None */
    readonly updateOrganization: {
        readonly path: "/sylk.Organizations.v1.Organizations/UpdateOrganization";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateOrganizationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateOrganizationRequest;
        readonly responseSerialize: (value: UpdateOrganizationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateOrganizationResponse;
    };
    /** [sylk] - None */
    readonly listOrganizations: {
        readonly path: "/sylk.Organizations.v1.Organizations/ListOrganizations";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListOrganizationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListOrganizationsRequest;
        readonly responseSerialize: (value: GetOrganizationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetOrganizationResponse;
    };
    /** [sylk] - None */
    readonly addUser: {
        readonly path: "/sylk.Organizations.v1.Organizations/AddUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddUserRequest;
        readonly responseSerialize: (value: AddUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AddUserResponse;
    };
    /** [sylk] - None */
    readonly updateUserStatus: {
        readonly path: "/sylk.Organizations.v1.Organizations/UpdateUserStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserStatusRequest;
        readonly responseSerialize: (value: UpdateUserStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserStatusResponse;
    };
    /** [sylk] - None */
    readonly removeUser: {
        readonly path: "/sylk.Organizations.v1.Organizations/RemoveUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveUserRequest;
        readonly responseSerialize: (value: RemoveUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RemoveUserResponse;
    };
    /** [sylk] - None */
    readonly updateUserRole: {
        readonly path: "/sylk.Organizations.v1.Organizations/UpdateUserRole";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRoleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRoleRequest;
        readonly responseSerialize: (value: UpdateUserRoleResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserRoleResponse;
    };
};
export interface OrganizationsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    acceprUserInvite: handleUnaryCall<AcceptUserInviteRequest, AcceptUserInviteResponse>;
    /** [sylk] - None */
    getOrganization: handleUnaryCall<GetOrganizationRequest, GetOrganizationResponse>;
    /** [sylk] - None */
    updateOrganization: handleUnaryCall<UpdateOrganizationRequest, UpdateOrganizationResponse>;
    /** [sylk] - None */
    listOrganizations: handleServerStreamingCall<ListOrganizationsRequest, GetOrganizationResponse>;
    /** [sylk] - None */
    addUser: handleUnaryCall<AddUserRequest, AddUserResponse>;
    /** [sylk] - None */
    updateUserStatus: handleUnaryCall<UpdateUserStatusRequest, UpdateUserStatusResponse>;
    /** [sylk] - None */
    removeUser: handleUnaryCall<RemoveUserRequest, RemoveUserResponse>;
    /** [sylk] - None */
    updateUserRole: handleUnaryCall<UpdateUserRoleRequest, UpdateUserRoleResponse>;
}
export interface OrganizationsClient extends Client {
    /** [sylk] - None */
    acceprUserInvite(request: AcceptUserInviteRequest, callback: (error: ServiceError | null, response: AcceptUserInviteResponse) => void): ClientUnaryCall;
    acceprUserInvite(request: AcceptUserInviteRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AcceptUserInviteResponse) => void): ClientUnaryCall;
    acceprUserInvite(request: AcceptUserInviteRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AcceptUserInviteResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    getOrganization(request: GetOrganizationRequest, callback: (error: ServiceError | null, response: GetOrganizationResponse) => void): ClientUnaryCall;
    getOrganization(request: GetOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetOrganizationResponse) => void): ClientUnaryCall;
    getOrganization(request: GetOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetOrganizationResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateOrganization(request: UpdateOrganizationRequest, callback: (error: ServiceError | null, response: UpdateOrganizationResponse) => void): ClientUnaryCall;
    updateOrganization(request: UpdateOrganizationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateOrganizationResponse) => void): ClientUnaryCall;
    updateOrganization(request: UpdateOrganizationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateOrganizationResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    listOrganizations(request: ListOrganizationsRequest, options?: Partial<CallOptions>): ClientReadableStream<GetOrganizationResponse>;
    listOrganizations(request: ListOrganizationsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetOrganizationResponse>;
    /** [sylk] - None */
    addUser(request: AddUserRequest, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUser(request: AddUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUser(request: AddUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateUserStatus(request: UpdateUserStatusRequest, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatus(request: UpdateUserStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatus(request: UpdateUserStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    removeUser(request: RemoveUserRequest, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUser(request: RemoveUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUser(request: RemoveUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateUserRole(request: UpdateUserRoleRequest, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRole(request: UpdateUserRoleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRole(request: UpdateUserRoleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
}
export declare const OrganizationsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OrganizationsClient;
    service: typeof OrganizationsService;
};
