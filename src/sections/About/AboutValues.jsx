import { motion } from "framer-motion";
import { MessageCircle, MousePointer2, Sparkle, Zap } from "lucide-react";

import Section from "../../components/ui/Section/Section";
import SectionSubtitle from "../../components/shared/SectionSubtitle/SectionSubtitle";

import { fadeUp } from "../../animations/fade";

import styles from "./AboutValues.module.scss";

const values = [
    {
        text: "Privilégier une communication claire et humaine.",
        icon: MessageCircle,
    },
    {
        text: "Créer des interfaces simples et intuitives.",
        icon: MousePointer2,
    },
    {
        text: "Concevoir des expériences élégantes et accessibles.",
        icon: Sparkle,
    },
    {
        text: "Développer des sites rapides et durables.",
        icon: Zap,
    },
]

export default function AboutValues() {
    return (
        <Section>
            <SectionSubtitle 
                eyebrow="Valeurs"
                title="Ce qui est important dans ma manière de travailler."
            />
            <div className={styles.grid}>
                
                {values.map((value, index) => {
                    const Icon = value.icon
                    
                    return (
                        <motion.article
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                        >
                            <div className={styles.card}>
                                <Icon size={25} className={styles.icon} />
                                <p>{value.text}</p>
                            </div>
                        </motion.article>
                    )})}
                
            </div>


        </Section>
    );
}