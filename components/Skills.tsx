import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-line">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="Grouped by the kind of work they support."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-5" data-reveal>
              <h3 className="text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
