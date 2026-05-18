import { motion } from "framer-motion";

import { fadeUp } from "../../../animations/fade";

import styles from "./SectionSubtitle.module.scss";

export default function SectionSubtitle({ eyebrow, title, text }) {
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

      <h3>{title}</h3>

      {text && <p>{text}</p>}
    </motion.div>
  );
}