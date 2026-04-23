"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder—wire up to your email service or API later
    setSubmitted(true);
  };

  return (
    <section>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-faint">
        Send a message
      </h2>

      {submitted ? (
        <p className="rounded-lg bg-success-surface px-4 py-3 text-success">
          Thanks! Your message has been sent. I&apos;ll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-text-secondary"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-input-border bg-input px-4 py-2.5 text-text placeholder:text-input-placeholder focus-visible:border-focus-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring/30"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-text-secondary"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-input-border bg-input px-4 py-2.5 text-text placeholder:text-input-placeholder focus-visible:border-focus-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring/30"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-text-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full resize-none rounded-lg border border-input-border bg-input px-4 py-2.5 text-text placeholder:text-input-placeholder focus-visible:border-focus-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring/30"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-control-primary px-5 py-2.5 text-sm font-medium text-control-primary-text transition-opacity hover:opacity-90"
          >
            Send
          </button>
        </form>
      )}
    </section>
  );
}
