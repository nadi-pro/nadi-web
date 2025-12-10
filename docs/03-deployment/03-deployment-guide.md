# Deployment Guide

This document provides step-by-step deployment instructions for various platforms.

## Deployment Platforms

### Vercel (Recommended)

Vercel is the recommended platform as it's built by the Next.js team.

#### Deploy to Vercel

1. **Push to GitHub**

```bash
git push origin main
```

2. **Import Project**

- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your repository
- Configure project settings
- Click "Deploy"

3. **Configure**

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

4. **Environment Variables**

Add environment variables in project settings.

#### Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records
4. Wait for SSL certificate

### Netlify

#### Deploy to Netlify

1. **Create netlify.toml**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Docker

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Compose

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### Build and Run

```bash
# Build image
docker build -t nadi-web .

# Run container
docker run -p 3000:3000 nadi-web
```

## Pre-Deployment Checklist

Before deploying:

- [ ] All tests pass
- [ ] Build succeeds locally (`npm run build`)
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Environment variables configured
- [ ] Images optimized
- [ ] Performance tested
- [ ] Security reviewed
- [ ] Documentation updated

## Post-Deployment Verification

After deployment:

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Dark mode works
- [ ] Mobile responsive
- [ ] Forms submit correctly
- [ ] Analytics working (if enabled)
- [ ] No console errors
- [ ] Performance acceptable

## Continuous Deployment

### GitHub Actions

Example workflow:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Rollback

If deployment fails:

### Vercel

1. Go to Deployments
2. Find previous working deployment
3. Click "⋯" → "Promote to Production"

### Docker

```bash
# Roll back to previous image
docker run -p 3000:3000 nadi-web:previous-tag
```

## Next Steps

- [Monitoring](04-monitoring.md) - Monitor your deployment
- [Environment Configuration](01-environment.md) - Configure environments
