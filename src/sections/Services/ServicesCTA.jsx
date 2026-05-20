import Section from "../../components/ui/Section/Section";

import Button from "../../components/ui/Button/Button";

import styles from "./ServicesCTA.module.scss";

function ServicesCTA() {
  return (
    <Section>
      <div className={styles.cta}>
        <h2>
          Vous avez un projet en tête ?
        </h2>

        <p>
          Discutons ensemble d’une solution
          moderne adaptée à vos besoins.
        </p>

        <div className={styles.button}>
            <Button
                href="/contact"
                variant="primary"
            >
                Me contacter
            </Button>
        </div>
      </div>
    </Section>
  );
}

export default ServicesCTA;