# Development Workflows

This document outlines best practices and workflows for developing the Nadi web application.

## Git Workflow

### Branch Strategy

We use a simplified Git flow:

- **main** - Production-ready code
- **feature/** - New features (`feature/dark-mode-toggle`)
- **fix/** - Bug fixes (`fix/navbar-mobile`)
- **docs/** - Documentation updates (`docs/component-guide`)

### Creating a Feature Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add: feature description"

# Push to remote
git push origin feature/your-feature-name
```

### Commit Message Convention

Use clear, descriptive commit messages:

```bash
# Format: <Type>: <Description>

# Types:
Add: New feature or file
Update: Modify existing feature
Fix: Bug fix
Refactor: Code restructuring
Docs: Documentation changes
Style: Formatting, whitespace
Test: Add or update tests
Chore: Build process, dependencies

# Examples:
git commit -m "Add: dark mode toggle component"
git commit -m "Fix: navbar mobile menu overflow"
git commit -m "Update: hero section copy"
git commit -m "Docs: add component usage examples"
```

### Pull Request Process

1. **Create PR** from feature branch to main
2. **Title**: Clear description of changes
3. **Description**: Explain what and why
4. **Screenshots**: For UI changes
5. **Request review** from team members
6. **Address feedback** and update PR
7. **Merge** after approval

## Code Organization

### File Naming

Follow these conventions:

```text
# Components: PascalCase
Button.tsx
Hero.tsx
DarkModeToggle.tsx

# Pages: lowercase
page.tsx
layout.tsx
not-found.tsx

# Utilities: camelCase
formatDate.ts
validateEmail.ts
```

### Import Order

Organize imports consistently:

```typescript
// 1. External dependencies
import { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

// 2. Internal components
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

// 3. Types
import type { User } from '@/types'

// 4. Styles (if any)
import styles from './Component.module.css'
```

### Component Structure

Organize component code in this order:

```typescript
// 1. Imports
import { useState } from 'react'
import clsx from 'clsx'

// 2. Types
interface ComponentProps {
  title: string
  variant?: 'primary' | 'secondary'
}

// 3. Constants
const VARIANTS = {
  primary: 'bg-blue-600',
  secondary: 'bg-gray-200',
}

// 4. Component
export function Component({ title, variant = 'primary' }: ComponentProps) {
  // 4a. Hooks
  const [isOpen, setIsOpen] = useState(false)

  // 4b. Handlers
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  // 4c. Render
  return (
    <div className={clsx(VARIANTS[variant])}>
      <h2>{title}</h2>
      <button onClick={handleClick}>Toggle</button>
    </div>
  )
}
```

## Development Practices

### Server vs Client Components

Choose the right component type:

```typescript
// ✅ Server Component (default) - for static content
export function ProductList() {
  return <div>Product List</div>
}

// ✅ Client Component - only when needed
'use client'
export function InteractiveFilter() {
  const [filter, setFilter] = useState('')
  return <input value={filter} onChange={e => setFilter(e.target.value)} />
}
```

Use Client Components only when you need:

- State (`useState`, `useReducer`)
- Effects (`useEffect`, `useLayoutEffect`)
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`localStorage`, `window`)
- Custom hooks that use the above

### TypeScript Best Practices

1. **Enable strict mode** (already enabled)
2. **Type all props** - No implicit any
3. **Use type inference** - Let TypeScript infer when obvious
4. **Avoid type assertions** - Use type guards instead

```typescript
// ✅ Good: Type inference
const name = 'John'  // Type: string (inferred)

// ❌ Avoid: Unnecessary type assertion
const name = 'John' as string

// ✅ Good: Type guard
function isString(value: unknown): value is string {
  return typeof value === 'string'
}

// ❌ Avoid: Type assertion
const value = data as string
```

### Styling Guidelines

1. **Use Tailwind utilities** - Avoid custom CSS
2. **Mobile-first** - Start with mobile, add breakpoints up
3. **Dark mode** - Always provide dark mode variants
4. **Consistent spacing** - Use Tailwind's spacing scale

```typescript
// ✅ Good: Tailwind utilities with dark mode
<div className="bg-white dark:bg-gray-900 p-4 md:p-6">

// ❌ Avoid: Arbitrary values unless necessary
<div className="bg-[#f5f5f5] p-[17px]">

// ✅ Good: Mobile-first responsive
<div className="text-base md:text-lg lg:text-xl">

// ✅ Good: Class composition with clsx
<div className={clsx(
  'base-classes',
  isActive && 'active-classes',
  className
)}>
```

### Accessibility

Always consider accessibility:

```typescript
// ✅ Good: Semantic HTML and ARIA
<button
  aria-label="Close menu"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <CloseIcon />
</button>

// ❌ Avoid: Non-semantic div as button
<div onClick={handleClose}>
  <CloseIcon />
</div>

// ✅ Good: Focus styles
<a
  href="/about"
  className="focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  About
</a>
```

## Performance Optimization

### Image Optimization

Use Next.js Image component:

```typescript
import Image from 'next/image'

// ✅ Good: Next.js Image
<Image
  src="/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority  // For above-fold images
/>

// ❌ Avoid: Regular img tag
<img src="/hero.jpg" alt="Hero image" />
```

### Code Splitting

Lazy load components when appropriate:

```typescript
import dynamic from 'next/dynamic'

// Lazy load component
const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
})

export function Page() {
  return (
    <div>
      <HeavyComponent />
    </div>
  )
}
```

### Minimize Client JavaScript

Keep most components as Server Components:

```typescript
// ✅ Good: Server Component for static content
export function Hero() {
  return <section>Static hero content</section>
}

// ✅ Good: Client Component only for interactive parts
'use client'
export function InteractiveButton() {
  return <button onClick={handleClick}>Click</button>
}
```

## Testing Checklist

Before submitting PR, verify:

- [ ] Code runs without errors (`npm run dev`)
- [ ] Linting passes (`npm run lint`)
- [ ] TypeScript compiles without errors
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Dark mode works correctly
- [ ] No console errors or warnings
- [ ] Accessibility: keyboard navigation works
- [ ] Accessibility: screen reader friendly
- [ ] Performance: no unnecessary re-renders
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)

## Code Review Guidelines

### For Authors

When creating a PR:

1. **Self-review** first - Check your own code
2. **Keep it focused** - One feature per PR
3. **Write description** - Explain what and why
4. **Add screenshots** - For UI changes
5. **Update docs** - If needed
6. **Request specific reviewers** - Tag relevant team members

### For Reviewers

When reviewing a PR:

1. **Check functionality** - Pull and test locally
2. **Review code quality** - Follow our standards
3. **Test edge cases** - Try to break it
4. **Provide constructive feedback** - Be helpful
5. **Approve when ready** - Or request changes

## Common Patterns

### Conditional Rendering

```typescript
// ✅ Good: Logical AND for simple conditions
{isLoggedIn && <UserMenu />}

// ✅ Good: Ternary for if/else
{isLoggedIn ? <UserMenu /> : <LoginButton />}

// ✅ Good: Early return for complex conditions
if (!user) return null
return <UserProfile user={user} />
```

### Event Handlers

```typescript
// ✅ Good: Inline for simple handlers
<button onClick={() => setOpen(true)}>Open</button>

// ✅ Good: Defined function for complex handlers
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // Complex logic
}
<form onSubmit={handleSubmit}>...</form>
```

### Data Fetching

```typescript
// In Server Components (default)
async function Page() {
  const data = await fetchData()
  return <div>{data.title}</div>
}

// In Client Components
'use client'
function Page() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData().then(setData)
  }, [])

  return <div>{data?.title}</div>
}
```

## Resources

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Tools

- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Tailwind Play](https://play.tailwindcss.com)
- [Can I Use](https://caniuse.com) - Browser compatibility

## Next Steps

- [Testing Guide](03-testing.md) - Learn about testing strategies
- [Code Quality](04-code-quality.md) - Linting and formatting
- [Component Architecture](../01-architecture/03-components.md) - Component patterns
