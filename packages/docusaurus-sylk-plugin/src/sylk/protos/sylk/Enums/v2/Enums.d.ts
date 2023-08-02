/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { SylkEnum, SylkEnumDisplay } from "../../SylkEnum/v2/SylkEnum";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Enums.v2.GetEnumRequest] - None */
export interface GetEnumRequest {
    projectId: string;
    package: string;
    enum: string;
}
/** [sylk.Enums.v2.GetEnumResponse] - None */
export interface GetEnumResponse {
    result?: SylkEnumDisplay;
}
/** [sylk.Enums.v2.CreateEnumRequest] - None */
export interface CreateEnumRequest {
    projectId: string;
    package: string;
    enum?: SylkEnum;
}
/** [sylk.Enums.v2.CreateEnumResponse] - None */
export interface CreateEnumResponse {
    result?: SylkEnumDisplay;
}
/** [sylk.Enums.v2.DeleteEnumRequest] - None */
export interface DeleteEnumRequest {
    projectId: string;
    package: string;
    enum: string;
}
/** [sylk.Enums.v2.UpdateEnumRequest] - None */
export interface UpdateEnumRequest {
    projectId: string;
    package: string;
    enum: string;
    update?: SylkEnum;
}
/** [sylk.Enums.v2.UpdateEnumResponse] - None */
export interface UpdateEnumResponse {
    projectId: string;
    enum: string;
    update?: SylkEnum;
}
export declare const GetEnumRequest: {
    encode(message: GetEnumRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetEnumRequest;
    fromJSON(object: any): GetEnumRequest;
    toJSON(message: GetEnumRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetEnumRequest>]: never; }>(base?: I | undefined): GetEnumRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetEnumRequest>]: never; }>(object: I_1): GetEnumRequest;
};
export declare const GetEnumResponse: {
    encode(message: GetEnumResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetEnumResponse;
    fromJSON(object: any): GetEnumResponse;
    toJSON(message: GetEnumResponse): unknown;
    create<I extends {
        result?: {
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            enum?: ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] & ({
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
                } & { [K in Exclude<keyof I["result"]["enum"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["result"]["enum"]["values"], keyof {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["enum"], keyof SylkEnum>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_3 in Exclude<keyof I["result"], keyof SylkEnumDisplay>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): GetEnumResponse;
    fromPartial<I_1 extends {
        result?: {
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            enum?: ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] & ({
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
                } & { [K_5 in Exclude<keyof I_1["result"]["enum"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_6 in Exclude<keyof I_1["result"]["enum"]["values"], keyof {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["result"]["enum"], keyof SylkEnum>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["result"], keyof SylkEnumDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetEnumResponse;
};
export declare const CreateEnumRequest: {
    encode(message: CreateEnumRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEnumRequest;
    fromJSON(object: any): CreateEnumRequest;
    toJSON(message: CreateEnumRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: ({
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] & ({
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
            } & { [K in Exclude<keyof I["enum"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["enum"]["values"], keyof {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & { [K_2 in Exclude<keyof I["enum"], keyof SylkEnum>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof CreateEnumRequest>]: never; }>(base?: I | undefined): CreateEnumRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: ({
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] & ({
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
            } & { [K_4 in Exclude<keyof I_1["enum"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_5 in Exclude<keyof I_1["enum"]["values"], keyof {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["enum"], keyof SylkEnum>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof CreateEnumRequest>]: never; }>(object: I_1): CreateEnumRequest;
};
export declare const CreateEnumResponse: {
    encode(message: CreateEnumResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateEnumResponse;
    fromJSON(object: any): CreateEnumResponse;
    toJSON(message: CreateEnumResponse): unknown;
    create<I extends {
        result?: {
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            enum?: ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] & ({
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
                } & { [K in Exclude<keyof I["result"]["enum"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["result"]["enum"]["values"], keyof {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & { [K_2 in Exclude<keyof I["result"]["enum"], keyof SylkEnum>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_3 in Exclude<keyof I["result"], keyof SylkEnumDisplay>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): CreateEnumResponse;
    fromPartial<I_1 extends {
        result?: {
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            enum?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            enum?: ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] & ({
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
                } & { [K_5 in Exclude<keyof I_1["result"]["enum"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_6 in Exclude<keyof I_1["result"]["enum"]["values"], keyof {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["result"]["enum"], keyof SylkEnum>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["result"], keyof SylkEnumDisplay>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CreateEnumResponse;
};
export declare const DeleteEnumRequest: {
    encode(message: DeleteEnumRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteEnumRequest;
    fromJSON(object: any): DeleteEnumRequest;
    toJSON(message: DeleteEnumRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteEnumRequest>]: never; }>(base?: I | undefined): DeleteEnumRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteEnumRequest>]: never; }>(object: I_1): DeleteEnumRequest;
};
export declare const UpdateEnumRequest: {
    encode(message: UpdateEnumRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEnumRequest;
    fromJSON(object: any): UpdateEnumRequest;
    toJSON(message: UpdateEnumRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
        update?: {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
        update?: ({
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] & ({
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
            } & { [K in Exclude<keyof I["update"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["update"]["values"], keyof {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & { [K_2 in Exclude<keyof I["update"], keyof SylkEnum>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof UpdateEnumRequest>]: never; }>(base?: I | undefined): UpdateEnumRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
        update?: {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        enum?: string | undefined;
        update?: ({
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] & ({
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
            } & { [K_4 in Exclude<keyof I_1["update"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_5 in Exclude<keyof I_1["update"]["values"], keyof {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["update"], keyof SylkEnum>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof UpdateEnumRequest>]: never; }>(object: I_1): UpdateEnumRequest;
};
export declare const UpdateEnumResponse: {
    encode(message: UpdateEnumResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateEnumResponse;
    fromJSON(object: any): UpdateEnumResponse;
    toJSON(message: UpdateEnumResponse): unknown;
    create<I extends {
        projectId?: string | undefined;
        enum?: string | undefined;
        update?: {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        enum?: string | undefined;
        update?: ({
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] & ({
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
            } & { [K in Exclude<keyof I["update"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["update"]["values"], keyof {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & { [K_2 in Exclude<keyof I["update"], keyof SylkEnum>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof UpdateEnumResponse>]: never; }>(base?: I | undefined): UpdateEnumResponse;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        enum?: string | undefined;
        update?: {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        enum?: string | undefined;
        update?: ({
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & {
            type?: string | undefined;
            kind?: string | undefined;
            description?: string | undefined;
            values?: ({
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[] & ({
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
            } & { [K_4 in Exclude<keyof I_1["update"]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_5 in Exclude<keyof I_1["update"]["values"], keyof {
                kind?: string | undefined;
                description?: string | undefined;
                index?: number | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                number?: number | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            fullName?: string | undefined;
            tag?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["update"], keyof SylkEnum>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof UpdateEnumResponse>]: never; }>(object: I_1): UpdateEnumResponse;
};
export type EnumsService = typeof EnumsService;
export declare const EnumsService: {
    /** [sylk] - None */
    readonly getEnum: {
        readonly path: "/sylk.Enums.v2.Enums/GetEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetEnumRequest;
        readonly responseSerialize: (value: GetEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetEnumResponse;
    };
    /** [sylk] - None */
    readonly createEnum: {
        readonly path: "/sylk.Enums.v2.Enums/CreateEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateEnumRequest;
        readonly responseSerialize: (value: CreateEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateEnumResponse;
    };
    /** [sylk] - None */
    readonly deleteEnum: {
        readonly path: "/sylk.Enums.v2.Enums/DeleteEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteEnumRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** [sylk] - None */
    readonly updateEnum: {
        readonly path: "/sylk.Enums.v2.Enums/UpdateEnum";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateEnumRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateEnumRequest;
        readonly responseSerialize: (value: UpdateEnumResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateEnumResponse;
    };
};
export interface EnumsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getEnum: handleUnaryCall<GetEnumRequest, GetEnumResponse>;
    /** [sylk] - None */
    createEnum: handleUnaryCall<CreateEnumRequest, CreateEnumResponse>;
    /** [sylk] - None */
    deleteEnum: handleUnaryCall<DeleteEnumRequest, Empty>;
    /** [sylk] - None */
    updateEnum: handleUnaryCall<UpdateEnumRequest, UpdateEnumResponse>;
}
export interface EnumsClient extends Client {
    /** [sylk] - None */
    getEnum(request: GetEnumRequest, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    getEnum(request: GetEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    getEnum(request: GetEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetEnumResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createEnum(request: CreateEnumRequest, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    createEnum(request: CreateEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    createEnum(request: CreateEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateEnumResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteEnum(request: DeleteEnumRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteEnum(request: DeleteEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteEnum(request: DeleteEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateEnum(request: UpdateEnumRequest, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    updateEnum(request: UpdateEnumRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
    updateEnum(request: UpdateEnumRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateEnumResponse) => void): ClientUnaryCall;
}
export declare const EnumsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): EnumsClient;
    service: typeof EnumsService;
};
