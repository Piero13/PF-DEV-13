import styles from "./SectionCTA.module.scss";
import { NavLink } from "react-router-dom";

export default function SectionCTA({text, link}) {
    return (
        <div className={styles.btnLayout}>
            <NavLink
                to={link}
                className={styles.button}
            >
                {text}
            </NavLink>
        </div>
    )
}