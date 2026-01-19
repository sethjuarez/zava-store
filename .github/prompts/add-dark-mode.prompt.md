---
name: add-dark-mode
description: Adds dark mode support to existing components by adding Tailwind dark: variants for all color utilities
agent: edit
---

# Add Dark Mode Support

Add comprehensive dark mode support to the selected component(s) by adding `dark:` variants to all color-related Tailwind utilities.

## Current Selection

${selection}

## Instructions

1. **Identify all color utilities** in the selected code:

   - Background colors: `bg-*`
   - Text colors: `text-*`
   - Border colors: `border-*`
   - Ring colors: `ring-*`
   - Shadow colors: `shadow-*`
   - Divide colors: `divide-*`
   - Placeholder colors: `placeholder:*`

2. **Add dark mode variants** for each color utility:

   - Light backgrounds → dark backgrounds: `bg-white dark:bg-gray-900`
   - Dark text → light text: `text-gray-900 dark:text-white`
   - Light borders → dark borders: `border-gray-200 dark:border-gray-800`
   - Adjust shadow visibility: `shadow-lg dark:shadow-none`

3. **Color Mapping Guidelines**:

   - `bg-white` → `dark:bg-gray-900` or `dark:bg-gray-800`
   - `bg-gray-50` → `dark:bg-gray-800`
   - `bg-gray-100` → `dark:bg-gray-700`
   - `text-gray-900` → `dark:text-white` or `dark:text-gray-100`
   - `text-gray-700` → `dark:text-gray-300`
   - `text-gray-600` → `dark:text-gray-400`
   - `border-gray-200` → `dark:border-gray-700` or `dark:border-gray-800`
   - Brand colors stay similar: `bg-blue-600` → `dark:bg-blue-500`

4. **Handle special cases**:

   - Shadows often need to be removed: `shadow-lg dark:shadow-none`
   - Outline/ring colors: `ring-blue-500 dark:ring-blue-400`
   - Hover states need dark variants: `hover:bg-gray-100 dark:hover:bg-gray-700`

5. **Maintain readability**:
   - Ensure sufficient contrast ratios in both modes
   - Test that all text is readable against backgrounds
   - Verify interactive states (hover, focus) are visible

## Example Transformation

### Before:

```tsx
<div className="bg-white text-gray-900 border border-gray-200 shadow-lg">
  <h1 className="text-gray-900">Title</h1>
  <p className="text-gray-600">Description</p>
  <button className="bg-blue-600 hover:bg-blue-700 text-white">Click me</button>
</div>
```

### After:

```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 shadow-lg dark:shadow-none">
  <h1 className="text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-gray-400">Description</p>
  <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white">
    Click me
  </button>
</div>
```

## Notes

- Always provide both light and dark variants explicitly
- Don't skip hover/focus/active states
- Test the result in both light and dark modes
- Consider using a dark mode toggle in your app to enable switching

Reference [tailwind-component-builder](../skills/tailwind-component-builder/SKILL.md) for detailed dark mode patterns.

