"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/content";

const contactInfo = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: "tel:+917899151788" },
  { icon: MapPin, label: "Location", value: profile.location },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(form);
    formData.append("access_key", "bca1ed97-a244-4f6c-8767-aa27af48ce8c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="I'm open to Software Developer, Backend Developer, Full Stack and Data Analyst roles. Send a message or reach out directly."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="min-w-0 space-y-3" data-reveal>
            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-accent">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block text-sm font-medium [overflow-wrap:anywhere]">{value}</span>
                  </span>
                </>
              );
              const cls = "card flex items-center gap-4 p-4";
              return href ? (
                <a key={label} href={href} className={`${cls} transition-colors hover:border-accent`}>
                  {body}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {body}
                </div>
              );
            })}

            <div className="flex gap-3 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">
                <GithubIcon className="h-4 w-4" />
                GitHub
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card min-w-0 space-y-4 p-5 sm:p-6" data-reveal>
            {/* Honeypot field for Web3Forms spam protection */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input id="name" name="name" type="text" required autoComplete="name" className="input" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="input"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="input resize-none"
                placeholder="Tell me about the role or project..."
              />
            </div>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 p-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm">
                  <AlertCircle className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full disabled:opacity-60">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" /> Send message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
