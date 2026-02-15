export interface Project {
  id: string;
  name: string;
  description: string;
  status?: "live" | "in-progress" | "archived";
}

// Project data - in a real app this could come from a CMS or API
export const projects: Project[] = [
  {
    id: "work-log",
    name: "Work Log",
    description:
      "A time-tracking and productivity dashboard that helps you visualize where your hours go. Log tasks, tag projects, and generate weekly reports with clean charts and exportable summaries.",
    status: "live",
  },
  {
    id: "digital-domain",
    name: "Digital Domain",
    description:
      "A personal knowledge base and link aggregator for curating resources across the web. Save articles, organize by domains or topics, and build a searchable archive of everything you've found worth keeping.",
    status: "in-progress",
  },
  {
    id: "sets-and-reps",
    name: "Sets and Reps",
    description:
      "Workout logging meets analytics. Track your lifts, sets, and reps across routines, with built-in progression tracking and plate calculators. Designed for lifters who want data without the bloat.",
    status: "live",
  },
  {
    id: "sets-and-reps-reports",
    name: "Sets and Reps Reports",
    description:
      "The analytics companion to Sets and Reps. Visualize volume trends, identify weak points, and compare performance across time periods. Export beautiful PDF reports for your coach or training journal.",
    status: "in-progress",
  },
  {
    id: "snake-oil",
    name: "Snake Oil",
    description:
      "A satirical take on wellness culture—browse and rate dubious health products with a community of skeptics. Part critique, part archive of the strangest stuff sold in the name of \"optimization.\"",
    status: "archived",
  },
  {
    id: "timed-sets",
    name: "Timed Sets",
    description:
      "Rest timer and interval trainer for strength training. Set work/rest ratios, track rounds, and stay focused without constantly checking your phone. Minimal UI, maximum utility.",
    status: "live",
  },
  {
    id: "vite-machine",
    name: "Vite Machine",
    description:
      "Rapid project scaffolding with curated templates. Spin up new React, Svelte, or vanilla projects with sensible defaults, ESLint, and Tailwind preconfigured. Less setup, more shipping.",
    status: "in-progress",
  },
  {
    id: "preset-machine",
    name: "Preset Machine",
    description:
      "Manage and share configuration presets across your toolchain. Save VS Code themes, ESLint configs, Tailwind setups—version them, fork them, and sync them across machines.",
    status: "in-progress",
  },
  {
    id: "tempo-control",
    name: "Tempo Control",
    description:
      "Metronome and tempo trainer for musicians and athletes. Dial in BPM, set time signatures, and practice with visual and audio cues. Supports subdivision coaching for rhythm work.",
    status: "live",
  },
  {
    id: "this-app",
    name: "This App",
    description:
      "This very portfolio—built with Next.js App Router to showcase the projects above. Server-rendered pages, static generation, and a clean foundation for iteration.",
    status: "in-progress",
  },
];
