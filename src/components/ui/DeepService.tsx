export default function DeepService({
  heading,
  details,
}: {
  heading: string;
  details: string[];
}) {
  return (
    <div className="mb-10">
      <h3 className="text-white text-xl mb-3">{heading}</h3>
      <ul className="space-y-2 text-white/60">
        {details.map((d, i) => (
          <li key={i}>• {d}</li>
        ))}
      </ul>
    </div>
  );
}
