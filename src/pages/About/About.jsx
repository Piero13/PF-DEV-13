import { Helmet } from "react-helmet-async";

import AboutIntro from "../../sections/About/AboutIntro";
import AboutVision from "../../sections/About/AboutVision";
import AboutSkills from "../../sections/About/AboutSkills";
import AboutValues from "../../sections/About/AboutValues";
import ContactCTA from "../../sections/Contact/ContactCTA";

export default function About() {
  return (
    <>
      <Helmet>
        <title>
          À propos | Pierre Fasce | Développeur web | Sites modernes et accessibles
        </title>

        <meta
          name="description"
          content="Découvrez mon approche du développement web moderne, orientée expérience utilisateur, design et performance."
        />
      </Helmet>

      <AboutIntro />

      <AboutVision />

      <AboutSkills />

      <AboutValues />

      <ContactCTA />
    </>
  );
}