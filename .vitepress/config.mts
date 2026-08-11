import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Ringo',
  description: 'A macOS configuration that rocks.',

  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About Ringo', link: '/pages/about-ringo' },
          { text: 'Getting Started', link: '/pages/getting-started' }
        ]
      },
      {
        text: 'Packages',
        items: [
          { text: 'Karabiner-Elements', link: '/pages/karabiner-elements' },
          { text: 'NeoVim', link: '/pages/neovim' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lancy69/dots-ringo' },
      { icon: 'mastodon', link: 'https://mastodon.social/@lancy69' },
      { icon: 'telegram', link: 'https://t.me/lancy69' }
    ]
  }
})
