import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkEnumValue.v1.SylkEnumValue] - None */
export interface SylkEnumValue {
    kind: string;
    description: string;
    index: number;
    uri: string;
    name: string;
    number: number;
    fullName: string;
    type: string;
}
/** [sylk.SylkEnumValue.v1.SylkEnumValueDisplay] - None */
export interface SylkEnumValueDisplay {
    enumValue?: SylkEnumValue;
    updatedAt?: Date;
    createdAt?: Date;
}
export declare const SylkEnumValue: {
    encode(message: SylkEnumValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnumValue;
    fromJSON(object: any): SylkEnumValue;
    toJSON(message: SylkEnumValue): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof SylkEnumValue>]: never; }>(base?: I | undefined): SylkEnumValue;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof SylkEnumValue>]: never; }>(object: I_1): SylkEnumValue;
};
export declare const SylkEnumValueDisplay: {
    encode(message: SylkEnumValueDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnumValueDisplay;
    fromJSON(object: any): SylkEnumValueDisplay;
    toJSON(message: SylkEnumValueDisplay): unknown;
    create<I extends {
        enumValue?: {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } | undefined;
        updatedAt?: Date | undefined;
        createdAt?: Date | undefined;
    } & {
        enumValue?: ({
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
        } & { [K in Exclude<keyof I["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
        updatedAt?: Date | undefined;
        createdAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SylkEnumValueDisplay>]: never; }>(base?: I | undefined): SylkEnumValueDisplay;
    fromPartial<I_1 extends {
        enumValue?: {
            kind?: string | undefined;
            description?: string | undefined;
            index?: number | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            number?: number | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
        } | undefined;
        updatedAt?: Date | undefined;
        createdAt?: Date | undefined;
    } & {
        enumValue?: ({
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
        } & { [K_2 in Exclude<keyof I_1["enumValue"], keyof SylkEnumValue>]: never; }) | undefined;
        updatedAt?: Date | undefined;
        createdAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SylkEnumValueDisplay>]: never; }>(object: I_1): SylkEnumValueDisplay;
};
