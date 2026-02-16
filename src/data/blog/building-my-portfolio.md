---
title: "Building This Portfolio Site"
description: "A look at how I built this site with Astro, Tailwind CSS, and Cloudflare Pages."
pubDate: 2026-02-16
tags: ["webdev", "astro", "cloudflare"]
draft: false
---

I wanted a portfolio site that was fast, minimal, and easy to maintain. Here's what I chose and why.

## The stack

- **Astro** — ships zero JavaScript by default, perfect for content-heavy sites
- **Tailwind CSS v4** — utility-first styling with a clean, consistent design system
- **Cloudflare Pages** — global CDN, automatic deployments from GitHub, free tier

## Why Astro?

Most portfolio sites don't need a heavy JavaScript framework. Astro lets me write components in a familiar syntax but renders everything to static HTML. The result is a site that loads almost instantly.

## Content as Markdown

Blog posts and project descriptions are just Markdown files. Adding a new post is as simple as creating a `.md` file and pushing to GitHub. Cloudflare Pages handles the rest — building and deploying in under 30 seconds.

## What's next

I'll continue refining the design and adding more content. The source code is available on GitHub if you want to take a look.
