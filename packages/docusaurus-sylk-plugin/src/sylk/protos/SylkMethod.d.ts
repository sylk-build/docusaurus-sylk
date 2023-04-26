import _m0 from "protobufjs/minimal";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkMethod.v1.SylkMethod] - */
export interface SylkMethod {
    /** [sylk.SylkMethod.v1.SylkMethod.uri] - */
    uri: string;
    /** [sylk.SylkMethod.v1.SylkMethod.name] - */
    name: string;
    /** [sylk.SylkMethod.v1.SylkMethod.full_name] - */
    fullName: string;
    /** [sylk.SylkMethod.v1.SylkMethod.description] - */
    description: string;
    /** [sylk.SylkMethod.v1.SylkMethod.input_type] - */
    inputType: string;
    /** [sylk.SylkMethod.v1.SylkMethod.output_type] - */
    outputType: string;
    /** [sylk.SylkMethod.v1.SylkMethod.client_streaming] - */
    clientStreaming: boolean;
    /** [sylk.SylkMethod.v1.SylkMethod.server_streaming] - */
    serverStreaming: boolean;
    /** [sylk.SylkMethod.v1.SylkMethod.type] - */
    type: string;
    /** [sylk.SylkMethod.v1.SylkMethod.kind] - */
    kind: string;
    /** [sylk.SylkMethod.v1.SylkMethod.extensions] - */
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
}
export interface SylkMethod_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkMethod.v1.SylkMethodDisplay] - */
export interface SylkMethodDisplay {
    /** [sylk.SylkMethod.v1.SylkMethodDisplay.method] - */
    method?: SylkMethod;
    /** [sylk.SylkMethod.v1.SylkMethodDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkMethod.v1.SylkMethodDisplay.updated_at] - */
    updatedAt?: Date;
}
export declare const SylkMethod: {
    encode(message: SylkMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMethod;
    fromJSON(object: any): SylkMethod;
    toJSON(message: SylkMethod): unknown;
    create<I extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        inputType?: string | undefined;
        outputType?: string | undefined;
        clientStreaming?: boolean | undefined;
        serverStreaming?: boolean | undefined;
        type?: string | undefined;
        kind?: string | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        inputType?: string | undefined;
        outputType?: string | undefined;
        clientStreaming?: boolean | undefined;
        serverStreaming?: boolean | undefined;
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
            } & { [K in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkMethod>]: never; }>(base?: I | undefined): SylkMethod;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        inputType?: string | undefined;
        outputType?: string | undefined;
        clientStreaming?: boolean | undefined;
        serverStreaming?: boolean | undefined;
        type?: string | undefined;
        kind?: string | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        description?: string | undefined;
        inputType?: string | undefined;
        outputType?: string | undefined;
        clientStreaming?: boolean | undefined;
        serverStreaming?: boolean | undefined;
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
            } & { [K_3 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
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
        method?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            clientStreaming?: boolean | undefined;
            serverStreaming?: boolean | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        method?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            clientStreaming?: boolean | undefined;
            serverStreaming?: boolean | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            clientStreaming?: boolean | undefined;
            serverStreaming?: boolean | undefined;
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
                } & { [K in Exclude<keyof I["method"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["method"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["method"], keyof SylkMethod>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SylkMethodDisplay>]: never; }>(base?: I | undefined): SylkMethodDisplay;
    fromPartial<I_1 extends {
        method?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            clientStreaming?: boolean | undefined;
            serverStreaming?: boolean | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        method?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            clientStreaming?: boolean | undefined;
            serverStreaming?: boolean | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            clientStreaming?: boolean | undefined;
            serverStreaming?: boolean | undefined;
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
                } & { [K_4 in Exclude<keyof I_1["method"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I_1["method"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["method"], keyof SylkMethod>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof SylkMethodDisplay>]: never; }>(object: I_1): SylkMethodDisplay;
};
