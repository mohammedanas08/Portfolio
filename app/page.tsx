import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsSection from '@/components/Skills';
import ProjectsSection from '@/components/Projects';
import ResumeSection from '@/components/Resume';
import ContactSection from '@/components/Contact';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />

      {/* ✅ Added Skills Section Here */}
      <SkillsSection />

      {/* ✅ Added Projects Section Here */}
      <ProjectsSection />

      {/* ✅ Added Resume Section Here */}
      <ResumeSection />
      
      {/* ✅ Added Contact Section Here */}
      <ContactSection />

      {/* ✅ Added Footer Section Here */}
      <Footer />

    </main>
  );
}