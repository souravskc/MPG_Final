/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MyPathGuider',
  tagline: 'Why waste time and money when you can get structured path for free resources.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://i.ibb.co/NK6yHnc/Group-218.png',
  organizationName: 'souravskc', // Usually your GitHub org/user name.
  projectName: 'MPG_Final',

  themeConfig: {
    colorMode:{
      disableSwitch: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'https://i.ibb.co/ZN13jCX/logo.png'
      },
      items: [
        {
          label:"Competitive Programming",
          docId: 'comp',
          position:"right",
          to: 'docs/compi',
          activeBasePath: 'docs',
        },
        {
          label:"Boot Camp",
          docId: 'bootcamp',
          position:"right",
          to: 'docs/bootcamp',
          activeBasePath: 'docs',
        },
      ],
      
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },  
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      },
    ],
  ],
  plugins: ['my-loaders'],
};
