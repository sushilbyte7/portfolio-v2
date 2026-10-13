"use client";

import { FormEvent, useState } from "react";
import {
  contactContent,
  contactFields,
  messageField,
  socialLinks,
} from "@/data/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function SocialIcon({ name }: { name?: string }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.3 3.7A2.3 2.3 0 1 1 .7 3.7a2.3 2.3 0 0 1 4.6 0ZM1 8h4.5v14H1V8Zm7.2 0h4.3v1.9h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.5 3.1 5.5 7.1V22H18v-6.5c0-1.5 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4V22H8.2V8Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.8 3.1 1.3.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 1.1a10.4 10.4 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.3-5.1 5.6.4.3.7 1 .7 1.9v2.8c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z"
      />
    </svg>
  );
}

export default function ContactCard() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const formData = new FormData(event.currentTarget);
    const fields: ContactFields = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Contact delivery is not configured.");
      }

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: fields,
        }),
      });

      if (!response.ok) {
        throw new Error("Contact delivery failed.");
      }

      setStatus("success");
      setFeedback(contactContent.successMessage);
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error && error.message === "Contact delivery is not configured."
          ? contactContent.unconfiguredError
          : contactContent.deliveryError,
      );
    }
  }

  const isLoading = status === "loading";

  return (
    <article className="glass contact-card">
      <header className="contact-card__header">
        <h3>{contactContent.formTitle}</h3>
      </header>
      {status === "success" ? (
        <p className="contact-card__success" aria-live="polite">
          {feedback}
        </p>
      ) : (
        <form
          className="contact-card__form"
          onSubmit={handleSubmit}
          role="form"
          aria-label={contactContent.formTitle}
        >
          <p className="contact-card__required">{contactContent.requiredNote}</p>
          {contactFields.map((field) => (
            <label key={field.id} htmlFor={`contact-${field.id}`}>
              {field.label}
              <input
                id={`contact-${field.id}`}
                name={field.id}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                disabled={isLoading}
              />
            </label>
          ))}
          <label htmlFor={`contact-${messageField.id}`}>
            {messageField.label}
            <textarea
              id={`contact-${messageField.id}`}
              name={messageField.id}
              rows={5}
              required
              disabled={isLoading}
            />
          </label>
          <button className="button button--primary" type="submit" disabled={isLoading}>
            {isLoading ? contactContent.loadingLabel : contactContent.submitLabel}
          </button>
          {status === "error" ? (
            <p className="contact-card__error" aria-live="polite">
              {feedback}
            </p>
          ) : null}
        </form>
      )}
      <nav className="contact-card__socials" aria-label="Social links">
        {socialLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
            <SocialIcon name={link.icon} />
          </a>
        ))}
      </nav>
    </article>
  );
}
