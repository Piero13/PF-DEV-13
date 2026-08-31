import HeroSection from "../../components/ui/Section/HeroSection";
import Section from "../../components/ui/Section/Section";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import LegalBlock from "../../components/shared/LegalBlock/LegalBlock";

import Seo from "../../components/shared/test/Seo";

import styles from "./Policy.module.scss";

export default function Policy() {
  return (
    <>
      <Seo
        title="Conditions Générales de Vente"
        description="Parce qu'une collaboration réussie repose sur la transparence, vous trouverez ici l'ensemble des informations relatives aux prestations, aux délais, à la facturation et aux engagements de chacun."
      />

      <HeroSection>
        <SectionTitle
          eyebrow="CGV"
          title="Conditions Générales de Vente"
          text="Parce qu'une collaboration réussie repose sur la transparence, vous trouverez ici l'ensemble des informations relatives aux prestations, aux délais, à la facturation et aux engagements de chacun."
        />
      </HeroSection>

      <Section>
        <LegalBlock title="1. Objet">
          <p>Prestations de :</p>
          <ul className={styles.servicesList}>
            <li>audit</li>
            <li>création de sites vitrines</li>
            <li>développement web sur mesure</li>
            <li>refonte</li>
            <li>maintenance</li>
            <li>accompagnement numérique</li>
          </ul>
        </LegalBlock>

        <LegalBlock title="2. Devis">
          <p>
            Les devis émis par PF DEV 13 sont valables pendant une durée de
            trente (30) jours à compter de leur date d'émission.
          </p>

          <p>
            La przestation débutera dès la signature du devis et le versement
            d'un acompte pouvant aller de 10% à 30% du montant total de la
            prestation.
          </p>
        </LegalBlock>

        <LegalBlock title="3. Tarifs">
          <p>
            Les prix sont exprimés en euros et sont susceptibles d'être modifiés
            à tout moment. Les tarifs applicables sont ceux en vigueur au moment
            de la signature du devis.
          </p>

          <p>TVA non applicable, article 293 B du CGI.</p>
        </LegalBlock>

        <LegalBlock title="4. Acomptes">
          <p>
            PF DEV 13 se réserve le droit de demander un acompte compris entre
            10 % et 30 % du montant total de la prestation avant le démarrage du
            projet.
          </p>
        </LegalBlock>

        <LegalBlock title="5. Paiement">
          <p>
            Le règlement est exigible dans un délai compris entre trente (30) et
            soixante (60) jours à compter de l'acceptation du devis ou selon les
            modalités précisées sur celui-ci.
          </p>
          <p>Le règlement devra s'effectuer par virement bancaire.</p>
        </LegalBlock>

        <LegalBlock title="6. Retard de paiement">
          <p>
            Tout retard de paiement pourra entraîner l'application des pénalités
            prévues par la réglementation en vigueur.
          </p>
        </LegalBlock>

        <LegalBlock title="7. Obligations du client">
          <p>
            Le client s'engage à fournir dans les délais convenus l'ensemble des
            éléments nécessaires à la réalisation du projet.
          </p>
        </LegalBlock>

        <LegalBlock title="8. Contenus fournis par le client">
          <p>
            Le client demeure seul responsable des contenus, informations,
            textes, images, vidéos, documents, marques ou tout autre élément
            transmis à PF DEV 13 dans le cadre de la réalisation du projet.
          </p>
          <p>
            Le client garantit disposer de l'ensemble des droits et
            autorisations nécessaires à l'utilisation des contenus qu'il
            fournit.
          </p>
          <p>
            PF DEV 13 se réserve le droit de refuser l'intégration, la
            publication ou la diffusion de tout contenu qui serait manifestement
            contraire aux lois et règlements en vigueur, porterait atteinte aux
            droits de tiers, à l'ordre public, aux bonnes mœurs ou serait
            susceptible d'engager sa responsabilité.
          </p>
          <p>
            Dans le cas où le client persisterait à demander l'intégration ou la
            diffusion d'un contenu illicite ou manifestement contraire à la
            réglementation applicable, PF DEV 13 pourra suspendre l'exécution
            des prestations ou résilier le contrat de plein droit, sans que
            cette résiliation ne puisse donner lieu à une quelconque
            indemnisation du client.
          </p>
          <p>
            Les sommes déjà versées au titre des prestations réalisées resteront
            acquises à PF DEV 13.
          </p>
        </LegalBlock>

        <LegalBlock title="9. Délais de livraison">
          <p>
            Les délais communiqués sont donnés à titre indicatif et peuvent être
            ajustés en cas de retard dans la transmission des éléments
            nécessaires au projet.
          </p>
        </LegalBlock>

        <LegalBlock title="10. Livraison et la mise en production">
          <p>
            La livraison est considérée comme effectuée à la mise en ligne du
            site ou à la remise des éléments convenus.
          </p>
        </LegalBlock>

        <LegalBlock title="11. Responsabilité">
          <p>
            PF DEV 13 est tenu à une obligation de moyens et non de résultat.
          </p>
          <p>
            PF DEV 13 ne pourra être tenu responsable des contenus fournis par
            le client et publiés à sa demande. Le client assume l'entière
            responsabilité de leur exactitude, de leur légalité et de leur
            conformité aux droits des tiers.
          </p>
        </LegalBlock>

        <LegalBlock title="12. Propriété intellectuelle">
          <p>
            La propriété du site est transférée au client après paiement
            intégral des sommes dues.
          </p>
        </LegalBlock>

        <LegalBlock title="13. Droit applicable">
          <p>Les présentes CGV sont soumises au droit français.</p>
        </LegalBlock>
      </Section>
    </>
  );
}
