import { USE_CASES } from "@/lib/site";
import { SectionHeading } from "./section-heading";

const DOT: Record<string, string> = {
  success: "dot-success",
  error: "dot-error",
  warning: "dot-warning",
  info: "dot-info",
};

export function UseCases() {
  return (
    <section id="use-cases" className="border-t border-casing-light/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionHeading
          kicker="Use cases"
          title="A push for every moment you'd otherwise check manually."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u) => (
            <div key={u.title} className="lcd-panel px-4 py-3.5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">{u.title}</span>
                <span className={`dot ${DOT[u.status]}`} aria-hidden />
              </div>
              <p className="mt-1.5 text-xs leading-relaxed opacity-90">
                {u.message}
              </p>
              <div className="mt-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-wider opacity-70">
                <span>#{u.category}</span>
                <span>·</span>
                <span>{u.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
