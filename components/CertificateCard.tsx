import Image from "next/image";
import { ExternalLink, Eye, FileText } from "lucide-react";
import type { Certificate } from "@/lib/certificates";

type Props = { certificate: Certificate; onView: (c: Certificate) => void };

export default function CertificateCard({ certificate: c, onView }: Props) {
  return (
    <article className="card group flex w-full flex-col overflow-hidden transition-colors hover:border-line-strong">
      <button
        type="button"
        onClick={() => onView(c)}
        aria-label={`View ${c.title} certificate`}
        className="relative block aspect-[4/3] w-full overflow-hidden border-b border-line bg-surface-2 p-3"
      >
        <Image
          src={c.image.src}
          alt={`${c.title} certificate preview`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
          className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="chip">{c.type}</span>
          <time className="font-mono text-xs text-muted">{c.date}</time>
        </div>

        <h3 className="mt-3 text-base font-semibold leading-snug">{c.title}</h3>
        <p className="mt-1 text-sm text-accent">{c.issuer}</p>

        {c.details && (
          <dl className="mt-3 space-y-1 text-sm">
            {c.details.map((d) => (
              <div key={d.label} className="flex gap-2">
                <dt className="shrink-0 text-muted">{d.label}:</dt>
                <dd className="min-w-0 break-words">{d.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <button type="button" onClick={() => onView(c)} className="btn !min-h-10">
            <Eye className="h-4 w-4" aria-hidden="true" /> View Certificate
          </button>
          {c.pdf && (
            <a
              href={c.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !min-h-10"
              aria-label={`Open ${c.title} PDF (opens in new tab)`}
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> PDF
            </a>
          )}
          {c.verifyUrl && (
            <a
              href={c.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !min-h-10"
              aria-label={`Verify ${c.title} (opens in new tab)`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Verify
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
