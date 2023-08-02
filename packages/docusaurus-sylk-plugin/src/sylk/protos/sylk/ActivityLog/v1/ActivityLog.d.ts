import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.ActivityLog.v1.ActionTypes] - None */
export declare enum ActionTypes {
    /** UNKNOWN_ACTIONTYPES - [sylk.ActivityLog.v1.ActionTypes] - Default enum value for "sylk.ActivityLog.v1.ActionTypes" */
    UNKNOWN_ACTIONTYPES = 0,
    /** createEnumValue - [sylk.ActivityLog.v1.ActionTypes] - None */
    createEnumValue = 1,
    /** updateEnumValue - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateEnumValue = 2,
    /** deleteEnumValue - [sylk.ActivityLog.v1.ActionTypes] - None */
    deleteEnumValue = 3,
    /** createField - [sylk.ActivityLog.v1.ActionTypes] - None */
    createField = 4,
    /** updateField - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateField = 5,
    /** deleteField - [sylk.ActivityLog.v1.ActionTypes] - None */
    deleteField = 6,
    /** createMessage - [sylk.ActivityLog.v1.ActionTypes] - None */
    createMessage = 7,
    /** updateMessage - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateMessage = 8,
    /** deleteMessage - [sylk.ActivityLog.v1.ActionTypes] - None */
    deleteMessage = 9,
    /** createPackage - [sylk.ActivityLog.v1.ActionTypes] - None */
    createPackage = 10,
    /** updatePackage - [sylk.ActivityLog.v1.ActionTypes] - None */
    updatePackage = 11,
    /** deletePackage - [sylk.ActivityLog.v1.ActionTypes] - None */
    deletePackage = 12,
    /** createService - [sylk.ActivityLog.v1.ActionTypes] - None */
    createService = 13,
    /** updateService - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateService = 14,
    /** deleteService - [sylk.ActivityLog.v1.ActionTypes] - None */
    deleteService = 15,
    /** createProject - [sylk.ActivityLog.v1.ActionTypes] - None */
    createProject = 16,
    /** updateProject - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateProject = 17,
    /** deleteProject - [sylk.ActivityLog.v1.ActionTypes] - None */
    deleteProject = 18,
    /** createEnum - [sylk.ActivityLog.v1.ActionTypes] - None */
    createEnum = 19,
    /** updateEnum - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateEnum = 20,
    /** deleteEnum - [sylk.ActivityLog.v1.ActionTypes] - None */
    deleteEnum = 21,
    /** addUser - [sylk.ActivityLog.v1.ActionTypes] - None */
    addUser = 22,
    /** updateUserRole - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateUserRole = 23,
    /** createOrganization - [sylk.ActivityLog.v1.ActionTypes] - None */
    createOrganization = 24,
    /** updateOrganization - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateOrganization = 25,
    /** removeUser - [sylk.ActivityLog.v1.ActionTypes] - None */
    removeUser = 26,
    /** createMethod - [sylk.ActivityLog.v1.ActionTypes] - None */
    createMethod = 27,
    /** updateMethod - [sylk.ActivityLog.v1.ActionTypes] - None */
    updateMethod = 28,
    /** deleteMethod - [sylk.ActivityLog.v1.ActionTypes] - None */
    deleteMethod = 29,
    UNRECOGNIZED = -1
}
export declare function actionTypesFromJSON(object: any): ActionTypes;
export declare function actionTypesToJSON(object: ActionTypes): string;
/** [sylk.ActivityLog.v1.ResourceTypes] - None */
export declare enum ResourceTypes {
    /** UNKNOWN_RESOURCETYPES - [sylk.ActivityLog.v1.ResourceTypes] - Default enum value for "sylk.ActivityLog.v1.ResourceTypes" */
    UNKNOWN_RESOURCETYPES = 0,
    /** User - [sylk.ActivityLog.v1.ResourceTypes] - None */
    User = 1,
    /** Organization - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Organization = 2,
    /** Package - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Package = 3,
    /** Service - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Service = 4,
    /** Message - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Message = 5,
    /** Enum - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Enum = 6,
    /** Method - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Method = 7,
    /** Field - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Field = 8,
    /** EnumValue - [sylk.ActivityLog.v1.ResourceTypes] - None */
    EnumValue = 9,
    /** Project - [sylk.ActivityLog.v1.ResourceTypes] - None */
    Project = 10,
    UNRECOGNIZED = -1
}
export declare function resourceTypesFromJSON(object: any): ResourceTypes;
export declare function resourceTypesToJSON(object: ResourceTypes): string;
/** [sylk.ActivityLog.v1.EncodedPagination] - None */
export interface EncodedPagination {
    params?: {
        [key: string]: any;
    };
    skip: number;
    totalSize: number;
}
/** [sylk.ActivityLog.v1.ActivityLog] - None */
export interface ActivityLog {
    userId: string;
    createdAt?: Date;
    metadata?: {
        [key: string]: any;
    };
    orgId: string;
    id: string;
    userEmail: string;
    type: ActionTypes;
}
/** [sylk.ActivityLog.v1.PaginationResponse] - None */
export interface PaginationResponse {
    nextPageToken: string;
}
/** [sylk.ActivityLog.v1.GetActivityLogsResponse] - None */
export interface GetActivityLogsResponse {
    logs: ActivityLog[];
    pagination?: PaginationResponse;
}
/** [sylk.ActivityLog.v1.PaginationRequest] - None */
export interface PaginationRequest {
    pageSize: number;
    pageToken: string;
}
/** [sylk.ActivityLog.v1.ListActivityLogsRequest] - None */
export interface ListActivityLogsRequest {
    userId: string;
    orgId: string;
    until?: Date;
    activityType: ActionTypes;
    pagination?: PaginationRequest;
    resourceType: ResourceTypes;
    resource: string;
}
export declare const EncodedPagination: {
    encode(message: EncodedPagination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EncodedPagination;
    fromJSON(object: any): EncodedPagination;
    toJSON(message: EncodedPagination): unknown;
    create<I extends {
        params?: {
            [x: string]: any;
        } | undefined;
        skip?: number | undefined;
        totalSize?: number | undefined;
    } & {
        params?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["params"], string | number>]: never; }) | undefined;
        skip?: number | undefined;
        totalSize?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EncodedPagination>]: never; }>(base?: I | undefined): EncodedPagination;
    fromPartial<I_1 extends {
        params?: {
            [x: string]: any;
        } | undefined;
        skip?: number | undefined;
        totalSize?: number | undefined;
    } & {
        params?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_2 in Exclude<keyof I_1["params"], string | number>]: never; }) | undefined;
        skip?: number | undefined;
        totalSize?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof EncodedPagination>]: never; }>(object: I_1): EncodedPagination;
};
export declare const ActivityLog: {
    encode(message: ActivityLog, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActivityLog;
    fromJSON(object: any): ActivityLog;
    toJSON(message: ActivityLog): unknown;
    create<I extends {
        userId?: string | undefined;
        createdAt?: Date | undefined;
        metadata?: {
            [x: string]: any;
        } | undefined;
        orgId?: string | undefined;
        id?: string | undefined;
        userEmail?: string | undefined;
        type?: ActionTypes | undefined;
    } & {
        userId?: string | undefined;
        createdAt?: Date | undefined;
        metadata?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["metadata"], string | number>]: never; }) | undefined;
        orgId?: string | undefined;
        id?: string | undefined;
        userEmail?: string | undefined;
        type?: ActionTypes | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ActivityLog>]: never; }>(base?: I | undefined): ActivityLog;
    fromPartial<I_1 extends {
        userId?: string | undefined;
        createdAt?: Date | undefined;
        metadata?: {
            [x: string]: any;
        } | undefined;
        orgId?: string | undefined;
        id?: string | undefined;
        userEmail?: string | undefined;
        type?: ActionTypes | undefined;
    } & {
        userId?: string | undefined;
        createdAt?: Date | undefined;
        metadata?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_2 in Exclude<keyof I_1["metadata"], string | number>]: never; }) | undefined;
        orgId?: string | undefined;
        id?: string | undefined;
        userEmail?: string | undefined;
        type?: ActionTypes | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ActivityLog>]: never; }>(object: I_1): ActivityLog;
};
export declare const PaginationResponse: {
    encode(message: PaginationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaginationResponse;
    fromJSON(object: any): PaginationResponse;
    toJSON(message: PaginationResponse): unknown;
    create<I extends {
        nextPageToken?: string | undefined;
    } & {
        nextPageToken?: string | undefined;
    } & { [K in Exclude<keyof I, "nextPageToken">]: never; }>(base?: I | undefined): PaginationResponse;
    fromPartial<I_1 extends {
        nextPageToken?: string | undefined;
    } & {
        nextPageToken?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "nextPageToken">]: never; }>(object: I_1): PaginationResponse;
};
export declare const GetActivityLogsResponse: {
    encode(message: GetActivityLogsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetActivityLogsResponse;
    fromJSON(object: any): GetActivityLogsResponse;
    toJSON(message: GetActivityLogsResponse): unknown;
    create<I extends {
        logs?: {
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        }[] | undefined;
        pagination?: {
            nextPageToken?: string | undefined;
        } | undefined;
    } & {
        logs?: ({
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        }[] & ({
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        } & {
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K in Exclude<keyof I["logs"][number]["metadata"], string | number>]: never; }) | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        } & { [K_1 in Exclude<keyof I["logs"][number], keyof ActivityLog>]: never; })[] & { [K_2 in Exclude<keyof I["logs"], keyof {
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextPageToken?: string | undefined;
        } & {
            nextPageToken?: string | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], "nextPageToken">]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof GetActivityLogsResponse>]: never; }>(base?: I | undefined): GetActivityLogsResponse;
    fromPartial<I_1 extends {
        logs?: {
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        }[] | undefined;
        pagination?: {
            nextPageToken?: string | undefined;
        } | undefined;
    } & {
        logs?: ({
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        }[] & ({
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        } & {
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K_5 in Exclude<keyof I_1["logs"][number]["metadata"], string | number>]: never; }) | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        } & { [K_6 in Exclude<keyof I_1["logs"][number], keyof ActivityLog>]: never; })[] & { [K_7 in Exclude<keyof I_1["logs"], keyof {
            userId?: string | undefined;
            createdAt?: Date | undefined;
            metadata?: {
                [x: string]: any;
            } | undefined;
            orgId?: string | undefined;
            id?: string | undefined;
            userEmail?: string | undefined;
            type?: ActionTypes | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextPageToken?: string | undefined;
        } & {
            nextPageToken?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["pagination"], "nextPageToken">]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof GetActivityLogsResponse>]: never; }>(object: I_1): GetActivityLogsResponse;
};
export declare const PaginationRequest: {
    encode(message: PaginationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PaginationRequest;
    fromJSON(object: any): PaginationRequest;
    toJSON(message: PaginationRequest): unknown;
    create<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & { [K in Exclude<keyof I, keyof PaginationRequest>]: never; }>(base?: I | undefined): PaginationRequest;
    fromPartial<I_1 extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PaginationRequest>]: never; }>(object: I_1): PaginationRequest;
};
export declare const ListActivityLogsRequest: {
    encode(message: ListActivityLogsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListActivityLogsRequest;
    fromJSON(object: any): ListActivityLogsRequest;
    toJSON(message: ListActivityLogsRequest): unknown;
    create<I extends {
        userId?: string | undefined;
        orgId?: string | undefined;
        until?: Date | undefined;
        activityType?: ActionTypes | undefined;
        pagination?: {
            pageSize?: number | undefined;
            pageToken?: string | undefined;
        } | undefined;
        resourceType?: ResourceTypes | undefined;
        resource?: string | undefined;
    } & {
        userId?: string | undefined;
        orgId?: string | undefined;
        until?: Date | undefined;
        activityType?: ActionTypes | undefined;
        pagination?: ({
            pageSize?: number | undefined;
            pageToken?: string | undefined;
        } & {
            pageSize?: number | undefined;
            pageToken?: string | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PaginationRequest>]: never; }) | undefined;
        resourceType?: ResourceTypes | undefined;
        resource?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ListActivityLogsRequest>]: never; }>(base?: I | undefined): ListActivityLogsRequest;
    fromPartial<I_1 extends {
        userId?: string | undefined;
        orgId?: string | undefined;
        until?: Date | undefined;
        activityType?: ActionTypes | undefined;
        pagination?: {
            pageSize?: number | undefined;
            pageToken?: string | undefined;
        } | undefined;
        resourceType?: ResourceTypes | undefined;
        resource?: string | undefined;
    } & {
        userId?: string | undefined;
        orgId?: string | undefined;
        until?: Date | undefined;
        activityType?: ActionTypes | undefined;
        pagination?: ({
            pageSize?: number | undefined;
            pageToken?: string | undefined;
        } & {
            pageSize?: number | undefined;
            pageToken?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PaginationRequest>]: never; }) | undefined;
        resourceType?: ResourceTypes | undefined;
        resource?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ListActivityLogsRequest>]: never; }>(object: I_1): ListActivityLogsRequest;
};
