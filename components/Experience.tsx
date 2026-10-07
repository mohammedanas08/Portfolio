import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Internships and hands-on work"
          description="Remote roles focused on data, Python automation and Generative AI."
        />

        <ol className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
          {experience.map((job) => (
            <li key={job.role} className="relative" data-reveal>
              <span
                className="absolute -left-[1.9rem] top-6 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg sm:-left-[2.4rem]"
                aria-hidden="true"
              />
              <article className="card p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-accent">
                  {job.company} <span className="text-muted">· {job.place}</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
