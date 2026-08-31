import ProjectsHero from "../../sections/Projects/ProjectsHero";
import ProjectsGrid from "../../sections/Projects/ProjectsGrid";
import ProjectsCTA from "../../sections/Projects/ProjectsCTA";
import Seo from "../../components/shared/test/Seo";

export default function Projects() {
  return (
    <>
      <Seo
        title="Projets"
        description="Découvrez une sélection de projets web modernes, responsive et optimisés."
        url="https://pfdev13.netlify.app/projects"
      />

      <ProjectsHero />

      <ProjectsGrid />

      <ProjectsCTA />
    </>
  );
}
