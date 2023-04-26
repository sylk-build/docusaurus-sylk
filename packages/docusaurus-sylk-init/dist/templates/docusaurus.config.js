/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Sylk Docs',
    tagline: 'Documentation Toolset for Your Sylk Workspace',
    url: 'https://sylk.build',
    baseUrl: '/',
    organizationName: 'sylk', // Usually your GitHub org/user name.
    projectName: 'sylk-build', // Usually your repo name.
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
            to: 'sylkdocs/sylk/example/ad/v1/ads.proto',
            activeBasePath: 'sylkdocs',
            label: 'Sylk Docs',
            position: 'left',
          },
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docusaurus',
            position: 'left',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
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
                to: 'https://protobuffet.com/docs/what/overview',
              },
              {
                label: 'Features',
                to: 'https://protobuffet.com/docs/what/features',
              },
              {
                label: 'Motivation',
                to: 'https://protobuffet.com/docs/what/motivation',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'Installation',
                to: 'https://protobuffet.com/docs/how/installation',
              },
              {
                label: 'Usage',
                to: 'https://protobuffet.com/docs/how/usage'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/protobuffet/docusaurus-protobuffet',
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
            sylkJsonPaths: './api/sylk.json',
            sylkDocsPath: './sylkdocs',
            sidebarPath: './sidebarsSylkdocs.js',
          }
        }
      ]
    ],
    plugins: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          docsRouteBasePath: 'sylkdocs',
          docsDir: 'sylkdocs',
          indexBlog: false,
        },
      ],
    ]
  };