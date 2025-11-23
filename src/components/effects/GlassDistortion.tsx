"use client";

export default function GlassDistortion() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[4] overflow-hidden">
      
      {/* Layer 1 */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[65%] h-[65%]
          bg-white/3
          backdrop-blur-3xl
          opacity-[0.035]
          rounded-[40px]
          animate-glassFloatSlow
        "
      />

      {/* Layer 2 */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[45%] h-[45%]
          bg-white/5
          backdrop-blur-3xl
          opacity-[0.02]
          rounded-[30px]
          animate-glassFloatFast
        "
      />
    </div>
  );
}
