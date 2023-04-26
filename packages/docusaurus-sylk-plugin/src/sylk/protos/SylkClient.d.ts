import _m0 from "protobufjs/minimal";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkClient.v1.SylkClientLanguages] - */
export declare enum SylkClientLanguages {
    /** DEFAULT_SYLKCLIENTLANGUAGES - [sylk.SylkClient.v1.SylkClientLanguages] - Default enum value for "sylk.SylkClient.v1.SylkClientLanguages" */
    DEFAULT_SYLKCLIENTLANGUAGES = 0,
    /** python - [sylk.SylkClient.v1.SylkClientLanguages] - */
    python = 1,
    /** nodejs - [sylk.SylkClient.v1.SylkClientLanguages] - */
    nodejs = 2,
    /** typescript - [sylk.SylkClient.v1.SylkClientLanguages] - */
    typescript = 3,
    /** go - [sylk.SylkClient.v1.SylkClientLanguages] - */
    go = 4,
    UNRECOGNIZED = -1
}
export declare function sylkClientLanguagesFromJSON(object: any): SylkClientLanguages;
export declare function sylkClientLanguagesToJSON(object: SylkClientLanguages): string;
/** [sylk.SylkClient.v1.SylkClient] - */
export interface SylkClient {
    /** [sylk.SylkClient.v1.SylkClient.language] - */
    language: SylkClientLanguages;
    /** [sylk.SylkClient.v1.SylkClient.out_dir] - */
    outDir: string;
}
export declare const SylkClient: {
    encode(message: SylkClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkClient;
    fromJSON(object: any): SylkClient;
    toJSON(message: SylkClient): unknown;
    create<I extends {
        language?: SylkClientLanguages | undefined;
        outDir?: string | undefined;
    } & {
        language?: SylkClientLanguages | undefined;
        outDir?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkClient>]: never; }>(base?: I | undefined): SylkClient;
    fromPartial<I_1 extends {
        language?: SylkClientLanguages | undefined;
        outDir?: string | undefined;
    } & {
        language?: SylkClientLanguages | undefined;
        outDir?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkClient>]: never; }>(object: I_1): SylkClient;
};
