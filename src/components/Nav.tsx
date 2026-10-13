"use client";

import { useEffect, useState } from "react";
import type { NavLink } from "@/types";
import { githubUrl, resumeUrl } from "@/data/nav";

type NavProps = {
  sections: NavLink[];
};

function GithubIcon() {
  return (
    <svg aria-hidden="true" className="nav__github-icon" viewBox="0 0 24 24">
      <path
        d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.33-1.77-1.33-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"
      />
    </svg>
  );
}

export default function Nav({ sections }: NavProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observedSections = sections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => section !== null);

    if (observedSections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav
        className={`glass site-nav${isScrolled ? " is-scrolled" : ""}`}
        aria-label="Main navigation"
      >
        <a className="site-nav__logo" href="#hero" aria-label="Sushil Kumar home">
          SK
        </a>

        <button
          className="site-nav__menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="site-nav__links" id="desktop-navigation">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                className={activeSection === section.id ? "is-active" : ""}
                href={section.href}
                aria-current={activeSection === section.id ? "page" : undefined}
                onClick={handleLinkClick}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <aside
          className={`site-nav__mobile-panel${isOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-hidden={!isOpen}
        >
          <ul className="site-nav__mobile-links">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  className={activeSection === section.id ? "is-active" : ""}
                  href={section.href}
                  aria-current={activeSection === section.id ? "page" : undefined}
                  tabIndex={isOpen ? 0 : -1}
                  onClick={handleLinkClick}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button button--secondary site-nav__mobile-resume"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </aside>

        <div className="site-nav__actions">
          <a
            className="site-nav__github"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GithubIcon />
          </a>
          <a
            className="button button--secondary"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
