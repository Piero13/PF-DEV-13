import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
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
                <a href="https://www.facebook.com/PierreFasce/" aria-label="Liens vers le Facebook de Pierre Fasce" title="Facebook" target="_blank">
                    <FaFacebook />
                </a>

                <a href="https://www.instagram.com/pf.creations13/" aria-label="Liens vers la page Instagram de Pierre Fasce" title="Instagram" target="_blank">
                    <FaInstagram />
                </a>

                <a href="https://github.com/Piero13" aria-label="Liens vers le Github de Pierre Fasce" title="Github" target="_blank">
                    <FaGithub />
                </a>

                <a href="tel:+33651853051" aria-label="Contact Whatsapp" title="Whatsapp" target="_blank">
                    <FaWhatsapp />
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