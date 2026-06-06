# NotifyMe Landing Page

Landing page and blog for **NotifyMe**, an open-source, self-hosted webhook-to-phone notification app for developer workflows, AI-agent runs, CI jobs, automations, and long-running scripts.

NotifyMe gives each user a personal webhook URL. Send one `POST` request and receive one phone notification:

```text
POST webhook -> Firebase Function -> Firestore + FCM -> phone notification
```

## What This Project Contains

- A Next.js App Router landing page
- TypeScript components for the hero, features, examples, use cases, open-source positioning, and footer
- MDX blog routes at `/blog` and `/blog/[slug]`
- SEO, sitemap, robots, OpenGraph, and Twitter metadata
- Retro LCD/pager-inspired styling that matches the NotifyMe app icon

This repository is only the landing page. The NotifyMe app and backend live separately in the main NotifyMe project.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- MDX content via `next-mdx-remote` and `gray-matter`
- Vercel-ready static-first pages

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

The dev server runs on:

```text
http://localhost:3003
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/app/
  page.tsx                 Landing page composition
  layout.tsx               Root metadata and layout
  blog/                    Blog index and post routes
  sitemap.ts               Sitemap config
  robots.ts                Robots config
  opengraph-image.tsx      Generated OpenGraph image
  twitter-image.tsx        Generated Twitter image

src/components/
  site-header.tsx          Site navigation
  site-footer.tsx          Footer links and product highlights
  sections/                Landing page sections

src/lib/
  site.ts                  Shared links, examples, features, use cases
  blog.ts                  MDX loading helpers

content/blog/
  *.mdx                    Blog posts

public/
  notifyme-icon*.png       App icon assets
```

## Editing Site Content

Most shared landing page content is defined in:

```text
src/lib/site.ts
```

Update this file when changing:

- Navigation links
- GitHub, docs, and license URLs
- Footer product URLs
- Webhook examples
- Feature cards
- Use-case cards

The footer currently highlights related products used during development:

- WhisKey: private on-device dictation
- TokKong: offline transcription, translation, and AI text processing
- Lounge: macOS menu bar control and AI-agent notifications

## Adding Blog Posts

Add a new `.mdx` file under:

```text
content/blog/
```

Use frontmatter like this:

```mdx
---
title: "Notify me when a long-running job finishes"
description: "Send webhook notifications from scripts, CI, and automation workflows."
date: "2026-06-04"
---

Your post content goes here.
```

The blog index and static blog post routes are generated from these files.

## Deployment

The project is ready for Vercel deployment. Set the production origin so
metadata, sitemap, robots, and social images use crawlable absolute URLs:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is also used as a fallback. Local
development falls back to `http://localhost:3003`.

## Product Positioning

NotifyMe is positioned as a self-hosted alternative to Pushover, ntfy, Bark, Pushbullet, and Telegram-bot alerts.

Core message:

```text
Webhook notifications, straight to your phone.
```

The copy should stay practical and developer-native. Prefer concrete workflow language over broad marketing claims.
