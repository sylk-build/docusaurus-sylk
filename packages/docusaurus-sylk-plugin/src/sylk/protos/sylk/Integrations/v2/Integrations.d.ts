/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Integrations.v2.Integration] - None */
export interface Integration {
    orgId: string;
    installedBy: string;
    active: boolean;
    data?: Any;
}
/** [sylk.Integrations.v2.GetIntegrationRequest] - None */
export interface GetIntegrationRequest {
    id: string;
}
/** [sylk.Integrations.v2.GetIntegrationResponse] - None */
export interface GetIntegrationResponse {
    integration?: Integration;
}
export declare const Integration: {
    encode(message: Integration, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Integration;
    fromJSON(object: any): Integration;
    toJSON(message: Integration): unknown;
    create<I extends {
        orgId?: string | undefined;
        installedBy?: string | undefined;
        active?: boolean | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        orgId?: string | undefined;
        installedBy?: string | undefined;
        active?: boolean | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K in Exclude<keyof I["data"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Integration>]: never; }>(base?: I | undefined): Integration;
    fromPartial<I_1 extends {
        orgId?: string | undefined;
        installedBy?: string | undefined;
        active?: boolean | undefined;
        data?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } | undefined;
    } & {
        orgId?: string | undefined;
        installedBy?: string | undefined;
        active?: boolean | undefined;
        data?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_2 in Exclude<keyof I_1["data"], keyof Any>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Integration>]: never; }>(object: I_1): Integration;
};
export declare const GetIntegrationRequest: {
    encode(message: GetIntegrationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIntegrationRequest;
    fromJSON(object: any): GetIntegrationRequest;
    toJSON(message: GetIntegrationRequest): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): GetIntegrationRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): GetIntegrationRequest;
};
export declare const GetIntegrationResponse: {
    encode(message: GetIntegrationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetIntegrationResponse;
    fromJSON(object: any): GetIntegrationResponse;
    toJSON(message: GetIntegrationResponse): unknown;
    create<I extends {
        integration?: {
            orgId?: string | undefined;
            installedBy?: string | undefined;
            active?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } | undefined;
    } & {
        integration?: ({
            orgId?: string | undefined;
            installedBy?: string | undefined;
            active?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            orgId?: string | undefined;
            installedBy?: string | undefined;
            active?: boolean | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K in Exclude<keyof I["integration"]["data"], keyof Any>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["integration"], keyof Integration>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "integration">]: never; }>(base?: I | undefined): GetIntegrationResponse;
    fromPartial<I_1 extends {
        integration?: {
            orgId?: string | undefined;
            installedBy?: string | undefined;
            active?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } | undefined;
    } & {
        integration?: ({
            orgId?: string | undefined;
            installedBy?: string | undefined;
            active?: boolean | undefined;
            data?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            orgId?: string | undefined;
            installedBy?: string | undefined;
            active?: boolean | undefined;
            data?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I_1["integration"]["data"], keyof Any>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["integration"], keyof Integration>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "integration">]: never; }>(object: I_1): GetIntegrationResponse;
};
export type IntegrationsService = typeof IntegrationsService;
export declare const IntegrationsService: {
    /** [sylk] - None */
    readonly getIntegration: {
        readonly path: "/sylk.Integrations.v2.Integrations/GetIntegration";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetIntegrationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetIntegrationRequest;
        readonly responseSerialize: (value: GetIntegrationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetIntegrationResponse;
    };
};
export interface IntegrationsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getIntegration: handleUnaryCall<GetIntegrationRequest, GetIntegrationResponse>;
}
export interface IntegrationsClient extends Client {
    /** [sylk] - None */
    getIntegration(request: GetIntegrationRequest, callback: (error: ServiceError | null, response: GetIntegrationResponse) => void): ClientUnaryCall;
    getIntegration(request: GetIntegrationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetIntegrationResponse) => void): ClientUnaryCall;
    getIntegration(request: GetIntegrationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetIntegrationResponse) => void): ClientUnaryCall;
}
export declare const IntegrationsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): IntegrationsClient;
    service: typeof IntegrationsService;
};
