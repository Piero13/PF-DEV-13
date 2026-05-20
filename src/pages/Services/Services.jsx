import { Helmet } from "react-helmet-async";
import ServicesHero from "../../sections/Services/ServicesHero";

export default function Services() {
    return (
        <>
            <Helmet>
                <title>
                    Services | Pierre Fasce | Développeur web | Sites modernes et accessibles
                </title>

                <meta
                    name="description"
                    content="Découvrez une sélection de projets web modernes, responsive et optimisés."
                />
            </Helmet>

            <ServicesHero />
        </>
    );
}