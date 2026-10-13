"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import PhoneInput, { countries, type Country } from "./PhoneInput";
import { IconCheck } from "./icons";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none transition focus:border-green-500/60 focus:bg-stone-50 focus:ring-2 focus:ring-green-500/20";

export default function SignupForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState<Country>(countries[0]);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const digits = form.phone.replace(/[\s-]/g, "");
    if (digits.length !== country.digits) {
      setError(`Please enter a ${country.digits}-digit ${country.name} phone number.`);
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms & Conditions to continue.");
      return;
    }

    setError(null);
    setStatus("sending");

    // The endpoint reads a JSON body. Email/phone keys are confirmed working;
    // name keys are sent in all common variants so the script picks up whatever
    // it expects (remove the extras once verified).
    const payload = {
      email: form.email.trim(),
      phone: `${country.code}${digits}`,
      country: country.name,
      country_code: country.code,
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      firstname: form.firstName.trim(),
      lastname: form.lastName.trim(),
      fname: form.firstName.trim(),
      lname: form.lastName.trim(),
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      name: `${form.firstName.trim()} ${form.lastName.trim()}`,
    };

    try {
      const res = await fetch("https://meridianc-au.com/homeMailAction.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => null);
      if (res.ok && result?.status === "success") {
        setStatus("sent");
      } else {
        setError(
          result?.message || "Something went wrong. Please try again later."
        );
        setStatus("idle");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
      setStatus("idle");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-400/20 bg-green-400/[0.05] p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-green-500/20 text-green-600 ring-1 ring-green-500/30">
          <IconCheck className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
          Account Request Received!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
          Thanks{form.firstName ? `, ${form.firstName}` : ""}! Our team will
          contact you shortly to complete your free account setup.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setForm({ firstName: "", lastName: "", email: "", phone: "" });
          }}
          className="mt-8 text-sm font-semibold text-green-600 transition-colors hover:text-green-700"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8"
      noValidate
    >
      <h2 className="text-center font-display text-xl font-semibold text-slate-900">
        Create Your Free Account
      </h2>
      <p className="mt-1.5 text-center text-sm text-slate-600">
        No deposit needed to sign up.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700">
            First Name <span className="text-green-600">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            placeholder="John"
            value={form.firstName}
            onChange={(e) => update("firstName")(e.target.value)}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700">
            Last Name <span className="text-green-600">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            placeholder="Smith"
            value={form.lastName}
            onChange={(e) => update("lastName")(e.target.value)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Email <span className="text-green-600">*</span>
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

      <div className="mt-5">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
          Phone <span className="text-green-600">*</span>
        </label>
        <PhoneInput
          id="phone"
          value={form.phone}
          country={country}
          onCountryChange={setCountry}
          onChange={(digits) => update("phone")(digits)}
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
        className="mt-6 w-full rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Creating Account..." : "Get Started Free"}
      </button>

      <div className="mt-5 flex items-start justify-center gap-2.5">
        <input
          id="terms"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-green-600"
        />
        <label
          htmlFor="terms"
          className="max-w-sm cursor-pointer text-xs leading-relaxed text-slate-500"
        >
          I agree to the{" "}
          <Link
            href="/terms-and-conditions"
            className="text-green-600 transition-colors hover:text-green-700"
          >
            Terms &amp; Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy-policy"
            className="text-green-600 transition-colors hover:text-green-700"
          >
            Privacy Policy
          </Link>
          . Trading involves risk and may not suit every investor.
        </label>
      </div>
    </form>
  );
}
