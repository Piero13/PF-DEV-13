import HeroSection from "../../components/ui/Section/HeroSection";
import Section from "../../components/ui/Section/Section";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import LegalBlock from "../../components/shared/LegalBlock/LegalBlock";

import Seo from "../../components/shared/test/Seo";

export default function Terms() {
  return (
    <>
      <Seo
        title="Conditions Générales d'Utilisation"
        description="Conditions d'utilisation du site PF DEV 13."
      />

      <HeroSection>
        <SectionTitle
          eyebrow="CGU"
          title="Conditions Générales d'Utilisation"
          text="Règles encadrant l'utilisation du site."
        />
      </HeroSection>

      <Section>
        <LegalBlock title="Objet">
          <p>Les présentes CGU encadrent l'utilisation du site PF DEV 13.</p>
        </LegalBlock>

        <LegalBlock title="Accès au site">
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant
            d'un accès à Internet.
          </p>
        </LegalBlock>

        <LegalBlock title="Responsabilité">
          <p>
            PF DEV 13 s'efforce de fournir des informations exactes et à jour.
          </p>
        </LegalBlock>

        <LegalBlock title="Modification des CGU">
          <p>
            PF DEV 13 se réserve le droit de modifier les présentes conditions à
            tout moment.
          </p>
        </LegalBlock>
      </Section>
    </>
  );
}
