# Code Quality

This document covers code quality tools, linting, formatting, and best practices for maintaining high code
quality in the Nadi web application.

## Code Quality Tools

The project uses several tools to maintain code quality:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Next.js** - Built-in optimizations

## ESLint

### Configuration

The project uses Next.js's recommended ESLint configuration:

```javascript
// .eslintrc.json (future)
{
  "extends": "next/core-web-vitals"
}
```

### Running ESLint

Check code quality:

```bash
# Lint all files
npm run lint

# Lint and fix auto-fixable issues
npm run lint -- --fix

# Lint specific file
npm run lint src/components/Button.tsx
```

### Common ESLint Rules

| Rule | Description | Example |
|------|-------------|---------|
| `no-unused-vars` | No unused variables | Remove unused imports |
| `no-console` | Avoid console.log | Use proper logging |
| `prefer-const` | Use const when possible | `const` over `let` |
| `react-hooks/rules-of-hooks` | Follow hooks rules | Hooks at top level |
| `react-hooks/exhaustive-deps` | Correct dependencies | Complete dep arrays |

### Fixing ESLint Errors

```typescript
// ❌ Error: unused variable
import { useState, useEffect } from 'react'  // useEffect not used

// ✅ Fix: remove unused import
import { useState } from 'react'

// ❌ Error: missing dependency
useEffect(() => {
  fetchData(userId)
}, [])

// ✅ Fix: add dependency
useEffect(() => {
  fetchData(userId)
}, [userId])

// ❌ Error: console.log in production
console.log('Debug:', data)

// ✅ Fix: remove or use proper logging
// Remove for production, or:
if (process.env.NODE_ENV === 'development') {
  console.log('Debug:', data)
}
```

## Prettier

### Configuration

Prettier configuration in `prettier.config.js`:

```javascript
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
}
```

### Running Prettier

Format code:

```bash
# Format all files
npx prettier --write .

# Format specific file
npx prettier --write src/components/Button.tsx

# Check formatting without changing
npx prettier --check .
```

### Prettier + Tailwind

The `prettier-plugin-tailwindcss` plugin automatically sorts Tailwind classes:

```typescript
// Before formatting
<div className="text-white p-4 bg-blue-600 hover:bg-blue-700 rounded-lg">

// After formatting (classes sorted)
<div className="rounded-lg bg-blue-600 p-4 text-white hover:bg-blue-700">
```

### IDE Integration

#### VS Code

Install Prettier extension and add to settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## TypeScript Type Checking

### Running Type Check

```bash
# Check types without building
npx tsc --noEmit

# Watch mode
npx tsc --noEmit --watch
```

### Common Type Errors

```typescript
// ❌ Error: missing type
function greet(name) {
  return `Hello ${name}`
}

// ✅ Fix: add type
function greet(name: string) {
  return `Hello ${name}`
}

// ❌ Error: type mismatch
const age: number = '25'

// ✅ Fix: correct type
const age: number = 25

// ❌ Error: possibly undefined
const user = users.find(u => u.id === '1')
console.log(user.name)  // Error: user might be undefined

// ✅ Fix: handle undefined
const user = users.find(u => u.id === '1')
if (user) {
  console.log(user.name)
}
// Or use optional chaining:
console.log(user?.name)
```

## Code Style Guidelines

### Naming Conventions

```typescript
// Components: PascalCase
export function Button() {}
export function DarkModeToggle() {}

// Functions: camelCase
function formatDate() {}
function handleClick() {}

// Constants: UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com'
const MAX_RETRIES = 3

// Types/Interfaces: PascalCase
interface User {}
type ButtonVariant = 'primary' | 'secondary'

// Variables: camelCase
const userName = 'John'
const isActive = true
```

### File Organization

```typescript
// Order of exports
export { Component }      // Named exports
export default Component  // Default export (if needed)
export type { Props }     // Type exports

// Prefer named exports
// ✅ Good
export function Button() {}

// ❌ Avoid default exports
export default function() {}
```

### Import/Export Style

```typescript
// ✅ Good: named imports
import { Button } from '@/components/Button'
import { formatDate, formatTime } from '@/utils/date'

// ❌ Avoid: default imports for components
import Button from '@/components/Button'

// ✅ Good: named exports
export function Button() {}
export function TextField() {}

// ❌ Avoid: default export
export default Button
```

## Code Review Checklist

Before submitting code for review:

### Functionality

- [ ] Code works as intended
- [ ] No console errors
- [ ] Handles edge cases
- [ ] Error handling in place

### Code Quality

- [ ] ESLint passes (`npm run lint`)
- [ ] TypeScript compiles (`npx tsc --noEmit`)
- [ ] Code formatted with Prettier
- [ ] No commented-out code
- [ ] No debugging statements

### Best Practices

- [ ] Server Components by default
- [ ] Client Components only when needed
- [ ] Props properly typed
- [ ] Meaningful variable names
- [ ] Functions are small and focused
- [ ] No magic numbers/strings

### Testing

- [ ] Manually tested in browser
- [ ] Tested in light and dark mode
- [ ] Tested on mobile, tablet, desktop
- [ ] Keyboard navigation works
- [ ] No accessibility issues

### Documentation

- [ ] Complex logic documented
- [ ] Component props documented (if complex)
- [ ] README updated (if needed)
- [ ] CHANGELOG updated (for releases)

## Pre-commit Hooks

Consider adding pre-commit hooks with Husky:

```bash
# Install Husky (future)
npm install --save-dev husky lint-staged
npx husky init
```

```javascript
// .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

```javascript
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css}": [
      "prettier --write"
    ]
  }
}
```

## Continuous Integration

In CI/CD pipeline, run these checks:

```bash
# Install dependencies
npm ci

# Lint code
npm run lint

# Type check
npx tsc --noEmit

# Format check
npx prettier --check .

# Build
npm run build
```

## Code Metrics

Monitor these metrics for code quality:

### Complexity

- Keep functions under 20 lines
- Maximum cyclomatic complexity: 10
- Avoid deeply nested code (max 3 levels)

### Maintainability

- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Clear, descriptive names
- Comments for complex logic only

### Performance

- Minimize bundle size
- Lazy load heavy components
- Optimize images
- Use Server Components by default

## Common Issues

### 1. Import Errors

```typescript
// ❌ Error: Cannot find module
import { Button } from 'components/Button'

// ✅ Fix: Use path alias
import { Button } from '@/components/Button'
```

### 2. Type Errors

```typescript
// ❌ Error: Property 'map' does not exist on type 'never'
const items = []
items.map(item => item.name)

// ✅ Fix: Add type
const items: Item[] = []
items.map(item => item.name)
```

### 3. ESLint Errors

```typescript
// ❌ Error: React Hook useEffect has a missing dependency
useEffect(() => {
  fetchData(userId)
}, [])

// ✅ Fix: Add dependency
useEffect(() => {
  fetchData(userId)
}, [userId])
```

### 4. Prettier Conflicts

```typescript
// If ESLint and Prettier conflict:
// 1. Run Prettier first
npx prettier --write .

// 2. Then run ESLint
npm run lint -- --fix
```

## Tools and Extensions

### VS Code Extensions

1. **ESLint** - Real-time linting
2. **Prettier** - Auto-formatting
3. **Error Lens** - Inline error display
4. **TypeScript Vue Plugin** - Better TS support
5. **Tailwind CSS IntelliSense** - Tailwind autocomplete

### CLI Tools

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Formatting
npx prettier --write .

# Bundle analysis
npm run build && npx @next/bundle-analyzer
```

## Resources

- [ESLint Rules](https://eslint.org/docs/latest/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

## Next Steps

- [Development Workflows](02-workflows.md) - Development practices
- [Testing](03-testing.md) - Testing strategies
- [Component Architecture](../01-architecture/03-components.md) - Component patterns
