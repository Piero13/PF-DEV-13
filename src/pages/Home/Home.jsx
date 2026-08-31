import Hero from "../../sections/Hero/Hero";
import Services from "../../sections/Services/Services";
import Projects from "../../sections/Projects/Projects";
import About from "../../sections/About/About";
import Process from "../../sections/Process/Process";
import Contact from "../../sections/Contact/Contact";
import Seo from "../../components/shared/test/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="PFDEV13"
        description="Développeur web freelance spécialisé dans la création de sites modernes, performants et accessibles."
        url="https://pfdev13.netlify.app"
      />

      <Hero />
      <Services />
      <Projects />
      <About />
      <Process />
      <Contact />
    </>
  );
}
