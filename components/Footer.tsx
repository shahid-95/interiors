import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-px mx-auto max-w-content py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          {/* Left */}
          <p className="text-[10px] text-cream/30">
            © 2026 SK POP WORKS. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-cream/50">
              <a
              href="tel:+919580275258"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone size={13} />
              9580275258
            </a>
           
            <a
              href="https://wa.me/918052050846"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <MessageCircle size={13} />
              WhatsApp
            </a>

            <a
              href="mailto:skinteriorsworks95@gmail.com"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail size={13} />
              Email
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}