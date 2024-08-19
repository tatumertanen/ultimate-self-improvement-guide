import { defineConfig } from "vitepress";
import { DISCORD_INVITE, GTAG, HOSTNAME, REPO_URL } from "../../consts";

export default defineConfig({
	lang: "en-US",
	title: "Habitmaxx | Ultimate Self-Improvement Guide",
	description:
		"This is a open source guide to self-improvement. Find methods, guides, techniques, all for free. Contribute to the guides with the newest information and join a community of alike minded people.",

	themeConfig: {
		siteTitle: "Habitmaxx",
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Contribute", link: "/contributing" },
			{
				text: "Donate",
				link: "https://buymeacoffee.com/selfimprovementguide",
			},
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
					{
						text: "What Is Habitmaxx?",
						link: "/explained",
					},
					{
						text: "Transparency",
						link: "/transparency",
					},
				],
			},
			{
				text: "Guides",
				collapsed: false,
				items: [
					{ text: "Habits: Build Good Ones", link: "/guides/habits" },
					{ text: "Habits: Break Bad Ones", link: "/guides/bad-habits" },
					{ text: "Goals", link: "/guides/goals" },
					{ text: "Sleep", link: "/guides/sleep" },
				],
			},
			{
				text: "Methods",
				collapsed: false,
				items: [
					{
						text: "Looksmaxxing",
						collapsed: true,
					},
				],
			},
			{
				text: "Resources",
				collapsed: false,
				items: [
					{
						text: "Books",
						link: "/resources/books",
					},
					{
						text: "Podcasts",
						link: "/resources/podcasts",
					},
					{
						text: "YouTube Channels",
						link: "/resources/youtube-channels",
					},
					{
						text: "Websites",
						link: "/resources/websites",
					},
				],
			},
			{
				items: [
					{
						text: "Contributing",
						link: "/contributing",
					},
					{ text: "Discord", link: DISCORD_INVITE },
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
			copyright: "Copyright © 2024-present",
		},
		editLink: {
			pattern: `${REPO_URL}/edit/main/docs/:path`,
			text: "Suggest edits to this page",
		},
	},
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
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
