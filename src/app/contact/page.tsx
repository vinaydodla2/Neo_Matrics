"use client";

import MainLayout from "@/components/layout/MainLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendGTMEvent } from "@/lib/gtm";

export default function ContactPage() {
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const showError = (msg: string) => {
    setErrorMsg(msg);
    setLoading(false);

    // GTM ERROR EVENT
    sendGTMEvent("form_validation_error", {
      message: msg,
      form: "contact_form",
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSuccess("");
    setErrorMsg("");
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      mobile: formData.get("phone")?.toString() || "",
      message: formData.get("message")?.toString() || "",
      project: formData.get("project")?.toString() || "",
      budget: formData.get("budget")?.toString() || "",
    };

    // -------------------------------
    // FRONTEND VALIDATION + GTM EVENTS
    // -------------------------------
    if (!data.name) return showError("Name is required.");
    if (!data.email || !/^\S+@\S+\.\S+$/.test(data.email))
      return showError("Enter a valid email.");
    if (!data.mobile || !/^\d{10}$/.test(data.mobile))
      return showError("Enter a valid 10-digit mobile number.");
    if (!data.message) return showError("Message is required.");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      console.log("CLIENT → API Response:", response);

      if (!res.ok) {
        setErrorMsg(response.error || "Failed to send message.");

        // GTM API ERROR EVENT
        sendGTMEvent("form_submit_failed", {
          error: response.error,
          form: "contact_form",
        });

        setLoading(false);
        return;
      }

      // GTM SUCCESS EVENT
      sendGTMEvent("form_submit", {
        form: "contact_form",
        email_sent: response.email_sent,
        whatsapp_sent: response.whatsapp_sent,
        project: data.project,
        budget: data.budget,
      });

      setSuccess("Your message has been sent successfully!");
      e.target.reset();
    } catch (err) {
      setErrorMsg("Something went wrong. Try again.");

      sendGTMEvent("form_network_error", {
        form: "contact_form",
        error: err?.toString(),
      });
    }

    setLoading(false);
  };

  return (
    <MainLayout>
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 md:px-8 pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            max-w-3xl w-full rounded-3xl
            bg-white/5 backdrop-blur-2xl
            border border-white/10 p-8 md:p-10
            shadow-[0_0_60px_-25px_rgba(255,255,255,0.4)]
          "
        >
          <p className="text-white/50 uppercase tracking-[0.25em] text-xs mb-3">
            Contact
          </p>

          <h1 className="text-white font-light text-3xl md:text-4xl mb-4">
            Let’s build something bold together.
          </h1>

          <p className="text-white/60 text-sm md:text-base mb-8 max-w-xl">
            Tell us a bit about your brand, your goals, and the kind of digital
            experience you want to create.
          </p>

          {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
          {success && <p className="text-green-400 text-sm mb-4">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-xs text-white/50 mb-2 uppercase tracking-[0.18em]">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-white/50 mb-2 uppercase tracking-[0.18em]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs text-white/50 mb-2 uppercase tracking-[0.18em]">
                Mobile Number
              </label>
              <div className="flex gap-2">
                <div className="bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white rounded-full min-w-[80px]">
                  +91
                </div>
                <input
                  type="text"
                  name="phone"
                  maxLength={10}
                  className="flex-1 rounded-full bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white outline-none"
                  placeholder="9876543210"
                />
              </div>
            </div>

            {/* Project Type + Budget */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-2 uppercase tracking-[0.18em]">
                  Project Type
                </label>
                <select
                  name="project"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white outline-none appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select one</option>
                  <option>Brand Identity</option>
                  <option>Website / Landing Page</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Design</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/50 mb-2 uppercase tracking-[0.18em]">
                  Budget (Approx.)
                </label>
                <select
                  name="budget"
                  className="w-full rounded-full bg-black/40 border border-white/10 px-4 py-2.5 text-sm text-white outline-none appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select range</option>
                  <option>₹10k – ₹25k</option>
                  <option>₹25k – ₹50k</option>
                  <option>₹50k – ₹1L</option>
                  <option>₹1L+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-white/50 mb-2 uppercase tracking-[0.18em]">
                Project Details
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-2xl bg-black/40 border border-white/10 px-4 py-3 text-sm text-white outline-none resize-none"
                placeholder="Share a short brief about your project..."
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`
                  inline-flex items-center justify-center
                  rounded-full bg-white text-black
                  px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em]
                  transition
                  ${loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"}
                `}
              >
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </MainLayout>
  );
}
