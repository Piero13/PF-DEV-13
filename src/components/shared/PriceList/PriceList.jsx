import Section from "../../ui/Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FileDown } from "lucide-react";

import styles from "./PriceList.module.scss"

export default function PriceList() {
    return (
        <Section>
            <SectionTitle
                eyebrow="Tarifs"
                title="Des offres claires et adaptées"
                text="Retrouvez le détail de mes prestations, des options et des tarifs indicatifs."
            />
            <div className={styles.btnDisplay}>
                <a
                    className={styles.downloadBtn}
                    href="/public/pfdev13_brochure_2026.pdf"
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FileDown size={35} className={styles.btnIcon}/>
                        <div>
                            <p>Télécharger La brochure</p>
                            <p>(PDF - 341 Ko)</p>
                        </div>
                </a>
            </div>
        </Section>
    )
}