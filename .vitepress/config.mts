import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "USIG",
  description: "Ultimate Self-Improvement Guide",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'What is self-improvement?',
        link: '/self-improvement',
      },
      {
        text: 'Transparency',
        link: '/transparency',
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tatumertanen/ultimate-selfimprovement-guide' },
      { icon: 'discord', link: 'https://discord.gg/mKtJDGHRpj' }
    ]
  }
})
