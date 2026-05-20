import Section from "../../components/ui/Section/Section";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ProjectCard from "../../components/shared/ProjectCard/ProjectCard";
import SectionCTA from "../../components/shared/SectionCTA/SectionCTA";

import { projects } from "../../data/projects";

import styles from "./Projects.module.scss";

export default function Projects() {
    const projectsSelection = [projects[0], projects[1]]

    return (
        <Section id="projects">
            <SectionTitle
                eyebrow="Projets"
                title="Quelques réalisations récentes."
                text="Une sélection de projets pensés pour allier design moderne, performance et expérience utilisateur."
            />

            <div className={styles.grid}>
                {projectsSelection.map((project) => (
                <ProjectCard
                    key={project.id}
                    icon={project.icon}
                    title={project.title}
                    category={project.category}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    year={project.year}
                    link={project.link}
                />
                ))}
            </div>

            <SectionCTA link="/projects" text="Tous les projets" />
        </Section>
    );
}