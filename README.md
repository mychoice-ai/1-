# Next.js + Tailwind Starter

A minimal, production-ready Next.js (App Router) starter with Tailwind CSS, TypeScript, ESLint, and sensible defaults.

## Quick start

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Scripts

- dev: Start Next dev server
- build: Production build
- start: Run production server
- lint: Lint code
- format: Format with Prettier
- typecheck: Type-check project

## Structure

- app/ — App Router pages, layouts, API routes
- app/api/health — Healthcheck endpoint
- components/ — UI components
- styles — Global styles in app/globals.css

## Environment

Copy `.env.example` to `.env.local` and set values:

```
# Public
NEXT_PUBLIC_APP_NAME=My App
NEXT_PUBLIC_API_BASE=/api
```

## Deploy

- Vercel recommended: connect repo and deploy

## License

MIT