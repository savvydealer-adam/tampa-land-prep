# Design Guidelines for Modern Website with CMS

## Design Approach

**Hybrid Strategy**: Contemporary business site aesthetic for public pages (inspired by Stripe, Linear) + clean dashboard patterns for admin (Material Design principles).

**Core Philosophy**: Professional, trustworthy, and effortless to navigate. Emphasis on content clarity and modern visual refinement.

## Typography

**Font Stack**:
- Primary: Inter (400, 500, 600, 700) via Google Fonts
- Accent: Space Grotesk (500, 700) for headings and impact text

**Hierarchy**:
- H1: 3xl to 5xl, Space Grotesk Bold, tight leading
- H2: 2xl to 4xl, Space Grotesk Medium
- H3: xl to 2xl, Inter Semibold
- Body: base to lg, Inter Regular
- Small/Meta: sm, Inter Medium

## Layout System

**Spacing Primitives**: Tailwind units of 3, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Grid Structure**:
- Container: max-w-7xl with px-4 to px-8 responsive padding
- Section spacing: py-16 mobile, py-24 desktop
- Component gaps: gap-6 to gap-12 depending on density

## Public Website Components

### Navigation
- Sticky header with logo left, menu items center/right
- Desktop: Horizontal nav with hover underline animation
- Mobile: Hamburger menu with smooth slide-in drawer
- CTA button in header (distinct from nav links)

### Homepage Hero
- Full-width section with large hero image background
- Height: 85vh on desktop, 70vh mobile
- Content overlay with backdrop blur on buttons
- H1 + supporting paragraph + dual CTA buttons (primary + secondary ghost)
- Subtle scroll indicator at bottom

### Content Sections
- Alternating full-width and contained sections
- 2-3 column feature grids on desktop (stack mobile)
- Card components with subtle shadow and hover lift effect
- Mixed media: text blocks, image galleries, statistics displays

### Footer
- Multi-column layout (4 columns desktop, stack mobile)
- Logo + tagline, Quick Links, Resources, Contact info
- Social media icons
- Copyright bar at bottom

## Admin Panel Components

### Dashboard Layout
- Left sidebar navigation (collapsible on mobile)
- Top bar with search and user profile
- Main content area with breadcrumbs

### Page Builder Interface
- Drag-and-drop canvas in center
- Component palette sidebar (blocks library)
- Properties panel on right for editing selected elements
- Preview/Edit/Publish mode toggle

### Content Blocks
- Hero block, Text block, Image block, Gallery block, CTA block, Stats block
- Each block has settings panel for customization
- Visual block outline on hover, edit icon overlay

### Forms & Tables
- Clean input fields with subtle borders
- Floating labels on focus
- Data tables with sorting, filtering, search
- Pagination controls

## Visual Treatment

**Cards & Containers**:
- Subtle border (border-gray-200)
- Rounded corners: rounded-lg to rounded-xl
- Shadow: shadow-sm default, shadow-md on hover

**Buttons**:
- Primary: Solid with blurred background when on images
- Secondary: Ghost/outline style
- Rounded: rounded-lg
- Padding: px-6 py-3 for standard size

**Images**:
- Aspect ratio maintained, object-fit-cover
- Lazy loading for performance
- Subtle overlay on hover for interactive elements

## Animations

**Sparingly Applied**:
- Smooth scroll behavior
- Fade-in on scroll for sections (intersection observer)
- Button hover scale (1.02)
- Card hover lift (translateY -2px)
- Page transitions: fade only, no complex motion

## Admin-Specific Design

**Editor Experience**:
- Light mode optimized for long work sessions
- Clear visual hierarchy in toolbars
- Inline editing with immediate visual feedback
- Auto-save indicator
- Undo/redo clearly visible

## Images

**Homepage Hero**: 
- Large, professional hero image (1920x1080+)
- Subject: Modern office/technology environment or abstract gradient
- Treatment: Slight dark overlay (20-30% opacity) for text legibility

**Content Sections**:
- Feature section: 3-4 supporting images showcasing website capabilities
- About section: Team or office photo
- All images optimized, webp format preferred

**Admin Panel**:
- Placeholder icons from Heroicons
- Empty state illustrations for new pages/sections
- User avatar placeholders

## Accessibility

- WCAG 2.1 AA compliant contrast ratios
- Focus visible states on all interactive elements
- Semantic HTML throughout
- Alt text for all images
- Keyboard navigation fully supported
- Form labels properly associated

This design creates a polished, professional presence with intuitive content management that requires zero coding knowledge.