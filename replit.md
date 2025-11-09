# Savvy Dealer - Digital Marketing Platform

## Overview

Savvy Dealer is a website management and digital marketing platform for automotive dealerships. The application provides a content management system for creating and managing website pages, along with showcasing digital marketing services including Facebook Ads, SEO, PPC, custom dealer websites, independent dealer websites, and Anti-Dashboard AI. Built as a full-stack TypeScript application with React frontend and Express backend, it features an Apple-inspired design aesthetic with large-scale product imagery, dramatic typography, generous spacing, and smooth scroll animations. Each product line is represented by vibrant brand colors in full-width immersive showcase sections.

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
- Multi-color product scheme: Pink (Facebook Ads), Green (SEO), Orange (PPC), Blue (Dealer Websites), Teal (Independent Dealer Websites), Purple (Anti-Dashboard AI)

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
- Public marketing pages (/, /products, /about)
- Product pages (/facebook-ads, /ppc-ads, /dealer-seo, /dealer-websites, /independent-dealer-websites, /attribution-ai)
- Blog pages (/blog/marketing-roi-evaluation)
- Admin dashboard (/admin) with nested routes
- Admin pages management (/admin/pages)
- Admin settings (/admin/settings)
- 404 handling via catch-all route

**Page Types**
- Home: Hero section with product showcase, testimonials, and about content
- About (/about): Team member profiles, mission, values, and company overview with placeholder photos for Adam Gillrie (Director), Nick (VP of Sales), David Frost (CTO), Emily Schultz (Head of Operations)
- Products Overview (/products): Card-based grid showcasing all 6 products with links to individual pages
- Product Pages: Dedicated pages for each service using reusable ProductPage component, all wrapped with Header/Footer
  - Facebook Ads (/facebook-ads): Pink accent, $300/month pricing, "build backwards" methodology
  - PPC Ads (/ppc-ads): Orange accent, inventory prioritization, proven ROI-focused keywords
  - Dealer SEO (/dealer-seo): Green accent, SEO + GEO optimization for AI search visibility
  - Dealer Websites (/dealer-websites): Blue accent, SEO-first architecture, 2x traffic claims with Banner Chevy device mockups
  - Independent Dealer Websites (/independent-dealer-websites): Teal accent, solutions for non-franchised dealers and buy-here-pay-here lots
  - Anti-Dashboard AI (/attribution-ai): Purple accent teaser page with Apple-inspired design for NADA 2026 announcement
- Blog: Long-form content pages with Apple-inspired typography and clean readability
  - Marketing ROI Evaluation (/blog/marketing-roi-evaluation): 12 practical moves for evaluating marketing ROI and agencies with search result graphics
- Admin Dashboard: Stats overview with metrics cards
- Admin Pages: Page listing with search and CRUD operations (currently mock data)
- Admin Settings: Site configuration management (currently mock data)

**Component Organization**
- Presentational components in client/src/components
  - Header: Desktop dropdown navigation + mobile menu for all 6 product pages plus "All Products" link, includes "AI Compatibility Test" button linking to ai-detect.savvydealer.com
  - Footer: Site-wide footer with logo and navigation links
  - ProductPage: Reusable component for consistent product page layouts
  - Hero, Features, PageCard, AdminSidebar: Supporting components
  - Features: Homepage product showcase displaying all 6 products with dual-button layout (Learn More + Request Free Audit)
  - LeadFormModal: Dialog-based lead capture form with validation
- Page components in client/src/pages
  - Home, Products, FacebookAds, PpcAds, DealerSeo, DealerWebsites, IndependentDealerWebsites, AttributionAI: Public pages
  - AdminDashboard, AdminPages, AdminSettings: Admin pages
- Reusable UI primitives in client/src/components/ui
  - shadcn/ui components with custom theming
- Context providers in client/src/contexts
  - LeadFormContext: Global state management for lead form modal

**Navigation Implementation**
- All navigation uses wouter Link component for SPA routing (no full page reloads)
- Desktop: Dropdown menu with Products trigger showing "All Products" link plus all 6 individual product pages, plus Blog, About, Contact links
- Mobile: Hamburger menu with Blog, About, Contact links, plus expandable "Our Products" section including "All Products" and all 6 products
- All Link components properly implement SPA semantics without nested anchors
- Logo links in header and footer navigate to homepage via SPA routing
- "View All Products" CTA button on homepage Features section links to /products overview
- Footer includes "Company" section with Blog, About, phone, and email links

**Lead Form Modal System**
- Global modal triggered by all "Request Free Audit" CTAs across the site
- Context-based state management via LeadFormContext provider
- Form fields: Name, Email, Phone, Dealership Name, Message (optional)
- Client-side validation using react-hook-form + zod schemas
- Backend integration via Resend API sending emails to support@savvydealer.com
- Success state with auto-close after 3 seconds
- CTA locations: Homepage (hero, about, final, 6 product cards in Features section), Header (desktop/mobile), All 6 product pages (hero, final), Products overview

**AI Compatibility Test Button**
- Blue button with white text linking to ai-detect.savvydealer.com
- Available in desktop and mobile header navigation
- Opens in new tab with rel="noopener noreferrer" for security

**Attribution AI Teaser (NADA 2026 Announcement)**
- Attribution AI treated as unreleased product with teaser experience
- Homepage & Products page cards display: "Coming February 2026" subtitle with teaser messaging
- Card buttons: "View Teaser" (primary) and "Schedule Demo at NADA" (outline)
- Dedicated teaser landing page at /attribution-ai featuring:
  - Purple gradient hero with "Something Big is Coming at NADA 2026" headline
  - "Exclusive Preview" badge with event details (February 2026, NADA Show 2026)
  - "What to Expect" section with 3 benefit cards (AI-Powered Intelligence, Unified Attribution, Proactive Action)
  - Two demo scheduling CTAs: "Schedule Your Exclusive Demo at NADA" (hero) and "Reserve Your Demo Slot Now" (bottom)
  - Both CTAs open lead form modal for demo scheduling
  - Purple accent color (#9333EA) consistent with Attribution AI branding

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

### SEO & Structured Data
- **SEO Management**: react-helmet-async for dynamic document head management
- **SEO Component**: Comprehensive component at client/src/components/SEO.tsx supporting:
  - Page titles and meta descriptions
  - Canonical URLs
  - Open Graph tags (title, description, image, locale)
  - Twitter Card tags with alt text
  - Article metadata for blog posts
  - Multiple schema.org structured data per page
- **Schema.org Implementation**:
  - Organization schema (type: Organization + ProfessionalService) with contactPoint, knowsAbout, areaServed
  - WebSite schema for homepage
  - Service schemas for all 6 product pages with provider references
  - BlogPosting schema for blog articles
  - Person schemas for team members on About page
- **Helper Functions**:
  - createServiceSchema(): Generate Service type structured data
  - createBlogPostSchema(): Generate BlogPosting structured data
  - createPersonSchema(): Generate Person structured data
- **Coverage**: All public pages have unique titles, descriptions, canonical URLs, and appropriate schemas
- **Future Enhancements**: Add social media URLs to organizationSchema.sameAs when available

### Accessibility & ADA Compliance (WCAG 2.2 AA)
- **Skip Navigation**: client/src/components/SkipNavigation.tsx 
  - Keyboard-only visible skip link mounted as first element in App.tsx
  - Smooth scroll to #main-content on all pages with focus management
  - Blue background with white text, high contrast, visible only on focus
- **Focus Indicators**: 
  - 2px solid outline using hsl(var(--ring)) with 2px offset
  - Applied to all interactive elements via *:focus-visible in index.css
  - 3:1 contrast ratio maintained across all backgrounds
- **Focus Not Obscured** (WCAG 2.4.11):
  - scroll-padding-top: 5rem on html element for sticky header offset
  - scroll-margin-top: 5rem on all focusable elements
  - Ensures focused elements always appear below 65px sticky header
- **ARIA Landmarks**: Comprehensive structure on 14 pages
  - role="banner" on Header component with labeled navigation
  - role="main" with id="main-content" on ALL pages (public + admin + 404)
  - role="contentinfo" on Footer component
  - aria-label on navigation regions ("Main navigation", "Mobile navigation")
  - aria-expanded states on collapsible mobile menu
- **Screen Reader Support**:
  - .sr-only utility class for visually hidden screen reader content
  - Descriptive aria-labels on all interactive elements
  - Enhanced image alt text ("Savvy Dealer logo", descriptive content)
  - Semantic HTML with proper heading hierarchy
- **Keyboard Navigation**: 
  - Full keyboard accessibility without mouse dependency
  - Visible focus states on all interactive elements
  - Sticky header maintains z-index: 100 without obscuring focus
- **WCAG 2.2 AA Compliance Verified**:
  - ✅ 2.4.1 Bypass Blocks (Level A) - Skip navigation works on all routes
  - ✅ 2.4.7 Focus Visible (Level A) - All interactive elements show focus
  - ✅ 1.4.11 Non-Text Contrast (Level AA) - 3:1 contrast on focus indicators
  - ✅ 2.4.11 Focus Not Obscured (Level AA) - Scroll padding prevents obscuring
  - ✅ 1.3.1 Info and Relationships (Level A) - Complete ARIA landmarks
  - ✅ 4.1.3 Status Messages (partial) - ARIA labels on interactive elements
- **Testing**: End-to-end Playwright tests verify skip navigation, focus management, and sticky header behavior across all routes

### Environment Requirements
- DATABASE_URL environment variable for PostgreSQL connection
- Node.js environment with ESM module support
- Vite development server with middleware mode for SSR integration