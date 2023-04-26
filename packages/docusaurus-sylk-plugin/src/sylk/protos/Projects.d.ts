/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { AddUserRequest, AddUserResponse, CreateProjectRequest, CreateProjectResponse, DeleteProjectRequest, DeleteProjectResponse, GetProjectRequest, GetProjectResponse, ListProjectsRequest, RemoveUserRequest, RemoveUserResponse, UpdateProjectRequest, UpdateProjectResponse, UpdateUserRoleRequest, UpdateUserRoleResponse, UpdateUserStatusRequest, UpdateUserStatusResponse } from "./SylkApi";
/** Webezy.io Generated proto DO NOT EDIT */
/** [webezyio] */
export type ProjectsService = typeof ProjectsService;
export declare const ProjectsService: {
    /** [webezyio] - */
    readonly getProject: {
        readonly path: "/Projects/GetProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProjectRequest;
        readonly responseSerialize: (value: GetProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProjectResponse;
    };
    /** [webezyio] - */
    readonly updateProject: {
        readonly path: "/Projects/UpdateProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateProjectRequest;
        readonly responseSerialize: (value: UpdateProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateProjectResponse;
    };
    /** [webezyio] - */
    readonly deleteProject: {
        readonly path: "/Projects/DeleteProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProjectRequest;
        readonly responseSerialize: (value: DeleteProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteProjectResponse;
    };
    /** [webezyio] - */
    readonly addUserProject: {
        readonly path: "/Projects/AddUserProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AddUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AddUserRequest;
        readonly responseSerialize: (value: AddUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AddUserResponse;
    };
    /** [webezyio] - */
    readonly updateUserRoleProject: {
        readonly path: "/Projects/UpdateUserRoleProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserRoleRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserRoleRequest;
        readonly responseSerialize: (value: UpdateUserRoleResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserRoleResponse;
    };
    /** [webezyio] - */
    readonly updateUserStatusProject: {
        readonly path: "/Projects/UpdateUserStatusProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateUserStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateUserStatusRequest;
        readonly responseSerialize: (value: UpdateUserStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateUserStatusResponse;
    };
    /** [webezyio] - */
    readonly removeUserProject: {
        readonly path: "/Projects/RemoveUserProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RemoveUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RemoveUserRequest;
        readonly responseSerialize: (value: RemoveUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RemoveUserResponse;
    };
    /** [webezyio] - */
    readonly listProjects: {
        readonly path: "/Projects/ListProjects";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListProjectsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProjectsRequest;
        readonly responseSerialize: (value: GetProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProjectResponse;
    };
    /** [webezyio] - */
    readonly createProject: {
        readonly path: "/Projects/CreateProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProjectRequest;
        readonly responseSerialize: (value: CreateProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateProjectResponse;
    };
};
export interface ProjectsServer extends UntypedServiceImplementation {
    /** [webezyio] - */
    getProject: handleUnaryCall<GetProjectRequest, GetProjectResponse>;
    /** [webezyio] - */
    updateProject: handleUnaryCall<UpdateProjectRequest, UpdateProjectResponse>;
    /** [webezyio] - */
    deleteProject: handleUnaryCall<DeleteProjectRequest, DeleteProjectResponse>;
    /** [webezyio] - */
    addUserProject: handleUnaryCall<AddUserRequest, AddUserResponse>;
    /** [webezyio] - */
    updateUserRoleProject: handleUnaryCall<UpdateUserRoleRequest, UpdateUserRoleResponse>;
    /** [webezyio] - */
    updateUserStatusProject: handleUnaryCall<UpdateUserStatusRequest, UpdateUserStatusResponse>;
    /** [webezyio] - */
    removeUserProject: handleUnaryCall<RemoveUserRequest, RemoveUserResponse>;
    /** [webezyio] - */
    listProjects: handleServerStreamingCall<ListProjectsRequest, GetProjectResponse>;
    /** [webezyio] - */
    createProject: handleUnaryCall<CreateProjectRequest, CreateProjectResponse>;
}
export interface ProjectsClient extends Client {
    /** [webezyio] - */
    getProject(request: GetProjectRequest, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateProject(request: UpdateProjectRequest, callback: (error: ServiceError | null, response: UpdateProjectResponse) => void): ClientUnaryCall;
    updateProject(request: UpdateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateProjectResponse) => void): ClientUnaryCall;
    updateProject(request: UpdateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateProjectResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    deleteProject(request: DeleteProjectRequest, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    addUserProject(request: AddUserRequest, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUserProject(request: AddUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    addUserProject(request: AddUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AddUserResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateUserRoleProject(request: UpdateUserRoleRequest, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRoleProject(request: UpdateUserRoleRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    updateUserRoleProject(request: UpdateUserRoleRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserRoleResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    updateUserStatusProject(request: UpdateUserStatusRequest, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatusProject(request: UpdateUserStatusRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    updateUserStatusProject(request: UpdateUserStatusRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateUserStatusResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    removeUserProject(request: RemoveUserRequest, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUserProject(request: RemoveUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    removeUserProject(request: RemoveUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RemoveUserResponse) => void): ClientUnaryCall;
    /** [webezyio] - */
    listProjects(request: ListProjectsRequest, options?: Partial<CallOptions>): ClientReadableStream<GetProjectResponse>;
    listProjects(request: ListProjectsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<GetProjectResponse>;
    /** [webezyio] - */
    createProject(request: CreateProjectRequest, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
}
export declare const ProjectsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ProjectsClient;
    service: typeof ProjectsService;
};
