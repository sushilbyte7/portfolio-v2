import { footerContent, navLinks } from "@/data/nav";
import { socialLinks } from "@/data/contact";

function SocialIcon({ name }: { name?: string }) {
  return name === "linkedin" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M5.3 3.7A2.3 2.3 0 1 1 .7 3.7a2.3 2.3 0 0 1 4.6 0ZM1 8h4.5v14H1V8Zm7.2 0h4.3v1.9h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.5 3.1 5.5 7.1V22H18v-6.5c0-1.5 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4V22H8.2V8Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.2 1.2 1 .1.8 1.8 3.1 1.3.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.3-5.1 5.6.4.3.7 1 .7 1.9v2.8c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="site-footer__logo" href="#hero" aria-label={footerContent.logoLabel}>
        {footerContent.logo}
      </a>
      <nav className="site-footer__nav" aria-label="Footer navigation">
        {navLinks.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <nav className="site-footer__socials" aria-label="Footer social links">
        {socialLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            <SocialIcon name={link.icon} />
          </a>
        ))}
      </nav>
      <p className="site-footer__copyright">
        © {footerContent.copyrightYear} {footerContent.copyrightSuffix}
      </p>
    </footer>
  );
}
