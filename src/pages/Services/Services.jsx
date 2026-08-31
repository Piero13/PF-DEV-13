import ServicesHero from "../../sections/Services/ServicesHero";
import ServicesDetailed from "../../sections/Services/ServicesDetailed";
import Workflow from "../../sections/Services/Workflow";
import WhyWorkWithMe from "../../sections/Services/WhyWorkWithMe";
import ServicesFAQ from "../../sections/Services/ServicesFAQ";
import PriceList from "../../components/shared/PriceList/PriceList";
import ServicesCTA from "../../sections/Services/ServicesCTA";
import Seo from "../../components/shared/Seo/Seo";

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Création de sites web modernes, responsive et optimisés pour les particuliers, indépendants, artisans et petites entreprises."
        url="https://pfdev13.netlify.app/services"
      />

      <ServicesHero />

      <ServicesDetailed />

      <Workflow />

      <WhyWorkWithMe />

      <ServicesFAQ />

      <PriceList />

      <ServicesCTA />
    </>
  );
}
