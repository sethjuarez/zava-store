---
name: create-route
description: Creates a new React Router v7 route with loader, action, component, error boundary, and TypeScript types
argument-hint: "route-path [options]"
agent: edit
---

# Create React Router Route

Create a new React Router v7 Framework Mode route with the following structure:

## Instructions

1. **Determine the route path and file location** from the user's input (e.g., `/products/:id` → `app/routes/products.$id.tsx`)

2. **Update `app/routes.ts`** to add the new route configuration:

   - Use appropriate route helper (`route`, `index`, `layout`, `prefix`)
   - Place in correct position in route hierarchy
   - Add proper TypeScript types with `satisfies RouteConfig`

3. **Create the route file** with:

   - Type-safe imports from `./+types/[route-name]`
   - `loader` function for data fetching (if needed)
   - `action` function for mutations (if needed)
   - Default component export with proper typing
   - `ErrorBoundary` export for error handling
   - `HydrateFallback` if using client loader

4. **Follow these patterns**:
   - Server-side `loader` for SSR/pre-rendering data
   - Type parameters correctly: `Route.LoaderArgs`, `Route.ComponentProps`, etc.
   - Handle errors with proper HTTP status codes
   - Use `Form` component for mutations
   - Mobile-first Tailwind styling
   - Dark mode support with `dark:` variants

## Example Template

```typescript
// app/routes/example.tsx
import { redirect } from "react-router";
import type { Route } from "./+types/example";

export async function loader({ params, request }: Route.LoaderArgs) {
  const data = await fetchData(params.id);

  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }

  return { data };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  // Handle form submission
  return redirect("/success");
}

export default function Component({ loaderData }: Route.ComponentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {loaderData.data.title}
      </h1>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 dark:text-red-400">
          Error
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {error instanceof Response ? error.statusText : error.message}
        </p>
      </div>
    </div>
  );
}
```

## User Input

${input:routePath:Enter route path (e.g., /products/:id)}

