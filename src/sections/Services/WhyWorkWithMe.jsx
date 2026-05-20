import Section from "../../components/ui/Section/Section";

import styles from "./WhyWorkWithMe.module.scss";

const reasons = [
  "Une approche humaine et accessible.",
  "Des interfaces modernes et élégantes.",
  "Une attention particulière portée à l’expérience utilisateur.",
  "Des sites performants et responsive.",
  "Une communication claire tout au long du projet.",
];

export default function WhyWorkWithMe() {
    return (
        <Section>
            <div className={styles.why}>
                <span className={styles.eyebrow}>
                Pourquoi travailler avec moi
                </span>

                <h2>
                Une collaboration simple, moderne
                et orientée qualité.
                </h2>

                <div className={styles.reasons}>
                {reasons.map((reason) => (
                    <div
                    key={reason}
                    className={styles.reason}
                    >
                    {reason}
                    </div>
                ))}
                </div>
            </div>
        </Section>
    );
}