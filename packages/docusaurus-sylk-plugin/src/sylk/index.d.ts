import { Metadata, ServiceError as _service_error, ClientUnaryCall, ClientReadableStream } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
import { PackagesClient } from './protos/Packages';
import { ProjectsClient } from './protos/Projects';
import { UsersClient } from './protos/Users';
import { OrganizationsClient } from './protos/Organizations';
import { MessagesClient } from './protos/Messages';
import { MethodsClient } from './protos/Methods';
import { EnumsClient } from './protos/Enums';
import { FieldsClient } from './protos/Fields';
import { ServicesClient } from './protos/Services';
import { EnumValuesClient } from './protos/EnumValues';
import * as Sylk from './protos/Sylk';
import * as SylkEnum from './protos/SylkEnum';
import * as SylkOrganization from './protos/SylkOrganization';
import * as SylkMessage from './protos/SylkMessage';
import * as SylkField from './protos/SylkField';
import * as SylkServer from './protos/SylkServer';
import * as SylkPackage from './protos/SylkPackage';
import * as SylkProject from './protos/SylkProject';
import * as SylkClient from './protos/SylkClient';
import * as SylkCommons from './protos/SylkCommons';
import * as SylkConfigs from './protos/SylkConfigs';
import * as SylkApi from './protos/SylkApi';
import * as SylkEnumValue from './protos/SylkEnumValue';
import * as SylkUser from './protos/SylkUser';
import * as SylkMethod from './protos/SylkMethod';
import * as SylkService from './protos/SylkService';
export declare class sylkcore {
    constructor(host?: string, port?: number, metadata?: Metadata);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Packages_client;
    private readonly Projects_client;
    private readonly Users_client;
    private readonly Organizations_client;
    private readonly Messages_client;
    private readonly Methods_client;
    private readonly Enums_client;
    private readonly Fields_client;
    private readonly Services_client;
    private readonly EnumValues_client;
    /**
    * @method Packages.GetPackage
    * @description
    * @kind Unary
    * @param request SylkApi.GetPackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetPackageResponse>
    */
    GetPackage(request: SylkApi.GetPackageRequest, metadata?: Metadata): Promise<SylkApi.GetPackageResponse>;
    /**
    * @method Packages.GetPackage
    * @description
    * @kind Unary
    * @param request SylkApi.GetPackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetPackageResponse
    * @returns ClientUnaryCall
    */
    GetPackage(request: SylkApi.GetPackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetPackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.CreatePackage
    * @description
    * @kind Unary
    * @param request SylkApi.CreatePackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreatePackageResponse>
    */
    CreatePackage(request: SylkApi.CreatePackageRequest, metadata?: Metadata): Promise<SylkApi.CreatePackageResponse>;
    /**
    * @method Packages.CreatePackage
    * @description
    * @kind Unary
    * @param request SylkApi.CreatePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreatePackageResponse
    * @returns ClientUnaryCall
    */
    CreatePackage(request: SylkApi.CreatePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreatePackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.UpdatePackage
    * @description
    * @kind Unary
    * @param request SylkApi.UpdatePackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdatePackageResponse>
    */
    UpdatePackage(request: SylkApi.UpdatePackageRequest, metadata?: Metadata): Promise<SylkApi.UpdatePackageResponse>;
    /**
    * @method Packages.UpdatePackage
    * @description
    * @kind Unary
    * @param request SylkApi.UpdatePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdatePackageResponse
    * @returns ClientUnaryCall
    */
    UpdatePackage(request: SylkApi.UpdatePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdatePackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.DeletePackage
    * @description
    * @kind Unary
    * @param request SylkApi.DeletePackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeletePackageResponse>
    */
    DeletePackage(request: SylkApi.DeletePackageRequest, metadata?: Metadata): Promise<SylkApi.DeletePackageResponse>;
    /**
    * @method Packages.DeletePackage
    * @description
    * @kind Unary
    * @param request SylkApi.DeletePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeletePackageResponse
    * @returns ClientUnaryCall
    */
    DeletePackage(request: SylkApi.DeletePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeletePackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.ListPackages
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListPackagesRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi.GetPackageResponse>
    */
    ListPackages(request: SylkApi.ListPackagesRequest, metadata?: Metadata): Observable<SylkApi.GetPackageResponse>;
    /**
    * @method Packages.ListPackages
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListPackagesRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetPackageResponse
    * @returns ClientReadableStream<SylkApi.GetPackageResponse>
    */
    ListPackages(request: SylkApi.ListPackagesRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetPackageResponse) => void): ClientReadableStream<SylkApi.GetPackageResponse>;
    /**
    * @method Projects.GetProject
    * @description
    * @kind Unary
    * @param request SylkApi.GetProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetProjectResponse>
    */
    GetProject(request: SylkApi.GetProjectRequest, metadata?: Metadata): Promise<SylkApi.GetProjectResponse>;
    /**
    * @method Projects.GetProject
    * @description
    * @kind Unary
    * @param request SylkApi.GetProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetProjectResponse
    * @returns ClientUnaryCall
    */
    GetProject(request: SylkApi.GetProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.UpdateProject
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateProjectResponse>
    */
    UpdateProject(request: SylkApi.UpdateProjectRequest, metadata?: Metadata): Promise<SylkApi.UpdateProjectResponse>;
    /**
    * @method Projects.UpdateProject
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateProjectResponse
    * @returns ClientUnaryCall
    */
    UpdateProject(request: SylkApi.UpdateProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.DeleteProject
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeleteProjectResponse>
    */
    DeleteProject(request: SylkApi.DeleteProjectRequest, metadata?: Metadata): Promise<SylkApi.DeleteProjectResponse>;
    /**
    * @method Projects.DeleteProject
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeleteProjectResponse
    * @returns ClientUnaryCall
    */
    DeleteProject(request: SylkApi.DeleteProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeleteProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.AddUserProject
    * @description
    * @kind Unary
    * @param request SylkApi.AddUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.AddUserResponse>
    */
    AddUserProject(request: SylkApi.AddUserRequest, metadata?: Metadata): Promise<SylkApi.AddUserResponse>;
    /**
    * @method Projects.AddUserProject
    * @description
    * @kind Unary
    * @param request SylkApi.AddUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.AddUserResponse
    * @returns ClientUnaryCall
    */
    AddUserProject(request: SylkApi.AddUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.AddUserResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.UpdateUserRoleProject
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserRoleRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateUserRoleResponse>
    */
    UpdateUserRoleProject(request: SylkApi.UpdateUserRoleRequest, metadata?: Metadata): Promise<SylkApi.UpdateUserRoleResponse>;
    /**
    * @method Projects.UpdateUserRoleProject
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserRoleRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateUserRoleResponse
    * @returns ClientUnaryCall
    */
    UpdateUserRoleProject(request: SylkApi.UpdateUserRoleRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateUserRoleResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.UpdateUserStatusProject
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserStatusRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateUserStatusResponse>
    */
    UpdateUserStatusProject(request: SylkApi.UpdateUserStatusRequest, metadata?: Metadata): Promise<SylkApi.UpdateUserStatusResponse>;
    /**
    * @method Projects.UpdateUserStatusProject
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserStatusRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateUserStatusResponse
    * @returns ClientUnaryCall
    */
    UpdateUserStatusProject(request: SylkApi.UpdateUserStatusRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateUserStatusResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.RemoveUserProject
    * @description
    * @kind Unary
    * @param request SylkApi.RemoveUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.RemoveUserResponse>
    */
    RemoveUserProject(request: SylkApi.RemoveUserRequest, metadata?: Metadata): Promise<SylkApi.RemoveUserResponse>;
    /**
    * @method Projects.RemoveUserProject
    * @description
    * @kind Unary
    * @param request SylkApi.RemoveUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.RemoveUserResponse
    * @returns ClientUnaryCall
    */
    RemoveUserProject(request: SylkApi.RemoveUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.RemoveUserResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.ListProjects
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListProjectsRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi.GetProjectResponse>
    */
    ListProjects(request: SylkApi.ListProjectsRequest, metadata?: Metadata): Observable<SylkApi.GetProjectResponse>;
    /**
    * @method Projects.ListProjects
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListProjectsRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetProjectResponse
    * @returns ClientReadableStream<SylkApi.GetProjectResponse>
    */
    ListProjects(request: SylkApi.ListProjectsRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetProjectResponse) => void): ClientReadableStream<SylkApi.GetProjectResponse>;
    /**
    * @method Projects.CreateProject
    * @description
    * @kind Unary
    * @param request SylkApi.CreateProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateProjectResponse>
    */
    CreateProject(request: SylkApi.CreateProjectRequest, metadata?: Metadata): Promise<SylkApi.CreateProjectResponse>;
    /**
    * @method Projects.CreateProject
    * @description
    * @kind Unary
    * @param request SylkApi.CreateProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateProjectResponse
    * @returns ClientUnaryCall
    */
    CreateProject(request: SylkApi.CreateProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Users.GetUser
    * @description
    * @kind Unary
    * @param request SylkApi.GetUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetUserResponse>
    */
    GetUser(request: SylkApi.GetUserRequest, metadata?: Metadata): Promise<SylkApi.GetUserResponse>;
    /**
    * @method Users.GetUser
    * @description
    * @kind Unary
    * @param request SylkApi.GetUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetUserResponse
    * @returns ClientUnaryCall
    */
    GetUser(request: SylkApi.GetUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetUserResponse) => void): ClientUnaryCall;
    /**
    * @method Users.UpdateUser
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateUserResponse>
    */
    UpdateUser(request: SylkApi.UpdateUserRequest, metadata?: Metadata): Promise<SylkApi.UpdateUserResponse>;
    /**
    * @method Users.UpdateUser
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateUserResponse
    * @returns ClientUnaryCall
    */
    UpdateUser(request: SylkApi.UpdateUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateUserResponse) => void): ClientUnaryCall;
    /**
    * @method Users.CreateUser
    * @description
    * @kind Unary
    * @param request SylkApi.CreateUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateUserResponse>
    */
    CreateUser(request: SylkApi.CreateUserRequest, metadata?: Metadata): Promise<SylkApi.CreateUserResponse>;
    /**
    * @method Users.CreateUser
    * @description
    * @kind Unary
    * @param request SylkApi.CreateUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateUserResponse
    * @returns ClientUnaryCall
    */
    CreateUser(request: SylkApi.CreateUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateUserResponse) => void): ClientUnaryCall;
    /**
    * @method Users.CreateAccessToken
    * @description
    * @kind Unary
    * @param request SylkApi.CreateAccessTokenRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateAccessTokenResponse>
    */
    CreateAccessToken(request: SylkApi.CreateAccessTokenRequest, metadata?: Metadata): Promise<SylkApi.CreateAccessTokenResponse>;
    /**
    * @method Users.CreateAccessToken
    * @description
    * @kind Unary
    * @param request SylkApi.CreateAccessTokenRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateAccessTokenResponse
    * @returns ClientUnaryCall
    */
    CreateAccessToken(request: SylkApi.CreateAccessTokenRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateAccessTokenResponse) => void): ClientUnaryCall;
    /**
    * @method Users.GetAccessToken
    * @description
    * @kind Unary
    * @param request SylkApi.GetAccessTokenRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetAccessTokenResponse>
    */
    GetAccessToken(request: SylkApi.GetAccessTokenRequest, metadata?: Metadata): Promise<SylkApi.GetAccessTokenResponse>;
    /**
    * @method Users.GetAccessToken
    * @description
    * @kind Unary
    * @param request SylkApi.GetAccessTokenRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetAccessTokenResponse
    * @returns ClientUnaryCall
    */
    GetAccessToken(request: SylkApi.GetAccessTokenRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetAccessTokenResponse) => void): ClientUnaryCall;
    /**
    * @method Users.ListAccessTokens
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListAccessTokensRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi.GetAccessTokenResponse>
    */
    ListAccessTokens(request: SylkApi.ListAccessTokensRequest, metadata?: Metadata): Observable<SylkApi.GetAccessTokenResponse>;
    /**
    * @method Users.ListAccessTokens
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListAccessTokensRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetAccessTokenResponse
    * @returns ClientReadableStream<SylkApi.GetAccessTokenResponse>
    */
    ListAccessTokens(request: SylkApi.ListAccessTokensRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetAccessTokenResponse) => void): ClientReadableStream<SylkApi.GetAccessTokenResponse>;
    /**
    * @method Users.RevokeAccessToken
    * @description
    * @kind Unary
    * @param request SylkApi.RevokeAccessTokenRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.RevokeAccessTokenResponse>
    */
    RevokeAccessToken(request: SylkApi.RevokeAccessTokenRequest, metadata?: Metadata): Promise<SylkApi.RevokeAccessTokenResponse>;
    /**
    * @method Users.RevokeAccessToken
    * @description
    * @kind Unary
    * @param request SylkApi.RevokeAccessTokenRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.RevokeAccessTokenResponse
    * @returns ClientUnaryCall
    */
    RevokeAccessToken(request: SylkApi.RevokeAccessTokenRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.RevokeAccessTokenResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.GetOrganization
    * @description
    * @kind Unary
    * @param request SylkApi.GetOrganizationRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetOrganizationResponse>
    */
    GetOrganization(request: SylkApi.GetOrganizationRequest, metadata?: Metadata): Promise<SylkApi.GetOrganizationResponse>;
    /**
    * @method Organizations.GetOrganization
    * @description
    * @kind Unary
    * @param request SylkApi.GetOrganizationRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetOrganizationResponse
    * @returns ClientUnaryCall
    */
    GetOrganization(request: SylkApi.GetOrganizationRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetOrganizationResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.UpdateOrganization
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateOrganizationRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateOrganizationResponse>
    */
    UpdateOrganization(request: SylkApi.UpdateOrganizationRequest, metadata?: Metadata): Promise<SylkApi.UpdateOrganizationResponse>;
    /**
    * @method Organizations.UpdateOrganization
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateOrganizationRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateOrganizationResponse
    * @returns ClientUnaryCall
    */
    UpdateOrganization(request: SylkApi.UpdateOrganizationRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateOrganizationResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.ListOrganizations
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListOrganizationsRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi.GetOrganizationResponse>
    */
    ListOrganizations(request: SylkApi.ListOrganizationsRequest, metadata?: Metadata): Observable<SylkApi.GetOrganizationResponse>;
    /**
    * @method Organizations.ListOrganizations
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListOrganizationsRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetOrganizationResponse
    * @returns ClientReadableStream<SylkApi.GetOrganizationResponse>
    */
    ListOrganizations(request: SylkApi.ListOrganizationsRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetOrganizationResponse) => void): ClientReadableStream<SylkApi.GetOrganizationResponse>;
    /**
    * @method Organizations.AcceprUserInvite
    * @description
    * @kind Unary
    * @param request SylkApi.AcceptUserInviteRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.AcceptUserInviteResponse>
    */
    AcceprUserInvite(request: SylkApi.AcceptUserInviteRequest, metadata?: Metadata): Promise<SylkApi.AcceptUserInviteResponse>;
    /**
    * @method Organizations.AcceprUserInvite
    * @description
    * @kind Unary
    * @param request SylkApi.AcceptUserInviteRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.AcceptUserInviteResponse
    * @returns ClientUnaryCall
    */
    AcceprUserInvite(request: SylkApi.AcceptUserInviteRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.AcceptUserInviteResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.AddUser
    * @description
    * @kind Unary
    * @param request SylkApi.AddUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.AddUserResponse>
    */
    AddUser(request: SylkApi.AddUserRequest, metadata?: Metadata): Promise<SylkApi.AddUserResponse>;
    /**
    * @method Organizations.AddUser
    * @description
    * @kind Unary
    * @param request SylkApi.AddUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.AddUserResponse
    * @returns ClientUnaryCall
    */
    AddUser(request: SylkApi.AddUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.AddUserResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.UpdateUserRole
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserRoleRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateUserRoleResponse>
    */
    UpdateUserRole(request: SylkApi.UpdateUserRoleRequest, metadata?: Metadata): Promise<SylkApi.UpdateUserRoleResponse>;
    /**
    * @method Organizations.UpdateUserRole
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserRoleRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateUserRoleResponse
    * @returns ClientUnaryCall
    */
    UpdateUserRole(request: SylkApi.UpdateUserRoleRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateUserRoleResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.UpdateUserStatus
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserStatusRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateUserStatusResponse>
    */
    UpdateUserStatus(request: SylkApi.UpdateUserStatusRequest, metadata?: Metadata): Promise<SylkApi.UpdateUserStatusResponse>;
    /**
    * @method Organizations.UpdateUserStatus
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateUserStatusRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateUserStatusResponse
    * @returns ClientUnaryCall
    */
    UpdateUserStatus(request: SylkApi.UpdateUserStatusRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateUserStatusResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.RemoveUser
    * @description
    * @kind Unary
    * @param request SylkApi.RemoveUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.RemoveUserResponse>
    */
    RemoveUser(request: SylkApi.RemoveUserRequest, metadata?: Metadata): Promise<SylkApi.RemoveUserResponse>;
    /**
    * @method Organizations.RemoveUser
    * @description
    * @kind Unary
    * @param request SylkApi.RemoveUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.RemoveUserResponse
    * @returns ClientUnaryCall
    */
    RemoveUser(request: SylkApi.RemoveUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.RemoveUserResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.GetMessage
    * @description
    * @kind Unary
    * @param request SylkApi.GetMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetMessageResponse>
    */
    GetMessage(request: SylkApi.GetMessageRequest, metadata?: Metadata): Promise<SylkApi.GetMessageResponse>;
    /**
    * @method Messages.GetMessage
    * @description
    * @kind Unary
    * @param request SylkApi.GetMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetMessageResponse
    * @returns ClientUnaryCall
    */
    GetMessage(request: SylkApi.GetMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.CreateMessage
    * @description
    * @kind Unary
    * @param request SylkApi.CreateMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateMessageResponse>
    */
    CreateMessage(request: SylkApi.CreateMessageRequest, metadata?: Metadata): Promise<SylkApi.CreateMessageResponse>;
    /**
    * @method Messages.CreateMessage
    * @description
    * @kind Unary
    * @param request SylkApi.CreateMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateMessageResponse
    * @returns ClientUnaryCall
    */
    CreateMessage(request: SylkApi.CreateMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.UpdateMessage
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateMessageResponse>
    */
    UpdateMessage(request: SylkApi.UpdateMessageRequest, metadata?: Metadata): Promise<SylkApi.UpdateMessageResponse>;
    /**
    * @method Messages.UpdateMessage
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateMessageResponse
    * @returns ClientUnaryCall
    */
    UpdateMessage(request: SylkApi.UpdateMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.DeleteMessage
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeleteMessageResponse>
    */
    DeleteMessage(request: SylkApi.DeleteMessageRequest, metadata?: Metadata): Promise<SylkApi.DeleteMessageResponse>;
    /**
    * @method Messages.DeleteMessage
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeleteMessageResponse
    * @returns ClientUnaryCall
    */
    DeleteMessage(request: SylkApi.DeleteMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeleteMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.GetMethod
    * @description
    * @kind Unary
    * @param request SylkApi.GetMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetMethodResponse>
    */
    GetMethod(request: SylkApi.GetMethodRequest, metadata?: Metadata): Promise<SylkApi.GetMethodResponse>;
    /**
    * @method Methods.GetMethod
    * @description
    * @kind Unary
    * @param request SylkApi.GetMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetMethodResponse
    * @returns ClientUnaryCall
    */
    GetMethod(request: SylkApi.GetMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.CreateMethod
    * @description
    * @kind Unary
    * @param request SylkApi.CreateMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateMethodResponse>
    */
    CreateMethod(request: SylkApi.CreateMethodRequest, metadata?: Metadata): Promise<SylkApi.CreateMethodResponse>;
    /**
    * @method Methods.CreateMethod
    * @description
    * @kind Unary
    * @param request SylkApi.CreateMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateMethodResponse
    * @returns ClientUnaryCall
    */
    CreateMethod(request: SylkApi.CreateMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.UpdateMethod
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateMethodResponse>
    */
    UpdateMethod(request: SylkApi.UpdateMethodRequest, metadata?: Metadata): Promise<SylkApi.UpdateMethodResponse>;
    /**
    * @method Methods.UpdateMethod
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateMethodResponse
    * @returns ClientUnaryCall
    */
    UpdateMethod(request: SylkApi.UpdateMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.DeleteMethod
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeleteMethodResponse>
    */
    DeleteMethod(request: SylkApi.DeleteMethodRequest, metadata?: Metadata): Promise<SylkApi.DeleteMethodResponse>;
    /**
    * @method Methods.DeleteMethod
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeleteMethodResponse
    * @returns ClientUnaryCall
    */
    DeleteMethod(request: SylkApi.DeleteMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeleteMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.GetEnum
    * @description
    * @kind Unary
    * @param request SylkApi.GetEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetEnumResponse>
    */
    GetEnum(request: SylkApi.GetEnumRequest, metadata?: Metadata): Promise<SylkApi.GetEnumResponse>;
    /**
    * @method Enums.GetEnum
    * @description
    * @kind Unary
    * @param request SylkApi.GetEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetEnumResponse
    * @returns ClientUnaryCall
    */
    GetEnum(request: SylkApi.GetEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.CreateEnum
    * @description
    * @kind Unary
    * @param request SylkApi.CreateEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateEnumResponse>
    */
    CreateEnum(request: SylkApi.CreateEnumRequest, metadata?: Metadata): Promise<SylkApi.CreateEnumResponse>;
    /**
    * @method Enums.CreateEnum
    * @description
    * @kind Unary
    * @param request SylkApi.CreateEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateEnumResponse
    * @returns ClientUnaryCall
    */
    CreateEnum(request: SylkApi.CreateEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.UpdateEnum
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateEnumResponse>
    */
    UpdateEnum(request: SylkApi.UpdateEnumRequest, metadata?: Metadata): Promise<SylkApi.UpdateEnumResponse>;
    /**
    * @method Enums.UpdateEnum
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateEnumResponse
    * @returns ClientUnaryCall
    */
    UpdateEnum(request: SylkApi.UpdateEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.DeleteEnum
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeleteEnumResponse>
    */
    DeleteEnum(request: SylkApi.DeleteEnumRequest, metadata?: Metadata): Promise<SylkApi.DeleteEnumResponse>;
    /**
    * @method Enums.DeleteEnum
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeleteEnumResponse
    * @returns ClientUnaryCall
    */
    DeleteEnum(request: SylkApi.DeleteEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeleteEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.GetField
    * @description
    * @kind Unary
    * @param request SylkApi.GetFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetFieldResponse>
    */
    GetField(request: SylkApi.GetFieldRequest, metadata?: Metadata): Promise<SylkApi.GetFieldResponse>;
    /**
    * @method Fields.GetField
    * @description
    * @kind Unary
    * @param request SylkApi.GetFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetFieldResponse
    * @returns ClientUnaryCall
    */
    GetField(request: SylkApi.GetFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.CreateField
    * @description
    * @kind Unary
    * @param request SylkApi.CreateFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateFieldResponse>
    */
    CreateField(request: SylkApi.CreateFieldRequest, metadata?: Metadata): Promise<SylkApi.CreateFieldResponse>;
    /**
    * @method Fields.CreateField
    * @description
    * @kind Unary
    * @param request SylkApi.CreateFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateFieldResponse
    * @returns ClientUnaryCall
    */
    CreateField(request: SylkApi.CreateFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.UpdateField
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateFieldResponse>
    */
    UpdateField(request: SylkApi.UpdateFieldRequest, metadata?: Metadata): Promise<SylkApi.UpdateFieldResponse>;
    /**
    * @method Fields.UpdateField
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateFieldResponse
    * @returns ClientUnaryCall
    */
    UpdateField(request: SylkApi.UpdateFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.DeleteField
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeleteFieldResponse>
    */
    DeleteField(request: SylkApi.DeleteFieldRequest, metadata?: Metadata): Promise<SylkApi.DeleteFieldResponse>;
    /**
    * @method Fields.DeleteField
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeleteFieldResponse
    * @returns ClientUnaryCall
    */
    DeleteField(request: SylkApi.DeleteFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeleteFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Services.GetService
    * @description
    * @kind Unary
    * @param request SylkApi.GetServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetServiceResponse>
    */
    GetService(request: SylkApi.GetServiceRequest, metadata?: Metadata): Promise<SylkApi.GetServiceResponse>;
    /**
    * @method Services.GetService
    * @description
    * @kind Unary
    * @param request SylkApi.GetServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetServiceResponse
    * @returns ClientUnaryCall
    */
    GetService(request: SylkApi.GetServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.CreateService
    * @description
    * @kind Unary
    * @param request SylkApi.CreateServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateServiceResponse>
    */
    CreateService(request: SylkApi.CreateServiceRequest, metadata?: Metadata): Promise<SylkApi.CreateServiceResponse>;
    /**
    * @method Services.CreateService
    * @description
    * @kind Unary
    * @param request SylkApi.CreateServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateServiceResponse
    * @returns ClientUnaryCall
    */
    CreateService(request: SylkApi.CreateServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.UpdateService
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateServiceResponse>
    */
    UpdateService(request: SylkApi.UpdateServiceRequest, metadata?: Metadata): Promise<SylkApi.UpdateServiceResponse>;
    /**
    * @method Services.UpdateService
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateServiceResponse
    * @returns ClientUnaryCall
    */
    UpdateService(request: SylkApi.UpdateServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.DeleteService
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeleteServiceResponse>
    */
    DeleteService(request: SylkApi.DeleteServiceRequest, metadata?: Metadata): Promise<SylkApi.DeleteServiceResponse>;
    /**
    * @method Services.DeleteService
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeleteServiceResponse
    * @returns ClientUnaryCall
    */
    DeleteService(request: SylkApi.DeleteServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeleteServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.ListServices
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListServicesRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi.GetServiceResponse>
    */
    ListServices(request: SylkApi.ListServicesRequest, metadata?: Metadata): Observable<SylkApi.GetServiceResponse>;
    /**
    * @method Services.ListServices
    * @description
    * @kind Server Stream
    * @param request SylkApi.ListServicesRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetServiceResponse
    * @returns ClientReadableStream<SylkApi.GetServiceResponse>
    */
    ListServices(request: SylkApi.ListServicesRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetServiceResponse) => void): ClientReadableStream<SylkApi.GetServiceResponse>;
    /**
    * @method EnumValues.GetEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.GetEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.GetEnumValueResponse>
    */
    GetEnumValue(request: SylkApi.GetEnumValueRequest, metadata?: Metadata): Promise<SylkApi.GetEnumValueResponse>;
    /**
    * @method EnumValues.GetEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.GetEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.GetEnumValueResponse
    * @returns ClientUnaryCall
    */
    GetEnumValue(request: SylkApi.GetEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.GetEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.CreateEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.CreateEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.CreateEnumValueResponse>
    */
    CreateEnumValue(request: SylkApi.CreateEnumValueRequest, metadata?: Metadata): Promise<SylkApi.CreateEnumValueResponse>;
    /**
    * @method EnumValues.CreateEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.CreateEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.CreateEnumValueResponse
    * @returns ClientUnaryCall
    */
    CreateEnumValue(request: SylkApi.CreateEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.CreateEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.UpdateEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.UpdateEnumValueResponse>
    */
    UpdateEnumValue(request: SylkApi.UpdateEnumValueRequest, metadata?: Metadata): Promise<SylkApi.UpdateEnumValueResponse>;
    /**
    * @method EnumValues.UpdateEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.UpdateEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.UpdateEnumValueResponse
    * @returns ClientUnaryCall
    */
    UpdateEnumValue(request: SylkApi.UpdateEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.UpdateEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.DeleteEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi.DeleteEnumValueResponse>
    */
    DeleteEnumValue(request: SylkApi.DeleteEnumValueRequest, metadata?: Metadata): Promise<SylkApi.DeleteEnumValueResponse>;
    /**
    * @method EnumValues.DeleteEnumValue
    * @description
    * @kind Unary
    * @param request SylkApi.DeleteEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi.DeleteEnumValueResponse
    * @returns ClientUnaryCall
    */
    DeleteEnumValue(request: SylkApi.DeleteEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi.DeleteEnumValueResponse) => void): ClientUnaryCall;
}
export { Sylk, SylkEnum, SylkOrganization, SylkMessage, SylkField, SylkServer, SylkPackage, SylkProject, SylkClient, SylkCommons, SylkConfigs, SylkApi, SylkEnumValue, SylkUser, SylkMethod, SylkService, PackagesClient, ProjectsClient, UsersClient, OrganizationsClient, MessagesClient, MethodsClient, EnumsClient, FieldsClient, ServicesClient, EnumValuesClient };
