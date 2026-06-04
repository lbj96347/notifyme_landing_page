export function SectionHeading({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="kicker">
        <span className="indicator" aria-hidden />
        {kicker}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-lcd sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-lg text-lcd-dim">{intro}</p> : null}
    </div>
  );
}
