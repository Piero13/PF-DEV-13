
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";

import Section from "../../components/ui/Section/Section";

import styles from "./Workflow.module.scss";

const steps = [
  {
    title: "Échange & analyse",
    text:
      "Compréhension de vos besoins, de votre activité et des objectifs du projet.",
  },

  {
    title: "Conception",
    text:
      "Création d’une interface moderne pensée pour vos utilisateurs.",
  },

  {
    title: "Développement",
    text:
      "Intégration responsive, animations fluides et optimisation des performances.",
  },

  {
    title: "Mise en ligne",
    text:
      "Déploiement du site et accompagnement après livraison.",
  },
];

export default function Workflow() {
    return (
        <Section>
            <div className={styles.workflowHeader}>
                <span className={styles.eyebrow}>
                Méthode
                </span>

                <h2>
                Une approche claire et structurée.
                </h2>
            </div>

            <div className={styles.workflowGrid}>
                {steps.map((step, index) => (
                    <motion.article
                        key={step.title}
                        className={styles.workflowCard}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{ y: -6 }}
                    >
                        <span className={styles.step}>
                            0{index + 1}
                        </span>

                        <h3>{step.title}</h3>

                        <p>{step.text}</p>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}