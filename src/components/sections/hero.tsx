import Image from "next/image";
import { DOCS_URL, GITHUB_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
        {/* Left — pitch */}
        <div>
          <span className="kicker">
            <span className="indicator" aria-hidden />
            Self-hosted · Open source
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-lcd sm:text-5xl lg:text-6xl">
            Webhook notifications,
            <br />
            straight to your phone.
          </h1>

          <p className="mt-5 max-w-xl text-lg text-lcd-dim">
            A Firebase-powered notification bridge for long-running developer
            and AI-agent jobs.{" "}
            <span className="text-lcd">
              Send one POST request. Get one phone notification.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              View on GitHub
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Read setup guide
            </a>
          </div>

          <p className="mt-6 text-sm text-lcd-dim/80">
            An alternative to Pushover, ntfy, Bark, Pushbullet, and Telegram-bot
            alerts.
          </p>
        </div>

        {/* Right — retro pager panel */}
        <div className="relative">
          <div className="amber-glow panel p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src="/notifyme-icon.png"
                  alt="NotifyMe pager"
                  width={48}
                  height={48}
                  className="rounded-xl"
                  priority
                />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-lcd-dim">
                    NotifyMe
                  </div>
                  <div className="text-sm font-semibold text-lcd">Inbox</div>
                </div>
              </div>
              <span className="indicator" aria-hidden />
            </div>

            <div className="mt-5 space-y-3">
              <PagerRow
                dot="dot-success"
                title="Claude Code"
                body="Task finished — tests green"
                time="now"
              />
              <PagerRow
                dot="dot-error"
                title="GitHub Actions"
                body="CI failed on main — 3 red"
                time="2m"
              />
              <PagerRow
                dot="dot-info"
                title="Crawler"
                body="Scrape done — 38k pages"
                time="14m"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PagerRow({
  dot,
  title,
  body,
  time,
}: {
  dot: string;
  title: string;
  body: string;
  time: string;
}) {
  return (
    <div className="lcd-panel flex items-center gap-3 px-4 py-3">
      <span className={`dot ${dot}`} aria-hidden />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-bold">{title}</span>
          <span className="shrink-0 text-[0.7rem] opacity-70">{time}</span>
        </div>
        <p className="truncate text-xs opacity-90">{body}</p>
      </div>
    </div>
  );
}
