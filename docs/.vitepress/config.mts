import { defineConfig } from 'vitepress'
import { DISCORD_INVITE, REPO_URL } from '../../consts'

export default defineConfig({
  lang: 'en-US',
  title: "Habitmaxx | Ultimate Self-Improvement Guide",
  description: "This is a open source guide to self-improvement. Find methods, guides, techniques, all for free. Contribute to the guides with the newest information and join a community of alike minded people.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-J20R7BZ3W9'
      }
    ],
    [
      'script',
      {},
      `
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-J20R7BZ3W9');
        `
    ]
  ],
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    siteTitle: "Habitmaxx",
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: '/contributing' },
      { text: 'Support', link: 'https://buymeacoffee.com/selfimprovementguide' },
    ],
    sidebar: [
      {
        items: [
          {
            text: 'Getting Started',
            link: '/self-improvement',
          },
          {
            text: 'What Is This?',
            link: '/explained',
          },
          {
            text: 'Our Mission',
            link: '/transparency',
          },
        ]
      },
      {
        text: 'Guides',
        items: [
          { text: 'Habits', link: '/methods/habits' },
          { text: 'Goals', link: '/methods/goals' },
          { text: 'Sleep', link: '/methods/sleep' },
          // { text: 'Mindfulness', link: '/methods/mindfulness' },
          // { text: 'Time Management', link: '/methods/time-management' },
          // { text: 'Productivity', link: '/methods/productivity' },
          // { text: 'Mindfulness', link: '/methods/mindfulness' },
        ]
      },
      {
        text: 'Methods',
        items: [
          {
            text: 'Looksmaxxing',
            // items: [
            //   {
            //     text: 'Hair',
            //     link: '/methods/looksmaxxing/hair'
            //   }
            // ]
          }
        ]
      },
      {
        items: [
          { text: 'Contributing', link: '/contributing' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: REPO_URL },
      { icon: 'discord', link: DISCORD_INVITE }
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
