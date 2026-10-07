"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink, FileText, X } from "lucide-react";
import type { Certificate } from "@/lib/certificates";

type Props = { certificate: Certificate | null; onClose: () => void };

// Native <dialog>: gives focus trapping, Esc-to-close and focus restoration for free.
export default function CertificateModal({ certificate, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  // Open/close the native dialog and lock page scroll while it is open.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (certificate && !dialog.open) dialog.showModal();
    else if (!certificate && dialog.open) dialog.close();
    document.documentElement.style.overflow = certificate ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [certificate]);

  // Esc and the native close path fire "close"; keep React state in sync.
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="certificate-modal-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-auto max-h-[94dvh] w-[min(96vw,64rem)] overflow-hidden rounded-xl border border-line bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/70"
    >
      {certificate && (
        <div className="flex max-h-[94dvh] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-line p-4 sm:px-6">
            <div className="min-w-0">
              <h3 id="certificate-modal-title" className="text-base font-semibold sm:text-lg">
                {certificate.title}
              </h3>
              <p className="mt-0.5 text-sm text-muted">
                {certificate.issuer} · {certificate.date}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-fg"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-surface-2 p-3 sm:p-5">
            <Image
              src={certificate.image.src}
              alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
              width={certificate.image.width}
              height={certificate.image.height}
              sizes="(min-width: 1024px) 960px, 96vw"
              loading="eager"
              style={{ aspectRatio: `${certificate.image.width} / ${certificate.image.height}` }}
              className="max-h-[64dvh] w-full rounded-md object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-line p-4 sm:px-6">
            {certificate.pdf && (
              <a href={certificate.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary !min-h-10">
                <FileText className="h-4 w-4" aria-hidden="true" /> Open PDF
                <span className="sr-only">(opens in new tab)</span>
              </a>
            )}
            {certificate.verifyUrl && (
              <a href={certificate.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn !min-h-10">
                <ExternalLink className="h-4 w-4" aria-hidden="true" /> Verify
                <span className="sr-only">(opens in new tab)</span>
              </a>
            )}
            <button type="button" onClick={onClose} className="btn !min-h-10">
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
