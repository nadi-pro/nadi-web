# Styling System

This document explains the styling approach, Tailwind CSS configuration, theming, and design patterns used in
the Nadi web application.

## Overview

The application uses Tailwind CSS 4.1 as the primary styling solution, providing a utility-first approach with
excellent performance and developer experience.

## Tailwind CSS Configuration

### Setup

Tailwind CSS 4 uses a new configuration approach with CSS-based configuration:

```css
/* src/styles/tailwind.css */
@import "tailwindcss";
```

### PostCSS Configuration

PostCSS processes Tailwind styles:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### Next.js Integration

Tailwind is imported in the root layout:

```typescript
// src/app/layout.tsx
import '@/styles/tailwind.css'
```

## Utility-First Approach

Tailwind CSS uses utility classes for styling:

```typescript
export function Button() {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      Click me
    </button>
  )
}
```

Benefits:

- No CSS file needed for each component
- No naming conventions (BEM, etc.)
- Consistent spacing and sizing
- Smaller CSS bundle (unused styles purged)

## Responsive Design

### Mobile-First Breakpoints

Tailwind uses mobile-first breakpoints:

| Breakpoint | Min Width | Example |
|------------|-----------|---------|
| `sm` | 640px | `sm:text-lg` |
| `md` | 768px | `md:flex` |
| `lg` | 1024px | `lg:grid-cols-3` |
| `xl` | 1280px | `xl:max-w-7xl` |
| `2xl` | 1536px | `2xl:px-8` |

### Example: Responsive Layout

```typescript
export function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* 1 column on mobile, 2 on tablet, 3 on desktop */}
    </div>
  )
}
```

### Responsive Text

```typescript
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

## Dark Mode

### Theme Provider

The app uses `next-themes` for dark mode management:

```typescript
// src/components/ThemeProvider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### Root Layout Configuration

```typescript
// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Dark Mode Classes

Use the `dark:` variant for dark mode styles:

```typescript
export function Card() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-blue-600 dark:text-blue-400">Title</h2>
      <p className="text-gray-600 dark:text-gray-300">Description</p>
    </div>
  )
}
```

### Theme Toggle

```typescript
// src/components/DarkModeToggle.tsx
'use client'

import { useTheme } from 'next-themes'

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
}
```

## Color System

### Primary Colors

The app uses a blue-to-purple gradient for branding:

```typescript
// Gradient backgrounds
<div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
  Gradient
</div>

// Text gradients
<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
  Gradient Text
</h1>
```

### Semantic Colors

```typescript
// Success
<div className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300">
  Success message
</div>

// Warning
<div className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300">
  Warning message
</div>

// Error
<div className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300">
  Error message
</div>
```

### Neutral Colors

```typescript
// Light mode
<div className="bg-gray-50 text-gray-900">
  Light background
</div>

// Dark mode
<div className="bg-gray-950 text-white">
  Dark background
</div>
```

## Typography

### Font Configuration

The app uses Inter font from Google Fonts:

```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-mono`}>
        {children}
      </body>
    </html>
  )
}
```

### Text Styles

```typescript
// Headings
<h1 className="text-4xl font-bold">Main Heading</h1>
<h2 className="text-3xl font-semibold">Sub Heading</h2>
<h3 className="text-2xl font-medium">Section Heading</h3>

// Body text
<p className="text-base text-gray-600 dark:text-gray-300">
  Body paragraph
</p>

// Small text
<span className="text-sm text-gray-500 dark:text-gray-400">
  Small text
</span>
```

## Spacing System

Tailwind uses a consistent spacing scale:

```typescript
// Padding
<div className="p-4">        {/* 1rem / 16px */}
<div className="px-6 py-4">  {/* horizontal 1.5rem, vertical 1rem */}
<div className="pt-8 pb-12"> {/* top 2rem, bottom 3rem */}

// Margin
<div className="m-4">        {/* 1rem / 16px */}
<div className="mx-auto">    {/* horizontal auto (centering) */}
<div className="mt-8 mb-4">  {/* top 2rem, bottom 1rem */}

// Gap (for flex/grid)
<div className="flex gap-4"> {/* 1rem gap between items */}
```

## Layout Patterns

### Container

Centered content with responsive padding:

```typescript
export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    />
  )
}
```

### Flexbox Layouts

```typescript
// Horizontal layout
<div className="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

// Vertical layout
<div className="flex flex-col gap-4">
  <div>Top</div>
  <div>Bottom</div>
</div>

// Centered content
<div className="flex min-h-screen items-center justify-center">
  <div>Centered</div>
</div>
```

### Grid Layouts

```typescript
// Equal columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>

// Custom columns
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-8">Main content (8/12)</div>
  <div className="col-span-4">Sidebar (4/12)</div>
</div>
```

## Component Styling Patterns

### Class Composition

Use `clsx` for conditional classes:

```typescript
import clsx from 'clsx'

export function Button({
  variant = 'primary',
  size = 'medium',
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg font-medium transition-colors',
        variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        size === 'small' && 'px-3 py-1.5 text-sm',
        size === 'medium' && 'px-4 py-2 text-base',
        size === 'large' && 'px-6 py-3 text-lg',
        className
      )}
    >
      Button
    </button>
  )
}
```

### Focus States

Always include focus styles for accessibility:

```typescript
<button className="rounded-lg bg-blue-600 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Accessible Button
</button>
```

### Hover States

```typescript
<a
  href="#"
  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
>
  Hover me
</a>
```

## Animations

### Transition Classes

```typescript
<button className="bg-blue-600 transition-colors hover:bg-blue-700">
  Smooth color transition
</button>

<div className="transform transition-transform hover:scale-105">
  Scale on hover
</div>
```

### Tailwind Animations

```typescript
// Spin animation
<div className="animate-spin">Loading...</div>

// Pulse animation
<div className="animate-pulse">Pulsing...</div>

// Bounce animation
<div className="animate-bounce">Bouncing!</div>
```

### Custom Animations

Defined in the Hero component:

```typescript
<div className="animate-pulse delay-1000">
  Custom delayed pulse
</div>
```

## Best Practices

### 1. Use Tailwind's Spacing Scale

Stay consistent with Tailwind's spacing:

```typescript
// Good: Using Tailwind's scale
<div className="p-4 m-8 gap-6">

// Avoid: Arbitrary values unless necessary
<div className="p-[17px] m-[33px]">
```

### 2. Mobile-First Responsive Design

Start with mobile styles, add breakpoints up:

```typescript
// Good: Mobile-first
<div className="text-base md:text-lg lg:text-xl">

// Avoid: Desktop-first
<div className="text-xl md:text-lg sm:text-base">
```

### 3. Group Related Classes

Organize classes logically:

```typescript
// Layout, sizing, spacing, colors, typography, effects
<div className="flex items-center justify-between w-full px-4 py-2 bg-white text-gray-900 rounded-lg shadow-sm">
```

### 4. Use Dark Mode Consistently

Always provide dark mode alternatives:

```typescript
// Good: Light and dark variants
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

// Avoid: Only light mode
<div className="bg-white text-gray-900">
```

### 5. Leverage Class Composition

Extract repeated class combinations:

```typescript
const cardClasses = 'rounded-lg bg-white dark:bg-gray-900 p-6 shadow-sm'

<div className={cardClasses}>Card 1</div>
<div className={cardClasses}>Card 2</div>
```

## Prettier Plugin

The project uses `prettier-plugin-tailwindcss` to automatically sort Tailwind classes:

```javascript
// prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

This ensures consistent class ordering across the project.

## Next Steps

- [Type System](05-types.md) - TypeScript configuration and practices
- [Component Architecture](03-components.md) - Component design patterns
- [Components Reference](../04-components/README.md) - Component documentation
