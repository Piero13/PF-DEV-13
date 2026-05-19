import { Helmet } from "react-helmet-async";
import ProjectsHero from "../../sections/Projects/ProjectsHero";
import ProjectsGrid from "../../sections/Projects/ProjectsGrid";

function Projects() {
  return (
    <>
      <Helmet>
        <title>
          Projets | Développeur Web Freelance
        </title>

        <meta
          name="description"
          content="Découvrez une sélection de projets web modernes, responsive et optimisés."
        />
      </Helmet>

      <ProjectsHero />

      <ProjectsGrid />
    </>
  );
}

export default Projects;