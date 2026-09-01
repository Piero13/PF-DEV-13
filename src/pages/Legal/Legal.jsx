import HeroSection from "../../components/ui/Section/HeroSection";
import Section from "../../components/ui/Section/Section";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import LegalBlock from "../../components/shared/LegalBlock/LegalBlock";

import Seo from "../../components/shared/Seo/Seo";

export default function Legal() {
  return (
    <>
      <Seo
        title="Mentions légales"
        description="Informations légales relatives au site PF DEV 13."
      />

      <HeroSection>
        <SectionTitle
          eyebrow="Informations légales"
          title="Mentions légales"
          text="Informations relatives à l'éditeur du site et à son hébergement."
        />
      </HeroSection>

      <Section>
        <LegalBlock title="1. Éditeur du site">
          <p>PF DEV 13</p>

          <p>Micro-entreprise</p>

          <p>Fasce Pierre</p>

          <p>SIRET : 890.857.287.00027</p>

          <p>
            Email :{" "}
            <a href="mailto:pf.devweb13@gmail.com">pf.devweb13@gmail.com</a>
          </p>

          <p>Adresse : 81 Bd Pinatel, 13012 Marseille, France.</p>
        </LegalBlock>

        <LegalBlock title="2. Hébergement">
          <p>Netlify Inc.</p>

          <p>
            2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis.
          </p>
        </LegalBlock>

        <LegalBlock title="3. Propriété intellectuelle">
          <p>
            L'ensemble des contenus présents sur ce site est protégé par le
            droit de la propriété intellectuelle.
          </p>
        </LegalBlock>

        <LegalBlock title="4. Données personnelles">
          <p>
            Les informations transmises via le formulaire de contact sont
            utilisées uniquement afin de répondre aux demandes reçues.
          </p>
        </LegalBlock>
      </Section>
    </>
  );
}
