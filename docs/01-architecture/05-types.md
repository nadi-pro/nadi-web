# Type System

This document explains TypeScript configuration, type definitions, and type safety practices used in the Nadi
web application.

## TypeScript Configuration

### tsconfig.json

The project uses strict TypeScript settings for maximum type safety:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Key Settings

| Setting | Value | Purpose |
|---------|-------|---------|
| `strict` | `true` | Enable all strict type checking options |
| `noEmit` | `true` | TypeScript only for type checking, Next.js handles compilation |
| `jsx` | `preserve` | Let Next.js handle JSX transformation |
| `paths` | `@/*` | Path alias for clean imports |
| `moduleResolution` | `bundler` | Modern module resolution for Next.js |

## Path Aliases

Use the `@` alias for cleaner imports:

```typescript
// Good: Using path alias
import { Button } from '@/components/Button'
import { Hero } from '@/components/Hero'

// Avoid: Relative paths
import { Button } from '../../components/Button'
import { Hero } from '../../../components/Hero'
```

## Component Types

### Props Typing

All component props should be typed:

```typescript
// Basic props
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
```

### Extending HTML Attributes

Extend built-in HTML element props:

```typescript
interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        variant === 'primary' && 'bg-blue-600',
        variant === 'secondary' && 'bg-gray-200',
        className
      )}
      {...props}
    />
  )
}
```

This allows passing any valid button attribute:

```typescript
<Button
  variant="primary"
  type="submit"
  disabled
  aria-label="Submit form"
>
  Submit
</Button>
```

### Optional Props

Use optional properties with default values:

```typescript
interface CardProps {
  title: string
  description?: string  // Optional
  variant?: 'default' | 'highlighted'  // Optional with union type
}

export function Card({
  title,
  description,
  variant = 'default'  // Default value
}: CardProps) {
  return (
    <div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}
```

## Next.js Types

### Metadata Type

Use Next.js's `Metadata` type for SEO:

```typescript
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Nadi',
    default: 'Nadi - Application Monitoring',
  },
  description: 'Real-time error tracking for developers',
  openGraph: {
    title: 'Nadi',
    description: 'Real-time error tracking',
    url: 'https://nadi.pro',
    siteName: 'Nadi',
    images: [
      {
        url: 'https://nadi.pro/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
```

### Page Props Type

Type page component props:

```typescript
// For pages with params
interface PageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params
  // Use slug
}
```

### Layout Props Type

Type layout component props:

```typescript
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
```

## React Types

### Common React Types

```typescript
// Children
children: React.ReactNode

// Click handlers
onClick: React.MouseEventHandler<HTMLButtonElement>
onClick: (event: React.MouseEvent<HTMLButtonElement>) => void

// Change handlers
onChange: React.ChangeEventHandler<HTMLInputElement>
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

// Refs
ref: React.Ref<HTMLDivElement>

// Style object
style: React.CSSProperties

// Class name
className: string
```

### Event Handlers

Type event handlers properly:

```typescript
'use client'

export function Form() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  )
}
```

### useState with Types

```typescript
'use client'

import { useState } from 'react'

// Type inferred from initial value
const [count, setCount] = useState(0)  // number

// Explicit type
const [user, setUser] = useState<User | null>(null)

// Union type
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
```

## Utility Types

### Pick and Omit

Extract or exclude properties:

```typescript
interface User {
  id: string
  name: string
  email: string
  password: string
}

// Pick specific properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>

// Omit specific properties
type UserWithoutPassword = Omit<User, 'password'>
```

### Partial and Required

Make properties optional or required:

```typescript
interface User {
  id: string
  name: string
  email: string
}

// All properties optional
type PartialUser = Partial<User>

// All properties required
type RequiredUser = Required<User>
```

### Record

Create object types with specific key-value pairs:

```typescript
// Record of string keys and boolean values
type FeatureFlags = Record<string, boolean>

const flags: FeatureFlags = {
  darkMode: true,
  newDesign: false,
}

// Record with specific keys
type Theme = Record<'primary' | 'secondary' | 'accent', string>

const theme: Theme = {
  primary: '#3B82F6',
  secondary: '#6B7280',
  accent: '#8B5CF6',
}
```

## Type Guards

### Type narrowing

```typescript
function processValue(value: string | number) {
  if (typeof value === 'string') {
    // TypeScript knows value is string here
    return value.toUpperCase()
  } else {
    // TypeScript knows value is number here
    return value.toFixed(2)
  }
}
```

### Custom type guards

```typescript
interface User {
  type: 'user'
  name: string
}

interface Admin {
  type: 'admin'
  name: string
  permissions: string[]
}

function isAdmin(user: User | Admin): user is Admin {
  return user.type === 'admin'
}

function greet(user: User | Admin) {
  if (isAdmin(user)) {
    // TypeScript knows user is Admin
    console.log(user.permissions)
  } else {
    // TypeScript knows user is User
    console.log(user.name)
  }
}
```

## Generic Types

### Generic Components

```typescript
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

// Usage
<List
  items={users}
  renderItem={(user) => <div>{user.name}</div>}
/>
```

### Generic Functions

```typescript
function identity<T>(value: T): T {
  return value
}

const num = identity(42)        // Type: number
const str = identity('hello')   // Type: string
```

## Type Inference

### Let TypeScript Infer

Trust TypeScript's type inference when possible:

```typescript
// Good: Type inferred as string
const name = 'John'

// Unnecessary: Explicit type
const name: string = 'John'

// Good: Type inferred from function return
function getUser() {
  return { id: 1, name: 'John' }
}
const user = getUser()  // Type: { id: number, name: string }
```

### When to Add Explicit Types

Add types when inference isn't sufficient:

```typescript
// Function parameters always need types
function greet(name: string) {
  return `Hello ${name}`
}

// Complex objects
const config: Config = {
  api: 'https://api.example.com',
  timeout: 5000,
}

// Unclear initial values
const user: User | null = null
```

## Best Practices

### 1. Enable Strict Mode

Always use strict TypeScript settings:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### 2. Avoid `any`

Never use `any` type. Use `unknown` if the type is truly unknown:

```typescript
// Bad
const data: any = fetchData()

// Good
const data: unknown = fetchData()
if (typeof data === 'object' && data !== null) {
  // Type guard before using
}
```

### 3. Use Type Aliases for Complex Types

```typescript
// Good: Named type
type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps {
  variant: ButtonVariant
}

// Avoid: Inline complex type
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
}
```

### 4. Prefer Interfaces for Objects

Use interfaces for object shapes:

```typescript
// Good: Interface for object
interface User {
  id: string
  name: string
}

// Use type for unions, primitives
type Status = 'active' | 'inactive'
type ID = string | number
```

### 5. Type Component Props

Always type component props:

```typescript
// Good: Typed props
interface CardProps {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  // Implementation
}

// Avoid: Untyped props
export function Card({ title, children }) {
  // No type safety
}
```

## Common Patterns

### Discriminated Unions

```typescript
type Success = {
  status: 'success'
  data: User
}

type Error = {
  status: 'error'
  error: string
}

type Result = Success | Error

function handleResult(result: Result) {
  if (result.status === 'success') {
    // TypeScript knows result is Success
    console.log(result.data)
  } else {
    // TypeScript knows result is Error
    console.log(result.error)
  }
}
```

### Const Assertions

```typescript
// Inferred as string
const color = 'blue'

// Inferred as literal type 'blue'
const color = 'blue' as const

// Object with literal types
const config = {
  api: 'https://api.example.com',
  timeout: 5000,
} as const

// config.api has type 'https://api.example.com' (not string)
```

## Next Steps

- [Component Architecture](03-components.md) - Component design patterns
- [Development Workflows](../02-development/02-workflows.md) - Development practices
- [Testing Guide](../02-development/03-testing.md) - Testing with TypeScript
