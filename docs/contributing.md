<script setup>
import { DISCORD_INVITE, REPO_URL } from '../consts'
</script>

# Contributing to the Self Improvement Guide

Thank you for your interest in contributing to our open source self improvement guide! We appreciate your support and welcome any contributions that can help improve the guide for everyone.

## Getting Started

The project is build with [VitePress](https://vitepress.dev) guide files use markdown. The file structure looks like this:

```tree{3,6-9}
docs
├─ .vitepress
│  └─ config.mts (settings of the page such as the sidebar, navbar, etc.)
├─ public
│  └─ favicon.ico
├─ guides
│  ├─ habits.md
│  └─ sleep.md
│  └─ ...
├─ index.md (the homepage)
├─ self-improvement.md
└─ contributing.md
```

The sidebar is structured like this:

```ts:line-numbers=31
sidebar: [
	{
		text: "Introduction",
		collapsed: false,
		items: [
            { text: "Getting Started", link: "/self-improvement", },
        ],
	},
	{
		text: "Guides",
		collapsed: false,
		items: [...]
	},
	{
		text: "Methods",
		collapsed: false,
		items: [...],
	},
    ...
],
```

## Content Edits and Suggestion

If you have no experience with coding, we recommend you join our <a target="_blank" :href="DISCORD_INVITE">Discord</a> and ask for help.

## Contributing

You should start by reading the [VitePress Markdown Guide](https://vitepress.dev/guide/markdown) to understand how to format your content.

If you are familiar with markdown, you can start by editing the existing files in the `docs` directory.

We recommend you use the GitHub web interface to make changes. This allows you to preview your changes before submitting a pull request.

The GitHub repository is located at <a target="_blank" :href="REPO_URL">{{ REPO_URL }}</a>.

::: tip IMPORTANT
Remember to follow the guidelines below when contributing changes.
:::

## Guidelines

To ensure a smooth contribution process, please adhere to the following guidelines:

-   Add sources and references to all content to ensure accuracy and credibility.
-   Ensure that your contributions align with the purpose and scope of the self improvement guide.
-   Follow the existing formatting and style conventions used in the markdown files.
-   Provide clear and concise commit messages and pull request descriptions.
-   If you are adding new content, make sure it is well-structured and easy to understand.
-   If you are modifying existing content, explain the reasoning behind your changes in the pull request description.
-   Be respectful and considerate towards other contributors and maintainers.

## Reporting Issues

If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository. Provide as much detail as possible, including steps to reproduce the issue if applicable.

## Contact

If you have any questions or need further assistance, feel free to reach out to the maintainers of this repository. You can contact us via the following channels:

-   Email: contributing@habitmaxx.com
-   Discord: <a :href="DISCORD_INVITE">{{ DISCORD_INVITE }}</a>

We appreciate your contributions and look forward to collaborating with you to make this self improvement guide even better!
