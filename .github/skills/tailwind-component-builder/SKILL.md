---
name: tailwind-component-builder
description: Builds responsive, accessible React components using Tailwind CSS utility classes with mobile-first design, dark mode support, state variants, container queries, and follows Tailwind best practices for composition and reusability.
---

# Tailwind CSS Component Builder

This skill helps you create well-styled, responsive React components using Tailwind CSS utility classes and best practices.

## What This Skill Does

- Builds mobile-first responsive components
- Implements dark mode with proper variants
- Uses state variants (hover, focus, active, disabled)
- Applies container queries for component-level responsiveness
- Follows Tailwind's utility-first approach
- Manages duplication effectively
- Creates accessible, semantic HTML

## When to Use This Skill

Use this skill when you need to:

- Create a new UI component with Tailwind styling
- Make an existing component responsive
- Add dark mode support
- Implement complex interactive states
- Build reusable design system components
- Convert designs to Tailwind classes

## Component Creation Checklist

### 1. Start Mobile-First

Always start with base (unprefixed) utilities for mobile, then add breakpoint variants:

```tsx
// ✅ Correct: Mobile-first approach
<div className="
  flex flex-col gap-4 p-4           // Mobile base styles
  sm:flex-row sm:gap-6              // Small screens and up
  lg:p-8                             // Large screens and up
">
  <div className="
    w-full                           // Mobile: full width
    sm:w-1/2                        // Small: half width
    lg:w-1/3                        // Large: third width
  ">
    Content
  </div>
</div>

// ❌ Wrong: Don't use sm: for mobile
<div className="sm:flex">  // This only applies at 640px+, not mobile!
```

### 2. Breakpoint Reference

```text
Base:  No prefix (mobile)
sm:    640px and up
md:    768px and up
lg:    1024px and up
xl:    1280px and up
2xl:   1536px and up
```

### 3. Dark Mode Pattern

Always provide both light and dark mode variants:

```tsx
<div className="
  bg-white dark:bg-gray-900
  text-gray-900 dark:text-gray-100
  border border-gray-200 dark:border-gray-800
">
  <h1 className="text-gray-900 dark:text-white">
    Title
  </h1>
  <p className="text-gray-600 dark:text-gray-400">
    Description
  </p>
</div>
```

### 4. State Variants

Use variant prefixes for interactive states:

```tsx
// Basic states
<button className="
  bg-blue-500
  hover:bg-blue-600
  active:bg-blue-700
  disabled:bg-gray-300
  disabled:cursor-not-allowed
">

// Stacked variants
<button className="
  hover:ring-2
  focus:ring-4
  focus:ring-blue-500
  disabled:hover:bg-gray-300
">

// Group-based variants
<a className="group">
  <span className="group-hover:underline">
    Link text
  </span>
  <svg className="group-hover:translate-x-1">...</svg>
</a>

// Complex stacking
<button className="
  dark:lg:hover:bg-indigo-600
">
```

### 5. Container Queries for Portability

Use container queries for component-level responsiveness:

```tsx
// Mark container
<div className="@container">
  {/* Component responds to container size, not viewport */}
  <div className="
    flex flex-col
    @md:flex-row
    @lg:gap-8
  ">
    <div className="@md:w-1/2">Content</div>
    <div className="@md:w-1/2">Content</div>
  </div>
</div>

// Named containers for complex layouts
<div className="@container/main">
  <div className="@container/sidebar">
    <div className="
      @sm/sidebar:flex-row
      @lg/main:text-xl
    ">
      Responds to specific containers
    </div>
  </div>
</div>
```

### 6. Component Templates

#### Button Component

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md',
  children 
}: ButtonProps) {
  const baseStyles = "rounded-lg font-semibold transition-colors disabled:opacity-50";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </button>
  );
}
```

#### Card Component

```tsx
export function Card({ 
  title, 
  description, 
  image, 
  children 
}: CardProps) {
  return (
    <div className="
      @container
      rounded-xl overflow-hidden
      bg-white dark:bg-gray-800
      shadow-lg dark:shadow-none
      border border-gray-200 dark:border-gray-700
      transition-transform hover:scale-105
    ">
      <img 
        src={image} 
        alt="" 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 @md:p-8">
        <h3 className="
          text-xl @md:text-2xl font-bold
          text-gray-900 dark:text-white
          mb-2
        ">
          {title}
        </h3>
        <p className="
          text-gray-600 dark:text-gray-400
          @md:text-lg
        ">
          {description}
        </p>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}
```

#### Form Input Component

```tsx
export function Input({ 
  label, 
  error, 
  ...props 
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="
        text-sm font-medium
        text-gray-700 dark:text-gray-300
      ">
        {label}
      </label>
      <input
        className="
          px-3 py-2 rounded-lg
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-600
          text-gray-900 dark:text-white
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
        "
        {...props}
      />
      {error && (
        <span className="text-sm text-red-600 dark:text-red-400">
          {error}
        </span>
      )}
    </div>
  );
}
```

#### Navigation Component

```tsx
export function Navigation() {
  return (
    <nav className="
      sticky top-0 z-50
      bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg
      border-b border-gray-200 dark:border-gray-800
    ">
      <div className="
        max-w-7xl mx-auto px-4
        flex items-center justify-between
        h-16
      ">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="
            hidden md:flex
            items-center gap-6
          ">
            <NavLink href="/home">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/products">Products</NavLink>
          </div>
        </div>
        
        <button className="md:hidden">
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="
        text-gray-600 dark:text-gray-400
        hover:text-gray-900 dark:hover:text-white
        font-medium
        transition-colors
      "
    >
      {children}
    </a>
  );
}
```

### 7. Managing Duplication

#### Use Loops for Repeated Elements

```tsx
// ✅ Correct: Classes written once
const items = data.map(item => (
  <div key={item.id} className="rounded-lg bg-white p-4 shadow">
    {item.name}
  </div>
));

// ❌ Wrong: Duplicated classes
<div className="rounded-lg bg-white p-4 shadow">Item 1</div>
<div className="rounded-lg bg-white p-4 shadow">Item 2</div>
<div className="rounded-lg bg-white p-4 shadow">Item 3</div>
```

#### Extract Components for Reuse

```tsx
// ✅ Extract to component when used multiple times
function Badge({ children, variant }: BadgeProps) {
  const styles = variant === 'success' 
    ? 'bg-green-100 text-green-800'
    : 'bg-gray-100 text-gray-800';
  
  return (
    <span className={`px-2 py-1 text-xs rounded ${styles}`}>
      {children}
    </span>
  );
}
```

### 8. Arbitrary Values (Use Sparingly)

```tsx
// One-off brand color
<div className="bg-[#316ff6]">

// Complex calculation
<div className="max-h-[calc(100vh-4rem)]">

// CSS variables
<div className="[--spacing:1rem] p-[--spacing]">

// Custom grid
<div className="grid-cols-[200px_1fr_100px]">
```

### 9. Accessibility Patterns

```tsx
// Focus visible
<button className="
  focus:outline-none
  focus-visible:ring-2 focus-visible:ring-blue-500
">

// Screen reader only
<span className="sr-only">
  Close menu
</span>

// Reduced motion
<div className="
  transition-transform
  motion-reduce:transition-none
">
```

### 10. Common Layout Patterns

#### Centered Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

#### Grid Layouts

```tsx
// Responsive grid
<div className="
  grid
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
  gap-4 lg:gap-6
">

// Auto-fit grid
<div className="
  grid
  grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
  gap-4
">
```

#### Flexbox Layouts

```tsx
// Space between
<div className="flex items-center justify-between">

// Centered
<div className="flex items-center justify-center min-h-screen">

// Stack with gap
<div className="flex flex-col gap-4">
```

## Best Practices

1. **Mobile-First Always**: Start with base styles, add breakpoints up
2. **Dark Mode Everywhere**: Always provide `dark:` variants for color classes
3. **Use Design System**: Prefer Tailwind's theme values over arbitrary values
4. **Extract Components**: Create React components for repeated patterns
5. **Container Queries**: Use for portable, reusable components
6. **Semantic HTML**: Use proper HTML elements with utility styling
7. **Accessibility**: Include focus, disabled, and aria-label states
8. **Performance**: Group related utilities, avoid unnecessary classes

## Anti-Patterns to Avoid

```tsx
// ❌ Wrong: Using sm: for mobile
<div className="sm:text-center">  // Only applies 640px+

// ✅ Correct: Mobile-first
<div className="text-center sm:text-left">

// ❌ Wrong: Conflicting utilities
<div className="flex block">  // Only last in stylesheet applies

// ✅ Correct: Conditional classes
<div className={isGrid ? "grid" : "flex"}>

// ❌ Wrong: Only light mode colors
<div className="bg-white text-black">

// ✅ Correct: Both modes
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
```

## Dynamic Values Pattern

```tsx
// Use inline styles for truly dynamic values
<div 
  style={{ backgroundColor: colorFromAPI }}
  className="rounded-lg p-4"
>

// Or CSS variables with utilities
<div
  style={{ '--brand-color': brandColor } as React.CSSProperties}
  className="bg-[--brand-color]"
>
```

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)
- [Headless UI](https://headlessui.com) - Unstyled, accessible components
