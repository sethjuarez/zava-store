---
name: refactor-mobile-first
description: Refactors existing Tailwind CSS code to use mobile-first responsive design by removing sm: from base styles and properly layering breakpoints
agent: edit
---

# Refactor to Mobile-First Design

Refactor the selected code to follow Tailwind's mobile-first responsive design pattern.

## Current Selection

${selection}

## Instructions

1. **Identify incorrect mobile targeting**:

   - Look for `sm:` prefixes used to target mobile
   - Find base styles that should be unprefixed
   - Check for desktop-first patterns

2. **Apply mobile-first transformation**:

   - **Base styles (no prefix)**: Target mobile (0-639px)
   - **sm: prefix**: Target 640px and up
   - **md: prefix**: Target 768px and up
   - **lg: prefix**: Target 1024px and up
   - **xl: prefix**: Target 1280px and up
   - **2xl: prefix**: Target 1536px and up

3. **Common transformations**:

   ❌ **Wrong** (desktop-first or incorrect mobile):

   ```tsx
   <div className="sm:text-center">           // Only applies 640px+, not mobile!
   <div className="lg:flex sm:block">         // Backwards
   <div className="sm:w-full md:w-1/2">      // Wrong base
   ```

   ✅ **Correct** (mobile-first):

   ```tsx
   <div className="text-center sm:text-left">  // Mobile center, desktop left
   <div className="block lg:flex">             // Mobile block, desktop flex
   <div className="w-full md:w-1/2">          // Mobile full, desktop half
   ```

4. **Pattern guidelines**:

   - Start with the mobile layout (no breakpoint prefix)
   - Add larger breakpoints progressively
   - Each breakpoint should enhance the previous one
   - Stack layouts: `flex-col sm:flex-row`
   - Sizing: `w-full sm:w-1/2 lg:w-1/3`
   - Spacing: `gap-4 sm:gap-6 lg:gap-8`
   - Typography: `text-sm sm:text-base lg:text-lg`

5. **Layout examples**:

   **Stacking → Side-by-side**:

   ```tsx
   <div className="flex flex-col md:flex-row gap-4 md:gap-6">
   ```

   **Responsive grid**:

   ```tsx
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
   ```

   **Responsive padding**:

   ```tsx
   <div className="p-4 sm:p-6 lg:p-8">
   ```

   **Responsive text alignment**:

   ```tsx
   <div className="text-center sm:text-left">
   ```

   **Show/hide elements**:

   ```tsx
   <div className="hidden md:block">Desktop only</div>
   <div className="block md:hidden">Mobile only</div>
   ```

## Example Transformation

### Before (Incorrect):

```tsx
<div className="sm:flex sm:items-center sm:justify-between">
  <h1 className="sm:text-xl">Title</h1>
  <button className="sm:px-4 sm:py-2">Click</button>
</div>
```

### After (Mobile-First):

```tsx
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <h1 className="text-lg sm:text-xl">Title</h1>
  <button className="px-3 py-1.5 sm:px-4 sm:py-2">Click</button>
</div>
```

## Verification

After refactoring, verify:

- Mobile view (< 640px): Uses base styles
- Tablet view (640-1023px): Uses sm: and md: enhancements
- Desktop view (1024px+): Uses lg: and larger enhancements
- Each breakpoint builds upon the previous
- Layout is functional at all sizes


