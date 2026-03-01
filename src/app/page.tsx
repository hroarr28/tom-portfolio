import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Projects } from "@/components/projects";
import { CaseStudyPreview } from "@/components/case-study-preview";
import { AISection } from "@/components/ai-section";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <CaseStudyPreview />
        <AISection />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
