import _m0 from "protobufjs/minimal";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.SylkUser.v1.SylkUserStatuses] - None */
export declare enum SylkUserStatuses {
    /** DEFAULT_SYLKUSERSTATUSES - [sylk.SylkUser.v1.SylkUserStatuses] - Default enum value for "sylk.SylkUser.v1.SylkUserStatuses" */
    DEFAULT_SYLKUSERSTATUSES = 0,
    /** ACTIVE - [sylk.SylkUser.v1.SylkUserStatuses] - None */
    ACTIVE = 1,
    /** INACTIVE - [sylk.SylkUser.v1.SylkUserStatuses] - None */
    INACTIVE = 2,
    /** PENDING - [sylk.SylkUser.v1.SylkUserStatuses] - None */
    PENDING = 3,
    UNRECOGNIZED = -1
}
export declare function sylkUserStatusesFromJSON(object: any): SylkUserStatuses;
export declare function sylkUserStatusesToJSON(object: SylkUserStatuses): string;
/** [sylk.SylkUser.v1.SylkUserRoles] - None */
export declare enum SylkUserRoles {
    /** DEFAULT_SYLKUSERROLES - [sylk.SylkUser.v1.SylkUserRoles] - Default enum value for "sylk.SylkUser.v1.SylkUserRoles" */
    DEFAULT_SYLKUSERROLES = 0,
    /** ADMIN - [sylk.SylkUser.v1.SylkUserRoles] - None */
    ADMIN = 1,
    /** CONTRIBUTER - [sylk.SylkUser.v1.SylkUserRoles] - None */
    CONTRIBUTER = 2,
    /** READER - [sylk.SylkUser.v1.SylkUserRoles] - None */
    READER = 3,
    UNRECOGNIZED = -1
}
export declare function sylkUserRolesFromJSON(object: any): SylkUserRoles;
export declare function sylkUserRolesToJSON(object: SylkUserRoles): string;
/** [sylk.SylkUser.v1.PersonalAccessToken] - None */
export interface PersonalAccessToken {
    token: string;
    orgId: string;
    description: string;
    expiresAt?: Date;
    createdAt?: Date;
    revoked: boolean;
    userId: string;
}
/** [sylk.SylkUser.v1.SylkUser] - None */
export interface SylkUser {
    email: string;
    orgsIds: {
        [key: string]: SylkUserRoles;
    };
    locale: string;
    givenName: string;
    nickname: string;
    status: SylkUserStatuses;
    picture: string;
    connection: string;
    userId: string;
    emailVerified: boolean;
    familyName: string;
}
export interface SylkUser_OrgsIdsEntry {
    key: string;
    value: SylkUserRoles;
}
/** [sylk.SylkUser.v1.SylkUserDisplay] - None */
export interface SylkUserDisplay {
    user?: SylkUser;
    lastActive?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const PersonalAccessToken: {
    encode(message: PersonalAccessToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PersonalAccessToken;
    fromJSON(object: any): PersonalAccessToken;
    toJSON(message: PersonalAccessToken): unknown;
    create<I extends {
        token?: string | undefined;
        orgId?: string | undefined;
        description?: string | undefined;
        expiresAt?: Date | undefined;
        createdAt?: Date | undefined;
        revoked?: boolean | undefined;
        userId?: string | undefined;
    } & {
        token?: string | undefined;
        orgId?: string | undefined;
        description?: string | undefined;
        expiresAt?: Date | undefined;
        createdAt?: Date | undefined;
        revoked?: boolean | undefined;
        userId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof PersonalAccessToken>]: never; }>(base?: I | undefined): PersonalAccessToken;
    fromPartial<I_1 extends {
        token?: string | undefined;
        orgId?: string | undefined;
        description?: string | undefined;
        expiresAt?: Date | undefined;
        createdAt?: Date | undefined;
        revoked?: boolean | undefined;
        userId?: string | undefined;
    } & {
        token?: string | undefined;
        orgId?: string | undefined;
        description?: string | undefined;
        expiresAt?: Date | undefined;
        createdAt?: Date | undefined;
        revoked?: boolean | undefined;
        userId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PersonalAccessToken>]: never; }>(object: I_1): PersonalAccessToken;
};
export declare const SylkUser: {
    encode(message: SylkUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkUser;
    fromJSON(object: any): SylkUser;
    toJSON(message: SylkUser): unknown;
    create<I extends {
        email?: string | undefined;
        orgsIds?: {
            [x: string]: SylkUserRoles | undefined;
        } | undefined;
        locale?: string | undefined;
        givenName?: string | undefined;
        nickname?: string | undefined;
        status?: SylkUserStatuses | undefined;
        picture?: string | undefined;
        connection?: string | undefined;
        userId?: string | undefined;
        emailVerified?: boolean | undefined;
        familyName?: string | undefined;
    } & {
        email?: string | undefined;
        orgsIds?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K in Exclude<keyof I["orgsIds"], string | number>]: never; }) | undefined;
        locale?: string | undefined;
        givenName?: string | undefined;
        nickname?: string | undefined;
        status?: SylkUserStatuses | undefined;
        picture?: string | undefined;
        connection?: string | undefined;
        userId?: string | undefined;
        emailVerified?: boolean | undefined;
        familyName?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SylkUser>]: never; }>(base?: I | undefined): SylkUser;
    fromPartial<I_1 extends {
        email?: string | undefined;
        orgsIds?: {
            [x: string]: SylkUserRoles | undefined;
        } | undefined;
        locale?: string | undefined;
        givenName?: string | undefined;
        nickname?: string | undefined;
        status?: SylkUserStatuses | undefined;
        picture?: string | undefined;
        connection?: string | undefined;
        userId?: string | undefined;
        emailVerified?: boolean | undefined;
        familyName?: string | undefined;
    } & {
        email?: string | undefined;
        orgsIds?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K_2 in Exclude<keyof I_1["orgsIds"], string | number>]: never; }) | undefined;
        locale?: string | undefined;
        givenName?: string | undefined;
        nickname?: string | undefined;
        status?: SylkUserStatuses | undefined;
        picture?: string | undefined;
        connection?: string | undefined;
        userId?: string | undefined;
        emailVerified?: boolean | undefined;
        familyName?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SylkUser>]: never; }>(object: I_1): SylkUser;
};
export declare const SylkUser_OrgsIdsEntry: {
    encode(message: SylkUser_OrgsIdsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkUser_OrgsIdsEntry;
    fromJSON(object: any): SylkUser_OrgsIdsEntry;
    toJSON(message: SylkUser_OrgsIdsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & { [K in Exclude<keyof I, keyof SylkUser_OrgsIdsEntry>]: never; }>(base?: I | undefined): SylkUser_OrgsIdsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & {
        key?: string | undefined;
        value?: SylkUserRoles | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SylkUser_OrgsIdsEntry>]: never; }>(object: I_1): SylkUser_OrgsIdsEntry;
};
export declare const SylkUserDisplay: {
    encode(message: SylkUserDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkUserDisplay;
    fromJSON(object: any): SylkUserDisplay;
    toJSON(message: SylkUserDisplay): unknown;
    create<I extends {
        user?: {
            email?: string | undefined;
            orgsIds?: {
                [x: string]: SylkUserRoles | undefined;
            } | undefined;
            locale?: string | undefined;
            givenName?: string | undefined;
            nickname?: string | undefined;
            status?: SylkUserStatuses | undefined;
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
                [x: string]: SylkUserRoles | undefined;
            } | undefined;
            locale?: string | undefined;
            givenName?: string | undefined;
            nickname?: string | undefined;
            status?: SylkUserStatuses | undefined;
            picture?: string | undefined;
            connection?: string | undefined;
            userId?: string | undefined;
            emailVerified?: boolean | undefined;
            familyName?: string | undefined;
        } & {
            email?: string | undefined;
            orgsIds?: ({
                [x: string]: SylkUserRoles | undefined;
            } & {
                [x: string]: SylkUserRoles | undefined;
            } & { [K in Exclude<keyof I["user"]["orgsIds"], string | number>]: never; }) | undefined;
            locale?: string | undefined;
            givenName?: string | undefined;
            nickname?: string | undefined;
            status?: SylkUserStatuses | undefined;
            picture?: string | undefined;
            connection?: string | undefined;
            userId?: string | undefined;
            emailVerified?: boolean | undefined;
            familyName?: string | undefined;
        } & { [K_1 in Exclude<keyof I["user"], keyof SylkUser>]: never; }) | undefined;
        lastActive?: Date | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkUserDisplay>]: never; }>(base?: I | undefined): SylkUserDisplay;
    fromPartial<I_1 extends {
        user?: {
            email?: string | undefined;
            orgsIds?: {
                [x: string]: SylkUserRoles | undefined;
            } | undefined;
            locale?: string | undefined;
            givenName?: string | undefined;
            nickname?: string | undefined;
            status?: SylkUserStatuses | undefined;
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
                [x: string]: SylkUserRoles | undefined;
            } | undefined;
            locale?: string | undefined;
            givenName?: string | undefined;
            nickname?: string | undefined;
            status?: SylkUserStatuses | undefined;
            picture?: string | undefined;
            connection?: string | undefined;
            userId?: string | undefined;
            emailVerified?: boolean | undefined;
            familyName?: string | undefined;
        } & {
            email?: string | undefined;
            orgsIds?: ({
                [x: string]: SylkUserRoles | undefined;
            } & {
                [x: string]: SylkUserRoles | undefined;
            } & { [K_3 in Exclude<keyof I_1["user"]["orgsIds"], string | number>]: never; }) | undefined;
            locale?: string | undefined;
            givenName?: string | undefined;
            nickname?: string | undefined;
            status?: SylkUserStatuses | undefined;
            picture?: string | undefined;
            connection?: string | undefined;
            userId?: string | undefined;
            emailVerified?: boolean | undefined;
            familyName?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["user"], keyof SylkUser>]: never; }) | undefined;
        lastActive?: Date | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SylkUserDisplay>]: never; }>(object: I_1): SylkUserDisplay;
};
