# Website Template Starter

## Overview

This is a **reusable website template** designed to make building marketing websites simple and fast. It comes pre-configured with the most common obstacles: lead forms with Google reCAPTCHA v3 protection and email notifications via Resend. The template is specifically optimized for use with **Replit Agent** - you can build entire websites through conversation by describing the pages you want.

**Key Philosophy**: Control the entire website build from a Replit chat window. Describe pages, upload content, and the agent builds them. No database complexity, no CMS overhead - just simple, effective websites that work.

## What's Included Out of the Box

### Pre-Configured Integrations
- **Google reCAPTCHA v3**: Invisible bot protection for forms (uses shared secret keys)
- **Resend Email API**: Lead form notifications with programmatic API key management
- **File-Based Blog**: Markdown blog system (no database) - easy to sync content between projects

### Essential Components
- **Lead Form Modal**: Professional contact form with reCAPTCHA validation
- **Demo Booking Modal**: Schedule appointments with date/time selection
- **SEO System**: Meta tags, Open Graph, Schema.org structured data
- **Design System**: shadcn/ui + Tailwind CSS with light/dark mode support
- **Navigation**: Header with mobile-friendly menu

### Storage
- **In-Memory Storage**: Default option - perfect for simple sites, no database needed
- **File-Based Blog**: Markdown files in `content/blog/` - portable and easy to backup
- **Optional Database**: PostgreSQL available if you need persistent data

## How to Use This Template

### For New Websites

1. **Fork this project** in Replit
2. **Configure secrets** (see Setup section below)
3. **Chat with Replit Agent** to build pages:
   - "Create a homepage with a hero section and 3 feature cards"
   - "Add an About page with team bios"
   - "Create a Services page with pricing tiers"
4. **Publish** when ready

### Working with Replit Agent

This template is designed for **agent-driven development**. Here's how:

**Page Creation**: Describe what you want conversationally
```
"Add a homepage with:
- Large hero section with call-to-action button
- 3 features in a grid layout
- Testimonials section
- Contact form"
```

**Content Updates**: Provide text and images
```
"Update the hero headline to say 'Welcome to Acme Corp' 
and use this image: [upload]"
```

**Blog Posts**: Add markdown files or ask the agent
```
"Create a blog post about our new product launch"
```

The agent understands the template structure and will follow established patterns.

## Quick Start Setup

### Required Secrets (Add in Replit Secrets)

```bash
# reCAPTCHA (reuse from existing projects)
RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# Resend Email
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=leads@yourdomain.com
```

### Setup Steps

1. **reCAPTCHA Configuration**
   - Using existing keys? Add new domain in [reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
   - Click your site → Settings → Add domain
   - Add: `yourproject.replit.dev` and your custom domain

2. **Resend Setup**
   - Sign up at [resend.com](https://resend.com)
   - Verify your domain OR use `onboarding@resend.dev` for testing
   - Create API key and add to secrets

3. **Run the Project**
   - Workflow "Start application" runs automatically
   - Visit the preview URL to see your site

## Project Architecture

### Tech Stack
- **Frontend**: React 18, Vite, wouter (routing), TanStack Query (state)
- **Backend**: Express.js, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Radix UI primitives
- **Forms**: react-hook-form, Zod validation
- **Email**: Resend API
- **Bot Protection**: Google reCAPTCHA v3

### File Structure
```
client/
  src/
    components/     # Reusable UI components
      ui/          # shadcn/ui components
      LeadFormModal.tsx
      SEO.tsx
      Header.tsx
      Footer.tsx
    pages/         # Website pages (add new pages here)
      Home.tsx
      About.tsx
      Blog.tsx
    App.tsx        # Main app with routing
    
server/
  index.ts         # Express server
  routes.ts        # API endpoints
  recaptcha.ts     # reCAPTCHA verification
  email.ts         # Resend email integration
  storage.ts       # In-memory data storage
  
content/
  blog/            # Markdown blog posts
  
shared/
  schema.ts        # Shared TypeScript types
```

### Storage Pattern

**In-Memory (Default)**
- Perfect for simple websites
- Lead submissions stored temporarily
- Restarts on deployment (expected behavior)

**File-Based Blog**
- Markdown files in `content/blog/`
- Auto-generates JSON at build time
- Easy to backup and sync

**Database (Optional)**
- Add PostgreSQL if you need persistence
- Schema already defined in `shared/schema.ts`
- Migration scripts ready to use

## Page Building Patterns

### Common Layouts

**Hero Section**
```typescript
// Large hero with CTA
<section className="py-20 md:py-32">
  <h1 className="text-4xl md:text-6xl font-bold">Your Headline</h1>
  <p className="text-xl text-muted-foreground">Your description</p>
  <Button size="lg">Call to Action</Button>
</section>
```

**Feature Grid**
```typescript
// 3-column feature grid
<div className="grid md:grid-cols-3 gap-8">
  {features.map(feature => (
    <Card key={feature.id}>
      <CardHeader>
        <feature.icon className="h-12 w-12" />
        <CardTitle>{feature.title}</CardTitle>
      </CardHeader>
      <CardContent>{feature.description}</CardContent>
    </Card>
  ))}
</div>
```

**Lead Form Integration**
```typescript
// Trigger lead form from any button
import { useLeadForm } from "@/contexts/LeadFormContext";

function YourComponent() {
  const { openLeadForm } = useLeadForm();
  
  return <Button onClick={openLeadForm}>Contact Us</Button>;
}
```

## Agent Collaboration Guidelines

When working with Replit Agent on this template:

### What the Agent Knows
- Template structure and file organization
- Component library (shadcn/ui) and styling patterns
- Form validation and reCAPTCHA integration
- Blog system and page creation patterns

### What to Provide
- Page descriptions and content
- Images and assets (upload to `attached_assets/`)
- Brand colors and styling preferences
- Specific functionality requirements

### What the Agent Will Do
- Create new pages following template patterns
- Set up routing and navigation
- Integrate forms and CTAs with lead system
- Add SEO metadata and structured data
- Implement responsive layouts

## Customization Guide

### Branding

**Colors** - Edit `client/src/index.css`:
```css
:root {
  --primary: 20 100% 50%;     /* Your brand color */
  --secondary: 200 100% 50%;   /* Secondary color */
}
```

**Fonts** - Update `client/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont" rel="stylesheet">
```

Then in `index.css`:
```css
body {
  font-family: 'YourFont', sans-serif;
}
```

### Adding New Pages

1. **Create page component** in `client/src/pages/YourPage.tsx`
2. **Add route** in `client/src/App.tsx`:
```typescript
<Route path="/your-page" component={YourPage} />
```
3. **Update navigation** in `client/src/components/Header.tsx`

Or just **ask the agent**: "Add a new page at /your-page with [description]"

## Blog System

### Adding Blog Posts

Create a markdown file in `content/blog/` with frontmatter:

```markdown
---
title: Your Blog Post Title
slug: your-blog-post-title
excerpt: A short description
author: Your Name
publishedAt: 2025-01-15
category: News
tags: [tag1, tag2]
published: true
featuredImage: /attached_assets/your-image.jpg
---

Your blog content here in markdown...
```

The blog JSON is auto-generated on server start.

## Content Import Feature

The template includes a powerful content import system that can extract blog posts from existing websites and automatically convert them to Markdown files.

### How It Works

1. **Navigate to Import Page**: Visit `/import` in your application
2. **Enter Domain**: Type the website URL (e.g., `www.example.com` or `https://example.com/blog`)
3. **Analyze**: Click "Analyze" to discover pages and blog posts
4. **Review Results**: See categorized content:
   - **Blog Posts**: Automatically detected posts (URLs containing `/blog/`, `/post/`, `/article/`, etc.)
   - **Main Pages**: Homepage, About, Services, Contact pages (shown for reference)
5. **Import**: Click "Import X Blog Posts" to create Markdown files in `content/blog/`

### What Gets Imported

**Automatically Imported:**
- ✅ Blog posts as Markdown files with complete frontmatter
- ✅ Post title, content, excerpt, author, publish date
- ✅ Featured images (URLs preserved)
- ✅ Category inference from URL patterns

**Shown for Reference (Manual Creation Required):**
- ℹ️ Main pages (Homepage, About, Services, etc.)
- ℹ️ You'll use the extracted content to manually create React pages

### Technical Details

**Crawler Features:**
- Uses Playwright for JavaScript-rendered content
- Discovers pages via sitemap.xml and homepage navigation
- Extracts clean content using Mozilla Readability
- Converts HTML to Markdown with Turndown
- Normalizes dates to ISO format
- Safe handling of missing metadata

**Security:**
- SSRF protection blocks private IP ranges (RFC1918)
- Validates domain format
- Limits crawl to 50 pages max
- Same-origin policy enforcement

### Blog Post Detection Patterns

The system automatically detects blog posts by URL patterns:
- `/blog/` - Standard blog URLs
- `/post/` - Post permalinks  
- `/article/` - Article URLs
- `/news/` - News sections
- `/updates/` - Update logs
- `/insights/` - Insight articles

### Example Workflow

```
1. Visit /import
2. Enter: www.oldwebsite.com
3. System finds: 15 pages (8 blog posts, 7 main pages)
4. Click "Import 8 Blog Posts"
5. Result: 8 new .md files in content/blog/
6. Server auto-restarts and blog page shows new posts
```

### Limitations

- Only imports blog posts automatically (main pages require manual creation)
- Single-depth crawl (homepage + sitemap URLs)
- Requires websites to be publicly accessible
- Images are linked, not downloaded (feature coming soon)

### Troubleshooting

**No Blog Posts Found:**
- Website may not have a blog section
- Blog URLs might use non-standard patterns
- Try entering the blog page URL directly (e.g., `example.com/blog`)

**Import Button Disabled:**
- This means no blog posts were detected
- Main pages cannot be automatically imported
- Use discovered content as reference for manual page creation

## Email Notifications

### How It Works

1. User submits lead form
2. reCAPTCHA validates (score > 0.3)
3. Data saved to storage
4. Email sent via Resend
5. User sees success message

### Email Templates

Edit `server/email.ts` to customize email content.

## SEO Best Practices

Every page should have:
```typescript
<SEO
  title="Page Title | Your Brand"
  description="Compelling page description"
  type="website"
  image="/path/to/social-image.jpg"
/>
```

## Deployment

1. **Test locally** - Preview works automatically
2. **Configure domains** - Add to reCAPTCHA settings
3. **Verify email domain** - In Resend dashboard
4. **Publish** - Use Replit's publish feature

## Troubleshooting

### Forms Not Submitting
- Check RECAPTCHA_SITE_KEY and RECAPTCHA_SECRET_KEY in secrets
- Verify domain is added in reCAPTCHA admin console
- Check browser console for errors

### Emails Not Sending
- Verify RESEND_API_KEY in secrets
- Check FROM_EMAIL is verified in Resend dashboard
- Look at server logs for error messages

### Blog Not Showing
- Ensure markdown files have proper frontmatter
- Check `published: true` in frontmatter
- Restart server to regenerate blog JSON

## Template Philosophy

**Simple Over Complex**: In-memory storage, file-based blog, no unnecessary features

**Agent-Friendly**: Clear patterns, documented structure, easy to describe and build

**Production-Ready**: reCAPTCHA protection, email notifications, SEO, responsive design

**Portable**: Easy to fork, minimal dependencies, clear setup process

## Next Steps

1. Fork this template for your new project
2. Add your secrets (reCAPTCHA, Resend)
3. Chat with Replit Agent to build your pages
4. Customize branding and content
5. Publish your site

**Have questions?** Describe what you want to build and let the agent help you create it.
