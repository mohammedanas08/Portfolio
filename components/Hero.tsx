import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="section scroll-mt-0 pt-10 sm:pt-16 lg:pt-20">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div data-reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Available for immediate joining
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-fg sm:text-xl">{profile.headline}</p>
          <p className="mt-2 font-mono text-sm text-accent">{profile.roles.join("  |  ")}</p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{profile.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Key technologies">
            {profile.keyTech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={profile.resume} download="Mohammed-Anas-Resume.pdf" className="btn">
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className="btn w-11 !px-0"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className="btn w-11 !px-0"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto w-44 sm:w-56 lg:mx-0 lg:w-64" data-reveal>
          <div className="overflow-hidden rounded-2xl border border-line-strong bg-surface p-1.5">
            <Image
              src="/profile.jpeg"
              alt="Portrait of Mohammed Anas"
              width={390}
              height={510}
              priority
              sizes="(min-width: 1024px) 256px, (min-width: 640px) 224px, 176px"
              className="aspect-[4/5] w-full rounded-xl object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
