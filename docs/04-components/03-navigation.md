# Navigation Components

Components for site navigation.

## Navbar

Main navigation bar with logo, links, and theme toggle.

### Location

`src/components/Navbar.tsx`

### Usage

```typescript
import { Navbar } from '@/components/Navbar'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>Content</main>
    </>
  )
}
```

### Features

- Logo on left
- Navigation links
- Dark mode toggle
- Mobile responsive

## NavLink

Individual navigation link with active state support.

### Location

`src/components/NavLink.tsx`

## Header

Page header component.

### Location

`src/components/Header.tsx`

## Footer

Site footer with links and information.

### Location

`src/components/Footer.tsx`

### Usage

```typescript
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <main>Content</main>
      <Footer />
    </>
  )
}
```

### Features

- Company information
- Social links
- Copyright notice
- Responsive layout

## Next Steps

- [UI Components](04-ui-components.md)
- [Content Sections](05-content-sections.md)
