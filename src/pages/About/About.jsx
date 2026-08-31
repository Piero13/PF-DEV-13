import AboutIntro from "../../sections/About/AboutIntro";
import AboutVision from "../../sections/About/AboutVision";
import AboutSkills from "../../sections/About/AboutSkills";
import AboutValues from "../../sections/About/AboutValues";
import ContactCTA from "../../sections/Contact/ContactCTA";
import Seo from "../../components/shared/test/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="À propos"
        description="Découvrez mon approche du développement web moderne"
        url="https://pfdev13.netlify.app/about"
      />

      <AboutIntro />

      <AboutVision />

      <AboutSkills />

      <AboutValues />

      <ContactCTA />
    </>
  );
}
