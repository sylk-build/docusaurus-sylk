# Docusaurus Sylk Toolset

#### Visit the [landing page](https://sylk.build/) for Sylk documentation.

[Docusaurus](https://docusaurus.io/) toolset for sylk schema documentation. Provides a set of components and MDX doc file generators for Docusaurus sites.

![Sylk Docs Overview](../../screenshots/overview.png)

---

## Installation

This section assumes an existing Docusaurus project. For those without an existing setup, you can use [`docusaurus-sylk-init`](https://github.com/sylk-build/docusaurus-sylk/tree/master/packages/docusaurus-sylk-init#usage) to scaffold a Docusaurus project with this preset installed.

NOTE: These commands should be run from your Docusaurus project directory.

Install this preset.

```sh
npm install --save docusaurus-sylk
```

Generate a JSON representation of your Protobuf files. This depends on the [`Sylk CLI`](https://github.com/sylk-build/sylk).
Find details and installation steps in the [usage section](#generating-the-sylkJsonPaths-file).

```sh
sylk build
```

Add the preset to your project's `docusaurus.config.js` file. View the [configuration section](#configuration) for all available options.

```js
// file: docusaurus.config.js
module.exports = {
  // ...
  presets: [
    [
      'docusaurus-sylk',
      {
        sylk: {
          sylkJsonPaths: ['./sylk/sylk-docker/sylk.json'],
          sylkDocsPath: 'sylkdocs',
          sidebarPath: 'sidebarsSylkdocs.js'
        },
        docs: {
          routeBasePath: 'sylkdocs',
          sidebarPath: 'sidebarsSylkdocs.js',
        }
      }
    ]
  ],
  // ...
}
```

Invoke the CLI command [`generate-sylk-docs`](#generate-sylk-docs) to generate your MDX doc files.

```sh
npx docusaurus generate-sylk-docs
```

Update your `docusaurus.config.js` to link to your new documentation from the navbar. You will need to configure one of the generated doc files as the route. A homepage will be introduced to replace this in the future.

```js
// file: docusaurus.config.js
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // ...
        {
          to: 'sylkdocs/intro',
          activeBasePath: 'sylkdocs',
          label: 'Sylkdocs',
          position: 'left',
        }
        // ...
      ]
    }
  }
}
```

Boot up your Docusaurus server to view the new Protobuf documentation space.

```sh
npm run start
```

---

##  Configuration

```js
// file: docusaurus.config.js
module.exports = {
  // ...
  presets: [
    [
      'docusaurus-sylk',
      {
        sylk: {
          sylkJsonPaths: ['./sylk/sylk-docker/sylk.json'],
          sylkDocsPath: 'sylkdocs',
          sidebarPath: 'sidebarsSylkdocs.js'
        },
        docs: {
          routeBasePath: 'sylkdocs',
          sidebarPath: 'sidebarsSylkdocs.js',
        }
      }
    ]
  ],
  // ...
}
```

#### `sylk`
Pass in all plugin options. See [`docusaurus-sylk-plugin`](https://github.com/sylk-build/docusaurus-sylk/tree/master/packages/docusaurus-sylk-plugin) for the plugin library. This preset assigns some recommended defaults for missing options.

| Option | Description | Required | Default |
| --- | --- | --- | --- |
| `sylkJsonPaths` | Path(s) to JSON file(s) generated by Sylk CLI documentation through [Create project](https://docs.sylk.build/cli/quick-start). See [usage section](#generating-the-sylkJsonPaths-file) for details. | ✅ | N/A |
| `sylkDocsPath` | Directory where CLI will create doc files. |  | `./sylkdocs` |
| `sidebarPath` | Path to file where CLI will write the generated Sidebar object. |  | `./sidebarsSylkdocs.js` |
---

#### `docs`
Pass in options for the [`@docusaurus/plugin-content-docs`](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs) plugin. This preset assigns some recommended defaults for missing options.

| Option | Description | Required | Default |
| --- | --- | --- | --- |
| `routeBasePath` | URL base route for the Sylk docs section of your site. |  | `sylkdocs` |
| `sidebarPath` | Path to file where docs plugin will read the Sidebar object. |  | `./sidebarsSylkdocs.js` |
---

## Usage

This toolset provides a suite of CLI commands to generate and manage documentation files for your Protobuf workspace. These generated files follow the Docusaurus convention of using MDX files and React components.

### CLI Commands

#### generate-proto-docs

```sh
npx docusaurus generate-sylk-docs
```

Generate documentation for all Protobuf files within the configured `sylkJsonPaths` JSON file. The generated files are written to `sylkDocsPath`. A sidebar object is written to the configured `sidebarPath`. View the [configuration section](#configuration) for details of these options.

This command must be run for every content change of `sylkJsonPaths`. This will overwrite all previously generated files, so they should not be modified manually. Extension support for these generated files will be coming in the future, so please reach out with your use cases.

For easy workflow you can attach this plugin to sylk CLI using extensions to project `sylk.json` file, this will allow the CLI build operation to interact with [`docusaurus-sylk-plugin`](https://github.com/sylk-build/docusaurus-sylk/tree/master/packages/docusaurus-sylk-plugin).

### Generating the `sylkJsonPaths` Files
This project depends on a snapshot of all the `sylk.json` files within your workspace. The formatting and generation of this snapshot currently depends on the [`Sylk CLI`](https://github.com/sylk-build/sylk).

To use `Sylk CLI` we must install python3.7+ and protoc.
Then the CLI can be installed with simple pip install command:
```sh
pip install sylk
# Install with docs extension
pip install sylk[docs]
```

---

## Contributing

Contributions, issues and feature requests are always welcome!