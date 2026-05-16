import Section from "../../components/ui/Section/Section";

import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <Section>
            <div className={styles.hero}>
                <div className={styles.content}>
                    <span className={styles.badge}>
                        Disponible pour vos projets web
                    </span>

                    <h1>
                        Je crée des sites et applications web modernes et accessibles.
                    </h1>

                    <p> j'aide les particuliers, artisans et PME à concrétiser leurs projets et développer leur présence en ligne avec des solutions modernes et sur mesure</p>

                    <div className={styles.actions}>
                        {/* Buttons */}
                    </div>
                </div>

                <div className={styles.visual}>
                    {/* Gradient / mockup */}
                </div>
            </div>
        </Section>
    )
}