import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about me and what I build.",
};

// Server Component—content is rendered on the server
export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">About</h1>

      <div className="max-w-none flex flex-col gap-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <p>I&apos;m a developer who builds tools and apps that solve real problems— whether that&apos;s tracking a workout, organizing scattered links, or speeding up project setup. I care about clean interfaces, sensible defaults, and shipping things that actually work.</p>

        <p>
          My background spans full-stack web development, with a focus on React, TypeScript, and modern frameworks like Next.js. I&apos;m drawn to projects that sit at the intersection of utility and craft: things that are useful first, but also a pleasure to use. When I&apos;m not coding, I&apos;m
          usually lifting weights, reading, or tinkering with some new side project.
        </p>

        <p>This portfolio is a snapshot of what I&apos;ve been working on lately—some projects are live, others are in progress, and a few have been retired. Feel free to reach out if you&apos;d like to connect or collaborate on a project.</p>
      </div>
    </div>
  );
}
