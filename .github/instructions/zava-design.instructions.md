---
name: Zava Design System
description: Corporate website design guidelines for Zava smart materials brand - premium, futuristic, data-driven aesthetic
applyTo: "**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css, **/*.scss, **/*.html"
---

# Zava Corporate Website Design & Build Guidelines

## Brand Essence & Experience Goals

Zava is a premium, technology-forward smart materials company. The website must feel:

- **Futuristic, engineered, and intelligent**
- **Athletic yet enterprise-grade**
- **Minimal, confident, and data-driven**
- Comparable in feel to high-end automotive (Mercedes-style) tech branding rather than lifestyle fashion

The site communicates that **intelligence is woven into materials**, not layered on top.

### Tone

- Confident, not hype-driven
- Technical, but readable
- Performance-focused
- Forward-looking

### Primary Tagline

**"Go Ahead."**

---

## Site Structure (Information Architecture)

### Primary Top Navigation

```
HOME
ZAVACORE
  ├─ Field (B2C)
  ├─ Systems (B2B)
  └─ Nano
PRODUCTS
RESOURCES
ABOUT
GO AHEAD
```

Navigation should be flat, visible, fixed, with subtle transparency on scroll (floating over hero imagery).

---

## Color Palette (Hard Requirements)

Use **ONLY** these core colors as primary UI tokens:

| Name                   | Hex       | Tailwind Class        | Usage                                    |
| ---------------------- | --------- | --------------------- | ---------------------------------------- |
| White                  | `#FFFFFF` | `white`               | Backgrounds, text on dark                |
| Black                  | `#0A0C0C` | `slate-950` or custom | Primary backgrounds                      |
| Data Stream Light Blue | `#9EC9D9` | custom `data-stream`  | Accents, highlights, data overlays       |
| Data Sensor Slate      | `#183D4C` | custom `data-slate`   | Cards, panels, secondary backgrounds     |
| Data Mesh Dark Blue    | `#0D2A35` | custom `data-mesh`    | Mesh animations, lines, hover highlights |

### Color Rules

- ⚠️ **No bright saturated colors**
- ⚠️ **No gradients** unless subtle and mesh-inspired
- Use opacity variations for hierarchy (e.g., `text-white/70`)

### Tailwind Config Extensions

```js
colors: {
  'zava-black': '#0A0C0C',
  'data-stream': '#9EC9D9',
  'data-slate': '#183D4C',
  'data-mesh': '#0D2A35',
}
```

---

## Typography

Use a modern, geometric sans-serif: **Inter**, **IBM Plex Sans**, or similar.

### Type Scale

- **H1**: Large, bold, wide tracking (`text-5xl md:text-7xl font-bold tracking-wide`)
- **H2**: Medium, strong contrast (`text-3xl md:text-5xl font-semibold`)
- **Body**: Clean, readable, not editorial (`text-base md:text-lg`)

### Typography Rules

- ✅ All caps allowed for navigation and section labels
- ❌ Avoid decorative fonts
- ❌ Avoid script or serif typography

---

## Logo Usage Rules

### Logo Variants

- **Primary Logo**: Zava wordmark with circular mark
- **Sub-Logo**: Circular "Z" only

### Placement

- Top-left for navigation
- Footer repeat
- Watermarked on dark sections at very low opacity

### Spacing

- Maintain clear space = height of lowercase "v" in the wordmark
- Never crowd the logo with text or imagery

---

## Hero Section Requirements

### Purpose

Immediately communicate smart mesh intelligence

### Composition

- Full-bleed, dark background (`bg-zava-black`)
- Animated or static hexagonal graphene mesh flowing across screen
- Electric blue data streams moving through mesh (`data-stream` color)

### Foreground Text

```
Weaving the future with intelligent fabric
Go Ahead.
```

### CTA Button

- "Explore ZavaCore"
- Subtle outline button in Data Stream Blue
- `border border-data-stream text-data-stream hover:bg-data-stream/10`

### Motion Requirements

If animations are used:

- ✅ Slow
- ✅ Subtle
- ✅ Physics-inspired (flow, pulse, wave)
- ❌ No fast parallax

---

## Imagery Standards (Strict)

### Allowed Imagery Themes

#### A. Graphene / Mesh Visuals (Abstract)

- Hexagonal mesh patterns
- Light flowing across surfaces
- Data points embedded in fabric
- Close-ups of textures
- **Use as**: Section dividers, backgrounds, product feature highlights

#### B. Product + Data Overlay Imagery

- Athletic products with transparent HUD-style overlays
- Data readouts: Sprint speed, Force, Pressure distribution, Temperature
- Wireframe elements
- Semi-transparent UI overlays
- **HUD color must match `data-stream` (#9EC9D9)**

#### C. Industrial / Manufacturing Scenes

- Robotics
- Fabric processing lines
- Clean, modern factories
- Rolls of smart mesh
- Shot cleanly, no clutter, no busy backgrounds

### Forbidden Imagery

- 🚫 Stock lifestyle photos
- 🚫 Smiling people posing
- 🚫 Over-saturated sports photography
- 🚫 Warm editorial filters

---

## ZavaCore Product Sections

### ZAVACORE FIELD (B2C)

**Design tone**: Performance wearable, consumer friendly but technical

**Structure**:

- Product card grid
- Clear separation between Premium and Elite tiers
- Each card includes: Product image, subtle mesh background, feature list, "Learn More" link

### ZAVACORE SYSTEMS (B2B)

**Design tone**: Enterprise tech platform, precision, control, data dominance

**Visuals**:

- Darker backgrounds
- More data overlays
- Clear differentiation from Field
- Include: Smart Jerseys, Smart Cleats, SaaS Platform preview panels

### ZAVACORE NANO

**Design tone**: R&D, advanced materials science, lab-like aesthetic

**Visual elements**:

- Macro graphene lattice structures
- Micro-sensor graphics
- Layered diagrams

---

## UI Components Rules

### Buttons

```jsx
// Primary outline button
className="rounded-md border border-data-stream text-data-stream px-6 py-3
           hover:bg-data-stream/10 transition-colors duration-300"

// Solid button (rare)
className="rounded-md bg-data-stream text-zava-black px-6 py-3
           hover:bg-data-stream/90 transition-colors duration-300"
```

- Rounded but minimal (`rounded-md`)
- Outline style preferred
- Hover: glow or border color shift only

### Cards

```jsx
className="bg-data-slate/80 backdrop-blur-sm p-6
           shadow-lg shadow-black/20"
```

- Slight elevation
- Sharp edges (no excessive rounding)
- Dark background with contrast text

### Icons

- ✅ Line icons only
- ❌ No filled icons
- Consistent stroke weight (1.5-2px)

---

## Data Visualization Aesthetic

When charts or metrics appear:

- Minimal axes
- No gridlines unless necessary
- Use `data-stream` (#9EC9D9) for active values
- Dark slate backgrounds
- Clean, technical appearance

---

## Motion & Interaction Rules

### Allowed

- Hover fades (`transition-opacity duration-300`)
- Subtle glow (`hover:shadow-data-stream/20`)
- Slow mesh motion
- Parallax at <10% movement

### Not Allowed

- ❌ Bounce animations
- ❌ Elastic easing
- ❌ Game-like effects
- ❌ Fast transitions

### Recommended Transitions

```css
transition-all duration-300 ease-out
transition-colors duration-200 ease-in-out
```

---

## Footer Requirements

### Include

- Logo (sub-logo allowed)
- Navigation links
- Facilities (regions only)
- Ultra-minimal copyright line

### Styling

- Dark background (`bg-zava-black`)
- Muted text (`text-white/60`)
- Minimal spacing, clean layout

---

## Overall Build Principles

- ✅ **Mobile-first** responsive design
- ✅ **Large whitespace** for breathing room
- ✅ **Strong hierarchy** with clear visual weight
- ✅ **Performance-optimized** (lazy loading, optimized images)
- ✅ **No visual noise** - every element has purpose

---

## Summary Instruction

Build a **premium, dark-themed, data-centric, future-forward** website that visually conveys smart materials, embedded intelligence, and athletic performance at enterprise scale.

**Everything should feel engineered — not styled.**

When generating components:

1. Default to dark backgrounds (`bg-zava-black` or `bg-data-slate`)
2. Use `data-stream` for accents and interactive elements
3. Maintain generous spacing (`py-16 md:py-24` for sections)
4. Keep typography clean and technical
5. Avoid decorative elements that don't serve function

