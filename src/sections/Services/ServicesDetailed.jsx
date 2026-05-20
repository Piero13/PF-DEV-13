import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";

import { services } from "../../data/services.";

import Section from "../../components/ui/Section/Section";
import styles from "./ServicesDetailed.module.scss";

export default function ServicesDetailed() {
    return (
        <Section>
            <div className={styles.grid}>
                {services.map((service) => {
                    const Icon = service.icon;

                    return (
                        <motion.article
                            key={service.title}
                            className={styles.card}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className={styles.icon}>
                                <Icon size={28} />
                            </div>

                            <h2>{service.title}</h2>

                            <p>{service.text}</p>

                            <ul>
                                {service.points.map((point) => (
                                <li key={point}>
                                    {point}
                                </li>
                                ))}
                            </ul>
                        </motion.article>
                    );
                })}
            </div>
        </Section>
    )
}