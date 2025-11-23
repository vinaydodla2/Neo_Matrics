export default function TimelineItem({
  tag,
  title,
  description,
  points,
}: {
  tag: string;
  title: string;
  description: string;
  points: string[];
}) {
  return (
    <div className="relative ml-2 pl-6">
      <div className="w-2 h-2 rounded-full bg-white absolute -left-[13px] top-1" />

      <p className="text-white/40 text-xs uppercase tracking-[0.22em] mb-1">
        {tag}
      </p>

      <h2 className="text-white text-2xl mb-2">{title}</h2>

      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
        {description}
      </p>

      <ul className="space-y-1 text-white/50 text-sm leading-relaxed">
        {points.map((p) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}
