import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "../../ui/Container/Container";
import logo from "../../../assets/images/Logo.png"

import styles from "./Navbar.module.scss";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener(
            "scroll",
            handleScroll
        );
        };
    }, []);

    return (
        <>
            <header
                className={`
                ${styles.navbar}
                ${scrolled ? styles.scrolled : ""}
                `}
            >
                <Container>
                    <div className={styles.content}>
                        <NavLink to="/" className={styles.logo}>
                            <img src={logo} alt="logo développeur web" />
                            <p>PF DEV 13</p>
                        </NavLink>

                        <nav className={styles.nav}>
                        <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
                            Accueil
                        </NavLink>

                        <NavLink to="/services" className={({ isActive }) => isActive ? styles.active : undefined}>
                            Services
                        </NavLink>

                        <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : undefined}>
                            Projets
                        </NavLink>

                        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>
                            À propos
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : undefined}>
                            Contact
                        </NavLink>
                        </nav>

                        <button
                        className={styles.burger}
                        onClick={() =>
                            setMenuOpen(!menuOpen)
                        }
                        aria-label="Ouvrir le menu"
                        >
                        {menuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                        </button>
                    </div>
                </Container>
            </header>

        <AnimatePresence>
            {menuOpen && (
            <motion.div
                className={styles.mobileMenu}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <nav>
                <NavLink
                    to="/"
                    onClick={() =>
                    setMenuOpen(false)
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/services"
                    onClick={() =>
                    setMenuOpen(false)
                    }
                >
                    Services
                </NavLink>

                <NavLink
                    to="/projects"
                    onClick={() =>
                    setMenuOpen(false)
                    }
                >
                    Projets
                </NavLink>

                <NavLink
                    to="/about"
                    onClick={() =>
                    setMenuOpen(false)
                    }
                >
                    À propos
                </NavLink>

                <NavLink
                    to="/contact"
                    onClick={() =>
                    setMenuOpen(false)
                    }
                >
                    Contact
                </NavLink>
                </nav>
            </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}