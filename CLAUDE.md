# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current state

**Landing page + blog built.** This directory holds a Next.js (App Router) + TypeScript +
Tailwind CSS v4 app built in place. `LANDING_PAGE_PLAN.md` remains the source of truth for scope,
copy, and visual direction. The parent `../CLAUDE.md` still describes this directory as an "empty
placeholder"; that is stale.

App code lives under `src/app/` (path alias `@/*` → `./src/*`). Layout:

- `src/app/page.tsx` composes the landing sections in order: Hero → Problem → HowItWorks →
  Features → UseCases → OpenSource → Examples → BlogPreview, wrapped by `SiteHeader`/`SiteFooter`.
- `src/components/sections/*` — one file per section. `examples.tsx` is a client component (tabbed
  snippets); the rest are server components. `SectionHeading` is the shared section header.
- `src/components/` — `site-header.tsx`, `site-footer.tsx`, `copy-button.tsx` (client).
- `src/lib/site.ts` — shared constants: `NAV_LINKS`, `EXAMPLES` (webhook snippets — keep in sync
  with the contract), `FEATURES`, `USE_CASES`, and external URLs (`GITHUB_URL`, `DOCS_URL`,
  `LICENSE_URL` — canonical repo `github.com/lbj96347/notifyme`, quick start `#quick-start`).
- `src/lib/blog.ts` — reads MDX from `content/blog/*.mdx` via `gray-matter`; rendered with
  `next-mdx-remote/rsc`. Blog routes: `src/app/blog/page.tsx` (index) and
  `src/app/blog/[slug]/page.tsx` (post, `generateStaticParams` + per-post metadata).
- `content/blog/` — 4 starter MDX posts (Claude Code, GitHub Actions, n8n, Statuspage).

Retro LCD/pager theme lives in `src/app/globals.css`: Tailwind v4 `@theme` tokens (`bg-casing`,
`text-lcd`, `text-amber`, etc.) plus `@layer components` utilities — `.panel`, `.lcd-panel`,
`.terminal`, `.indicator`, `.amber-glow`, `.btn`/`.btn-primary`/`.btn-ghost`, `.kicker`, `.chip`,
`.dot-*` status dots, and `.prose` for blog post bodies. Reuse these instead of re-deriving styles.

## What this is

A marketing/landing site for **NotifyMe**, the product implemented in the sibling `../notifyme/`
directory (Flutter client + Firebase backend). This site is a separate, independent project — it
ships no app code and shares no build with `../notifyme/`. It exists to explain the product, show
copy-paste webhook examples, and host a blog.

## Intended stack & hard constraints

These come from the plan and are binding:

- **Next.js (App Router) + TypeScript + Tailwind CSS.** Static-first; `next/image` for assets.
- **Dev server runs on port 3003** — `"dev": "next dev -p 3003"`. Local verification happens on 3003.
- **Vercel-ready** deployment.
- **MDX blog** at `/blog` and `/blog/[slug]`, backed by MDX files. Ship placeholder starter posts
  from day one so future usage posts are cheap to add.
- **SEO + OpenGraph** metadata on pages.

## Visual direction (do not drift)

Retro handheld-pager / LCD aesthetic matching the app icon — *not* cyberpunk, *not* generic SaaS
gradients. Define theme tokens from this palette:

- Casing charcoal: `#1f2328`, `#2b2f35`
- LCD green: `#c8d99a`, `#aebe7d`
- Alert red/orange: `#ef3b1f`
- Warm amber: `#c9824d`
- Background: deep graphite with subtle noise/texture

Design language: chunky borders, inset LCD-like panels, small red indicator lights,
terminal-style code surfaces, pixel/low-res accents.

Copy is developer-native and concrete. Avoid vague marketing ("supercharge your workflow"). The
plan's "Key Copy Direction" section lists the preferred voice.

## The webhook contract (keep examples accurate)

The Examples section shows copy-paste snippets (curl, Claude Code, Codex CLI, GitHub Actions, n8n).
These must match the real contract owned by `../notifyme/` — if the backend's contract changes,
these snippets must change in lockstep. The contract:

```json
{ "title": "...", "message": "...", "category": "claude", "status": "success", "url": "https://..." }
```

- POST to a personal webhook URL: `.../webhook/{userToken}`.
- `status` is a **closed set** mapping to colors: green=success, red=error, yellow=warning, blue=info.
- `category` organizes the inbox; `url` makes the notification tappable.
- Canonical example payloads live in `../notifyme/firebase_functions/` and the product's `examples/`
  (bash, claude-code, codex-cli, github-actions, n8n) — mirror those rather than inventing new ones.

## Positioning facts (don't contradict the product)

- NotifyMe is **self-hosted and open-source**: users deploy the stack into **their own Firebase
  project**. There is no central NotifyMe server, and nothing hardcodes Firebase project IDs.
  Marketing copy must not imply a hosted/SaaS backend.
- Positioned as an alternative to Pushover, ntfy, Bark, Pushbullet, and Telegram-bot alerts.
- Core flow to communicate: `POST webhook → Firebase Function → Firestore + FCM → phone notification → tap → detail`.
- Driving use case: monitoring long-running developer/AI-agent jobs (Claude Code, Codex CLI, n8n,
  GitHub Actions, CI, crawlers, Statuspage incidents).

## Commands

- `npm install` — install deps.
- `npm run dev` — Next.js dev server on **port 3003** (`next dev -p 3003`). Local verification happens here.
- `npm run build` — production build (also runs lint + type-check).
- `npm run start` — serve the production build on port 3003.
- `npm run lint` — ESLint (`next lint`, flat config in `eslint.config.mjs`).
