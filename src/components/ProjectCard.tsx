import Image from "next/image";
import TechTag from "@/components/TechTag";
import type { Project } from "@/types";

type ProjectCardProps = Project;

const categoryLabels: Record<Project["category"], string> = {
  "web app": "Web app",
  "android app": "Android app",
  "machine learning": "Machine learning",
};

function ProjectLinks({ project }: { project: Project }) {
  return (
    <nav className="project-card__links" aria-label={`${project.title} links`}>
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
        >
          GitHub
        </a>
      ) : null}
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live demo`}
        >
          Live demo
        </a>
      ) : null}
    </nav>
  );
}

export default function ProjectCard(project: ProjectCardProps) {
  const visibleTags =
    project.variant === "standard" ? project.tags.slice(0, 3) : project.tags;

  return (
    <article className={`project-card project-card--${project.variant}`}>
      <figure className="project-card__media">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes={
              project.variant === "standard"
                ? "(max-width: 767px) 100vw, 33vw"
                : "(max-width: 1199px) 100vw, 66vw"
            }
          />
        ) : (
          <span className="project-card__placeholder" aria-hidden="true">
            {project.title}
          </span>
        )}
      </figure>

      <section className="project-card__content">
        <p className="project-card__category">{categoryLabels[project.category]}</p>
        <h3>{project.title}</h3>
        <p className="project-card__hook">{project.hook}</p>
        {project.description ? (
          <p className="project-card__description">{project.description}</p>
        ) : null}
        {project.date ? <time className="project-card__date">{project.date}</time> : null}
        {visibleTags.length > 0 ? (
          <ul className="project-card__tags" aria-label={`${project.title} technologies`}>
            {visibleTags.map((tag) => (
              <li key={tag}>
                <TechTag size="xs">{tag}</TechTag>
              </li>
            ))}
          </ul>
        ) : null}
        <ProjectLinks project={project} />
      </section>
    </article>
  );
}
