# Website Template Starter

A modern, production-ready website template optimized for **Replit Agent**-driven development. Build complete marketing websites through conversation - just describe the pages you want, and the agent builds them.

## ✨ Features

- **Pre-configured Integrations**
  - ✅ Google reCAPTCHA v3 (invisible bot protection)
  - ✅ Resend Email API (lead form notifications)
  - ✅ File-based blog system (Markdown, no database)

- **Essential Components**
  - Lead form modal with reCAPTCHA validation
  - Demo booking system with date/time selection
  - SEO helpers with Schema.org structured data
  - Responsive header with navigation
  - Professional footer

- **Modern Stack**
  - React 18 + TypeScript
  - Vite (fast development)
  - Tailwind CSS + shadcn/ui components
  - Express.js backend
  - In-memory storage (no database complexity)

## 🚀 Quick Start

### 1. Set Up Secrets

Add these in **Replit Secrets** (lock icon in sidebar):

```bash
# Google reCAPTCHA
RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here

# Resend Email
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=contact@yourdomain.com
```

### 2. Configure reCAPTCHA

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Find your existing reCAPTCHA v3 site OR create a new one
3. Click **Settings** → Add domains:
   - `yourproject.replit.dev` (for testing)
   - `yourdomain.com` (for production)

### 3. Set Up Resend

1. Sign up at [resend.com](https://resend.com)
2. **Option A (Testing):** Use `onboarding@resend.dev` as FROM_EMAIL
3. **Option B (Production):** Verify your domain and use your custom email
4. Create an API key and add to Replit Secrets

### 4. Run the Project

The workflow "Start application" runs automatically when you open the Repl:

```bash
npm run dev
```

Visit the preview URL to see your site!

## 🎯 How to Use This Template

### For New Websites

1. **Fork/Copy** this Repl
2. **Update secrets** with your API keys
3. **Chat with Replit Agent** to build pages:
   ```
   "Create a homepage with a hero section, 3 feature cards, 
   and a testimonials section"
   ```
4. **Customize** branding and content
5. **Publish** when ready

### Agent-Driven Development

This template is designed for conversational page building:

**Example Requests:**
- "Add a Services page with 4 service offerings in a grid"
- "Create an About page with team bios and company history"
- "Add a pricing page with 3 tiers"
- "Update the hero headline to say 'Welcome to Acme Corp'"

The agent understands the template structure and follows established patterns.

## 📁 Project Structure

```
client/
  src/
    components/       # Reusable UI components
      ui/            # shadcn/ui components
      LeadFormModal.tsx
      SEO.tsx
      Header.tsx
      Footer.tsx
    pages/           # Website pages
      Home.tsx
      About.tsx
      Services.tsx
      Blog.tsx
      BlogPost.tsx
    App.tsx          # Main app with routing

server/
  index.ts           # Express server
  routes.ts          # API endpoints
  recaptcha.ts       # reCAPTCHA verification
  email.ts           # Resend email integration
  storage.ts         # In-memory data storage
  blogLoader.ts      # Blog system

content/
  blog/              # Markdown blog posts

shared/
  schema.ts          # Shared TypeScript types
```

## 📝 Adding Blog Posts

Create a markdown file in `content/blog/`:

```markdown
---
title: Your Blog Post Title
slug: your-blog-post-title
excerpt: A compelling description of your post
author: Your Name
publishedAt: 2025-01-15
category: News
tags: [business, technology]
published: true
featuredImage: /attached_assets/your-image.jpg
---

Your blog content here in **markdown** format...

## Headings work great

- Lists too
- And all standard markdown features
```

The blog JSON is auto-generated when the server starts.

## 🎨 Customization

### Brand Colors

Edit `client/src/index.css`:

```css
:root {
  --primary: 20 100% 50%;      /* Your brand color (HSL) */
  --secondary: 200 100% 50%;    /* Secondary color */
  /* See file for all color variables */
}
```

### Fonts

Update `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

Then in `client/src/index.css`:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

### Navigation

Update `client/src/components/Header.tsx` to add/remove menu items.

## 🔧 Common Tasks

### Adding a New Page

1. Create `client/src/pages/YourPage.tsx`
2. Add route in `client/src/App.tsx`:
   ```typescript
   <Route path="/your-page" component={YourPage} />
   ```
3. Update navigation in `Header.tsx`

**Or just ask the agent:** "Add a /contact page with a form"

### Triggering Lead Form

```typescript
import { useLeadForm } from "@/contexts/LeadFormContext";

function YourComponent() {
  const { openLeadForm } = useLeadForm();
  
  return <Button onClick={openLeadForm}>Contact Us</Button>;
}
```

### SEO for Each Page

```typescript
<SEO
  title="Page Title | Your Brand"
  description="Compelling page description for search engines"
  type="website"
  image="/path/to/social-image.jpg"
/>
```

## 🐛 Troubleshooting

### Forms Not Submitting

- ✅ Check `RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` in secrets
- ✅ Verify domain is added in reCAPTCHA admin console
- ✅ Check browser console for errors

### Emails Not Sending

- ✅ Verify `RESEND_API_KEY` in secrets
- ✅ Check `FROM_EMAIL` is verified in Resend dashboard
- ✅ Look at server logs for error messages
- ✅ Use `onboarding@resend.dev` for testing

### Blog Not Showing

- ✅ Ensure markdown files have proper frontmatter
- ✅ Check `published: true` in frontmatter
- ✅ Restart server to regenerate blog JSON

## 📦 Storage

### In-Memory (Default)

- Perfect for simple websites
- Lead submissions stored temporarily
- Restarts on deployment (expected)
- **Pros:** No database complexity
- **Cons:** Data doesn't persist across deploys

### Upgrade to Database (Optional)

If you need persistent data:

1. Use Replit's built-in PostgreSQL
2. Update `server/storage.ts` to use database
3. Schema already defined in `shared/schema.ts`

## 🚢 Deployment

1. **Test locally** using the preview
2. **Configure domains:**
   - Add to reCAPTCHA settings
   - Verify in Resend dashboard
3. **Update environment:**
   - Set production URLs in secrets
4. **Publish** using Replit's publish feature

## 🛠 Tech Stack Details

- **Frontend:** React 18, Vite, wouter (routing), TanStack Query
- **Backend:** Express.js, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui, Radix UI
- **Forms:** react-hook-form, Zod validation
- **Email:** Resend API
- **Bot Protection:** Google reCAPTCHA v3
- **Blog:** Markdown with gray-matter + marked

## 📖 Learn More

- [Full documentation](./replit.md) - Complete template guide
- [Replit Docs](https://docs.replit.com) - Replit platform docs
- [shadcn/ui](https://ui.shadcn.com) - Component library docs
- [Tailwind CSS](https://tailwindcss.com) - Styling framework

## 💡 Pro Tips

1. **Start Simple:** Get basic pages working, then add complexity
2. **Use the Agent:** Describe what you want in natural language
3. **Test Forms:** Make sure lead submissions and emails work
4. **Mobile First:** Check responsive design on different screen sizes
5. **SEO Matters:** Add unique titles and descriptions to each page

## 🤝 Support

This is a template project. Customize it freely for your needs!

**Questions?** Describe what you're trying to build and let Replit Agent help you create it.

---

Built with ❤️ for rapid website development on Replit
