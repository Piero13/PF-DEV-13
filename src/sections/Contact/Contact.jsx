import { motion } from "framer-motion";

import Section from "../../components/ui/Section/Section";
import Button from "../../components/ui/Button/Button";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

import { fadeUp } from "../../animations/fade";

import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <Section id="contact">
            <motion.div
                className={styles.card}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <SectionTitle
                    eyebrow="Contact"
                    title="Parlons de votre projet."
                    text="Vous avez une idée, un besoin ou un projet en tête ? Échangeons ensemble."
                />

                <div className={styles.button}>
                    <Button variant="primary">
                        Me contacter
                    </Button>
                </div>
                
            </motion.div>
        </Section>
    );
}