import ContactForm from "../../components/shared/ContactForm/ContactForm";
import ContactInfos from "../../components/shared/ContactInfos/ContactInfos";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import Section from "../../components/ui/Section/Section";
import Seo from "../../components/shared/SEO/Seo";

import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <>
            <Seo 
                title="Contact"
                description="Un projet ? Des questions ? Discutons-en..."
                url="https://pfdev13.netlify.app"
            />

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