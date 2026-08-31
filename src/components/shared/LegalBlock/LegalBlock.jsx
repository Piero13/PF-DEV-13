import styles from "./LegalBlock.module.scss";

export default function LegalBlock({ title, children }) {
  return (
    <article className={styles.block}>
      <h3>{title}</h3>
      {children}
    </article>
  );
}
