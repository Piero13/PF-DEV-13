import { NavLink } from "react-router-dom";
import Container from "../../ui/Container/Container";
import styles from "./Navbar.module.scss";
import logo from "../../../assets/images/Logo.png"

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <Container>
                <div className={styles.content}>
                    <NavLink to="/" className={styles.logo}>
                        <img src={logo} alt="logo développeur web" />
                        <p>PF DEV 13</p>
                    </NavLink>

                    <nav className={styles.nav}>
                        <NavLink to="/">Accueil</NavLink>
                        <NavLink to="/projects">Projets</NavLink>
                        <NavLink to="about">À propos</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>

                    <NavLink to="/contact" className={styles.cta}>
                        Me contacter
                    </NavLink>
                </div>
            </Container>
        </header>
    )
}