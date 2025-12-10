# Build Process

This document explains the build process for the Nadi web application and optimization strategies.

## Build Command

Build the production-optimized application:

```bash
npm run build
```

This runs `next build` which:

1. Compiles TypeScript to JavaScript
2. Optimizes React components
3. Generates static pages
4. Creates optimized bundles
5. Processes CSS with Tailwind and PostCSS

## Build Output

```text
.next/
├── cache/                 # Build cache
├── server/               # Server-side code
├── static/               # Static assets
└── types/                # Generated TypeScript types
```

## Build Optimizations

### Automatic Optimizations

Next.js automatically:

- **Code splitting** - Each page gets its own bundle
- **Tree shaking** - Removes unused code
- **Minification** - Compresses JavaScript and CSS
- **Image optimization** - Optimizes images on demand
- **Font optimization** - Optimizes Google Fonts

### Manual Optimizations

#### 1. Server Components

Use Server Components by default for smaller bundles:

```typescript
// ✅ Server Component (no client JavaScript)
export function ProductList() {
  return <div>List</div>
}
```

#### 2. Dynamic Imports

Lazy load heavy components:

```typescript
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
})
```

#### 3. Image Optimization

Use Next.js Image component:

```typescript
import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={600}
  priority  // For above-fold images
/>
```

## Build Analysis

Analyze bundle size:

```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

## Production Build

### 1. Build

```bash
npm run build
```

### 2. Test Production Build Locally

```bash
npm start
```

Visit `http://localhost:3000` to test the production build.

### 3. Verify

Check for:

- No console errors
- All pages load correctly
- Images load properly
- Dark mode works
- Links work

## Build Errors

### Common Build Errors

#### Type Errors

```bash
Type error: Property 'name' does not exist
```

Fix: Check TypeScript types and fix errors.

#### Module Not Found

```bash
Module not found: Can't resolve '@/components/Button'
```

Fix: Check import paths and file names.

#### Build Timeout

```bash
Build exceeded maximum duration
```

Fix: Optimize build or increase timeout in platform settings.

## Performance Metrics

After build, check:

- **Bundle size** - Keep under 200KB for main bundle
- **Build time** - Should be under 2 minutes
- **Page load time** - Under 3 seconds
- **Lighthouse score** - Aim for 90+

## Next Steps

- [Deployment Guide](03-deployment-guide.md) - Deploy the application
- [Monitoring](04-monitoring.md) - Monitor performance
