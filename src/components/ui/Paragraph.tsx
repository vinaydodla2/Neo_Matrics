export default function Paragraph({ children }: any) {
  return (
    <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
      {children}
    </p>
  );
}
