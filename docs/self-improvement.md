---
title: Getting Started With Self-Improvement
---

# 🚀 Getting Started With Self-Improvement {#getting-started}

<script setup>
import { DISCORD_INVITE } from '../consts'
import content from './.vitepress/content'
</script>

Welcome! We are building the best and biggest free and open-source guide to self-improvement. Join our <a :href="DISCORD_INVITE">Discord server</a> to discuss self-improvement and help us build the best possible guide!

## 📜 {{ content.guides.name }} {#guides}

<Badge type="info" :text="content.guides.description" />

<ul>
    <template v-for="item in content.guides.items">
        <li><a :href="item.link">{{ item.text }}</a></li>
    </template>
</ul>

## ⚙ {{ content.methods.name }} {#methods}

<Badge type="info" :text="content.methods.description" />

<ul>
    <template v-for="item in content.methods.items">
            <li><a :href="item.link">{{ item.text }}</a></li>
    </template>
</ul>

## 📚 {{ content.resources.name }} {#resources}

<Badge type="info" :text="content.resources.description" />

<ul>
    <template v-for="item in content.resources.items">
        <li><a :href="item.link">{{ item.text }}</a></li>
    </template>
</ul>

## 🔗 Other Links {#other}

-   [**Contributing**](/contributing)
-   [**Discord**](https://discord.gg/mKtJDGHRpj)
