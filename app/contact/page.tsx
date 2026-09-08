import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free consultation for your false ceiling, partition or interior finishing project. Call, WhatsApp or email SK POP WORKS — serving customers across Bangalore."
};

export default function ContactPage() {
  return (
    <section className="bg-cream pt-20 pb-24 sm:pt-24">
      <div className="container-px mx-auto max-w-content">
        <div className="max-w-2xl">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-medium text-ink">
            Let&rsquo;s discuss your project
          </h1>
          <p className="mt-4 text-ink/65">
            Tell us about your ceiling or interior work requirement and get a
            free consultation.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr,1.3fr] lg:items-start">
          <div className="space-y-5">
            <a
              href="tel:+918052050846"
              className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-gold/50"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-xs text-ink/50">Call Now</span>
                <span className="font-display text-lg text-ink">8052050846</span>
              </span>
            </a>

            <a
              href="https://wa.me/918052050846"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-gold/50"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <MessageCircle size={18} />
              </span>
              <span>
                <span className="block text-xs text-ink/50">WhatsApp Now</span>
                <span className="font-display text-lg text-ink">8052050846</span>
              </span>
            </a>

            <a
              href="mailto:skinteriorsworks95@gmail.com"
              className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5 transition-colors hover:border-gold/50"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-xs text-ink/50">Email</span>
                <span className="font-display text-base text-ink break-all">
                  skinteriorsworks95@gmail.com
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-ink/10 bg-white/60 p-5">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <MapPin size={18} />
              </span>
              <span>
                <span className="block text-xs text-ink/50">Service Area</span>
                <span className="font-display text-base text-ink">
                  Serving Customers Across Bangalore
                </span>
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
