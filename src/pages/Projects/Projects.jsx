import { Helmet } from "react-helmet-async";

import ProjectsSection from "../../sections/projects/Projects";

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

      <ProjectsSection />
    </>
  );
}

export default Projects;