import { projects } from "../../data/projects";

import Section from "../../components/ui/Section/Section";

import ProjectCard from "./ProjectCard";

import styles from "./Projects.module.scss";

export default function ProjectsGrid() {
    return (
        <Section>
            <div className={styles.grid}>
                {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    {...project}
                />
                ))}
            </div>
        </Section>
    );
}