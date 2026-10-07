"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import {
  certificateCategories,
  certificates,
  type Certificate,
  type CertificateCategory,
} from "@/lib/certificates";

type Filter = "All" | CertificateCategory;

// Only offer filters that actually contain certificates.
const filters: Filter[] = [
  "All",
  ...certificateCategories.filter((cat) => certificates.some((c) => c.category === cat)),
];

export default function Certificates() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Certificate | null>(null);

  const visible = filter === "All" ? certificates : certificates.filter((c) => c.category === filter);

  return (
    <section id="certificates" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Certificates"
          title="Learning, internships and project awards"
          description="Professional learning, internships, and project achievements."
        />

        <div data-reveal>
          <div role="group" aria-label="Filter certificates by category" className="mb-6 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  filter === f
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-line text-muted hover:border-line-strong hover:text-fg"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <li key={c.id} className="flex">
                <CertificateCard certificate={c} onView={setSelected} />
              </li>
            ))}
          </ul>
          <p className="sr-only" role="status" aria-live="polite">
            Showing {visible.length} certificate{visible.length === 1 ? "" : "s"}
          </p>
        </div>
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
