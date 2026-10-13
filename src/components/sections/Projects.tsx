"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects, projectsContent } from "@/data/projects";

const initialProjectCount = 6;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, initialProjectCount);

  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <SectionHeader
        eyebrow={projectsContent.eyebrow}
        title={projectsContent.title}
        subtitle={projectsContent.subtitle}
        headingId="projects-heading"
      />
      <div className="projects__grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {projects.length > initialProjectCount ? (
        <button
          className="button button--secondary projects__toggle"
          type="button"
          onClick={() => setShowAll((visible) => !visible)}
          aria-expanded={showAll}
        >
          {showAll ? projectsContent.showLessLabel : projectsContent.showMoreLabel}
        </button>
      ) : null}
    </section>
  );
}
