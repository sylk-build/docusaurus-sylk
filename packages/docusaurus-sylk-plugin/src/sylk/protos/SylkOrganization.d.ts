import _m0 from "protobufjs/minimal";
import { SylkProjectDisplay } from "./SylkProject";
import { SylkUserDisplay } from "./SylkUser";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkOrganization.v1.SylkOrganization] - */
export interface SylkOrganization {
    /** [sylk.SylkOrganization.v1.SylkOrganization.orgId] - */
    orgId: string;
    /** [sylk.SylkOrganization.v1.SylkOrganization.name] - */
    name: string;
    /** [sylk.SylkOrganization.v1.SylkOrganization.domain] - */
    domain: string;
    /** [sylk.SylkOrganization.v1.SylkOrganization.owner] - */
    owner: string;
}
/** [sylk.SylkOrganization.v1.SylkOrganizationDisplay] - */
export interface SylkOrganizationDisplay {
    /** [sylk.SylkOrganization.v1.SylkOrganizationDisplay.organization] - */
    organization?: SylkOrganization;
    /** [sylk.SylkOrganization.v1.SylkOrganizationDisplay.users] - */
    users: SylkUserDisplay[];
    /** [sylk.SylkOrganization.v1.SylkOrganizationDisplay.projects] - */
    projects: SylkProjectDisplay[];
}
export declare const SylkOrganization: {
    encode(message: SylkOrganization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkOrganization;
    fromJSON(object: any): SylkOrganization;
    toJSON(message: SylkOrganization): unknown;
    create<I extends {
        orgId?: string | undefined;
        name?: string | undefined;
        domain?: string | undefined;
        owner?: string | undefined;
    } & {
        orgId?: string | undefined;
        name?: string | undefined;
        domain?: string | undefined;
        owner?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkOrganization>]: never; }>(base?: I | undefined): SylkOrganization;
    fromPartial<I_1 extends {
        orgId?: string | undefined;
        name?: string | undefined;
        domain?: string | undefined;
        owner?: string | undefined;
    } & {
        orgId?: string | undefined;
        name?: string | undefined;
        domain?: string | undefined;
        owner?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkOrganization>]: never; }>(object: I_1): SylkOrganization;
};
export declare const SylkOrganizationDisplay: {
    encode(message: SylkOrganizationDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkOrganizationDisplay;
    fromJSON(object: any): SylkOrganizationDisplay;
    toJSON(message: SylkOrganizationDisplay): unknown;
    create<I extends {
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } | undefined;
        users?: {
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        }[] | undefined;
        projects?: {
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        }[] | undefined;
    } & {
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & { [K in Exclude<keyof I["organization"], keyof SylkOrganization>]: never; }) | undefined;
        users?: ({
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        }[] & ({
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        } & {
            user?: ({
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } & {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: ({
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } & {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } & { [K_1 in Exclude<keyof I["users"][number]["user"]["orgsIds"], string | number>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["users"][number]["user"], keyof import("./SylkUser").SylkUser>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        } & { [K_3 in Exclude<keyof I["users"][number], keyof SylkUserDisplay>]: never; })[] & { [K_4 in Exclude<keyof I["users"], keyof {
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        }[]>]: never; }) | undefined;
        projects?: ({
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        }[] & ({
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
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
                } & { [K_5 in Exclude<keyof I["projects"][number]["project"]["clients"][number], keyof import("./SylkClient").SylkClient>]: never; })[] & { [K_6 in Exclude<keyof I["projects"][number]["project"]["clients"], keyof {
                    language?: import("./SylkClient").SylkClientLanguages | undefined;
                    outDir?: string | undefined;
                }[]>]: never; }) | undefined;
                goPackage?: string | undefined;
                javaPackage?: string | undefined;
                server?: ({
                    language?: import("./SylkServer").SylkServerLanguages | undefined;
                } & {
                    language?: import("./SylkServer").SylkServerLanguages | undefined;
                } & { [K_7 in Exclude<keyof I["projects"][number]["project"]["server"], "language">]: never; }) | undefined;
                description?: string | undefined;
            } & { [K_8 in Exclude<keyof I["projects"][number]["project"], keyof import("./SylkProject").SylkProject>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            owner?: string | undefined;
            members?: ({
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } & {
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } & { [K_9 in Exclude<keyof I["projects"][number]["members"], string | number>]: never; }) | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        } & { [K_10 in Exclude<keyof I["projects"][number], keyof SylkProjectDisplay>]: never; })[] & { [K_11 in Exclude<keyof I["projects"], keyof {
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof SylkOrganizationDisplay>]: never; }>(base?: I | undefined): SylkOrganizationDisplay;
    fromPartial<I_1 extends {
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } | undefined;
        users?: {
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        }[] | undefined;
        projects?: {
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        }[] | undefined;
    } & {
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & { [K_13 in Exclude<keyof I_1["organization"], keyof SylkOrganization>]: never; }) | undefined;
        users?: ({
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        }[] & ({
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        } & {
            user?: ({
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } & {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: ({
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } & {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } & { [K_14 in Exclude<keyof I_1["users"][number]["user"]["orgsIds"], string | number>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I_1["users"][number]["user"], keyof import("./SylkUser").SylkUser>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        } & { [K_16 in Exclude<keyof I_1["users"][number], keyof SylkUserDisplay>]: never; })[] & { [K_17 in Exclude<keyof I_1["users"], keyof {
            user?: {
                userId?: string | undefined;
                email?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                locale?: string | undefined;
                nickname?: string | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                status?: import("./SylkUser").SylkUserStatuses | undefined;
                orgsIds?: {
                    [x: string]: import("./SylkUser").SylkUserRoles | undefined;
                } | undefined;
            } | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            lastActive?: Date | undefined;
        }[]>]: never; }) | undefined;
        projects?: ({
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        }[] & ({
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
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
                } & { [K_18 in Exclude<keyof I_1["projects"][number]["project"]["clients"][number], keyof import("./SylkClient").SylkClient>]: never; })[] & { [K_19 in Exclude<keyof I_1["projects"][number]["project"]["clients"], keyof {
                    language?: import("./SylkClient").SylkClientLanguages | undefined;
                    outDir?: string | undefined;
                }[]>]: never; }) | undefined;
                goPackage?: string | undefined;
                javaPackage?: string | undefined;
                server?: ({
                    language?: import("./SylkServer").SylkServerLanguages | undefined;
                } & {
                    language?: import("./SylkServer").SylkServerLanguages | undefined;
                } & { [K_20 in Exclude<keyof I_1["projects"][number]["project"]["server"], "language">]: never; }) | undefined;
                description?: string | undefined;
            } & { [K_21 in Exclude<keyof I_1["projects"][number]["project"], keyof import("./SylkProject").SylkProject>]: never; }) | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
            owner?: string | undefined;
            members?: ({
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } & {
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } & { [K_22 in Exclude<keyof I_1["projects"][number]["members"], string | number>]: never; }) | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        } & { [K_23 in Exclude<keyof I_1["projects"][number], keyof SylkProjectDisplay>]: never; })[] & { [K_24 in Exclude<keyof I_1["projects"], keyof {
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
                [x: string]: import("./SylkUser").SylkUserRoles | undefined;
            } | undefined;
            numMethods?: number | undefined;
            numServices?: number | undefined;
            numPackages?: number | undefined;
            numMessages?: number | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof SylkOrganizationDisplay>]: never; }>(object: I_1): SylkOrganizationDisplay;
};
