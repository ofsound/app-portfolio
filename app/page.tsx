import type {Metadata} from "next";
import {projects} from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Recent apps and tools—fitness, productivity, and developer utilities.",
};

// Server Component by default—rendered on the server (or statically at build)
// (or at build time for static optimization). No "use client" = server-side.
export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight text-text">Recent Work</h1>
      <p className="mb-12 text-lg text-text-secondary">
        Apps and tools I&apos;ve built or am actively developing. A mix of
        fitness, productivity, and developer utilities.
      </p>

      <ul className="flex flex-col gap-10">
        {projects.map((project) => (
          <li
            key={project.id}
            className="group border-b border-border-subtle pb-10 last:border-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-medium text-text transition-colors group-hover:text-link">
                {project.name}
              </h2>
              {project.status && (
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.status === "live"
                      ? "bg-success-surface text-success"
                      : project.status === "in-progress"
                        ? "bg-warning-surface text-warning"
                        : "border border-border-subtle bg-surface-subtle text-text-secondary"
                  }`}
                >
                  {project.status === "live" ? "Live" : project.status === "in-progress" ? "In Progress" : "Archived"}
                </span>
              )}
            </div>
            <p className="mt-2 leading-relaxed text-text-secondary">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
