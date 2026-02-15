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
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">Recent Work</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-12 text-lg">Apps and tools I&apos;ve built or am actively developing. A mix of fitness, productivity, and developer utilities.</p>

      <ul className="flex flex-col gap-10">
        {projects.map((project) => (
          <li key={project.id} className="group border-b border-zinc-200 dark:border-zinc-800 pb-10 last:border-0">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{project.name}</h2>
              {project.status && (
                <span
                  className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.status === "live" ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400" : project.status === "in-progress" ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" : "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
                  }`}>
                  {project.status === "live" ? "Live" : project.status === "in-progress" ? "In Progress" : "Archived"}
                </span>
              )}
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
