import { motion } from "framer-motion";

import Section from "../../components/ui/Section/Section";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

import { fadeUp } from "../../animations/fade";

import styles from "./About.module.scss";

function About() {
  return (
    <Section id="about">
        <div className={styles.layout}>
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <SectionTitle
                    eyebrow="À propos"
                    title="Un développeur web attentif au design et à l’expérience utilisateur."
                    text="Je crée des expériences web modernes, accessibles et pensées pour mettre en valeur les projets des indépendants et petites entreprises."
                />

                <div className={styles.content}>
                    <p>
                    Mon approche repose sur un équilibre entre
                    design, performance et simplicité d’utilisation.
                    </p>

                    <p>
                    J’accorde une attention particulière à
                    l’ergonomie, à la fluidité des interfaces et à
                    la qualité du rendu sur tous les appareils.
                    </p>

                    <p>
                    Mon objectif : concevoir des sites élégants,
                    rapides et efficaces qui inspirent confiance
                    dès les premières secondes.
                    </p>
                </div>
            </motion.div>

            <motion.div
                className={styles.visual}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles.card}>
                    <span>UI / UX</span>
                    <span>Frontend</span>
                    <span>Responsive</span>
                    <span>Performance</span>
                    <span>SEO</span>
                    <span>Accessibilité</span>
                </div>
            </motion.div>
        </div>
    </Section>
  );
}

export default About;