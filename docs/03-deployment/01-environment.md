# Environment Configuration

This document covers environment configuration for the Nadi web application across different deployment
environments.

## Environment Variables

Next.js supports environment variables through `.env` files:

```text
.env.local          # Local development (not committed)
.env.development    # Development environment
.env.production     # Production environment
.env                # All environments
```

## Required Variables

Currently, the application doesn't require environment variables for basic operation. However, you may need
to add them as the project evolves.

### Example Configuration

```bash
# .env.local (for local development)
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.nadi.pro
```

## Variable Prefixes

Next.js has specific rules for environment variables:

### Server-Side Variables

Available only on the server:

```bash
# .env
DATABASE_URL=postgresql://...
API_SECRET=your-secret-key
```

Usage:

```typescript
// Only works in Server Components or API routes
const dbUrl = process.env.DATABASE_URL
```

### Client-Side Variables

Must be prefixed with `NEXT_PUBLIC_`:

```bash
# .env
NEXT_PUBLIC_API_URL=https://api.nadi.pro
NEXT_PUBLIC_APP_NAME=Nadi
```

Usage:

```typescript
// Works in both Server and Client Components
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## Environment-Specific Configuration

### Development

```bash
# .env.development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api-dev.nadi.pro
NODE_ENV=development
```

### Production

```bash
# .env.production
NEXT_PUBLIC_APP_URL=https://nadi.pro
NEXT_PUBLIC_API_URL=https://api.nadi.pro
NODE_ENV=production
```

## Using Environment Variables

### In Server Components

```typescript
// Server Component
export default function Page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  return <div>API: {apiUrl}</div>
}
```

### In Client Components

```typescript
'use client'

export function Component() {
  // Only NEXT_PUBLIC_ variables work here
  const appName = process.env.NEXT_PUBLIC_APP_NAME
  return <div>{appName}</div>
}
```

### In next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR,
  },
}

module.exports = nextConfig
```

## Security Best Practices

### 1. Never Commit Secrets

Add to `.gitignore`:

```text
.env*.local
.env.local
```

### 2. Use Server-Side Variables for Secrets

```bash
# ❌ Bad: Secret exposed to client
NEXT_PUBLIC_API_SECRET=secret-key

# ✅ Good: Secret only on server
API_SECRET=secret-key
```

### 3. Validate Environment Variables

```typescript
// src/env.ts (example)
const requiredEnvVars = [
  'NEXT_PUBLIC_API_URL',
] as const

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`)
  }
})

export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
}
```

## Platform-Specific Configuration

### Vercel

Vercel automatically loads environment variables from the dashboard:

1. Go to Project Settings
2. Navigate to Environment Variables
3. Add variables for each environment
4. Redeploy to apply changes

### Netlify

Add environment variables in `netlify.toml`:

```toml
[build.environment]
  NEXT_PUBLIC_API_URL = "https://api.nadi.pro"

[context.production.environment]
  NEXT_PUBLIC_APP_URL = "https://nadi.pro"

[context.deploy-preview.environment]
  NEXT_PUBLIC_APP_URL = "https://deploy-preview.nadi.pro"
```

Or in the Netlify dashboard:

1. Go to Site Settings
2. Build & Deploy → Environment
3. Add variables

### Docker

Pass environment variables in `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    environment:
      - NEXT_PUBLIC_API_URL=https://api.nadi.pro
      - NODE_ENV=production
    env_file:
      - .env.production
```

## Runtime Configuration

For values that change at runtime, use `publicRuntimeConfig`:

```javascript
// next.config.js
module.exports = {
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
  },
}
```

Access in components:

```typescript
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const apiUrl = publicRuntimeConfig.apiUrl
```

## Common Environment Variables

Here are common variables you might need:

```bash
# App Configuration
NEXT_PUBLIC_APP_NAME=Nadi
NEXT_PUBLIC_APP_URL=https://nadi.pro
NEXT_PUBLIC_APP_VERSION=2.0.0

# API Configuration
NEXT_PUBLIC_API_URL=https://api.nadi.pro
API_SECRET=your-secret-key

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CHAT=false

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_POSTHOG_KEY=phc_xxxxx

# Third-Party Services
NEXT_PUBLIC_STRIPE_PK=pk_live_xxxxx
STRIPE_SK=sk_live_xxxxx
```

## Troubleshooting

### Variable Not Available

If environment variable is undefined:

1. Check the prefix (`NEXT_PUBLIC_` for client)
2. Restart dev server after adding new variables
3. Check `.env` file location (should be in project root)
4. Verify variable name spelling

### Variable Changes Not Reflected

```bash
# Stop dev server
# Ctrl+C

# Restart
npm run dev
```

### Build-Time vs Runtime

Environment variables are embedded at build time:

```bash
# Build with production variables
npm run build

# Start server (uses build-time variables)
npm start
```

To change variables, rebuild:

```bash
npm run build
npm start
```

## Next Steps

- [Build Process](02-build.md) - Understanding the build process
- [Deployment Guide](03-deployment-guide.md) - Deploy the application
- [Monitoring](04-monitoring.md) - Monitor your deployment
