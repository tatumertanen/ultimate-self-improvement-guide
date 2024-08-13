import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "Habitmaxx | Ultimate Self-Improvement Guide",
  description: "This is a open source guide to self-improvement. Find methods, guides, techniques, all for free. Contribute to the guides with the newest information and join a community of alike minded people.",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  cleanUrls: true,
  themeConfig: {
    siteTitle: "Habitmaxx",
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
