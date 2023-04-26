import _m0 from "protobufjs/minimal";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkConfigs.v1.SylkCliConfigs] - */
export interface SylkCliConfigs {
    /** [sylk.SylkConfigs.v1.SylkCliConfigs.host] - */
    host: string;
    /** [sylk.SylkConfigs.v1.SylkCliConfigs.port] - */
    port: number;
    /** [sylk.SylkConfigs.v1.SylkCliConfigs.token] - */
    token: string;
    /** [sylk.SylkConfigs.v1.SylkCliConfigs.analytics] - */
    analytics: boolean;
    /** [sylk.SylkConfigs.v1.SylkCliConfigs.first_run] - */
    firstRun: boolean;
}
/** [sylk.SylkConfigs.v1.SylkProjectConfigs] - */
export interface SylkProjectConfigs {
    /** [sylk.SylkConfigs.v1.SylkProjectConfigs.host] - */
    host: string;
    /** [sylk.SylkConfigs.v1.SylkProjectConfigs.port] - */
    port: number;
    /** [sylk.SylkConfigs.v1.SylkProjectConfigs.description] - */
    description: string;
    /** [sylk.SylkConfigs.v1.SylkProjectConfigs.current_version] - */
    currentVersion: string;
}
export declare const SylkCliConfigs: {
    encode(message: SylkCliConfigs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkCliConfigs;
    fromJSON(object: any): SylkCliConfigs;
    toJSON(message: SylkCliConfigs): unknown;
    create<I extends {
        host?: string | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
    } & {
        host?: string | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof SylkCliConfigs>]: never; }>(base?: I | undefined): SylkCliConfigs;
    fromPartial<I_1 extends {
        host?: string | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
    } & {
        host?: string | undefined;
        port?: number | undefined;
        token?: string | undefined;
        analytics?: boolean | undefined;
        firstRun?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkCliConfigs>]: never; }>(object: I_1): SylkCliConfigs;
};
export declare const SylkProjectConfigs: {
    encode(message: SylkProjectConfigs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkProjectConfigs;
    fromJSON(object: any): SylkProjectConfigs;
    toJSON(message: SylkProjectConfigs): unknown;
    create<I extends {
        host?: string | undefined;
        port?: number | undefined;
        description?: string | undefined;
        currentVersion?: string | undefined;
    } & {
        host?: string | undefined;
        port?: number | undefined;
        description?: string | undefined;
        currentVersion?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkProjectConfigs>]: never; }>(base?: I | undefined): SylkProjectConfigs;
    fromPartial<I_1 extends {
        host?: string | undefined;
        port?: number | undefined;
        description?: string | undefined;
        currentVersion?: string | undefined;
    } & {
        host?: string | undefined;
        port?: number | undefined;
        description?: string | undefined;
        currentVersion?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkProjectConfigs>]: never; }>(object: I_1): SylkProjectConfigs;
};
