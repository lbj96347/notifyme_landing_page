import Image from "next/image";
import Link from "next/link";
import {
  DOCS_URL,
  GITHUB_URL,
  LICENSE_URL,
  LOUNGE_URL,
  TOKKONG_URL,
  WHISKEY_URL,
} from "@/lib/site";

const COLUMNS = [
  {
    heading: "Project",
    links: [
      { label: "GitHub", href: GITHUB_URL, external: true },
      { label: "Docs", href: DOCS_URL, external: true },
      { label: "License (MIT)", href: LICENSE_URL, external: true },
    ],
  },
  {
    heading: "Learn",
    links: [
      { label: "How it works", href: "/#how-it-works", external: false },
      { label: "Examples", href: "/#examples", external: false },
      { label: "Blog", href: "/blog", external: false },
    ],
  },
  {
    heading: "Products",
    links: [
      {
        label: "WhisKey",
        dotClass: "bg-sky-400 shadow-sky-400/45",
        description:
          "Private on-device dictation for drafting NotifyMe notes, prompts, and docs.",
        href: WHISKEY_URL,
        external: true,
      },
      {
        label: "TokKong",
        dotClass: "bg-emerald-400 shadow-emerald-400/45",
        description:
          "Offline transcription, translation, and AI cleanup for meetings and release notes.",
        href: TOKKONG_URL,
        external: true,
      },
      {
        label: "Lounge",
        dotClass: "bg-fuchsia-400 shadow-fuchsia-400/45",
        description:
          "Menu bar control and AI-agent alerts that keep development runs visible.",
        href: LOUNGE_URL,
        external: true,
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-casing-light/60 bg-graphite-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 md:grid-cols-5">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2.5">
            <Image
              src="/notifyme-icon.png"
              alt="NotifyMe"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-lcd">
              NotifyMe
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-lcd-dim">
            Open source and self-hosted. Deploy the webhook-to-phone stack into
            your own Firebase project — no central server, no shared data.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex items-center gap-2 text-sm text-lcd-dim transition-colors hover:text-amber focus-visible:text-amber focus-visible:outline-none"
                      aria-describedby={
                        "description" in link
                          ? `footer-product-${link.label.toLowerCase()}`
                          : undefined
                      }
                    >
                      {"dotClass" in link ? (
                        <span
                          className={`h-2 w-2 rounded-full shadow-[0_0_10px] ${link.dotClass}`}
                          aria-hidden="true"
                        />
                      ) : null}
                      <span>{link.label}</span>
                      {"description" in link ? (
                        <span
                          id={`footer-product-${link.label.toLowerCase()}`}
                          className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 w-56 rounded-md border border-casing-light/70 bg-graphite px-3 py-2 text-xs leading-5 text-lcd opacity-0 shadow-xl shadow-black/25 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
                          role="tooltip"
                        >
                          {link.description}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-lcd-dim transition-colors hover:text-amber"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-10">
        <hr className="rule" />
        <p className="mt-6 text-xs text-lcd-dim/80">
          NotifyMe is a self-hosted, open-source alternative to Pushover, ntfy,
          Bark, Pushbullet, and Telegram-bot alerts. Your Firebase project, your
          notifications.
        </p>
      </div>
    </footer>
  );
}
