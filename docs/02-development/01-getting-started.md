# Getting Started

This guide will help you set up your development environment and start working on the Nadi web application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **npm** 9.x or higher (comes with Node.js)
- **Git** for version control

### Checking Your Environment

Verify your installations:

```bash
node --version    # Should be v18.x or higher
npm --version     # Should be 9.x or higher
git --version     # Any recent version
```

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/nadi-web.git
cd nadi-web
```

### 2. Install Dependencies

Install all project dependencies:

```bash
npm install
```

This will install:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Development tools (ESLint, Prettier)
- All other dependencies from `package.json`

### 3. Run Development Server

Start the Next.js development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

You should see:

```text
  ▲ Next.js 15.x
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

Open `http://localhost:3000` in your browser to see the application.

## Project Structure

After installation, your project structure will look like this:

```text
nadi-web/
├── .next/              # Next.js build output (generated)
├── node_modules/       # Dependencies (generated)
├── public/            # Static assets
├── src/
│   ├── app/          # Next.js App Router pages
│   ├── components/   # React components
│   ├── images/       # Image assets
│   └── styles/       # Global styles
├── docs/             # Documentation (this folder)
├── .gitignore        # Git ignore rules
├── next.config.js    # Next.js configuration
├── package.json      # Dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── prettier.config.js # Prettier configuration
├── tsconfig.json     # TypeScript configuration
└── README.md         # Project overview
```

## Available Scripts

The project includes several npm scripts:

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server (requires build first)
npm start

# Run ESLint
npm run lint
```

### Script Details

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `next dev` | Start development server at `localhost:3000` |
| `build` | `next build` | Build optimized production bundle |
| `start` | `next start` | Start production server |
| `lint` | `next lint` | Run ESLint to check code quality |

## Development Workflow

### 1. Start Development Server

```bash
npm run dev
```

### 2. Make Changes

Edit files in the `src` directory. The development server will automatically:

- Hot reload the page when you save
- Show errors in the browser
- Display compile errors in the terminal

### 3. Check Code Quality

Before committing, run the linter:

```bash
npm run lint
```

Fix any issues reported.

### 4. Test Your Changes

Open `http://localhost:3000` and verify:

- Page loads correctly
- No console errors
- Dark mode works (toggle with theme button)
- Responsive design works (resize browser)

## Making Your First Change

Let's make a simple change to verify everything works:

### 1. Open the Hero Component

```bash
# Open in your editor
code src/components/Hero.tsx
```

### 2. Find the Main Heading

Look for the heading text around line 50:

```typescript
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
  <span className="block text-gray-900 dark:text-white">
    debug().
  </span>
  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
    ship().
  </span>
  <span className="block text-gray-900 dark:text-white">
    repeat();
  </span>
</h1>
```

### 3. Make a Change

Change `debug().` to `code().`:

```typescript
<span className="block text-gray-900 dark:text-white">
  code().
</span>
```

### 4. See the Result

Save the file and check your browser at `http://localhost:3000`. The heading should update
automatically without refreshing the page (hot reload).

### 5. Revert the Change

Change it back to `debug().` to restore the original content.

## IDE Setup

### Visual Studio Code (Recommended)

Install these extensions for the best experience:

1. **ES7+ React/Redux/React-Native snippets** - React snippets
2. **Tailwind CSS IntelliSense** - Tailwind class autocomplete
3. **TypeScript Vue Plugin (Volar)** - TypeScript support
4. **ESLint** - Real-time linting
5. **Prettier - Code formatter** - Auto-formatting
6. **GitLens** - Git integration

### Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Common Issues

### Port Already in Use

If port 3000 is already in use:

```bash
# Use a different port
PORT=3001 npm run dev
```

### Node Version Issues

If you see errors about Node version:

```bash
# Check your Node version
node --version

# Should be v18.x or higher
# If not, install Node 18+ from nodejs.org
```

### Module Not Found

If you see "Module not found" errors:

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

If you see TypeScript errors in your editor:

```bash
# Restart TypeScript server in VS Code
# Press Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
# Type "TypeScript: Restart TS Server"
```

### Cache Issues

If changes aren't reflecting:

```bash
# Delete .next folder and restart
rm -rf .next
npm run dev
```

## Getting Help

If you encounter issues:

1. Check the [common issues](#common-issues) section above
2. Search existing GitHub issues
3. Ask in the project Slack/Discord
4. Create a new GitHub issue with details

## Next Steps

Now that you have the project running:

- Read [Development Workflows](02-workflows.md) to learn best practices
- Explore [Component Architecture](../01-architecture/03-components.md) to understand component patterns
- Review [Code Quality](04-code-quality.md) for linting and formatting guidelines
