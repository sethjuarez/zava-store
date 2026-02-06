---
description: "React Router Framework + Tailwind development standards and instructions"
applyTo: "**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css"
---

# React Router v7 + Tailwind 4

- **Stack**: React Router v7 Framework Mode, Tailwind CSS 4, TypeScript strict
- **Routing**: Configure in `app/routes.ts`, route files in `app/routes/`
- **Route modules**: Export `loader`, `action`, `meta`, `ErrorBoundary`, default component
- **Types**: Import from `./+types/[route-name]` (auto-generated)
- **Styling**: Mobile-first (`sm:`, `md:`, `lg:` breakpoints), utility-first, compose via React components not `@apply`
- **Navigation**: `<Link>`, `<NavLink>`, `<Form>` for progressive enhancement
- **Performance**: Auto code-splitting per route, server loaders excluded from client bundle
- **Validation**: Run `npm run typecheck` regularly

## Project Structure

```
app/
├── root.tsx          # Root layout (html/head/body shell)
├── routes.ts         # Route config
├── app.css           # Global styles + Tailwind
├── routes/
│   └── home.tsx      # Route modules
└── +types/           # Auto-generated (gitignored)
```

