# Savvy Dealer - Digital Marketing Platform

## Overview

Savvy Dealer is a digital marketing platform for automotive dealerships, offering website management and showcasing services like Facebook Ads, SEO, PPC, and custom dealer websites. The platform features an Apple-inspired design with a focus on large product imagery, dramatic typography, and smooth animations. Each product is highlighted with vibrant brand colors in immersive sections. The project aims to provide a comprehensive solution for dealerships' online presence and marketing needs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions

The design aesthetic is inspired by Apple, featuring large-scale product imagery, dramatic typography (Inter and Space Grotesk), generous spacing, and smooth scroll animations. A multi-color scheme is used for product lines: Pink (Facebook Ads), Green (SEO), Orange (PPC), Blue (Dealer Websites), Teal (Independent Dealer Websites), and Purple (Anti-Dashboard AI). The system supports light/dark modes and uses `shadcn/ui` with heavy customization on top of Radix UI primitives for an accessible component foundation. Accessibility (WCAG 2.2 AA) is a core focus, including skip navigation, visible focus indicators, ARIA landmarks, and screen reader support.

### Technical Implementations

The application is a full-stack TypeScript project. The frontend uses React 18 with Vite, `wouter` for routing, and TanStack Query for state management. Styling is handled with Tailwind CSS. The backend is built with Express.js and TypeScript. A component-first architecture is used for reusability. Key features include a global lead form modal, a demo booking modal with date/time selection, and an "AI Compatibility Test" button linking to an external site.

### Feature Specifications

- **Product Pages**: Dedicated pages for each marketing service with consistent layouts and branding.
- **NADA Show Landing Page** (/nada-show): Trade show landing page for NADA Show 2026 (February 4-6, 2026, Las Vegas). Features hero section with NADA logo, event details for Booth 6760N, 6 reason cards, interactive North Hall floor map with pulsing marker highlighting booth location, and 4 "Book a Demo" CTAs integrated with DemoBookingModal.
- **Attribution AI Teaser**: A dedicated teaser page for an unreleased product, hinting at a NADA 2026 announcement with Apple-inspired design.
- **Blog**: Long-form content pages with emphasis on readability.
- **Admin Dashboard**: For managing pages, settings, and viewing site statistics.
- **SEO & Structured Data**: Comprehensive SEO management via `react-helmet-async`, supporting various Schema.org types (Organization, WebSite, Service, BlogPosting, Person) for all public pages.

### System Design Choices

The backend uses an interface-driven storage pattern (`IStorage`) to allow easy swapping of storage solutions, currently using in-memory storage but designed for Drizzle ORM + PostgreSQL. Drizzle ORM is used for database interaction with a schema-first approach and Zod validation. Session-based authentication is configured for future implementation. The application structure includes clear routing for public, product, blog, event, and admin pages.

## External Dependencies

- **Frontend**: React, `wouter`, TanStack Query, Vite, Tailwind CSS, Radix UI, `shadcn/ui`, `lucide-react`.
- **Backend**: Express.js, TypeScript.
- **Database & ORM**: `@neondatabase/serverless` (PostgreSQL), `drizzle-orm`, `drizzle-kit`.
- **Validation**: `zod`, `drizzle-zod`, `react-hook-form`.
- **Sessions**: `connect-pg-simple`.
- **Email Service**: Resend API (for lead and demo booking notifications).
- **SEO**: `react-helmet-async`.
- **Development Tools**: `tsx`, `nanoid`, Replit-specific Vite plugins.
- **Fonts**: Google Fonts (Inter, Space Grotesk).
- **Environment**: `DATABASE_URL` environment variable required for PostgreSQL.