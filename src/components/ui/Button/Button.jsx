import styles from "./Button.module.scss";

export default function Button({
    children,
    variant = "primary",
    href,
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
        <button className={className}>
            {children}
        </button>
    )
}