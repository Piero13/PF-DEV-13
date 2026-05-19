import { motion } from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import styles from "./ProjectCard.module.scss";

function ProjectCard({
  title,
  category,
  description,
  longDescription,
  image,
  tags,
  stacks,
  year,
  link,
}) {
  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -8 }}
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={styles.imageWrapper}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={styles.image}
        />
      </a>

      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.category}>
            {category}
          </span>

          <span className={styles.year}>
            {year}
          </span>
        </div>

        <div className={styles.header}>
          <h2>{title}</h2>

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

        <p>{longDescription}</p>

        <div className={styles.stacks}>
          <p>Stack : </p>
          {stacks.map((stack, index) => (
            <span key={index}>
              {stack}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;