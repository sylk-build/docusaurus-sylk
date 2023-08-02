/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { SylkService, SylkServiceDisplay } from "../../SylkService/v2/SylkService";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Services.v2.GetServiceRequest] - None */
export interface GetServiceRequest {
    projectId: string;
    service: string;
}
/** [sylk.Services.v2.GetServiceResponse] - None */
export interface GetServiceResponse {
    result?: SylkServiceDisplay;
}
/** [sylk.Services.v2.CreateServiceRequest] - None */
export interface CreateServiceRequest {
    projectId: string;
    service?: SylkService;
}
/** [sylk.Services.v2.CreateServiceResponse] - None */
export interface CreateServiceResponse {
    result?: SylkServiceDisplay;
}
/** [sylk.Services.v2.DeleteServiceRequest] - None */
export interface DeleteServiceRequest {
    projectId: string;
    service: string;
}
/** [sylk.Services.v2.UpdateServiceRequest] - None */
export interface UpdateServiceRequest {
    projectId: string;
    service: string;
    update?: SylkService;
}
/** [sylk.Services.v2.UpdateServiceResponse] - None */
export interface UpdateServiceResponse {
    projectId: string;
    service: string;
    updated?: SylkServiceDisplay;
}
export declare const GetServiceRequest: {
    encode(message: GetServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest;
    fromJSON(object: any): GetServiceRequest;
    toJSON(message: GetServiceRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        service?: string | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetServiceRequest>]: never; }>(base?: I | undefined): GetServiceRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        service?: string | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetServiceRequest>]: never; }>(object: I_1): GetServiceRequest;
};
export declare const GetServiceResponse: {
    encode(message: GetServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceResponse;
    fromJSON(object: any): GetServiceResponse;
    toJSON(message: GetServiceResponse): unknown;
    create<I extends {
        result?: {
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } & {
            updatedAt?: Date | undefined;
            service?: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K in Exclude<keyof I["result"]["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
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
                }[] & ({
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
                        } & { [K_1 in Exclude<keyof I["result"]["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_2 in Exclude<keyof I["result"]["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["result"]["service"]["methods"], keyof {
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
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_5 in Exclude<keyof I["result"]["service"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["result"]["service"]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I["result"]["service"], keyof SylkService>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_8 in Exclude<keyof I["result"], keyof SylkServiceDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): GetServiceResponse;
    fromPartial<I_1 extends {
        result?: {
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } & {
            updatedAt?: Date | undefined;
            service?: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K_10 in Exclude<keyof I_1["result"]["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
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
                }[] & ({
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
                        } & { [K_11 in Exclude<keyof I_1["result"]["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_12 in Exclude<keyof I_1["result"]["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_13 in Exclude<keyof I_1["result"]["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_14 in Exclude<keyof I_1["result"]["service"]["methods"], keyof {
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
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_15 in Exclude<keyof I_1["result"]["service"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I_1["result"]["service"]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_17 in Exclude<keyof I_1["result"]["service"], keyof SylkService>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_18 in Exclude<keyof I_1["result"], keyof SylkServiceDisplay>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetServiceResponse;
};
export declare const CreateServiceRequest: {
    encode(message: CreateServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceRequest;
    fromJSON(object: any): CreateServiceRequest;
    toJSON(message: CreateServiceRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        service?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K in Exclude<keyof I["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
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
            }[] & ({
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
                    } & { [K_1 in Exclude<keyof I["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_3 in Exclude<keyof I["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["service"]["methods"], keyof {
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
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_5 in Exclude<keyof I["service"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["service"]["extensions"], string | number>]: never; }) | undefined;
            tag?: string | undefined;
        } & { [K_7 in Exclude<keyof I["service"], keyof SylkService>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof CreateServiceRequest>]: never; }>(base?: I | undefined): CreateServiceRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        service?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
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
            }[] & ({
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
                    } & { [K_10 in Exclude<keyof I_1["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I_1["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_12 in Exclude<keyof I_1["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_13 in Exclude<keyof I_1["service"]["methods"], keyof {
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
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_14 in Exclude<keyof I_1["service"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I_1["service"]["extensions"], string | number>]: never; }) | undefined;
            tag?: string | undefined;
        } & { [K_16 in Exclude<keyof I_1["service"], keyof SylkService>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof CreateServiceRequest>]: never; }>(object: I_1): CreateServiceRequest;
};
export declare const CreateServiceResponse: {
    encode(message: CreateServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateServiceResponse;
    fromJSON(object: any): CreateServiceResponse;
    toJSON(message: CreateServiceResponse): unknown;
    create<I extends {
        result?: {
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } & {
            updatedAt?: Date | undefined;
            service?: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K in Exclude<keyof I["result"]["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
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
                }[] & ({
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
                        } & { [K_1 in Exclude<keyof I["result"]["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_2 in Exclude<keyof I["result"]["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["result"]["service"]["methods"], keyof {
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
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_5 in Exclude<keyof I["result"]["service"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["result"]["service"]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I["result"]["service"], keyof SylkService>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_8 in Exclude<keyof I["result"], keyof SylkServiceDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): CreateServiceResponse;
    fromPartial<I_1 extends {
        result?: {
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } & {
            updatedAt?: Date | undefined;
            service?: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K_10 in Exclude<keyof I_1["result"]["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
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
                }[] & ({
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
                        } & { [K_11 in Exclude<keyof I_1["result"]["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_12 in Exclude<keyof I_1["result"]["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_13 in Exclude<keyof I_1["result"]["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_14 in Exclude<keyof I_1["result"]["service"]["methods"], keyof {
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
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_15 in Exclude<keyof I_1["result"]["service"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I_1["result"]["service"]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_17 in Exclude<keyof I_1["result"]["service"], keyof SylkService>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_18 in Exclude<keyof I_1["result"], keyof SylkServiceDisplay>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CreateServiceResponse;
};
export declare const DeleteServiceRequest: {
    encode(message: DeleteServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteServiceRequest;
    fromJSON(object: any): DeleteServiceRequest;
    toJSON(message: DeleteServiceRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        service?: string | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteServiceRequest>]: never; }>(base?: I | undefined): DeleteServiceRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        service?: string | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteServiceRequest>]: never; }>(object: I_1): DeleteServiceRequest;
};
export declare const UpdateServiceRequest: {
    encode(message: UpdateServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServiceRequest;
    fromJSON(object: any): UpdateServiceRequest;
    toJSON(message: UpdateServiceRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        service?: string | undefined;
        update?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
        update?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K in Exclude<keyof I["update"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
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
            }[] & ({
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
                    } & { [K_1 in Exclude<keyof I["update"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["update"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_3 in Exclude<keyof I["update"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["update"]["methods"], keyof {
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
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_5 in Exclude<keyof I["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["update"]["extensions"], string | number>]: never; }) | undefined;
            tag?: string | undefined;
        } & { [K_7 in Exclude<keyof I["update"], keyof SylkService>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof UpdateServiceRequest>]: never; }>(base?: I | undefined): UpdateServiceRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        service?: string | undefined;
        update?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
        update?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            tag?: string | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["update"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
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
            }[] & ({
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
                    } & { [K_10 in Exclude<keyof I_1["update"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I_1["update"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_12 in Exclude<keyof I_1["update"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_13 in Exclude<keyof I_1["update"]["methods"], keyof {
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
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_14 in Exclude<keyof I_1["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I_1["update"]["extensions"], string | number>]: never; }) | undefined;
            tag?: string | undefined;
        } & { [K_16 in Exclude<keyof I_1["update"], keyof SylkService>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof UpdateServiceRequest>]: never; }>(object: I_1): UpdateServiceRequest;
};
export declare const UpdateServiceResponse: {
    encode(message: UpdateServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateServiceResponse;
    fromJSON(object: any): UpdateServiceResponse;
    toJSON(message: UpdateServiceResponse): unknown;
    create<I extends {
        projectId?: string | undefined;
        service?: string | undefined;
        updated?: {
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
        updated?: ({
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } & {
            updatedAt?: Date | undefined;
            service?: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K in Exclude<keyof I["updated"]["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
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
                }[] & ({
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
                        } & { [K_1 in Exclude<keyof I["updated"]["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_2 in Exclude<keyof I["updated"]["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_3 in Exclude<keyof I["updated"]["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["updated"]["service"]["methods"], keyof {
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
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_5 in Exclude<keyof I["updated"]["service"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["updated"]["service"]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I["updated"]["service"], keyof SylkService>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_8 in Exclude<keyof I["updated"], keyof SylkServiceDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof UpdateServiceResponse>]: never; }>(base?: I | undefined): UpdateServiceResponse;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        service?: string | undefined;
        updated?: {
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        service?: string | undefined;
        updated?: ({
            updatedAt?: Date | undefined;
            service?: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
        } & {
            updatedAt?: Date | undefined;
            service?: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K_10 in Exclude<keyof I_1["updated"]["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
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
                }[] & ({
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
                        } & { [K_11 in Exclude<keyof I_1["updated"]["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_12 in Exclude<keyof I_1["updated"]["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_13 in Exclude<keyof I_1["updated"]["service"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_14 in Exclude<keyof I_1["updated"]["service"]["methods"], keyof {
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
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_15 in Exclude<keyof I_1["updated"]["service"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I_1["updated"]["service"]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_17 in Exclude<keyof I_1["updated"]["service"], keyof SylkService>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_18 in Exclude<keyof I_1["updated"], keyof SylkServiceDisplay>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof UpdateServiceResponse>]: never; }>(object: I_1): UpdateServiceResponse;
};
export type ServicesService = typeof ServicesService;
export declare const ServicesService: {
    /** [sylk] - None */
    readonly getService: {
        readonly path: "/sylk.Services.v2.Services/GetService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetServiceRequest;
        readonly responseSerialize: (value: GetServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetServiceResponse;
    };
    /** [sylk] - None */
    readonly deleteService: {
        readonly path: "/sylk.Services.v2.Services/DeleteService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteServiceRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** [sylk] - None */
    readonly createService: {
        readonly path: "/sylk.Services.v2.Services/CreateService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateServiceRequest;
        readonly responseSerialize: (value: CreateServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateServiceResponse;
    };
    /** [sylk] - None */
    readonly updateService: {
        readonly path: "/sylk.Services.v2.Services/UpdateService";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateServiceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateServiceRequest;
        readonly responseSerialize: (value: UpdateServiceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateServiceResponse;
    };
};
export interface ServicesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getService: handleUnaryCall<GetServiceRequest, GetServiceResponse>;
    /** [sylk] - None */
    deleteService: handleUnaryCall<DeleteServiceRequest, Empty>;
    /** [sylk] - None */
    createService: handleUnaryCall<CreateServiceRequest, CreateServiceResponse>;
    /** [sylk] - None */
    updateService: handleUnaryCall<UpdateServiceRequest, UpdateServiceResponse>;
}
export interface ServicesClient extends Client {
    /** [sylk] - None */
    getService(request: GetServiceRequest, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    getService(request: GetServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    getService(request: GetServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetServiceResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteService(request: DeleteServiceRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteService(request: DeleteServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteService(request: DeleteServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** [sylk] - None */
    createService(request: CreateServiceRequest, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    createService(request: CreateServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    createService(request: CreateServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateServiceResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateService(request: UpdateServiceRequest, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    updateService(request: UpdateServiceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
    updateService(request: UpdateServiceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateServiceResponse) => void): ClientUnaryCall;
}
export declare const ServicesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServicesClient;
    service: typeof ServicesService;
};
