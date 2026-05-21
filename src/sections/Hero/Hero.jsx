import { motion } from "framer-motion";

import HeroSection from "../../components/ui/Section/HeroSection";
import Button from "../../components/ui/Button/Button"

import { staggerContainer } from "../../animations/stagger";

import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <HeroSection id="hero">
            <motion.div 
                className={styles.hero}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className={styles.content}>
                    <span 
                        className={styles.badge}
                    >
                        <span className={styles.badge_dot}></span>
                        Disponible pour vos projets web
                    </span>

                    <h1>
                        Création de <span className={styles.highlight}>sites</span> et <span className={styles.highlight}>applications web</span> modernes et accessibles.
                    </h1>

                    <p>
                        J'aide les particuliers, associations et artisants à concrétiser leurs projets et développer leur présence en ligne avec des solutions modernes et sur mesure.
                    </p>

                    <div className={styles.actions}>
                        <Button variant="primary" href="/contact">
                            Me contacter
                        </Button>

                        <Button variant="secondary" href="/projects">
                            Voir mes projets
                        </Button>
                    </div>
                </div>
            </motion.div>
        </HeroSection>
    )
}