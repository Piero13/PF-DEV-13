import { motion } from "framer-motion";

import Section from "../../components/ui/Section/Section";
import SectionSubtitle from "../../components/shared/SectionSubtitle/SectionSubtitle";

import { fadeUp } from "../../animations/fade";

import styles from "./AboutSkills.module.scss";

const skills = [
  {
    title: "Interfaces modernes",
    text: "Création d’interfaces élégantes, fluides et adaptées à tous les écrans.",
  },

  {
    title: "Responsive design",
    text: "Expériences optimisées pour mobile, tablette et desktop.",
  },

  {
    title: "Performance",
    text: "Sites rapides et optimisés pour offrir une navigation fluide.",
  },

  {
    title: "SEO & accessibilité",
    text: "Bonnes pratiques pour améliorer visibilité et expérience utilisateur.",
  },

  {
    title: "Animations & interactions",
    text: "Micro-interactions modernes et animations fluides avec Framer Motion.",
  },

  {
    title: "Développement moderne",
    text: "Architecture React propre, scalable et maintenable.",
  },
];

export default function AboutSkills() {
    return (
        <Section>
            <SectionSubtitle 
                eyebrow="Compétences"
                title="Une approche moderne du développement web."
            />

        <div className={styles.grid}>
            {skills.map((skill) => (
            <motion.article
                key={skill.title}
                className={styles.skillCard}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
            >
                <div className={styles.card}>
                    <h4>{skill.title}</h4>
                    <p>{skill.text}</p>
                </div>
                
            </motion.article>
            ))}
        </div>
        </Section>
    );
}