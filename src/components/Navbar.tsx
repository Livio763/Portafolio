"use client";

import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Trayectoria", href: "#trayectoria" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/60">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        
        {/* Brand: Texto limpio, sin logo BH */}
        <a 
          href="#inicio" 
          className="text-sm font-semibold tracking-wide text-white transition-colors hover:text-sky-400"
        >
          {PORTFOLIO_DATA.personal.shortName}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-5 text-xs font-medium text-slate-400">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a 
                  className="transition-colors hover:text-white" 
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center pl-4 border-l border-slate-800">
            <a
              href={PORTFOLIO_DATA.personal.cvPdfUrl}
              download="Bruno_Hidalgo_CV.pdf"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 transition-all hover:border-slate-500 hover:text-white"
            >
              <Download className="h-3 w-3" />
              <span>CV</span>
            </a>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={PORTFOLIO_DATA.personal.cvPdfUrl}
            download="Bruno_Hidalgo_CV.pdf"
            className="inline-flex items-center gap-1 rounded border border-slate-700 px-2 py-1 text-xs font-medium text-slate-200"
          >
            <Download className="h-3 w-3" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-slate-800 text-slate-300"
            aria-label="Alternar menú"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-slate-950 px-4 py-4 sm:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 text-xs font-medium text-slate-300 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
