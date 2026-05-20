import { Helmet } from "react-helmet-async";
import ServicesHero from "../../sections/Services/ServicesHero";
import ServicesDetailed from "../../sections/Services/ServicesDetailed";
import Workflow from "../../sections/Services/Workflow";
import WhyWorkWithMe from "../../sections/Services/WhyWorkWithMe";
import ServicesFAQ from "../../sections/Services/ServicesFAQ";
import ServicesCTA from "../../sections/Services/ServicesCTA";

export default function Services() {
    return (
        <>
            <Helmet>
                <title>
                    Services | Pierre Fasce | Développeur web | Sites modernes et accessibles
                </title>

                <meta
                    name="description"
                    content="Création de sites web modernes, responsive et optimisés pour les particuliers, indépendants, artisans et petites entreprises."
                />
            </Helmet>

            <ServicesHero />

            <ServicesDetailed />

            <Workflow />

            <WhyWorkWithMe />

            <ServicesFAQ />

            <ServicesCTA />
        </>
    );
}