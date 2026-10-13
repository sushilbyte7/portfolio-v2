import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";
import { education, educationContent } from "@/data/education";

export default function Education() {
  return (
    <section className="education" id="education" aria-labelledby="education-heading">
      <SectionHeader
        eyebrow={educationContent.eyebrow}
        title={educationContent.title}
        subtitle={educationContent.subtitle}
        headingId="education-heading"
      />
      <ol className="education__timeline" aria-label="Education timeline">
        {education.map((item) => (
          <TimelineItem
            key={`${item.institution}-${item.degree}`}
            type="education"
            title={item.institution}
            subtitle={item.degree}
            date={item.duration}
            description={item.description}
            grade={item.grade}
            logoSrc={item.logoSrc}
            logoAlt={item.logoAlt}
          />
        ))}
      </ol>
    </section>
  );
}
