import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkField.v1.SylkFieldTypes] - None */
export declare enum SylkFieldTypes {
    /** DEFAULT_SYLKFIELDTYPES - [sylk.SylkField.v1.SylkFieldTypes] - Default enum value for "sylk.SylkField.v1.SylkFieldTypes" */
    DEFAULT_SYLKFIELDTYPES = 0,
    /** TYPE_DOUBLE - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_DOUBLE = 1,
    /** TYPE_FLOAT - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_FLOAT = 2,
    /** TYPE_INT64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_INT64 = 3,
    /** TYPE_UINT64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_UINT64 = 4,
    /** TYPE_INT32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_INT32 = 5,
    /** TYPE_FIXED64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_FIXED64 = 6,
    /** TYPE_FIXED32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_FIXED32 = 7,
    /** TYPE_BOOL - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_BOOL = 8,
    /** TYPE_STRING - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_STRING = 9,
    /** TYPE_GROUP - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_GROUP = 10,
    /** TYPE_MESSAGE - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_MESSAGE = 11,
    /** TYPE_BYTES - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_BYTES = 12,
    /** TYPE_UINT32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_UINT32 = 13,
    /** TYPE_ENUM - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_ENUM = 14,
    /** TYPE_SFIXED32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_SFIXED32 = 15,
    /** TYPE_SFIXED64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_SFIXED64 = 16,
    /** TYPE_SINT32 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_SINT32 = 17,
    /** TYPE_SINT64 - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_SINT64 = 18,
    /** TYPE_MAP - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_MAP = 19,
    /** TYPE_ONEOF - [sylk.SylkField.v1.SylkFieldTypes] - None */
    TYPE_ONEOF = 20,
    UNRECOGNIZED = -1
}
export declare function sylkFieldTypesFromJSON(object: any): SylkFieldTypes;
export declare function sylkFieldTypesToJSON(object: SylkFieldTypes): string;
/** [sylk.SylkField.v1.SylkFieldLabels] - None */
export declare enum SylkFieldLabels {
    /** DEFAULT_SYLKFIELDLABELS - [sylk.SylkField.v1.SylkFieldLabels] - Default enum value for "sylk.SylkField.v1.SylkFieldLabels" */
    DEFAULT_SYLKFIELDLABELS = 0,
    /** LABEL_OPTIONAL - [sylk.SylkField.v1.SylkFieldLabels] - None */
    LABEL_OPTIONAL = 1,
    /** LABEL_REQUIRED - [sylk.SylkField.v1.SylkFieldLabels] - None */
    LABEL_REQUIRED = 2,
    /** LABEL_REPEATED - [sylk.SylkField.v1.SylkFieldLabels] - None */
    LABEL_REPEATED = 3,
    UNRECOGNIZED = -1
}
export declare function sylkFieldLabelsFromJSON(object: any): SylkFieldLabels;
export declare function sylkFieldLabelsToJSON(object: SylkFieldLabels): string;
/** [sylk.SylkField.v1.SylkOneOfField] - None */
export interface SylkOneOfField {
    enumType: string;
    fullName: string;
    uri: string;
    messageType: string;
    fieldType: SylkFieldTypes;
    name: string;
    description: string;
    label: SylkFieldLabels;
    index: number;
    kind: string;
}
/** [sylk.SylkField.v1.SylkField] - None */
export interface SylkField {
    type: string;
    uri: string;
    oneofFields: SylkOneOfField[];
    name: string;
    description: string;
    enumType: string;
    fieldType: SylkFieldTypes;
    messageType: string;
    kind: string;
    fullName: string;
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
    index: number;
    label: SylkFieldLabels;
    keyType: SylkFieldTypes;
    valueType: SylkFieldTypes;
}
export interface SylkField_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkField.v1.SylkFieldDisplay] - None */
export interface SylkFieldDisplay {
    createdAt?: Date;
    field?: SylkField;
    updatedAt?: Date;
    id: string;
}
export declare const SylkOneOfField: {
    encode(message: SylkOneOfField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkOneOfField;
    fromJSON(object: any): SylkOneOfField;
    toJSON(message: SylkOneOfField): unknown;
    create<I extends {
        enumType?: string | undefined;
        fullName?: string | undefined;
        uri?: string | undefined;
        messageType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        name?: string | undefined;
        description?: string | undefined;
        label?: SylkFieldLabels | undefined;
        index?: number | undefined;
        kind?: string | undefined;
    } & {
        enumType?: string | undefined;
        fullName?: string | undefined;
        uri?: string | undefined;
        messageType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        name?: string | undefined;
        description?: string | undefined;
        label?: SylkFieldLabels | undefined;
        index?: number | undefined;
        kind?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkOneOfField>]: never; }>(base?: I | undefined): SylkOneOfField;
    fromPartial<I_1 extends {
        enumType?: string | undefined;
        fullName?: string | undefined;
        uri?: string | undefined;
        messageType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        name?: string | undefined;
        description?: string | undefined;
        label?: SylkFieldLabels | undefined;
        index?: number | undefined;
        kind?: string | undefined;
    } & {
        enumType?: string | undefined;
        fullName?: string | undefined;
        uri?: string | undefined;
        messageType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        name?: string | undefined;
        description?: string | undefined;
        label?: SylkFieldLabels | undefined;
        index?: number | undefined;
        kind?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkOneOfField>]: never; }>(object: I_1): SylkOneOfField;
};
export declare const SylkField: {
    encode(message: SylkField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkField;
    fromJSON(object: any): SylkField;
    toJSON(message: SylkField): unknown;
    create<I extends {
        type?: string | undefined;
        uri?: string | undefined;
        oneofFields?: {
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        }[] | undefined;
        name?: string | undefined;
        description?: string | undefined;
        enumType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        messageType?: string | undefined;
        kind?: string | undefined;
        fullName?: string | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
        index?: number | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
    } & {
        type?: string | undefined;
        uri?: string | undefined;
        oneofFields?: ({
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        }[] & ({
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        } & {
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        } & { [K in Exclude<keyof I["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_1 in Exclude<keyof I["oneofFields"], keyof {
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        }[]>]: never; }) | undefined;
        name?: string | undefined;
        description?: string | undefined;
        enumType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
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
            } & { [K_2 in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
        index?: number | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
    } & { [K_4 in Exclude<keyof I, keyof SylkField>]: never; }>(base?: I | undefined): SylkField;
    fromPartial<I_1 extends {
        type?: string | undefined;
        uri?: string | undefined;
        oneofFields?: {
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        }[] | undefined;
        name?: string | undefined;
        description?: string | undefined;
        enumType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        messageType?: string | undefined;
        kind?: string | undefined;
        fullName?: string | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
        index?: number | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
    } & {
        type?: string | undefined;
        uri?: string | undefined;
        oneofFields?: ({
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        }[] & ({
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        } & {
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_6 in Exclude<keyof I_1["oneofFields"], keyof {
            enumType?: string | undefined;
            fullName?: string | undefined;
            uri?: string | undefined;
            messageType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            name?: string | undefined;
            description?: string | undefined;
            label?: SylkFieldLabels | undefined;
            index?: number | undefined;
            kind?: string | undefined;
        }[]>]: never; }) | undefined;
        name?: string | undefined;
        description?: string | undefined;
        enumType?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
        index?: number | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof SylkField>]: never; }>(object: I_1): SylkField;
};
export declare const SylkField_ExtensionsEntry: {
    encode(message: SylkField_ExtensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkField_ExtensionsEntry;
    fromJSON(object: any): SylkField_ExtensionsEntry;
    toJSON(message: SylkField_ExtensionsEntry): unknown;
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
    } & { [K_1 in Exclude<keyof I, keyof SylkField_ExtensionsEntry>]: never; }>(base?: I | undefined): SylkField_ExtensionsEntry;
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
    } & { [K_3 in Exclude<keyof I_1, keyof SylkField_ExtensionsEntry>]: never; }>(object: I_1): SylkField_ExtensionsEntry;
};
export declare const SylkFieldDisplay: {
    encode(message: SylkFieldDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkFieldDisplay;
    fromJSON(object: any): SylkFieldDisplay;
    toJSON(message: SylkFieldDisplay): unknown;
    create<I extends {
        createdAt?: Date | undefined;
        field?: {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
        } & {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] & ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & { [K in Exclude<keyof I["field"]["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_1 in Exclude<keyof I["field"]["oneofFields"], keyof {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
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
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
        } & { [K_4 in Exclude<keyof I["field"], keyof SylkField>]: never; }) | undefined;
        updatedAt?: Date | undefined;
        id?: string | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SylkFieldDisplay>]: never; }>(base?: I | undefined): SylkFieldDisplay;
    fromPartial<I_1 extends {
        createdAt?: Date | undefined;
        field?: {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            messageType?: string | undefined;
            kind?: string | undefined;
            fullName?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            index?: number | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
        } & {
            type?: string | undefined;
            uri?: string | undefined;
            oneofFields?: ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[] & ({
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["field"]["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_7 in Exclude<keyof I_1["field"]["oneofFields"], keyof {
                enumType?: string | undefined;
                fullName?: string | undefined;
                uri?: string | undefined;
                messageType?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                name?: string | undefined;
                description?: string | undefined;
                label?: SylkFieldLabels | undefined;
                index?: number | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            enumType?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
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
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
        } & { [K_10 in Exclude<keyof I_1["field"], keyof SylkField>]: never; }) | undefined;
        updatedAt?: Date | undefined;
        id?: string | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof SylkFieldDisplay>]: never; }>(object: I_1): SylkFieldDisplay;
};
