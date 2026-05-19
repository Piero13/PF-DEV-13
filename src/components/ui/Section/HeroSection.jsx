import styles from "./HeroSection.module.scss";

import Container from "../Container/Container";

export default function HeroSection({ children, id }) {
    return (
        <section id={id} className={styles.section}>
            <Container>
                {children}
            </Container>
        </section>
    )
}