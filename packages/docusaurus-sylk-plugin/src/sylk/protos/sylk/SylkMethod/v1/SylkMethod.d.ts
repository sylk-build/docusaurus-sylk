import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkMethod.v1.SylkMethod] - None */
export interface SylkMethod {
    clientStreaming: boolean;
    fullName: string;
    type: string;
    name: string;
    serverStreaming: boolean;
    description: string;
    kind: string;
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
    inputType: string;
    outputType: string;
    uri: string;
}
export interface SylkMethod_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkMethod.v1.SylkMethodDisplay] - None */
export interface SylkMethodDisplay {
    createdAt?: Date;
    method?: SylkMethod;
    updatedAt?: Date;
    id: string;
}
export declare const SylkMethod: {
    encode(message: SylkMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMethod;
    fromJSON(object: any): SylkMethod;
    toJSON(message: SylkMethod): unknown;
    create<I extends {
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
            } & { [K in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
        inputType?: string | undefined;
        outputType?: string | undefined;
        uri?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkMethod>]: never; }>(base?: I | undefined): SylkMethod;
    fromPartial<I_1 extends {
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
            } & { [K_3 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
        inputType?: string | undefined;
        outputType?: string | undefined;
        uri?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SylkMethod>]: never; }>(object: I_1): SylkMethod;
};
export declare const SylkMethod_ExtensionsEntry: {
    encode(message: SylkMethod_ExtensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMethod_ExtensionsEntry;
    fromJSON(object: any): SylkMethod_ExtensionsEntry;
    toJSON(message: SylkMethod_ExtensionsEntry): unknown;
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
    } & { [K_1 in Exclude<keyof I, keyof SylkMethod_ExtensionsEntry>]: never; }>(base?: I | undefined): SylkMethod_ExtensionsEntry;
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
    } & { [K_3 in Exclude<keyof I_1, keyof SylkMethod_ExtensionsEntry>]: never; }>(object: I_1): SylkMethod_ExtensionsEntry;
};
export declare const SylkMethodDisplay: {
    encode(message: SylkMethodDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMethodDisplay;
    fromJSON(object: any): SylkMethodDisplay;
    toJSON(message: SylkMethodDisplay): unknown;
    create<I extends {
        createdAt?: Date | undefined;
        method?: {
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
        } | undefined;
        updatedAt?: Date | undefined;
        id?: string | undefined;
    } & {
        createdAt?: Date | undefined;
        method?: ({
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
                } & { [K in Exclude<keyof I["method"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["method"]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_2 in Exclude<keyof I["method"], keyof SylkMethod>]: never; }) | undefined;
        updatedAt?: Date | undefined;
        id?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SylkMethodDisplay>]: never; }>(base?: I | undefined): SylkMethodDisplay;
    fromPartial<I_1 extends {
        createdAt?: Date | undefined;
        method?: {
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
        } | undefined;
        updatedAt?: Date | undefined;
        id?: string | undefined;
    } & {
        createdAt?: Date | undefined;
        method?: ({
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
                } & { [K_4 in Exclude<keyof I_1["method"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I_1["method"]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["method"], keyof SylkMethod>]: never; }) | undefined;
        updatedAt?: Date | undefined;
        id?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof SylkMethodDisplay>]: never; }>(object: I_1): SylkMethodDisplay;
};
