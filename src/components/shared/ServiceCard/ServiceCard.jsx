import { motion } from "framer-motion";

import { fadeUp } from "../../../animations/fade";

import styles from "./ServiceCard.module.scss";

function ServiceCard({ icon, title, description }) {
  return (
    <motion.article
      className={styles.card}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
    >
      <div className={styles.icon}>
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </motion.article>
  );
}

export default ServiceCard;