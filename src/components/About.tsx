import { aboutContent } from "@/data/about";

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <header className="section-heading">
        <p className="section-heading__eyebrow">{aboutContent.eyebrow}</p>
        <h2 id="about-heading">{aboutContent.title}</h2>
      </header>

      <div className="about__layout">
        <article className="about__bio">
          <p>{aboutContent.bio}</p>
        </article>

        <aside className="about__details" aria-label="About highlights and education">
          <section className="about__highlights" aria-labelledby="about-highlights-heading">
            <h3 id="about-highlights-heading">Highlights</h3>
            <ul>
              {aboutContent.highlights.map((highlight) => (
                <li key={highlight.title}>
                  <h4>{highlight.title}</h4>
                  <p>{highlight.description}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="about__education" aria-labelledby="about-education-heading">
            <p className="about__label">Education</p>
            <h3 id="about-education-heading">{aboutContent.education.degree}</h3>
            <p className="about__institution">{aboutContent.education.institution}</p>
            <p className="about__meta">
              <time>{aboutContent.education.duration}</time>
              <span aria-hidden="true">·</span>
              <span>{aboutContent.education.status}</span>
            </p>
            <p>{aboutContent.education.description}</p>
          </section>
        </aside>
      </div>
    </section>
  );
}
