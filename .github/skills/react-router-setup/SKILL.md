---
name: react-router-setup
description: Creates new React Router v7 Framework Mode routes with proper loaders, actions, TypeScript types, error boundaries, and follows best practices for route configuration, nested routing, and data fetching patterns.
---

# React Router Framework Mode Route Setup

This skill helps you create well-structured React Router v7 routes following Framework Mode best practices.

## What This Skill Does

- Creates new route files with proper TypeScript setup
- Configures route definitions in `app/routes.ts`
- Sets up loaders for data fetching (server and/or client)
- Creates actions for form handling and mutations
- Implements error boundaries and loading states
- Follows type-safe patterns with auto-generated types

## When to Use This Skill

Use this skill when you need to:

- Create a new route in a React Router v7 application
- Set up data loading with loaders
- Add form handling with actions
- Create nested routes with layouts
- Implement protected routes with authentication
- Set up dynamic routes with parameters

## Route Creation Checklist

### 1. Route Configuration (`app/routes.ts`)

Always update the route configuration first:

```typescript
import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  // Index route
  index("./home.tsx"),
  
  // Simple route
  route("about", "./about.tsx"),
  
  // Dynamic route
  route("products/:productId", "./products/product.tsx"),
  
  // Nested routes
  route("dashboard", "./dashboard.tsx", [
    index("./dashboard/home.tsx"),
    route("settings", "./dashboard/settings.tsx"),
  ]),
  
  // Layout routes (no URL segment)
  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),
  
  // Route prefixes
  ...prefix("admin", [
    route("users", "./admin/users.tsx"),
    route("settings", "./admin/settings.tsx"),
  ]),
] satisfies RouteConfig;
```

### 2. Basic Route Module Template

```typescript
// app/routes/[route-name].tsx
import type { Route } from "./+types/[route-name]";

// Server-side data loading
export async function loader({ params, request }: Route.LoaderArgs) {
  // Fetch data from database, API, etc.
  const data = await fetchData(params.id);
  
  // Throw redirect if needed
  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }
  
  return { data };
}

// Client-side data loading (optional)
export async function clientLoader({ params, serverLoader }: Route.ClientLoaderArgs) {
  // Option 1: Client-only data
  const data = await fetch(`/api/data/${params.id}`).then(r => r.json());
  return data;
  
  // Option 2: Enhance server data
  const serverData = await serverLoader();
  const clientData = await fetchClientData();
  return { ...serverData, ...clientData };
}

// Form handling and mutations
export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");
  
  switch (intent) {
    case "create":
      const result = await createItem(formData);
      return redirect(`/items/${result.id}`);
    
    case "update":
      await updateItem(params.id, formData);
      return { success: true };
    
    case "delete":
      await deleteItem(params.id);
      return redirect("/items");
    
    default:
      throw new Response("Invalid intent", { status: 400 });
  }
}

// Main component
export default function Component({ loaderData }: Route.ComponentProps) {
  const { data } = loaderData;
  
  return (
    <div>
      <h1>{data.title}</h1>
      {/* Your UI here */}
    </div>
  );
}

// Error boundary
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (error instanceof Response) {
    return (
      <div>
        <h1>{error.status} {error.statusText}</h1>
        <p>Something went wrong.</p>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}

// Hydration fallback (for clientLoader with hydrate: true)
export function HydrateFallback() {
  return <div>Loading...</div>;
}
```

### 3. Layout Route Template

```typescript
// app/routes/[layout-name].tsx
import { Outlet } from "react-router";
import type { Route } from "./+types/[layout-name]";

export async function loader({ request }: Route.LoaderArgs) {
  // Load shared data for all child routes
  const user = await getAuthenticatedUser(request);
  return { user };
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <nav>{/* Shared navigation */}</nav>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>{/* Shared footer */}</footer>
    </div>
  );
}
```

### 4. Protected Route Pattern

```typescript
// app/routes/protected.tsx
import { redirect } from "react-router";
import type { Route } from "./+types/protected";

export async function loader({ request }: Route.LoaderArgs) {
  const user = await getAuthenticatedUser(request);
  
  if (!user) {
    throw redirect("/login");
  }
  
  return { user };
}

export default function ProtectedRoute({ loaderData }: Route.ComponentProps) {
  return <div>Welcome, {loaderData.user.name}!</div>;
}
```

### 5. Form Handling with Progressive Enhancement

```typescript
import { Form } from "react-router";

export default function FormExample() {
  return (
    <Form method="post">
      <input type="text" name="title" required />
      <input type="hidden" name="intent" value="create" />
      <button type="submit">Submit</button>
    </Form>
  );
}
```

## Key Best Practices

1. **Type Safety**: Always import and use types from `./+types/[route-name]`
2. **Server-First**: Prefer `loader` over `clientLoader` for better SEO and performance
3. **Error Handling**: Always implement `ErrorBoundary` for graceful error handling
4. **Progressive Enhancement**: Use `<Form>` instead of `<form>` for better UX
5. **Redirects**: Use `redirect()` for navigation in loaders/actions
6. **Loading States**: Add `HydrateFallback` when using client loaders
7. **Validation**: Validate form data in actions before processing
8. **HTTP Status Codes**: Return proper status codes (404, 500, etc.)

## Common Patterns

### Optimistic UI with useFetcher

```typescript
import { useFetcher } from "react-router";

function OptimisticExample() {
  const fetcher = useFetcher();
  const isDeleting = fetcher.state !== "idle";
  
  return (
    <fetcher.Form method="post">
      <input type="hidden" name="intent" value="delete" />
      <button disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </fetcher.Form>
  );
}
```

### Prefetching for Instant Navigation

```typescript
import { Link } from "react-router";

<Link to="/products/123" prefetch="intent">
  View Product
</Link>
```

### Pre-rendering Static Routes

```typescript
// react-router.config.ts
import type { Config } from "@react-router/dev/config";

export default {
  async prerender() {
    return [
      "/",
      "/about",
      "/contact",
      // Generate from data
      ...(await getProductIds()).map(id => `/products/${id}`),
    ];
  },
} satisfies Config;
```

## File Structure

```text
app/
├── root.tsx              # Root layout
├── routes.ts             # Route configuration
├── routes/
│   ├── _index.tsx       # Home page
│   ├── about.tsx        # /about
│   ├── dashboard.tsx    # Parent route
│   ├── dashboard.home.tsx        # /dashboard
│   ├── dashboard.settings.tsx    # /dashboard/settings
│   └── products/
│       └── $productId.tsx        # /products/:productId
└── +types/              # Auto-generated (gitignored)
```

## Next Steps

After creating a route:

1. Update `app/routes.ts` with the route configuration
2. Create the route file with loader, action, and component
3. Add TypeScript types using imports from `+types`
4. Implement error boundary
5. Add loading states if using clientLoader
6. Test the route with different data scenarios
7. Consider pre-rendering if content is static
