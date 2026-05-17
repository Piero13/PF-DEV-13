import Container from "../../ui/Container/Container";

import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <Container>
            <div className={styles.content}>
            <div>
                <h3>PF DEV 13</h3>

                <p>
                Développement web moderne,
                accessible et performant.
                </p>
            </div>

            <div className={styles.links}>
                <a href="#hero">
                    Accueil
                </a>
                <a href="#services">
                Services
                </a>

                <a href="#projects">
                Projets
                </a>

                <a href="#contact">
                Contact
                </a>
            </div>
            </div>

            <div className={styles.bottom}>
            <p>
                © 2026 — Tous droits réservés
            </p>
            </div>
        </Container>
        </footer>
    );
}