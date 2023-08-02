/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import { ActivityLog, GetActivityLogsResponse, ListActivityLogsRequest } from "../../ActivityLog/v1/ActivityLog";
/** sylk.build Generated proto DO NOT EDIT */
export type ActivitiesService = typeof ActivitiesService;
export declare const ActivitiesService: {
    /** [sylk] - None */
    readonly listActivityLogs: {
        readonly path: "/sylk.Activities.v1.Activities/ListActivityLogs";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListActivityLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListActivityLogsRequest;
        readonly responseSerialize: (value: ActivityLog) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ActivityLog;
    };
    /** [sylk] - None */
    readonly getActivityLogs: {
        readonly path: "/sylk.Activities.v1.Activities/GetActivityLogs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListActivityLogsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListActivityLogsRequest;
        readonly responseSerialize: (value: GetActivityLogsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetActivityLogsResponse;
    };
};
export interface ActivitiesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    listActivityLogs: handleServerStreamingCall<ListActivityLogsRequest, ActivityLog>;
    /** [sylk] - None */
    getActivityLogs: handleUnaryCall<ListActivityLogsRequest, GetActivityLogsResponse>;
}
export interface ActivitiesClient extends Client {
    /** [sylk] - None */
    listActivityLogs(request: ListActivityLogsRequest, options?: Partial<CallOptions>): ClientReadableStream<ActivityLog>;
    listActivityLogs(request: ListActivityLogsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<ActivityLog>;
    /** [sylk] - None */
    getActivityLogs(request: ListActivityLogsRequest, callback: (error: ServiceError | null, response: GetActivityLogsResponse) => void): ClientUnaryCall;
    getActivityLogs(request: ListActivityLogsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetActivityLogsResponse) => void): ClientUnaryCall;
    getActivityLogs(request: ListActivityLogsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetActivityLogsResponse) => void): ClientUnaryCall;
}
export declare const ActivitiesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ActivitiesClient;
    service: typeof ActivitiesService;
};
