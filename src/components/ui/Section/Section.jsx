import styles from "./Section.module.scss";

import Container from "../Container/Container";

export default function Section({ children, id }) {
    return (
        <section id={id} className={styles.section}>
            <Container>
                {children}
            </Container>
        </section>
    )
}