import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GithubIcon } from "./icons";
import { projects, type Project } from "@/lib/content";

function ProjectCard({ project }: { project: Project }) {
  const { image, featured } = project;
  return (
    <article
      className={`card group flex overflow-hidden transition-colors hover:border-line-strong ${
        featured ? "flex-col md:col-span-2 md:flex-row" : "flex-col"
      }`}
      data-reveal
    >
      {image && (
        <div className="relative h-56 shrink-0 overflow-hidden border-b border-line bg-surface-2 md:h-auto md:w-72 md:border-b-0 md:border-r">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 288px, 100vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn !min-h-10"
            aria-label={`${project.title} source code on GitHub (opens in new tab)`}
          >
            <GithubIcon className="h-4 w-4" /> Code
          </a>
          {project.demo === null && (
            <span
              aria-disabled="true"
              className="btn !min-h-10 cursor-not-allowed opacity-60 hover:!border-line-strong hover:!bg-transparent"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo (coming soon)
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn !min-h-10"
              aria-label={`${project.title} live demo (opens in new tab)`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="AI, computer vision and analytics projects built end to end."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
