import { motion } from "framer-motion";

import Section from "../../components/ui/Section/Section";
import SectionSubtitle from "../../components/shared/SectionSubtitle/SectionSubtitle";

import { fadeUp } from "../../animations/fade";

import styles from "./About.module.scss";

export default function AboutVision() {
  return (
    <Section>
        <SectionSubtitle
            eyebrow="Vision"
            title="Un bon site web doit être beau, rapide et simple à utiliser."
        />

        <motion.div
            className={styles.block}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >     
            <div className={styles.text}>
                <p>
                    Mon approche repose sur un équilibre entre esthétique, performance et clarté d’utilisation. Je porte une attention particulière aux détails, à la fluidité des interfaces et à l’expérience vécue par les visiteurs.
                </p>

                <br />

                <p>
                    L’objectif n’est pas seulement de créer un site moderne, mais une expérience qui inspire confiance dès les premières secondes.
                </p>
            </div>
        </motion.div>
    </Section>
  );
}