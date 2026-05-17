import { motion } from "framer-motion";
import {
  MessageCircle,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

import Section from "../../components/ui/Section/Section";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

import { fadeUp } from "../../animations/fade";

import styles from "./Process.module.scss";

const steps = [
    {
    icon: MessageCircle,
    title: "Échange",
    text: "Compréhension de vos besoins et définition des objectifs.",
    },

    {
        icon: PencilRuler,
        title: "Conception",
        text: "Création de la structure et du design de l’interface.",
    },

    {
        icon: Code2,
        title: "Développement",
        text: "Intégration moderne, responsive et optimisée.",
    },

    {
        icon: Rocket,
        title: "Mise en ligne",
        text: "Déploiement et accompagnement après livraison.",
    },
];

function Process() {
    return (
        <Section id="process">
            <SectionTitle
                eyebrow="Méthode"
                title="Une approche simple et transparente."
                text="Chaque projet est pensé pour offrir une expérience fluide, claire et adaptée à vos besoins."
            />

            <div className={styles.grid}>
                {steps.map((step) => {
                const Icon = step.icon;

                return (
                    <motion.article
                        key={step.title}
                        className={styles.card}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className={styles.icon}>
                            <Icon size={28} />
                        </div>

                        <h3>{step.title}</h3>

                        <p>{step.text}</p>
                    </motion.article>
                );
                })}
            </div>
        </Section>
    );
}

export default Process;