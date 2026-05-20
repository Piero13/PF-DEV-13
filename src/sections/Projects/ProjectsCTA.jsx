import Section from "../../components/ui/Section/Section";
import SectionSubtitle from "../../components/shared/SectionSubtitle/SectionSubtitle"

import Button from "../../components/ui/Button/Button";

import styles from "./ProjectsCTA.module.scss";

function ProjectsCTA() {
  return (
    <Section>
        <SectionSubtitle 
            title="Vous avez un projet similaire ?"
            text="Discutons ensemble d’une solution moderne adaptée à votre activité."
        />
        <div className={styles.cta}>
          <Button
            href="/contact"
            variant="primary"
          >
            Me contacter
          </Button>
        </div>
    </Section>
  );
}

export default ProjectsCTA;