"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
import { Merriweather_Sans } from "next/font/google";
const Merriweather = Merriweather_Sans({ subsets: ["latin"] });
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={150} priority />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden lg:flex items-center gap-8 text-white font-medium ${Merriweather.className}`}
        >
          <Link href="/a-propos" className="transition hover:text-slate-300">
            À propos
          </Link>

          <Link href="/projets" className="transition hover:text-slate-300">
            Projets
          </Link>

          <Link href="/services" className="transition hover:text-slate-300">
            Services
          </Link>

          <Link href="/contact" className="transition hover:text-slate-300">
            Contactez-nous
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl
 text-[#E6D65A  ] border-[#D4AF37] drop-shadow-[0_0_4px_rgba(247,245,118,0.6)]
  bg-white/60
  shadow-sm transition hover:bg-[#FFFBE6] lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed ${Merriweather.className} inset-0 z-50 lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative mx-6 mt-24 rounded-3xl bg-white p-4 shadow-2xl ring-1 ring-slate-200 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <Link
            href="/accueil"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100"
          >
            Accueil
          </Link>
          <Link
            href="/a-propos"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100"
          >
            À propos
          </Link>

          <Link
            href="/projets"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100"
          >
            Projets
          </Link>

          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100"
          >
            Services
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block rounded-xl px-4 py-3 text-slate-900 font-medium transition hover:bg-slate-100"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
