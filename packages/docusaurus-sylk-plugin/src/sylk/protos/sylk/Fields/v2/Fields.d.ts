/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { SylkField, SylkFieldDisplay } from "../../SylkField/v1/SylkField";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Fields.v2.GetFieldRequest] - None */
export interface GetFieldRequest {
    projectId: string;
    package: string;
    field: string;
}
/** [sylk.Fields.v2.GetFieldResponse] - None */
export interface GetFieldResponse {
    result?: SylkFieldDisplay;
}
/** [sylk.Fields.v2.CreateFieldRequest] - None */
export interface CreateFieldRequest {
    projectId: string;
    package: string;
    field?: SylkField;
}
/** [sylk.Fields.v2.CreateFieldResponse] - None */
export interface CreateFieldResponse {
    result?: SylkFieldDisplay;
}
/** [sylk.Fields.v2.UpdateFieldRequest] - None */
export interface UpdateFieldRequest {
    projectId: string;
    package: string;
    field: string;
    update?: SylkField;
    isOneof: boolean;
}
/** [sylk.Fields.v2.UpdateFieldResponse] - None */
export interface UpdateFieldResponse {
    field: string;
    updated?: SylkFieldDisplay;
}
/** [sylk.Fields.v2.DeleteFieldRequest] - None */
export interface DeleteFieldRequest {
    projectId: string;
    package: string;
    field: string;
    isOneof: boolean;
}
export declare const GetFieldRequest: {
    encode(message: GetFieldRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFieldRequest;
    fromJSON(object: any): GetFieldRequest;
    toJSON(message: GetFieldRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetFieldRequest>]: never; }>(base?: I | undefined): GetFieldRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetFieldRequest>]: never; }>(object: I_1): GetFieldRequest;
};
export declare const GetFieldResponse: {
    encode(message: GetFieldResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetFieldResponse;
    fromJSON(object: any): GetFieldResponse;
    toJSON(message: GetFieldResponse): unknown;
    create<I extends {
        result?: {
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            field?: ({
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] & ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & { [K in Exclude<keyof I["result"]["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_1 in Exclude<keyof I["result"]["field"]["oneofFields"], keyof {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_2 in Exclude<keyof I["result"]["field"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["field"]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_4 in Exclude<keyof I["result"]["field"], keyof SylkField>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_5 in Exclude<keyof I["result"], keyof SylkFieldDisplay>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): GetFieldResponse;
    fromPartial<I_1 extends {
        result?: {
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            field?: ({
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] & ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & { [K_7 in Exclude<keyof I_1["result"]["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_8 in Exclude<keyof I_1["result"]["field"]["oneofFields"], keyof {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_9 in Exclude<keyof I_1["result"]["field"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I_1["result"]["field"]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_11 in Exclude<keyof I_1["result"]["field"], keyof SylkField>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_12 in Exclude<keyof I_1["result"], keyof SylkFieldDisplay>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetFieldResponse;
};
export declare const CreateFieldRequest: {
    encode(message: CreateFieldRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFieldRequest;
    fromJSON(object: any): CreateFieldRequest;
    toJSON(message: CreateFieldRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: ({
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] & ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & { [K in Exclude<keyof I["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_1 in Exclude<keyof I["field"]["oneofFields"], keyof {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_2 in Exclude<keyof I["field"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["field"]["extensions"], string | number>]: never; }) | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & { [K_4 in Exclude<keyof I["field"], keyof SylkField>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof CreateFieldRequest>]: never; }>(base?: I | undefined): CreateFieldRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: ({
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] & ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_7 in Exclude<keyof I_1["field"]["oneofFields"], keyof {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_8 in Exclude<keyof I_1["field"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I_1["field"]["extensions"], string | number>]: never; }) | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & { [K_10 in Exclude<keyof I_1["field"], keyof SylkField>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof CreateFieldRequest>]: never; }>(object: I_1): CreateFieldRequest;
};
export declare const CreateFieldResponse: {
    encode(message: CreateFieldResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateFieldResponse;
    fromJSON(object: any): CreateFieldResponse;
    toJSON(message: CreateFieldResponse): unknown;
    create<I extends {
        result?: {
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            field?: ({
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] & ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & { [K in Exclude<keyof I["result"]["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_1 in Exclude<keyof I["result"]["field"]["oneofFields"], keyof {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_2 in Exclude<keyof I["result"]["field"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["field"]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_4 in Exclude<keyof I["result"]["field"], keyof SylkField>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_5 in Exclude<keyof I["result"], keyof SylkFieldDisplay>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): CreateFieldResponse;
    fromPartial<I_1 extends {
        result?: {
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            field?: ({
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] & ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & { [K_7 in Exclude<keyof I_1["result"]["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_8 in Exclude<keyof I_1["result"]["field"]["oneofFields"], keyof {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_9 in Exclude<keyof I_1["result"]["field"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I_1["result"]["field"]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_11 in Exclude<keyof I_1["result"]["field"], keyof SylkField>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_12 in Exclude<keyof I_1["result"], keyof SylkFieldDisplay>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CreateFieldResponse;
};
export declare const UpdateFieldRequest: {
    encode(message: UpdateFieldRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFieldRequest;
    fromJSON(object: any): UpdateFieldRequest;
    toJSON(message: UpdateFieldRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        update?: {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } | undefined;
        isOneof?: boolean | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        update?: ({
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] & ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & { [K in Exclude<keyof I["update"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_1 in Exclude<keyof I["update"]["oneofFields"], keyof {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_2 in Exclude<keyof I["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["update"]["extensions"], string | number>]: never; }) | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & { [K_4 in Exclude<keyof I["update"], keyof SylkField>]: never; }) | undefined;
        isOneof?: boolean | undefined;
    } & { [K_5 in Exclude<keyof I, keyof UpdateFieldRequest>]: never; }>(base?: I | undefined): UpdateFieldRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        update?: {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } | undefined;
        isOneof?: boolean | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        update?: ({
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] & ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["update"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_7 in Exclude<keyof I_1["update"]["oneofFields"], keyof {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_8 in Exclude<keyof I_1["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I_1["update"]["extensions"], string | number>]: never; }) | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & { [K_10 in Exclude<keyof I_1["update"], keyof SylkField>]: never; }) | undefined;
        isOneof?: boolean | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof UpdateFieldRequest>]: never; }>(object: I_1): UpdateFieldRequest;
};
export declare const UpdateFieldResponse: {
    encode(message: UpdateFieldResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateFieldResponse;
    fromJSON(object: any): UpdateFieldResponse;
    toJSON(message: UpdateFieldResponse): unknown;
    create<I extends {
        field?: string | undefined;
        updated?: {
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        field?: string | undefined;
        updated?: ({
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            field?: ({
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] & ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & { [K in Exclude<keyof I["updated"]["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_1 in Exclude<keyof I["updated"]["field"]["oneofFields"], keyof {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_2 in Exclude<keyof I["updated"]["field"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["updated"]["field"]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_4 in Exclude<keyof I["updated"]["field"], keyof SylkField>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_5 in Exclude<keyof I["updated"], keyof SylkFieldDisplay>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof UpdateFieldResponse>]: never; }>(base?: I | undefined): UpdateFieldResponse;
    fromPartial<I_1 extends {
        field?: string | undefined;
        updated?: {
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        field?: string | undefined;
        updated?: ({
            createdAt?: Date | undefined;
            field?: {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            field?: ({
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & {
                type?: string | undefined;
                uri?: string | undefined;
                oneofFields?: ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[] & ({
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                } & { [K_7 in Exclude<keyof I_1["updated"]["field"]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_8 in Exclude<keyof I_1["updated"]["field"]["oneofFields"], keyof {
                    enumType?: string | undefined;
                    fullName?: string | undefined;
                    uri?: string | undefined;
                    messageType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    index?: number | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                enumType?: string | undefined;
                fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                kind?: string | undefined;
                fullName?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_9 in Exclude<keyof I_1["updated"]["field"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I_1["updated"]["field"]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_11 in Exclude<keyof I_1["updated"]["field"], keyof SylkField>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_12 in Exclude<keyof I_1["updated"], keyof SylkFieldDisplay>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof UpdateFieldResponse>]: never; }>(object: I_1): UpdateFieldResponse;
};
export declare const DeleteFieldRequest: {
    encode(message: DeleteFieldRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteFieldRequest;
    fromJSON(object: any): DeleteFieldRequest;
    toJSON(message: DeleteFieldRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        isOneof?: boolean | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        isOneof?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteFieldRequest>]: never; }>(base?: I | undefined): DeleteFieldRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        isOneof?: boolean | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        field?: string | undefined;
        isOneof?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteFieldRequest>]: never; }>(object: I_1): DeleteFieldRequest;
};
export type FieldsService = typeof FieldsService;
export declare const FieldsService: {
    /** [sylk] - None */
    readonly getField: {
        readonly path: "/sylk.Fields.v2.Fields/GetField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetFieldRequest;
        readonly responseSerialize: (value: GetFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetFieldResponse;
    };
    /** [sylk] - None */
    readonly createField: {
        readonly path: "/sylk.Fields.v2.Fields/CreateField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateFieldRequest;
        readonly responseSerialize: (value: CreateFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateFieldResponse;
    };
    /** [sylk] - None */
    readonly updateField: {
        readonly path: "/sylk.Fields.v2.Fields/UpdateField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateFieldRequest;
        readonly responseSerialize: (value: UpdateFieldResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateFieldResponse;
    };
    /** [sylk] - None */
    readonly deleteField: {
        readonly path: "/sylk.Fields.v2.Fields/DeleteField";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteFieldRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteFieldRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface FieldsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getField: handleUnaryCall<GetFieldRequest, GetFieldResponse>;
    /** [sylk] - None */
    createField: handleUnaryCall<CreateFieldRequest, CreateFieldResponse>;
    /** [sylk] - None */
    updateField: handleUnaryCall<UpdateFieldRequest, UpdateFieldResponse>;
    /** [sylk] - None */
    deleteField: handleUnaryCall<DeleteFieldRequest, Empty>;
}
export interface FieldsClient extends Client {
    /** [sylk] - None */
    getField(request: GetFieldRequest, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    getField(request: GetFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    getField(request: GetFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetFieldResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createField(request: CreateFieldRequest, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    createField(request: CreateFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    createField(request: CreateFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateFieldResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateField(request: UpdateFieldRequest, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    updateField(request: UpdateFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    updateField(request: UpdateFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateFieldResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteField(request: DeleteFieldRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteField(request: DeleteFieldRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteField(request: DeleteFieldRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const FieldsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FieldsClient;
    service: typeof FieldsService;
};
