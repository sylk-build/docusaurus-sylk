/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { SylkProjectDisplay } from "../../SylkProject/v1/SylkProject";
import { SylkUserDisplay } from "../../SylkUser/v1/SylkUser";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkOrganization.v1.SylkOrganization] - None */
export interface SylkOrganization {
    orgId: string;
    name: string;
    owner: string;
    domain: string;
}
/** [sylk.SylkOrganization.v1.SylkOrganizationDisplay] - None */
export interface SylkOrganizationDisplay {
    organization?: SylkOrganization;
    projects: SylkProjectDisplay[];
    users: SylkUserDisplay[];
}
export declare const SylkOrganization: {
    encode(message: SylkOrganization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkOrganization;
    fromJSON(object: any): SylkOrganization;
    toJSON(message: SylkOrganization): unknown;
    create<I extends {
        orgId?: string | undefined;
        name?: string | undefined;
        owner?: string | undefined;
        domain?: string | undefined;
    } & {
        orgId?: string | undefined;
        name?: string | undefined;
        owner?: string | undefined;
        domain?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SylkOrganization>]: never; }>(base?: I | undefined): SylkOrganization;
    fromPartial<I_1 extends {
        orgId?: string | undefined;
        name?: string | undefined;
        owner?: string | undefined;
        domain?: string | undefined;
    } & {
        orgId?: string | undefined;
        name?: string | undefined;
        owner?: string | undefined;
        domain?: string | undefined;
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
            owner?: string | undefined;
            domain?: string | undefined;
        } | undefined;
        projects?: {
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } | undefined;
                packageName?: string | undefined;
                extensions?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        users?: {
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & { [K in Exclude<keyof I["organization"], keyof SylkOrganization>]: never; }) | undefined;
        projects?: ({
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } | undefined;
                packageName?: string | undefined;
                extensions?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
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
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
            } & {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
            } & { [K_1 in Exclude<keyof I["projects"][number]["members"], string | number>]: never; }) | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] & ({
                    outDir?: string | undefined;
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                } & {
                    outDir?: string | undefined;
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                } & { [K_2 in Exclude<keyof I["projects"][number]["project"]["clients"][number], keyof import("../../SylkClient/v1/SylkClient").SylkClient>]: never; })[] & { [K_3 in Exclude<keyof I["projects"][number]["project"]["clients"], keyof {
                    outDir?: string | undefined;
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[]>]: never; }) | undefined;
                server?: ({
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } & {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } & { [K_4 in Exclude<keyof I["projects"][number]["project"]["server"], "language">]: never; }) | undefined;
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
                } & { [K_5 in Exclude<keyof I["projects"][number]["project"]["extensions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_6 in Exclude<keyof I["projects"][number]["project"]["extensions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["projects"][number]["project"], keyof import("../../SylkProject/v1/SylkProject").SylkProject>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["projects"][number], keyof SylkProjectDisplay>]: never; })[] & { [K_9 in Exclude<keyof I["projects"], keyof {
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } | undefined;
                packageName?: string | undefined;
                extensions?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        users?: ({
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] & ({
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            user?: ({
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } & {
                email?: string | undefined;
                orgsIds?: ({
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } & {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } & { [K_10 in Exclude<keyof I["users"][number]["user"]["orgsIds"], string | number>]: never; }) | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } & { [K_11 in Exclude<keyof I["users"][number]["user"], keyof import("../../SylkUser/v1/SylkUser").SylkUser>]: never; }) | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_12 in Exclude<keyof I["users"][number], keyof SylkUserDisplay>]: never; })[] & { [K_13 in Exclude<keyof I["users"], keyof {
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof SylkOrganizationDisplay>]: never; }>(base?: I | undefined): SylkOrganizationDisplay;
    fromPartial<I_1 extends {
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } | undefined;
        projects?: {
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } | undefined;
                packageName?: string | undefined;
                extensions?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        users?: {
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & { [K_15 in Exclude<keyof I_1["organization"], keyof SylkOrganization>]: never; }) | undefined;
        projects?: ({
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } | undefined;
                packageName?: string | undefined;
                extensions?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
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
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
            } & {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
            } & { [K_16 in Exclude<keyof I_1["projects"][number]["members"], string | number>]: never; }) | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] & ({
                    outDir?: string | undefined;
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                } & {
                    outDir?: string | undefined;
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                } & { [K_17 in Exclude<keyof I_1["projects"][number]["project"]["clients"][number], keyof import("../../SylkClient/v1/SylkClient").SylkClient>]: never; })[] & { [K_18 in Exclude<keyof I_1["projects"][number]["project"]["clients"], keyof {
                    outDir?: string | undefined;
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[]>]: never; }) | undefined;
                server?: ({
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } & {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } & { [K_19 in Exclude<keyof I_1["projects"][number]["project"]["server"], "language">]: never; }) | undefined;
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
                } & { [K_20 in Exclude<keyof I_1["projects"][number]["project"]["extensions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_21 in Exclude<keyof I_1["projects"][number]["project"]["extensions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I_1["projects"][number]["project"], keyof import("../../SylkProject/v1/SylkProject").SylkProject>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I_1["projects"][number], keyof SylkProjectDisplay>]: never; })[] & { [K_24 in Exclude<keyof I_1["projects"], keyof {
            owner?: string | undefined;
            updatedAt?: Date | undefined;
            numMethods?: number | undefined;
            createdAt?: Date | undefined;
            members?: {
                [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
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
                    language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
                }[] | undefined;
                server?: {
                    language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
                } | undefined;
                packageName?: string | undefined;
                extensions?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        users?: ({
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[] & ({
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & {
            user?: ({
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } & {
                email?: string | undefined;
                orgsIds?: ({
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } & {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } & { [K_25 in Exclude<keyof I_1["users"][number]["user"]["orgsIds"], string | number>]: never; }) | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } & { [K_26 in Exclude<keyof I_1["users"][number]["user"], keyof import("../../SylkUser/v1/SylkUser").SylkUser>]: never; }) | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        } & { [K_27 in Exclude<keyof I_1["users"][number], keyof SylkUserDisplay>]: never; })[] & { [K_28 in Exclude<keyof I_1["users"], keyof {
            user?: {
                email?: string | undefined;
                orgsIds?: {
                    [x: string]: import("../../SylkUser/v1/SylkUser").SylkUserRoles | undefined;
                } | undefined;
                locale?: string | undefined;
                givenName?: string | undefined;
                nickname?: string | undefined;
                status?: import("../../SylkUser/v1/SylkUser").SylkUserStatuses | undefined;
                picture?: string | undefined;
                connection?: string | undefined;
                userId?: string | undefined;
                emailVerified?: boolean | undefined;
                familyName?: string | undefined;
            } | undefined;
            lastActive?: Date | undefined;
            createdAt?: Date | undefined;
            updatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof SylkOrganizationDisplay>]: never; }>(object: I_1): SylkOrganizationDisplay;
};
