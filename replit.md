# Savvy Dealer - Digital Marketing Platform

## Overview

Savvy Dealer is a website management and digital marketing platform for automotive dealerships. The application provides a content management system for creating and managing website pages, along with showcasing digital marketing services including Facebook Ads, SEO, PPC, custom dealer websites, and Attribution AI. Built as a full-stack TypeScript application with React frontend and Express backend, it emphasizes a bold, multi-color brand identity representing different product lines.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- React 18 with TypeScript using Vite as the build tool
- Client-side routing via Wouter (lightweight React Router alternative)
- State management through TanStack Query (React Query) for server state
- Styling with Tailwind CSS using custom design tokens

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundation
- shadcn/ui component library (New York style variant) with heavy customization
- Custom theme system supporting light/dark modes via React Context
- Design system based on Inter (primary) and Space Grotesk (accent) typography

**Key Design Decisions**
- Component-first architecture with isolated, reusable UI elements
- Path aliases (@/, @shared/, @assets/) for clean import statements
- Custom CSS variables for theming with HSL color format
- Multi-color product scheme: Pink (Facebook Ads), Green (SEO), Orange (PPC), Blue (Websites), Purple (Attribution AI)

### Backend Architecture

**Server Framework**
- Express.js with TypeScript
- Vite middleware integration for development HMR
- In-memory storage abstraction (MemStorage) implementing IStorage interface
- Modular route registration pattern

**Storage Layer Design**
- Interface-driven storage pattern (IStorage) enabling easy database swapping
- Currently uses in-memory Map-based storage for users
- Designed to be replaced with Drizzle ORM + PostgreSQL implementation
- UUID-based primary keys for all entities

**Session & Authentication**
- Configured for session-based authentication (connect-pg-simple dependency present)
- Raw body capture middleware for webhook verification support
- Cookie-based session management ready for implementation

### Data Schema

**Database Configuration**
- Drizzle ORM as the database toolkit
- PostgreSQL dialect with Neon serverless driver
- Schema-first approach with Zod validation integration

**Current Schema**
- Users table with username/password authentication
- UUID primary keys with PostgreSQL gen_random_uuid()
- Drizzle-zod integration for runtime validation

**Extension Points**
- Schema designed for adding pages, content blocks, and settings tables
- Migration system in place (drizzle-kit) for schema evolution

### Application Structure

**Routing Architecture**
- Public marketing pages (/, /products)
- Product pages (/facebook-ads, /ppc-ads, /dealer-seo, /dealer-websites, /attribution-ai)
- Admin dashboard (/admin) with nested routes
- Admin pages management (/admin/pages)
- Admin settings (/admin/settings)
- 404 handling via catch-all route

**Page Types**
- Home: Hero section with product showcase, testimonials, and about content
- Products Overview (/products): Card-based grid showcasing all 5 products with links to individual pages
- Product Pages: Dedicated pages for each service using reusable ProductPage component, all wrapped with Header/Footer
  - Facebook Ads (/facebook-ads): Pink accent, $300/month pricing, "build backwards" methodology
  - PPC Ads (/ppc-ads): Orange accent, inventory prioritization, proven ROI-focused keywords
  - Dealer SEO (/dealer-seo): Green accent, SEO + GEO optimization for AI search visibility
  - Dealer Websites (/dealer-websites): Blue accent, SEO-first architecture, 2x traffic claims
  - Attribution AI (/attribution-ai): Purple accent, "anti-dashboard dashboard", AI-powered analytics consolidation
- Admin Dashboard: Stats overview with metrics cards
- Admin Pages: Page listing with search and CRUD operations (currently mock data)
- Admin Settings: Site configuration management (currently mock data)

**Component Organization**
- Presentational components in client/src/components
  - Header: Desktop dropdown navigation + mobile menu for all 5 product pages plus "All Products" link
  - Footer: Site-wide footer with logo and navigation links
  - ProductPage: Reusable component for consistent product page layouts
  - Hero, Features, PageCard, AdminSidebar: Supporting components
- Page components in client/src/pages
  - Home, Products, FacebookAds, PpcAds, DealerSeo, DealerWebsites, AttributionAI: Public pages
  - AdminDashboard, AdminPages, AdminSettings: Admin pages
- Reusable UI primitives in client/src/components/ui
  - shadcn/ui components with custom theming

**Navigation Implementation**
- All navigation uses wouter Link component for SPA routing (no full page reloads)
- Desktop: Dropdown menu with Products trigger showing "All Products" link plus all 5 individual product pages
- Mobile: Hamburger menu with expandable "Our Products" section including "All Products" and all 5 products
- All Link components properly implement SPA semantics without nested anchors
- Logo links in header and footer navigate to homepage via SPA routing
- "View All Products" CTA button on homepage Features section links to /products overview

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: react, react-dom, @tanstack/react-query
- **Routing**: wouter (lightweight client-side routing)
- **Build Tools**: vite, @vitejs/plugin-react, esbuild
- **TypeScript**: Full type safety across client and server

### UI & Styling
- **Component Libraries**: @radix-ui/* (comprehensive accessible primitives suite)
- **Styling**: tailwindcss, autoprefixer, postcss
- **Utilities**: class-variance-authority, clsx, tailwind-merge
- **Icons**: lucide-react
- **Additional UI**: cmdk (command palette), embla-carousel-react

### Backend & Data
- **Server**: express with TypeScript support
- **Database**: @neondatabase/serverless (PostgreSQL)
- **ORM**: drizzle-orm, drizzle-kit
- **Validation**: zod, drizzle-zod, @hookform/resolvers
- **Sessions**: connect-pg-simple (PostgreSQL session store)

### Development Tools
- **Replit Integration**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner
- **Utilities**: tsx (TypeScript execution), nanoid (ID generation)

### Design System Assets
- **Fonts**: Google Fonts (Inter, Space Grotesk) loaded via CDN
- **Images**: Generated hero and feature images stored in attached_assets/
- **Color System**: Four primary product colors with HSL-based theming
- **Guidelines**: Documented in design_guidelines.md

### Environment Requirements
- DATABASE_URL environment variable for PostgreSQL connection
- Node.js environment with ESM module support
- Vite development server with middleware mode for SSR integration