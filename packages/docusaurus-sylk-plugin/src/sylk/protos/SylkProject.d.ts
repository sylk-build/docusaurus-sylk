import _m0 from "protobufjs/minimal";
import { SylkClient } from "./SylkClient";
import { SylkServer } from "./SylkServer";
import { SylkUserRoles } from "./SylkUser";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkProject.v1.SylkProject] - */
export interface SylkProject {
    /** [sylk.SylkProject.v1.SylkProject.uri] - */
    uri: string;
    /** [sylk.SylkProject.v1.SylkProject.name] - */
    name: string;
    /** [sylk.SylkProject.v1.SylkProject.package_name] - */
    packageName: string;
    /** [sylk.SylkProject.v1.SylkProject.clients] - */
    clients: SylkClient[];
    /** [sylk.SylkProject.v1.SylkProject.go_package] - */
    goPackage: string;
    /** [sylk.SylkProject.v1.SylkProject.java_package] - */
    javaPackage: string;
    /** [sylk.SylkProject.v1.SylkProject.server] - */
    server?: SylkServer;
    /** [sylk.SylkProject.v1.SylkProject.description] - */
    description: string;
}
/** [sylk.SylkProject.v1.SylkProjectDisplay] - */
export interface SylkProjectDisplay {
    /** [sylk.SylkProject.v1.SylkProjectDisplay.project] - */
    project?: SylkProject;
    /** [sylk.SylkProject.v1.SylkProjectDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkProject.v1.SylkProjectDisplay.updated_at] - */
    updatedAt?: Date;
    /** [sylk.SylkProject.v1.SylkProjectDisplay.owner] - */
    owner: string;
    /** [sylk.SylkProject.v1.SylkProjectDisplay.members] - */
    members: {
        [key: string]: SylkUserRoles;
    };
    /** [sylk.SylkProject.v1.SylkProjectDisplay.numMethods] - */
    numMethods: number;
    /** [sylk.SylkProject.v1.SylkProjectDisplay.numServices] - */
    numServices: number;
    /** [sylk.SylkProject.v1.SylkProjectDisplay.numPackages] - */
    numPackages: number;
    /** [sylk.SylkProject.v1.SylkProjectDisplay.numMessages] - */
    numMessages: number;
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
        uri?: string | undefined;
        name?: string | undefined;
        packageName?: string | undefined;
        clients?: {
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        }[] | undefined;
        goPackage?: string | undefined;
        javaPackage?: string | undefined;
        server?: {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } | undefined;
        description?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        packageName?: string | undefined;
        clients?: ({
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        }[] & ({
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        } & {
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        } & { [K in Exclude<keyof I["clients"][number], keyof SylkClient>]: never; })[] & { [K_1 in Exclude<keyof I["clients"], keyof {
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        }[]>]: never; }) | undefined;
        goPackage?: string | undefined;
        javaPackage?: string | undefined;
        server?: ({
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & { [K_2 in Exclude<keyof I["server"], "language">]: never; }) | undefined;
        description?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof SylkProject>]: never; }>(base?: I | undefined): SylkProject;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        packageName?: string | undefined;
        clients?: {
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        }[] | undefined;
        goPackage?: string | undefined;
        javaPackage?: string | undefined;
        server?: {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } | undefined;
        description?: string | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        packageName?: string | undefined;
        clients?: ({
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        }[] & ({
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        } & {
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["clients"][number], keyof SylkClient>]: never; })[] & { [K_5 in Exclude<keyof I_1["clients"], keyof {
            language?: import("./SylkClient").SylkClientLanguages | undefined;
            outDir?: string | undefined;
        }[]>]: never; }) | undefined;
        goPackage?: string | undefined;
        javaPackage?: string | undefined;
        server?: ({
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & {
            language?: import("./SylkServer").SylkServerLanguages | undefined;
        } & { [K_6 in Exclude<keyof I_1["server"], "language">]: never; }) | undefined;
        description?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof SylkProject>]: never; }>(object: I_1): SylkProject;
};
export declare const SylkProjectDisplay: {
    encode(message: SylkProjectDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkProjectDisplay;
    fromJSON(object: any): SylkProjectDisplay;
    toJSON(message: SylkProjectDisplay): unknown;
    create<I extends {
        project?: {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        owner?: string | undefined;
        members?: {
            [x: string]: SylkUserRoles | undefined;
        } | undefined;
        numMethods?: number | undefined;
        numServices?: number | undefined;
        numPackages?: number | undefined;
        numMessages?: number | undefined;
    } & {
        project?: ({
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] & ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & { [K in Exclude<keyof I["project"]["clients"][number], keyof SylkClient>]: never; })[] & { [K_1 in Exclude<keyof I["project"]["clients"], keyof {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[]>]: never; }) | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: ({
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & { [K_2 in Exclude<keyof I["project"]["server"], "language">]: never; }) | undefined;
            description?: string | undefined;
        } & { [K_3 in Exclude<keyof I["project"], keyof SylkProject>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        owner?: string | undefined;
        members?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K_4 in Exclude<keyof I["members"], string | number>]: never; }) | undefined;
        numMethods?: number | undefined;
        numServices?: number | undefined;
        numPackages?: number | undefined;
        numMessages?: number | undefined;
    } & { [K_5 in Exclude<keyof I, keyof SylkProjectDisplay>]: never; }>(base?: I | undefined): SylkProjectDisplay;
    fromPartial<I_1 extends {
        project?: {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        owner?: string | undefined;
        members?: {
            [x: string]: SylkUserRoles | undefined;
        } | undefined;
        numMethods?: number | undefined;
        numServices?: number | undefined;
        numPackages?: number | undefined;
        numMessages?: number | undefined;
    } & {
        project?: ({
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] & ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["project"]["clients"][number], keyof SylkClient>]: never; })[] & { [K_7 in Exclude<keyof I_1["project"]["clients"], keyof {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[]>]: never; }) | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: ({
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & { [K_8 in Exclude<keyof I_1["project"]["server"], "language">]: never; }) | undefined;
            description?: string | undefined;
        } & { [K_9 in Exclude<keyof I_1["project"], keyof SylkProject>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        owner?: string | undefined;
        members?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K_10 in Exclude<keyof I_1["members"], string | number>]: never; }) | undefined;
        numMethods?: number | undefined;
        numServices?: number | undefined;
        numPackages?: number | undefined;
        numMessages?: number | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof SylkProjectDisplay>]: never; }>(object: I_1): SylkProjectDisplay;
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
