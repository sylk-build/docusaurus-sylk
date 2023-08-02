/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { AddUserRequest, AddUserResponse, CreateProjectRequest, CreateProjectResponse, DeleteProjectRequest, DeleteProjectResponse, GetProjectRequest, GetProjectResponse, ListProjectsRequest, RemoveUserRequest, RemoveUserResponse, UpdateProjectRequest, UpdateProjectResponse, UpdateUserRoleRequest, UpdateUserRoleResponse, UpdateUserStatusRequest, UpdateUserStatusResponse } from "../../SylkApi/v1/SylkApi";
/** sylk.build Generated proto DO NOT EDIT */
export type ProjectsService = typeof ProjectsService;
export declare const ProjectsService: {
    /** [sylk] - None */
    readonly updateUserRoleProject: {
        readonly path: "/sylk.Projects.v1.Projects/UpdateUserRoleProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRoleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRoleRequest;
        readonly responseSerialize: (value: UpdateUserRoleResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserRoleResponse;
    };
    /** [sylk] - None */
    readonly removeUserProject: {
        readonly path: "/sylk.Projects.v1.Projects/RemoveUserProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveUserRequest;
        readonly responseSerialize: (value: RemoveUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RemoveUserResponse;
    };
    /** [sylk] - None */
    readonly addUserProject: {
        readonly path: "/sylk.Projects.v1.Projects/AddUserProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddUserRequest;
        readonly responseSerialize: (value: AddUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AddUserResponse;
    };
    /** [sylk] - None */
    readonly getProject: {
        readonly path: "/sylk.Projects.v1.Projects/GetProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProjectRequest;
        readonly responseSerialize: (value: GetProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProjectResponse;
    };
    /** [sylk] - None */
    readonly updateProject: {
        readonly path: "/sylk.Projects.v1.Projects/UpdateProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProjectRequest;
        readonly responseSerialize: (value: UpdateProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateProjectResponse;
    };
    /** [sylk] - None */
    readonly createProject: {
        readonly path: "/sylk.Projects.v1.Projects/CreateProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProjectRequest;
        readonly responseSerialize: (value: CreateProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateProjectResponse;
    };
    /** [sylk] - None */
    readonly deleteProject: {
        readonly path: "/sylk.Projects.v1.Projects/DeleteProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProjectRequest;
        readonly responseSerialize: (value: DeleteProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteProjectResponse;
    };
    /** [sylk] - None */
    readonly listProjects: {
        readonly path: "/sylk.Projects.v1.Projects/ListProjects";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListProjectsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProjectsRequest;
        readonly responseSerialize: (value: GetProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProjectResponse;
    };
    /** [sylk] - None */
    readonly updateUserStatusProject: {
        readonly path: "/sylk.Projects.v1.Projects/UpdateUserStatusProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserStatusRequest;
        readonly responseSerialize: (value: UpdateUserStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserStatusResponse;
    };
};
export interface ProjectsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    updateUserRoleProject: handleUnaryCall<UpdateUserRoleRequest, UpdateUserRoleResponse>;
    /** [sylk] - None */
    removeUserProject: handleUnaryCall<RemoveUserRequest, RemoveUserResponse>;
    /** [sylk] - None */
    addUserProject: handleUnaryCall<AddUserRequest, AddUserResponse>;
    /** [sylk] - None */
    getProject: handleUnaryCall<GetProjectRequest, GetProjectResponse>;
    /** [sylk] - None */
    updateProject: handleUnaryCall<UpdateProjectRequest, UpdateProjectResponse>;
    /** [sylk] - None */
    createProject: handleUnaryCall<CreateProjectRequest, CreateProjectResponse>;
    /** [sylk] - None */
    deleteProject: handleUnaryCall<DeleteProjectRequest, DeleteProjectResponse>;
    /** [sylk] - None */
    listProjects: handleServerStreamingCall<ListProjectsRequest, GetProjectResponse>;
    /** [sylk] - None */
    updateUserStatusProject: handleUnaryCall<UpdateUserStatusRequest, UpdateUserStatusResponse>;
}
export interface ProjectsClient extends Client {
    /** [sylk] - None */
    updateUserRoleProject(request: UpdateUserRoleRequest, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRoleProject(request: UpdateUserRoleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRoleProject(request: UpdateUserRoleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    removeUserProject(request: RemoveUserRequest, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUserProject(request: RemoveUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUserProject(request: RemoveUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    addUserProject(request: AddUserRequest, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUserProject(request: AddUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUserProject(request: AddUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    getProject(request: GetProjectRequest, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateProject(request: UpdateProjectRequest, callback: (error: ServiceError | null, response: UpdateProjectResponse) => void): ClientUnaryCall;
    updateProject(request: UpdateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateProjectResponse) => void): ClientUnaryCall;
    updateProject(request: UpdateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateProjectResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createProject(request: CreateProjectRequest, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteProject(request: DeleteProjectRequest, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    listProjects(request: ListProjectsRequest, options?: Partial<CallOptions>): ClientReadableStream<GetProjectResponse>;
    listProjects(request: ListProjectsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetProjectResponse>;
    /** [sylk] - None */
    updateUserStatusProject(request: UpdateUserStatusRequest, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatusProject(request: UpdateUserStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatusProject(request: UpdateUserStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
}
export declare const ProjectsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectsClient;
    service: typeof ProjectsService;
};
