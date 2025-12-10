# Next.js App Router

This document explains how Next.js 15's App Router works in the Nadi web application and how to work with
routes effectively.

## Introduction

Next.js 15 uses the App Router, which is built on React Server Components. This provides better performance,
smaller bundle sizes, and improved developer experience compared to the legacy Pages Router.

## Routing Fundamentals

### File-Based Routing

Routes are defined by the file structure within the `src/app` directory:

```text
src/app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx           # Home page (/)
├── not-found.tsx      # 404 page
└── (auth)/            # Route group (doesn't affect URL)
    ├── login/
    │   └── page.tsx   # /login
    └── register/
        └── page.tsx   # /register
```

### Special Files

Next.js App Router uses special file names with specific purposes:

| File | Purpose | Example |
|------|---------|---------|
| `layout.tsx` | Shared UI for a route segment | Root layout with theme provider |
| `page.tsx` | Unique UI for a route | Home page component |
| `not-found.tsx` | Custom 404 page | Error page |
| `error.tsx` | Error boundary | (Not yet implemented) |
| `loading.tsx` | Loading UI | (Not yet implemented) |

## Route Groups

Route groups allow you to organize routes without affecting the URL structure. They're created using
parentheses in folder names.

### Example: Authentication Routes

```typescript
// src/app/(auth)/login/page.tsx
export default function Login() {
  return <div>Login Page</div>
}

// URL: /login (not /auth/login)
```

The `(auth)` folder groups authentication-related pages but doesn't appear in the URL.

## Layouts

Layouts enable shared UI across multiple pages. They persist across navigation and don't re-render.

### Root Layout

The root layout (`src/app/layout.tsx`) wraps all pages:

```typescript
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/tailwind.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

Key features:

- Sets up HTML and body tags
- Includes global styles
- Wraps all pages with ThemeProvider
- Configures dark mode support

### Nested Layouts

You can create nested layouts for specific route segments. For example, a layout for authentication pages:

```typescript
// src/app/(auth)/layout.tsx (example)
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
```

## Pages

Pages are UI components that render for specific routes.

### Home Page

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

## Metadata

Next.js 15 provides a typed API for managing page metadata:

```typescript
// src/app/layout.tsx
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Nadi',
    default: 'Nadi - Application Monitoring & Error Tracking for Developers',
  },
  description:
    'Real-time error tracking and application monitoring for modern development teams.',
}
```

### Page-Specific Metadata

Override metadata in individual pages:

```typescript
// Example: src/app/(auth)/login/page.tsx
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your Nadi account',
}

export default function Login() {
  return <div>Login Page</div>
}
```

## Server vs Client Components

### Server Components (Default)

By default, all components in the App Router are Server Components:

- Render on the server
- Don't ship JavaScript to the client
- Can directly access backend resources
- Better performance

```typescript
// This is a Server Component (default)
export default function Page() {
  return <div>Server Component</div>
}
```

### Client Components

Use the `'use client'` directive for interactive components:

```typescript
// src/components/DarkModeToggle.tsx
'use client'

import { useTheme } from 'next-themes'

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  // ... interactive logic
}
```

Use Client Components when you need:

- React hooks (`useState`, `useEffect`, etc.)
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`localStorage`, `window`, etc.)
- Third-party libraries that depend on client-side features

## Navigation

### Link Component

Use Next.js `Link` for client-side navigation:

```typescript
import Link from 'next/link'

export function Example() {
  return (
    <Link href="/login" className="text-blue-600">
      Login
    </Link>
  )
}
```

### Programmatic Navigation

Use `useRouter` hook for programmatic navigation:

```typescript
'use client'

import { useRouter } from 'next/navigation'

export function Example() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/dashboard')
  }

  return <button onClick={handleClick}>Go to Dashboard</button>
}
```

## Not Found Page

Custom 404 page at `src/app/not-found.tsx`:

```typescript
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
```

## Best Practices

### 1. Use Server Components by Default

Only use Client Components when necessary for better performance.

### 2. Colocate Related Files

Keep page-specific components near their pages:

```text
app/
├── dashboard/
│   ├── page.tsx
│   └── _components/    # Dashboard-specific components
│       └── Chart.tsx
```

### 3. Type All Metadata

Use TypeScript's `Metadata` type for type safety:

```typescript
import { type Metadata } from 'next'

export const metadata: Metadata = {
  // fully typed!
}
```

### 4. Organize with Route Groups

Use route groups to organize without affecting URLs:

```text
app/
├── (marketing)/     # Public pages
│   ├── page.tsx
│   └── about/
└── (app)/           # Application pages
    └── dashboard/
```

## Next Steps

- [Component Architecture](03-components.md) - Learn about component design patterns
- [Styling System](04-styling.md) - Understand Tailwind CSS usage
- [Development Workflows](../02-development/02-workflows.md) - Development best practices
