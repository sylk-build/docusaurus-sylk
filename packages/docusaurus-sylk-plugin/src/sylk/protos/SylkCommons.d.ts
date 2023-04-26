/// <reference types="node" />
import _m0 from "protobufjs/minimal";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkCommons.v1.SylkExtensions] - */
export declare enum SylkExtensions {
    /** DEFAULT_SYLKEXTENSIONS - [sylk.SylkCommons.v1.SylkExtensions] - sylk.descriptor/enum_value */
    DEFAULT_SYLKEXTENSIONS = 0,
    /** FileOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    FileOptions = 1,
    /** MessageOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    MessageOptions = 2,
    /** FieldOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    FieldOptions = 3,
    /** ServiceOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    ServiceOptions = 4,
    /** MethodOptions - [sylk.SylkCommons.v1.SylkExtensions] - */
    MethodOptions = 5,
    UNRECOGNIZED = -1
}
export declare function sylkExtensionsFromJSON(object: any): SylkExtensions;
export declare function sylkExtensionsToJSON(object: SylkExtensions): string;
/** [sylk.SylkCommons.v1.SylkMethodContext] - */
export interface SylkMethodContext {
    /** [sylk.SylkCommons.v1.SylkMethodContext.name] - */
    name: string;
    /** [sylk.SylkCommons.v1.SylkMethodContext.code] - */
    code: string;
    /** [sylk.SylkCommons.v1.SylkMethodContext.type] - */
    type: string;
}
/** [sylk.SylkCommons.v1.SylkFileContext] - */
export interface SylkFileContext {
    /** [sylk.SylkCommons.v1.SylkFileContext.file] - */
    file: string;
    /** [sylk.SylkCommons.v1.SylkFileContext.methods] - */
    methods: SylkMethodContext[];
    /** [sylk.SylkCommons.v1.SylkFileContext.code] - */
    code: Buffer;
}
/** [sylk.SylkCommons.v1.SylkContext] - */
export interface SylkContext {
    /** [sylk.SylkCommons.v1.SylkContext.files] - */
    files: SylkFileContext[];
}
export declare const SylkMethodContext: {
    encode(message: SylkMethodContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkMethodContext;
    fromJSON(object: any): SylkMethodContext;
    toJSON(message: SylkMethodContext): unknown;
    create<I extends {
        name?: string | undefined;
        code?: string | undefined;
        type?: string | undefined;
    } & {
        name?: string | undefined;
        code?: string | undefined;
        type?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkMethodContext>]: never; }>(base?: I | undefined): SylkMethodContext;
    fromPartial<I_1 extends {
        name?: string | undefined;
        code?: string | undefined;
        type?: string | undefined;
    } & {
        name?: string | undefined;
        code?: string | undefined;
        type?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkMethodContext>]: never; }>(object: I_1): SylkMethodContext;
};
export declare const SylkFileContext: {
    encode(message: SylkFileContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkFileContext;
    fromJSON(object: any): SylkFileContext;
    toJSON(message: SylkFileContext): unknown;
    create<I extends {
        file?: string | undefined;
        methods?: {
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        }[] | undefined;
        code?: Buffer | undefined;
    } & {
        file?: string | undefined;
        methods?: ({
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        }[] & ({
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        } & {
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        } & { [K in Exclude<keyof I["methods"][number], keyof SylkMethodContext>]: never; })[] & { [K_1 in Exclude<keyof I["methods"], keyof {
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        }[]>]: never; }) | undefined;
        code?: Buffer | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkFileContext>]: never; }>(base?: I | undefined): SylkFileContext;
    fromPartial<I_1 extends {
        file?: string | undefined;
        methods?: {
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        }[] | undefined;
        code?: Buffer | undefined;
    } & {
        file?: string | undefined;
        methods?: ({
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        }[] & ({
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        } & {
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["methods"][number], keyof SylkMethodContext>]: never; })[] & { [K_4 in Exclude<keyof I_1["methods"], keyof {
            name?: string | undefined;
            code?: string | undefined;
            type?: string | undefined;
        }[]>]: never; }) | undefined;
        code?: Buffer | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SylkFileContext>]: never; }>(object: I_1): SylkFileContext;
};
export declare const SylkContext: {
    encode(message: SylkContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkContext;
    fromJSON(object: any): SylkContext;
    toJSON(message: SylkContext): unknown;
    create<I extends {
        files?: {
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        }[] | undefined;
    } & {
        files?: ({
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        }[] & ({
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        } & {
            file?: string | undefined;
            methods?: ({
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] & ({
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            } & {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            } & { [K in Exclude<keyof I["files"][number]["methods"][number], keyof SylkMethodContext>]: never; })[] & { [K_1 in Exclude<keyof I["files"][number]["methods"], keyof {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            code?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I["files"][number], keyof SylkFileContext>]: never; })[] & { [K_3 in Exclude<keyof I["files"], keyof {
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "files">]: never; }>(base?: I | undefined): SylkContext;
    fromPartial<I_1 extends {
        files?: {
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        }[] | undefined;
    } & {
        files?: ({
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        }[] & ({
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        } & {
            file?: string | undefined;
            methods?: ({
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] & ({
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            } & {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            } & { [K_5 in Exclude<keyof I_1["files"][number]["methods"][number], keyof SylkMethodContext>]: never; })[] & { [K_6 in Exclude<keyof I_1["files"][number]["methods"], keyof {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[]>]: never; }) | undefined;
            code?: Buffer | undefined;
        } & { [K_7 in Exclude<keyof I_1["files"][number], keyof SylkFileContext>]: never; })[] & { [K_8 in Exclude<keyof I_1["files"], keyof {
            file?: string | undefined;
            methods?: {
                name?: string | undefined;
                code?: string | undefined;
                type?: string | undefined;
            }[] | undefined;
            code?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "files">]: never; }>(object: I_1): SylkContext;
};
