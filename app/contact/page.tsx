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
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
        Contact
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-10">
        Drop a line or find me elsewhere on the web.
      </p>

      <div className="flex flex-col gap-12">
        <ContactForm />

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
            Elsewhere
          </h2>
          <ul className="flex flex-wrap gap-6">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors"
              >
                Twitter / X
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors"
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
