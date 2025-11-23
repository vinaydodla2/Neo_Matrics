"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton({ url = "/work" }: { url?: string }) {
  return (
    <Link
      href={url}
      className="
        inline-flex items-center gap-2 text-white/60 hover:text-white 
        transition text-sm mb-10
      "
    >
      <ArrowLeft className="w-4 h-4" />
      Back to Work
    </Link>
  );
}
