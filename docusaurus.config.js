// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keep The Gears Turning',
  tagline: 'keep working, keep thinking',
  url: 'https://tomazwang.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'TomazWang', // Usually your GitHub org/user name.
  projectName: 'tomaz.log', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Keep The Gears Turning',
        logo: {
          alt: 'Keep The Gears Turning',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Find me here',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/4319678/tomaz-wang?tab=profile',
              },
              {
                label: 'LinkedIn',
                href: '.',
              },
              {
                label: 'Twitter',
                href: '.',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tomazwang',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@tomazwang',
              },
              {
                label: 'iT邦幫忙',
                href: 'https://ithelp.ithome.com.tw/users/20141597',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        // disableSwitch: true,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '\u{2600}',
          darkIconStyle: {
            marginLeft: '1px',
          },
          lightIcon: '🌙',
          lightIconStyle: {
            marginRight: '1px',
          },
        },
      },
    }),
};

module.exports = config;
