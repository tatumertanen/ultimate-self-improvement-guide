import { defineConfig } from "vitepress";
import { DISCORD_INVITE, GTAG, HOSTNAME, REPO_URL } from "../../consts";

type Guide = {
	text: string;
	link: string;
};

const guides: Guide[] = [
	{ text: "Habits", link: "/guides/habits" },
	{ text: "Sleep", link: "/guides/sleep" },
	// { text: "<s>Goals</s>", link: "/guides/goals" },
	// { text: "<s>Productivity</s>", link: "/guides/productivity" },
	// { text: "<s>Mindset</s>", link: "/guides/mindset" },
	// { text: "<s>Mindfulness</s>", link: "/guides/mindfulness" },
];

export default defineConfig({
	lang: "en-US",
	title: "Habitmaxx | Ultimate Self-Improvement Guide",
	description:
		"This is a open source guide to self-improvement. Find methods, guides, techniques, all for free. Contribute to the guides with the newest information and join a community of alike minded people.",

	themeConfig: {
		siteTitle: "Habitmaxx",
		nav: [
			{ text: "📚 Guides", items: guides },
			{ text: "📝 Contributing", link: "/contributing" },
			{ text: "🗣 Glossary", link: "/glossary" },
		],
		sidebar: [
			{
				text: "Introduction",
				collapsed: false,
				items: [
					{
						text: "Getting Started",
						link: "/self-improvement",
					},
				],
			},
			{
				text: "Guides",
				collapsed: false,
				items: guides,
			},
			{
				text: "Methods",
				collapsed: false,
				items: [
					{
						text: "Looksmaxxing",
						link: "/methods/looksmaxxing",
					},
				],
			},
			{
				text: "Resources",
				collapsed: false,
				items: [
					{
						text: "Books",
						link: "/resources#books",
					},
					{
						text: "Podcasts",
						link: "/resources#podcasts",
					},
					{
						text: "YouTube Channels",
						link: "/resources#youtube-channels",
					},
					{
						text: "Websites",
						link: "/resources#websites",
					},
					{
						text: "Apps",
						link: "/resources#apps",
					},
				],
			},
			{
				items: [
					{
						text: "Glossary",
						link: "/glossary",
					},
					{
						text: "Contributing",
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
		],
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
	lastUpdated: true,
	cleanUrls: true,
	sitemap: {
		hostname: HOSTNAME,
	},
});
