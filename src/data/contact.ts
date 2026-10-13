import type { SocialLink } from "@/types";

export const contactContent = {
  eyebrow: "06. contact",
  title: "Get in Touch",
  description:
    "Open to full-time roles, freelance projects, and interesting conversations.",
  formTitle: "Send a message",
  submitLabel: "Send Message",
  requiredNote: "All fields are required.",
  loadingLabel: "Sending...",
  successMessage: "Your message was sent successfully.",
  unconfiguredError:
    "The contact form is not configured yet. Please use GitHub or LinkedIn instead.",
  deliveryError: "We couldn't send your message. Please try again or use a social link.",
};

export const contactFields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "email", label: "Email", type: "email", autoComplete: "email" },
  { id: "subject", label: "Subject", type: "text", autoComplete: "off" },
] as const;

export const messageField = {
  id: "message",
  label: "Message",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub profile",
    href: "https://github.com/sushilbyte7",
    icon: "github",
  },
  {
    label: "LinkedIn profile",
    href: "https://www.linkedin.com/in/sushilbyte7",
    icon: "linkedin",
  },
];
