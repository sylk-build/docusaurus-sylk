import { SylkJson } from '../sylk/protos/Sylk';
import { sylkClientLanguagesToJSON } from '../sylk/protos/SylkClient';
import { SylkEnum } from '../sylk/protos/SylkEnum';
import { SylkMessage } from '../sylk/protos/SylkMessage';
import { SylkPackage } from '../sylk/protos/SylkPackage';
import { SylkProject } from '../sylk/protos/SylkProject';
import { SylkServerLanguages, sylkServerLanguagesToJSON } from '../sylk/protos/SylkServer';
import { SylkService } from '../sylk/protos/SylkService';
import { Enum, SylkDescriptor, ResourceDescriptor, GeneratedDocFile, Message, Service } from '../types';
import { getLeafFileName, getVersionFileName } from '../utils';

const listify = (obj:any, mapFn:(k:any,v:any) => any) =>
  Object.entries(obj).reduce((acc:any, [k, v]) => {
    acc.push(mapFn(k, v));
    return acc;
}, []);

export const generateSylkIntroFile = (sylkDescriptor: SylkJson[]): GeneratedDocFile[] => {
  return generateSylkProjectInro(sylkDescriptor)
}

const generateSylkProjectInro = (sylkDescriptors: SylkJson[]): GeneratedDocFile[] => ([
{
  fileContents: generateDocSylkContents(sylkDescriptors),
  fileName: 'index',
},...sylkDescriptors.map(sylk => ({
  fileContents: generateDocProjectContents(sylk),
  fileName: `${sylk.project?.name}/index`,
  resourceDescriptor: {
    resource: <SylkProject>sylk.project
  }
}))])

const generateDocSylkContents = (sylks:SylkJson[]): string => {
  return (`---
title: Sylk Docs
hide_title: true
---

# Sylk Generated Docs

${sylks.map(s => `[${s.project?.name}](${s.project?.name}/index)`).join('\n\n')}
`)
}

const generateDocProjectContents = (sylkDescriptor: SylkJson): string => {
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

## Services
The ${sylkDescriptor.project?.name} conssists of the services listed below:

***

${Object.keys(sylkDescriptor.services).map(svc => '\n\n### '+svc+'\n'+generateServiceDetailsSectionMdx(sylkDescriptor.services[svc])).join("")}

## Packages
The ${sylkDescriptor.project?.name} schema is listed below:

***

${Object.keys(sylkDescriptor.packages).map(pkg => '\n\n### '+pkg.split('/').pop()?.split('.')[0] + '\n'+generatePackageDetailsSectionMdx(sylkDescriptor.packages[pkg]) ).join("")}

`
  )
}
 

export const generateSylkDocFiles = (sylkDescriptor: SylkJson): GeneratedDocFile[] => {
  const { packages, services }  = sylkDescriptor;
  
  return [
    ...listify(packages, (key, value) => ({ resource: {...value} })),
    ...listify(services, (key, value) => ({ resource: {...value} }))
  ].map(generateDocFile);
};


const generateDocFile = (resourceDescriptor: ResourceDescriptor): GeneratedDocFile => ({
  fileContents: resourceDescriptor.resource.type === 'packages' 
    ? generateDocPackageContents(<SylkPackage>resourceDescriptor.resource) 
    : generateDocServiceContents(<SylkService>resourceDescriptor.resource),
  fileName: `${resourceDescriptor.resource.type?.toUpperCase()}/${resourceDescriptor.resource.name}/${resourceDescriptor.resource.fullName ? resourceDescriptor.resource.fullName.split('.')[2] : resourceDescriptor.resource?.package?.split('.')[2]}`,
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

const generateDocPackageContents = (fileDescriptor: SylkPackage): string => {
  // TODO: run through prettier for consistent formatting.
  return (
  `---
title: ${getVersionFileName(fileDescriptor.package)}
hide_title: true
---
import { SylkMessageProto, SylkEnumProto } from '@theme/SylkProto/SylkProto';

# \`${getLeafFileName(fileDescriptor.name)}\`
_**path** ${fileDescriptor.name}_

_**package** ${fileDescriptor.package}_

${fileDescriptor.description}

---

${
  [
    generateMessageSectionMdx(fileDescriptor.messages,fileDescriptor.dependencies),
    generateEnumSectionMdx(fileDescriptor.enums),
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

const generateServiceDetailsSectionMdx = (service: SylkService): string => {
  return (
    `[\`${service.fullName}\`](services/${service.name}/${service.fullName.split('.').pop()}) - ${service.description}`
  )
}

const generatePackageDetailsSectionMdx = (pack: SylkPackage): string => {
  return (
    `[\`${pack.package}\`](packages/${pack.name}/${pack.package.split('.').pop()}) - ${pack.description}`
  )
}