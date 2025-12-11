# Nadi Web

Real-time error tracking and application monitoring platform for developers. This repository contains the marketing website and public-facing interface for Nadi.

## Overview

Nadi helps development teams ship with confidence by providing real-time crash reporting, performance monitoring, and actionable insights. This web application showcases the product and provides access to the main application at [app.nadi.pro](https://app.nadi.pro).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS 4.1
- **Components**: Headless UI 2.2
- **Theme**: next-themes (dark mode support)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables (optional):

```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local and set your launch date
# NEXT_PUBLIC_LAUNCH_DATE=2026-01-15T00:00:00
```

If not set, the launch date defaults to **January 31, 2026**.

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Documentation

Comprehensive documentation is available in the `docs/` directory:

- **[Architecture](docs/01-architecture/README.md)** - System design and technical structure
- **[Development](docs/02-development/README.md)** - Development guides and workflows
- **[Deployment](docs/03-deployment/README.md)** - Deployment procedures and configuration
- **[Components](docs/04-components/README.md)** - Component API reference

### Quick Links

- [Getting Started Guide](docs/02-development/01-getting-started.md)
- [Project Overview](docs/01-architecture/01-overview.md)
- [Development Workflows](docs/02-development/02-workflows.md)
- [Component Architecture](docs/01-architecture/03-components.md)

## Available Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Run ESLint
```

## Project Structure

```text
nadi-web/
├── docs/              # Documentation
├── public/            # Static assets
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   ├── images/       # Image assets
│   └── styles/       # Global styles
└── package.json
```

## Features

- Server-side rendering with Next.js 15
- Dark mode support
- Fully responsive design
- TypeScript for type safety
- Tailwind CSS for styling
- SEO optimized

## Contributing

We welcome contributions! Please read our [Development Workflows](docs/02-development/02-workflows.md) guide before submitting pull requests.

## License

This site template is a commercial product and is licensed under the [Tailwind Plus license](https://tailwindcss.com/plus/license).

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Headless UI Documentation](https://headlessui.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
