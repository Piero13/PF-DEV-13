import styles from "./Input.module.scss";

export default function Input({
    label,
    type = "text",
    name,
    placeholder,
    textarea = false,
    required = false,
}) {
    return (
        <div className={styles.field}>
        <label htmlFor={name}>
            {label}
        </label>

        {textarea ? (
            <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            rows="6"
            />
        ) : (
            <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            />
        )}
        </div>
    );
}