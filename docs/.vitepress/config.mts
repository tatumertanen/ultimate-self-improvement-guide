import { defineConfig } from "vitepress";
import { NAME, DISCORD_INVITE, GTAG, HOSTNAME, REPO_URL } from "../../consts";
import content from "./content";

const navigation = [
    { text: "🚀 Getting Started", link: "/self-improvement" },
    { text: "👨‍💻 Contributing", link: "/contributing" },
    { text: "💬 Community", link: DISCORD_INVITE },
    {
        text: "",
        items: [
            { text: "💡 Ideas", link: `${REPO_URL}/discussions/ideas` },
            { text: "💬 Feedback", link: `${REPO_URL}/feedback` },
            { text: "💬 Support", link: `${REPO_URL}/support` },
            { text: "💬 General", link: `${REPO_URL}/general` },
            { text: "💬 Ideas", link: `${REPO_URL}/ideas` },
        ],
    },
];

const sidebar = [
    {
        text: "Introduction",
        collapsed: false,
        items: [
            {
                text: "🚀 Getting Started",
                link: "/self-improvement",
            },
        ],
    },
    {
        text: "Guides",
        collapsed: false,
        items: content.guides.items,
    },
    {
        text: "Methods",
        collapsed: false,
        items: content.methods.items,
    },
    {
        text: "Resources",
        collapsed: false,
        items: content.resources.items,
    },
    {
        items: [
            {
                text: "🗣 Glossary",
                link: "/glossary",
            },
            {
                text: "📝 Contributing",
                link: "/contributing",
            },
            { text: "Contact", link: "/contact" },
            { text: "Discord", link: DISCORD_INVITE },
            {
                text: "Support Us",
                link: "https://buymeacoffee.com/selfimprovementguide",
            },
        ],
    },
];

export default defineConfig({
    lang: "en-US",
    title: `${NAME} | Ultimate Self-Improvement Guide`,
    description:
        "This is a open source guide to self-improvement. Find methods, guides, techniques, all for free. Contribute to the guides with the newest information and join a community of alike minded people.",
    lastUpdated: true,
    cleanUrls: true,
    appearance: "force-dark",
    sitemap: {
        hostname: HOSTNAME,
    },
    themeConfig: {
        nav: navigation,
        sidebar: sidebar,
        siteTitle: NAME,
        logo: "/favicon.png",
        socialLinks: [
            { icon: "github", link: REPO_URL },
            { icon: "discord", link: DISCORD_INVITE },
        ],
        search: {
            provider: "local",
        },
        footer: {
            message: "Founded with 💙 in Finland",
            copyright: "© Copyright 2024 Habitmaxx. All Rights Reserved.",
        },
        editLink: {
            pattern: `${REPO_URL}/edit/main/docs/:path`,
            text: "Suggest edits to this page",
        },
    },
    head: [
        ["link", { rel: "icon", href: "/favicon.ico" }],
        ["meta", { property: "og:image", content: "/banner.png" }],
        ["meta", { name: "twitter:image", content: "/banner.png" }],
        ["meta", { property: "og:image:type", content: "image/png" }],
        ["meta", { property: "og:image:width", content: "1412" }],
        ["meta", { property: "og:image:height", content: "564" }],
        [
            "script",
            {
                async: "",
                src: `https://www.googletagmanager.com/gtag/js?id=${GTAG}`,
            },
        ],
        [
            "script",
            {},
            `
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${GTAG}');
        `,
        ],
    ],
});
