import { SectionHeading } from "./section-heading";

const SOURCES = [
  "Claude Code",
  "Codex CLI",
  "GitHub Actions",
  "n8n",
  "Bash scripts",
  "Statuspage incidents",
];

export function Problem() {
  return (
    <section className="border-t border-casing-light/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionHeading
          kicker="The problem"
          title="Stop babysitting long-running jobs."
          intro="You kick off a job and then keep flipping back to the terminal to see if it's done. NotifyMe ends the manual polling — the job tells you."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="panel p-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-lcd-dim">
              <span className="dot dot-warning" aria-hidden />
              Today
            </div>
            <ul className="mt-4 space-y-3 text-lcd-dim">
              <li>Refreshing terminals and dashboards by hand.</li>
              <li>Noisy email and Slack threads you learn to ignore.</li>
              <li>Discord webhooks that bury the one alert that matters.</li>
              <li>Missing a failed deploy until someone else notices.</li>
            </ul>
          </div>

          {/* After */}
          <div className="panel p-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-lcd">
              <span className="dot dot-success" aria-hidden />
              With NotifyMe
            </div>
            <ul className="mt-4 space-y-3 text-lcd-dim">
              <li>
                <span className="text-lcd">One lightweight phone push</span>{" "}
                per job, not a feed to scan.
              </li>
              <li>Color-coded by status so failures stand out instantly.</li>
              <li>Tap to jump straight to the run, log, or incident.</li>
              <li>Works anywhere a script can send an HTTP POST.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.18em] text-lcd-dim">
            Built for the jobs you already run
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {SOURCES.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
