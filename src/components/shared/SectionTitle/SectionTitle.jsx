import { motion } from "framer-motion";

import { fadeUp } from "../../../animations/fade";

import styles from "./SectionTitle.module.scss";

function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      className={styles.heading}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {eyebrow && (
        <span className={styles.eyebrow}>
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      {text && <p>{text}</p>}
    </motion.div>
  );
}

export default SectionTitle;