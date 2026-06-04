import Image from "next/image";
import Link from "next/link";
import { GITHUB_URL, NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-casing-light/60 bg-graphite/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/notifyme-icon.png"
            alt="NotifyMe"
            width={34}
            height={34}
            className="rounded-lg"
            priority
          />
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-lcd">
            NotifyMe
          </span>
          <span className="indicator" aria-hidden />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-lcd-dim transition-colors hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost !py-2 !text-xs"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
