import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkServer.v1.SylkServerLanguages] - None */
export declare enum SylkServerLanguages {
    /** DEFAULT_SYLKSERVERLANGUAGES - [sylk.SylkServer.v1.SylkServerLanguages] - Default enum value for "sylk.SylkServer.v1.SylkServerLanguages" */
    DEFAULT_SYLKSERVERLANGUAGES = 0,
    /** python - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    python = 1,
    /** nodejs - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    nodejs = 2,
    /** typescript - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    typescript = 3,
    /** go - [sylk.SylkServer.v1.SylkServerLanguages] - None */
    go = 4,
    UNRECOGNIZED = -1
}
export declare function sylkServerLanguagesFromJSON(object: any): SylkServerLanguages;
export declare function sylkServerLanguagesToJSON(object: SylkServerLanguages): string;
/** [sylk.SylkServer.v1.SylkServer] - None */
export interface SylkServer {
    language: SylkServerLanguages;
}
export declare const SylkServer: {
    encode(message: SylkServer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkServer;
    fromJSON(object: any): SylkServer;
    toJSON(message: SylkServer): unknown;
    create<I extends {
        language?: SylkServerLanguages | undefined;
    } & {
        language?: SylkServerLanguages | undefined;
    } & { [K in Exclude<keyof I, "language">]: never; }>(base?: I | undefined): SylkServer;
    fromPartial<I_1 extends {
        language?: SylkServerLanguages | undefined;
    } & {
        language?: SylkServerLanguages | undefined;
    } & { [K_1 in Exclude<keyof I_1, "language">]: never; }>(object: I_1): SylkServer;
};
