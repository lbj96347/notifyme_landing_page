import type { Metadata } from "next";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/site";
import "./globals.css";

const TITLE = "NotifyMe — Webhook notifications, straight to your phone";
const DESCRIPTION =
  "Self-hosted, open-source webhook-to-phone notifications for long-running developer and AI-agent jobs. Send one POST request, get one phone notification.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · NotifyMe",
  },
  description: DESCRIPTION,
  applicationName: "NotifyMe",
  keywords: [
    "webhook notifications",
    "push notifications",
    "Pushover alternative",
    "ntfy alternative",
    "Bark alternative",
    "Pushbullet alternative",
    "self-hosted notifications",
    "open source",
    "Firebase Cloud Messaging",
    "FCM",
    "Claude Code notifications",
    "Codex CLI",
    "GitHub Actions alerts",
    "n8n",
    "CI alerts",
  ],
  authors: [{ name: "NotifyMe" }],
  creator: "NotifyMe",
  publisher: "NotifyMe",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "NotifyMe",
    type: "website",
    locale: "en_US",
    images: [SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "64x64", type: "image/png" },
      { url: "/notifyme-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/notifyme-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
