import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkClient.v1.SylkClientLanguages] - None */
export declare enum SylkClientLanguages {
    /** DEFAULT_SYLKCLIENTLANGUAGES - [sylk.SylkClient.v1.SylkClientLanguages] - Default enum value for "sylk.SylkClient.v1.SylkClientLanguages" */
    DEFAULT_SYLKCLIENTLANGUAGES = 0,
    /** python - [sylk.SylkClient.v1.SylkClientLanguages] - None */
    python = 1,
    /** nodejs - [sylk.SylkClient.v1.SylkClientLanguages] - None */
    nodejs = 2,
    /** typescript - [sylk.SylkClient.v1.SylkClientLanguages] - None */
    typescript = 3,
    /** go - [sylk.SylkClient.v1.SylkClientLanguages] - None */
    go = 4,
    UNRECOGNIZED = -1
}
export declare function sylkClientLanguagesFromJSON(object: any): SylkClientLanguages;
export declare function sylkClientLanguagesToJSON(object: SylkClientLanguages): string;
/** [sylk.SylkClient.v1.SylkClient] - None */
export interface SylkClient {
    outDir: string;
    language: SylkClientLanguages;
}
export declare const SylkClient: {
    encode(message: SylkClient, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkClient;
    fromJSON(object: any): SylkClient;
    toJSON(message: SylkClient): unknown;
    create<I extends {
        outDir?: string | undefined;
        language?: SylkClientLanguages | undefined;
    } & {
        outDir?: string | undefined;
        language?: SylkClientLanguages | undefined;
    } & { [K in Exclude<keyof I, keyof SylkClient>]: never; }>(base?: I | undefined): SylkClient;
    fromPartial<I_1 extends {
        outDir?: string | undefined;
        language?: SylkClientLanguages | undefined;
    } & {
        outDir?: string | undefined;
        language?: SylkClientLanguages | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkClient>]: never; }>(object: I_1): SylkClient;
};
