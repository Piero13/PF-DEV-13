import Section from "../../components/ui/Section/Section";
import Button from "../../components/ui/Button/Button";
import SectionSubtitle from "../../components/shared/SectionSubtitle/SectionSubtitle";

import styles from "./ContactCTA.module.scss";

export default function ContactCTA() {
    return (
        <Section>
                <SectionSubtitle 
                    title="Vous avez un projet ou une idée ?"
                    text="Discutons ensemble de vos besoins et imaginons une solution moderne et adaptée à votre activité."
                />

                <div className={styles.cta}>
                    <Button
                        href="/contact"
                        variant="primary"
                    >
                        Me contacter
                    </Button>
                </div>
            
        </Section>
    );
}