import { SylkEnum } from "./sylk/protos/sylk/SylkEnum/v2/SylkEnum";
import { SylkMessage } from "./sylk/protos/sylk/SylkMessage/v2/SylkMessage";
import { SylkMethod } from "./sylk/protos/sylk/SylkMethod/v1/SylkMethod";
import { SylkPackage } from "./sylk/protos/sylk/SylkPackage/v2/SylkPackage";
import { SylkProject } from "./sylk/protos/sylk/SylkProject/v1/SylkProject";
import { SylkService } from "./sylk/protos/sylk/SylkService/v2/SylkService";

export interface EnumValue {
    name: string;
    number: number;
    index: number;
    description: string;
  }
  
  export interface Enum {
    name: string;
    longName: string;
    fullName: string;
    description: string;
    values: EnumValue[];
    tag?: string;
  }
  
  export interface MessageField {
    name: string;
    description: string;
    fullName?:string;
    label: string;
    type: string;
    longType: string;
    fullType: string;
    ismap: boolean;
    isoneof: boolean;
    typeLink?: string;
  }
  
  export interface Message {
    name: string;
    longName: string;
    fullName: string;
    description: string;
    fields: MessageField[];
    tag?: string;
  }
  
  export interface ServiceMethod {
    name: string;
    description: string;
    requestType: string;
    requestLongType: string;
    requestFullType: string;
    requestStreaming: boolean;
    responseType: string;
    responseLongType: string;
    responseFullType: string;
    responseStreaming: boolean;
    requestTypeLink?: string;
    responseTypeLink?: string;
  }
  
  export interface Service {
    name: string;
    fullName: string;
    description: string;
    methods: ServiceMethod[];
    tag?: string;
  }

  type rootResources = SylkProject|SylkPackage|SylkService
  export interface ResourceDescriptor {
    inlines?: any[],
    resource: rootResources & {
      dependencies?: string[],
      package?:string;
      messages?:SylkMessage[],
      methods?:SylkMethod[],
      enums?:SylkEnum[],
      fullName?:string,
      type?:string
    }
  }
  
  export interface SylkDescriptor {
    packages: ResourceDescriptor[];
  }
  
  export interface GeneratedDocFile {
    fileContents: string;
    fileName: string;
    resourceDescriptor?: ResourceDescriptor;
  }