import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "../../../animations/fade";

import styles from "./ProjectCard.module.scss";

export default function ProjectCard({
        title,
        description,
        image,
        tags,
        link,
    }) {

    return (
        <motion.article
            className={styles.card}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
        >
        <a
            href={link}
            className={styles.imageWrapper}
        >
            <img
                src={image}
                alt={title}
                className={styles.image}
            />
        </a>

        <div className={styles.content}>
            <div className={styles.header}>
                <h3>{title}</h3>

                <ArrowUpRight size={20} />
                </div>

                <p>{description}</p>

                <div className={styles.tags}>
                {tags.map((tag) => (
                    <span key={tag}>
                    {tag}
                    </span>
                ))}
                </div>
            </div>
        </motion.article>
    );
}