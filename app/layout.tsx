import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Anas | Python & Full Stack Developer",
  description:
    "Portfolio of Mohammed Anas, a Computer Science Engineering graduate focused on Python, full-stack development, data analytics and AI/ML.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f14" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
  ],
};

// Runs before first paint: restores the saved theme and enables scroll-reveal styles.
const initScript = `try{var d=document.documentElement;d.classList.add('js');if(localStorage.getItem('theme')==='light')d.classList.add('light')}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
