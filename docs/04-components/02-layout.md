# Layout Components

This document covers layout components that provide structure and theming.

## Container

Centered content container with responsive padding.

### Location

`src/components/Container.tsx`

### Usage

```typescript
import { Container } from '@/components/Container'

export function Page() {
  return (
    <Container>
      <h1>Content inside container</h1>
    </Container>
  )
}
```

### Props

Extends `React.ComponentPropsWithoutRef<'div'>` - accepts all div attributes plus:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `undefined` | Additional classes |
| `children` | `React.ReactNode` | Required | Content |

### Features

- Maximum width: 1280px (7xl)
- Responsive padding
- Horizontally centered
- Customizable with className

## ThemeProvider

Wraps application with theme context for dark mode support.

### Location

`src/components/ThemeProvider.tsx`

### Usage

```typescript
// src/app/layout.tsx
import { ThemeProvider } from '@/components/ThemeProvider'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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

### Props

Uses `next-themes` ThemeProviderProps:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `attribute` | `string` | `'class'` | HTML attribute for theme |
| `defaultTheme` | `string` | `'light'` | Default theme |
| `enableSystem` | `boolean` | `false` | Use system preference |
| `children` | `React.ReactNode` | Required | App content |

## SlimLayout

Minimal layout for authentication pages.

### Location

`src/components/SlimLayout.tsx`

### Usage

```typescript
import { SlimLayout } from '@/components/SlimLayout'

export default function LoginPage() {
  return (
    <SlimLayout>
      <h1>Login</h1>
      {/* Login form */}
    </SlimLayout>
  )
}
```

### Features

- Minimal design
- Centered content
- Includes logo
- Background styling

## Next Steps

- [Navigation Components](03-navigation.md)
- [UI Components](04-ui-components.md)
