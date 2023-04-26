import _m0 from "protobufjs/minimal";
import { SylkEnumValue } from "./SylkEnumValue";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkEnum.v1.SylkEnum] - */
export interface SylkEnum {
    /** [sylk.SylkEnum.v1.SylkEnum.uri] - */
    uri: string;
    /** [sylk.SylkEnum.v1.SylkEnum.name] - */
    name: string;
    /** [sylk.SylkEnum.v1.SylkEnum.full_name] - */
    fullName: string;
    /** [sylk.SylkEnum.v1.SylkEnum.description] - */
    description: string;
    /** [sylk.SylkEnum.v1.SylkEnum.values] - */
    values: SylkEnumValue[];
    /** [sylk.SylkEnum.v1.SylkEnum.type] - */
    type: string;
    /** [sylk.SylkEnum.v1.SylkEnum.kind] - */
    kind: string;
}
/** [sylk.SylkEnum.v1.SylkEnumDisplay] - */
export interface SylkEnumDisplay {
    /** [sylk.SylkEnum.v1.SylkEnumDisplay.enum] - */
    enum?: SylkEnum;
    /** [sylk.SylkEnum.v1.SylkEnumDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkEnum.v1.SylkEnumDisplay.updated_at] - */
    updatedAt?: Date;
}
export declare const SylkEnum: {
    encode(message: SylkEnum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnum;
    fromJSON(object: any): SylkEnum;
    toJSON(message: SylkEnum): unknown;
    create<I extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        values?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        values?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] & ({
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
        } & { [K in Exclude<keyof I["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["values"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[]>]: never; }) | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkEnum>]: never; }>(base?: I | undefined): SylkEnum;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        values?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        values?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] & ({
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
        } & { [K_3 in Exclude<keyof I_1["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_4 in Exclude<keyof I_1["values"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            index?: number | undefined;
            number?: number | undefined;
            description?: string | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[]>]: never; }) | undefined;
        type?: string | undefined;
        kind?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SylkEnum>]: never; }>(object: I_1): SylkEnum;
};
export declare const SylkEnumDisplay: {
    encode(message: SylkEnumDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnumDisplay;
    fromJSON(object: any): SylkEnumDisplay;
    toJSON(message: SylkEnumDisplay): unknown;
    create<I extends {
        enum?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        enum?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
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
            } & { [K in Exclude<keyof I["enum"]["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["enum"]["values"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & { [K_2 in Exclude<keyof I["enum"], keyof SylkEnum>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SylkEnumDisplay>]: never; }>(base?: I | undefined): SylkEnumDisplay;
    fromPartial<I_1 extends {
        enum?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        enum?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
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
            } & { [K_4 in Exclude<keyof I_1["enum"]["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_5 in Exclude<keyof I_1["enum"]["values"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["enum"], keyof SylkEnum>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof SylkEnumDisplay>]: never; }>(object: I_1): SylkEnumDisplay;
};
