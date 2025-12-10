# Project Overview

This document provides a high-level overview of the Nadi web application architecture, including the technology
stack, project structure, and key architectural decisions.

## What is Nadi?

Nadi is a real-time error tracking and application monitoring platform designed for developers. The web application
serves as the marketing website and public-facing interface, showcasing the product's features, pricing, and
providing access to the main application at `app.nadi.pro`.

## Technology Stack

### Core Framework

- **Next.js 15** - React framework with App Router for server-side rendering and static generation
- **React 19** - UI library for building component-based interfaces
- **TypeScript 5.8** - Type-safe JavaScript for improved developer experience

### Styling

- **Tailwind CSS 4.1** - Utility-first CSS framework
- **@tailwindcss/postcss** - PostCSS integration for Tailwind
- **@tailwindcss/forms** - Form styling plugin

### UI Components

- **Headless UI 2.2** - Unstyled, accessible UI components
- **next-themes 0.4** - Theme management for dark mode support
- **clsx** - Utility for constructing className strings

### Development Tools

- **ESLint 9** - Linting for code quality
- **Prettier 3** - Code formatting
- **prettier-plugin-tailwindcss** - Automatic Tailwind class sorting

## Project Structure

```text
nadi-web/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── (auth)/    # Authentication routes (login, register)
│   │   ├── layout.tsx # Root layout with theme provider
│   │   ├── page.tsx   # Home page
│   │   └── not-found.tsx
│   ├── components/     # React components
│   │   ├── Button.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Container.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── Faqs.tsx
│   │   ├── Fields.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── NavLink.tsx
│   │   ├── Pricing.tsx
│   │   ├── PrimaryFeatures.tsx
│   │   ├── SecondaryFeatures.tsx
│   │   ├── SlimLayout.tsx
│   │   ├── Testimonials.tsx
│   │   └── ThemeProvider.tsx
│   ├── images/         # Image assets
│   │   ├── avatars/
│   │   ├── logos/
│   │   └── screenshots/
│   └── styles/         # Global styles
│       └── tailwind.css
├── docs/               # Documentation (this folder)
├── next.config.js      # Next.js configuration
├── postcss.config.js   # PostCSS configuration
├── prettier.config.js  # Prettier configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Key Architectural Decisions

### Next.js App Router

The application uses Next.js 15's App Router (instead of the legacy Pages Router) for several benefits:

- **Server Components by default** - Better performance and reduced JavaScript bundle size
- **Nested layouts** - Shared UI across routes with layout composition
- **File-based routing** - Intuitive routing based on file system structure
- **Route groups** - Organize routes without affecting URL structure (e.g., `(auth)`)

### Component-First Architecture

Components are designed to be:

- **Self-contained** - Each component manages its own logic and styles
- **Reusable** - Components can be used across different pages
- **Composable** - Complex UIs built by composing simple components
- **Type-safe** - Full TypeScript support with proper prop types

### Styling Strategy

- **Utility-first with Tailwind** - Rapid development with utility classes
- **Component-level styles** - Styles colocated with components
- **Dark mode support** - Theme-aware components using `next-themes`
- **Responsive design** - Mobile-first approach with Tailwind breakpoints

### Type Safety

- **Strict TypeScript** - Full type checking enabled
- **Component props** - All components have typed props
- **Type inference** - Leveraging TypeScript's type inference
- **Metadata types** - Typed Next.js metadata for SEO

## Performance Considerations

### Server-Side Rendering

- Default to React Server Components for better performance
- Client Components (`'use client'`) only when necessary
- Automatic code splitting per route

### Image Optimization

- Next.js Image component for optimized images
- Responsive images with `srcset`
- Lazy loading by default

### CSS Optimization

- Tailwind CSS purging removes unused styles
- Critical CSS inlined automatically
- PostCSS for CSS processing

## Security Practices

- **Content Security Policy** - Configured in Next.js config
- **Environment variables** - Secure configuration management
- **Type safety** - Prevent runtime errors with TypeScript
- **Dependency updates** - Regular security updates

## Next Steps

- [Understanding App Router](02-app-router.md) - Learn about Next.js routing
- [Component Architecture](03-components.md) - Dive into component design
- [Styling System](04-styling.md) - Explore Tailwind CSS usage
