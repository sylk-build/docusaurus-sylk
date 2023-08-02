import { Metadata, ServiceError as _service_error, ClientUnaryCall, ClientReadableStream, ChannelCredentials } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
import { Empty } from './protos/google/protobuf/empty';
import * as ActivityLog_v1 from './protos/sylk/ActivityLog/v1/ActivityLog';
import * as SylkApi_v1 from './protos/sylk/SylkApi/v1/SylkApi';
import * as Folders_v2 from './protos/sylk/Folders/v2/Folders';
import * as Packages_v2 from './protos/sylk/Packages/v2/Packages';
import * as Services_v2 from './protos/sylk/Services/v2/Services';
import * as Messages_v2 from './protos/sylk/Messages/v2/Messages';
import * as Tags_v2 from './protos/sylk/Tags/v2/Tags';
import * as Enums_v2 from './protos/sylk/Enums/v2/Enums';
import * as EnumValues_v2 from './protos/sylk/EnumValues/v2/EnumValues';
import * as Methods_v2 from './protos/sylk/Methods/v2/Methods';
import * as Fields_v2 from './protos/sylk/Fields/v2/Fields';
import * as Integrations_v2 from './protos/sylk/Integrations/v2/Integrations';
/**
 * Generated thanks to [sylk.build](https://www.sylk.build)
 */
export interface SylkClientOpts {
    host: string;
    port: number;
    metadata: Metadata;
    channelCreds: ChannelCredentials;
}
export declare class PackagesV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Packages_v1_client;
    /**
    * @method Packages.GetPackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetPackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetPackageResponse>
    */
    GetPackage(request: SylkApi_v1.GetPackageRequest, metadata?: Metadata): Promise<SylkApi_v1.GetPackageResponse>;
    /**
    * @method Packages.GetPackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetPackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetPackageResponse
    * @returns ClientUnaryCall
    */
    GetPackage(request: SylkApi_v1.GetPackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetPackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.CreatePackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreatePackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreatePackageResponse>
    */
    CreatePackage(request: SylkApi_v1.CreatePackageRequest, metadata?: Metadata): Promise<SylkApi_v1.CreatePackageResponse>;
    /**
    * @method Packages.CreatePackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreatePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreatePackageResponse
    * @returns ClientUnaryCall
    */
    CreatePackage(request: SylkApi_v1.CreatePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreatePackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.DeletePackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeletePackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeletePackageResponse>
    */
    DeletePackage(request: SylkApi_v1.DeletePackageRequest, metadata?: Metadata): Promise<SylkApi_v1.DeletePackageResponse>;
    /**
    * @method Packages.DeletePackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeletePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeletePackageResponse
    * @returns ClientUnaryCall
    */
    DeletePackage(request: SylkApi_v1.DeletePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeletePackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.UpdatePackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdatePackageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdatePackageResponse>
    */
    UpdatePackage(request: SylkApi_v1.UpdatePackageRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdatePackageResponse>;
    /**
    * @method Packages.UpdatePackage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdatePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdatePackageResponse
    * @returns ClientUnaryCall
    */
    UpdatePackage(request: SylkApi_v1.UpdatePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdatePackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.ListPackages
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListPackagesRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi_v1.GetPackageResponse>
    */
    ListPackages(request: SylkApi_v1.ListPackagesRequest, metadata?: Metadata): Observable<SylkApi_v1.GetPackageResponse>;
    /**
    * @method Packages.ListPackages
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListPackagesRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetPackageResponse
    * @returns ClientReadableStream<SylkApi_v1.GetPackageResponse>
    */
    ListPackages(request: SylkApi_v1.ListPackagesRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetPackageResponse) => void): ClientReadableStream<SylkApi_v1.GetPackageResponse>;
}
export declare class MethodsV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Methods_v1_client;
    /**
    * @method Methods.CreateMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateMethodResponse>
    */
    CreateMethod(request: SylkApi_v1.CreateMethodRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateMethodResponse>;
    /**
    * @method Methods.CreateMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateMethodResponse
    * @returns ClientUnaryCall
    */
    CreateMethod(request: SylkApi_v1.CreateMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.GetMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetMethodResponse>
    */
    GetMethod(request: SylkApi_v1.GetMethodRequest, metadata?: Metadata): Promise<SylkApi_v1.GetMethodResponse>;
    /**
    * @method Methods.GetMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetMethodResponse
    * @returns ClientUnaryCall
    */
    GetMethod(request: SylkApi_v1.GetMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.DeleteMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeleteMethodResponse>
    */
    DeleteMethod(request: SylkApi_v1.DeleteMethodRequest, metadata?: Metadata): Promise<SylkApi_v1.DeleteMethodResponse>;
    /**
    * @method Methods.DeleteMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeleteMethodResponse
    * @returns ClientUnaryCall
    */
    DeleteMethod(request: SylkApi_v1.DeleteMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeleteMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.UpdateMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateMethodRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateMethodResponse>
    */
    UpdateMethod(request: SylkApi_v1.UpdateMethodRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateMethodResponse>;
    /**
    * @method Methods.UpdateMethod
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateMethodResponse
    * @returns ClientUnaryCall
    */
    UpdateMethod(request: SylkApi_v1.UpdateMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateMethodResponse) => void): ClientUnaryCall;
}
export declare class UsersV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Users_v1_client;
    /**
    * @method Users.CreateUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateUserResponse>
    */
    CreateUser(request: SylkApi_v1.CreateUserRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateUserResponse>;
    /**
    * @method Users.CreateUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateUserResponse
    * @returns ClientUnaryCall
    */
    CreateUser(request: SylkApi_v1.CreateUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateUserResponse) => void): ClientUnaryCall;
    /**
    * @method Users.GetAccessToken
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetAccessTokenRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetAccessTokenResponse>
    */
    GetAccessToken(request: SylkApi_v1.GetAccessTokenRequest, metadata?: Metadata): Promise<SylkApi_v1.GetAccessTokenResponse>;
    /**
    * @method Users.GetAccessToken
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetAccessTokenRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetAccessTokenResponse
    * @returns ClientUnaryCall
    */
    GetAccessToken(request: SylkApi_v1.GetAccessTokenRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetAccessTokenResponse) => void): ClientUnaryCall;
    /**
    * @method Users.CreateAccessToken
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateAccessTokenRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateAccessTokenResponse>
    */
    CreateAccessToken(request: SylkApi_v1.CreateAccessTokenRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateAccessTokenResponse>;
    /**
    * @method Users.CreateAccessToken
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateAccessTokenRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateAccessTokenResponse
    * @returns ClientUnaryCall
    */
    CreateAccessToken(request: SylkApi_v1.CreateAccessTokenRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateAccessTokenResponse) => void): ClientUnaryCall;
    /**
    * @method Users.GetUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetUserResponse>
    */
    GetUser(request: SylkApi_v1.GetUserRequest, metadata?: Metadata): Promise<SylkApi_v1.GetUserResponse>;
    /**
    * @method Users.GetUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetUserResponse
    * @returns ClientUnaryCall
    */
    GetUser(request: SylkApi_v1.GetUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetUserResponse) => void): ClientUnaryCall;
    /**
    * @method Users.ListAccessTokens
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListAccessTokensRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi_v1.GetAccessTokenResponse>
    */
    ListAccessTokens(request: SylkApi_v1.ListAccessTokensRequest, metadata?: Metadata): Observable<SylkApi_v1.GetAccessTokenResponse>;
    /**
    * @method Users.ListAccessTokens
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListAccessTokensRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetAccessTokenResponse
    * @returns ClientReadableStream<SylkApi_v1.GetAccessTokenResponse>
    */
    ListAccessTokens(request: SylkApi_v1.ListAccessTokensRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetAccessTokenResponse) => void): ClientReadableStream<SylkApi_v1.GetAccessTokenResponse>;
    /**
    * @method Users.RevokeAccessToken
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.RevokeAccessTokenRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.RevokeAccessTokenResponse>
    */
    RevokeAccessToken(request: SylkApi_v1.RevokeAccessTokenRequest, metadata?: Metadata): Promise<SylkApi_v1.RevokeAccessTokenResponse>;
    /**
    * @method Users.RevokeAccessToken
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.RevokeAccessTokenRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.RevokeAccessTokenResponse
    * @returns ClientUnaryCall
    */
    RevokeAccessToken(request: SylkApi_v1.RevokeAccessTokenRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.RevokeAccessTokenResponse) => void): ClientUnaryCall;
    /**
    * @method Users.UpdateUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateUserResponse>
    */
    UpdateUser(request: SylkApi_v1.UpdateUserRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateUserResponse>;
    /**
    * @method Users.UpdateUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateUserResponse
    * @returns ClientUnaryCall
    */
    UpdateUser(request: SylkApi_v1.UpdateUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateUserResponse) => void): ClientUnaryCall;
}
export declare class EnumsV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Enums_v1_client;
    /**
    * @method Enums.GetEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetEnumResponse>
    */
    GetEnum(request: SylkApi_v1.GetEnumRequest, metadata?: Metadata): Promise<SylkApi_v1.GetEnumResponse>;
    /**
    * @method Enums.GetEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetEnumResponse
    * @returns ClientUnaryCall
    */
    GetEnum(request: SylkApi_v1.GetEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.UpdateEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateEnumResponse>
    */
    UpdateEnum(request: SylkApi_v1.UpdateEnumRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateEnumResponse>;
    /**
    * @method Enums.UpdateEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateEnumResponse
    * @returns ClientUnaryCall
    */
    UpdateEnum(request: SylkApi_v1.UpdateEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.DeleteEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeleteEnumResponse>
    */
    DeleteEnum(request: SylkApi_v1.DeleteEnumRequest, metadata?: Metadata): Promise<SylkApi_v1.DeleteEnumResponse>;
    /**
    * @method Enums.DeleteEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeleteEnumResponse
    * @returns ClientUnaryCall
    */
    DeleteEnum(request: SylkApi_v1.DeleteEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeleteEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.CreateEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateEnumRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateEnumResponse>
    */
    CreateEnum(request: SylkApi_v1.CreateEnumRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateEnumResponse>;
    /**
    * @method Enums.CreateEnum
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateEnumResponse
    * @returns ClientUnaryCall
    */
    CreateEnum(request: SylkApi_v1.CreateEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateEnumResponse) => void): ClientUnaryCall;
}
export declare class MessagesV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Messages_v1_client;
    /**
    * @method Messages.GetMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetMessageResponse>
    */
    GetMessage(request: SylkApi_v1.GetMessageRequest, metadata?: Metadata): Promise<SylkApi_v1.GetMessageResponse>;
    /**
    * @method Messages.GetMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetMessageResponse
    * @returns ClientUnaryCall
    */
    GetMessage(request: SylkApi_v1.GetMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.UpdateMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateMessageResponse>
    */
    UpdateMessage(request: SylkApi_v1.UpdateMessageRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateMessageResponse>;
    /**
    * @method Messages.UpdateMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateMessageResponse
    * @returns ClientUnaryCall
    */
    UpdateMessage(request: SylkApi_v1.UpdateMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.CreateMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateMessageResponse>
    */
    CreateMessage(request: SylkApi_v1.CreateMessageRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateMessageResponse>;
    /**
    * @method Messages.CreateMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateMessageResponse
    * @returns ClientUnaryCall
    */
    CreateMessage(request: SylkApi_v1.CreateMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.DeleteMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteMessageRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeleteMessageResponse>
    */
    DeleteMessage(request: SylkApi_v1.DeleteMessageRequest, metadata?: Metadata): Promise<SylkApi_v1.DeleteMessageResponse>;
    /**
    * @method Messages.DeleteMessage
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeleteMessageResponse
    * @returns ClientUnaryCall
    */
    DeleteMessage(request: SylkApi_v1.DeleteMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeleteMessageResponse) => void): ClientUnaryCall;
}
export declare class ActivitiesV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Activities_v1_client;
    /**
    * @method Activities.ListActivityLogs
    * @description None
    * @kind Server Stream
    * @param request ActivityLog_v1.ListActivityLogsRequest
    * @param metadata Metadata
    * @returns Observable<ActivityLog_v1.ActivityLog>
    */
    ListActivityLogs(request: ActivityLog_v1.ListActivityLogsRequest, metadata?: Metadata): Observable<ActivityLog_v1.ActivityLog>;
    /**
    * @method Activities.ListActivityLogs
    * @description None
    * @kind Server Stream
    * @param request ActivityLog_v1.ListActivityLogsRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with ActivityLog_v1.ActivityLog
    * @returns ClientReadableStream<ActivityLog_v1.ActivityLog>
    */
    ListActivityLogs(request: ActivityLog_v1.ListActivityLogsRequest, metadata: Metadata, callback: (error: _service_error | null, response: ActivityLog_v1.ActivityLog) => void): ClientReadableStream<ActivityLog_v1.ActivityLog>;
    /**
    * @method Activities.GetActivityLogs
    * @description None
    * @kind Unary
    * @param request ActivityLog_v1.ListActivityLogsRequest
    * @param metadata Metadata
    * @returns Promise<ActivityLog_v1.GetActivityLogsResponse>
    */
    GetActivityLogs(request: ActivityLog_v1.ListActivityLogsRequest, metadata?: Metadata): Promise<ActivityLog_v1.GetActivityLogsResponse>;
    /**
    * @method Activities.GetActivityLogs
    * @description None
    * @kind Unary
    * @param request ActivityLog_v1.ListActivityLogsRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with ActivityLog_v1.GetActivityLogsResponse
    * @returns ClientUnaryCall
    */
    GetActivityLogs(request: ActivityLog_v1.ListActivityLogsRequest, metadata: Metadata, callback: (error: _service_error | null, response: ActivityLog_v1.GetActivityLogsResponse) => void): ClientUnaryCall;
}
export declare class OrganizationsV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Organizations_v1_client;
    /**
    * @method Organizations.AcceprUserInvite
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.AcceptUserInviteRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.AcceptUserInviteResponse>
    */
    AcceprUserInvite(request: SylkApi_v1.AcceptUserInviteRequest, metadata?: Metadata): Promise<SylkApi_v1.AcceptUserInviteResponse>;
    /**
    * @method Organizations.AcceprUserInvite
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.AcceptUserInviteRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.AcceptUserInviteResponse
    * @returns ClientUnaryCall
    */
    AcceprUserInvite(request: SylkApi_v1.AcceptUserInviteRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.AcceptUserInviteResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.GetOrganization
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetOrganizationRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetOrganizationResponse>
    */
    GetOrganization(request: SylkApi_v1.GetOrganizationRequest, metadata?: Metadata): Promise<SylkApi_v1.GetOrganizationResponse>;
    /**
    * @method Organizations.GetOrganization
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetOrganizationRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetOrganizationResponse
    * @returns ClientUnaryCall
    */
    GetOrganization(request: SylkApi_v1.GetOrganizationRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetOrganizationResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.UpdateOrganization
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateOrganizationRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateOrganizationResponse>
    */
    UpdateOrganization(request: SylkApi_v1.UpdateOrganizationRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateOrganizationResponse>;
    /**
    * @method Organizations.UpdateOrganization
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateOrganizationRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateOrganizationResponse
    * @returns ClientUnaryCall
    */
    UpdateOrganization(request: SylkApi_v1.UpdateOrganizationRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateOrganizationResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.ListOrganizations
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListOrganizationsRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi_v1.GetOrganizationResponse>
    */
    ListOrganizations(request: SylkApi_v1.ListOrganizationsRequest, metadata?: Metadata): Observable<SylkApi_v1.GetOrganizationResponse>;
    /**
    * @method Organizations.ListOrganizations
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListOrganizationsRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetOrganizationResponse
    * @returns ClientReadableStream<SylkApi_v1.GetOrganizationResponse>
    */
    ListOrganizations(request: SylkApi_v1.ListOrganizationsRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetOrganizationResponse) => void): ClientReadableStream<SylkApi_v1.GetOrganizationResponse>;
    /**
    * @method Organizations.AddUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.AddUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.AddUserResponse>
    */
    AddUser(request: SylkApi_v1.AddUserRequest, metadata?: Metadata): Promise<SylkApi_v1.AddUserResponse>;
    /**
    * @method Organizations.AddUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.AddUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.AddUserResponse
    * @returns ClientUnaryCall
    */
    AddUser(request: SylkApi_v1.AddUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.AddUserResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.UpdateUserStatus
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserStatusRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateUserStatusResponse>
    */
    UpdateUserStatus(request: SylkApi_v1.UpdateUserStatusRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateUserStatusResponse>;
    /**
    * @method Organizations.UpdateUserStatus
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserStatusRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateUserStatusResponse
    * @returns ClientUnaryCall
    */
    UpdateUserStatus(request: SylkApi_v1.UpdateUserStatusRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateUserStatusResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.RemoveUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.RemoveUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.RemoveUserResponse>
    */
    RemoveUser(request: SylkApi_v1.RemoveUserRequest, metadata?: Metadata): Promise<SylkApi_v1.RemoveUserResponse>;
    /**
    * @method Organizations.RemoveUser
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.RemoveUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.RemoveUserResponse
    * @returns ClientUnaryCall
    */
    RemoveUser(request: SylkApi_v1.RemoveUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.RemoveUserResponse) => void): ClientUnaryCall;
    /**
    * @method Organizations.UpdateUserRole
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserRoleRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateUserRoleResponse>
    */
    UpdateUserRole(request: SylkApi_v1.UpdateUserRoleRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateUserRoleResponse>;
    /**
    * @method Organizations.UpdateUserRole
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserRoleRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateUserRoleResponse
    * @returns ClientUnaryCall
    */
    UpdateUserRole(request: SylkApi_v1.UpdateUserRoleRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateUserRoleResponse) => void): ClientUnaryCall;
}
export declare class FieldsV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Fields_v1_client;
    /**
    * @method Fields.CreateField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateFieldResponse>
    */
    CreateField(request: SylkApi_v1.CreateFieldRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateFieldResponse>;
    /**
    * @method Fields.CreateField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateFieldResponse
    * @returns ClientUnaryCall
    */
    CreateField(request: SylkApi_v1.CreateFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.GetField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetFieldResponse>
    */
    GetField(request: SylkApi_v1.GetFieldRequest, metadata?: Metadata): Promise<SylkApi_v1.GetFieldResponse>;
    /**
    * @method Fields.GetField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetFieldResponse
    * @returns ClientUnaryCall
    */
    GetField(request: SylkApi_v1.GetFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.DeleteField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeleteFieldResponse>
    */
    DeleteField(request: SylkApi_v1.DeleteFieldRequest, metadata?: Metadata): Promise<SylkApi_v1.DeleteFieldResponse>;
    /**
    * @method Fields.DeleteField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeleteFieldResponse
    * @returns ClientUnaryCall
    */
    DeleteField(request: SylkApi_v1.DeleteFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeleteFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.UpdateField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateFieldRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateFieldResponse>
    */
    UpdateField(request: SylkApi_v1.UpdateFieldRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateFieldResponse>;
    /**
    * @method Fields.UpdateField
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateFieldResponse
    * @returns ClientUnaryCall
    */
    UpdateField(request: SylkApi_v1.UpdateFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateFieldResponse) => void): ClientUnaryCall;
}
export declare class ProjectsV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Projects_v1_client;
    /**
    * @method Projects.UpdateUserRoleProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserRoleRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateUserRoleResponse>
    */
    UpdateUserRoleProject(request: SylkApi_v1.UpdateUserRoleRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateUserRoleResponse>;
    /**
    * @method Projects.UpdateUserRoleProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserRoleRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateUserRoleResponse
    * @returns ClientUnaryCall
    */
    UpdateUserRoleProject(request: SylkApi_v1.UpdateUserRoleRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateUserRoleResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.RemoveUserProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.RemoveUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.RemoveUserResponse>
    */
    RemoveUserProject(request: SylkApi_v1.RemoveUserRequest, metadata?: Metadata): Promise<SylkApi_v1.RemoveUserResponse>;
    /**
    * @method Projects.RemoveUserProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.RemoveUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.RemoveUserResponse
    * @returns ClientUnaryCall
    */
    RemoveUserProject(request: SylkApi_v1.RemoveUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.RemoveUserResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.AddUserProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.AddUserRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.AddUserResponse>
    */
    AddUserProject(request: SylkApi_v1.AddUserRequest, metadata?: Metadata): Promise<SylkApi_v1.AddUserResponse>;
    /**
    * @method Projects.AddUserProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.AddUserRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.AddUserResponse
    * @returns ClientUnaryCall
    */
    AddUserProject(request: SylkApi_v1.AddUserRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.AddUserResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.GetProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetProjectResponse>
    */
    GetProject(request: SylkApi_v1.GetProjectRequest, metadata?: Metadata): Promise<SylkApi_v1.GetProjectResponse>;
    /**
    * @method Projects.GetProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetProjectResponse
    * @returns ClientUnaryCall
    */
    GetProject(request: SylkApi_v1.GetProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.UpdateProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateProjectResponse>
    */
    UpdateProject(request: SylkApi_v1.UpdateProjectRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateProjectResponse>;
    /**
    * @method Projects.UpdateProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateProjectResponse
    * @returns ClientUnaryCall
    */
    UpdateProject(request: SylkApi_v1.UpdateProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.CreateProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateProjectResponse>
    */
    CreateProject(request: SylkApi_v1.CreateProjectRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateProjectResponse>;
    /**
    * @method Projects.CreateProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateProjectResponse
    * @returns ClientUnaryCall
    */
    CreateProject(request: SylkApi_v1.CreateProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.DeleteProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteProjectRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeleteProjectResponse>
    */
    DeleteProject(request: SylkApi_v1.DeleteProjectRequest, metadata?: Metadata): Promise<SylkApi_v1.DeleteProjectResponse>;
    /**
    * @method Projects.DeleteProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteProjectRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeleteProjectResponse
    * @returns ClientUnaryCall
    */
    DeleteProject(request: SylkApi_v1.DeleteProjectRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeleteProjectResponse) => void): ClientUnaryCall;
    /**
    * @method Projects.ListProjects
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListProjectsRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi_v1.GetProjectResponse>
    */
    ListProjects(request: SylkApi_v1.ListProjectsRequest, metadata?: Metadata): Observable<SylkApi_v1.GetProjectResponse>;
    /**
    * @method Projects.ListProjects
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListProjectsRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetProjectResponse
    * @returns ClientReadableStream<SylkApi_v1.GetProjectResponse>
    */
    ListProjects(request: SylkApi_v1.ListProjectsRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetProjectResponse) => void): ClientReadableStream<SylkApi_v1.GetProjectResponse>;
    /**
    * @method Projects.UpdateUserStatusProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserStatusRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateUserStatusResponse>
    */
    UpdateUserStatusProject(request: SylkApi_v1.UpdateUserStatusRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateUserStatusResponse>;
    /**
    * @method Projects.UpdateUserStatusProject
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateUserStatusRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateUserStatusResponse
    * @returns ClientUnaryCall
    */
    UpdateUserStatusProject(request: SylkApi_v1.UpdateUserStatusRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateUserStatusResponse) => void): ClientUnaryCall;
}
export declare class EnumValuesV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly EnumValues_v1_client;
    /**
    * @method EnumValues.GetEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetEnumValueResponse>
    */
    GetEnumValue(request: SylkApi_v1.GetEnumValueRequest, metadata?: Metadata): Promise<SylkApi_v1.GetEnumValueResponse>;
    /**
    * @method EnumValues.GetEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetEnumValueResponse
    * @returns ClientUnaryCall
    */
    GetEnumValue(request: SylkApi_v1.GetEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.CreateEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateEnumValueResponse>
    */
    CreateEnumValue(request: SylkApi_v1.CreateEnumValueRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateEnumValueResponse>;
    /**
    * @method EnumValues.CreateEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateEnumValueResponse
    * @returns ClientUnaryCall
    */
    CreateEnumValue(request: SylkApi_v1.CreateEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.DeleteEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeleteEnumValueResponse>
    */
    DeleteEnumValue(request: SylkApi_v1.DeleteEnumValueRequest, metadata?: Metadata): Promise<SylkApi_v1.DeleteEnumValueResponse>;
    /**
    * @method EnumValues.DeleteEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeleteEnumValueResponse
    * @returns ClientUnaryCall
    */
    DeleteEnumValue(request: SylkApi_v1.DeleteEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeleteEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.UpdateEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateEnumValueResponse>
    */
    UpdateEnumValue(request: SylkApi_v1.UpdateEnumValueRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateEnumValueResponse>;
    /**
    * @method EnumValues.UpdateEnumValue
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateEnumValueResponse
    * @returns ClientUnaryCall
    */
    UpdateEnumValue(request: SylkApi_v1.UpdateEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateEnumValueResponse) => void): ClientUnaryCall;
}
export declare class ServicesV1 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Services_v1_client;
    /**
    * @method Services.CreateService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.CreateServiceResponse>
    */
    CreateService(request: SylkApi_v1.CreateServiceRequest, metadata?: Metadata): Promise<SylkApi_v1.CreateServiceResponse>;
    /**
    * @method Services.CreateService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.CreateServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.CreateServiceResponse
    * @returns ClientUnaryCall
    */
    CreateService(request: SylkApi_v1.CreateServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.CreateServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.GetService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.GetServiceResponse>
    */
    GetService(request: SylkApi_v1.GetServiceRequest, metadata?: Metadata): Promise<SylkApi_v1.GetServiceResponse>;
    /**
    * @method Services.GetService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.GetServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetServiceResponse
    * @returns ClientUnaryCall
    */
    GetService(request: SylkApi_v1.GetServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.UpdateService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.UpdateServiceResponse>
    */
    UpdateService(request: SylkApi_v1.UpdateServiceRequest, metadata?: Metadata): Promise<SylkApi_v1.UpdateServiceResponse>;
    /**
    * @method Services.UpdateService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.UpdateServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.UpdateServiceResponse
    * @returns ClientUnaryCall
    */
    UpdateService(request: SylkApi_v1.UpdateServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.UpdateServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.ListServices
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListServicesRequest
    * @param metadata Metadata
    * @returns Observable<SylkApi_v1.GetServiceResponse>
    */
    ListServices(request: SylkApi_v1.ListServicesRequest, metadata?: Metadata): Observable<SylkApi_v1.GetServiceResponse>;
    /**
    * @method Services.ListServices
    * @description None
    * @kind Server Stream
    * @param request SylkApi_v1.ListServicesRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.GetServiceResponse
    * @returns ClientReadableStream<SylkApi_v1.GetServiceResponse>
    */
    ListServices(request: SylkApi_v1.ListServicesRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.GetServiceResponse) => void): ClientReadableStream<SylkApi_v1.GetServiceResponse>;
    /**
    * @method Services.DeleteService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteServiceRequest
    * @param metadata Metadata
    * @returns Promise<SylkApi_v1.DeleteServiceResponse>
    */
    DeleteService(request: SylkApi_v1.DeleteServiceRequest, metadata?: Metadata): Promise<SylkApi_v1.DeleteServiceResponse>;
    /**
    * @method Services.DeleteService
    * @description None
    * @kind Unary
    * @param request SylkApi_v1.DeleteServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with SylkApi_v1.DeleteServiceResponse
    * @returns ClientUnaryCall
    */
    DeleteService(request: SylkApi_v1.DeleteServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: SylkApi_v1.DeleteServiceResponse) => void): ClientUnaryCall;
}
export declare class FoldersV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Folders_v2_client;
    /**
    * @method Folders.GetFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.GetFolderRequest
    * @param metadata Metadata
    * @returns Promise<Folders_v2.Folder>
    */
    GetFolder(request: Folders_v2.GetFolderRequest, metadata?: Metadata): Promise<Folders_v2.Folder>;
    /**
    * @method Folders.GetFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.GetFolderRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Folders_v2.Folder
    * @returns ClientUnaryCall
    */
    GetFolder(request: Folders_v2.GetFolderRequest, metadata: Metadata, callback: (error: _service_error | null, response: Folders_v2.Folder) => void): ClientUnaryCall;
    /**
    * @method Folders.CreateFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.CreateFolderRequest
    * @param metadata Metadata
    * @returns Promise<Folders_v2.Folder>
    */
    CreateFolder(request: Folders_v2.CreateFolderRequest, metadata?: Metadata): Promise<Folders_v2.Folder>;
    /**
    * @method Folders.CreateFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.CreateFolderRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Folders_v2.Folder
    * @returns ClientUnaryCall
    */
    CreateFolder(request: Folders_v2.CreateFolderRequest, metadata: Metadata, callback: (error: _service_error | null, response: Folders_v2.Folder) => void): ClientUnaryCall;
    /**
    * @method Folders.ListFolders
    * @description None
    * @kind Server Stream
    * @param request Folders_v2.ListFoldersRequest
    * @param metadata Metadata
    * @returns Observable<Folders_v2.Folder>
    */
    ListFolders(request: Folders_v2.ListFoldersRequest, metadata?: Metadata): Observable<Folders_v2.Folder>;
    /**
    * @method Folders.ListFolders
    * @description None
    * @kind Server Stream
    * @param request Folders_v2.ListFoldersRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Folders_v2.Folder
    * @returns ClientReadableStream<Folders_v2.Folder>
    */
    ListFolders(request: Folders_v2.ListFoldersRequest, metadata: Metadata, callback: (error: _service_error | null, response: Folders_v2.Folder) => void): ClientReadableStream<Folders_v2.Folder>;
    /**
    * @method Folders.DeleteFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.DeleteFolderRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteFolder(request: Folders_v2.DeleteFolderRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Folders.DeleteFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.DeleteFolderRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteFolder(request: Folders_v2.DeleteFolderRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
    /**
    * @method Folders.UpdateFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.UpdateFolderRequest
    * @param metadata Metadata
    * @returns Promise<Folders_v2.Folder>
    */
    UpdateFolder(request: Folders_v2.UpdateFolderRequest, metadata?: Metadata): Promise<Folders_v2.Folder>;
    /**
    * @method Folders.UpdateFolder
    * @description None
    * @kind Unary
    * @param request Folders_v2.UpdateFolderRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Folders_v2.Folder
    * @returns ClientUnaryCall
    */
    UpdateFolder(request: Folders_v2.UpdateFolderRequest, metadata: Metadata, callback: (error: _service_error | null, response: Folders_v2.Folder) => void): ClientUnaryCall;
}
export declare class PackagesV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Packages_v2_client;
    /**
    * @method Packages.GetPackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.GetPackageRequest
    * @param metadata Metadata
    * @returns Promise<Packages_v2.GetPackageResponse>
    */
    GetPackage(request: Packages_v2.GetPackageRequest, metadata?: Metadata): Promise<Packages_v2.GetPackageResponse>;
    /**
    * @method Packages.GetPackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.GetPackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Packages_v2.GetPackageResponse
    * @returns ClientUnaryCall
    */
    GetPackage(request: Packages_v2.GetPackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Packages_v2.GetPackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.CreatePackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.CreatePackageRequest
    * @param metadata Metadata
    * @returns Promise<Packages_v2.CreatePackageResponse>
    */
    CreatePackage(request: Packages_v2.CreatePackageRequest, metadata?: Metadata): Promise<Packages_v2.CreatePackageResponse>;
    /**
    * @method Packages.CreatePackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.CreatePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Packages_v2.CreatePackageResponse
    * @returns ClientUnaryCall
    */
    CreatePackage(request: Packages_v2.CreatePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Packages_v2.CreatePackageResponse) => void): ClientUnaryCall;
    /**
    * @method Packages.DeletePackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.DeletePackageRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeletePackage(request: Packages_v2.DeletePackageRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Packages.DeletePackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.DeletePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeletePackage(request: Packages_v2.DeletePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
    /**
    * @method Packages.UpdatePackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.UpdatePackageRequest
    * @param metadata Metadata
    * @returns Promise<Packages_v2.UpdatePackageResponse>
    */
    UpdatePackage(request: Packages_v2.UpdatePackageRequest, metadata?: Metadata): Promise<Packages_v2.UpdatePackageResponse>;
    /**
    * @method Packages.UpdatePackage
    * @description None
    * @kind Unary
    * @param request Packages_v2.UpdatePackageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Packages_v2.UpdatePackageResponse
    * @returns ClientUnaryCall
    */
    UpdatePackage(request: Packages_v2.UpdatePackageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Packages_v2.UpdatePackageResponse) => void): ClientUnaryCall;
}
export declare class ServicesV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Services_v2_client;
    /**
    * @method Services.GetService
    * @description None
    * @kind Unary
    * @param request Services_v2.GetServiceRequest
    * @param metadata Metadata
    * @returns Promise<Services_v2.GetServiceResponse>
    */
    GetService(request: Services_v2.GetServiceRequest, metadata?: Metadata): Promise<Services_v2.GetServiceResponse>;
    /**
    * @method Services.GetService
    * @description None
    * @kind Unary
    * @param request Services_v2.GetServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Services_v2.GetServiceResponse
    * @returns ClientUnaryCall
    */
    GetService(request: Services_v2.GetServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: Services_v2.GetServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.DeleteService
    * @description None
    * @kind Unary
    * @param request Services_v2.DeleteServiceRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteService(request: Services_v2.DeleteServiceRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Services.DeleteService
    * @description None
    * @kind Unary
    * @param request Services_v2.DeleteServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteService(request: Services_v2.DeleteServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
    /**
    * @method Services.CreateService
    * @description None
    * @kind Unary
    * @param request Services_v2.CreateServiceRequest
    * @param metadata Metadata
    * @returns Promise<Services_v2.CreateServiceResponse>
    */
    CreateService(request: Services_v2.CreateServiceRequest, metadata?: Metadata): Promise<Services_v2.CreateServiceResponse>;
    /**
    * @method Services.CreateService
    * @description None
    * @kind Unary
    * @param request Services_v2.CreateServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Services_v2.CreateServiceResponse
    * @returns ClientUnaryCall
    */
    CreateService(request: Services_v2.CreateServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: Services_v2.CreateServiceResponse) => void): ClientUnaryCall;
    /**
    * @method Services.UpdateService
    * @description None
    * @kind Unary
    * @param request Services_v2.UpdateServiceRequest
    * @param metadata Metadata
    * @returns Promise<Services_v2.UpdateServiceResponse>
    */
    UpdateService(request: Services_v2.UpdateServiceRequest, metadata?: Metadata): Promise<Services_v2.UpdateServiceResponse>;
    /**
    * @method Services.UpdateService
    * @description None
    * @kind Unary
    * @param request Services_v2.UpdateServiceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Services_v2.UpdateServiceResponse
    * @returns ClientUnaryCall
    */
    UpdateService(request: Services_v2.UpdateServiceRequest, metadata: Metadata, callback: (error: _service_error | null, response: Services_v2.UpdateServiceResponse) => void): ClientUnaryCall;
}
export declare class MessagesV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Messages_v2_client;
    /**
    * @method Messages.GetMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.GetMessageRequest
    * @param metadata Metadata
    * @returns Promise<Messages_v2.GetMessageResponse>
    */
    GetMessage(request: Messages_v2.GetMessageRequest, metadata?: Metadata): Promise<Messages_v2.GetMessageResponse>;
    /**
    * @method Messages.GetMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.GetMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Messages_v2.GetMessageResponse
    * @returns ClientUnaryCall
    */
    GetMessage(request: Messages_v2.GetMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Messages_v2.GetMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.CreateMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.CreateMessageRequest
    * @param metadata Metadata
    * @returns Promise<Messages_v2.CreateMessageResponse>
    */
    CreateMessage(request: Messages_v2.CreateMessageRequest, metadata?: Metadata): Promise<Messages_v2.CreateMessageResponse>;
    /**
    * @method Messages.CreateMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.CreateMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Messages_v2.CreateMessageResponse
    * @returns ClientUnaryCall
    */
    CreateMessage(request: Messages_v2.CreateMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Messages_v2.CreateMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.UpdateMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.UpdateMessageRequest
    * @param metadata Metadata
    * @returns Promise<Messages_v2.UpdateMessageResponse>
    */
    UpdateMessage(request: Messages_v2.UpdateMessageRequest, metadata?: Metadata): Promise<Messages_v2.UpdateMessageResponse>;
    /**
    * @method Messages.UpdateMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.UpdateMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Messages_v2.UpdateMessageResponse
    * @returns ClientUnaryCall
    */
    UpdateMessage(request: Messages_v2.UpdateMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Messages_v2.UpdateMessageResponse) => void): ClientUnaryCall;
    /**
    * @method Messages.DeleteMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.DeleteMessageRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteMessage(request: Messages_v2.DeleteMessageRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Messages.DeleteMessage
    * @description None
    * @kind Unary
    * @param request Messages_v2.DeleteMessageRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteMessage(request: Messages_v2.DeleteMessageRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
}
export declare class TagsV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Tags_v2_client;
    /**
    * @method Tags.GetTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.GetTagRequest
    * @param metadata Metadata
    * @returns Promise<Tags_v2.Tag>
    */
    GetTag(request: Tags_v2.GetTagRequest, metadata?: Metadata): Promise<Tags_v2.Tag>;
    /**
    * @method Tags.GetTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.GetTagRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Tags_v2.Tag
    * @returns ClientUnaryCall
    */
    GetTag(request: Tags_v2.GetTagRequest, metadata: Metadata, callback: (error: _service_error | null, response: Tags_v2.Tag) => void): ClientUnaryCall;
    /**
    * @method Tags.UpdateTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.UpdateTagRequest
    * @param metadata Metadata
    * @returns Promise<Tags_v2.Tag>
    */
    UpdateTag(request: Tags_v2.UpdateTagRequest, metadata?: Metadata): Promise<Tags_v2.Tag>;
    /**
    * @method Tags.UpdateTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.UpdateTagRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Tags_v2.Tag
    * @returns ClientUnaryCall
    */
    UpdateTag(request: Tags_v2.UpdateTagRequest, metadata: Metadata, callback: (error: _service_error | null, response: Tags_v2.Tag) => void): ClientUnaryCall;
    /**
    * @method Tags.CreateTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.CreateTagRequest
    * @param metadata Metadata
    * @returns Promise<Tags_v2.Tag>
    */
    CreateTag(request: Tags_v2.CreateTagRequest, metadata?: Metadata): Promise<Tags_v2.Tag>;
    /**
    * @method Tags.CreateTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.CreateTagRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Tags_v2.Tag
    * @returns ClientUnaryCall
    */
    CreateTag(request: Tags_v2.CreateTagRequest, metadata: Metadata, callback: (error: _service_error | null, response: Tags_v2.Tag) => void): ClientUnaryCall;
    /**
    * @method Tags.DeleteTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.DeleteTagRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteTag(request: Tags_v2.DeleteTagRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Tags.DeleteTag
    * @description None
    * @kind Unary
    * @param request Tags_v2.DeleteTagRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteTag(request: Tags_v2.DeleteTagRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
    /**
    * @method Tags.TagResource
    * @description None
    * @kind Unary
    * @param request Tags_v2.TagResourceRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    TagResource(request: Tags_v2.TagResourceRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Tags.TagResource
    * @description None
    * @kind Unary
    * @param request Tags_v2.TagResourceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    TagResource(request: Tags_v2.TagResourceRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
    /**
    * @method Tags.ListTags
    * @description None
    * @kind Server Stream
    * @param request Tags_v2.ListTagsRequest
    * @param metadata Metadata
    * @returns Observable<Tags_v2.Tag>
    */
    ListTags(request: Tags_v2.ListTagsRequest, metadata?: Metadata): Observable<Tags_v2.Tag>;
    /**
    * @method Tags.ListTags
    * @description None
    * @kind Server Stream
    * @param request Tags_v2.ListTagsRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Tags_v2.Tag
    * @returns ClientReadableStream<Tags_v2.Tag>
    */
    ListTags(request: Tags_v2.ListTagsRequest, metadata: Metadata, callback: (error: _service_error | null, response: Tags_v2.Tag) => void): ClientReadableStream<Tags_v2.Tag>;
    /**
    * @method Tags.UntagResource
    * @description None
    * @kind Unary
    * @param request Tags_v2.UntagResourceRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    UntagResource(request: Tags_v2.UntagResourceRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Tags.UntagResource
    * @description None
    * @kind Unary
    * @param request Tags_v2.UntagResourceRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    UntagResource(request: Tags_v2.UntagResourceRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
}
export declare class EnumsV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Enums_v2_client;
    /**
    * @method Enums.GetEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.GetEnumRequest
    * @param metadata Metadata
    * @returns Promise<Enums_v2.GetEnumResponse>
    */
    GetEnum(request: Enums_v2.GetEnumRequest, metadata?: Metadata): Promise<Enums_v2.GetEnumResponse>;
    /**
    * @method Enums.GetEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.GetEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Enums_v2.GetEnumResponse
    * @returns ClientUnaryCall
    */
    GetEnum(request: Enums_v2.GetEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: Enums_v2.GetEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.CreateEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.CreateEnumRequest
    * @param metadata Metadata
    * @returns Promise<Enums_v2.CreateEnumResponse>
    */
    CreateEnum(request: Enums_v2.CreateEnumRequest, metadata?: Metadata): Promise<Enums_v2.CreateEnumResponse>;
    /**
    * @method Enums.CreateEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.CreateEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Enums_v2.CreateEnumResponse
    * @returns ClientUnaryCall
    */
    CreateEnum(request: Enums_v2.CreateEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: Enums_v2.CreateEnumResponse) => void): ClientUnaryCall;
    /**
    * @method Enums.DeleteEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.DeleteEnumRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteEnum(request: Enums_v2.DeleteEnumRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Enums.DeleteEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.DeleteEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteEnum(request: Enums_v2.DeleteEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
    /**
    * @method Enums.UpdateEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.UpdateEnumRequest
    * @param metadata Metadata
    * @returns Promise<Enums_v2.UpdateEnumResponse>
    */
    UpdateEnum(request: Enums_v2.UpdateEnumRequest, metadata?: Metadata): Promise<Enums_v2.UpdateEnumResponse>;
    /**
    * @method Enums.UpdateEnum
    * @description None
    * @kind Unary
    * @param request Enums_v2.UpdateEnumRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Enums_v2.UpdateEnumResponse
    * @returns ClientUnaryCall
    */
    UpdateEnum(request: Enums_v2.UpdateEnumRequest, metadata: Metadata, callback: (error: _service_error | null, response: Enums_v2.UpdateEnumResponse) => void): ClientUnaryCall;
}
export declare class EnumValuesV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly EnumValues_v2_client;
    /**
    * @method EnumValues.GetEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.GetEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<EnumValues_v2.GetEnumValueResponse>
    */
    GetEnumValue(request: EnumValues_v2.GetEnumValueRequest, metadata?: Metadata): Promise<EnumValues_v2.GetEnumValueResponse>;
    /**
    * @method EnumValues.GetEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.GetEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with EnumValues_v2.GetEnumValueResponse
    * @returns ClientUnaryCall
    */
    GetEnumValue(request: EnumValues_v2.GetEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: EnumValues_v2.GetEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.CreateEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.CreateEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<EnumValues_v2.CreateEnumValueResponse>
    */
    CreateEnumValue(request: EnumValues_v2.CreateEnumValueRequest, metadata?: Metadata): Promise<EnumValues_v2.CreateEnumValueResponse>;
    /**
    * @method EnumValues.CreateEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.CreateEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with EnumValues_v2.CreateEnumValueResponse
    * @returns ClientUnaryCall
    */
    CreateEnumValue(request: EnumValues_v2.CreateEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: EnumValues_v2.CreateEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.UpdateEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.UpdateEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<EnumValues_v2.UpdateEnumValueResponse>
    */
    UpdateEnumValue(request: EnumValues_v2.UpdateEnumValueRequest, metadata?: Metadata): Promise<EnumValues_v2.UpdateEnumValueResponse>;
    /**
    * @method EnumValues.UpdateEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.UpdateEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with EnumValues_v2.UpdateEnumValueResponse
    * @returns ClientUnaryCall
    */
    UpdateEnumValue(request: EnumValues_v2.UpdateEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: EnumValues_v2.UpdateEnumValueResponse) => void): ClientUnaryCall;
    /**
    * @method EnumValues.DeleteEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.DeleteEnumValueRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteEnumValue(request: EnumValues_v2.DeleteEnumValueRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method EnumValues.DeleteEnumValue
    * @description None
    * @kind Unary
    * @param request EnumValues_v2.DeleteEnumValueRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteEnumValue(request: EnumValues_v2.DeleteEnumValueRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
}
export declare class MethodsV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Methods_v2_client;
    /**
    * @method Methods.GetMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.GetMethodRequest
    * @param metadata Metadata
    * @returns Promise<Methods_v2.GetMethodResponse>
    */
    GetMethod(request: Methods_v2.GetMethodRequest, metadata?: Metadata): Promise<Methods_v2.GetMethodResponse>;
    /**
    * @method Methods.GetMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.GetMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Methods_v2.GetMethodResponse
    * @returns ClientUnaryCall
    */
    GetMethod(request: Methods_v2.GetMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: Methods_v2.GetMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.CreateMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.CreateMethodRequest
    * @param metadata Metadata
    * @returns Promise<Methods_v2.CreateMethodResponse>
    */
    CreateMethod(request: Methods_v2.CreateMethodRequest, metadata?: Metadata): Promise<Methods_v2.CreateMethodResponse>;
    /**
    * @method Methods.CreateMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.CreateMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Methods_v2.CreateMethodResponse
    * @returns ClientUnaryCall
    */
    CreateMethod(request: Methods_v2.CreateMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: Methods_v2.CreateMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.UpdateMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.UpdateMethodRequest
    * @param metadata Metadata
    * @returns Promise<Methods_v2.UpdateMethodResponse>
    */
    UpdateMethod(request: Methods_v2.UpdateMethodRequest, metadata?: Metadata): Promise<Methods_v2.UpdateMethodResponse>;
    /**
    * @method Methods.UpdateMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.UpdateMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Methods_v2.UpdateMethodResponse
    * @returns ClientUnaryCall
    */
    UpdateMethod(request: Methods_v2.UpdateMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: Methods_v2.UpdateMethodResponse) => void): ClientUnaryCall;
    /**
    * @method Methods.DeleteMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.DeleteMethodRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteMethod(request: Methods_v2.DeleteMethodRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Methods.DeleteMethod
    * @description None
    * @kind Unary
    * @param request Methods_v2.DeleteMethodRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteMethod(request: Methods_v2.DeleteMethodRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
}
export declare class FieldsV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Fields_v2_client;
    /**
    * @method Fields.GetField
    * @description None
    * @kind Unary
    * @param request Fields_v2.GetFieldRequest
    * @param metadata Metadata
    * @returns Promise<Fields_v2.GetFieldResponse>
    */
    GetField(request: Fields_v2.GetFieldRequest, metadata?: Metadata): Promise<Fields_v2.GetFieldResponse>;
    /**
    * @method Fields.GetField
    * @description None
    * @kind Unary
    * @param request Fields_v2.GetFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Fields_v2.GetFieldResponse
    * @returns ClientUnaryCall
    */
    GetField(request: Fields_v2.GetFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: Fields_v2.GetFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.CreateField
    * @description None
    * @kind Unary
    * @param request Fields_v2.CreateFieldRequest
    * @param metadata Metadata
    * @returns Promise<Fields_v2.CreateFieldResponse>
    */
    CreateField(request: Fields_v2.CreateFieldRequest, metadata?: Metadata): Promise<Fields_v2.CreateFieldResponse>;
    /**
    * @method Fields.CreateField
    * @description None
    * @kind Unary
    * @param request Fields_v2.CreateFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Fields_v2.CreateFieldResponse
    * @returns ClientUnaryCall
    */
    CreateField(request: Fields_v2.CreateFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: Fields_v2.CreateFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.UpdateField
    * @description None
    * @kind Unary
    * @param request Fields_v2.UpdateFieldRequest
    * @param metadata Metadata
    * @returns Promise<Fields_v2.UpdateFieldResponse>
    */
    UpdateField(request: Fields_v2.UpdateFieldRequest, metadata?: Metadata): Promise<Fields_v2.UpdateFieldResponse>;
    /**
    * @method Fields.UpdateField
    * @description None
    * @kind Unary
    * @param request Fields_v2.UpdateFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Fields_v2.UpdateFieldResponse
    * @returns ClientUnaryCall
    */
    UpdateField(request: Fields_v2.UpdateFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: Fields_v2.UpdateFieldResponse) => void): ClientUnaryCall;
    /**
    * @method Fields.DeleteField
    * @description None
    * @kind Unary
    * @param request Fields_v2.DeleteFieldRequest
    * @param metadata Metadata
    * @returns Promise<Empty>
    */
    DeleteField(request: Fields_v2.DeleteFieldRequest, metadata?: Metadata): Promise<Empty>;
    /**
    * @method Fields.DeleteField
    * @description None
    * @kind Unary
    * @param request Fields_v2.DeleteFieldRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Empty
    * @returns ClientUnaryCall
    */
    DeleteField(request: Fields_v2.DeleteFieldRequest, metadata: Metadata, callback: (error: _service_error | null, response: Empty) => void): ClientUnaryCall;
}
export declare class IntegrationsV2 {
    constructor(opts: SylkClientOpts);
    private readonly metadata;
    private readonly host;
    private readonly port;
    private readonly Integrations_v2_client;
    /**
    * @method Integrations.GetIntegration
    * @description None
    * @kind Unary
    * @param request Integrations_v2.GetIntegrationRequest
    * @param metadata Metadata
    * @returns Promise<Integrations_v2.GetIntegrationResponse>
    */
    GetIntegration(request: Integrations_v2.GetIntegrationRequest, metadata?: Metadata): Promise<Integrations_v2.GetIntegrationResponse>;
    /**
    * @method Integrations.GetIntegration
    * @description None
    * @kind Unary
    * @param request Integrations_v2.GetIntegrationRequest
    * @param metadata Metadata
    * @param callback A callback function to be excuted once the server responds with Integrations_v2.GetIntegrationResponse
    * @returns ClientUnaryCall
    */
    GetIntegration(request: Integrations_v2.GetIntegrationRequest, metadata: Metadata, callback: (error: _service_error | null, response: Integrations_v2.GetIntegrationResponse) => void): ClientUnaryCall;
}
