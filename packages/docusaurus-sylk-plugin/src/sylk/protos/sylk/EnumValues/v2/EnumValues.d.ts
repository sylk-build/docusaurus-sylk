/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { SylkEnumValue, SylkEnumValueDisplay } from "../../SylkEnumValue/v1/SylkEnumValue";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.EnumValues.v2.GetEnumValueRequest] - None */
export interface GetEnumValueRequest {
    projectId: string;
    package: string;
    enumValue: string;
}
/** [sylk.EnumValues.v2.GetEnumValueResponse] - None */
export interface GetEnumValueResponse {
    result?: SylkEnumValueDisplay;
}
/** [sylk.EnumValues.v2.CreateEnumValueRequest] - None */
export interface CreateEnumValueRequest {
    projectId: string;
    package: string;
    enumValue?: SylkEnumValue;
}
/** [sylk.EnumValues.v2.CreateEnumValueResponse] - None */
export interface CreateEnumValueResponse {
    result?: SylkEnumValueDisplay;
}
/** [sylk.EnumValues.v2.UpdateEnumValueRequest] - None */
export interface UpdateEnumValueRequest {
    projectId: string;
    enumValue: string;
    package: string;
    update?: SylkEnumValue;
}
/** [sylk.EnumValues.v2.UpdateEnumValueResponse] - None */
export interface UpdateEnumValueResponse {
    projectId: string;
    enumValue: string;
    updated?: SylkEnumValueDisplay;
}
/** [sylk.EnumValues.v2.DeleteEnumValueRequest] - None */
export interface DeleteEnumValueRequest {
    projectId: string;
    enumValue: string;
    package: string;
}
export declare const GetEnumValueRequest: {
    encode(message: GetEnumValueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetEnumValueRequest;
    fromJSON(object: any): GetEnumValueRequest;
    toJSON(message: GetEnumValueRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetEnumValueRequest>]: never; }>(base?: I | undefined): GetEnumValueRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetEnumValueRequest>]: never; }>(object: I_1): GetEnumValueRequest;
};
export declare const GetEnumValueResponse: {
    encode(message: GetEnumValueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetEnumValueResponse;
    fromJSON(object: any): GetEnumValueResponse;
    toJSON(message: GetEnumValueResponse): unknown;
    create<I extends {
        result?: {
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & {
            enumValue?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & { [K in Exclude<keyof I["result"]["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["result"], keyof SylkEnumValueDisplay>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): GetEnumValueResponse;
    fromPartial<I_1 extends {
        result?: {
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & {
            enumValue?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & { [K_3 in Exclude<keyof I_1["result"]["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & { [K_4 in Exclude<keyof I_1["result"], keyof SylkEnumValueDisplay>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetEnumValueResponse;
};
export declare const CreateEnumValueRequest: {
    encode(message: CreateEnumValueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEnumValueRequest;
    fromJSON(object: any): CreateEnumValueRequest;
    toJSON(message: CreateEnumValueRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: ({
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & { [K in Exclude<keyof I["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CreateEnumValueRequest>]: never; }>(base?: I | undefined): CreateEnumValueRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enumValue?: ({
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CreateEnumValueRequest>]: never; }>(object: I_1): CreateEnumValueRequest;
};
export declare const CreateEnumValueResponse: {
    encode(message: CreateEnumValueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEnumValueResponse;
    fromJSON(object: any): CreateEnumValueResponse;
    toJSON(message: CreateEnumValueResponse): unknown;
    create<I extends {
        result?: {
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & {
            enumValue?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & { [K in Exclude<keyof I["result"]["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["result"], keyof SylkEnumValueDisplay>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): CreateEnumValueResponse;
    fromPartial<I_1 extends {
        result?: {
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & {
            enumValue?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & { [K_3 in Exclude<keyof I_1["result"]["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & { [K_4 in Exclude<keyof I_1["result"], keyof SylkEnumValueDisplay>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CreateEnumValueResponse;
};
export declare const UpdateEnumValueRequest: {
    encode(message: UpdateEnumValueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEnumValueRequest;
    fromJSON(object: any): UpdateEnumValueRequest;
    toJSON(message: UpdateEnumValueRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
        update?: {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
        update?: ({
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & { [K in Exclude<keyof I["update"], keyof SylkEnumValue>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof UpdateEnumValueRequest>]: never; }>(base?: I | undefined): UpdateEnumValueRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
        update?: {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
        update?: ({
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["update"], keyof SylkEnumValue>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof UpdateEnumValueRequest>]: never; }>(object: I_1): UpdateEnumValueRequest;
};
export declare const UpdateEnumValueResponse: {
    encode(message: UpdateEnumValueResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEnumValueResponse;
    fromJSON(object: any): UpdateEnumValueResponse;
    toJSON(message: UpdateEnumValueResponse): unknown;
    create<I extends {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        updated?: {
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        updated?: ({
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & {
            enumValue?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & { [K in Exclude<keyof I["updated"]["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["updated"], keyof SylkEnumValueDisplay>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof UpdateEnumValueResponse>]: never; }>(base?: I | undefined): UpdateEnumValueResponse;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        updated?: {
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        updated?: ({
            enumValue?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & {
            enumValue?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            } & { [K_3 in Exclude<keyof I_1["updated"]["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            createdAt?: Date | undefined;
        } & { [K_4 in Exclude<keyof I_1["updated"], keyof SylkEnumValueDisplay>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof UpdateEnumValueResponse>]: never; }>(object: I_1): UpdateEnumValueResponse;
};
export declare const DeleteEnumValueRequest: {
    encode(message: DeleteEnumValueRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEnumValueRequest;
    fromJSON(object: any): DeleteEnumValueRequest;
    toJSON(message: DeleteEnumValueRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteEnumValueRequest>]: never; }>(base?: I | undefined): DeleteEnumValueRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        enumValue?: string | undefined;
        package?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteEnumValueRequest>]: never; }>(object: I_1): DeleteEnumValueRequest;
};
export type EnumValuesService = typeof EnumValuesService;
export declare const EnumValuesService: {
    /** [sylk] - None */
    readonly getEnumValue: {
        readonly path: "/sylk.EnumValues.v2.EnumValues/GetEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetEnumValueRequest;
        readonly responseSerialize: (value: GetEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetEnumValueResponse;
    };
    /** [sylk] - None */
    readonly createEnumValue: {
        readonly path: "/sylk.EnumValues.v2.EnumValues/CreateEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateEnumValueRequest;
        readonly responseSerialize: (value: CreateEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateEnumValueResponse;
    };
    /** [sylk] - None */
    readonly updateEnumValue: {
        readonly path: "/sylk.EnumValues.v2.EnumValues/UpdateEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateEnumValueRequest;
        readonly responseSerialize: (value: UpdateEnumValueResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateEnumValueResponse;
    };
    /** [sylk] - None */
    readonly deleteEnumValue: {
        readonly path: "/sylk.EnumValues.v2.EnumValues/DeleteEnumValue";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteEnumValueRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteEnumValueRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface EnumValuesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getEnumValue: handleUnaryCall<GetEnumValueRequest, GetEnumValueResponse>;
    /** [sylk] - None */
    createEnumValue: handleUnaryCall<CreateEnumValueRequest, CreateEnumValueResponse>;
    /** [sylk] - None */
    updateEnumValue: handleUnaryCall<UpdateEnumValueRequest, UpdateEnumValueResponse>;
    /** [sylk] - None */
    deleteEnumValue: handleUnaryCall<DeleteEnumValueRequest, Empty>;
}
export interface EnumValuesClient extends Client {
    /** [sylk] - None */
    getEnumValue(request: GetEnumValueRequest, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    getEnumValue(request: GetEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    getEnumValue(request: GetEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetEnumValueResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createEnumValue(request: CreateEnumValueRequest, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    createEnumValue(request: CreateEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    createEnumValue(request: CreateEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateEnumValueResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateEnumValue(request: UpdateEnumValueRequest, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    updateEnumValue(request: UpdateEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    updateEnumValue(request: UpdateEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateEnumValueResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteEnumValue(request: DeleteEnumValueRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteEnumValue(request: DeleteEnumValueRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteEnumValue(request: DeleteEnumValueRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const EnumValuesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EnumValuesClient;
    service: typeof EnumValuesService;
};
