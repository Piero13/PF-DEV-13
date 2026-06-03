import Section from "../../components/ui/Section/Section";

import styles from "./ServicesFAQ.module.scss";

const faq = [
    {
        question:
        "Combien de temps prend un projet ?",

        answer:
        "La durée dépend du projet, mais par exemple, un site vitrine prend généralement entre 1 et 4 semaines selon le cahier des charges.",
    },

    {
        question:
        "Le site sera-t-il responsive (adapté tous écrans) ?",

        answer:
        "Oui, tous les sites sont optimisés pour mobile, tablette et desktop.",
    },

    {
        question:
        "Peut-on faire évoluer le site plus tard ?",

        answer:
        "Oui, l’architecture est pensée pour être évolutive et maintenable.",
    },
];

function ServicesFAQ() {
    return (
        <Section>
            <div className={styles.faq}>
                <span className={styles.eyebrow}>
                    FAQ
                </span>

                <h2>
                    Questions fréquentes.
                </h2>

                <div className={styles.faqList}>
                {faq.map((item) => (
                    <article
                        key={item.question}
                        className={styles.faqItem}
                    >
                        <h3>{item.question}</h3>

                        <p>{item.answer}</p>
                    </article>
                ))}
                </div>
            </div>
        </Section>
    );
}

export default ServicesFAQ;