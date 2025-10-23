import DisciplineSection from "./components/sections/discipline-section";
import HeroSection from "./components/sections/hero-sections";
import ProjectsSection from "./components/sections/projects-section";
import SkillsSection from "./components/sections/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <DisciplineSection />
    </>
  );
}
