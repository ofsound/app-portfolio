import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const targets = ["app", "components", "lib"];
const sourceExtensions = new Set([".ts", ".tsx", ".css"]);
const failures = [];

const requiredFiles = [
  {
    path: "app/layout.tsx",
    checks: [
      {
        pattern: /import "\.\/semantic-theme\.generated\.css";/,
        message: "Root layout must import ./semantic-theme.generated.css.",
      },
      {
        pattern: /attribute="data-theme"/,
        message: "ThemeProvider must use attribute=\"data-theme\".",
      },
      {
        pattern: /themes=\{\["light", "dark", "alt"\]\}/,
        message: "ThemeProvider must expose light, dark, and alt themes.",
      },
    ],
  },
];

const disallowedPatterns = [
  {
    pattern:
      /\b(?:zinc|neutral|slate|gray|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950)\b/,
    message: "Raw Tailwind palette classes are not allowed in semantic-tokenized UI.",
  },
  {
    pattern: /\b(?:text|bg|border|ring|placeholder|fill|stroke)-(?:black|white|transparent|current)\b/,
    message: "Direct non-semantic color utilities are not allowed in semantic-tokenized UI.",
  },
  {
    pattern: /(?:^|[\s"'`])(?:dark|light):(?!data-theme)(?:text|bg|border|ring|placeholder|fill|stroke)-/m,
    message: "Color-specific light:/dark: utilities are not allowed for in-scope UI.",
  },
  {
    pattern: /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|\boklch\(/,
    message: "Raw color literals are not allowed outside generated theme CSS.",
  },
];

async function walk(relativeDir) {
  const absoluteDir = path.join(root, relativeDir);
  const entries = await readdir(absoluteDir, { withFileTypes: true });

  for (const entry of entries) {
    const relativePath = path.join(relativeDir, entry.name);

    if (entry.isDirectory()) {
      await walk(relativePath);
      continue;
    }

    if (!sourceExtensions.has(path.extname(entry.name))) {
      continue;
    }

    if (relativePath === "app/semantic-theme.generated.css") {
      continue;
    }

    const content = await readFile(path.join(root, relativePath), "utf8");

    for (const { pattern, message } of disallowedPatterns) {
      if (pattern.test(content)) {
        failures.push(`${relativePath}: ${message}`);
      }
    }
  }
}

for (const { path: relativePath, checks } of requiredFiles) {
  const content = await readFile(path.join(root, relativePath), "utf8");
  for (const { pattern, message } of checks) {
    if (!pattern.test(content)) {
      failures.push(`${relativePath}: ${message}`);
    }
  }
}

for (const target of targets) {
  await walk(target);
}

if (failures.length > 0) {
  console.error("semantic:check failed\n");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("semantic:check passed");
