# Component Overview

This document provides an overview of all components in the Nadi web application.

## Component Categories

### Layout Components

Components that provide structure and theming:

| Component | Purpose | Type |
|-----------|---------|------|
| `Container` | Centered content container | Server |
| `ThemeProvider` | Dark mode context | Client |
| `SlimLayout` | Minimal layout for auth pages | Server |

### Navigation Components

Components for site navigation:

| Component | Purpose | Type |
|-----------|---------|------|
| `Navbar` | Main navigation bar | Server/Client |
| `NavLink` | Navigation link with active state | Client |
| `Header` | Page header | Server |
| `Footer` | Site footer | Server |

### UI Components

Reusable interface elements:

| Component | Purpose | Type |
|-----------|---------|------|
| `Button` | Styled button | Server |
| `Fields` | Form input fields | Client |
| `Logo` | Nadi logo | Server |
| `DarkModeToggle` | Theme switcher | Client |

### Content Sections

Landing page sections:

| Component | Purpose | Type |
|-----------|---------|------|
| `Hero` | Main hero section | Server |
| `PrimaryFeatures` | Key features showcase | Server |
| `SecondaryFeatures` | Additional features | Server |
| `Pricing` | Pricing plans | Server |
| `Testimonials` | Customer testimonials | Server |
| `Faqs` | FAQ section | Server |
| `CallToAction` | CTA section | Server |

## Component Types

### Server Components

Most components are Server Components (default in Next.js 15):

- Render on server
- No JavaScript sent to client
- Better performance
- Can access server-side resources

### Client Components

Components using `'use client'` directive:

- Interactive components
- Use React hooks
- Event handlers
- Browser APIs

## File Locations

All components are located in `src/components/`:

```text
src/components/
├── Button.tsx
├── CallToAction.tsx
├── Container.tsx
├── DarkModeToggle.tsx
├── Faqs.tsx
├── Fields.tsx
├── Footer.tsx
├── Header.tsx
├── Hero.tsx
├── Logo.tsx
├── Navbar.tsx
├── NavLink.tsx
├── Pricing.tsx
├── PrimaryFeatures.tsx
├── SecondaryFeatures.tsx
├── SlimLayout.tsx
├── Testimonials.tsx
└── ThemeProvider.tsx
```

## Import Examples

```typescript
// Layout components
import { Container } from '@/components/Container'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SlimLayout } from '@/components/SlimLayout'

// Navigation components
import { Navbar } from '@/components/Navbar'
import { NavLink } from '@/components/NavLink'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// UI components
import { Button } from '@/components/Button'
import { Fields } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { DarkModeToggle } from '@/components/DarkModeToggle'

// Content sections
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Pricing } from '@/components/Pricing'
```

## Common Patterns

### Composition

Build pages by composing components:

```typescript
// src/app/page.tsx
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

### Props

All components have typed props:

```typescript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}
```

### Styling

Components use Tailwind CSS:

```typescript
<div className="bg-white dark:bg-gray-900 p-4 rounded-lg">
  Content
</div>
```

## Next Steps

- [Layout Components](02-layout.md) - Container, ThemeProvider, SlimLayout
- [Navigation Components](03-navigation.md) - Navbar, NavLink, Header, Footer
- [UI Components](04-ui-components.md) - Button, Fields, Logo, DarkModeToggle
- [Content Sections](05-content-sections.md) - Hero, Features, Pricing, etc.
