import { CopyButton } from "@/components/copy-button";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    n: "01",
    title: "POST webhook",
    body: "Your script hits your personal webhook URL with a small JSON body.",
  },
  {
    n: "02",
    title: "Firebase Function",
    body: "A Cloud Function validates the payload and resolves your token.",
  },
  {
    n: "03",
    title: "Firestore + FCM",
    body: "The notification is persisted, then pushed via Cloud Messaging.",
  },
  {
    n: "04",
    title: "Phone notification",
    body: "It lands on your phone. Tap it to open the detail or linked URL.",
  },
];

const PAYLOAD = `{
  "title": "Build passed",
  "message": "main is green — deploy queued",
  "category": "github",
  "status": "success",
  "url": "https://github.com/acme/app/actions"
}`;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-casing-light/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionHeading
          kicker="How it works"
          title="One POST in, one push out."
          intro="No agents to install, no polling. The whole pipeline is four hops from your script to your lock screen."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="panel p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-amber">
                  {step.n}
                </span>
                <span className="indicator" aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-bold text-lcd">{step.title}</h3>
              <p className="mt-2 text-sm text-lcd-dim">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="terminal overflow-hidden">
            <div className="flex items-center justify-between border-b border-casing-light px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="dot dot-error" aria-hidden />
                <span className="dot dot-warning" aria-hidden />
                <span className="dot dot-success" aria-hidden />
                <span className="ml-2 text-xs text-lcd-dim">
                  payload — the full webhook contract
                </span>
              </div>
              <CopyButton text={PAYLOAD} />
            </div>
            <pre className="overflow-x-auto p-4 text-sm text-lcd">
              <code>{PAYLOAD}</code>
            </pre>
          </div>
          <p className="mt-3 text-sm text-lcd-dim">
            <span className="text-lcd">title</span> +{" "}
            <span className="text-lcd">message</span> are the body ·{" "}
            <span className="text-lcd">status</span> maps to a color (closed
            set) · <span className="text-lcd">category</span> organizes the
            inbox · <span className="text-lcd">url</span> makes it tappable.
          </p>
        </div>
      </div>
    </section>
  );
}
