"use client";

import { useState } from "react";
import { CopyButton } from "@/components/copy-button";
import { EXAMPLES, WEBHOOK_PLACEHOLDER } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function Examples() {
  const [active, setActive] = useState(EXAMPLES[0].id);
  const current = EXAMPLES.find((e) => e.id === active) ?? EXAMPLES[0];

  return (
    <section id="examples" className="border-t border-casing-light/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionHeading
          kicker="Examples"
          title="Copy, paste, get notified."
          intro="The same contract everywhere. Set NOTIFYME_URL to your personal webhook and drop one of these into your workflow."
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              type="button"
              role="tab"
              aria-selected={ex.id === active}
              onClick={() => setActive(ex.id)}
              className={`btn !py-2 !text-xs ${
                ex.id === active ? "btn-primary" : "btn-ghost"
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        <p className="mt-5 text-sm text-lcd-dim">{current.blurb}</p>

        <div className="mt-4 terminal overflow-hidden">
          <div className="flex items-center justify-between border-b border-casing-light px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="dot dot-error" aria-hidden />
              <span className="dot dot-warning" aria-hidden />
              <span className="dot dot-success" aria-hidden />
              <span className="ml-2 text-xs text-lcd-dim">
                {current.label} · {current.language}
              </span>
            </div>
            <CopyButton text={current.code} />
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-lcd">
            <code>{current.code}</code>
          </pre>
        </div>

        <p className="mt-4 text-xs text-lcd-dim/80">
          <span className="text-lcd-dim">NOTIFYME_URL</span> looks like{" "}
          <code className="text-amber break-all">{WEBHOOK_PLACEHOLDER}</code> — your own
          Cloud Function endpoint with your routing token.
        </p>
      </div>
    </section>
  );
}
