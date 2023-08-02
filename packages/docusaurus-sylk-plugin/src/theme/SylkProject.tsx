import React from 'react';
import Link from '@docusaurus/Link';
import { Enum, ResourceDescriptor, Message, MessageField, Service, ServiceMethod } from '../types';

interface ComponentProps {
  id?: string;
  children?:string;
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

export const ProtoEnum = (props: EnumProps) => {
  const { enumb } = props;

  const ValueHeaders = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Number</th>
        <th>Description</th>
      </tr>
    </thead>
  );

  const ValueRows = () => (
    <tbody>
      {enumb.values.map(enumValue => (
        <tr key={enumValue.name}>
          <td><code>{enumValue.name}</code></td>
          <td><code>{enumValue.number}</code></td>
          <td style={{ whiteSpace: 'pre-wrap' }}>{enumValue.description}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <>
      <p style={{ whiteSpace: 'pre-wrap' }}>{enumb.description}</p>
      <table>
        <ValueHeaders />
        <ValueRows />
      </table>
    </>
  );
};

interface ServiceMethodProps {
  method: ServiceMethod;
}

export const ProtoServiceMethod = ({ method }: ServiceMethodProps) => (
  <table>
    <tbody>
      <tr>
        <th style={leftHeaderStyles}>Method</th>
        <td><code>{method.name}</code></td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Request</th>
        <td>
          <Link to={method.inputType}><code>{method.inputType}</code></Link>
          {method.clientStreaming === true ? ' stream' : ''}
        </td>
      </tr>
      <tr>
        <th style={leftHeaderStyles}>Response</th>
        <td>
          <Link to={method.outputType}><code>{method.outputType}</code></Link>
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

interface ServiceMethodsProps {
  methods: ServiceMethod[];
}

const ProtoServiceMethods = (props: ServiceMethodsProps) => {
  const { methods } = props;

  return (
    <>
      {methods.map((method, i) => (
        <ProtoServiceMethod method={method} key={`${method.name}-${i}`} />
      ))}
    </>
  );
}

interface ServiceProps {
  service: Service;
}

export const ProtoService = (props: ServiceProps) => {
  const { service } = props;

  return (
    <>
      <p style={{ whiteSpace: 'pre-wrap' }}>{service.description}</p>
      <ProtoServiceMethods methods={service.methods} />
    </>
  )
}

interface MessageFieldsProps {
  fields: MessageField[];
}

const ProtoMessageFields = (props: MessageFieldsProps) => {
  const { fields } = props;

  const Headers = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
  )

  const FieldTypeCell = ({ field }: { field: MessageField}) => {
    const typeCell = field.typeLink === undefined
      ? <code>{field.longType}</code>
      : <Link to={field.typeLink}><code>{field.longType}</code></Link>;

    return (
      <span>
        {field.label !== "" && <i>{field.label}&nbsp;</i>}
        {typeCell}
      </span>
    )
  }

  const FieldRows = () => (
    <tbody>
      {fields.map(field => (
        <tr key={field.name}>
          <td><code>{field.name}</code></td>
          <td><FieldTypeCell field={field} /></td>
          <td style={{ whiteSpace: 'pre-wrap' }}>{field.description}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table>
      <Headers />
      <FieldRows />
    </table>
  )
}

interface MessageProps {
  message: Message;
}

export const ProtoMessage = (props: MessageProps) => {
  const { message } = props;

  return (
    <>
      <p style={{ whiteSpace: 'pre-wrap' }}>{message.description}</p>
      <ProtoMessageFields fields={message.fields} />
    </>
  );
}

interface Props {
  fileDescriptor: ResourceDescriptor;
  components: ComponentsProps;
}

const SylkProject = (props: Props) => {
  const { fileDescriptor, components } = props;

  return (
    <>
      <components.h1>{fileDescriptor.resource.name}</components.h1>
      <p style={{ whiteSpace: 'pre-wrap' }}>{fileDescriptor.resource.description}</p>
      {fileDescriptor.resource?.messages?.map((message:any, i:any) => (
        <ProtoMessage message={message} key={i} />
      ))}
    </>
  );
}

export default SylkProject;