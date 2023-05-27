/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Sylk Docs',
    tagline: 'Documentation Toolset for Your Sylk Workspace',
    url: 'https://sylk.build',
    baseUrl: '/',
    organizationName: 'sylk-build', // Usually your GitHub org/user name.
    projectName: 'docusaurus-sylk', // Usually your repo name.
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    themeConfig: {
      navbar: {
        title: 'Sylk',
        logo: {
          alt: 'Sylk Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'sylkdocs/intro',
            activeBasePath: 'sylkdocs',
            label: 'Sylk Docs',
            position: 'left',
          },
          {
            href: 'https://github.com/sylk-build/docusaurus-sylk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sylk',
            items: [
              {
                label: 'Overview',
                to: 'https://docs.sylk.build/',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'Installation',
                to: 'https://docs.sylk.build/cli/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/sylk-build/sylk',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sylk. Built with Docusaurus.`,
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/facebook/docusaurus/edit/master/website/',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              'https://github.com/facebook/docusaurus/edit/master/website/blog/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
      [
        'docusaurus-sylk',
        {
          sylk: {
            sylkJsonPaths: [
              './sylk/TodoAppPy/sylk.json'
            ],
            sylkDocsPath: './sylkdocs',
            sidebarPath: './sidebarsSylkdocs.js'
          },
          docs: {
            routeBasePath: 'sylkdocs',
            sidebarPath: './sidebarsSylkdocs.js',
          }
        }
      ]
    ],
  };