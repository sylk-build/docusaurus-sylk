/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { SylkClient } from "./SylkClient";
import { SylkServer } from "./SylkServer";
import { SylkUserRoles } from "./SylkUser";
import { Any } from "./google/protobuf/any";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkProject.v1.SylkProject] - None */
export interface SylkProject {
    description: string;
    javaPackage: string;
    goPackage: string;
    name: string;
    uri: string;
    clients: SylkClient[];
    server?: SylkServer;
    packageName: string;
    extensions: Any[];
}
/** [sylk.SylkProject.v1.SylkProjectDisplay] - None */
export interface SylkProjectDisplay {
    owner: string;
    updatedAt?: Date;
    numMethods: number;
    createdAt?: Date;
    members: {
        [key: string]: SylkUserRoles;
    };
    numServices: number;
    numMessages: number;
    numPackages: number;
    project?: SylkProject;
}
export interface SylkProjectDisplay_MembersEntry {
    key: string;
    value: SylkUserRoles;
}
export declare const SylkProject: {
    encode(message: SylkProject, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkProject;
    fromJSON(object: any): SylkProject;
    toJSON(message: SylkProject): unknown;
    create<I extends {
        description?: string | undefined;
        javaPackage?: string | undefined;
        goPackage?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        clients?: {
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        }[] | undefined;
        server?: {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } | undefined;
        packageName?: string | undefined;
        extensions?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        javaPackage?: string | undefined;
        goPackage?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        clients?: ({
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        }[] & ({
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        } & {
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        } & { [K in Exclude<keyof I["clients"][number], keyof SylkClient>]: never; })[] & { [K_1 in Exclude<keyof I["clients"], keyof {
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        }[]>]: never; }) | undefined;
        server?: ({
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & { [K_2 in Exclude<keyof I["server"], "language">]: never; }) | undefined;
        packageName?: string | undefined;
        extensions?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_3 in Exclude<keyof I["extensions"][number], keyof Any>]: never; })[] & { [K_4 in Exclude<keyof I["extensions"], keyof {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SylkProject>]: never; }>(base?: I | undefined): SylkProject;
    fromPartial<I_1 extends {
        description?: string | undefined;
        javaPackage?: string | undefined;
        goPackage?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        clients?: {
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        }[] | undefined;
        server?: {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } | undefined;
        packageName?: string | undefined;
        extensions?: {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] | undefined;
    } & {
        description?: string | undefined;
        javaPackage?: string | undefined;
        goPackage?: string | undefined;
        name?: string | undefined;
        uri?: string | undefined;
        clients?: ({
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        }[] & ({
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        } & {
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        } & { [K_6 in Exclude<keyof I_1["clients"][number], keyof SylkClient>]: never; })[] & { [K_7 in Exclude<keyof I_1["clients"], keyof {
            outDir?: string | undefined;
            language?: import("./SylkClient").SylkClientLanguages | undefined;
        }[]>]: never; }) | undefined;
        server?: ({
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & { [K_8 in Exclude<keyof I_1["server"], "language">]: never; }) | undefined;
        packageName?: string | undefined;
        extensions?: ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[] & ({
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        } & { [K_9 in Exclude<keyof I_1["extensions"][number], keyof Any>]: never; })[] & { [K_10 in Exclude<keyof I_1["extensions"], keyof {
            typeUrl?: string | undefined;
            value?: Buffer | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof SylkProject>]: never; }>(object: I_1): SylkProject;
};
export declare const SylkProjectDisplay: {
    encode(message: SylkProjectDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkProjectDisplay;
    fromJSON(object: any): SylkProjectDisplay;
    toJSON(message: SylkProjectDisplay): unknown;
    create<I extends {
        owner?: string | undefined;
        updatedAt?: Date | undefined;
        numMethods?: number | undefined;
        createdAt?: Date | undefined;
        members?: {
            [x: string]: SylkUserRoles | undefined;
        } | undefined;
        numServices?: number | undefined;
        numMessages?: number | undefined;
        numPackages?: number | undefined;
        project?: {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        updatedAt?: Date | undefined;
        numMethods?: number | undefined;
        createdAt?: Date | undefined;
        members?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K in Exclude<keyof I["members"], string | number>]: never; }) | undefined;
        numServices?: number | undefined;
        numMessages?: number | undefined;
        numPackages?: number | undefined;
        project?: ({
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: ({
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[] & ({
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            } & {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            } & { [K_1 in Exclude<keyof I["project"]["clients"][number], keyof SylkClient>]: never; })[] & { [K_2 in Exclude<keyof I["project"]["clients"], keyof {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[]>]: never; }) | undefined;
            server?: ({
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & { [K_3 in Exclude<keyof I["project"]["server"], "language">]: never; }) | undefined;
            packageName?: string | undefined;
            extensions?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_4 in Exclude<keyof I["project"]["extensions"][number], keyof Any>]: never; })[] & { [K_5 in Exclude<keyof I["project"]["extensions"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["project"], keyof SylkProject>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof SylkProjectDisplay>]: never; }>(base?: I | undefined): SylkProjectDisplay;
    fromPartial<I_1 extends {
        owner?: string | undefined;
        updatedAt?: Date | undefined;
        numMethods?: number | undefined;
        createdAt?: Date | undefined;
        members?: {
            [x: string]: SylkUserRoles | undefined;
        } | undefined;
        numServices?: number | undefined;
        numMessages?: number | undefined;
        numPackages?: number | undefined;
        project?: {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
        updatedAt?: Date | undefined;
        numMethods?: number | undefined;
        createdAt?: Date | undefined;
        members?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K_8 in Exclude<keyof I_1["members"], string | number>]: never; }) | undefined;
        numServices?: number | undefined;
        numMessages?: number | undefined;
        numPackages?: number | undefined;
        project?: ({
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: ({
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[] & ({
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            } & {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            } & { [K_9 in Exclude<keyof I_1["project"]["clients"][number], keyof SylkClient>]: never; })[] & { [K_10 in Exclude<keyof I_1["project"]["clients"], keyof {
                outDir?: string | undefined;
                language?: import("./SylkClient").SylkClientLanguages | undefined;
            }[]>]: never; }) | undefined;
            server?: ({
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & { [K_11 in Exclude<keyof I_1["project"]["server"], "language">]: never; }) | undefined;
            packageName?: string | undefined;
            extensions?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_12 in Exclude<keyof I_1["project"]["extensions"][number], keyof Any>]: never; })[] & { [K_13 in Exclude<keyof I_1["project"]["extensions"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I_1["project"], keyof SylkProject>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof SylkProjectDisplay>]: never; }>(object: I_1): SylkProjectDisplay;
};
export declare const SylkProjectDisplay_MembersEntry: {
    encode(message: SylkProjectDisplay_MembersEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkProjectDisplay_MembersEntry;
    fromJSON(object: any): SylkProjectDisplay_MembersEntry;
    toJSON(message: SylkProjectDisplay_MembersEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & { [K in Exclude<keyof I, keyof SylkProjectDisplay_MembersEntry>]: never; }>(base?: I | undefined): SylkProjectDisplay_MembersEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkProjectDisplay_MembersEntry>]: never; }>(object: I_1): SylkProjectDisplay_MembersEntry;
};
