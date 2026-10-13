import Image from "next/image";
import { heroContent } from "@/data/hero";
import { resumeUrl } from "@/data/nav";

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero__image-wrap">
        <Image
          className="hero__image"
          src={heroContent.imageSrc}
          alt={heroContent.imageAlt}
          width={480}
          height={480}
          priority={true}
          sizes="(max-width: 767px) 72vw, 32vw"
        />
      </div>
      <div className="hero__content">
        <h1 id="hero-heading">{heroContent.name}</h1>
        <p className="hero__role">{heroContent.role}</p>
        <p className="hero__tagline">{heroContent.tagline}</p>
        <div className="hero__actions">
          <a className="button button--primary" href={heroContent.projectsHref}>
            {heroContent.primaryCta}
          </a>
          <a
            className="button button--secondary"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {heroContent.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
