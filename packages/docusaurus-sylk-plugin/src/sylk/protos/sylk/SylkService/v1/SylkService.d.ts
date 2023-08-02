import _m0 from "protobufjs/minimal";
import { SylkMethod } from "../../SylkMethod/v1/SylkMethod";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkService.v1.SylkService] - None */
export interface SylkService {
    dependencies: string[];
    description: string;
    uri: string;
    name: string;
    fullName: string;
    type: string;
    methods: SylkMethod[];
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
}
export interface SylkService_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkService.v1.SylkServiceDisplay] - None */
export interface SylkServiceDisplay {
    updatedAt?: Date;
    service?: SylkService;
    createdAt?: Date;
}
export declare const SylkService: {
    encode(message: SylkService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkService;
    fromJSON(object: any): SylkService;
    toJSON(message: SylkService): unknown;
    create<I extends {
        dependencies?: string[] | undefined;
        description?: string | undefined;
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        type?: string | undefined;
        methods?: {
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
        }[] | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
    } & {
        dependencies?: (string[] & string[] & { [K in Exclude<keyof I["dependencies"], keyof string[]>]: never; }) | undefined;
        description?: string | undefined;
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        type?: string | undefined;
        methods?: ({
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
        }[] & ({
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
                } & { [K_1 in Exclude<keyof I["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["methods"][number]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_3 in Exclude<keyof I["methods"][number], keyof SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["methods"], keyof {
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
        }[]>]: never; }) | undefined;
        extensions?: ({
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } & {
            [x: string]: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K_5 in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof SylkService>]: never; }>(base?: I | undefined): SylkService;
    fromPartial<I_1 extends {
        dependencies?: string[] | undefined;
        description?: string | undefined;
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        type?: string | undefined;
        methods?: {
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
        }[] | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
    } & {
        dependencies?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["dependencies"], keyof string[]>]: never; }) | undefined;
        description?: string | undefined;
        uri?: string | undefined;
        name?: string | undefined;
        fullName?: string | undefined;
        type?: string | undefined;
        methods?: ({
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
        }[] & ({
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
                } & { [K_9 in Exclude<keyof I_1["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I_1["methods"][number]["extensions"], string | number>]: never; }) | undefined;
            inputType?: string | undefined;
            outputType?: string | undefined;
            uri?: string | undefined;
        } & { [K_11 in Exclude<keyof I_1["methods"][number], keyof SylkMethod>]: never; })[] & { [K_12 in Exclude<keyof I_1["methods"], keyof {
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
        }[]>]: never; }) | undefined;
        extensions?: ({
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } & {
            [x: string]: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K_13 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof SylkService>]: never; }>(object: I_1): SylkService;
};
export declare const SylkService_ExtensionsEntry: {
    encode(message: SylkService_ExtensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkService_ExtensionsEntry;
    fromJSON(object: any): SylkService_ExtensionsEntry;
    toJSON(message: SylkService_ExtensionsEntry): unknown;
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
    } & { [K_1 in Exclude<keyof I, keyof SylkService_ExtensionsEntry>]: never; }>(base?: I | undefined): SylkService_ExtensionsEntry;
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
    } & { [K_3 in Exclude<keyof I_1, keyof SylkService_ExtensionsEntry>]: never; }>(object: I_1): SylkService_ExtensionsEntry;
};
export declare const SylkServiceDisplay: {
    encode(message: SylkServiceDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkServiceDisplay;
    fromJSON(object: any): SylkServiceDisplay;
    toJSON(message: SylkServiceDisplay): unknown;
    create<I extends {
        updatedAt?: Date | undefined;
        service?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: Date | undefined;
    } & {
        updatedAt?: Date | undefined;
        service?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K in Exclude<keyof I["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
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
            }[] & ({
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
                    } & { [K_1 in Exclude<keyof I["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_3 in Exclude<keyof I["service"]["methods"][number], keyof SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["service"]["methods"], keyof {
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
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_5 in Exclude<keyof I["service"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["service"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["service"], keyof SylkService>]: never; }) | undefined;
        createdAt?: Date | undefined;
    } & { [K_8 in Exclude<keyof I, keyof SylkServiceDisplay>]: never; }>(base?: I | undefined): SylkServiceDisplay;
    fromPartial<I_1 extends {
        updatedAt?: Date | undefined;
        service?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: Date | undefined;
    } & {
        updatedAt?: Date | undefined;
        service?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
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
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["service"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
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
            }[] & ({
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
                    } & { [K_10 in Exclude<keyof I_1["service"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I_1["service"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_12 in Exclude<keyof I_1["service"]["methods"][number], keyof SylkMethod>]: never; })[] & { [K_13 in Exclude<keyof I_1["service"]["methods"], keyof {
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
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_14 in Exclude<keyof I_1["service"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I_1["service"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["service"], keyof SylkService>]: never; }) | undefined;
        createdAt?: Date | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof SylkServiceDisplay>]: never; }>(object: I_1): SylkServiceDisplay;
};
