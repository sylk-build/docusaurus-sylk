import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkConfigs.v1.SylkTemplateConfigs] - None */
export interface SylkTemplateConfigs {
    include: string[];
    exclude: string[];
    name: string;
    description: string;
    outPath: string;
    includeCode: boolean;
    author: string;
}
/** [sylk.SylkConfigs.v1.SylkProjectConfigs] - None */
export interface SylkProjectConfigs {
    description: string;
    host: string;
    template?: SylkTemplateConfigs;
    port: number;
    currentVersion: string;
    plugins: string[];
    protoBasePath: string;
    protoCompiledPath: string;
}
/** [sylk.SylkConfigs.v1.SylkCliConfigs] - None */
export interface SylkCliConfigs {
    sylkTemplates: string[];
    port: number;
    token: string;
    analytics: boolean;
    firstRun: boolean;
    host: string;
    plugins: string[];
}
export declare const SylkTemplateConfigs: {
    encode(message: SylkTemplateConfigs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkTemplateConfigs;
    fromJSON(object: any): SylkTemplateConfigs;
    toJSON(message: SylkTemplateConfigs): unknown;
    create<I extends {
        include?: string[] | undefined;
        exclude?: string[] | undefined;
        name?: string | undefined;
        description?: string | undefined;
        outPath?: string | undefined;
        includeCode?: boolean | undefined;
        author?: string | undefined;
    } & {
        include?: (string[] & string[] & { [K in Exclude<keyof I["include"], keyof string[]>]: never; }) | undefined;
        exclude?: (string[] & string[] & { [K_1 in Exclude<keyof I["exclude"], keyof string[]>]: never; }) | undefined;
        name?: string | undefined;
        description?: string | undefined;
        outPath?: string | undefined;
        includeCode?: boolean | undefined;
        author?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkTemplateConfigs>]: never; }>(base?: I | undefined): SylkTemplateConfigs;
    fromPartial<I_1 extends {
        include?: string[] | undefined;
        exclude?: string[] | undefined;
        name?: string | undefined;
        description?: string | undefined;
        outPath?: string | undefined;
        includeCode?: boolean | undefined;
        author?: string | undefined;
    } & {
        include?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["include"], keyof string[]>]: never; }) | undefined;
        exclude?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["exclude"], keyof string[]>]: never; }) | undefined;
        name?: string | undefined;
        description?: string | undefined;
        outPath?: string | undefined;
        includeCode?: boolean | undefined;
        author?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SylkTemplateConfigs>]: never; }>(object: I_1): SylkTemplateConfigs;
};
export declare const SylkProjectConfigs: {
    encode(message: SylkProjectConfigs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkProjectConfigs;
    fromJSON(object: any): SylkProjectConfigs;
    toJSON(message: SylkProjectConfigs): unknown;
    create<I extends {
        description?: string | undefined;
        host?: string | undefined;
        template?: {
            include?: string[] | undefined;
            exclude?: string[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            outPath?: string | undefined;
            includeCode?: boolean | undefined;
            author?: string | undefined;
        } | undefined;
        port?: number | undefined;
        currentVersion?: string | undefined;
        plugins?: string[] | undefined;
        protoBasePath?: string | undefined;
        protoCompiledPath?: string | undefined;
    } & {
        description?: string | undefined;
        host?: string | undefined;
        template?: ({
            include?: string[] | undefined;
            exclude?: string[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            outPath?: string | undefined;
            includeCode?: boolean | undefined;
            author?: string | undefined;
        } & {
            include?: (string[] & string[] & { [K in Exclude<keyof I["template"]["include"], keyof string[]>]: never; }) | undefined;
            exclude?: (string[] & string[] & { [K_1 in Exclude<keyof I["template"]["exclude"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            outPath?: string | undefined;
            includeCode?: boolean | undefined;
            author?: string | undefined;
        } & { [K_2 in Exclude<keyof I["template"], keyof SylkTemplateConfigs>]: never; }) | undefined;
        port?: number | undefined;
        currentVersion?: string | undefined;
        plugins?: (string[] & string[] & { [K_3 in Exclude<keyof I["plugins"], keyof string[]>]: never; }) | undefined;
        protoBasePath?: string | undefined;
        protoCompiledPath?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof SylkProjectConfigs>]: never; }>(base?: I | undefined): SylkProjectConfigs;
    fromPartial<I_1 extends {
        description?: string | undefined;
        host?: string | undefined;
        template?: {
            include?: string[] | undefined;
            exclude?: string[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            outPath?: string | undefined;
            includeCode?: boolean | undefined;
            author?: string | undefined;
        } | undefined;
        port?: number | undefined;
        currentVersion?: string | undefined;
        plugins?: string[] | undefined;
        protoBasePath?: string | undefined;
        protoCompiledPath?: string | undefined;
    } & {
        description?: string | undefined;
        host?: string | undefined;
        template?: ({
            include?: string[] | undefined;
            exclude?: string[] | undefined;
            name?: string | undefined;
            description?: string | undefined;
            outPath?: string | undefined;
            includeCode?: boolean | undefined;
            author?: string | undefined;
        } & {
            include?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["template"]["include"], keyof string[]>]: never; }) | undefined;
            exclude?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["template"]["exclude"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            description?: string | undefined;
            outPath?: string | undefined;
            includeCode?: boolean | undefined;
            author?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["template"], keyof SylkTemplateConfigs>]: never; }) | undefined;
        port?: number | undefined;
        currentVersion?: string | undefined;
        plugins?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["plugins"], keyof string[]>]: never; }) | undefined;
        protoBasePath?: string | undefined;
        protoCompiledPath?: string | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof SylkProjectConfigs>]: never; }>(object: I_1): SylkProjectConfigs;
};
export declare const SylkCliConfigs: {
    encode(message: SylkCliConfigs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkCliConfigs;
    fromJSON(object: any): SylkCliConfigs;
    toJSON(message: SylkCliConfigs): unknown;
    create<I extends {
        sylkTemplates?: string[] | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
        host?: string | undefined;
        plugins?: string[] | undefined;
    } & {
        sylkTemplates?: (string[] & string[] & { [K in Exclude<keyof I["sylkTemplates"], keyof string[]>]: never; }) | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
        host?: string | undefined;
        plugins?: (string[] & string[] & { [K_1 in Exclude<keyof I["plugins"], keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkCliConfigs>]: never; }>(base?: I | undefined): SylkCliConfigs;
    fromPartial<I_1 extends {
        sylkTemplates?: string[] | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
        host?: string | undefined;
        plugins?: string[] | undefined;
    } & {
        sylkTemplates?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["sylkTemplates"], keyof string[]>]: never; }) | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
        host?: string | undefined;
        plugins?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["plugins"], keyof string[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SylkCliConfigs>]: never; }>(object: I_1): SylkCliConfigs;
};
