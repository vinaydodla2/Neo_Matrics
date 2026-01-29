"use client";

import { MessageCircle } from "lucide-react";
import { sendGTMEvent } from "@/lib/gtm";

export default function WhatsAppFloating() {
  const handleClick = () => {
    sendGTMEvent("whatsapp_click", {
      category: "engagement",
      action: "WhatsApp Floating Button Clicked",
      label: "Floating WhatsApp Button",
    });
  };

  return (
    <a
      href="https://wa.me/919632244416"  // add your number here
      target="_blank" rel="noopener noreferrer"
      onClick={handleClick}    // ← GTM event firing here
      className="fixed bottom-6 right-6 z-20 bg-[#25D366] w-12 h-12 rounded-full flex
        items-center justify-center shadow-[0_0_30px_-5px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform">
      <MessageCircle className="w-5 h-5 text-white" />
    </a>
  );
}
