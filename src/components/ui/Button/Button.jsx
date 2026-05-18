import styles from "./Button.module.scss";

export default function Button({
    children,
    variant = "primary",
    href,
    type = "button",
}) {
    const className = `${styles.button} ${styles[variant]}`;

    if (href) {
        return (
            <a href={href} className={className} aria-label={children}>
                {children}
            </a>
        );
    }

    return (
        <button className={className} aria-label={children} type={type}>
            {children}
        </button>
    )
}