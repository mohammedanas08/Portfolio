"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  // Active section tracking
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Border/blur only once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {}
  };

  const linkClass = (id: string) =>
    `transition-colors ${active === id ? "text-fg" : "text-muted hover:text-fg"}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-tight sm:gap-2.5 sm:text-base">
          <Image
            src="/logo-sm.png"
            alt=""
            width={48}
            height={32}
            className="h-8 w-12 rounded-md object-contain"
          />
          <span>Mohammed Anas</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm xl:gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-fg"
          >
            <Moon className="icon-moon h-4 w-4" aria-hidden="true" />
            <Sun className="icon-sun h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-fg lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg lg:hidden">
          <ul className="container-x flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`block rounded-lg px-2 py-3 text-base ${linkClass(item.id)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
