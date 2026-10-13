import Image from "next/image";
import TechTag from "@/components/TechTag";

type TimelineItemProps = {
  type: "experience" | "education";
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string | string[];
  skills?: string[];
  logoSrc?: string;
  logoAlt?: string;
  grade?: string;
};

function getInitials(label: string) {
  const words = label.split(/\s+/).filter(Boolean);
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function TimelineItem({
  type,
  title,
  subtitle,
  date,
  location,
  description,
  skills,
  logoSrc,
  logoAlt,
  grade,
}: TimelineItemProps) {
  const descriptions = (Array.isArray(description) ? description : [description]).filter(Boolean);

  return (
    <li className={`timeline-item timeline-item--${type}`}>
      <span className="timeline-item__node" aria-hidden="true" />
      <article className="timeline-item__card">
        <header className="timeline-item__header">
          {logoSrc ? (
            <Image
              className="timeline-item__logo"
              src={logoSrc}
              alt={logoAlt ?? `${title} logo`}
              width={48}
              height={48}
            />
          ) : (
            <span className="timeline-item__logo-fallback" aria-hidden="true">
              {getInitials(title)}
            </span>
          )}
          <section className="timeline-item__heading">
            <p className="timeline-item__date">
              <time>{date}</time>
            </p>
            <h3>{subtitle}</h3>
            <p className="timeline-item__title">{title}</p>
            {location ? <p className="timeline-item__location">{location}</p> : null}
          </section>
        </header>

        {descriptions.length > 0 ? (
          <ul className="timeline-item__description">
            {descriptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}

        {grade ? <p className="timeline-item__grade">{grade}</p> : null}

        {skills && skills.length > 0 ? (
          <ul className="timeline-item__skills" aria-label={`${title} skills`}>
            {skills.map((skill) => (
              <li key={skill}>
                <TechTag size="xs">{skill}</TechTag>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    </li>
  );
}
