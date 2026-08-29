import React from 'react';
import { Download, FileText } from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">My Resume</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Download my full resume to see detailed information about my experience, projects, and education.
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-[#111111] border border-gray-800 rounded-xl p-8 max-w-2xl mx-auto hover:border-green-500/50 transition-all duration-300 shadow-lg">
          
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
              <FileText className="text-green-500 w-8 h-8" />
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-white mb-2">Mohammed Anas - Resume</h3>
          <p className="text-gray-400 text-sm mb-6">
            Computer Science Engineer | Full Stack Developer | Data Analyst | AI Engineer
          </p>

          {/* Download Button */}
          <a
            href="/Mohd Anas.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
          >
            <Download className="mr-2 w-5 h-5" />
            Download PDF
          </a>

          {/* File Info */}
          <p className="text-gray-500 text-xs mt-4">
            PDF • ~2MB • Updated August 2026
          </p>
        </div>

        {/* Quick Preview Section (Optional - Shows key highlights on page) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#111111] border border-gray-800 p-6 rounded-lg">
            <h4 className="text-green-500 font-bold mb-2">Experience</h4>
            <p className="text-gray-400 text-sm">
              Data Analytics Intern at Procraft Dubai, and Python & Generative AI Developer at Golden Bird Education.
            </p>
          </div>
          <div className="bg-[#111111] border border-gray-800 p-6 rounded-lg">
            <h4 className="text-green-500 font-bold mb-2">Education</h4>
            <p className="text-gray-400 text-sm">
              Bachelor of Engineering in Computer Science (2026) from Anjuman Institute of Technology and Management.
            </p>
          </div>
          <div className="bg-[#111111] border border-gray-800 p-6 rounded-lg">
            <h4 className="text-green-500 font-bold mb-2">Skills</h4>
            <p className="text-gray-400 text-sm">
              Python, JavaScript, React.js, TensorFlow, Power BI, SQL, Node.js, and more.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;