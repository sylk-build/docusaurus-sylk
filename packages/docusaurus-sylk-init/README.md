# Docusaurus Project Generator with Sylk Preset

#### Visit the [landing page](https://docs.sylk.build/) for Sylk documentation.

Executable project generator based on [`@docusaurus/init`](https://github.com/facebook/docusaurus/tree/master/packages/docusaurus-init). This generator enhances the common template by also initializing the [`docusaurus-protobuffet`](https://github.com/protobuffet/docusaurus-protobuffet/tree/master/packages/docusaurus-protobuffet) preset with recommended options and sample fixtures.

See [`docusaurus-sylk`](https://github.com/sylk-build/docusaurus-sylk/tree/master/packages/docusaurus-sylk#usage) for details on this preset.

See [Docusaurus docs](https://docusaurus.io/docs/next/installation#scaffold-project-website) for details on the common template.

## Usage

The package creates Docusaurus projects with the `docusaurus-sylk` preset initialized. If you have an existing Docusaurus project where you would like to install `docusaurus-sylk`, this package is not necessary.

Note: These commands should be run from your root directory where you would like the site to be created.

Run the generator. This will create a directory for your site with the generated files. You must specify the `project_name` variable.

```sh
npx docusaurus-sylk-init init <project_name> --json sylk.json --sylk-jsons-paths ./sylk/MyProject/sylk.json --sylk-docs-path ./sylkdocs --sidebar-path ./sidebarsSylkdocs.js --route-base-path sylkdocs
```

Start the development server to view the sample fixtures. See the [configuration section](#configuration) for steps on introducing your own Protobuf workspace file.

```sh
cd <project_name>
npm run start
```

Proto doc files were generated for the sample fixture during project initialization. These will need to be generated whenever the `fileDescriptorsPath` file (defaulted to `./sylk/sylk.json`) is updated. Read [`docusaurus-sylk CLI documentation`](https://github.com/sylk-build/docusaurus-sylk/tree/master/packages/docusaurus-sylk#cli-commands) for details.

```sh
npx docusaurus generate-sylk-docs
```

Since this is a normal Docusaurus project, you can follow their documentation for [deployments](https://docusaurus.io/docs/next/deployment) and other details.

## Configuration
The default setup configures `fileDescriptorsPath` to `./sylk/sylk.json`. You can override this with your own Protobuf workspace file or update the options passed to `docusaurus-sylk` within your `docusaurus.config.js` file. Please see [`docusaurus-sylk` documentation](https://github.com/sylk-build/docusaurus-sylk/tree/master/packages/docusaurus-sylk#configuration) for details.

The navbar configuration within `docusaurus.config.js` points to one of the generated files of the sample fixture. You will need to update this route when using your own Protobuf workspace file.

## Contributing

Contributions, issues and feature requests are always welcome!

---
Created with ❤️ by [Sylk team](https://sylk.build/)