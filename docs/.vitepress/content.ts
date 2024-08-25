import type { SideBarContentGroups } from "../../types";

export default {
    guides: {
        name: "Guides",
        icon: "📚",
        description: "The guides are comprehensive collections of valuable infromation.",
        items: [
            { text: "🌟 Habits", link: "/guides/habits" },
            { text: "🏆 Goals", link: "/guides/goals" },
            { text: "🧠 Mindset", link: "/guides/mindset" },
            { text: "📚 Reading Books", link: "/guides/reading" },
            { text: "💤 Optimizing Sleep", link: "/guides/sleep" },
            { text: "⚡ Productivity", link: "/guides/productivity" },
            { text: "🥩 Breaking Addiction", link: "/guides/addiction" },
            { text: "🧘‍♂️ Mindfulness", link: "/guides/mindfulness" },
            { text: "👨‍🎓 Studying", link: "/guides/studying" },
            { text: "💪 Gym & Exercise", link: "/guides/gym" },
            { text: "🏃‍♂️ Weight Loss", link: "/guides/weight-loss" },
            { text: "🚿 Cold Showers", link: "/guides/cold-showers" },
        ],
    },
    methods: {
        name: "Methods",
        icon: "🧠",
        description: "The methods are practical techniques that can be applied to improve your life.",
        items: [{ text: "👤 Looksmaxxing", link: "/methods/looksmaxxing" }],
    },
    resources: {
        name: "Resources",
        icon: "📚",
        description: "The resources are external links to other websites.",
        items: [
            {
                text: "📚 Books",
                link: "/resources#books",
            },
            {
                text: "🎙 Podcasts",
                link: "/resources#podcasts",
            },
            {
                text: "▶ YouTube Channels",
                link: "/resources#youtube-channels",
            },
            {
                text: "🌐 Websites",
                link: "/resources#websites",
            },
            {
                text: "📱 Apps",
                link: "/resources#apps",
            },
        ],
    },
} as const satisfies SideBarContentGroups;
