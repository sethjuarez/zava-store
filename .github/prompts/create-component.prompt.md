---
name: create-component
description: Creates a responsive, accessible React component with Tailwind CSS styling, TypeScript types, and dark mode support
argument-hint: "ComponentName [description]"
agent: edit
---

# Create React Component with Tailwind

Create a new React component with the following characteristics:

## Requirements

1. **TypeScript**: Proper interface for props with JSDoc comments
2. **Tailwind CSS**: Mobile-first responsive styling
3. **Dark Mode**: Include `dark:` variants for all colors
4. **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation
5. **State Management**: Use appropriate hooks (useState, useMemo, useCallback)
6. **Performance**: Memoize expensive operations, use React.memo if appropriate

## Component Structure

````typescript
interface ComponentNameProps {
/** Prop description \*/
propName: string;
/** Optional prop _/
optional?: boolean;
/\*\* Callback handler _/
onAction?: (value: string) => void;
/\*_ Child content _/
children?: React.ReactNode;
}

/\*\*

- ComponentName - Brief description
-
- @example
- ```tsx
- <ComponentName propName="value" />
- ```
  \*/
  export function ComponentName({
  propName,
  optional = false,
  onAction,
  children
  }: ComponentNameProps) {
  // Component logic here

return (

<div className="
      /* Mobile styles (base) */
      flex flex-col gap-4 p-4
      /* Tablet */
      sm:flex-row sm:gap-6
      /* Desktop */
      lg:p-8
      /* Colors with dark mode */
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-white
    ">
{children}
</div>
);
}
````

## Styling Guidelines

- **Mobile-first**: Base styles without prefixes, add `sm:`, `md:`, `lg:` up
- **Dark mode**: Always provide `dark:` variants for colors
- **States**: Add hover, focus, active states: `hover:bg-blue-600`
- **Accessibility**: Use semantic HTML, proper ARIA labels
- **Spacing**: Use Tailwind's spacing scale (0.25rem increments)

## Common Patterns

### Button Component

```tsx
<button className="
  px-4 py-2 rounded-lg font-semibold
  bg-blue-600 hover:bg-blue-700
  text-white
  focus:outline-none focus:ring-2 focus:ring-blue-500
  disabled:opacity-50 disabled:cursor-not-allowed
  dark:bg-blue-500 dark:hover:bg-blue-600
">
```

### Card Component

```tsx

<div className="
  rounded-xl overflow-hidden
  bg-white dark:bg-gray-800
  shadow-lg dark:shadow-none
  border border-gray-200 dark:border-gray-700
">
```

### Form Input

```tsx
<input className="
  px-3 py-2 rounded-lg
  bg-white dark:bg-gray-800
  border border-gray-300 dark:border-gray-600
  text-gray-900 dark:text-white
  focus:ring-2 focus:ring-blue-500
  placeholder:text-gray-400
">
```

## User Input

${input:componentName:Enter component name (PascalCase)}
${input:description:Describe the component's purpose}

