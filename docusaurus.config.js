// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const tailwindPlugin = require("./plugins/tailwindPlugin.cjs");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Meta Blocks",
  tagline: "Solana's Standard Libary",
  url: "https://docs.metablocks.world",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "metablockshq", // Usually your GitHub org/user name.
  projectName: "docs.metablocks.world", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guides",
        path: "content/guides",
        routeBasePath: "guides",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    tailwindPlugin,
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      navbar: {
        title: "Meta Blocks Documentation",
        logo: {
          alt: "Meta Blocks Logo",
          src: "img/logo.png",
        },
        items: [
          {
            position: "left",
            to: "/guides",
            label: "Guides",
          },
          {
            to: "/hire-us",
            position: "left",
            label: "Hire us",
          },
          {
            href: "https://github.com/metablockshq/mbkjs",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://metablocks.world",
            label: "Meta Blocks",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guides",
                to: "/guides",
              },
              {
                label: "Hire us",
                to: "/hire-us",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/MetaBlocksHQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://metablocks.world/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/metablockshq/mbkjs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Meta Blocks. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ["rust"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
