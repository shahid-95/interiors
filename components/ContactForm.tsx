"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  Send,
  MapPin,
  User,
  Phone,
  Sparkles,
  ArrowRight,
  Home,
  Building2,
} from "lucide-react";

const serviceOptions = [
  "POP False Ceiling",
  "Gypsum False Ceiling",
  "PVC False Ceiling",
  "Grid False Ceiling",
  "Fluted False Ceiling",
  "VOX Ceiling – Outside Passage",
  "Gypsum Partition",
  "Fluted Wall Panel",
  "POP Moulding & Cornice",
  "POP Flower Design",
  "Other",
];

type FormState = {
  name: string;
  phone: string;
  location: string;
  projectType: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  location: "",
  projectType: "Residential",
  service: serviceOptions[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const validate = (values: FormState): Errors => {
    const next: Errors = {};

    if (!values.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!values.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s-]{10,15}$/.test(values.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }

    if (!values.location.trim()) {
      next.location = "Please enter your location.";
    }

    if (!values.message.trim()) {
      next.message = "Please describe your requirement.";
    }

    return next;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const message = `Hi SK POP WORKS,

I would like to get a free quote for my project.

Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Project Type: ${form.projectType}
Required Service: ${form.service}

Requirement:
${form.message}

Please share the quotation and further details. Thank you.`;

    const whatsappUrl = `https://wa.me/918052050846?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const inputClass = (error?: string) => `
    mt-2 w-full rounded-xl
    border ${
      error
        ? "border-red-400 bg-red-50/40"
        : "border-ink/[0.09] bg-[#f8f5ef]"
    }
    px-3.5 py-3.5
    text-[12px] text-ink
    outline-none
    transition-all duration-300
    placeholder:text-ink/25
    focus:border-gold/60
    focus:bg-white
    focus:ring-4
    focus:ring-gold/[0.07]
  `;

  return (
    <motion.form
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      onSubmit={handleSubmit}
      noValidate
      className="
        relative overflow-hidden
        rounded-[26px]
        border border-ink/[0.08]
        bg-white/85
        p-5
        shadow-[0_20px_70px_rgba(25,24,20,0.08)]
        backdrop-blur-xl
        sm:p-7
        lg:p-8
      "
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/[0.09] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-28 h-72 w-72 rounded-full bg-[#d8c6a0]/[0.10] blur-[100px]" />

      {/* Top Gold Line */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative">
        {/* HEADER */}
        <div className="mb-7">
          <div className="flex items-center gap-2.5">
            <span className="h-px w-8 bg-gold" />

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a67c1e]">
              Get Your Quote
            </p>

            <Sparkles
              size={11}
              strokeWidth={1.8}
              className="text-gold"
            />
          </div>

          <h2 className="mt-3 font-display text-[2rem] font-medium leading-[0.98] tracking-[-0.045em] text-ink sm:text-4xl">
            Let&apos;s build something
            <br />
            <span className="bg-gradient-to-r from-[#98701a] via-[#d4af37] to-[#b88b20] bg-clip-text text-transparent">
              beautiful together.
            </span>
          </h2>

          <p className="mt-3 max-w-lg text-[11px] leading-5 text-ink/45 sm:text-xs sm:leading-6">
            Tell us a little about your project. We&apos;ll review your
            requirement and connect with you on WhatsApp with the next steps.
          </p>
        </div>

        {/* FORM */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* NAME */}
          <div>
            <label
              htmlFor="name"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/70"
            >
              <User size={12} className="text-gold" />
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              aria-invalid={!!errors.name}
              className={inputClass(errors.name)}
              placeholder="Enter your full name"
            />

            {errors.name && (
              <p className="mt-1 text-[10px] text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          {/* PHONE */}
          <div>
            <label
              htmlFor="phone"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/70"
            >
              <Phone size={12} className="text-gold" />
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              aria-invalid={!!errors.phone}
              className={inputClass(errors.phone)}
              placeholder="10-digit mobile number"
            />

            {errors.phone && (
              <p className="mt-1 text-[10px] text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          {/* LOCATION */}
          <div>
            <label
              htmlFor="location"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/70"
            >
              <MapPin size={12} className="text-gold" />
              Project Location
            </label>

            <input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
              aria-invalid={!!errors.location}
              className={inputClass(errors.location)}
              placeholder="Area / locality"
            />

            {errors.location && (
              <p className="mt-1 text-[10px] text-red-600">
                {errors.location}
              </p>
            )}
          </div>

          {/* PROJECT TYPE */}
          <div>
            <label
              htmlFor="projectType"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/70"
            >
              {form.projectType === "Residential" ? (
                <Home size={12} className="text-gold" />
              ) : (
                <Building2 size={12} className="text-gold" />
              )}
              Project Type
            </label>

            <select
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className={inputClass()}
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>

          {/* SERVICE */}
          <div className="sm:col-span-2">
            <label
              htmlFor="service"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/70"
            >
              <Sparkles size={12} className="text-gold" />
              What do you need?
            </label>

            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={inputClass()}
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* MESSAGE */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-ink/70"
            >
              <MessageCircle size={12} className="text-gold" />
              Tell us about your project
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              className={`
                ${inputClass(errors.message)}
                resize-none
                leading-5
              `}
              placeholder="Example: Need gypsum false ceiling for a 2BHK living room..."
            />

            {errors.message && (
              <p className="mt-1 text-[10px] text-red-600">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="
            group relative mt-6
            flex w-full
            min-h-[50px]
            items-center justify-center gap-2.5
            overflow-hidden
            rounded-full
            bg-gradient-to-r
            from-[#c9a227]
            via-[#d4af37]
            to-[#b88b20]
            px-6 py-3.5
            text-[10px]
            font-bold uppercase
            tracking-[0.16em]
            text-[#171613]
            shadow-[0_12px_30px_rgba(212,175,55,0.18)]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_16px_38px_rgba(212,175,55,0.28)]
            active:translate-y-0
          "
        >
          {/* Shine */}
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

          <MessageCircle
            size={17}
            strokeWidth={1.8}
            className="relative"
          />

          <span className="relative">
            Get Free Quote on WhatsApp
          </span>

          <Send
            size={14}
            strokeWidth={1.8}
            className="relative transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        {/* TRUST */}
        <div className="mt-5 flex items-center justify-center gap-2 border-t border-ink/[0.07] pt-4">
          <CheckCircle2
            size={14}
            strokeWidth={1.8}
            className="shrink-0 text-gold"
          />

          <p className="text-center text-[9px] leading-4 text-ink/40 sm:text-[10px]">
            Quick response • Free quotation • No obligation
          </p>
        </div>

        {/* Bottom Mini CTA */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-ink/25">
          <span className="h-px w-7 bg-ink/10" />
          Material • Labour • Installation
          <ArrowRight size={10} className="text-gold/60" />
          <span className="h-px w-7 bg-ink/10" />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-24 bg-gradient-to-r from-gold to-transparent" />
    </motion.form>
  );
}