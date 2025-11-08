# Design Guidelines for Savvy Dealer

## Design Approach

**Brand Identity**: Automotive digital marketing agency with bold, energetic personality. Vibrant multi-color scheme representing each core product. Professional yet dynamic, emphasizing performance and results.

**Core Philosophy**: "We don't outspend the competition — we outsmart them." Bold, confident, and data-driven. Emphasis on capturing leads, dominating search results, and delivering measurable ROI for auto dealerships.

## Typography

**Font Stack**:
- Primary: Inter (400, 500, 600, 700) via Google Fonts
- Accent: Space Grotesk (500, 700) for headings and impact text

**Hierarchy**:
- H1: 3xl to 6xl, Space Grotesk Bold, tight leading - Used for hero headlines
- H2: 2xl to 4xl, Space Grotesk Medium - Section headers
- H3: xl to 2xl, Inter Semibold - Product/feature titles
- Body: base to lg, Inter Regular - Main content, descriptions
- Small/Meta: sm, Inter Medium - Labels, captions, metadata

## Color System

**Primary Brand Color**: Electric Blue (#0088FF / HSL: 208, 100%, 50%)
- Used for primary CTAs, links, and brand elements
- Represents trust, technology, and dealer websites

**Product Colors** (each representing a core service):
1. **Pink/Magenta** (#FF4081 / HSL: 340, 100%, 63%) - Facebook Ads
   - Social, engaging, captures attention
2. **Bright Green** (#00E676 / HSL: 151, 100%, 45%) - Dealer SEO
   - Growth, organic, long-term results
3. **Vibrant Orange** (#FF6B35 / HSL: 16, 100%, 60%) - PPC Ads
   - Energy, urgency, immediate conversions
4. **Electric Blue** (#0088FF / HSL: 208, 100%, 50%) - Dealer Websites
   - Trust, technology, digital foundation

**Usage Guidelines**:
- Each product card/section uses its designated color for icons and accents
- Primary CTAs use Electric Blue across the site
- Color backgrounds at 10-15% opacity with full-color icons
- Maintain accessibility with proper contrast ratios

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
- Badge: "Digital Marketing for Auto Dealers"
- H1: "The Savvy Dealer Difference"
- Tagline emphasizing "leads aren't created — they're captured"
- Supporting copy about SEO/GEO strategy and outsmarting competition
- Dual CTA: "Request Free Audit" (primary) + "Our Products" (outline)
- Subtle scroll indicator at bottom

### Product Suite Section
- "Savvy Product Suite" heading
- 2x2 grid on desktop, stack on mobile
- Each product card includes:
  - Color-coded icon (14x14 container with 10-15% opacity background)
  - Product title (bold, 2xl)
  - Subtitle (uppercase, small, muted)
  - Description paragraph (actual service copy)
  - "Request Free Audit" CTA button (consistent across all products)
- Products: Facebook Ads (Pink), Dealer SEO (Green), PPC Ads (Orange), Dealer Websites (Blue)

### Testimonials Section
- "What Dealers are Saying About Us" heading
- 3-column grid of testimonial cards
- Each card includes:
  - Quote text (italic, muted foreground)
  - Border separator
  - Name (bold), Title, Company (primary color)
- Real dealer testimonials from Brighton Ford, Banner Ford, Lake Powell Ford

### About Section
- "How We Drive Your Sales" heading
- Two-column layout with image
- Bullet points about SEO/GEO strategy
- Emphasis on "We don't outspend the competition — we outsmart them"
- CTA: "Request Free Audit"

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