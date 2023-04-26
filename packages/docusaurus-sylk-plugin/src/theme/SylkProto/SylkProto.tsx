import React from 'react';
import Link from '@docusaurus/Link';
import { Enum, ResourceDescriptor, Message, MessageField, Service, ServiceMethod } from '../../types';
import { SylkMessage } from '../../sylk/protos/SylkMessage';
import { SylkField, SylkFieldLabels, sylkFieldTypesToJSON } from '../../sylk/protos/SylkField';
import { SylkFieldTypes } from '../../sylk/protos/SylkField';
interface ComponentProps {
    id?: string;
    children?:string;
  }
interface MessageProps {
    message: SylkMessage;
    packageDep: string[];
}
  
interface ComponentsProps {
h1: React.FC<ComponentProps>;
h2: React.FC<ComponentProps>;
h3: React.FC<ComponentProps>;
h4: React.FC<ComponentProps>;
}

const leftHeaderStyles: React.CSSProperties = {
textAlign: "left",
};

interface EnumProps {
enumb: Enum;
}

interface Props {
    fileDescriptor: ResourceDescriptor;
    components: ComponentsProps;
}

interface MessageFieldsProps {
    fields: SylkField[];
    packageDep:string[];
}

const parseNestedTypeLink = (nestedType:string,dependencies:string[]):string => {
  const wellKnownTypes = `https://protobuf.dev/reference/protobuf/google.protobuf/#`

  let preNav = ''
  let link = ''
  console.log(dependencies)
  if(dependencies.includes(nestedType.split('.').slice(0,3).join('.'))) {
    preNav = `../${nestedType.split('.')[1]}/${nestedType.split('.')[2]}`
  } 
  if (nestedType.includes('google.protobuf.')) {
    link = wellKnownTypes+nestedType.split('.').pop()?.toLocaleLowerCase()
  } else {
    link = preNav+'#'+nestedType.split('.').join('').toLocaleLowerCase()
  }
  return link
}

const SylkProtoMessageFields = (props: MessageFieldsProps) => {
    const { fields, packageDep } = props;

    const spanP :any = {
      "font-weight": "bold"
    }
    const spanNt :any = {
      "color": "#204a87"
    }

    const getFieldTypeLink = (field:SylkField):string => {
      const protobufScalars =  `https://protobuf.dev/programming-guides/proto3/#scalar` 
      return field.fieldType === SylkFieldTypes.TYPE_MESSAGE 
          ? parseNestedTypeLink(field.messageType,packageDep) 
          : field.fieldType === SylkFieldTypes.TYPE_ENUM 
          ? parseNestedTypeLink(field.enumType,packageDep)
          : protobufScalars
    }

    const FieldsData = () => {
      return (
        <div>
        {fields.map(field => {
          let fieldTypeLink = getFieldTypeLink(field)
          let displayFieldType = field.fieldType === SylkFieldTypes.TYPE_MESSAGE ? field.messageType : field.fieldType === SylkFieldTypes.TYPE_ENUM ? field.enumType : sylkFieldTypesToJSON(field.fieldType).split('_')[1].toLocaleLowerCase()
          return (
          <dl>
            <dt style={spanP} id={field.fullName}>{field.name}</dt>
            <dd>
              <p><span>({field.label === SylkFieldLabels.LABEL_REPEATED ?'repeated ' : ''}<Link to={fieldTypeLink}>{displayFieldType}</Link>)</span> {field.description}</p>
            </dd>
          </dl>
        )})}
        </div>
      )
    }
    
    const FieldRows = () => (
      <pre>
        <span></span>
        <span>&#123;</span>
        {fields.map(field => (
            <div>
                <span> </span>
                <span style={spanNt}>
                  "{field.name}"
                </span>
                <span style={spanP}>:</span>
                <span> </span>
                <span>
                    {field.messageType || field.enumType ? <>{field.label === SylkFieldLabels.LABEL_REPEATED ? '[':'{'}<Link to={getFieldTypeLink(field)}>...</Link>{field.label === SylkFieldLabels.LABEL_REPEATED ? ']':'}'}</> : <>...</> }
                    {field.index<fields.length ? ',': ''}
                </span>
            </div>
          
        ))}
        <span>&#125;</span>
        <span></span>
      </pre>
    );
  
    return (
      <div>
        <FieldRows />
        <FieldsData />
      </div>
    )
  }

export const SylkMessageProto = (props: MessageProps) => {
    const { message , packageDep } = props;
  
    return (
      <>
        <Link to={message.fullName}>[{message.fullName}]</Link>
        
        <p style={{ whiteSpace: 'pre-wrap' }}>{message.description}</p>

        <SylkProtoMessageFields packageDep={packageDep} fields={message.fields} />
      </>
    );
}

export const SylkEnumProto = (props: EnumProps) => {
  const { enumb } = props;
  const styleDef:any = {
    "margin-right": ".5rem"
  }
  const styleTitle:any = {
    "font-weight": "bold"
  }
  const ValueRows = () => (
    <>
      {enumb.values.map(enumValue => (
        <>
        <dt style={styleTitle}>{enumValue.name}</dt>
        <dd>
          <p>
            {enumValue.number === 0 ? <span style={styleDef}><em>(DEFAULT)</em></span> : ''}
            {enumValue.description}
          </p>
        </dd>
        </>
      ))}
   </>
  );

  return (
    <>
      <p style={{ whiteSpace: 'pre-wrap' }}>{enumb.description}</p>
      <dl>
        <ValueRows />
      </dl>
    </>
  );
};

const SylkProto = (props: Props) => {
    const { fileDescriptor, components } = props;
    const deps = fileDescriptor.resource.dependencies ? fileDescriptor.resource.dependencies : []
    console.log(deps)
    return (
      <>
        <components.h1>{fileDescriptor.resource.name}</components.h1>
        {/* <p style={{ whiteSpace: 'pre-wrap' }}>{fileDescriptor.resource.description}</p> */}
        {fileDescriptor.resource?.messages?.map((message:any, i:any) => (
          <SylkMessageProto  packageDep={deps} message={message} key={i} />
        ))}
      </>
    );
  }
  
export default SylkProto;