import { motion } from "framer-motion";

import Section from "../../components/ui/Section/Section";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

import { fadeUp } from "../../animations/fade";

import styles from "./About.module.scss";

export default function AboutIntro() {
    return (
        <Section>
            <div className={styles.hero}>
                <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                >
                    <SectionTitle 
                        eyebrow="À propos"
                        title="Développeur web freelance orienté design, expérience utilisateur et performance."
                        text="Je conçois des expériences web modernes, accessibles et pensées pour l’image des indépendants, artisans et petites entreprises."
                    />
                </motion.div>
            </div>
        </Section>
    );
}