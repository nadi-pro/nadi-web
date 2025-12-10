# Testing

This document covers testing strategies and best practices for the Nadi web application.

## Testing Strategy

Currently, the project does not have a formal testing setup. This guide outlines recommended testing practices
for future implementation.

## Recommended Testing Stack

For a Next.js 15 + React 19 + TypeScript project, we recommend:

- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing
- **MSW** - API mocking

## Installation (Future)

To set up testing, install these dependencies:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event @types/jest jest-environment-jsdom
```

## Testing Types

### Unit Tests

Test individual functions and utilities:

```typescript
// src/utils/formatDate.test.ts
import { formatDate } from './formatDate'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2024-01-15')
    expect(formatDate(date)).toBe('January 15, 2024')
  })

  it('handles invalid dates', () => {
    expect(formatDate(null)).toBe('')
  })
})
```

### Component Tests

Test React components in isolation:

```typescript
// src/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('handles click events', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies correct styles for variants', () => {
    const { rerender } = render(<Button variant="primary">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600')

    rerender(<Button variant="secondary">Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200')
  })
})
```

### Integration Tests

Test component interactions:

```typescript
// src/components/LoginForm.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  it('submits form with valid data', async () => {
    const handleSubmit = jest.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    await userEvent.type(screen.getByLabelText(/email/i), 'user@example.com')
    await userEvent.type(screen.getByLabelText(/password/i), 'password123')
    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'password123',
    })
  })

  it('shows validation errors', async () => {
    render(<LoginForm onSubmit={jest.fn()} />)

    await userEvent.click(screen.getByRole('button', { name: /login/i }))

    expect(screen.getByText(/email is required/i)).toBeInTheDocument()
    expect(screen.getByText(/password is required/i)).toBeInTheDocument()
  })
})
```

### E2E Tests

Test complete user flows with Playwright:

```typescript
// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test'

test('user can log in', async ({ page }) => {
  await page.goto('http://localhost:3000/login')

  await page.fill('input[name="email"]', 'user@example.com')
  await page.fill('input[name="password"]', 'password123')
  await page.click('button[type="submit"]')

  await expect(page).toHaveURL('http://localhost:3000/dashboard')
  await expect(page.locator('h1')).toContainText('Dashboard')
})
```

## Testing Best Practices

### 1. Test User Behavior

Test what users see and do, not implementation details:

```typescript
// ✅ Good: Testing user behavior
const button = screen.getByRole('button', { name: /submit/i })
await userEvent.click(button)
expect(screen.getByText(/success/i)).toBeInTheDocument()

// ❌ Avoid: Testing implementation
expect(component.state.submitted).toBe(true)
```

### 2. Use Semantic Queries

Prefer queries that match how users find elements:

```typescript
// ✅ Good: Semantic queries
screen.getByRole('button', { name: /submit/i })
screen.getByLabelText(/email/i)
screen.getByText(/welcome/i)

// ❌ Avoid: Implementation queries
screen.getByTestId('submit-button')
screen.getByClassName('email-input')
```

### 3. Test Accessibility

Ensure components are accessible:

```typescript
describe('Button', () => {
  it('is keyboard accessible', async () => {
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button')
    button.focus()
    await userEvent.keyboard('{Enter}')

    expect(handleClick).toHaveBeenCalled()
  })

  it('has proper ARIA attributes', () => {
    render(<Button aria-label="Close menu" />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Close menu')
  })
})
```

### 4. Mock External Dependencies

Mock API calls and external services:

```typescript
// Using MSW (Mock Service Worker)
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  rest.get('/api/user', (req, res, ctx) => {
    return res(
      ctx.json({
        id: '1',
        name: 'John Doe',
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

### 5. Test Edge Cases

Don't just test the happy path:

```typescript
describe('formatDate', () => {
  it('handles valid dates', () => {
    expect(formatDate(new Date('2024-01-15'))).toBe('January 15, 2024')
  })

  it('handles null', () => {
    expect(formatDate(null)).toBe('')
  })

  it('handles undefined', () => {
    expect(formatDate(undefined)).toBe('')
  })

  it('handles invalid dates', () => {
    expect(formatDate(new Date('invalid'))).toBe('Invalid date')
  })
})
```

## Manual Testing Checklist

Until automated tests are implemented, use this checklist:

### Functionality

- [ ] All features work as expected
- [ ] Form submissions work
- [ ] Navigation works correctly
- [ ] Links go to correct destinations
- [ ] Error states display properly

### Responsive Design

- [ ] Mobile (375px - 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Ultra-wide (1920px+)

### Dark Mode

- [ ] Toggle switches themes
- [ ] All text is readable
- [ ] Colors have sufficient contrast
- [ ] Images/icons work in both modes
- [ ] No flashing on theme change

### Accessibility

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader friendly
- [ ] ARIA labels present
- [ ] Color contrast meets WCAG AA

### Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Performance

- [ ] Page loads quickly (< 3s)
- [ ] No layout shift
- [ ] Images load properly
- [ ] No JavaScript errors
- [ ] No memory leaks

## Test Coverage Goals

When implementing tests, aim for:

- **80%+ code coverage** - Good baseline
- **100% critical paths** - Authentication, checkout, etc.
- **Edge cases covered** - Null, undefined, errors
- **Accessibility tested** - Keyboard, screen readers

## Running Tests (Future)

Once tests are implemented:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run specific test file
npm test Button.test.tsx

# Run E2E tests
npm run test:e2e
```

## Continuous Integration

In CI/CD pipeline, run:

```bash
# Install dependencies
npm ci

# Run linter
npm run lint

# Run type check
npm run type-check

# Run tests
npm test -- --coverage

# Build production
npm run build

# Run E2E tests
npm run test:e2e
```

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## Next Steps

- [Code Quality](04-code-quality.md) - Linting and formatting
- [Development Workflows](02-workflows.md) - Development practices
- [Component Architecture](../01-architecture/03-components.md) - Component patterns
