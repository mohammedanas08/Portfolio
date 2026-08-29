// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080c13] border-t border-[rgba(150,170,190,0.12)] font-mono text-xs uppercase tracking-widest text-[#8f9aa8]">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        
        {/* TOP ROW: Brand on Left, Columns on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* Left Column (Brand & Tagline) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* Logo + Name */}
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
              
            </div>

            <p className="text-[#8f9aa8] text-[11px] leading-relaxed max-w-sm">
              ENGINEERING PRACTICAL SOFTWARE, BACKEND SYSTEMS, AND AI-DRIVEN SOLUTIONS.
            </p>
          </div>

          {/* Right Columns (3-Column Navigation Grid) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Index */}
            <div>
              <p className="text-white font-semibold mb-4 text-[11px]">INDEX</p>
              <ul className="space-y-2.5 text-[11px]">
                <li><a href="#about" className="hover:text-[#35d07f] transition-colors">ABOUT</a></li>
                <li><a href="#skills" className="hover:text-[#35d07f] transition-colors">SKILLS</a></li>
                <li><a href="#projects" className="hover:text-[#35d07f] transition-colors">PROJECTS</a></li>
                <li><a href="#resume" className="hover:text-[#35d07f] transition-colors">RESUME</a></li>
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div>
              <p className="text-white font-semibold mb-4 text-[11px]">CONNECT</p>
              <ul className="space-y-2.5 text-[11px]">
                <li>
                  <a 
                    href="https://github.com/mohammedanas08" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#35d07f] transition-colors"
                  >
                    GITHUB ↗
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/mohammadanas04/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#35d07f] transition-colors"
                  >
                    LINKEDIN ↗
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:its.mohammed.anas.08@gmail.com" 
                    className="hover:text-[#35d07f] transition-colors"
                  >
                    EMAIL ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: System / Info */}
            <div>
              <p className="text-white font-semibold mb-4 text-[11px]">SYSTEM</p>
              <ul className="space-y-2.5 text-[11px]">
                <li className="text-[#35d07f] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35d07f] animate-pulse"></span>
                  AVAILABLE
                </li>
                <li>BHATKAL, IN</li>
                <li>NEXT.JS • REACT</li>
                <li>PORTFOLIO V2.0</li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM ROW: Copyright & Motto */}
        <div className="pt-8 border-t border-[rgba(150,170,190,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} MOHAMMED ANAS • ALL RIGHTS RESERVED
          </div>
        </div>

      </div>
    </footer>
  );
}
