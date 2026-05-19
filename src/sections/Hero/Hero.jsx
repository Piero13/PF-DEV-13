import { motion } from "framer-motion";

import HeroSection from "../../components/ui/Section/HeroSection";
import Button from "../../components/ui/Button/Button"

import { fadeUp } from "../../animations/fade";
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
                    <motion.span 
                        className={styles.badge}
                        variants={fadeUp}
                    >
                        <span className={styles.badge_dot}></span>
                        Disponible pour vos projets web
                    </motion.span>

                    <motion.h1 variants={fadeUp}>
                        Création de <span className={styles.highlight}>sites</span> et <span className={styles.highlight}>applications web</span> modernes et accessibles.
                    </motion.h1>

                    <motion.p variants={fadeUp}>
                        J'aide les particuliers, artisans et PME à concrétiser leurs projets et développer leur présence en ligne avec des solutions modernes et sur mesure.
                    </motion.p>

                    <motion.div className={styles.actions}>
                        <Button variant="primary" href="/contact">
                            Me contacter
                        </Button>

                        <Button variant="secondary" href="/projects">
                            Voir mes projets
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </HeroSection>
    )
}