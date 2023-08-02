/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { SylkMethod, SylkMethodDisplay } from "../../SylkMethod/v1/SylkMethod";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Methods.v2.GetMethodRequest] - None */
export interface GetMethodRequest {
    projectId: string;
    method: string;
}
/** [sylk.Methods.v2.GetMethodResponse] - None */
export interface GetMethodResponse {
    result?: SylkMethodDisplay;
}
/** [sylk.Methods.v2.CreateMethodRequest] - None */
export interface CreateMethodRequest {
    projectId: string;
    service: string;
    method?: SylkMethod;
}
/** [sylk.Methods.v2.CreateMethodResponse] - None */
export interface CreateMethodResponse {
    result?: SylkMethodDisplay;
}
/** [sylk.Methods.v2.DeleteMethodRequest] - None */
export interface DeleteMethodRequest {
    projectId: string;
    method: string;
}
/** [sylk.Methods.v2.UpdateMethodRequest] - None */
export interface UpdateMethodRequest {
    projectId: string;
    method: string;
    update?: SylkMethod;
}
/** [sylk.Methods.v2.UpdateMethodResponse] - None */
export interface UpdateMethodResponse {
    method: string;
    updated?: SylkMethodDisplay;
}
export declare const GetMethodRequest: {
    encode(message: GetMethodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMethodRequest;
    fromJSON(object: any): GetMethodRequest;
    toJSON(message: GetMethodRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        method?: string | undefined;
    } & {
        projectId?: string | undefined;
        method?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetMethodRequest>]: never; }>(base?: I | undefined): GetMethodRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        method?: string | undefined;
    } & {
        projectId?: string | undefined;
        method?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetMethodRequest>]: never; }>(object: I_1): GetMethodRequest;
};
export declare const GetMethodResponse: {
    encode(message: GetMethodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMethodResponse;
    fromJSON(object: any): GetMethodResponse;
    toJSON(message: GetMethodResponse): unknown;
    create<I extends {
        result?: {
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            method?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["result"]["method"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["result"]["method"]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["method"], keyof SylkMethod>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_3 in Exclude<keyof I["result"], keyof SylkMethodDisplay>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): GetMethodResponse;
    fromPartial<I_1 extends {
        result?: {
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            method?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_5 in Exclude<keyof I_1["result"]["method"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I_1["result"]["method"]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["result"]["method"], keyof SylkMethod>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["result"], keyof SylkMethodDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetMethodResponse;
};
export declare const CreateMethodRequest: {
    encode(message: CreateMethodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMethodRequest;
    fromJSON(object: any): CreateMethodRequest;
    toJSON(message: CreateMethodRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        service?: string | undefined;
        method?: {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
        method?: ({
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K in Exclude<keyof I["method"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["method"]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_2 in Exclude<keyof I["method"], keyof SylkMethod>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof CreateMethodRequest>]: never; }>(base?: I | undefined): CreateMethodRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        service?: string | undefined;
        method?: {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
        method?: ({
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_4 in Exclude<keyof I_1["method"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I_1["method"]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["method"], keyof SylkMethod>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof CreateMethodRequest>]: never; }>(object: I_1): CreateMethodRequest;
};
export declare const CreateMethodResponse: {
    encode(message: CreateMethodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMethodResponse;
    fromJSON(object: any): CreateMethodResponse;
    toJSON(message: CreateMethodResponse): unknown;
    create<I extends {
        result?: {
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            method?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["result"]["method"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["result"]["method"]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["method"], keyof SylkMethod>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_3 in Exclude<keyof I["result"], keyof SylkMethodDisplay>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): CreateMethodResponse;
    fromPartial<I_1 extends {
        result?: {
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            method?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_5 in Exclude<keyof I_1["result"]["method"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I_1["result"]["method"]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["result"]["method"], keyof SylkMethod>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["result"], keyof SylkMethodDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CreateMethodResponse;
};
export declare const DeleteMethodRequest: {
    encode(message: DeleteMethodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMethodRequest;
    fromJSON(object: any): DeleteMethodRequest;
    toJSON(message: DeleteMethodRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        method?: string | undefined;
    } & {
        projectId?: string | undefined;
        method?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteMethodRequest>]: never; }>(base?: I | undefined): DeleteMethodRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        method?: string | undefined;
    } & {
        projectId?: string | undefined;
        method?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteMethodRequest>]: never; }>(object: I_1): DeleteMethodRequest;
};
export declare const UpdateMethodRequest: {
    encode(message: UpdateMethodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMethodRequest;
    fromJSON(object: any): UpdateMethodRequest;
    toJSON(message: UpdateMethodRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        method?: string | undefined;
        update?: {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        method?: string | undefined;
        update?: ({
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K in Exclude<keyof I["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["update"]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_2 in Exclude<keyof I["update"], keyof SylkMethod>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof UpdateMethodRequest>]: never; }>(base?: I | undefined): UpdateMethodRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        method?: string | undefined;
        update?: {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        method?: string | undefined;
        update?: ({
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & {
            clientStreaming?: boolean | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            name?: string | undefined;
            serverStreaming?: boolean | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_4 in Exclude<keyof I_1["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I_1["update"]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["update"], keyof SylkMethod>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof UpdateMethodRequest>]: never; }>(object: I_1): UpdateMethodRequest;
};
export declare const UpdateMethodResponse: {
    encode(message: UpdateMethodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMethodResponse;
    fromJSON(object: any): UpdateMethodResponse;
    toJSON(message: UpdateMethodResponse): unknown;
    create<I extends {
        method?: string | undefined;
        updated?: {
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        method?: string | undefined;
        updated?: ({
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            method?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["updated"]["method"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["updated"]["method"]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_2 in Exclude<keyof I["updated"]["method"], keyof SylkMethod>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_3 in Exclude<keyof I["updated"], keyof SylkMethodDisplay>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof UpdateMethodResponse>]: never; }>(base?: I | undefined): UpdateMethodResponse;
    fromPartial<I_1 extends {
        method?: string | undefined;
        updated?: {
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        method?: string | undefined;
        updated?: ({
            createdAt?: Date | undefined;
            method?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & {
            createdAt?: Date | undefined;
            method?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_5 in Exclude<keyof I_1["updated"]["method"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I_1["updated"]["method"]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["updated"]["method"], keyof SylkMethod>]: never; }) | undefined;
            updatedAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["updated"], keyof SylkMethodDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof UpdateMethodResponse>]: never; }>(object: I_1): UpdateMethodResponse;
};
export type MethodsService = typeof MethodsService;
export declare const MethodsService: {
    /** [sylk] - None */
    readonly getMethod: {
        readonly path: "/sylk.Methods.v2.Methods/GetMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetMethodRequest;
        readonly responseSerialize: (value: GetMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetMethodResponse;
    };
    /** [sylk] - None */
    readonly createMethod: {
        readonly path: "/sylk.Methods.v2.Methods/CreateMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateMethodRequest;
        readonly responseSerialize: (value: CreateMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateMethodResponse;
    };
    /** [sylk] - None */
    readonly updateMethod: {
        readonly path: "/sylk.Methods.v2.Methods/UpdateMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateMethodRequest;
        readonly responseSerialize: (value: UpdateMethodResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateMethodResponse;
    };
    /** [sylk] - None */
    readonly deleteMethod: {
        readonly path: "/sylk.Methods.v2.Methods/DeleteMethod";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMethodRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMethodRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface MethodsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getMethod: handleUnaryCall<GetMethodRequest, GetMethodResponse>;
    /** [sylk] - None */
    createMethod: handleUnaryCall<CreateMethodRequest, CreateMethodResponse>;
    /** [sylk] - None */
    updateMethod: handleUnaryCall<UpdateMethodRequest, UpdateMethodResponse>;
    /** [sylk] - None */
    deleteMethod: handleUnaryCall<DeleteMethodRequest, Empty>;
}
export interface MethodsClient extends Client {
    /** [sylk] - None */
    getMethod(request: GetMethodRequest, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    getMethod(request: GetMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    getMethod(request: GetMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetMethodResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createMethod(request: CreateMethodRequest, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    createMethod(request: CreateMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    createMethod(request: CreateMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateMethodResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateMethod(request: UpdateMethodRequest, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    updateMethod(request: UpdateMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    updateMethod(request: UpdateMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateMethodResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteMethod(request: DeleteMethodRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteMethod(request: DeleteMethodRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteMethod(request: DeleteMethodRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const MethodsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MethodsClient;
    service: typeof MethodsService;
};
