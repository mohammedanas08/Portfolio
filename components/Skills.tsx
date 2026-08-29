// components/Skills.tsx
import React from 'react';

// Define your skills data here
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
    <section id="skills" className="py-20 bg-[#080c13]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#f3f6f8] mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-[#111923] border border-[rgba(150,170,190,0.18)] hover:border-[#35d07f]/50 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#35d07f] mb-4 border-b pb-2">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-[#f3f6f8]">
                    <span className="w-2 h-2 bg-[#35d07f] rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;