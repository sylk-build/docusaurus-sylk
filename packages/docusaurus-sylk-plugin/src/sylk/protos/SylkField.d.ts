import _m0 from "protobufjs/minimal";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkField.v1.SylkFieldTypes] - */
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
/** [sylk.SylkField.v1.SylkFieldLabels] - */
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
/** [sylk.SylkField.v1.SylkOneOfField] - */
export interface SylkOneOfField {
    /** [sylk.SylkField.v1.SylkOneOfField.uri] - */
    uri: string;
    /** [sylk.SylkField.v1.SylkOneOfField.name] - */
    name: string;
    /** [sylk.SylkField.v1.SylkOneOfField.full_name] - */
    fullName: string;
    /** [sylk.SylkField.v1.SylkOneOfField.description] - */
    description: string;
    /** [sylk.SylkField.v1.SylkOneOfField.field_type] - */
    fieldType: SylkFieldTypes;
    /** [sylk.SylkField.v1.SylkOneOfField.label] - */
    label: SylkFieldLabels;
    /** [sylk.SylkField.v1.SylkOneOfField.message_type] - */
    messageType: string;
    /** [sylk.SylkField.v1.SylkOneOfField.enum_type] - */
    enumType: string;
}
/** [sylk.SylkField.v1.SylkField] - */
export interface SylkField {
    /** [sylk.SylkField.v1.SylkField.uri] - */
    uri: string;
    /** [sylk.SylkField.v1.SylkField.name] - */
    name: string;
    /** [sylk.SylkField.v1.SylkField.full_name] - */
    fullName: string;
    /** [sylk.SylkField.v1.SylkField.description] - */
    description: string;
    /** [sylk.SylkField.v1.SylkField.field_type] - */
    fieldType: SylkFieldTypes;
    /** [sylk.SylkField.v1.SylkField.label] - */
    label: SylkFieldLabels;
    /** [sylk.SylkField.v1.SylkField.key_type] - */
    keyType: SylkFieldTypes;
    /** [sylk.SylkField.v1.SylkField.value_type] - */
    valueType: SylkFieldTypes;
    /** [sylk.SylkField.v1.SylkField.message_type] - */
    messageType: string;
    /** [sylk.SylkField.v1.SylkField.enum_type] - */
    enumType: string;
    /** [sylk.SylkField.v1.SylkField.type] - */
    type: string;
    /** [sylk.SylkField.v1.SylkField.kind] - */
    kind: string;
    /** [sylk.SylkField.v1.SylkField.index] - */
    index: number;
    /** [sylk.SylkField.v1.SylkField.extensions] - */
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
    /** [sylk.SylkField.v1.SylkField.oneof_fields] - */
    oneofFields: SylkOneOfField[];
}
export interface SylkField_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkField.v1.SylkFieldDisplay] - */
export interface SylkFieldDisplay {
    /** [sylk.SylkField.v1.SylkFieldDisplay.field] - */
    field?: SylkField;
    /** [sylk.SylkField.v1.SylkFieldDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkField.v1.SylkFieldDisplay.updated_at] - */
    updatedAt?: Date;
}
export declare const SylkOneOfField: {
    encode(message: SylkOneOfField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkOneOfField;
    fromJSON(object: any): SylkOneOfField;
    toJSON(message: SylkOneOfField): unknown;
    create<I extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        messageType?: string | undefined;
        enumType?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        messageType?: string | undefined;
        enumType?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkOneOfField>]: never; }>(base?: I | undefined): SylkOneOfField;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        messageType?: string | undefined;
        enumType?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        messageType?: string | undefined;
        enumType?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkOneOfField>]: never; }>(object: I_1): SylkOneOfField;
};
export declare const SylkField: {
    encode(message: SylkField, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkField;
    fromJSON(object: any): SylkField;
    toJSON(message: SylkField): unknown;
    create<I extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
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
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        }[] | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
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
            } & { [K in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
        oneofFields?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        } & { [K_2 in Exclude<keyof I["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["oneofFields"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof SylkField>]: never; }>(base?: I | undefined): SylkField;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
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
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        }[] | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        fieldType?: SylkFieldTypes | undefined;
        label?: SylkFieldLabels | undefined;
        keyType?: SylkFieldTypes | undefined;
        valueType?: SylkFieldTypes | undefined;
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
            } & { [K_5 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
        oneofFields?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_8 in Exclude<keyof I_1["oneofFields"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            messageType?: string | undefined;
            enumType?: string | undefined;
        }[]>]: never; }) | undefined;
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
        field?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        field?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                } & { [K in Exclude<keyof I["field"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["field"]["extensions"], string | number>]: never; }) | undefined;
            oneofFields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & { [K_2 in Exclude<keyof I["field"]["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["field"]["oneofFields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["field"], keyof SylkField>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SylkFieldDisplay>]: never; }>(base?: I | undefined): SylkFieldDisplay;
    fromPartial<I_1 extends {
        field?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        field?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fieldType?: SylkFieldTypes | undefined;
            label?: SylkFieldLabels | undefined;
            keyType?: SylkFieldTypes | undefined;
            valueType?: SylkFieldTypes | undefined;
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
                } & { [K_6 in Exclude<keyof I_1["field"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I_1["field"]["extensions"], string | number>]: never; }) | undefined;
            oneofFields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            } & { [K_8 in Exclude<keyof I_1["field"]["oneofFields"][number], keyof SylkOneOfField>]: never; })[] & { [K_9 in Exclude<keyof I_1["field"]["oneofFields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: SylkFieldTypes | undefined;
                label?: SylkFieldLabels | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["field"], keyof SylkField>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof SylkFieldDisplay>]: never; }>(object: I_1): SylkFieldDisplay;
};
