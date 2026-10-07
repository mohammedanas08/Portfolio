import SectionHeading from "./SectionHeading";
import { education } from "@/lib/content";

export default function Education() {
  return (
    <section id="education" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <article className="card p-5 sm:p-6" data-reveal>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="font-mono text-xs text-muted">{education.period}</p>
          </div>
          <p className="mt-1 text-sm text-accent">
            {education.school} <span className="text-muted">· {education.place}</span>
          </p>
          <p className="mt-4 text-sm text-muted">
            CGPA: <span className="text-fg">{education.cgpa}</span>
          </p>
          <h4 className="mt-5 text-sm font-semibold">Relevant coursework</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
