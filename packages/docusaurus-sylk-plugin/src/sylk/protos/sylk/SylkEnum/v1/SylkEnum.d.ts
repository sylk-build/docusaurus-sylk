import _m0 from "protobufjs/minimal";
import { SylkEnumValue } from "../../SylkEnumValue/v1/SylkEnumValue";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkEnum.v1.SylkEnum] - None */
export interface SylkEnum {
    type: string;
    kind: string;
    description: string;
    values: SylkEnumValue[];
    name: string;
    uri: string;
    fullName: string;
}
/** [sylk.SylkEnum.v1.SylkEnumDisplay] - None */
export interface SylkEnumDisplay {
    updatedAt?: Date;
    enum?: SylkEnum;
    createdAt?: Date;
}
export declare const SylkEnum: {
    encode(message: SylkEnum, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnum;
    fromJSON(object: any): SylkEnum;
    toJSON(message: SylkEnum): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["values"], keyof {
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
    } & { [K_2 in Exclude<keyof I, keyof SylkEnum>]: never; }>(base?: I | undefined): SylkEnum;
    fromPartial<I_1 extends {
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
        } & { [K_3 in Exclude<keyof I_1["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_4 in Exclude<keyof I_1["values"], keyof {
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
    } & { [K_5 in Exclude<keyof I_1, keyof SylkEnum>]: never; }>(object: I_1): SylkEnum;
};
export declare const SylkEnumDisplay: {
    encode(message: SylkEnumDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkEnumDisplay;
    fromJSON(object: any): SylkEnumDisplay;
    toJSON(message: SylkEnumDisplay): unknown;
    create<I extends {
        updatedAt?: Date | undefined;
        enum?: {
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
        } | undefined;
        createdAt?: Date | undefined;
    } & {
        updatedAt?: Date | undefined;
        enum?: ({
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
            } & { [K in Exclude<keyof I["enum"]["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_1 in Exclude<keyof I["enum"]["values"], keyof {
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
        } & { [K_2 in Exclude<keyof I["enum"], keyof SylkEnum>]: never; }) | undefined;
        createdAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SylkEnumDisplay>]: never; }>(base?: I | undefined): SylkEnumDisplay;
    fromPartial<I_1 extends {
        updatedAt?: Date | undefined;
        enum?: {
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
        } | undefined;
        createdAt?: Date | undefined;
    } & {
        updatedAt?: Date | undefined;
        enum?: ({
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
            } & { [K_4 in Exclude<keyof I_1["enum"]["values"][number], keyof SylkEnumValue>]: never; })[] & { [K_5 in Exclude<keyof I_1["enum"]["values"], keyof {
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
        } & { [K_6 in Exclude<keyof I_1["enum"], keyof SylkEnum>]: never; }) | undefined;
        createdAt?: Date | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof SylkEnumDisplay>]: never; }>(object: I_1): SylkEnumDisplay;
};
