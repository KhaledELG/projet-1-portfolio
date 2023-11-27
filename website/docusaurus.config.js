/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "KhaledELG's Portfolio",
  tagline: 'A React-based static github website template.',
  url: 'https://fr-forge.dotsinfra.com',
  baseUrl: '/portfolio',
  organizationName: 'KhaledELG',
  projectName: '',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'More Info',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/KhaledELG',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'KhaledELG',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Resume',
              to: '/docs/resume',
            }
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/in/khaled-el-ghammarti',
            },
            {
              label: 'GitLab',
              to: 'https://gitlab.com/kelg',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/KhaledELG',
            }
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'KhaledELG',
        path: '/',
        pageTitle: 'My Site',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 10,
        },
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://gitlab.com/kelg',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://gitlab.com/kelg',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
