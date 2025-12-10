# Monitoring

This document covers monitoring strategies for the Nadi web application.

## Recommended Monitoring Tools

### Vercel Analytics

If deployed on Vercel, enable built-in analytics:

1. Go to Project Settings → Analytics
2. Enable Web Analytics
3. View real-time metrics

Metrics include:

- Page views
- Unique visitors
- Top pages
- Traffic sources
- Device types

### Vercel Speed Insights

Monitor Core Web Vitals:

```bash
npm install @vercel/speed-insights
```

```typescript
// src/app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Google Analytics

Add GA4:

```bash
npm install @next/third-parties
```

```typescript
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## Performance Monitoring

### Core Web Vitals

Monitor these metrics:

- **LCP** (Largest Contentful Paint) - < 2.5s
- **FID** (First Input Delay) - < 100ms
- **CLS** (Cumulative Layout Shift) - < 0.1

### Lighthouse

Run Lighthouse audits:

```bash
# Chrome DevTools
# 1. Open DevTools (F12)
# 2. Go to Lighthouse tab
# 3. Click "Generate report"
```

Target scores:

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Error Tracking

### Sentry

Add error tracking:

```bash
npm install @sentry/nextjs
```

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
})
```

## Uptime Monitoring

### Recommended Services

- **UptimeRobot** - Free uptime monitoring
- **Pingdom** - Advanced monitoring
- **StatusCake** - Performance monitoring

### Setup

1. Create account on monitoring service
2. Add website URL
3. Configure check interval (5 minutes)
4. Set up alerts (email, SMS)

## Logging

### Console Logs

Remove console.logs in production:

```typescript
// ❌ Avoid in production
console.log('Debug info')

// ✅ Good: Conditional logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info')
}
```

### Server Logs

On Vercel, view logs:

1. Go to Deployments
2. Click deployment
3. View "Functions" tab for logs

## Alerts

### Set Up Alerts For

- **Downtime** - Site not responding
- **Errors** - JavaScript errors spike
- **Performance** - Slow page loads
- **Traffic** - Unusual traffic patterns

### Alert Channels

- Email
- Slack
- SMS
- PagerDuty

## Health Checks

Create health check endpoint:

```typescript
// src/app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  })
}
```

Monitor endpoint:

```bash
curl https://nadi.pro/api/health
```

## Dashboard

Create a monitoring dashboard with:

- Uptime percentage
- Response times
- Error rates
- Traffic metrics
- Core Web Vitals

## Next Steps

- [Environment Configuration](01-environment.md) - Configure environments
- [Build Process](02-build.md) - Optimize builds
- [Deployment Guide](03-deployment-guide.md) - Deploy updates
