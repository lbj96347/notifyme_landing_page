# NotifyMe Landing Page Plan

## Goal

Build a retro-styled Next.js landing page for NotifyMe: an open-source, self-hosted webhook-to-phone notification app for developers, AI-agent users, and automation workflows.

The site should be Vercel-ready and use port `3003` as the default local development port.

## Core Positioning

NotifyMe is a self-hosted alternative to tools such as Pushover, ntfy, Bark, Pushbullet, and Telegram-bot alerts.

Primary message:

> Give every developer a personal webhook URL that pushes notifications straight to their phone.

Problem solved:

Developers often run long jobs and keep checking status manually: Claude Code, Codex CLI, n8n, GitHub Actions, CI, crawlers, scripts, AI generation jobs, VPS monitoring, and Statuspage incidents. NotifyMe turns those workflows into a simple flow:

```text
POST webhook -> phone notification -> open app -> view details
```

## Visual Direction

The landing page should match the app icon's retro handheld device / pager style.

Recommended color palette:

- Dark charcoal casing: `#1f2328`, `#2b2f35`
- Soft LCD green: `#c8d99a`, `#aebe7d`
- Alert red/orange: `#ef3b1f`
- Warm amber glow: `#c9824d`
- Background: deep graphite with subtle texture/noise

Design language:

- Chunky borders
- Inset LCD-like panels
- Small red indicator lights
- Terminal-inspired code surfaces
- Pixel or low-resolution accent details
- Practical retro app feel, not cyberpunk and not generic SaaS gradients

## Recommended Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX-based blog content
- Static-first pages where possible
- Vercel deployment
- `next/image` for screenshots and icon assets
- SEO metadata and OpenGraph image
- `package.json` dev script defaulting to port `3003`, for example:

```json
{
  "scripts": {
    "dev": "next dev -p 3003"
  }
}
```

## Page Structure

### 1. Hero

- H1: `NotifyMe`
- Subtitle: `Webhook notifications, straight to your phone.`
- Supporting copy: self-hosted, open-source, Firebase-powered notification bridge for long-running developer and AI-agent jobs.
- CTA buttons:
  - `View on GitHub`
  - `Read Setup Guide`
- Visual: large retro pager-inspired product panel using the app icon palette.

### 2. Problem Section

Headline direction:

> Stop babysitting long-running jobs.

Examples to highlight:

- Claude Code
- Codex CLI
- GitHub Actions
- n8n
- Bash scripts
- Statuspage incidents

The section should contrast lightweight phone push notifications with noisy email, Slack, and Discord alerts.

### 3. How It Works

Show a three-step retro terminal flow:

```text
POST webhook
  -> Firebase Function
  -> Firestore + FCM
  -> Phone notification
```

Include a small payload example.

### 4. Main Features

- Personal webhook URL
- Push delivery via FCM
- Notification inbox grouped by day
- Status colors: success, error, warning, info
- Search notifications
- Read / unread state
- Tappable URLs
- Bookmarks
- Statuspage payload support
- Self-hosted Firebase deployment

### 5. Use Cases

- AI agent finished
- CI failed
- n8n workflow completed
- Crawler done
- Claude Statuspage incident
- Server monitor alert

### 6. Open Source / Self-Hosted Section

Emphasize:

- No central NotifyMe server
- No hardcoded Firebase project IDs
- Deployed into the user's Firebase project
- Notifications stay private

Include links to setup docs once the final docs URLs are known.

### 7. Examples Section

Create cards for:

- Claude Code
- Codex CLI
- GitHub Actions
- n8n
- Bash

Each card should show a short copy-paste snippet, such as a `curl` command or workflow config.

### 8. Blog Section

The landing page should include a blog preview section from the start, even if the initial posts are placeholders.

Suggested starter posts:

- `Notify me when Claude Code finishes a task`
- `Send GitHub Actions failures to your phone`
- `Using NotifyMe with n8n workflows`
- `Subscribe to Claude Statuspage incidents with NotifyMe`

Implement:

- `/blog`
- `/blog/[slug]`
- MDX files for posts

This keeps future usage-sharing posts easy to add.

### 9. Footer

Footer links:

- GitHub
- Docs
- Examples
- Blog
- License

Footer copy should reinforce that NotifyMe is open source and self-hosted.

## Implementation Phases

1. Scaffold a new Next.js app in `notifyme_landing_page`.
2. Configure the local dev script to use port `3003`.
3. Copy the app icon into `public/` and define theme tokens from the icon palette.
4. Build the landing page route with responsive retro styling.
5. Add reusable sections/components:
   - Hero
   - Feature grid
   - Flow diagram
   - Use-case cards
   - Code block
   - Blog preview
6. Add MDX blog structure and starter placeholder posts.
7. Add SEO metadata and OpenGraph metadata.
8. Verify mobile and desktop layouts.
9. Prepare for Vercel deployment.

## Key Copy Direction

The page should feel developer-native and practical. Avoid vague marketing language such as "supercharge your workflow."

Preferred copy examples:

- `Stop checking terminals manually.`
- `Send one POST request. Get one phone notification.`
- `Your Firebase project. Your notifications.`
- `Built for Claude Code, Codex CLI, n8n, GitHub Actions, and long-running scripts.`

## Initial Build Tasks

1. Create the Next.js project scaffold.
2. Add Tailwind CSS and base theme tokens.
3. Implement the app shell and global retro visual system.
4. Build the landing page sections.
5. Add the blog routes and starter MDX content.
6. Add metadata and deployment-friendly configuration.
7. Run local verification on port `3003`.
