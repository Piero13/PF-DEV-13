import { services } from "../../data/services."

import Section from "../../components/ui/Section/Section";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ServiceCard from "../../components/shared/ServiceCard/ServiceCard";
import SectionCTA from "../../components/shared/SectionCTA/SectionCTA"

import styles from "./Services.module.scss";

export default function Services() {
    return (
        <Section id="services">
            <SectionTitle
                eyebrow="Services"
                title="Des solutions web modernes et adaptées à vos besoins."
                text="Je conçois des expériences web élégantes, performantes et pensées pour les indépendants, artisans et petites entreprises."
            />

            <div className={styles.grid}>
                {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                        <ServiceCard
                            key={index}
                            icon={<Icon size={25} />}
                            title={service.title}
                            description={service.description}
                        />
                    )
                })}
            </div>
            
            <SectionCTA link="/services" text="En savoir plus" />
        </Section>
    );
}