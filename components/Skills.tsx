// components/Skills.tsx
import React from 'react';

const skillsData = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript (ES6+)", "SQL", "Java", "C"]
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Express.js", "Flask", "RESTful APIs", "JWT Auth", "MVC"]
  },
  {
    category: "Data Analytics & AI",
    items: ["TensorFlow", "Keras", "OpenCV", "MediaPipe", "Power BI", "Pandas", "NumPy", "Generative AI"]
  },
  {
    category: "Databases",
    items: ["MySQL", "Database Design", "Query Optimization"]
  },
  {
    category: "Tools & Version Control",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section section-shell py-24">
      <div className="container">
        {/* Section Heading matching About & Hero style */}
        <div className="section-heading mb-14 text-center md:text-left">
          <p className="eyebrow">02 — SKILLS & TECHNOLOGIES</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Technical expertise &amp;
            <span className="bg-gradient-to-r from-[#35b8d8] to-[#35d07f] bg-clip-text text-transparent">
              {" "}tools I work with.
            </span>
          </h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-[#111923]/70 backdrop-blur-sm border border-[rgba(150,170,190,0.18)] hover:border-[rgba(53,208,127,0.45)] hover:-translate-y-1 rounded-[18px] p-7 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-lg font-semibold text-[#35d07f] mb-5 pb-3 border-b border-[rgba(150,170,190,0.15)] flex items-center justify-between">
                  <span>{category.category}</span>
                  <span className="text-xs font-mono text-[#8f9aa8] opacity-60">
                    0{index + 1}
                  </span>
                </h3>

                {/* Skill List */}
                <ul className="space-y-3">
                  {category.items.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-[#f3f6f8] text-sm group"
                    >
                      {/* Glowing dot */}
                      <span className="w-2 h-2 rounded-full bg-[#35d07f] shadow-[0_0_8px_#35d07f] mr-3 shrink-0 group-hover:scale-125 transition-transform"></span>
                      <span className="text-[#c8d2dc] group-hover:text-white transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
