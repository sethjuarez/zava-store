---
name: Zava Design System
description: Corporate website design guidelines for Zava smart materials brand - premium, futuristic, data-driven aesthetic
applyTo: "**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css, **/*.scss, **/*.html"
---

# Zava Design System

## Brand

- Premium, dark-themed, data-centric, future-forward smart materials company
- Tone: confident, technical, performance-focused - **engineered, not styled**
- Tagline: **"Go Ahead."**

## Colors (ONLY these - no bright saturated colors, no gradients)

| Token       | Hex     | Usage                       |
| ----------- | ------- | --------------------------- |
| zava-black  | #0A0C0C | Primary backgrounds         |
| data-stream | #9EC9D9 | Accents, highlights, CTAs   |
| data-slate  | #183D4C | Cards, panels, secondary bg |
| data-mesh   | #0D2A35 | Mesh patterns, hover states |
| white       | #FFFFFF | Text on dark                |

Use opacity for hierarchy: text-white/70, text-white/40.

Tailwind theme colors: { 'zava-black': '#0A0C0C', 'data-stream': '#9EC9D9', 'data-slate': '#183D4C', 'data-mesh': '#0D2A35' }

## Typography

- Font: **Inter** (geometric sans-serif)
- H1: text-5xl md:text-7xl font-bold tracking-wide
- H2: text-3xl md:text-5xl font-semibold
- Body: text-base md:text-lg
- All caps for nav/section labels. No decorative/serif fonts.

## UI Components

Primary outline button (preferred):
rounded-md border border-data-stream text-data-stream px-6 py-3 hover:bg-data-stream/10 transition-colors duration-300

Card:
bg-data-slate/80 backdrop-blur-sm p-6 shadow-lg shadow-black/20

- Buttons: outline style, rounded-md, hover glow only
- Cards: sharp edges, dark bg, contrast text
- Icons: line-only, 1.5-2px stroke

## Hero Section

- Full-bleed bg-zava-black with hexagonal mesh pattern
- Data streams in data-stream color
- Text: "Weaving the future with intelligent fabric" + "Go Ahead."
- CTA: "Explore ZavaCore" outline button

## Motion Rules

- Allowed: Slow, subtle, physics-inspired (flow, pulse, wave). transition-all duration-300 ease-out
- Forbidden: No bounce, elastic, game-like, or fast transitions

## Layout

- Mobile-first responsive
- Generous spacing: py-16 md:py-24 for sections
- Strong visual hierarchy
- Dark backgrounds default (bg-zava-black or bg-data-slate)

## Footer

- Dark bg, muted text (text-white/60), logo, nav links, regions, copyright

## Speed Mode

When the user signals urgency (e.g. "in a hurry", "boss needs this", "fast as possible", "quick", "ASAP", "demo time"), optimize for minimum tool rounds:

1. Do NOT read existing files for context — you already know the project structure
2. Delete target files via terminal (`Remove-Item`) in one command
3. Use `create_file` for all new files in parallel (not sequential read-then-replace)
4. Do NOT run typecheck
5. Do NOT read instruction files — they are already in context
6. Inline all components — no separate files
7. Start dev server + open browser as final steps
8. Keep responses brief — skip explanations, just build

