"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

/* Inline SVG icons for brands */
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);

    // 👉 Replace YOUR_ACCESS_KEY_HERE with the key from web3forms.com
    formData.append("access_key", "bca1ed97-a244-4f6c-8767-aa27af48ce8c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "its.mohammed.anas.08@gmail.com",
      href: "mailto:its.mohammed.anas.08@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7899151788",
      href: "tel:+917899151788"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bhatkal, Karnataka, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammadanas04/",
      color: "hover:text-blue-500"
    },
    {
      icon: <GithubIcon />,
      label: "GitHub",
      href: "https://github.com/mohammedanas08",
      color: "hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#080c13]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow text-[#35d07f] font-mono text-sm tracking-widest uppercase mb-2">04 — Get in Touch</p>
          <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I&apos;m currently available for Software Developer, Backend Developer, and Data Analyst roles.
            Let&apos;s build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center p-4 bg-[#111923] border border-[rgba(150,170,190,0.18)] rounded-xl hover:border-[#35d07f]/50 transition-all duration-300 group shadow-md"
              >
                <div className="w-12 h-12 bg-gray-800/60 rounded-lg flex items-center justify-center text-[#35d07f] group-hover:bg-[#35d07f]/10 transition-colors">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-white font-medium group-hover:text-[#35d07f] transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-[#111923] border border-[rgba(150,170,190,0.18)] rounded-xl text-gray-400 hover:border-[#35d07f]/50 hover:text-white transition-all duration-300 shadow-md ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Working Contact Form */}
          <div className="bg-[#111923] border border-[rgba(150,170,190,0.18)] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#080c13] border border-[rgba(150,170,190,0.2)] rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35d07f] transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#080c13] border border-[rgba(150,170,190,0.2)] rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35d07f] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[#080c13] border border-[rgba(150,170,190,0.2)] rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-[#35d07f] transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              {/* Success Notification */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {/* Error Notification */}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>Oops! Something went wrong. Please try again or email directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3.5 bg-[#35d07f] hover:bg-[#2eb86f] disabled:opacity-50 text-[#07120d] font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(53,208,127,0.3)] hover:shadow-[0_0_20px_rgba(53,208,127,0.5)] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
