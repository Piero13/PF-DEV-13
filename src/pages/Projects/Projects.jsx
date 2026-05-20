import { Helmet } from "react-helmet-async";
import ProjectsHero from "../../sections/Projects/ProjectsHero";
import ProjectsGrid from "../../sections/Projects/ProjectsGrid";
import ProjectsCTA from "../../sections/Projects/ProjectsCTA"

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>
          Projets | Pierre Fasce | Développeur web | Sites modernes et accessibles
        </title>

        <meta
          name="description"
          content="Découvrez une sélection de projets web modernes, responsive et optimisés."
        />
      </Helmet>

      <ProjectsHero />

      <ProjectsGrid />

      <ProjectsCTA />
    </>
  );
}