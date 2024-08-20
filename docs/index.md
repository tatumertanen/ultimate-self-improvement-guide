---
# https://vitepress.dev/reference/default-theme-home-page

layout: home

hero:
    name: "Habitmaxx"
    text: "Self-Improvement"
    tagline: Ultimate Free Self-Improvement Guide
    actions:
        - theme: brand
          text: Get Started
          link: /self-improvement
        - theme: alt
          text: Community
          link: https://discord.gg/mKtJDGHRpj
        - theme: alt
          text: View on GitHub
          link: https://github.com/tatumertanen/ultimate-self-improvement-guide
    image:
        src: /favicon.svg
        alt: Habitmaxx Logo
features:
    - title: Self-Improvement Guide
      details: Learn everything about self-improvement, from goal setting to mindfulness.
      icon: 🚀
    - title: Free for Everyone
      details: Enjoy unlimited access to all content and resources without any fees.
      icon: ✨
    - title: Open Source
      details: Contribute to the project and help others improve their lives.
      icon: 💻
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageSection, 
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'
import { members } from "../config/team"
</script>
<br />
<br />
<br />
<br />

## Maintained by

<VPTeamMembers
  size="small"
  :members="members"
/>
