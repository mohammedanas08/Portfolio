"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar relative">
      <div className="container nav-container flex items-center justify-between">
        
        {/* Left: Logo + Name */}
        <a href="#" className="logo flex items-center gap-2.5">
          <Image 
            src="/logo.png" 
            alt="Mohammed Anas Logo" 
            width={32} 
            height={32} 
            className="rounded-md object-contain"
          />
          <span>Mohammed Anas</span>
        </a>

        {/* Center/Right: Desktop Navigation (Hidden on Mobile) */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions (Theme Button + Mobile 3-Dots Button) */}
        <div className="flex items-center gap-3">
          {/* Theme Button */}
          <button className="theme-button" aria-label="Toggle theme">
            <span className="theme-dot"></span>
            Dark
          </button>

          {/* Mobile 3-Dots Button (Visible ONLY on Mobile/Tablet) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(150,170,190,0.2)] text-white hover:border-[#35d07f] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              /* Close (X) Icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              /* 3-Dots Vertical Icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (Appears when 3-dots is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-[#080c13]/95 backdrop-blur-xl border-b border-[rgba(150,170,190,0.18)] shadow-2xl px-6 py-5 transition-all animate-in fade-in slide-in-from-top-3">
          <nav className="flex flex-col space-y-3 font-mono text-sm">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-[#8f9aa8] hover:text-[#35d07f] hover:bg-[#111923] transition-all"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#35d07f] opacity-60">0{index + 1}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
