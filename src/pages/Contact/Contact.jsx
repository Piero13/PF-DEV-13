import { Helmet } from "react-helmet-async";

import ContactForm from "../../components/shared/ContactForm/ContactForm";
import ContactInfos from "../../components/shared/ContactInfos/ContactInfos";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import Section from "../../components/ui/Section/Section";

import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>
                    Contact | Pierre Fasce | Développeur web | Sites modernes et accessibles
                </title>

                <meta
                name="description"
                content="Discutons de votre projet web : site vitrine, refonte ou développement sur mesure."
                />
            </Helmet>

            <main>
                <Section>
                    <SectionTitle
                        eyebrow="Contact"
                        title="Parlons de votre projet."
                        text="Vous avez une idée, un besoin ou un projet ? Je serais ravi d’échanger avec vous."
                    />
                    <div className={styles.layout}>
                        <ContactInfos />
                        <ContactForm />
                    </div>
                </Section>
                
            </main>
        </>
    );
}