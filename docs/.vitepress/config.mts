import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Habitmaxx",
  description: "Self-Improvement",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        link: '/self-improvement',
      },
      {
        text: 'Transparency',
        link: '/transparency',
      },
      {
        text: 'Methods (placeholder)',
        items: [
          { text: 'Habit Tracking', link: '/methods/habit-tracking' },
          { text: 'Goal Setting', link: '/methods/goal-setting' },
          { text: 'Mindfulness', link: '/methods/mindfulness' },
          { text: 'Time Management', link: '/methods/time-management' },
          { text: 'Productivity', link: '/methods/productivity' },
          { text: 'Mindfulness', link: '/methods/mindfulness' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tatumertanen/ultimate-self-improvement-guide' },
      { icon: 'discord', link: 'https://discord.gg/mKtJDGHRpj' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Founded with 💙 in Finland',
      copyright: 'Copyright © 2024-present'
    },
    editLink: {
      pattern: 'https://github.com/tatumertanen/ultimate-self-improvement-guide/edit/main/docs/:path',
      text: 'Suggest edits to this page'
    }
  }
})
