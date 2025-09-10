# MyChoice AI - Next.js 15 Starter

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9-purple)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A minimal, production-ready Next.js 15 starter template with modern tooling and best practices. Built with the App Router, TypeScript, Tailwind CSS, and ESLint for scalable web applications.

## ✨ Features

- 🚀 **Next.js 15** with App Router and React 19
- 🎨 **Tailwind CSS 4** for utility-first styling
- 📝 **TypeScript** for type safety
- 🔧 **ESLint** for code quality
- 🎯 **Prettier** for code formatting
- 🧪 **Testing Setup** (Jest + React Testing Library + Playwright)
- 🎨 **shadcn/ui** components for consistent UI
- 📱 **Responsive Design** with mobile-first approach
- 🔍 **SEO Optimized** with metadata and structured data
- 🚀 **Performance Optimized** with image optimization and lazy loading
- 🔒 **Health Check API** for monitoring
- 📦 **Modern Package Management** with npm workspaces
- 🚀 **CI/CD Ready** with GitHub Actions

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 9
- **Formatting:** Prettier
- **Testing:** Jest, React Testing Library, Playwright
- **UI Components:** shadcn/ui
- **Deployment:** Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mychoice-ai/1-.git
   cd 1-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your values:
   ```env
   NEXT_PUBLIC_APP_NAME=My App
   NEXT_PUBLIC_API_BASE=/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Visit [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run end-to-end tests |
| `npm run test:watch` | Run tests in watch mode |

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   └── health/               # Health check endpoint
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── about/                    # About page
├── components/                   # Reusable UI components
│   ├── ui/                       # shadcn/ui components
│   └── Button.tsx                # Example component
├── lib/                          # Utility functions
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── .prettierrc                   # Prettier configuration
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🎨 UI Components

This starter includes shadcn/ui components for consistent, accessible UI elements. Key components:

- Button variants (primary, secondary, outline)
- Form inputs and controls
- Navigation components
- Layout components (Card, Container, etc.)

## 🔌 API Routes

### Health Check
```
GET /api/health
```

Returns server status and timestamp:
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 🌍 Environment Variables

Create a `.env.local` file with:

```env
# Application
NEXT_PUBLIC_APP_NAME=My Next.js App
NEXT_PUBLIC_API_BASE=/api

# Optional: Analytics, APIs, etc.
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure deployment
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This starter is compatible with:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass: `npm run test`
- Run linting: `npm run lint`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help:

- Open an [issue](https://github.com/mychoice-ai/1-/issues)
- Check the [discussions](https://github.com/mychoice-ai/1-/discussions)

---

Built with ❤️ using Next.js 15