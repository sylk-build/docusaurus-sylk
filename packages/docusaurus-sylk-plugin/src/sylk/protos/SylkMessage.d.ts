import _m0 from "protobufjs/minimal";
import { SylkExtensions } from "./SylkCommons";
import { SylkField } from "./SylkField";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkMessage.v1.SylkMessage] - */
export interface SylkMessage {
    /** [sylk.SylkMessage.v1.SylkMessage.uri] - */
    uri: string;
    /** [sylk.SylkMessage.v1.SylkMessage.name] - */
    name: string;
    /** [sylk.SylkMessage.v1.SylkMessage.full_name] - */
    fullName: string;
    /** [sylk.SylkMessage.v1.SylkMessage.description] - */
    description: string;
    /** [sylk.SylkMessage.v1.SylkMessage.fields] - */
    fields: SylkField[];
    /** [sylk.SylkMessage.v1.SylkMessage.type] - */
    type: string;
    /** [sylk.SylkMessage.v1.SylkMessage.kind] - */
    kind: string;
    /** [sylk.SylkMessage.v1.SylkMessage.extensions] - */
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
    /** [sylk.SylkMessage.v1.SylkMessage.extension_type] - */
    extensionType: SylkExtensions;
}
export interface SylkMessage_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkMessage.v1.SylkMessageDisplay] - */
export interface SylkMessageDisplay {
    /** [sylk.SylkMessage.v1.SylkMessageDisplay.message] - */
    message?: SylkMessage;
    /** [sylk.SylkMessage.v1.SylkMessageDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkMessage.v1.SylkMessageDisplay.updated_at] - */
    updatedAt?: Date;
}
export declare const SylkMessage: {
    encode(message: SylkMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMessage;
    fromJSON(object: any): SylkMessage;
    toJSON(message: SylkMessage): unknown;
    create<I extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fields?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        type?: string | undefined;
        kind?: string | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
        extensionType?: SylkExtensions | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fields?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K in Exclude<keyof I["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["fields"][number]["extensions"], string | number>]: never; }) | undefined;
            oneofFields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & { [K_2 in Exclude<keyof I["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["fields"][number]["oneofFields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["fields"][number], keyof SylkField>]: never; })[] & { [K_5 in Exclude<keyof I["fields"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        type?: string | undefined;
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
            } & { [K_6 in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
        extensionType?: SylkExtensions | undefined;
    } & { [K_8 in Exclude<keyof I, keyof SylkMessage>]: never; }>(base?: I | undefined): SylkMessage;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fields?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        type?: string | undefined;
        kind?: string | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
        extensionType?: SylkExtensions | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fields?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_9 in Exclude<keyof I_1["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I_1["fields"][number]["extensions"], string | number>]: never; }) | undefined;
            oneofFields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & { [K_11 in Exclude<keyof I_1["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I_1["fields"][number]["oneofFields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["fields"][number], keyof SylkField>]: never; })[] & { [K_14 in Exclude<keyof I_1["fields"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
            label?: import("./SylkField").SylkFieldLabels | undefined;
            keyType?: import("./SylkField").SylkFieldTypes | undefined;
            valueType?: import("./SylkField").SylkFieldTypes | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            index?: number | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            oneofFields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        type?: string | undefined;
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
            } & { [K_15 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
        extensionType?: SylkExtensions | undefined;
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
        message?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: SylkExtensions | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        message?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: SylkExtensions | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                oneofFields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & { [K_2 in Exclude<keyof I["message"]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["message"]["fields"][number]["oneofFields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["message"]["fields"][number], keyof SylkField>]: never; })[] & { [K_5 in Exclude<keyof I["message"]["fields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
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
                } & { [K_6 in Exclude<keyof I["message"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["message"]["extensions"], string | number>]: never; }) | undefined;
            extensionType?: SylkExtensions | undefined;
        } & { [K_8 in Exclude<keyof I["message"], keyof SylkMessage>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_9 in Exclude<keyof I, keyof SylkMessageDisplay>]: never; }>(base?: I | undefined): SylkMessageDisplay;
    fromPartial<I_1 extends {
        message?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: SylkExtensions | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        message?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: SylkExtensions | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_10 in Exclude<keyof I_1["message"]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I_1["message"]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                oneofFields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & { [K_12 in Exclude<keyof I_1["message"]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_13 in Exclude<keyof I_1["message"]["fields"][number]["oneofFields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I_1["message"]["fields"][number], keyof SylkField>]: never; })[] & { [K_15 in Exclude<keyof I_1["message"]["fields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
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
                } & { [K_16 in Exclude<keyof I_1["message"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_17 in Exclude<keyof I_1["message"]["extensions"], string | number>]: never; }) | undefined;
            extensionType?: SylkExtensions | undefined;
        } & { [K_18 in Exclude<keyof I_1["message"], keyof SylkMessage>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof SylkMessageDisplay>]: never; }>(object: I_1): SylkMessageDisplay;
};
