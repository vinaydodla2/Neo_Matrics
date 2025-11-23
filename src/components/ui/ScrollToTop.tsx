"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-22 right-6 z-20
        w-11 h-11 flex items-center justify-center rounded-full
        bg-white text-black shadow-lg
        transition-all duration-300
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
