# TopTier Media - Football Highlight Video Platform

## Overview

TopTier is a professional football media website that sells elite highlight videos and player branding services for players, agents, academies, and scouts. The platform features a dark-themed, premium design with a focus on professionalism and credibility in the football industry.

**Slogan:** "Showcase Greatness"

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **Styling:** Tailwind CSS with custom dark theme configuration
- **UI Components:** shadcn/ui component library (Radix UI primitives)
- **Animations:** Framer Motion for smooth scroll animations and entry effects
- **State Management:** TanStack React Query for server state
- **Forms:** React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime:** Node.js with Express
- **Language:** TypeScript (ESM modules)
- **Build Tool:** Vite for frontend, esbuild for server bundling
- **Development:** tsx for TypeScript execution

### Data Storage
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM with drizzle-zod for schema validation
- **Schema Location:** `shared/schema.ts` (shared between client and server)
- **Migrations:** Generated to `./migrations` directory via drizzle-kit

### API Design
- **Pattern:** REST API with typed route definitions
- **Route Definitions:** Centralized in `shared/routes.ts` with Zod schemas for input/output validation
- **Endpoints:**
  - `POST /api/contact` - Submit contact requests
  - `GET /api/portfolio` - Retrieve portfolio items

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions
│   │   └── pages/        # Page components (Home, Process, Pricing, About)
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route handlers
│   ├── storage.ts    # Database operations
│   └── db.ts         # Database connection
├── shared/           # Shared code between client/server
│   ├── schema.ts     # Drizzle database schema
│   └── routes.ts     # API route type definitions
└── migrations/       # Database migrations
```

### Build Configuration
- Development uses Vite dev server with HMR
- Production builds client to `dist/public` and bundles server to `dist/index.cjs`
- Path aliases: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

## External Dependencies

### Database
- PostgreSQL via `DATABASE_URL` environment variable
- Connection managed through `pg` package with connection pooling

### UI Framework
- Radix UI primitives for accessible components
- Tailwind CSS with custom CSS variables for theming
- Inter font family from Google Fonts

### Key Libraries
- `drizzle-orm` / `drizzle-kit` - Database ORM and migrations
- `@tanstack/react-query` - Server state management
- `framer-motion` - Animation library
- `zod` - Runtime type validation
- `react-icons` - Icon library (TikTok icon)
- `lucide-react` - Icon library

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` - Error overlay
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development banner