import SectionHeader from "@/components/SectionHeader";
import TechTag from "@/components/TechTag";
import { primarySkillNames, skillsContent } from "@/data/skills";

export default function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <SectionHeader
        eyebrow={skillsContent.eyebrow}
        title={skillsContent.title}
        subtitle={skillsContent.subtitle}
        headingId="skills-heading"
      />

      <div className="skills__grid">
        {skillsContent.groups.map((group) => (
          <article className="skills__group" key={group.category}>
            <h3>{group.category}</h3>
            <ul className="skills__tags">
              {group.skills.map((skill) => (
                <li
                  className={
                    primarySkillNames.has(skill)
                      ? "skills__tag skills__tag--primary"
                      : "skills__tag"
                  }
                  key={skill}
                >
                  <TechTag>{skill}</TechTag>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
