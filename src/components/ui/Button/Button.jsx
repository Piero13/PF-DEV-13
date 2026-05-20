import styles from "./Button.module.scss";

import { NavLink } from "react-router-dom";

export default function Button({
    children,
    variant = "primary",
    href,
    type = "button",
}) {
    const className = `${styles.button} ${styles[variant]}`;

    if (href) {
        return (
            <NavLink to={href} className={className} aria-label={children}>
                {children}
            </NavLink>
        );
    }

    return (
        <button className={className} aria-label={children} type={type}>
            {children}
        </button>
    )
}