import { NavLink } from "react-router-dom";

import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Container from "../../ui/Container/Container";

import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div>
            <h3>PF DEV 13</h3>

            <p>Développement web moderne, accessible et performant.</p>
          </div>

          <div>
            <h4>Navigation</h4>

            <nav className={styles.nav}>
              <NavLink to="/">Accueil</NavLink>

              <NavLink to="/services">Services</NavLink>

              <NavLink to="/projects">Projets</NavLink>

              <NavLink to="/about">À propos</NavLink>

              <NavLink to="/contact">Contact</NavLink>
            </nav>
          </div>

          <div>
            <h4>Informations</h4>

            <nav className={styles.nav}>
              <NavLink to="/legal">Mentions légales</NavLink>

              <NavLink to="/terms">CGU</NavLink>

              <NavLink to="/policy">CGV</NavLink>

              <a
                href="/pfdev13_brochure_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Brochure PDF
              </a>
            </nav>
          </div>

          <div>
            <h4>Suivez-moi</h4>

            <div className={styles.links}>
              <a
                href="https://www.facebook.com/PierreFasce/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/pf.creations13/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/Piero13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <FaGithub />
              </a>

              <a
                href="https://wa.me/33651853051"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} PF DEV 13 — Tous droits réservés.</p>
          <p>Conçu et développé avec React</p>
        </div>
      </Container>
    </footer>
  );
}
