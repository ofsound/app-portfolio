"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const themes = [
    { id: "light", label: "Light" },
    { id: "dark", label: "Dark" },
    { id: "alt", label: "Alt" },
  ] as const;

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setMounted(true);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!mounted) {
    return <div className="h-10 w-44 rounded-xl border border-border-subtle bg-shell" />;
  }

  const activeTheme = theme === "light" || theme === "dark" || theme === "alt" ? theme : "dark";

  return (
    <div
      className="inline-flex rounded-xl border border-border-subtle bg-shell p-1"
      aria-label="Theme mode"
      role="group"
    >
      {themes.map(({ id, label }) => {
        const isActive = activeTheme === id;

        return (
          <button
            key={id}
            type="button"
            onClick={() => setTheme(id)}
            className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
              isActive
                ? "border border-control-secondary-border bg-control-secondary text-control-secondary-text"
                : "text-text-secondary hover:bg-control-ghost-hover hover:text-text"
            }`}
            aria-pressed={isActive}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
