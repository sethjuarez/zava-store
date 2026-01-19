---
description: "React Router Framework + Tailwind development standards and instructions"
applyTo: "**/*.tsx, **/*.ts, **/*.jsx, **/*.js, **/*.css"
---

# React Router Framework + Tailwind Development Instructions

Instructions for high-quality React Router applications with Tailwind CSS styling and TypeScript using Framework Mode.

## Project Context

- React Router v7 (Framework Mode)
- TypeScript for type safety
- Tailwind CSS for styling
- File-based or config-based routing
- Server-side rendering (SSR) capabilities
- Type-safe loaders and actions

## Creating a New Project

### Create in Current Directory

To create a React Router project in the current directory:

```bash
# Create project in current directory (skip prompts, don't initialize git)
npx create-react-router@latest . -y --no-git-init

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

**Important:** Always use `-y --no-git-init` when creating in an existing git repository to avoid nested git repos and skip prompts.

### Create in New Directory

Alternatively, to create a new project in a new directory:

```bash
# Create a new project
npx create-react-router@latest my-react-router-app -y

# Navigate to the project directory
cd my-react-router-app

# Start the development server
npm run dev
```

### Using Alternative Templates

React Router provides several ready-to-deploy templates:

```bash
# Use a specific template
npx create-react-router@latest my-app -y --template remix-run/react-router-templates/<template-name>
```

Browse available templates at: https://github.com/remix-run/react-router-templates

### Project Structure After Creation

```
my-react-router-app/
├── app/
│   ├── root.tsx              # Root layout
│   ├── routes.ts             # Route configuration
│   ├── routes/
│   │   └── home.tsx          # Home route
│   └── app.css               # Global styles
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── react-router.config.ts
```

### Next Steps After Project Creation

1. **Configure Routes**: Edit `app/routes.ts` to define your application routes
2. **Add Tailwind Utilities**: Tailwind CSS is pre-configured and ready to use
3. **Create Route Modules**: Add new route files in `app/routes/`
4. **Set Up Layouts**: Use nested routes for shared UI components
5. **Configure TypeScript**: Types are auto-generated in `app/+types/`

## Development Standards

### Architecture

- Framework mode with server and client loaders
- Route modules with loaders, actions, and components
- Nested routes with layouts and outlets
- Proper error boundaries per route
- Type-safe route parameters and loader data
- Static pre-rendering for optimal performance

### Routing Configuration

- Configure routes in `app/routes.ts` with clear patterns
- Use nested routes for logical UI hierarchy
- Leverage layout routes for shared UI without URL segments
- Implement index routes for default child content
- Use dynamic segments (`:param`) for parameterized routes
- Apply splat routes (`*`) for catch-all scenarios
- Group related routes with `prefix` for cleaner organization

### Route Modules

- Export `loader` for server-side data fetching
- Export `clientLoader` for client-side only data
- Export `action` for form submissions and mutations
- Export default component for route rendering
- Export `ErrorBoundary` for route-level error handling
- Export `HydrateFallback` for loading states during hydration
- Use type-safe imports from `./+types/[route-name]`

### TypeScript

- Strict mode enabled
- Use auto-generated types from `./+types/*`
- Leverage `Route.LoaderArgs`, `Route.ComponentProps`, `Route.ActionArgs`
- Type loader return values for automatic inference
- Proper error handling with type guards
- Runtime validation with Zod when needed

### React Component Design

- Use functional components with hooks as the primary pattern
- Follow single responsibility principle - components should do one thing well
- Implement component composition over complex prop drilling
- Use descriptive, consistent naming (PascalCase for components)
- Keep components small and focused
- Separate presentational and container logic
- Design for reusability and testability

### React Hooks Best Practices

- **useState**: For local component state
- **useEffect**: Use with proper dependency arrays to avoid infinite loops
- **useMemo**: Memoize expensive computations, use judiciously
- **useCallback**: Memoize callback functions when passed as props
- **useRef**: Access DOM elements and store mutable values without re-renders
- **Custom Hooks**: Extract reusable stateful logic (prefix with `use`)
- Always include cleanup functions in effects to prevent memory leaks
- Follow Rules of Hooks: only call at top level, only in function components

### Data Loading Patterns

- **Server Loading**: Use `loader` for server-side data (SSR, pre-rendering)
- **Client Loading**: Use `clientLoader` for browser-only data fetching
- **Hybrid**: Combine both loaders with `serverLoader()` function
- **Static**: Pre-render routes in `react-router.config.ts`
- Automatic serialization/deserialization of loader data
- Support for promises, maps, sets, dates, and primitives
- Loader functions are removed from client bundles

### Data Mutations

- Use `action` functions for form submissions
- Handle POST, PUT, DELETE operations in actions
- Return data or redirect from actions
- Leverage `Form` component for progressive enhancement
- Use `useNavigation` for pending states
- Implement optimistic UI with `useFetcher`

### AWLWAYS Check your work

- use TypeScript compiler for type errors
- test loaders and actions with various data scenarios
- verify route navigation and URL structure
- ensure responsive design with Tailwind CSS
- use `npm run typecheck` regularly
- perform code reviews for best practices adherence

### Styling with Tailwind CSS

#### Utility-First Approach

- Build UIs by composing utility classes directly in markup
- Avoid premature abstraction - utilities provide flexibility and speed
- Design with constraints using Tailwind's predefined design system
- Utilities enable hover, focus, and responsive states inline
- Your CSS stops growing - utilities are infinitely reusable

#### Responsive Design (Mobile-First)

- **Always start with mobile layout first, then layer responsive variants**
- Use unprefixed utilities for mobile (base styles)
- Add breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`) for larger screens
- Example: `<div class="text-center sm:text-left lg:text-right">`
- Don't use `sm:` to target mobile - `sm:` means "at small breakpoint and above"
- Stack variants for breakpoint ranges: `md:max-lg:flex-col`

#### Breakpoint Reference

- `sm`: 40rem (640px)
- `md`: 48rem (768px)
- `lg`: 64rem (1024px)
- `xl`: 80rem (1280px)
- `2xl`: 96rem (1536px)

#### State Variants

- Prefix utilities with state: `hover:`, `focus:`, `active:`, `disabled:`
- Stack variants: `hover:disabled:bg-gray-300`
- Group states: `group-hover:`, `group-focus:` for parent-driven styling
- Complex conditions: `dark:lg:hover:bg-indigo-600`

#### Dark Mode

- Use `dark:` prefix for dark mode styles: `bg-white dark:bg-gray-800`
- Provide both light and dark variants explicitly
- Use separate utilities for each mode (classes never contain both)
- Configure dark mode detection via class or media query
- Support system preferences with `@media (prefers-color-scheme: dark)`

#### Container Queries

- Use `@container` to mark container elements
- Apply container variants: `@sm:`, `@md:`, `@lg:`, etc.
- Enables component-level responsive design
- More portable than viewport-based breakpoints
- Example: `<div class="@container"><div class="@md:flex-row">`
- Named containers: `@container/main` with `@md/main:flex-col`

#### Arbitrary Values

- Use `[]` syntax for one-off values: `bg-[#316ff6]`, `w-[762px]`
- Useful for brand colors, specific measurements
- Works with calc: `max-h-[calc(100dvh-4rem)]`
- Set CSS variables: `[--spacing:1rem]`
- Prefer theme values, use arbitrary sparingly

#### Managing Duplication

- **Use loops**: Render repeated elements with `.map()` - write classes once
- **Multi-cursor editing**: Edit duplicated classes simultaneously in one file
- **Create components**: Extract reusable patterns into React components
- **Custom CSS (last resort)**: Use `@layer components` with theme variables
  ```css
  @layer components {
    .btn-primary {
      @apply rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700;
    }
  }
  ```

#### When to Use Inline Styles

- Dynamic values from database/API: `style={{ backgroundColor: color }}`
- Complex calculations difficult to read as class names
- CSS variables with utility references:
  ```jsx
  <div style={{ "--color": dynamicColor }} className="bg-[--color]" />
  ```

#### Design Consistency

- Use Tailwind's design system (colors, spacing, typography)
- Maintain consistent color palette across the app
- Follow spacing scale (0.25rem increments)
- Semantic HTML structure with utility styling
- Component-scoped styles only when necessary

### State Management

- **Server State**: Use loaders for server-fetched data
- **Client State**: Use `useState` for local component state
- **Complex State**: Use `useReducer` for complex state logic
- **Shared State**: Use `useContext` for state across component trees
- **Route State**: Access with `useLoaderData` and `useActionData`
- **External Libraries**: Consider React Query/SWR for advanced server state
- Implement proper loading and error states
- Use optimistic updates with `useFetcher` for better UX

### Navigation

- Use `<Link>` for client-side navigation
- Use `<NavLink>` for active link styling
- Programmatic navigation with `useNavigate`
- `<Form>` component for mutations
- Prefetching with `<Link prefetch="intent">`
- Nested navigation with `<Outlet>`

### Performance

- Automatic code splitting per route
- Route-based lazy loading with `React.lazy` and `Suspense`
- Static pre-rendering for known paths
- Streaming with Suspense boundaries
- Optimized bundle sizes (server code excluded)
- **Component Optimization**: Use `React.memo` for expensive components
- **Callback Optimization**: Use `useCallback` for functions passed as props
- **Computation Optimization**: Use `useMemo` for expensive calculations
- Image optimization with modern formats
- Font optimization strategies
- Profile with React DevTools to identify bottlenecks
- Implement virtual scrolling for large lists

### Error Handling

- Route-level `ErrorBoundary` exports
- Global error handling in `root.tsx`
- Proper HTTP status codes (404, 500, etc.)
- User-friendly error messages
- Error recovery strategies
- Development vs production error displays

### Security

- Input validation in loaders and actions
- Sanitize user input to prevent XSS attacks
- CSRF protection built-in with Form
- Rate limiting implementation
- Secure session management
- Environment variable protection
- Use HTTPS for all external API calls
- Avoid storing sensitive data in localStorage

### Accessibility

- Use semantic HTML elements (`<nav>`, `<main>`, `<article>`, etc.)
- Implement proper ARIA attributes and roles when needed
- Ensure keyboard navigation works for all interactive elements
- Provide alt text for images and descriptive labels
- Implement proper color contrast ratios (WCAG AA minimum)
- Test with screen readers and accessibility tools
- Use `focus-visible:` for keyboard-only focus styles
- Ensure form inputs have associated labels

### File Structure

```
app/
├── root.tsx              # Root layout component
├── routes.ts             # Route configuration
├── routes/
│   ├── _index.tsx       # Home page (index route)
│   ├── about.tsx        # /about route
│   ├── dashboard.tsx    # Parent route with <Outlet>
│   ├── dashboard.home.tsx        # /dashboard child
│   ├── dashboard.settings.tsx    # /dashboard/settings child
│   └── products/
│       ├── $productId.tsx        # Dynamic segment
│       └── _layout.tsx           # Layout route
└── +types/              # Auto-generated types (gitignored)
```

### Testing

- Unit tests for utility functions
- Integration tests for loaders and actions
- Component tests with proper data mocking
- E2E tests for critical user flows
- Test error boundaries
- Mock loader data appropriately

## Implementation Process

1. Plan route hierarchy and URL structure
2. Configure routes in `app/routes.ts`
3. Define types and interfaces
4. Implement loaders for data fetching
5. Implement actions for mutations
6. Build route components with proper types
7. Add error boundaries
8. Implement responsive Tailwind styling
9. Add loading states and fallbacks
10. Optimize with pre-rendering where applicable
11. Write tests

## Best Practices

### React Router

- Keep route modules focused and cohesive
- Use nested routes for shared layouts
- Prefer server loaders for better SEO and performance
- Implement proper error boundaries at each level
- Use type-safe route parameters everywhere
- Validate data in loaders before rendering
- Return proper HTTP status codes
- Use progressive enhancement with `<Form>`
- Implement loading states for better UX
- Pre-render static content when possible
- Keep client bundles small (server code auto-removed)
- Use fetchers for non-navigation mutations
- Implement optimistic UI for better perceived performance

### Tailwind CSS

- **Start mobile-first**: Base styles without prefixes, add breakpoints up
- **Avoid conflicting utilities**: Only apply one class per CSS property
- **Use components for reuse**: Extract repeated patterns to React components
- **Leverage design system**: Use theme values before arbitrary values
- **Stack variants mindfully**: Combine states logically (`hover:focus:ring-2`)
- **Container queries for components**: Use `@container` for portable designs
- **Dark mode everywhere**: Always provide `dark:` variants for themed UI
- **Prefer composition over @apply**: Let utilities compose naturally
- **Multi-cursor for local duplication**: Edit repeated classes simultaneously
- **Arbitrary values sparingly**: Use for truly one-off cases only

## Common Patterns

- **Protected Routes**: Check auth in loader, throw redirect if unauthorized
- **Data Prefetching**: Use `<Link prefetch="intent">` for instant navigation
- **Optimistic Updates**: Use `useFetcher` with optimistic UI
- **Infinite Scroll**: Combine loaders with client-side state
- **Search/Filter**: Use URL search params with loaders
- **Multi-step Forms**: Use nested routes with shared state
- **File Uploads**: Handle in actions with proper validation
- **Real-time Updates**: Combine loaders with WebSocket/SSE

