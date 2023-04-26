import _m0 from "protobufjs/minimal";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkUser.v1.SylkUserStatuses] - */
export declare enum SylkUserStatuses {
    /** DEFAULT_SYLKUSERSTATUSES - [sylk.SylkUser.v1.SylkUserStatuses] - Default enum value for "sylk.SylkUser.v1.SylkUserStatuses" */
    DEFAULT_SYLKUSERSTATUSES = 0,
    /** ACTIVE - [sylk.SylkUser.v1.SylkUserStatuses] - */
    ACTIVE = 1,
    /** INACTIVE - [sylk.SylkUser.v1.SylkUserStatuses] - */
    INACTIVE = 2,
    /** PENDING - [sylk.SylkUser.v1.SylkUserStatuses] - */
    PENDING = 3,
    UNRECOGNIZED = -1
}
export declare function sylkUserStatusesFromJSON(object: any): SylkUserStatuses;
export declare function sylkUserStatusesToJSON(object: SylkUserStatuses): string;
/** [sylk.SylkUser.v1.SylkUserRoles] - */
export declare enum SylkUserRoles {
    /** DEFAULT_SYLKUSERROLES - [sylk.SylkUser.v1.SylkUserRoles] - Default enum value for "sylk.SylkUser.v1.SylkUserRoles" */
    DEFAULT_SYLKUSERROLES = 0,
    /** ADMIN - [sylk.SylkUser.v1.SylkUserRoles] - */
    ADMIN = 1,
    /** CONTRIBUTER - [sylk.SylkUser.v1.SylkUserRoles] - */
    CONTRIBUTER = 2,
    /** READER - [sylk.SylkUser.v1.SylkUserRoles] - */
    READER = 3,
    UNRECOGNIZED = -1
}
export declare function sylkUserRolesFromJSON(object: any): SylkUserRoles;
export declare function sylkUserRolesToJSON(object: SylkUserRoles): string;
/** [sylk.SylkUser.v1.SylkUser] - */
export interface SylkUser {
    /** [sylk.SylkUser.v1.SylkUser.user_id] - */
    userId: string;
    /** [sylk.SylkUser.v1.SylkUser.email] - */
    email: string;
    /** [sylk.SylkUser.v1.SylkUser.email_verified] - */
    emailVerified: boolean;
    /** [sylk.SylkUser.v1.SylkUser.family_name] - */
    familyName: string;
    /** [sylk.SylkUser.v1.SylkUser.given_name] - */
    givenName: string;
    /** [sylk.SylkUser.v1.SylkUser.locale] - */
    locale: string;
    /** [sylk.SylkUser.v1.SylkUser.nickname] - */
    nickname: string;
    /** [sylk.SylkUser.v1.SylkUser.picture] - */
    picture: string;
    /** [sylk.SylkUser.v1.SylkUser.connection] - */
    connection: string;
    /** [sylk.SylkUser.v1.SylkUser.status] - */
    status: SylkUserStatuses;
    /** [sylk.SylkUser.v1.SylkUser.orgs_ids] - */
    orgsIds: {
        [key: string]: SylkUserRoles;
    };
}
export interface SylkUser_OrgsIdsEntry {
    key: string;
    value: SylkUserRoles;
}
/** [sylk.SylkUser.v1.SylkUserDisplay] - */
export interface SylkUserDisplay {
    /** [sylk.SylkUser.v1.SylkUserDisplay.user] - */
    user?: SylkUser;
    /** [sylk.SylkUser.v1.SylkUserDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkUser.v1.SylkUserDisplay.updated_at] - */
    updatedAt?: Date;
    /** [sylk.SylkUser.v1.SylkUserDisplay.last_active] - */
    lastActive?: Date;
}
/** [sylk.SylkUser.v1.PersonalAccessToken] - */
export interface PersonalAccessToken {
    /** [sylk.SylkUser.v1.PersonalAccessToken.token] - */
    token: string;
    /** [sylk.SylkUser.v1.PersonalAccessToken.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkUser.v1.PersonalAccessToken.expires_at] - */
    expiresAt?: Date;
    /** [sylk.SylkUser.v1.PersonalAccessToken.revoked] - */
    revoked: boolean;
    /** [sylk.SylkUser.v1.PersonalAccessToken.description] - */
    description: string;
    /** [sylk.SylkUser.v1.PersonalAccessToken.org_id] - */
    orgId: string;
    /** [sylk.SylkUser.v1.PersonalAccessToken.user_id] - */
    userId: string;
}
export declare const SylkUser: {
    encode(message: SylkUser, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkUser;
    fromJSON(object: any): SylkUser;
    toJSON(message: SylkUser): unknown;
    create<I extends {
        userId?: string | undefined;
        email?: string | undefined;
        emailVerified?: boolean | undefined;
        familyName?: string | undefined;
        givenName?: string | undefined;
        locale?: string | undefined;
        nickname?: string | undefined;
        picture?: string | undefined;
        connection?: string | undefined;
        status?: SylkUserStatuses | undefined;
        orgsIds?: {
            [x: string]: SylkUserRoles | undefined;
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
        status?: SylkUserStatuses | undefined;
        orgsIds?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K in Exclude<keyof I["orgsIds"], string | number>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SylkUser>]: never; }>(base?: I | undefined): SylkUser;
    fromPartial<I_1 extends {
        userId?: string | undefined;
        email?: string | undefined;
        emailVerified?: boolean | undefined;
        familyName?: string | undefined;
        givenName?: string | undefined;
        locale?: string | undefined;
        nickname?: string | undefined;
        picture?: string | undefined;
        connection?: string | undefined;
        status?: SylkUserStatuses | undefined;
        orgsIds?: {
            [x: string]: SylkUserRoles | undefined;
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
        status?: SylkUserStatuses | undefined;
        orgsIds?: ({
            [x: string]: SylkUserRoles | undefined;
        } & {
            [x: string]: SylkUserRoles | undefined;
        } & { [K_2 in Exclude<keyof I_1["orgsIds"], string | number>]: never; }) | undefined;
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
            userId?: string | undefined;
            email?: string | undefined;
            emailVerified?: boolean | undefined;
            familyName?: string | undefined;
            givenName?: string | undefined;
            locale?: string | undefined;
            nickname?: string | undefined;
            picture?: string | undefined;
            connection?: string | undefined;
            status?: SylkUserStatuses | undefined;
            orgsIds?: {
                [x: string]: SylkUserRoles | undefined;
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
            status?: SylkUserStatuses | undefined;
            orgsIds?: {
                [x: string]: SylkUserRoles | undefined;
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
            status?: SylkUserStatuses | undefined;
            orgsIds?: ({
                [x: string]: SylkUserRoles | undefined;
            } & {
                [x: string]: SylkUserRoles | undefined;
            } & { [K in Exclude<keyof I["user"]["orgsIds"], string | number>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["user"], keyof SylkUser>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        lastActive?: Date | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SylkUserDisplay>]: never; }>(base?: I | undefined): SylkUserDisplay;
    fromPartial<I_1 extends {
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
            status?: SylkUserStatuses | undefined;
            orgsIds?: {
                [x: string]: SylkUserRoles | undefined;
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
            status?: SylkUserStatuses | undefined;
            orgsIds?: {
                [x: string]: SylkUserRoles | undefined;
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
            status?: SylkUserStatuses | undefined;
            orgsIds?: ({
                [x: string]: SylkUserRoles | undefined;
            } & {
                [x: string]: SylkUserRoles | undefined;
            } & { [K_3 in Exclude<keyof I_1["user"]["orgsIds"], string | number>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I_1["user"], keyof SylkUser>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
        lastActive?: Date | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof SylkUserDisplay>]: never; }>(object: I_1): SylkUserDisplay;
};
export declare const PersonalAccessToken: {
    encode(message: PersonalAccessToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PersonalAccessToken;
    fromJSON(object: any): PersonalAccessToken;
    toJSON(message: PersonalAccessToken): unknown;
    create<I extends {
        token?: string | undefined;
        createdAt?: Date | undefined;
        expiresAt?: Date | undefined;
        revoked?: boolean | undefined;
        description?: string | undefined;
        orgId?: string | undefined;
        userId?: string | undefined;
    } & {
        token?: string | undefined;
        createdAt?: Date | undefined;
        expiresAt?: Date | undefined;
        revoked?: boolean | undefined;
        description?: string | undefined;
        orgId?: string | undefined;
        userId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof PersonalAccessToken>]: never; }>(base?: I | undefined): PersonalAccessToken;
    fromPartial<I_1 extends {
        token?: string | undefined;
        createdAt?: Date | undefined;
        expiresAt?: Date | undefined;
        revoked?: boolean | undefined;
        description?: string | undefined;
        orgId?: string | undefined;
        userId?: string | undefined;
    } & {
        token?: string | undefined;
        createdAt?: Date | undefined;
        expiresAt?: Date | undefined;
        revoked?: boolean | undefined;
        description?: string | undefined;
        orgId?: string | undefined;
        userId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof PersonalAccessToken>]: never; }>(object: I_1): PersonalAccessToken;
};
