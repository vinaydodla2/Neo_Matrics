export default function ServiceBlock({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12">
      <h3 className="text-white text-2xl mb-3">{title}</h3>
      <p className="text-white/60 max-w-3xl leading-relaxed">
        {description}
      </p>
    </div>
  );
}
