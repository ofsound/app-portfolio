# Agent Instructions for app-portfolio

## On Session Start

1. Read all `.cursor/rules/*.mdc` files to load project conventions, stack details, and verification steps.
2. Apply the behavioral guidelines below. Merge with project-specific instructions as needed.

Behavioral guidelines to reduce common LLM coding mistakes.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

---

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

---

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

---

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

---

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## Project Stack

- **Framework:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS v4 (see `.cursor/rules/tailwind.mdc`)
- **State:** React state (useState, useReducer) and context; no global store by default

Project-specific rules — import order, Tailwind conventions, React/Next.js patterns, post-edit checks — are in `.cursor/rules/`.

---

## MCP Tools

### Next.js DevTools MCP

Use for Next.js questions and documentation:

- **`nextjs_init`** — Call FIRST at session start to load Next.js context and doc requirements
- **`nextjs_docs`** — Fetch official Next.js docs (read `nextjs-docs://llms-index` first for correct paths)
- **`nextjs_index`** — Discover running Next.js dev servers and available MCP tools
- **`nextjs_call`** — Invoke MCP tools on a running Next.js server (errors, routes, cache, etc.)
- **`browser_eval`** — Load and verify pages in a real browser (detect runtime/hydration issues)
- **`upgrade_nextjs_16`** — Guide for upgrading to Next.js 16
- Do **not** use playground links for code written to project files
