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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4 border-b pb-2">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
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