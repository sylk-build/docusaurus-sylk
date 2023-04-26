import { SylkEnum } from "./sylk/protos/SylkEnum";
import { SylkMessage } from "./sylk/protos/SylkMessage";
import { SylkMethod } from "./sylk/protos/SylkMethod";
import { SylkPackage } from "./sylk/protos/SylkPackage";
import { SylkProject } from "./sylk/protos/SylkProject";
import { SylkService } from "./sylk/protos/SylkService";

export interface EnumValue {
    name: string;
    number: number;
    description: string;
  }
  
  export interface Enum {
    name: string;
    longName: string;
    fullName: string;
    description: string;
    values: EnumValue[];
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
  }

  type rootResources = SylkProject|SylkPackage|SylkService
  export interface ResourceDescriptor {
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