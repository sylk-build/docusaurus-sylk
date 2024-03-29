import { GeneratedDocFile } from '../types';

export const generateSidebarFileContents = (docsPath: string, sidebarItems:any): string => {
  // TODO: run through prettier for consistent formatting.
  return `
module.exports = ${JSON.stringify(generateSidebarObject(docsPath,sidebarItems),null,2)};
  `
};

const generateSidebarObject = (docsPath: string,sidebarItems:any) => {
  let sidebarContents:any = {}
  sidebarContents[docsPath] = [
    ...sidebarItems
  ];
  return sidebarContents;
}

export const generateSidebarFileCategory = (docFiles: GeneratedDocFile[],apiName:string)  => {
  const fileDirectory = buildFileDirectory(docFiles);
  compactFileDirectory(fileDirectory);

  const sidebarObject = convertDirectoryToSidebar(fileDirectory,apiName);
  const sidebarItems = sidebarObject.label == '/' ? sidebarObject.items : [sidebarObject];
  const index: SidebarItem = {
    type: 'doc',
    label: 'Project',
    id: apiName + '/index'
  }
  let items :any[] = sidebarObject.items ? sidebarObject.items : [];
  return {
    type: 'category',
    label: apiName,
    // link: {
    //   type:'doc',
    //   id:`${apiName}/intro`
    // },
    items: [index, ...items],
  };
};

interface FileDirectory {
  name: string;
  fullName: string;
  files?: GeneratedDocFile[];
  nested?: { [key: string] : FileDirectory };
}

interface SidebarItem {
  type: string;
  id?: string;
  label?: string;
  items?: any[],
  // link?: any;
}

// build nested file directory map
// eg. /one/two/hello.proto
// => { name: 'one', nested: [{ name: 'two', files: ['hello.proto'] }] }
const buildFileDirectory = (files: GeneratedDocFile[]): FileDirectory => {
  const root: FileDirectory = { name: '', fullName: '' };

  files.forEach(file => {
    // split by folder names
    const splitFilePath = file.fileName.split("/");
    // remove last item, which is the .proto file.
    const relevantSplitFilePath = splitFilePath.slice(0, splitFilePath.length - 1);

    // initialize nested directories
    let current: FileDirectory = root;
    relevantSplitFilePath.forEach(folder => {
      current.nested ||= {}
      current.nested[folder] ||= { name: folder, fullName: `${current.fullName}/${folder}`};
      current = current.nested[folder];
    });

    // push file into current which is now the leaf folder node
    current.files ||= []
    current.files.push(file);
  });

  return root;
}

// compact file directory so that each directory has either
// - two or more subfolders OR
// - contains at least one file
// eg. /one/two/hello.proto
// { name: 'one/two', files: ['hello.proto'] }
const compactFileDirectory = (fileDir: FileDirectory) => {
  if (!(fileDir && fileDir.nested)) return;

  // loop nested packages while they can be compacted (length 1)
  while (fileDir.nested && Object.keys(fileDir.nested).length === 1) {
    // compact directory with nested. eg. { protobuf: { example: {} } -> { 'protobuf.example': {} }
    const nestedDir: FileDirectory = fileDir.nested[Object.keys(fileDir.nested)[0]];
    // concat name
    fileDir.name = fileDir.name === '' ? nestedDir.name : `${fileDir.name}/${nestedDir.name}`;
    // override fullName with nested
    fileDir.fullName = nestedDir.fullName;

    // bubble up files
    if (nestedDir.files) {
      fileDir.files ||= []
      fileDir.files.push(...nestedDir.files);
    }

    // bubble up nested
    fileDir.nested = nestedDir.nested;
  }

  if (fileDir.nested) {
    // continue compacting for all remaining nested
    Object.keys(fileDir.nested).forEach(dir => {
      compactFileDirectory(fileDir.nested![dir]);
    });
  }
}

// convert FileDirectory to a docusaurus sidebar object
const convertDirectoryToSidebar = (fileDir: FileDirectory,apiName:string) => {
  // construct category
  const nestedResourceType = fileDir.files ? fileDir.files[0].resourceDescriptor?.resource.type : 'sylkRoot'
  const sidebarItem: SidebarItem = {
    type: 'category',
    label: fileDir.name,
  }

  // if(nestedResourceType !== 'sylkRoot') {
  //   sidebarItem.link = {
  //     type:'doc',
  //     id: fileDir.name.split('/').length>1 ? `${apiName}/${fileDir.name}/v1` : `${apiName}/${nestedResourceType}/${fileDir.name}/v1`
  //   }
  // }

  // assign nested category items
  if (fileDir.nested) {
    
    Object.keys(fileDir.nested).forEach(nestedKey => {
      const nested = fileDir.nested![nestedKey];
      const nestedSidebarItem = convertDirectoryToSidebar(nested,apiName);
      sidebarItem.items ||= []
      sidebarItem.items.push(nestedSidebarItem);
    });
  }

  // assign file doc items
  if (fileDir.files) {
    sidebarItem.items ||= []
    sidebarItem.items.push(...fileDir.files.map(file => ({
      type: 'doc',
      id: `${apiName}/${file.fileName}`,
      // label: file.fileName.split("/").pop()
    })));
  }

  return sidebarItem;
}