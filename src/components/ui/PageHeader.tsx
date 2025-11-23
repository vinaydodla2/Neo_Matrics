export default function PageHeader({
  sub,
  title,
  description,
}: {
  sub: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-24">
      <p className="text-white/40 uppercase tracking-[0.28em] text-xs mb-4">
        {sub}
      </p>

      <h1 className="text-white font-light text-4xl md:text-6xl leading-tight">
        {title}
      </h1>

      {description && (
        <p className="text-white/60 text-base md:text-lg mt-6 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
