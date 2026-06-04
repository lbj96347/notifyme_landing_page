import { DOCS_URL, GITHUB_URL } from "@/lib/site";
import { SectionHeading } from "./section-heading";

const POINTS = [
  {
    title: "No central server",
    body: "There's no NotifyMe backend to trust. Nothing routes through us.",
  },
  {
    title: "No hardcoded project IDs",
    body: "The stack reads your own Firebase config. Nothing is pinned to us.",
  },
  {
    title: "Your Firebase project",
    body: "Deploy the Cloud Function and Firestore rules into your own account.",
  },
  {
    title: "Notifications stay private",
    body: "Data lives in your Firestore, scoped to your authenticated user.",
  },
];

export function OpenSource() {
  return (
    <section id="open-source" className="border-t border-casing-light/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              kicker="Open source · Self-hosted"
              title="Your Firebase project. Your notifications."
              intro="NotifyMe is open source and runs entirely on infrastructure you control. Clone it, deploy it, own it."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View on GitHub
              </a>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Read setup guide
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {POINTS.map((p) => (
              <div key={p.title} className="panel p-5">
                <span className="indicator" aria-hidden />
                <h3 className="mt-3 text-base font-bold text-lcd">{p.title}</h3>
                <p className="mt-1.5 text-sm text-lcd-dim">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
