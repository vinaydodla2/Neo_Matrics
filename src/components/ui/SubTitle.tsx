export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-white text-3xl font-light mb-8">
      {children}
    </h2>
  );
}
