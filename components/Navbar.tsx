"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
];

const whatsappUrl =
  "https://wa.me/918052050846?text=Hi%20SK%20POP%20WORKS,%20I%20would%20like%20to%20know%20more%20about%20your%20false%20ceiling%20and%20interior%20services.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-[999] w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#171613]/95 shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-2xl"
          : "border-b border-white/5 bg-[#1c1b18]/90 backdrop-blur-xl"
      }`}
    >
      {/* ================= NAVBAR ================= */}
      <nav className="relative mx-auto flex h-[68px] w-full max-w-[1400px] items-center px-4 sm:h-[72px] sm:px-6 md:px-8 lg:px-10 xl:px-12">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex min-w-0 shrink-0 flex-col leading-none"
        >
          <div className="flex items-center whitespace-nowrap">
            <span className="font-display text-[18px] font-semibold tracking-[-0.04em] text-cream sm:text-[23px] md:text-[25px]">
              SK
            </span>

            <span className="mx-1 h-1 w-1 shrink-0 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] sm:mx-1.5" />

            <span className="font-display text-[18px] font-semibold tracking-[-0.04em] text-gold sm:text-[23px] md:text-[25px]">
              POP
            </span>

            <span className="ml-1 font-display text-[18px] font-semibold tracking-[-0.04em] text-cream sm:ml-1.5 sm:text-[23px] md:text-[25px]">
              WORKS
            </span>
          </div>

          <span className="mt-1 hidden text-[7px] font-medium tracking-[0.18em] text-cream/35 sm:block sm:text-[8px]">
            FALSE CEILING WORKS WITH MATERIALS
          </span>
        </Link>

        {/* ================================================= */}
        {/* ================= CENTER NAV ==================== */}
        {/* ================================================= */}

        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.025] p-1 backdrop-blur-md xl:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative flex items-center rounded-full px-4 py-2.5 text-[13px] font-medium text-cream/65 transition-all duration-300 hover:bg-white/[0.06] hover:text-cream xl:px-5"
                >
                  <span className="relative z-10">
                    {link.label}
                  </span>

                  <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gold transition-all duration-300 group-hover:w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ================================================= */}
        {/* ================= RIGHT ACTIONS ================= */}
        {/* ================================================= */}

        <div className="ml-auto hidden items-center gap-3 lg:flex">

          {/* CALL */}
          <a
            href="tel:+918052050846"
            aria-label="Call SK POP WORKS"
            className="group flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-[13px] font-medium text-cream/70 transition-all duration-300 hover:border-gold/30 hover:bg-gold/5 hover:text-gold"
          >
            <Phone
              size={16}
              className="text-gold transition-transform duration-300 group-hover:rotate-6"
            />

            <span>Call</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-gold px-4 py-2.5 text-[12px] font-semibold text-charcoal shadow-[0_8px_25px_rgba(212,175,55,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-goldlight hover:shadow-[0_12px_30px_rgba(212,175,55,0.2)] xl:px-5 xl:text-[13px]"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />

            <FaWhatsapp
              size={17}
              className="relative shrink-0"
            />

            <span className="relative whitespace-nowrap">
              WhatsApp
            </span>

            <ArrowUpRight
              size={15}
              className="relative shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* ================================================= */}
        {/* ================ MOBILE BUTTON ================== */}
        {/* ================================================= */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`relative z-[1100] ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden sm:h-11 sm:w-11 ${
            menuOpen
              ? "border-gold/40 bg-gold/10 text-gold"
              : "border-white/10 bg-white/5 text-cream hover:border-gold/40 hover:text-gold"
          }`}
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </nav>

      {/* ================================================= */}
      {/* ================= MOBILE MENU =================== */}
      {/* ================================================= */}

      {menuOpen && (
        <div className="fixed inset-0 z-[1000] lg:hidden">

          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* MENU PANEL */}
          <div className="absolute left-3 right-3 top-[76px] max-h-[calc(100vh-88px)] overflow-y-auto rounded-2xl border border-white/10 bg-[#191815] shadow-[0_25px_80px_rgba(0,0,0,0.65)] sm:left-6 sm:right-6 sm:top-[82px] md:left-8 md:right-8">

            {/* MENU HEADER */}
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-5">
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-gold">
                  SK POP WORKS
                </p>

                <p className="mt-1 truncate text-[10px] text-cream/35">
                  Premium False Ceiling WORKS 
                </p>
              </div>

              <span className="ml-3 shrink-0 rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-[8px] uppercase tracking-[0.2em] text-gold">
                MENU
              </span>
            </div>

            {/* NAV LINKS */}
            <div className="p-3 sm:p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex min-h-[58px] w-full items-center justify-between rounded-xl px-4 transition-all duration-200 hover:bg-white/5 active:bg-white/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-medium text-gold/40">
                      0{index + 1}
                    </span>

                    <span className="text-[16px] font-medium text-cream/85 transition-colors group-hover:text-gold">
                      {link.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-cream/20 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </Link>
              ))}
            </div>

            {/* CONTACT */}
            <div className="mx-4 border-t border-white/[0.07] pt-4">

              {/* CALL */}
              <a
                href="tel:+918052050846"
                onClick={closeMenu}
                className="flex min-h-[64px] w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 transition-all duration-200 hover:border-gold/30 hover:bg-gold/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Phone
                    size={18}
                    className="text-gold"
                  />
                </span>

                <div className="min-w-0 flex-1">
                  

                  <span className="mt-1 block text-[15px] font-medium text-cream">
                    Call
                  </span>
                </div>

                <ArrowUpRight
                  size={17}
                  className="shrink-0 text-cream/25"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-3 flex min-h-[58px] w-full items-center justify-center gap-2 rounded-xl bg-gold px-4 text-[14px] font-semibold text-charcoal transition-all duration-200 hover:bg-goldlight active:scale-[0.98]"
              >
                <FaWhatsapp size={20} />

                <span>Chat on WhatsApp</span>

                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* FOOTER */}
            <div className="px-5 py-5 text-center">
              <p className="text-[8px] uppercase tracking-[0.18em] text-cream/25">
                POP • GYPSUM • PVC • GRID • PARTITION
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}