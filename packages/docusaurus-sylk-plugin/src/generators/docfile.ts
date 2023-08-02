import { Any } from '../sylk/protos/google/protobuf/any';
import { SylkJson } from '../sylk/protos/sylk/Sylk/v2/Sylk';
import { sylkClientLanguagesToJSON } from '../sylk/protos/sylk/SylkClient/v1/SylkClient';
import { SylkEnum } from '../sylk/protos/sylk/SylkEnum/v2/SylkEnum';
import { SylkMessage } from '../sylk/protos/sylk/SylkMessage/v2/SylkMessage';
import { SylkPackage } from '../sylk/protos/sylk/SylkPackage/v2/SylkPackage';
import { SylkProject } from '../sylk/protos/sylk/SylkProject/v1/SylkProject';
import { SylkServerLanguages, sylkServerLanguagesToJSON } from '../sylk/protos/sylk/SylkServer/v1/SylkServer';
import { SylkService } from '../sylk/protos/sylk/SylkService/v2/SylkService';
import { Enum, SylkDescriptor, ResourceDescriptor, GeneratedDocFile, Message, Service } from '../types';
import { getLeafFileName, getVersionFileName } from '../utils';

const listify = (obj:any, mapFn:(k:any,v:any) => any, inlines?:any[]) =>
  Object.entries(obj).reduce((acc:any, [k, v]) => {
    acc.push({...mapFn(k, v), inlines: inlines?.filter(i => i.fullName.includes(k.replace('/','.')))});
    return acc;
}, []);

export const generateSylkIntroFile = (sylkDescriptor: SylkJson[], sylkDocsPath: string, sylkRoutePath: string): GeneratedDocFile[] => {
  return generateSylkProjectInro(sylkDescriptor,sylkDocsPath,sylkRoutePath)
}

const parseFileName = (resource: any) => {
  let resourcePath = resource.fullName.split('.').slice(0,resource.fullName.split('.').length - 1)
  resourcePath = resourcePath.join('/')
  const fileName = resource.tag ? resource.tag : resource.fullName.split('.')[resource.fullName.split('.').length - 2]
  return `Proto File: [${resourcePath}/${fileName}.proto](${resourcePath})`
}

const generateSylkProjectInro = (sylkDescriptors: SylkJson[], sylkDocsPath: string, sylkRoutePath: string): GeneratedDocFile[] => ([
{
  fileContents: generateDocSylkContents(sylkDescriptors,sylkDocsPath),
  fileName: 'index',
},...sylkDescriptors.map(sylk => ({
  fileContents: generateDocProjectContents(sylk,sylkRoutePath),
  fileName: `${sylk.project?.name}/index`,
  resourceDescriptor: {
    resource: <SylkProject>sylk.project
  }
}))])

const generateDocSylkContents = (sylks:SylkJson[], sylkDocsPath: string): string => {
  return (`---
title: Sylk Docs
hide_title: true
---

# Sylk Generated Docs

${sylks.map(s => `[${s.project?.name}](./${s.project?.name}/index)`).join('\n\n')}
`)
}

const generateDocProjectContents = (sylkDescriptor: SylkJson, sylkRoutePath: string): string => {
  return (
    `---
title: ${getLeafFileName(sylkDescriptor.project ? sylkDescriptor.project.name : 'Sylk')}
hide_title: true
---

# ${getLeafFileName(sylkDescriptor.project ? sylkDescriptor.project.name : 'Sylk')} Docs

**Project Package** ${sylkDescriptor.project?.packageName}
${sylkDescriptor.project?.goPackage ? '- Go Package: '+sylkDescriptor.project?.goPackage : ''}

**Server** ${sylkServerLanguagesToJSON(<any>sylkDescriptor.project?.server?.language)}

**Clients** ${sylkDescriptor.project?.clients.map(c => sylkClientLanguagesToJSON(c.language)).join(', ')}

## Packages
The ${sylkDescriptor.project?.name} schema is listed below:

***

${Object.keys(sylkDescriptor.packages).map(pkg => '\n\n### '+pkg.split('/').pop()?.split('.')[0] + '\n'+generatePackageDetailsSectionMdx(sylkDescriptor.packages[pkg],sylkRoutePath) ).join("")}

`
  )
}
 

export const generateSylkDocFiles = (sylkDescriptor: SylkJson, inlines: any[]): GeneratedDocFile[] => {
  const { packages }  = sylkDescriptor;
  return [
    ...listify(packages, (key, value) => ({ resource: {...value} }), inlines),
  ].map(generateDocFile);
};


const generateDocFile = (resourceDescriptor: ResourceDescriptor): GeneratedDocFile => ({
  fileContents: resourceDescriptor.resource.type === 'package' 
    ? generateDocPackageContents(<SylkPackage>resourceDescriptor.resource,resourceDescriptor.inlines) 
    : generateDocServiceContents(<SylkService>resourceDescriptor.resource),
  fileName: `${resourceDescriptor.resource.fullName ? resourceDescriptor.resource.fullName.split('.').slice(1).join('/') : resourceDescriptor.resource?.package?.split('.').slice(1).join('/')}`,
  resourceDescriptor,
});

const generateDocServiceContents = (serviceDescriptor: SylkService): string => {
  return (
    `---
title: ${getVersionFileName(serviceDescriptor.fullName)}
hide_title: true
---
import { SylkMethodsProto } from '@theme/SylkProto/SylkProto';

# \`${getLeafFileName(serviceDescriptor.name)}\`

**Full Name** ${serviceDescriptor.fullName}

<SylkMethodsProto dependencies={${JSON.stringify(serviceDescriptor.dependencies)}} methods={${JSON.stringify(serviceDescriptor.methods)}} />
`
  )
}

const _decodeEnum = (enm: any): SylkEnum => {
  let encodeCache = SylkEnum.decode(enm.value);
  return encodeCache
}

const generateDocPackageContents = (fileDescriptor: SylkPackage,inlines?:any[]): string => {
  // TODO: run through prettier for consistent formatting.
  let enumInlines = inlines?.filter(i => i['@type'].includes('SylkEnum')).map(i => SylkEnum.fromPartial(i))
  enumInlines = enumInlines && enumInlines?.length>0 ? enumInlines : []
  return (
  `---
title: ${getVersionFileName(fileDescriptor.package)}
hide_title: true
---
import { SylkMessageProto, SylkEnumProto, FileLink } from '@theme/SylkProto/SylkProto';

# \`${getLeafFileName(fileDescriptor.name)}\`
_**path** ${fileDescriptor.name}_

_**package** ${fileDescriptor.package}_

${fileDescriptor.description}

---

${
  [
    generateMessageSectionMdx(fileDescriptor.messages,fileDescriptor.dependencies),
    generateEnumSectionMdx([...fileDescriptor.enums,...enumInlines]),
  ].filter(Boolean).map(section => section + "\n---\n").join("")
}

  `);
};

const generateMessageSectionMdx = (messages: SylkMessage[],dependencies:string[]): string|null => {
  if (messages.length == 0) {
    return null;
  }

  return (
    `## Messages

${messages.map((message, i) => (
`
### \`${message.name}\`
${parseFileName(message)}
<SylkMessageProto packageDep={${JSON.stringify(dependencies)}} key={${i}} message={${JSON.stringify(message)}} />
`
)).join("\n")}`
  );
};

const generateEnumSectionMdx = (enums: SylkEnum[]): string|null => {
  if (enums.length == 0) {
    return null;
  }
  return (
    `## Enums

${enums.map((enumb, i) => (
`
### \`${enumb.name}\`
${parseFileName(enumb)}
<SylkEnumProto key={${i}} enumb={${JSON.stringify(enumb)}} />
`
)).join("\n")}`
  );
}

const generateServiceSectionMdx = (services: SylkService[]): string|null => {
  if (services.length == 0) {
    return null;
  }

  return (
    `## Services

${services.map((service, i) => (
`
### \`${service.name}\`
${parseFileName(service)}

${service.description}

${service.methods.map((method, i) => (
`
#### \`${method.name}\`
<ProtoServiceMethod key={'${method.name}-${i}'} method={${JSON.stringify(method)}} />
`
)).join("\n")}
`
)).join("\n")}`
  );
}

const generateServiceDetailsSectionMdx = (service: SylkService, apiName: string): string => {
  return (
    `[\`${service.fullName}\`](${apiName}/services/${service.name}/${service.fullName.split('.').pop()}) - ${service.description}`
  )
}

const generatePackageDetailsSectionMdx = (pack: SylkPackage, apiName: string): string => {
  return (
    `[\`${pack.package}\`](./${pack.package.split('.').slice(1).join('/')}) - ${pack.description}`
  )
}