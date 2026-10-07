import SectionHeading from "./SectionHeading";
import { languages, profile } from "@/lib/content";

const focus = [
  "Python development and automation",
  "Full-stack web applications and REST APIs",
  "Data analytics and Power BI dashboards",
  "AI/ML and computer vision applications",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="Practical software, backed by data and AI" />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-4 text-base leading-relaxed text-muted" data-reveal>
            <p>
              I&apos;m a Computer Science Engineering graduate (2026) with experience across
              full-stack development, backend APIs, data analytics and AI-driven applications.
            </p>
            <p>
              I enjoy turning real problems into working software, from Python automation and REST
              API integrations to computer-vision projects and business intelligence dashboards.
            </p>
            <p>
              During a 4-month remote internship I worked on Python automation, data processing and
              analytics workflows that reduced manual reporting effort by 30–40%.
            </p>
          </div>

          <div className="card p-6" data-reveal>
            <h3 className="text-sm font-semibold">Current focus</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {focus.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <dl className="mt-6 space-y-2 border-t border-line pt-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Location</dt>
                <dd className="text-right">{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Languages</dt>
                <dd className="text-right">{languages.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
