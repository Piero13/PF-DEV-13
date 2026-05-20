import HeroSection from "../../components/ui/Section/HeroSection";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

export default function ServicesHero() {
  return (
    <HeroSection id="servicesHero">
        <SectionTitle
            eyebrow="Services"
            title="Des solutions web modernes et adaptées à vos besoins."
            text="Je conçois des expériences web élégantes, performantes et pensées pour les indépendants, artisans et petites entreprises."
        />
    </HeroSection>
  );
}