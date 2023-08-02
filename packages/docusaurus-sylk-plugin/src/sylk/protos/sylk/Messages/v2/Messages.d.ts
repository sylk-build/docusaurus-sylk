/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { SylkMessage, SylkMessageDisplay } from "../../SylkMessage/v2/SylkMessage";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Messages.v2.GetMessageRequest] - None */
export interface GetMessageRequest {
    projectId: string;
    message: string;
    package: string;
}
/** [sylk.Messages.v2.GetMessageResponse] - None */
export interface GetMessageResponse {
    result?: SylkMessageDisplay;
}
/** [sylk.Messages.v2.CreateMessageRequest] - None */
export interface CreateMessageRequest {
    projectId: string;
    message?: SylkMessage;
    package: string;
}
/** [sylk.Messages.v2.CreateMessageResponse] - None */
export interface CreateMessageResponse {
    result?: SylkMessageDisplay;
}
/** [sylk.Messages.v2.UpdateMessageRequest] - None */
export interface UpdateMessageRequest {
    projectId: string;
    message: string;
    package: string;
    update?: SylkMessage;
}
/** [sylk.Messages.v2.UpdateMessageResponse] - None */
export interface UpdateMessageResponse {
    message: string;
    updated?: SylkMessageDisplay;
}
/** [sylk.Messages.v2.DeleteMessageRequest] - None */
export interface DeleteMessageRequest {
    projectId: string;
    message: string;
    package: string;
}
export declare const GetMessageRequest: {
    encode(message: GetMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMessageRequest;
    fromJSON(object: any): GetMessageRequest;
    toJSON(message: GetMessageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetMessageRequest>]: never; }>(base?: I | undefined): GetMessageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetMessageRequest>]: never; }>(object: I_1): GetMessageRequest;
};
export declare const GetMessageResponse: {
    encode(message: GetMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetMessageResponse;
    fromJSON(object: any): GetMessageResponse;
    toJSON(message: GetMessageResponse): unknown;
    create<I extends {
        result?: {
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            message?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["result"]["message"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["result"]["message"]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
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
                }[] & ({
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
                    } & { [K_2 in Exclude<keyof I["result"]["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["result"]["message"]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_4 in Exclude<keyof I["result"]["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["result"]["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_6 in Exclude<keyof I["result"]["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["result"]["message"]["fields"], keyof {
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
                }[]>]: never; }) | undefined;
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_8 in Exclude<keyof I["result"]["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_9 in Exclude<keyof I["result"]["message"]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["result"]["message"], keyof SylkMessage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_11 in Exclude<keyof I["result"], keyof SylkMessageDisplay>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): GetMessageResponse;
    fromPartial<I_1 extends {
        result?: {
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            message?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_13 in Exclude<keyof I_1["result"]["message"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I_1["result"]["message"]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
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
                }[] & ({
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
                    } & { [K_15 in Exclude<keyof I_1["result"]["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_16 in Exclude<keyof I_1["result"]["message"]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_17 in Exclude<keyof I_1["result"]["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_18 in Exclude<keyof I_1["result"]["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_19 in Exclude<keyof I_1["result"]["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_20 in Exclude<keyof I_1["result"]["message"]["fields"], keyof {
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
                }[]>]: never; }) | undefined;
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_21 in Exclude<keyof I_1["result"]["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_22 in Exclude<keyof I_1["result"]["message"]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I_1["result"]["message"], keyof SylkMessage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_24 in Exclude<keyof I_1["result"], keyof SylkMessageDisplay>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetMessageResponse;
};
export declare const CreateMessageRequest: {
    encode(message: CreateMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageRequest;
    fromJSON(object: any): CreateMessageRequest;
    toJSON(message: CreateMessageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        message?: {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        message?: ({
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K in Exclude<keyof I["message"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["message"]["extensions"], string | number>]: never; }) | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: ({
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
            }[] & ({
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
                } & { [K_2 in Exclude<keyof I["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["message"]["fields"][number]["oneofFields"], keyof {
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
                    } & { [K_4 in Exclude<keyof I["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_6 in Exclude<keyof I["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["message"]["fields"], keyof {
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
            }[]>]: never; }) | undefined;
            tag?: string | undefined;
            inlines?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_9 in Exclude<keyof I["message"]["inlines"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["message"], keyof SylkMessage>]: never; }) | undefined;
        package?: string | undefined;
    } & { [K_11 in Exclude<keyof I, keyof CreateMessageRequest>]: never; }>(base?: I | undefined): CreateMessageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        message?: {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        message?: ({
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_12 in Exclude<keyof I_1["message"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I_1["message"]["extensions"], string | number>]: never; }) | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: ({
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
            }[] & ({
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
                } & { [K_14 in Exclude<keyof I_1["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_15 in Exclude<keyof I_1["message"]["fields"][number]["oneofFields"], keyof {
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
                    } & { [K_16 in Exclude<keyof I_1["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I_1["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_18 in Exclude<keyof I_1["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_19 in Exclude<keyof I_1["message"]["fields"], keyof {
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
            }[]>]: never; }) | undefined;
            tag?: string | undefined;
            inlines?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_20 in Exclude<keyof I_1["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_21 in Exclude<keyof I_1["message"]["inlines"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_22 in Exclude<keyof I_1["message"], keyof SylkMessage>]: never; }) | undefined;
        package?: string | undefined;
    } & { [K_23 in Exclude<keyof I_1, keyof CreateMessageRequest>]: never; }>(object: I_1): CreateMessageRequest;
};
export declare const CreateMessageResponse: {
    encode(message: CreateMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateMessageResponse;
    fromJSON(object: any): CreateMessageResponse;
    toJSON(message: CreateMessageResponse): unknown;
    create<I extends {
        result?: {
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            message?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["result"]["message"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["result"]["message"]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
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
                }[] & ({
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
                    } & { [K_2 in Exclude<keyof I["result"]["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["result"]["message"]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_4 in Exclude<keyof I["result"]["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["result"]["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_6 in Exclude<keyof I["result"]["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["result"]["message"]["fields"], keyof {
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
                }[]>]: never; }) | undefined;
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_8 in Exclude<keyof I["result"]["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_9 in Exclude<keyof I["result"]["message"]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["result"]["message"], keyof SylkMessage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_11 in Exclude<keyof I["result"], keyof SylkMessageDisplay>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): CreateMessageResponse;
    fromPartial<I_1 extends {
        result?: {
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        result?: ({
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            message?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_13 in Exclude<keyof I_1["result"]["message"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I_1["result"]["message"]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
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
                }[] & ({
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
                    } & { [K_15 in Exclude<keyof I_1["result"]["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_16 in Exclude<keyof I_1["result"]["message"]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_17 in Exclude<keyof I_1["result"]["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_18 in Exclude<keyof I_1["result"]["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_19 in Exclude<keyof I_1["result"]["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_20 in Exclude<keyof I_1["result"]["message"]["fields"], keyof {
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
                }[]>]: never; }) | undefined;
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_21 in Exclude<keyof I_1["result"]["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_22 in Exclude<keyof I_1["result"]["message"]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I_1["result"]["message"], keyof SylkMessage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_24 in Exclude<keyof I_1["result"], keyof SylkMessageDisplay>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): CreateMessageResponse;
};
export declare const UpdateMessageRequest: {
    encode(message: UpdateMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMessageRequest;
    fromJSON(object: any): UpdateMessageRequest;
    toJSON(message: UpdateMessageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
        update?: {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
        update?: ({
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
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
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: ({
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
            }[] & ({
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
                } & { [K_2 in Exclude<keyof I["update"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["update"]["fields"][number]["oneofFields"], keyof {
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
                    } & { [K_4 in Exclude<keyof I["update"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["update"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_6 in Exclude<keyof I["update"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["update"]["fields"], keyof {
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
            }[]>]: never; }) | undefined;
            tag?: string | undefined;
            inlines?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_8 in Exclude<keyof I["update"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_9 in Exclude<keyof I["update"]["inlines"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["update"], keyof SylkMessage>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, keyof UpdateMessageRequest>]: never; }>(base?: I | undefined): UpdateMessageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
        update?: {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
        update?: ({
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: {
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
            }[] | undefined;
            tag?: string | undefined;
            inlines?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_12 in Exclude<keyof I_1["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I_1["update"]["extensions"], string | number>]: never; }) | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            description?: string | undefined;
            kind?: string | undefined;
            fields?: ({
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
            }[] & ({
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
                } & { [K_14 in Exclude<keyof I_1["update"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_15 in Exclude<keyof I_1["update"]["fields"][number]["oneofFields"], keyof {
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
                    } & { [K_16 in Exclude<keyof I_1["update"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I_1["update"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_18 in Exclude<keyof I_1["update"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_19 in Exclude<keyof I_1["update"]["fields"], keyof {
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
            }[]>]: never; }) | undefined;
            tag?: string | undefined;
            inlines?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_20 in Exclude<keyof I_1["update"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_21 in Exclude<keyof I_1["update"]["inlines"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_22 in Exclude<keyof I_1["update"], keyof SylkMessage>]: never; }) | undefined;
    } & { [K_23 in Exclude<keyof I_1, keyof UpdateMessageRequest>]: never; }>(object: I_1): UpdateMessageRequest;
};
export declare const UpdateMessageResponse: {
    encode(message: UpdateMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateMessageResponse;
    fromJSON(object: any): UpdateMessageResponse;
    toJSON(message: UpdateMessageResponse): unknown;
    create<I extends {
        message?: string | undefined;
        updated?: {
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        message?: string | undefined;
        updated?: ({
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            message?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["updated"]["message"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["updated"]["message"]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
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
                }[] & ({
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
                    } & { [K_2 in Exclude<keyof I["updated"]["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["updated"]["message"]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_4 in Exclude<keyof I["updated"]["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["updated"]["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_6 in Exclude<keyof I["updated"]["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["updated"]["message"]["fields"], keyof {
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
                }[]>]: never; }) | undefined;
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_8 in Exclude<keyof I["updated"]["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_9 in Exclude<keyof I["updated"]["message"]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["updated"]["message"], keyof SylkMessage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_11 in Exclude<keyof I["updated"], keyof SylkMessageDisplay>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof UpdateMessageResponse>]: never; }>(base?: I | undefined): UpdateMessageResponse;
    fromPartial<I_1 extends {
        message?: string | undefined;
        updated?: {
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } | undefined;
    } & {
        message?: string | undefined;
        updated?: ({
            updatedAt?: Date | undefined;
            message?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & {
            updatedAt?: Date | undefined;
            message?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
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
                }[] | undefined;
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_13 in Exclude<keyof I_1["updated"]["message"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I_1["updated"]["message"]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
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
                }[] & ({
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
                    } & { [K_15 in Exclude<keyof I_1["updated"]["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_16 in Exclude<keyof I_1["updated"]["message"]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_17 in Exclude<keyof I_1["updated"]["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_18 in Exclude<keyof I_1["updated"]["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_19 in Exclude<keyof I_1["updated"]["message"]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_20 in Exclude<keyof I_1["updated"]["message"]["fields"], keyof {
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
                }[]>]: never; }) | undefined;
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_21 in Exclude<keyof I_1["updated"]["message"]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_22 in Exclude<keyof I_1["updated"]["message"]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_23 in Exclude<keyof I_1["updated"]["message"], keyof SylkMessage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            id?: string | undefined;
        } & { [K_24 in Exclude<keyof I_1["updated"], keyof SylkMessageDisplay>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof UpdateMessageResponse>]: never; }>(object: I_1): UpdateMessageResponse;
};
export declare const DeleteMessageRequest: {
    encode(message: DeleteMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteMessageRequest;
    fromJSON(object: any): DeleteMessageRequest;
    toJSON(message: DeleteMessageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteMessageRequest>]: never; }>(base?: I | undefined): DeleteMessageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        message?: string | undefined;
        package?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteMessageRequest>]: never; }>(object: I_1): DeleteMessageRequest;
};
export type MessagesService = typeof MessagesService;
export declare const MessagesService: {
    /** [sylk] - None */
    readonly getMessage: {
        readonly path: "/sylk.Messages.v2.Messages/GetMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetMessageRequest;
        readonly responseSerialize: (value: GetMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetMessageResponse;
    };
    /** [sylk] - None */
    readonly createMessage: {
        readonly path: "/sylk.Messages.v2.Messages/CreateMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateMessageRequest;
        readonly responseSerialize: (value: CreateMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateMessageResponse;
    };
    /** [sylk] - None */
    readonly updateMessage: {
        readonly path: "/sylk.Messages.v2.Messages/UpdateMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateMessageRequest;
        readonly responseSerialize: (value: UpdateMessageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateMessageResponse;
    };
    /** [sylk] - None */
    readonly deleteMessage: {
        readonly path: "/sylk.Messages.v2.Messages/DeleteMessage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteMessageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteMessageRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface MessagesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getMessage: handleUnaryCall<GetMessageRequest, GetMessageResponse>;
    /** [sylk] - None */
    createMessage: handleUnaryCall<CreateMessageRequest, CreateMessageResponse>;
    /** [sylk] - None */
    updateMessage: handleUnaryCall<UpdateMessageRequest, UpdateMessageResponse>;
    /** [sylk] - None */
    deleteMessage: handleUnaryCall<DeleteMessageRequest, Empty>;
}
export interface MessagesClient extends Client {
    /** [sylk] - None */
    getMessage(request: GetMessageRequest, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    getMessage(request: GetMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    getMessage(request: GetMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetMessageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createMessage(request: CreateMessageRequest, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    createMessage(request: CreateMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    createMessage(request: CreateMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateMessageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateMessage(request: UpdateMessageRequest, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    updateMessage(request: UpdateMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    updateMessage(request: UpdateMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateMessageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteMessage(request: DeleteMessageRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteMessage(request: DeleteMessageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteMessage(request: DeleteMessageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const MessagesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): MessagesClient;
    service: typeof MessagesService;
};
