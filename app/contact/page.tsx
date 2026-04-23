import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch or find me elsewhere online.",
};

// Server Component with a client form inside (ContactForm handles interactivity)
export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text">
        Contact
      </h1>
      <p className="mb-10 text-text-secondary">
        Drop a line or find me elsewhere on the web.
      </p>

      <div className="flex flex-col gap-12">
        <ContactForm />

        <section>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-faint">
            Elsewhere
          </h2>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline underline-offset-4 transition-colors hover:text-link-hover"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline underline-offset-4 transition-colors hover:text-link-hover"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline underline-offset-4 transition-colors hover:text-link-hover"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
