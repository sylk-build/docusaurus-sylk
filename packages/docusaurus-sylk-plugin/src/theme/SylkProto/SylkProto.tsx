import React from 'react';
import Link from '@docusaurus/Link';
import ReactMarkdown from 'react-markdown';

import { Enum, ResourceDescriptor, Message, MessageField, Service, ServiceMethod } from '../../types';
import { SylkMessage } from '../../sylk/protos/sylk/SylkMessage/v2/SylkMessage';
import { SylkField, SylkFieldLabels, sylkFieldTypesToJSON, SylkFieldTypes } from '../../sylk/protos/sylk/SylkField/v1/SylkField';
import { SylkMethod } from '../../sylk/protos/sylk/SylkMethod/v1/SylkMethod';
import { SylkService } from '../../sylk/protos/sylk/SylkService/v2/SylkService';
import clsx from 'clsx';
interface ComponentProps {
  id?: string;
  children?: string;
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
  packageDep: string[];
}

interface ServiceProps {
  service: SylkService;
}

interface ServiceMethodProps {
  method: SylkMethod;
  dependencies: string[];
}

interface ServiceMethodsProps {
  methods: SylkMethod[];
  dependencies: string[];
}

const parseNestedTypeLink = (nestedType: string, dependencies: string[], fromService: boolean = false): string => {
  const wellKnownTypes = `https://protobuf.dev/reference/protobuf/google.protobuf/#`

  let preNav = ''
  let link = ''
  console.log(dependencies)
  if (dependencies.includes(nestedType.split('.').slice(0, 3).join('.'))) {
    preNav = fromService ? `../../packages/${nestedType.split('.')[1]}/${nestedType.split('.')[2]}` : `../${nestedType.split('.')[1]}/${nestedType.split('.')[2]}`
  }
  if (nestedType.includes('google.protobuf.')) {
    link = wellKnownTypes + nestedType.split('.').pop()?.toLocaleLowerCase()
  } else {
    let tempName = nestedType.split('.').pop();
    if (tempName) {
      link = preNav + '#' + tempName.toLocaleLowerCase()
    }
  }
  return link
}

export const SylkMethodProto = ({ method, dependencies }: ServiceMethodProps) => (
  <table>
    <tbody>
      <tr>
        <th style={leftHeaderStyles}>Method</th>
        <td><code>{method.name}</code></td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Request</th>
        <td>
          <Link to={parseNestedTypeLink(method.inputType, dependencies, true)}><code>{method.inputType}</code></Link>
          {method.clientStreaming === true ? ' stream' : ''}
        </td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Response</th>
        <td>
          <Link to={parseNestedTypeLink(method.outputType, dependencies, true)}><code>{method.outputType}</code></Link>
          {method.serverStreaming === true ? ' stream' : ''}
        </td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Description</th>
        <td>{method.description}</td>
      </tr>
    </tbody>
  </table>
)

export const SylkMethodsProto = (props: ServiceMethodsProps) => {
  const { methods, dependencies } = props;

  return (
    <>
      {methods.map((method, i) => (
        <SylkMethodProto dependencies={dependencies} method={method} key={`${method.name}-${i}`} />
      ))}
    </>
  );
}

export const ProtoService = (props: ServiceProps) => {
  const { service } = props;

  return (
    <>
      <p style={{ whiteSpace: 'pre-wrap' }}>{service.description}</p>
      <SylkMethodsProto dependencies={service.dependencies} methods={service.methods} />
    </>
  )
}

const SylkProtoMessageFields = (props: MessageFieldsProps) => {
  const { fields, packageDep } = props;

  const spanP: any = {
    "font-weight": "bold"
  }
  // const spanNt :any = {
  //   "color": "#57E344"
  // }

  const getFieldTypeLink = (field: SylkField): string => {
    const protobufScalars = `https://protobuf.dev/programming-guides/proto3/#scalar`
    return field.fieldType === SylkFieldTypes.TYPE_MESSAGE
      ? parseNestedTypeLink(field.messageType, packageDep)
      : field.fieldType === SylkFieldTypes.TYPE_ENUM
        ? parseNestedTypeLink(field.enumType, packageDep)
        : protobufScalars
  }

  const FieldsData = () => {
    return (
      <div>
        {fields.map(field => {
          let fieldTypeLink = getFieldTypeLink(field)
          const fieldType = sylkFieldTypesToJSON(field.fieldType);
          let displayFieldType = field.fieldType === SylkFieldTypes.TYPE_MESSAGE ? field.messageType : field.fieldType === SylkFieldTypes.TYPE_ENUM ? field.enumType : fieldType.split('_')[1].toLocaleLowerCase()
          return (
            <dl>
              <dt style={spanP} id={field.fullName}>{field.name}</dt>
              <dd>
                <p><span>({field.label === SylkFieldLabels.LABEL_REPEATED ? 'repeated ' : ''}<Link to={fieldTypeLink}>{displayFieldType}</Link>)</span>
                  <ReactMarkdown>{field.description}</ReactMarkdown>

                </p>
              </dd>
            </dl>
          )
        })}
      </div>
    )
  }

  const FieldRows = () => (
    <pre>
      <span></span>
      <span>&#123;</span>
      {fields.map(field => (
        <div className={clsx('padding-vert--sm')}>
          <span> </span>
          <span className="sylk-field">
            "{field.name}"
          </span>
          <span style={spanP}>:</span>
          <span> </span>
          <span>
            {field.messageType || field.enumType ? <><Link className={clsx(
                'button button--outline button--sm button--primary',
              )} to={getFieldTypeLink(field)}>{field.label === SylkFieldLabels.LABEL_REPEATED ? '[' : '{'}...{field.label === SylkFieldLabels.LABEL_REPEATED ? ']' : '}'}</Link></> : <><code>...</code></>}
            {field.index < fields.length ? ',' : ''}
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
  const { message, packageDep } = props;

  return (
    <>
      <div style={{ whiteSpace: 'pre-wrap' }}>

        <ReactMarkdown>{message.description}</ReactMarkdown>

      </div>

      <SylkProtoMessageFields packageDep={packageDep} fields={message.fields} />
    </>
  );
}

export const SylkEnumProto = (props: EnumProps) => {
  const { enumb } = props;
  const styleDef: any = {
    "margin-right": ".5rem"
  }
  const styleTitle: any = {
    "font-weight": "bold"
  }
  const ValueRows = () => (
    <>
      {enumb.values.map(enumValue => (
        <>
          <dt style={styleTitle}>{enumValue.name} - {enumValue.index}</dt>
          <dd>
            <p>
              {enumValue.index === 0 ? <span style={styleDef}><em>(DEFAULT)</em></span> : ''}

              <ReactMarkdown>{enumValue.description}</ReactMarkdown>

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
  return (
    <>
      <components.h1>{fileDescriptor.resource.name}</components.h1>
      {/* <p style={{ whiteSpace: 'pre-wrap' }}>{fileDescriptor.resource.description}</p> */}
      {fileDescriptor.resource?.messages?.map((message: any, i: any) => (
        <SylkMessageProto packageDep={deps} message={message} key={i} />
      ))}
    </>
  );
}

export const FileLink = (resource: any) => {
  const { fullName, tag } = resource;
  const fileName = tag ? tag : resource.fullName.split('.')[resource.fullName.split('.').length - 2];
  return (
    <>
      <Link>{fullName.replace('.','/')}/{fileName}.proto</Link>
    </>
  );

}



export default SylkProto;