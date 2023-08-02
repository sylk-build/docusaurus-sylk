import _m0 from "protobufjs/minimal";
import { SylkExtensions } from "../../SylkCommons/v1/SylkCommons";
import { SylkField } from "../../SylkField/v1/SylkField";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkMessage.v1.SylkMessage] - None */
export interface SylkMessage {
    extensionType: SylkExtensions;
    name: string;
    uri: string;
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
    fullName: string;
    type: string;
    description: string;
    kind: string;
    fields: SylkField[];
}
export interface SylkMessage_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkMessage.v1.SylkMessageDisplay] - None */
export interface SylkMessageDisplay {
    updatedAt?: Date;
    message?: SylkMessage;
    createdAt?: Date;
}
export declare const SylkMessage: {
    encode(message: SylkMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMessage;
    fromJSON(object: any): SylkMessage;
    toJSON(message: SylkMessage): unknown;
    create<I extends {
        extensionType?: SylkExtensions | undefined;
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
    } & {
        extensionType?: SylkExtensions | undefined;
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
            } & { [K in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["fields"][number]["oneofFields"], keyof {
                enumType?: string | undefined;
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
                } & { [K_4 in Exclude<keyof I["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["fields"][number]["extensions"], string | number>]: never; }) | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & { [K_6 in Exclude<keyof I["fields"][number], keyof SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["fields"], keyof {
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
    } & { [K_8 in Exclude<keyof I, keyof SylkMessage>]: never; }>(base?: I | undefined): SylkMessage;
    fromPartial<I_1 extends {
        extensionType?: SylkExtensions | undefined;
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
    } & {
        extensionType?: SylkExtensions | undefined;
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
            } & { [K_9 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
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
            } & { [K_11 in Exclude<keyof I_1["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I_1["fields"][number]["oneofFields"], keyof {
                enumType?: string | undefined;
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
                } & { [K_13 in Exclude<keyof I_1["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I_1["fields"][number]["extensions"], string | number>]: never; }) | undefined;
            index?: number | undefined;
            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
            keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
        } & { [K_15 in Exclude<keyof I_1["fields"][number], keyof SylkField>]: never; })[] & { [K_16 in Exclude<keyof I_1["fields"], keyof {
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
    } & { [K_17 in Exclude<keyof I_1, keyof SylkMessage>]: never; }>(object: I_1): SylkMessage;
};
export declare const SylkMessage_ExtensionsEntry: {
    encode(message: SylkMessage_ExtensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMessage_ExtensionsEntry;
    fromJSON(object: any): SylkMessage_ExtensionsEntry;
    toJSON(message: SylkMessage_ExtensionsEntry): unknown;
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
    } & { [K_1 in Exclude<keyof I, keyof SylkMessage_ExtensionsEntry>]: never; }>(base?: I | undefined): SylkMessage_ExtensionsEntry;
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
    } & { [K_3 in Exclude<keyof I_1, keyof SylkMessage_ExtensionsEntry>]: never; }>(object: I_1): SylkMessage_ExtensionsEntry;
};
export declare const SylkMessageDisplay: {
    encode(message: SylkMessageDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMessageDisplay;
    fromJSON(object: any): SylkMessageDisplay;
    toJSON(message: SylkMessageDisplay): unknown;
    create<I extends {
        updatedAt?: Date | undefined;
        message?: {
            extensionType?: SylkExtensions | undefined;
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
        } | undefined;
        createdAt?: Date | undefined;
    } & {
        updatedAt?: Date | undefined;
        message?: ({
            extensionType?: SylkExtensions | undefined;
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
        } & {
            extensionType?: SylkExtensions | undefined;
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
            } & { [K_6 in Exclude<keyof I["message"]["fields"][number], keyof SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["message"]["fields"], keyof {
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
        } & { [K_8 in Exclude<keyof I["message"], keyof SylkMessage>]: never; }) | undefined;
        createdAt?: Date | undefined;
    } & { [K_9 in Exclude<keyof I, keyof SylkMessageDisplay>]: never; }>(base?: I | undefined): SylkMessageDisplay;
    fromPartial<I_1 extends {
        updatedAt?: Date | undefined;
        message?: {
            extensionType?: SylkExtensions | undefined;
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
        } | undefined;
        createdAt?: Date | undefined;
    } & {
        updatedAt?: Date | undefined;
        message?: ({
            extensionType?: SylkExtensions | undefined;
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
        } & {
            extensionType?: SylkExtensions | undefined;
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
                } & { [K_10 in Exclude<keyof I_1["message"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I_1["message"]["extensions"], string | number>]: never; }) | undefined;
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
                } & { [K_12 in Exclude<keyof I_1["message"]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_13 in Exclude<keyof I_1["message"]["fields"][number]["oneofFields"], keyof {
                    enumType?: string | undefined;
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
                    } & { [K_14 in Exclude<keyof I_1["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_15 in Exclude<keyof I_1["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                index?: number | undefined;
                label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
            } & { [K_16 in Exclude<keyof I_1["message"]["fields"][number], keyof SylkField>]: never; })[] & { [K_17 in Exclude<keyof I_1["message"]["fields"], keyof {
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
        } & { [K_18 in Exclude<keyof I_1["message"], keyof SylkMessage>]: never; }) | undefined;
        createdAt?: Date | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof SylkMessageDisplay>]: never; }>(object: I_1): SylkMessageDisplay;
};
