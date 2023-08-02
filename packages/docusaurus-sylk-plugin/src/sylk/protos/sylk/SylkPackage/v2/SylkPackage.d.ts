/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { SylkEnum } from "../../SylkEnum/v2/SylkEnum";
import { SylkMessage } from "../../SylkMessage/v2/SylkMessage";
import { SylkService } from "../../SylkService/v2/SylkService";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkPackage.v2.SylkPackage] - None */
export interface SylkPackage {
    services: SylkService[];
    messages: SylkMessage[];
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
    type: string;
    description: string;
    enums: SylkEnum[];
    package: string;
    dependencies: string[];
    name: string;
    uri: string;
}
export interface SylkPackage_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkPackage.v2.SylkPackageDisplay] - None */
export interface SylkPackageDisplay {
    package?: SylkPackage;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const SylkPackage: {
    encode(message: SylkPackage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkPackage;
    fromJSON(object: any): SylkPackage;
    toJSON(message: SylkPackage): unknown;
    create<I extends {
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
            dependencies?: (string[] & string[] & { [K in Exclude<keyof I["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_1 in Exclude<keyof I["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_3 in Exclude<keyof I["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["services"][number]["methods"], keyof {
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
                } & { [K_5 in Exclude<keyof I["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["services"][number]["extensions"], string | number>]: never; }) | undefined;
            tag?: string | undefined;
        } & { [K_7 in Exclude<keyof I["services"][number], keyof SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["services"], keyof {
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
                } & { [K_9 in Exclude<keyof I["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                } & { [K_11 in Exclude<keyof I["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I["messages"][number]["fields"][number]["oneofFields"], keyof {
                    enumType?: string | undefined;
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
                    } & { [K_13 in Exclude<keyof I["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_15 in Exclude<keyof I["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_16 in Exclude<keyof I["messages"][number]["fields"], keyof {
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
            } & { [K_17 in Exclude<keyof I["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_18 in Exclude<keyof I["messages"][number]["inlines"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_19 in Exclude<keyof I["messages"][number], keyof SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["messages"], keyof {
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
            } & { [K_21 in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_22 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
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
            } & { [K_23 in Exclude<keyof I["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_24 in Exclude<keyof I["enums"][number]["values"], keyof {
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
        } & { [K_25 in Exclude<keyof I["enums"][number], keyof SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["enums"], keyof {
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
        dependencies?: (string[] & string[] & { [K_27 in Exclude<keyof I["dependencies"], keyof string[]>]: never; }) | undefined;
        name?: string | undefined;
        uri?: string | undefined;
    } & { [K_28 in Exclude<keyof I, keyof SylkPackage>]: never; }>(base?: I | undefined): SylkPackage;
    fromPartial<I_1 extends {
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
            dependencies?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_30 in Exclude<keyof I_1["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_31 in Exclude<keyof I_1["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_32 in Exclude<keyof I_1["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_33 in Exclude<keyof I_1["services"][number]["methods"], keyof {
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
                } & { [K_34 in Exclude<keyof I_1["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["services"][number]["extensions"], string | number>]: never; }) | undefined;
            tag?: string | undefined;
        } & { [K_36 in Exclude<keyof I_1["services"][number], keyof SylkService>]: never; })[] & { [K_37 in Exclude<keyof I_1["services"], keyof {
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
                } & { [K_38 in Exclude<keyof I_1["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_39 in Exclude<keyof I_1["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                } & { [K_40 in Exclude<keyof I_1["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_41 in Exclude<keyof I_1["messages"][number]["fields"][number]["oneofFields"], keyof {
                    enumType?: string | undefined;
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
                    } & { [K_42 in Exclude<keyof I_1["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_44 in Exclude<keyof I_1["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_45 in Exclude<keyof I_1["messages"][number]["fields"], keyof {
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
            } & { [K_46 in Exclude<keyof I_1["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_47 in Exclude<keyof I_1["messages"][number]["inlines"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_48 in Exclude<keyof I_1["messages"][number], keyof SylkMessage>]: never; })[] & { [K_49 in Exclude<keyof I_1["messages"], keyof {
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
            } & { [K_50 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_51 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
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
            } & { [K_52 in Exclude<keyof I_1["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_53 in Exclude<keyof I_1["enums"][number]["values"], keyof {
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
        } & { [K_54 in Exclude<keyof I_1["enums"][number], keyof SylkEnum>]: never; })[] & { [K_55 in Exclude<keyof I_1["enums"], keyof {
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
        dependencies?: (string[] & string[] & { [K_56 in Exclude<keyof I_1["dependencies"], keyof string[]>]: never; }) | undefined;
        name?: string | undefined;
        uri?: string | undefined;
    } & { [K_57 in Exclude<keyof I_1, keyof SylkPackage>]: never; }>(object: I_1): SylkPackage;
};
export declare const SylkPackage_ExtensionsEntry: {
    encode(message: SylkPackage_ExtensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkPackage_ExtensionsEntry;
    fromJSON(object: any): SylkPackage_ExtensionsEntry;
    toJSON(message: SylkPackage_ExtensionsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            [x: string]: any;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["value"], string | number>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SylkPackage_ExtensionsEntry>]: never; }>(base?: I | undefined): SylkPackage_ExtensionsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            [x: string]: any;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_2 in Exclude<keyof I_1["value"], string | number>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SylkPackage_ExtensionsEntry>]: never; }>(object: I_1): SylkPackage_ExtensionsEntry;
};
export declare const SylkPackageDisplay: {
    encode(message: SylkPackageDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkPackageDisplay;
    fromJSON(object: any): SylkPackageDisplay;
    toJSON(message: SylkPackageDisplay): unknown;
    create<I extends {
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
            } & { [K_7 in Exclude<keyof I["package"]["services"][number], keyof SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["package"]["services"], keyof {
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
            } & { [K_19 in Exclude<keyof I["package"]["messages"][number], keyof SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["package"]["messages"], keyof {
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
            } & { [K_25 in Exclude<keyof I["package"]["enums"][number], keyof SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["package"]["enums"], keyof {
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
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_29 in Exclude<keyof I, keyof SylkPackageDisplay>]: never; }>(base?: I | undefined): SylkPackageDisplay;
    fromPartial<I_1 extends {
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
                dependencies?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["package"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                        } & { [K_31 in Exclude<keyof I_1["package"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_32 in Exclude<keyof I_1["package"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_33 in Exclude<keyof I_1["package"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_34 in Exclude<keyof I_1["package"]["services"][number]["methods"], keyof {
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
                    } & { [K_35 in Exclude<keyof I_1["package"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_36 in Exclude<keyof I_1["package"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_37 in Exclude<keyof I_1["package"]["services"][number], keyof SylkService>]: never; })[] & { [K_38 in Exclude<keyof I_1["package"]["services"], keyof {
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
                    } & { [K_39 in Exclude<keyof I_1["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                    } & { [K_41 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_42 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
                        enumType?: string | undefined;
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
                        } & { [K_43 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_44 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_45 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_46 in Exclude<keyof I_1["package"]["messages"][number]["fields"], keyof {
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
                } & { [K_47 in Exclude<keyof I_1["package"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_48 in Exclude<keyof I_1["package"]["messages"][number]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_49 in Exclude<keyof I_1["package"]["messages"][number], keyof SylkMessage>]: never; })[] & { [K_50 in Exclude<keyof I_1["package"]["messages"], keyof {
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
                } & { [K_51 in Exclude<keyof I_1["package"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_52 in Exclude<keyof I_1["package"]["extensions"], string | number>]: never; }) | undefined;
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
                } & { [K_53 in Exclude<keyof I_1["package"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_54 in Exclude<keyof I_1["package"]["enums"][number]["values"], keyof {
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
            } & { [K_55 in Exclude<keyof I_1["package"]["enums"][number], keyof SylkEnum>]: never; })[] & { [K_56 in Exclude<keyof I_1["package"]["enums"], keyof {
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
            dependencies?: (string[] & string[] & { [K_57 in Exclude<keyof I_1["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_58 in Exclude<keyof I_1["package"], keyof SylkPackage>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_59 in Exclude<keyof I_1, keyof SylkPackageDisplay>]: never; }>(object: I_1): SylkPackageDisplay;
};
