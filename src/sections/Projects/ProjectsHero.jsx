import HeroSection from "../../components/ui/Section/HeroSection";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

export default function ProjectsHero() {
  return (
    <HeroSection id="projectsHero">
        <SectionTitle
            eyebrow="Projets"
            title="Une sélection de projets modernes, pensés pour allier design, performance et expérience utilisateur."
            text="Chaque projet est conçu avec une attention particulière portée à l’ergonomie, la fluidité et la qualité de l’expérience utilisateur."
        />
    </HeroSection>
  );
}