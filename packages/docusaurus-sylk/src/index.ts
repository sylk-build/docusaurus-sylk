import { LoadContext } from '@docusaurus/types';

interface PluginOptions {
  // Path to Protobuf file descriptors JSON file. See: https://protobuffet.com/docs/how/usage#generating-the-filedescriptorspath-file
  sylkJsonPaths: string[]
  // Path to generate data on filesystem relative to site dir.
  sylkDocsPath?: string;
  // Path to sidebar configuration for showing a list of markdown pages.
  sidebarPath?: string;
  // URL base route for the Protobuffet docs section of your site. Not configurable by user here, is assigned using doc option's routeBasePath.
  routeBasePath?: string;
}

const pluginOptionDefaults = {
  sylkDocsPath: './sylkdocs',
  sidebarPath: './sidebarsSylkdocs.js',
}

// NOTE: these are options exposed by docusaurus plugin-content-docs: https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
interface ContentDocOptions {
  // URL base route for the Protobuffet docs section of your site.
  routeBasePath?: string;
  // Path to sidebar configuration for showing a list of markdown pages.
  sidebarPath?: string;
}

const contentDocOptionsDefaults = {
  routeBasePath: 'sylk',
  sidebarPath: './sidebarsSylkdocs.js',
}

interface PresetOptions {
    sylk: PluginOptions;
    docs?: ContentDocOptions;
}

export default function preset(
  context: LoadContext,
  options: PresetOptions,
) {
  const pluginOptions: PluginOptions = {
    ...pluginOptionDefaults,
    ...options.sylk
  };

  const docOptions = {
    id: 'sylkdocs',
    path: pluginOptions.sylkDocsPath,
    ...contentDocOptionsDefaults,
    ...options.docs,
  };

  pluginOptions.routeBasePath = docOptions.routeBasePath;

  const config = {
    plugins: [
      [
        require.resolve('docusaurus-sylk-plugin'),
        pluginOptions,
      ],
      [
        '@docusaurus/plugin-content-docs',
        docOptions,
      ],
    ],
  };

  return config;
}