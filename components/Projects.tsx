import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react'; // Ensure you have lucide-react installed

// If you don't have lucide-react yet, run: npm install lucide-react
// Or remove the icons if you prefer simple text links.

const projects = [
  {
    title: "FlexiFit – AI Personalized Fitness Coach",
    description: "An AI-powered fitness platform using computer vision for real-time pose estimation. Features include posture correction, repetition counting, and personalized workout/diet plans via Gemini AI.",
    tags: ["React.js", "Next.js", "TensorFlow.js", "MediaPipe", "OpenCV", "Gemini AI"],
    github: "https://github.com/mohammedanas08/Flexi-fit-Ai-Fitness-Trainer", // Replace with your actual link
    demo: "#", // Replace with demo link if available
    image: "/projects/flexifit.png" // Optional: Add project screenshots to /public/projects/
  },
  {
    title: "AI Sign Language Detection",
    description: "Real-time sign language recognition system using CNNs and OpenCV. Implements hand tracking, gesture classification, and sign-to-text conversion for accessibility.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "MediaPipe", "CNN"],
    github: "https://github.com/yourusername/sign-language",
    demo: "#",
    image: "/projects/sign-language.png"
  },
  {
    title: "E-Commerce Sales Analysis Dashboard",
    description: "Interactive Power BI dashboard analyzing transaction data to identify revenue patterns, customer behavior, and sales trends. Includes drill-through reports and KPI tracking.",
    tags: ["Power BI", "SQL", "Excel", "Data Analytics", "EDA"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    demo: "#",
    image: "/projects/ecommerce.png"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my work in Full Stack Development, AI, and Data Analytics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#111111] border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              {/* Project Image (Optional - remove if no images yet) */}
              {/* <div className="h-48 bg-gray-800 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div> */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <GitBranch size={16} className="mr-2" />
                    Code
                  </a>
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;