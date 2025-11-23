"use client";

export default function FilmGrain() {
  return (
    <div
      className="
        pointer-events-none 
        absolute inset-0 z-20 
        opacity-[0.06] 
        mix-blend-soft-light
        bg-[url('/grain.png')]
        animate-grainMove
      "
    />
  );
}
