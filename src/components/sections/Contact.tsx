import ContactCard from "@/components/ContactCard";
import SectionHeader from "@/components/SectionHeader";
import { contactContent } from "@/data/contact";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <SectionHeader
        eyebrow={contactContent.eyebrow}
        title={contactContent.title}
        subtitle={contactContent.description}
        headingId="contact-heading"
      />
      <ContactCard />
    </section>
  );
}
