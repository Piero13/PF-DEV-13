import Section from "../../components/ui/Section/Section";

import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import ProjectCard from "../../components/shared/ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

import styles from "./Projects.module.scss";

export default function Projects() {
    return (
        <Section id="projects">
            <SectionTitle
                eyebrow="Projets"
                title="Quelques réalisations récentes."
                text="Une sélection de projets pensés pour allier design moderne, performance et expérience utilisateur."
            />

            <div className={styles.grid}>
                {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    icon={project.icon}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    link={project.link}
                />
                ))}
            </div>
        </Section>
    );
}