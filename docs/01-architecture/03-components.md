# Component Architecture

This document explains the component organization, design patterns, and best practices used in the Nadi web
application.

## Component Organization

Components are organized in the `src/components` directory with a flat structure for easy discovery and
maintenance.

### Directory Structure

```text
src/components/
├── Button.tsx              # Reusable button component
├── CallToAction.tsx        # CTA section
├── Container.tsx           # Layout container
├── DarkModeToggle.tsx      # Theme switcher
├── Faqs.tsx               # FAQ section
├── Fields.tsx             # Form field components
├── Footer.tsx             # Site footer
├── Header.tsx             # Site header
├── Hero.tsx               # Hero section
├── Logo.tsx               # Logo component
├── Navbar.tsx             # Navigation bar
├── NavLink.tsx            # Navigation link
├── Pricing.tsx            # Pricing section
├── PrimaryFeatures.tsx    # Main features section
├── SecondaryFeatures.tsx  # Secondary features section
├── SlimLayout.tsx         # Minimal layout for auth pages
├── Testimonials.tsx       # Testimonials section
└── ThemeProvider.tsx      # Theme context provider
```

## Component Categories

### Layout Components

Components that provide structure and layout:

- **Container** - Centered content container with responsive padding
- **SlimLayout** - Minimal layout for authentication pages
- **ThemeProvider** - Wraps app with theme context

### Navigation Components

- **Navbar** - Main navigation with dark mode toggle
- **NavLink** - Individual navigation link with active state
- **Header** - Page header component

### Content Sections

Page sections used on the landing page:

- **Hero** - Main hero section with CTA
- **PrimaryFeatures** - Key feature showcase
- **SecondaryFeatures** - Additional features
- **Pricing** - Pricing plans
- **Testimonials** - Customer testimonials
- **Faqs** - Frequently asked questions
- **CallToAction** - Call-to-action section
- **Footer** - Site footer with links

### UI Components

Reusable UI elements:

- **Button** - Styled button with variants
- **Fields** - Form input fields
- **Logo** - Nadi logo component
- **DarkModeToggle** - Theme switcher button

## Component Patterns

### Server Components (Default)

Most components are React Server Components for better performance:

```typescript
// src/components/Hero.tsx
export function Hero() {
  return (
    <section>
      {/* Static content rendered on server */}
    </section>
  )
}
```

Benefits:

- Zero JavaScript sent to client
- Can access server-side resources
- Automatic code splitting
- Better SEO

### Client Components

Components requiring interactivity use `'use client'`:

```typescript
// src/components/DarkModeToggle.tsx
'use client'

import { useTheme } from 'next-themes'

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

Use Client Components for:

- Event handlers
- React hooks
- Browser APIs
- State management

### Composition Pattern

Complex UIs are built by composing smaller components:

```typescript
// src/app/page.tsx
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Pricing } from '@/components/Pricing'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
```

### Container Pattern

The `Container` component provides consistent layout:

```typescript
// src/components/Container.tsx
export function Container({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
```

Usage:

```typescript
import { Container } from '@/components/Container'

export function Example() {
  return (
    <Container>
      <h1>Content inside container</h1>
    </Container>
  )
}
```

## TypeScript Patterns

### Component Props

All components have typed props:

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  // Implementation
}
```

### Props with HTML Attributes

Extend HTML element props for flexibility:

```typescript
export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={clsx('container', className)} {...props} />
}
```

This allows passing any valid `div` attributes:

```typescript
<Container id="main" role="main" aria-label="Main content">
  Content
</Container>
```

### Type Inference

Let TypeScript infer types when possible:

```typescript
// TypeScript infers return type as JSX.Element
export function Logo() {
  return <div>Logo</div>
}
```

## Styling Patterns

### Tailwind Classes

Components use Tailwind utility classes:

```typescript
export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      {children}
    </button>
  )
}
```

### Class Composition with clsx

Use `clsx` for conditional and merged classes:

```typescript
import clsx from 'clsx'

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg px-4 py-2',
        variant === 'primary' && 'bg-blue-600 text-white',
        variant === 'secondary' && 'bg-gray-200 text-gray-900',
        className
      )}
      {...props}
    />
  )
}
```

### Dark Mode Support

Components support dark mode using Tailwind's `dark:` variant:

```typescript
export function Card() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      Content adapts to theme
    </div>
  )
}
```

## Accessibility

### Semantic HTML

Use appropriate HTML elements:

```typescript
// Good: Semantic button
<button onClick={handleClick}>Click me</button>

// Bad: Non-semantic div
<div onClick={handleClick}>Click me</div>
```

### ARIA Attributes

Include ARIA attributes when needed:

```typescript
<button
  aria-label="Toggle dark mode"
  aria-pressed={theme === 'dark'}
>
  <MoonIcon />
</button>
```

### Keyboard Navigation

Ensure interactive elements are keyboard accessible:

```typescript
<Link
  href="/login"
  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  Login
</Link>
```

## Best Practices

### 1. Single Responsibility

Each component should have one clear purpose:

```typescript
// Good: Focused component
export function LoginButton() {
  return <Button href="/login">Login</Button>
}

// Avoid: Component doing too much
export function HeaderWithLoginAndUserMenuAndNotifications() {
  // Too many responsibilities
}
```

### 2. Props Over Configuration

Make components flexible through props:

```typescript
export function Button({
  variant = 'primary',
  size = 'medium',
  children,
}: ButtonProps) {
  // Configurable via props
}
```

### 3. Colocate Related Code

Keep component logic and styles together:

```typescript
// All Button logic in one file
export function Button({ variant, children }: ButtonProps) {
  const handleClick = () => {
    // Component-specific logic
  }

  return (
    <button
      className={getButtonClasses(variant)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
```

### 4. Minimize Client Components

Keep most components as Server Components:

```typescript
// Server Component (default)
export function ProductList() {
  return <div>...</div>
}

// Client Component (only when needed)
'use client'
export function InteractiveFilter() {
  const [filter, setFilter] = useState('')
  return <input value={filter} onChange={e => setFilter(e.target.value)} />
}
```

### 5. Export Named Components

Use named exports for better discoverability:

```typescript
// Good
export function Button() { }

// Avoid
export default function() { }
```

## Next Steps

- [Styling System](04-styling.md) - Learn about Tailwind CSS usage
- [Components Reference](../04-components/README.md) - Detailed component documentation
- [Development Workflows](../02-development/02-workflows.md) - Development practices
