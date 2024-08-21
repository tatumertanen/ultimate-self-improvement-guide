import { DISCORD_INVITE } from "../consts";

export const members = [
	{
		avatar: "https://www.github.com/tatumertanen.png",
		name: "Tatu M",
		title: "Founder",
		links: [
			{ icon: "discord", link: DISCORD_INVITE },
			{ icon: "github", link: "https://github.com/tatumertanen" },
			// https://vitepress.dev/reference/default-theme-nav#social-links
		],
	},
	{
		avatar: "https://avatars.githubusercontent.com/u/179009542",
		name: "Joel V",
		title: "Co-Founder",
		links: [{ icon: "discord", link: DISCORD_INVITE }],
	},
	{
		avatar: "/logo.png",
		name: "Habitmaxx Community",
		title: "Maintainer",
		links: [{ icon: "discord", link: DISCORD_INVITE }],
	},
];
