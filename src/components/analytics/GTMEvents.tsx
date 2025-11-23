"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@/lib/gtm";

export default function GTMEvents() {
  useEffect(() => {
    // PAGE VIEW
    sendGTMEvent("page_view", { path: window.location.pathname });

    // LINK CLICK EVENTS
    const handleClick = (e: any) => {
      const target = e.target.closest("a, button");

      if (!target) return;

      const label =
        target.innerText || target.getAttribute("href") || "unknown";

      sendGTMEvent("ui_click", { label });
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}
