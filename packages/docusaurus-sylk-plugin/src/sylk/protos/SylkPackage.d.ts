import _m0 from "protobufjs/minimal";
import { SylkEnum } from "./SylkEnum";
import { SylkMessage } from "./SylkMessage";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.SylkPackage.v1.SylkPackage] - */
export interface SylkPackage {
    /** [sylk.SylkPackage.v1.SylkPackage.uri] - */
    uri: string;
    /** [sylk.SylkPackage.v1.SylkPackage.name] - */
    name: string;
    /** [sylk.SylkPackage.v1.SylkPackage.package] - */
    package: string;
    /** [sylk.SylkPackage.v1.SylkPackage.messages] - */
    messages: SylkMessage[];
    /** [sylk.SylkPackage.v1.SylkPackage.enums] - */
    enums: SylkEnum[];
    /** [sylk.SylkPackage.v1.SylkPackage.description] - */
    description: string;
    /** [sylk.SylkPackage.v1.SylkPackage.type] - */
    type: string;
    /** [sylk.SylkPackage.v1.SylkPackage.dependencies] - */
    dependencies: string[];
    /** [sylk.SylkPackage.v1.SylkPackage.extensions] - */
    extensions: {
        [key: string]: {
            [key: string]: any;
        };
    };
}
export interface SylkPackage_ExtensionsEntry {
    key: string;
    value?: {
        [key: string]: any;
    };
}
/** [sylk.SylkPackage.v1.SylkPackageDisplay] - */
export interface SylkPackageDisplay {
    /** [sylk.SylkPackage.v1.SylkPackageDisplay.package] - */
    package?: SylkPackage;
    /** [sylk.SylkPackage.v1.SylkPackageDisplay.created_at] - */
    createdAt?: Date;
    /** [sylk.SylkPackage.v1.SylkPackageDisplay.updated_at] - */
    updatedAt?: Date;
}
export declare const SylkPackage: {
    encode(message: SylkPackage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkPackage;
    fromJSON(object: any): SylkPackage;
    toJSON(message: SylkPackage): unknown;
    create<I extends {
        uri?: string | undefined;
        name?: string | undefined;
        package?: string | undefined;
        messages?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        }[] | undefined;
        enums?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] | undefined;
        description?: string | undefined;
        type?: string | undefined;
        dependencies?: string[] | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        package?: string | undefined;
        messages?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                oneofFields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & { [K_2 in Exclude<keyof I["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["messages"][number]["fields"][number]["oneofFields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_5 in Exclude<keyof I["messages"][number]["fields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_6 in Exclude<keyof I["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["messages"][number]["extensions"], string | number>]: never; }) | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        } & { [K_8 in Exclude<keyof I["messages"][number], keyof SylkMessage>]: never; })[] & { [K_9 in Exclude<keyof I["messages"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        }[]>]: never; }) | undefined;
        enums?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & { [K_10 in Exclude<keyof I["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_11 in Exclude<keyof I["enums"][number]["values"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & { [K_12 in Exclude<keyof I["enums"][number], keyof SylkEnum>]: never; })[] & { [K_13 in Exclude<keyof I["enums"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[]>]: never; }) | undefined;
        description?: string | undefined;
        type?: string | undefined;
        dependencies?: (string[] & string[] & { [K_14 in Exclude<keyof I["dependencies"], keyof string[]>]: never; }) | undefined;
        extensions?: ({
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } & {
            [x: string]: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K_15 in Exclude<keyof I["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["extensions"], string | number>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof SylkPackage>]: never; }>(base?: I | undefined): SylkPackage;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        name?: string | undefined;
        package?: string | undefined;
        messages?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        }[] | undefined;
        enums?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] | undefined;
        description?: string | undefined;
        type?: string | undefined;
        dependencies?: string[] | undefined;
        extensions?: {
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } | undefined;
    } & {
        uri?: string | undefined;
        name?: string | undefined;
        package?: string | undefined;
        messages?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_18 in Exclude<keyof I_1["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I_1["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                oneofFields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                } & { [K_20 in Exclude<keyof I_1["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_21 in Exclude<keyof I_1["messages"][number]["fields"][number]["oneofFields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I_1["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_23 in Exclude<keyof I_1["messages"][number]["fields"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_24 in Exclude<keyof I_1["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I_1["messages"][number]["extensions"], string | number>]: never; }) | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        } & { [K_26 in Exclude<keyof I_1["messages"][number], keyof SylkMessage>]: never; })[] & { [K_27 in Exclude<keyof I_1["messages"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            fields?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                label?: import("./SylkField").SylkFieldLabels | undefined;
                keyType?: import("./SylkField").SylkFieldTypes | undefined;
                valueType?: import("./SylkField").SylkFieldTypes | undefined;
                messageType?: string | undefined;
                enumType?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                index?: number | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                oneofFields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                }[] | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            extensionType?: import("./SylkCommons").SylkExtensions | undefined;
        }[]>]: never; }) | undefined;
        enums?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[] & ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & { [K_28 in Exclude<keyof I_1["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_29 in Exclude<keyof I_1["enums"][number]["values"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        } & { [K_30 in Exclude<keyof I_1["enums"][number], keyof SylkEnum>]: never; })[] & { [K_31 in Exclude<keyof I_1["enums"], keyof {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            values?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                index?: number | undefined;
                number?: number | undefined;
                description?: string | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            type?: string | undefined;
            kind?: string | undefined;
        }[]>]: never; }) | undefined;
        description?: string | undefined;
        type?: string | undefined;
        dependencies?: (string[] & string[] & { [K_32 in Exclude<keyof I_1["dependencies"], keyof string[]>]: never; }) | undefined;
        extensions?: ({
            [x: string]: {
                [x: string]: any;
            } | undefined;
        } & {
            [x: string]: ({
                [x: string]: any;
            } & {
                [x: string]: any;
            } & { [K_33 in Exclude<keyof I_1["extensions"][string], string | number>]: never; }) | undefined;
        } & { [K_34 in Exclude<keyof I_1["extensions"], string | number>]: never; }) | undefined;
    } & { [K_35 in Exclude<keyof I_1, keyof SylkPackage>]: never; }>(object: I_1): SylkPackage;
};
export declare const SylkPackage_ExtensionsEntry: {
    encode(message: SylkPackage_ExtensionsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkPackage_ExtensionsEntry;
    fromJSON(object: any): SylkPackage_ExtensionsEntry;
    toJSON(message: SylkPackage_ExtensionsEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            [x: string]: any;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K in Exclude<keyof I["value"], string | number>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SylkPackage_ExtensionsEntry>]: never; }>(base?: I | undefined): SylkPackage_ExtensionsEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            [x: string]: any;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            [x: string]: any;
        } & {
            [x: string]: any;
        } & { [K_2 in Exclude<keyof I_1["value"], string | number>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof SylkPackage_ExtensionsEntry>]: never; }>(object: I_1): SylkPackage_ExtensionsEntry;
};
export declare const SylkPackageDisplay: {
    encode(message: SylkPackageDisplay, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkPackageDisplay;
    fromJSON(object: any): SylkPackageDisplay;
    toJSON(message: SylkPackageDisplay): unknown;
    create<I extends {
        package?: {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        package?: ({
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K in Exclude<keyof I["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_1 in Exclude<keyof I["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    oneofFields?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & { [K_2 in Exclude<keyof I["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["package"]["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_5 in Exclude<keyof I["package"]["messages"][number]["fields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_6 in Exclude<keyof I["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & { [K_8 in Exclude<keyof I["package"]["messages"][number], keyof SylkMessage>]: never; })[] & { [K_9 in Exclude<keyof I["package"]["messages"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[]>]: never; }) | undefined;
            enums?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & { [K_10 in Exclude<keyof I["package"]["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_11 in Exclude<keyof I["package"]["enums"][number]["values"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & { [K_12 in Exclude<keyof I["package"]["enums"][number], keyof SylkEnum>]: never; })[] & { [K_13 in Exclude<keyof I["package"]["enums"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: (string[] & string[] & { [K_14 in Exclude<keyof I["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_15 in Exclude<keyof I["package"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["package"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["package"], keyof SylkPackage>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_18 in Exclude<keyof I, keyof SylkPackageDisplay>]: never; }>(base?: I | undefined): SylkPackageDisplay;
    fromPartial<I_1 extends {
        package?: {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & {
        package?: ({
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_19 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_20 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    oneofFields?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & { [K_21 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_22 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number]["oneofFields"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I_1["package"]["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_24 in Exclude<keyof I_1["package"]["messages"][number]["fields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_25 in Exclude<keyof I_1["package"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I_1["package"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & { [K_27 in Exclude<keyof I_1["package"]["messages"][number], keyof SylkMessage>]: never; })[] & { [K_28 in Exclude<keyof I_1["package"]["messages"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[]>]: never; }) | undefined;
            enums?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & { [K_29 in Exclude<keyof I_1["package"]["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_30 in Exclude<keyof I_1["package"]["enums"][number]["values"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & { [K_31 in Exclude<keyof I_1["package"]["enums"][number], keyof SylkEnum>]: never; })[] & { [K_32 in Exclude<keyof I_1["package"]["enums"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: (string[] & string[] & { [K_33 in Exclude<keyof I_1["package"]["dependencies"], keyof string[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_34 in Exclude<keyof I_1["package"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["package"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I_1["package"], keyof SylkPackage>]: never; }) | undefined;
        createdAt?: Date | undefined;
        updatedAt?: Date | undefined;
    } & { [K_37 in Exclude<keyof I_1, keyof SylkPackageDisplay>]: never; }>(object: I_1): SylkPackageDisplay;
};
