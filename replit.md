# Savvy Dealer - Digital Marketing Platform

## Overview

Savvy Dealer is a digital marketing platform for automotive dealerships, offering website management and showcasing services. The flagship offering is **Fully Managed Marketing** - a comprehensive solution bundling all services (Co-op vendor coordination, website management, SEO, SEM/PPC, Facebook Ads, design, and ROI tracking). Individual services include Facebook Ads, SEO, PPC, Google Vehicle Ads, and custom dealer websites. The platform features an Apple-inspired design with a focus on large product imagery, dramatic typography, and smooth animations. Each product is highlighted with vibrant brand colors in immersive sections. The project aims to provide a comprehensive solution for dealerships' online presence and marketing needs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions

The design aesthetic is inspired by Apple, featuring large-scale product imagery, dramatic typography (Inter and Space Grotesk), generous spacing, and smooth scroll animations. A multi-color scheme is used for product lines: Orange (Fully Managed Marketing & PPC), Pink (Facebook Ads), Green (SEO), Cyan (Google Vehicle Ads), Blue (Dealer Websites), Teal (Independent Dealer Websites), and Purple (Anti-Dashboard AI). The system supports light/dark modes and uses `shadcn/ui` with heavy customization on top of Radix UI primitives for an accessible component foundation. Accessibility (WCAG 2.2 AA) is a core focus, including skip navigation, visible focus indicators, ARIA landmarks, screen reader support, and respect for `prefers-reduced-motion`. Special homepage feature: Anti-Dashboard AI section includes a subtle pulse-glow animation (4 seconds on page load) with "NADA 2026 Exclusive" badge.

### Technical Implementations

The application is a full-stack TypeScript project. The frontend uses React 18 with Vite, `wouter` for routing, and TanStack Query for state management. Styling is handled with Tailwind CSS. The backend is built with Express.js and TypeScript. A component-first architecture is used for reusability. Key features include a global lead form modal, a demo booking modal with date/time selection, and an "AI Compatibility Test" button linking to an external site.

### Feature Specifications

- **Product Pages**: Dedicated pages for each marketing service with consistent layouts and branding. Products include Fully Managed Marketing (premium flagship), Facebook Ads, Dealer SEO, PPC Ads, Google Vehicle Ads (VLAs), Dealer Websites, Independent Dealer Websites, and Anti-Dashboard AI (NADA 2026 teaser).
  - **Fully Managed Marketing** (/fully-managed-marketing): Premium flagship offering positioned as "Complete Automotive Marketing Solution". Orange-themed page featuring comprehensive service bundle including Co-op vendor coordination, dealer website management, SEO, SEM/PPC, Facebook Ads, professional design, ROI tracking, and more. Appears first in both homepage Features section and Products page with "Premium Service" badge. Page structure: Hero with description, 10 feature cards explaining service components, benefits section listing 12 included services, 4-step process breakdown, multiple CTAs throughout. SEO metadata includes Service schema and Open Graph tags.
  - **PPC & SEM** (/ppc-ads): Strategic market dominance positioning emphasizing 90% search term-to-keyword match (precision vs AI-generated junk), competitor keyword intelligence from unique campaign structure, exclusive market control (no competing dealers in same market), expert traffic routing from competitors to clients, and market share dominance (not shared visibility). No focus on cost-per-click metrics.
  - **All Products Page** (/products): Comprehensive product showcase featuring all 8 services with Apple-inspired design matching homepage aesthetic. Alternating left/right layout with large product images, dramatic typography (text-6xl), rounded-full buttons, and color-coded themes. Fully Managed Marketing appears first with Premium Service badge. Each product section includes description, dual CTAs (Learn More + Request Audit), and branded image with color overlay gradient.
- **NADA Show Landing Page** (/nada-show): Trade show landing page for NADA Show 2026 (February 4-6, 2026, Las Vegas). Features hero section with NADA logo, event details for Booth 6760N, 6 reason cards, interactive North Hall floor map with pulsing marker highlighting booth location, and 4 "Book a Demo" CTAs integrated with DemoBookingModal.
- **Attribution AI Teaser**: A dedicated teaser page for an unreleased product, hinting at a NADA 2026 announcement with Apple-inspired design.
- **Blog System** (/blog, /blog/:slug, /admin/blog): 
  - File-based Markdown blog with full CRUD operations (no database tables)
  - Blog posts stored as Markdown files in `content/blog/` directory with YAML frontmatter
  - Build script (`server/blogLoader.ts`) converts Markdown to JSON at startup for fast access
  - Generated JSON stored in `generated/blog.json` and rebuilt automatically on file changes
  - Public pages: Blog listing with featured posts, category badges, tag filtering, and individual post pages with SEO
  - Admin interface: Create/edit/delete posts via filesystem operations, tags managed in frontmatter, date selection, validation
  - Successfully migrated 6 existing blog posts from database to Markdown with professional featured images (1 user-provided, 5 AI-generated)
  - All blog posts have featured images stored in `/attached_assets/` (user uploads) and `/attached_assets/generated_images/` (AI-generated)
  - Tag system: Tags stored as string arrays in frontmatter (e.g., `tags: [AI, SEO, Marketing]`)
  - Three-tier schema system: fileBlogPostInputSchema (forms with Date), fileBlogPostSchema (API validation with Date|string→ISO transform), fileBlogPostUpdateSchema (partial PATCH validation)
  - SEO: BlogPosting JSON-LD schema, meta tags, Open Graph support
  - **Authentication**: Blog admin fully protected with Replit Auth (see Authentication System below)
- **Lead Submission System** (/admin/leads):
  - PostgreSQL-backed lead and demo booking tracking with complete submission history
  - Database schema: leadSubmissions table tracks all form submissions with email delivery status
  - Robust error handling: Submissions saved to database BEFORE email attempt (no data loss)
  - Email delivery tracking: Records success/failure status and error messages for troubleshooting
  - Admin interface: Dashboard with stats (total submissions, emails sent/failed, demo bookings)
  - Detailed submission list: All lead forms and demo bookings with contact info, timestamps, email status
  - Color-coded status badges: Green for successful emails, red for failures
  - **Email Configuration**: FROM_EMAIL and TO_EMAIL environment variables (defaults to Resend test email)
  - **Production Setup Required**: Verify savvydealer.com domain in Resend and set FROM_EMAIL to verified address
  - **reCAPTCHA v3 Protection**: Both lead form and demo booking forms protected with Google reCAPTCHA v3
    - Site key fetched from backend API endpoint `/api/config/recaptcha` on app load
    - Frontend generates invisible reCAPTCHA tokens using `react-google-recaptcha-v3` library
    - Backend verifies tokens with Google API using 0.5 score threshold (server/recaptcha.ts)
    - Submissions with invalid or low-score tokens are rejected with 400 error
    - Domain configured: replit.dev (for Replit preview) and production domains
    - **Required Secrets**: RECAPTCHA_SITE_KEY, RECAPTCHA_SECRET_KEY (in Replit Secrets)
  - Protected by isAdmin middleware (@savvydealer.com emails only)
- **Admin Dashboard** (/admin):
  - Centralized admin interface with sidebar navigation
  - **Active Features**: Blog management (/admin/blog), Lead tracking (/admin/leads)
  - **Note**: Page and settings management removed per user preference - new pages requested from Replit Agent instead of CMS
  - Dashboard statistics and overview of site activity
- **SEO & Structured Data**: Comprehensive SEO management via `react-helmet-async`, supporting various Schema.org types (Organization, WebSite, Service, BlogPosting, Person) for all public pages.
- **Authentication System**:
  - Replit Auth integration with OpenID Connect (OIDC)
  - Supports Google, GitHub, and email/password login
  - Session-based authentication with PostgreSQL storage
  - **Multi-layer Admin Protection** (architect-verified secure):
    - **Frontend**: AdminAccessGuard component wraps all admin pages, blocks non-@savvydealer.com access
    - **Backend**: isAdmin middleware protects all mutating operations and admin data endpoints
    - **Blog Security**: Public GET routes filter unpublished posts using req.isAuthenticated() check
    - **Admin Access**: Only @savvydealer.com email addresses can access admin dashboard and unpublished content
  - Frontend useAuth hook for auth state management with isAdmin helper
  - Automatic redirect to login for unauthenticated users
  - Logout functionality in admin interface
  - Global Passport session middleware ensures req.isAuthenticated() cannot be spoofed
  - Environment-aware cookie security (secure in production, permissive in development)
  - **Required Environment Variables**: ISSUER_URL, REPL_ID, SESSION_SECRET, DATABASE_URL
  - **Optional Environment Variables**: FROM_EMAIL (sender email for notifications, defaults to contact@savvydealer.ai), TO_EMAIL (recipient email for lead notifications, defaults to support@savvydealer.com)

### System Design Choices

The backend uses an interface-driven storage pattern (`IStorage`) to allow easy swapping of storage solutions. The blog system uses a file-based Markdown approach with a build script that generates JSON for fast access. Lead submissions use PostgreSQL with Drizzle ORM for persistence. Session-based authentication is implemented with Replit Auth (OpenID Connect) and PostgreSQL session storage. All blog admin API endpoints are protected with isAdmin middleware. The application structure includes clear routing for public, product, blog, event, and admin pages.

### Database Schema

**Note**: Blog system uses file-based Markdown storage (no database tables). Blog posts are stored in `content/blog/` and built to `generated/blog.json`.

**Authentication Tables**:
- `users`: id (varchar, UUID), email, firstName, lastName, profileImageUrl, createdAt, updatedAt
- `sessions`: sid (varchar, primary key), sess (JSON), expire (timestamp)

**Lead Submission Tables**:
- `leadSubmissions`: id (varchar, UUID), submissionType (lead_form|demo_booking), name, email, phone, dealership, message, demoDate, demoTime, emailSent (boolean), emailError (text), submittedAt (timestamp)

**Relations**: 
- Posts → Tags (many-to-many via postTags)
- Sessions → Users (via session data)

## External Dependencies

- **Frontend**: React, `wouter`, TanStack Query, Vite, Tailwind CSS, Radix UI, `shadcn/ui`, `lucide-react`, `react-google-recaptcha-v3`.
- **Backend**: Express.js, TypeScript.
- **Database & ORM**: `@neondatabase/serverless` (PostgreSQL), `drizzle-orm`, `drizzle-kit`.
- **Validation**: `zod`, `drizzle-zod`, `react-hook-form`.
- **Authentication**: `openid-client` (OIDC), `express-session`, `connect-pg-simple` (session storage).
- **Email Service**: Resend API (for lead and demo booking notifications).
- **Bot Protection**: Google reCAPTCHA v3 (invisible, score-based verification).
- **SEO**: `react-helmet-async`.
- **Development Tools**: `tsx`, `nanoid`, Replit-specific Vite plugins.
- **Fonts**: Google Fonts (Inter, Space Grotesk).
- **Environment**: `DATABASE_URL` environment variable required for PostgreSQL.