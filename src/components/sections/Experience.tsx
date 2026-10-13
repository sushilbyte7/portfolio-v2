import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";
import { experience, experienceContent } from "@/data/experience";

export default function Experience() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <SectionHeader
        eyebrow={experienceContent.eyebrow}
        title={experienceContent.title}
        subtitle={experienceContent.subtitle}
        headingId="experience-heading"
      />
      <ol className="experience__timeline" aria-label="Experience timeline">
        {experience.map((item) => (
          <TimelineItem
            key={`${item.company}-${item.role}`}
            type="experience"
            title={item.company}
            subtitle={item.role}
            date={item.date}
            location={item.location}
            description={item.description}
            skills={item.skills}
            logoSrc={item.logoSrc}
            logoAlt={item.logoAlt}
          />
        ))}
      </ol>
    </section>
  );
}
