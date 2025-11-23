"use client";

export default function VerticalGlow() {
  return (
    <div
      className="
        pointer-events-none
        absolute inset-0 
        z-[5]
        flex items-center justify-center
      "
    >
      <div
        className="
          w-[35%]
          h-full
          bg-gradient-to-b
          from-transparent
          via-white/8
          to-transparent
          blur-3xl
        "
      />
    </div>
  );
}
