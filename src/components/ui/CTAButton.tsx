export default function CTAButton({
  children,
  link = "/contact",
}: {
  children: any;
  link?: string;
}) {
  return (
    <a
      href={link}
      className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 
      text-xs font-semibold uppercase tracking-[0.18em] hover:opacity-90 transition"
    >
      {children}
    </a>
  );
}
