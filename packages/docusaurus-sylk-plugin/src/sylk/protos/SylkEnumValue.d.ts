import _m0 from "protobufjs/minimal";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkEnumValue.v1.SylkEnumValue] - */
export interface SylkEnumValue {
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.uri] - */
    uri: string;
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.name] - */
    name: string;
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.full_name] - */
    fullName: string;
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.index] - */
    index: number;
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.number] - */
    number: number;
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.description] - */
    description: string;
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.type] - */
    type: string;
    /** [sylk.SylkEnumValue.v1.SylkEnumValue.kind] - */
    kind: string;
}
/** [sylk.SylkEnumValue.v1.SylkEnumValueDisplay] - */
export interface SylkEnumValueDisplay {
    /** [sylk.SylkEnumValue.v1.SylkEnumValueDisplay.enum_value] - */
    enumValue?: SylkEnumValue;
    /** [sylk.SylkEnumValue.v1.SylkEnumValueDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkEnumValue.v1.SylkEnumValueDisplay.updated_at] - */
    updatedAt?: Date;
}
export declare const SylkEnumValue: {
    encode(message: SylkEnumValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnumValue;
    fromJSON(object: any): SylkEnumValue;
    toJSON(message: SylkEnumValue): unknown;
    create<I extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        index?: number | undefined;
        number?: number | undefined;
        description?: string | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        index?: number | undefined;
        number?: number | undefined;
        description?: string | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkEnumValue>]: never; }>(base?: I | undefined): SylkEnumValue;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        index?: number | undefined;
        number?: number | undefined;
        description?: string | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        index?: number | undefined;
        number?: number | undefined;
        description?: string | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkEnumValue>]: never; }>(object: I_1): SylkEnumValue;
};
export declare const SylkEnumValueDisplay: {
    encode(message: SylkEnumValueDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnumValueDisplay;
    fromJSON(object: any): SylkEnumValueDisplay;
    toJSON(message: SylkEnumValueDisplay): unknown;
    create<I extends {
        enumValue?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        enumValue?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & { [K in Exclude<keyof I["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SylkEnumValueDisplay>]: never; }>(base?: I | undefined): SylkEnumValueDisplay;
    fromPartial<I_1 extends {
        enumValue?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        enumValue?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SylkEnumValueDisplay>]: never; }>(object: I_1): SylkEnumValueDisplay;
};
