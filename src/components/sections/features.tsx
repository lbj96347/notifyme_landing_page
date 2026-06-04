import { FEATURES } from "@/lib/site";
import { SectionHeading } from "./section-heading";

export function Features() {
  return (
    <section id="features" className="border-t border-casing-light/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionHeading
          kicker="Features"
          title="Everything the inbox needs, nothing it doesn't."
          intro="A focused notification app — not another dashboard to babysit."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="panel p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden>
                  {f.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-lcd">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-lcd-dim">{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
