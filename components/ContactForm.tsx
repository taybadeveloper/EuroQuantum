"use client";

import { useState, type FormEvent } from "react";
import { IconCheck } from "./icons";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-green-500/60 focus:bg-stone-50 focus:ring-2 focus:ring-green-500/20";

const services = [
  "Forex Trading",
  "CFD Trading",
  "Crypto Trading",
  "Managed Portfolios",
  "Market Analysis & Signals",
  "Risk Management Solutions",
  "General Enquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setStatus("sending");

    // Demo only — replace with your API call, email service or CRM integration.
    setTimeout(() => setStatus("sent"), 1200);
  };

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/[0.05] p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-green-500/20 text-green-600 ring-1 ring-green-500/30">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
          Message Sent!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
          Thank you for reaching out to EuroQuantum. Our team will get back to
          you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm({ name: "", email: "", phone: "", service: services[0], message: "" });
          }}
          className="mt-8 text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Full Name <span className="text-green-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Smith"
            value={form.name}
            onChange={(e) => update("name")(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email Address <span className="text-green-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => update("email")(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+61 4xx xxx xxx"
            value={form.phone}
            onChange={(e) => update("phone")(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
            Service of Interest
          </label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service")(e.target.value)}
            className={`${inputClasses} appearance-none bg-white`}
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message <span className="text-green-600">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can help..."
          value={form.message}
          onChange={(e) => update("message")(e.target.value)}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {error && (
        <p className="mt-4 rounded-lg border border-rose-400/20 bg-rose-400/[0.07] px-4 py-2.5 text-sm text-rose-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
