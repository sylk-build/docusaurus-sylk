/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
import { SylkPackage, SylkPackageDisplay } from "../../SylkPackage/v2/SylkPackage";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Packages.v2.GetPackageRequest] - None */
export interface GetPackageRequest {
    projectId: string;
    package: string;
}
/** [sylk.Packages.v2.GetPackageResponse] - None */
export interface GetPackageResponse {
    result?: SylkPackageDisplay;
}
/** [sylk.Packages.v2.CreatePackageRequest] - None */
export interface CreatePackageRequest {
    projectId: string;
    package?: SylkPackage;
    tags: string[];
}
/** [sylk.Packages.v2.CreatePackageResponse] - None */
export interface CreatePackageResponse {
    projectId: string;
    result?: SylkPackageDisplay;
}
/** [sylk.Packages.v2.DeletePackageRequest] - None */
export interface DeletePackageRequest {
    projectId: string;
    package: string;
}
/** [sylk.Packages.v2.UpdatePackageRequest] - None */
export interface UpdatePackageRequest {
    projectId: string;
    package: string;
    update?: SylkPackage;
}
/** [sylk.Packages.v2.UpdatePackageResponse] - None */
export interface UpdatePackageResponse {
    projectId: string;
    package: string;
    updated?: SylkPackageDisplay;
}
export declare const GetPackageRequest: {
    encode(message: GetPackageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPackageRequest;
    fromJSON(object: any): GetPackageRequest;
    toJSON(message: GetPackageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetPackageRequest>]: never; }>(base?: I | undefined): GetPackageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetPackageRequest>]: never; }>(object: I_1): GetPackageRequest;
};
export declare const GetPackageResponse: {
    encode(message: GetPackageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPackageResponse;
    fromJSON(object: any): GetPackageResponse;
    toJSON(message: GetPackageResponse): unknown;
    create<I extends {
        result?: {
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            package?: ({
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                }[] & ({
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
                    dependencies?: (string[] & string[] & { [K in Exclude<keyof I["result"]["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_1 in Exclude<keyof I["result"]["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_2 in Exclude<keyof I["result"]["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["result"]["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["result"]["package"]["services"][number]["methods"], keyof {
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
                        } & { [K_5 in Exclude<keyof I["result"]["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_6 in Exclude<keyof I["result"]["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_7 in Exclude<keyof I["result"]["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["result"]["package"]["services"], keyof {
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
                }[]>]: never; }) | undefined;
                messages?: ({
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
                }[] & ({
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
                        } & { [K_9 in Exclude<keyof I["result"]["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_10 in Exclude<keyof I["result"]["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_11 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_13 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_14 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_15 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_16 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"], keyof {
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
                    } & { [K_17 in Exclude<keyof I["result"]["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_18 in Exclude<keyof I["result"]["package"]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I["result"]["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["result"]["package"]["messages"], keyof {
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
                    } & { [K_21 in Exclude<keyof I["result"]["package"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["result"]["package"]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
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
                }[] & ({
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
                    } & { [K_23 in Exclude<keyof I["result"]["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_24 in Exclude<keyof I["result"]["package"]["enums"][number]["values"], keyof {
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
                } & { [K_25 in Exclude<keyof I["result"]["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["result"]["package"]["enums"], keyof {
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
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_27 in Exclude<keyof I["result"]["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_28 in Exclude<keyof I["result"]["package"], keyof SylkPackage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_29 in Exclude<keyof I["result"], keyof SylkPackageDisplay>]: never; }) | undefined;
    } & { [K_30 in Exclude<keyof I, "result">]: never; }>(base?: I | undefined): GetPackageResponse;
    fromPartial<I_1 extends {
        result?: {
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        result?: ({
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            package?: ({
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                }[] & ({
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
                    dependencies?: (string[] & string[] & { [K_31 in Exclude<keyof I_1["result"]["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_32 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_33 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_34 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_35 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"], keyof {
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
                        } & { [K_36 in Exclude<keyof I_1["result"]["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_37 in Exclude<keyof I_1["result"]["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_38 in Exclude<keyof I_1["result"]["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_39 in Exclude<keyof I_1["result"]["package"]["services"], keyof {
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
                }[]>]: never; }) | undefined;
                messages?: ({
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
                }[] & ({
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
                        } & { [K_40 in Exclude<keyof I_1["result"]["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_41 in Exclude<keyof I_1["result"]["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_42 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_43 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_44 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_45 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_46 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_47 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"], keyof {
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
                    } & { [K_48 in Exclude<keyof I_1["result"]["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_49 in Exclude<keyof I_1["result"]["package"]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_50 in Exclude<keyof I_1["result"]["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_51 in Exclude<keyof I_1["result"]["package"]["messages"], keyof {
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
                    } & { [K_52 in Exclude<keyof I_1["result"]["package"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_53 in Exclude<keyof I_1["result"]["package"]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
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
                }[] & ({
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
                    } & { [K_54 in Exclude<keyof I_1["result"]["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_55 in Exclude<keyof I_1["result"]["package"]["enums"][number]["values"], keyof {
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
                } & { [K_56 in Exclude<keyof I_1["result"]["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_57 in Exclude<keyof I_1["result"]["package"]["enums"], keyof {
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
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_58 in Exclude<keyof I_1["result"]["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_59 in Exclude<keyof I_1["result"]["package"], keyof SylkPackage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_60 in Exclude<keyof I_1["result"], keyof SylkPackageDisplay>]: never; }) | undefined;
    } & { [K_61 in Exclude<keyof I_1, "result">]: never; }>(object: I_1): GetPackageResponse;
};
export declare const CreatePackageRequest: {
    encode(message: CreatePackageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePackageRequest;
    fromJSON(object: any): CreatePackageRequest;
    toJSON(message: CreatePackageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: {
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        tags?: string[] | undefined;
    } & {
        projectId?: string | undefined;
        package?: ({
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            services?: ({
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
            }[] & ({
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
                dependencies?: (string[] & string[] & { [K in Exclude<keyof I["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                        } & { [K_1 in Exclude<keyof I["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_2 in Exclude<keyof I["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_3 in Exclude<keyof I["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["package"]["services"][number]["methods"], keyof {
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
                    } & { [K_5 in Exclude<keyof I["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["package"]["services"], keyof {
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
            }[]>]: never; }) | undefined;
            messages?: ({
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
            }[] & ({
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
                    } & { [K_9 in Exclude<keyof I["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                    } & { [K_11 in Exclude<keyof I["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_13 in Exclude<keyof I["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_14 in Exclude<keyof I["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_15 in Exclude<keyof I["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_16 in Exclude<keyof I["package"]["messages"][number]["fields"], keyof {
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
                } & { [K_17 in Exclude<keyof I["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_18 in Exclude<keyof I["package"]["messages"][number]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["package"]["messages"], keyof {
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
                } & { [K_21 in Exclude<keyof I["package"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["package"]["extensions"], string | number>]: never; }) | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: ({
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
            }[] & ({
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
                } & { [K_23 in Exclude<keyof I["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_24 in Exclude<keyof I["package"]["enums"][number]["values"], keyof {
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
            } & { [K_25 in Exclude<keyof I["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["package"]["enums"], keyof {
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
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_27 in Exclude<keyof I["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_28 in Exclude<keyof I["package"], keyof SylkPackage>]: never; }) | undefined;
        tags?: (string[] & string[] & { [K_29 in Exclude<keyof I["tags"], keyof string[]>]: never; }) | undefined;
    } & { [K_30 in Exclude<keyof I, keyof CreatePackageRequest>]: never; }>(base?: I | undefined): CreatePackageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: {
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        tags?: string[] | undefined;
    } & {
        projectId?: string | undefined;
        package?: ({
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            services?: ({
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
            }[] & ({
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
                dependencies?: (string[] & string[] & { [K_31 in Exclude<keyof I_1["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                        } & { [K_32 in Exclude<keyof I_1["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_33 in Exclude<keyof I_1["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_34 in Exclude<keyof I_1["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_35 in Exclude<keyof I_1["package"]["services"][number]["methods"], keyof {
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
                    } & { [K_36 in Exclude<keyof I_1["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_38 in Exclude<keyof I_1["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_39 in Exclude<keyof I_1["package"]["services"], keyof {
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
            }[]>]: never; }) | undefined;
            messages?: ({
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
            }[] & ({
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
                    } & { [K_40 in Exclude<keyof I_1["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_41 in Exclude<keyof I_1["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                    } & { [K_42 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_43 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_44 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_45 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_46 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_47 in Exclude<keyof I_1["package"]["messages"][number]["fields"], keyof {
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
                } & { [K_48 in Exclude<keyof I_1["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_49 in Exclude<keyof I_1["package"]["messages"][number]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_50 in Exclude<keyof I_1["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_51 in Exclude<keyof I_1["package"]["messages"], keyof {
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
                } & { [K_52 in Exclude<keyof I_1["package"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_53 in Exclude<keyof I_1["package"]["extensions"], string | number>]: never; }) | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: ({
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
            }[] & ({
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
                } & { [K_54 in Exclude<keyof I_1["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_55 in Exclude<keyof I_1["package"]["enums"][number]["values"], keyof {
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
            } & { [K_56 in Exclude<keyof I_1["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_57 in Exclude<keyof I_1["package"]["enums"], keyof {
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
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_58 in Exclude<keyof I_1["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_59 in Exclude<keyof I_1["package"], keyof SylkPackage>]: never; }) | undefined;
        tags?: (string[] & string[] & { [K_60 in Exclude<keyof I_1["tags"], keyof string[]>]: never; }) | undefined;
    } & { [K_61 in Exclude<keyof I_1, keyof CreatePackageRequest>]: never; }>(object: I_1): CreatePackageRequest;
};
export declare const CreatePackageResponse: {
    encode(message: CreatePackageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePackageResponse;
    fromJSON(object: any): CreatePackageResponse;
    toJSON(message: CreatePackageResponse): unknown;
    create<I extends {
        projectId?: string | undefined;
        result?: {
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        result?: ({
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            package?: ({
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                }[] & ({
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
                    dependencies?: (string[] & string[] & { [K in Exclude<keyof I["result"]["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_1 in Exclude<keyof I["result"]["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_2 in Exclude<keyof I["result"]["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["result"]["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["result"]["package"]["services"][number]["methods"], keyof {
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
                        } & { [K_5 in Exclude<keyof I["result"]["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_6 in Exclude<keyof I["result"]["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_7 in Exclude<keyof I["result"]["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["result"]["package"]["services"], keyof {
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
                }[]>]: never; }) | undefined;
                messages?: ({
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
                }[] & ({
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
                        } & { [K_9 in Exclude<keyof I["result"]["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_10 in Exclude<keyof I["result"]["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_11 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_13 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_14 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_15 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_16 in Exclude<keyof I["result"]["package"]["messages"][number]["fields"], keyof {
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
                    } & { [K_17 in Exclude<keyof I["result"]["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_18 in Exclude<keyof I["result"]["package"]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I["result"]["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["result"]["package"]["messages"], keyof {
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
                    } & { [K_21 in Exclude<keyof I["result"]["package"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["result"]["package"]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
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
                }[] & ({
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
                    } & { [K_23 in Exclude<keyof I["result"]["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_24 in Exclude<keyof I["result"]["package"]["enums"][number]["values"], keyof {
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
                } & { [K_25 in Exclude<keyof I["result"]["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["result"]["package"]["enums"], keyof {
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
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_27 in Exclude<keyof I["result"]["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_28 in Exclude<keyof I["result"]["package"], keyof SylkPackage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_29 in Exclude<keyof I["result"], keyof SylkPackageDisplay>]: never; }) | undefined;
    } & { [K_30 in Exclude<keyof I, keyof CreatePackageResponse>]: never; }>(base?: I | undefined): CreatePackageResponse;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        result?: {
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        result?: ({
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            package?: ({
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                }[] & ({
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
                    dependencies?: (string[] & string[] & { [K_31 in Exclude<keyof I_1["result"]["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_32 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_33 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_34 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_35 in Exclude<keyof I_1["result"]["package"]["services"][number]["methods"], keyof {
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
                        } & { [K_36 in Exclude<keyof I_1["result"]["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_37 in Exclude<keyof I_1["result"]["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_38 in Exclude<keyof I_1["result"]["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_39 in Exclude<keyof I_1["result"]["package"]["services"], keyof {
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
                }[]>]: never; }) | undefined;
                messages?: ({
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
                }[] & ({
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
                        } & { [K_40 in Exclude<keyof I_1["result"]["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_41 in Exclude<keyof I_1["result"]["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_42 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_43 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_44 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_45 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_46 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_47 in Exclude<keyof I_1["result"]["package"]["messages"][number]["fields"], keyof {
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
                    } & { [K_48 in Exclude<keyof I_1["result"]["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_49 in Exclude<keyof I_1["result"]["package"]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_50 in Exclude<keyof I_1["result"]["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_51 in Exclude<keyof I_1["result"]["package"]["messages"], keyof {
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
                    } & { [K_52 in Exclude<keyof I_1["result"]["package"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_53 in Exclude<keyof I_1["result"]["package"]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
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
                }[] & ({
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
                    } & { [K_54 in Exclude<keyof I_1["result"]["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_55 in Exclude<keyof I_1["result"]["package"]["enums"][number]["values"], keyof {
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
                } & { [K_56 in Exclude<keyof I_1["result"]["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_57 in Exclude<keyof I_1["result"]["package"]["enums"], keyof {
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
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_58 in Exclude<keyof I_1["result"]["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_59 in Exclude<keyof I_1["result"]["package"], keyof SylkPackage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_60 in Exclude<keyof I_1["result"], keyof SylkPackageDisplay>]: never; }) | undefined;
    } & { [K_61 in Exclude<keyof I_1, keyof CreatePackageResponse>]: never; }>(object: I_1): CreatePackageResponse;
};
export declare const DeletePackageRequest: {
    encode(message: DeletePackageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeletePackageRequest;
    fromJSON(object: any): DeletePackageRequest;
    toJSON(message: DeletePackageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeletePackageRequest>]: never; }>(base?: I | undefined): DeletePackageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeletePackageRequest>]: never; }>(object: I_1): DeletePackageRequest;
};
export declare const UpdatePackageRequest: {
    encode(message: UpdatePackageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePackageRequest;
    fromJSON(object: any): UpdatePackageRequest;
    toJSON(message: UpdatePackageRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        update?: {
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        update?: ({
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            services?: ({
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
            }[] & ({
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
                dependencies?: (string[] & string[] & { [K in Exclude<keyof I["update"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                        } & { [K_1 in Exclude<keyof I["update"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_2 in Exclude<keyof I["update"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_3 in Exclude<keyof I["update"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["update"]["services"][number]["methods"], keyof {
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
                    } & { [K_5 in Exclude<keyof I["update"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["update"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I["update"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["update"]["services"], keyof {
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
            }[]>]: never; }) | undefined;
            messages?: ({
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
            }[] & ({
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
                    } & { [K_9 in Exclude<keyof I["update"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["update"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                    } & { [K_11 in Exclude<keyof I["update"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I["update"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_13 in Exclude<keyof I["update"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_14 in Exclude<keyof I["update"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_15 in Exclude<keyof I["update"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_16 in Exclude<keyof I["update"]["messages"][number]["fields"], keyof {
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
                } & { [K_17 in Exclude<keyof I["update"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_18 in Exclude<keyof I["update"]["messages"][number]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I["update"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["update"]["messages"], keyof {
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
                } & { [K_21 in Exclude<keyof I["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["update"]["extensions"], string | number>]: never; }) | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: ({
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
            }[] & ({
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
                } & { [K_23 in Exclude<keyof I["update"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_24 in Exclude<keyof I["update"]["enums"][number]["values"], keyof {
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
            } & { [K_25 in Exclude<keyof I["update"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["update"]["enums"], keyof {
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
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_27 in Exclude<keyof I["update"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_28 in Exclude<keyof I["update"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I, keyof UpdatePackageRequest>]: never; }>(base?: I | undefined): UpdatePackageRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        update?: {
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        update?: ({
            services?: {
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
            }[] | undefined;
            messages?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
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
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            services?: ({
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
            }[] & ({
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
                dependencies?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["update"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                        } & { [K_31 in Exclude<keyof I_1["update"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_32 in Exclude<keyof I_1["update"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_33 in Exclude<keyof I_1["update"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_34 in Exclude<keyof I_1["update"]["services"][number]["methods"], keyof {
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
                    } & { [K_35 in Exclude<keyof I_1["update"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_36 in Exclude<keyof I_1["update"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_37 in Exclude<keyof I_1["update"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_38 in Exclude<keyof I_1["update"]["services"], keyof {
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
            }[]>]: never; }) | undefined;
            messages?: ({
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
            }[] & ({
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
                    } & { [K_39 in Exclude<keyof I_1["update"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["update"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                    } & { [K_41 in Exclude<keyof I_1["update"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_42 in Exclude<keyof I_1["update"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_43 in Exclude<keyof I_1["update"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_44 in Exclude<keyof I_1["update"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_45 in Exclude<keyof I_1["update"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_46 in Exclude<keyof I_1["update"]["messages"][number]["fields"], keyof {
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
                } & { [K_47 in Exclude<keyof I_1["update"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_48 in Exclude<keyof I_1["update"]["messages"][number]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_49 in Exclude<keyof I_1["update"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_50 in Exclude<keyof I_1["update"]["messages"], keyof {
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
                } & { [K_51 in Exclude<keyof I_1["update"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_52 in Exclude<keyof I_1["update"]["extensions"], string | number>]: never; }) | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: ({
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
            }[] & ({
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
                } & { [K_53 in Exclude<keyof I_1["update"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_54 in Exclude<keyof I_1["update"]["enums"][number]["values"], keyof {
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
            } & { [K_55 in Exclude<keyof I_1["update"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_56 in Exclude<keyof I_1["update"]["enums"], keyof {
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
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_57 in Exclude<keyof I_1["update"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_58 in Exclude<keyof I_1["update"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_59 in Exclude<keyof I_1, keyof UpdatePackageRequest>]: never; }>(object: I_1): UpdatePackageRequest;
};
export declare const UpdatePackageResponse: {
    encode(message: UpdatePackageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePackageResponse;
    fromJSON(object: any): UpdatePackageResponse;
    toJSON(message: UpdatePackageResponse): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        updated?: {
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        updated?: ({
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            package?: ({
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                }[] & ({
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
                    dependencies?: (string[] & string[] & { [K in Exclude<keyof I["updated"]["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_1 in Exclude<keyof I["updated"]["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_2 in Exclude<keyof I["updated"]["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["updated"]["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["updated"]["package"]["services"][number]["methods"], keyof {
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
                        } & { [K_5 in Exclude<keyof I["updated"]["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_6 in Exclude<keyof I["updated"]["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_7 in Exclude<keyof I["updated"]["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["updated"]["package"]["services"], keyof {
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
                }[]>]: never; }) | undefined;
                messages?: ({
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
                }[] & ({
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
                        } & { [K_9 in Exclude<keyof I["updated"]["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_10 in Exclude<keyof I["updated"]["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_11 in Exclude<keyof I["updated"]["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I["updated"]["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_13 in Exclude<keyof I["updated"]["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_14 in Exclude<keyof I["updated"]["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_15 in Exclude<keyof I["updated"]["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_16 in Exclude<keyof I["updated"]["package"]["messages"][number]["fields"], keyof {
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
                    } & { [K_17 in Exclude<keyof I["updated"]["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_18 in Exclude<keyof I["updated"]["package"]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I["updated"]["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["updated"]["package"]["messages"], keyof {
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
                    } & { [K_21 in Exclude<keyof I["updated"]["package"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["updated"]["package"]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
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
                }[] & ({
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
                    } & { [K_23 in Exclude<keyof I["updated"]["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_24 in Exclude<keyof I["updated"]["package"]["enums"][number]["values"], keyof {
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
                } & { [K_25 in Exclude<keyof I["updated"]["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["updated"]["package"]["enums"], keyof {
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
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_27 in Exclude<keyof I["updated"]["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_28 in Exclude<keyof I["updated"]["package"], keyof SylkPackage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_29 in Exclude<keyof I["updated"], keyof SylkPackageDisplay>]: never; }) | undefined;
    } & { [K_30 in Exclude<keyof I, keyof UpdatePackageResponse>]: never; }>(base?: I | undefined): UpdatePackageResponse;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        updated?: {
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        updated?: ({
            package?: {
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            package?: ({
                services?: {
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
                }[] | undefined;
                messages?: {
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
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
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
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                }[] & ({
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
                    dependencies?: (string[] & string[] & { [K_31 in Exclude<keyof I_1["updated"]["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_32 in Exclude<keyof I_1["updated"]["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_33 in Exclude<keyof I_1["updated"]["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_34 in Exclude<keyof I_1["updated"]["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_35 in Exclude<keyof I_1["updated"]["package"]["services"][number]["methods"], keyof {
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
                        } & { [K_36 in Exclude<keyof I_1["updated"]["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_37 in Exclude<keyof I_1["updated"]["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_38 in Exclude<keyof I_1["updated"]["package"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_39 in Exclude<keyof I_1["updated"]["package"]["services"], keyof {
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
                }[]>]: never; }) | undefined;
                messages?: ({
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
                }[] & ({
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
                        } & { [K_40 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_41 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_42 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_43 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_44 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_45 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_46 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_47 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["fields"], keyof {
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
                    } & { [K_48 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_49 in Exclude<keyof I_1["updated"]["package"]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_50 in Exclude<keyof I_1["updated"]["package"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_51 in Exclude<keyof I_1["updated"]["package"]["messages"], keyof {
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
                    } & { [K_52 in Exclude<keyof I_1["updated"]["package"]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_53 in Exclude<keyof I_1["updated"]["package"]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
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
                }[] & ({
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
                    } & { [K_54 in Exclude<keyof I_1["updated"]["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_55 in Exclude<keyof I_1["updated"]["package"]["enums"][number]["values"], keyof {
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
                } & { [K_56 in Exclude<keyof I_1["updated"]["package"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_57 in Exclude<keyof I_1["updated"]["package"]["enums"], keyof {
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
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_58 in Exclude<keyof I_1["updated"]["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_59 in Exclude<keyof I_1["updated"]["package"], keyof SylkPackage>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_60 in Exclude<keyof I_1["updated"], keyof SylkPackageDisplay>]: never; }) | undefined;
    } & { [K_61 in Exclude<keyof I_1, keyof UpdatePackageResponse>]: never; }>(object: I_1): UpdatePackageResponse;
};
export type PackagesService = typeof PackagesService;
export declare const PackagesService: {
    /** [sylk] - None */
    readonly getPackage: {
        readonly path: "/sylk.Packages.v2.Packages/GetPackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPackageRequest;
        readonly responseSerialize: (value: GetPackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetPackageResponse;
    };
    /** [sylk] - None */
    readonly createPackage: {
        readonly path: "/sylk.Packages.v2.Packages/CreatePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePackageRequest;
        readonly responseSerialize: (value: CreatePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreatePackageResponse;
    };
    /** [sylk] - None */
    readonly deletePackage: {
        readonly path: "/sylk.Packages.v2.Packages/DeletePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeletePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeletePackageRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** [sylk] - None */
    readonly updatePackage: {
        readonly path: "/sylk.Packages.v2.Packages/UpdatePackage";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePackageRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePackageRequest;
        readonly responseSerialize: (value: UpdatePackageResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdatePackageResponse;
    };
};
export interface PackagesServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getPackage: handleUnaryCall<GetPackageRequest, GetPackageResponse>;
    /** [sylk] - None */
    createPackage: handleUnaryCall<CreatePackageRequest, CreatePackageResponse>;
    /** [sylk] - None */
    deletePackage: handleUnaryCall<DeletePackageRequest, Empty>;
    /** [sylk] - None */
    updatePackage: handleUnaryCall<UpdatePackageRequest, UpdatePackageResponse>;
}
export interface PackagesClient extends Client {
    /** [sylk] - None */
    getPackage(request: GetPackageRequest, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    getPackage(request: GetPackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    getPackage(request: GetPackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetPackageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    createPackage(request: CreatePackageRequest, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    createPackage(request: CreatePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    createPackage(request: CreatePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreatePackageResponse) => void): ClientUnaryCall;
    /** [sylk] - None */
    deletePackage(request: DeletePackageRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deletePackage(request: DeletePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deletePackage(request: DeletePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** [sylk] - None */
    updatePackage(request: UpdatePackageRequest, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    updatePackage(request: UpdatePackageRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
    updatePackage(request: UpdatePackageRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdatePackageResponse) => void): ClientUnaryCall;
}
export declare const PackagesClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PackagesClient;
    service: typeof PackagesService;
};
