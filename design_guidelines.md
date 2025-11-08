# Design Guidelines for Savvy Dealer

## Design Approach

**Brand Identity**: Automotive digital marketing agency with bold, energetic personality. Apple-inspired aesthetic combining vibrant product colors with generous whitespace and premium polish. Professional yet dynamic, emphasizing performance and results.

**Core Philosophy**: "We don't outspend the competition — we outsmart them." Bold, confident, and data-driven. Emphasis on capturing leads, dominating search results, and delivering measurable ROI for auto dealerships.

**Visual Inspiration**: Apple.com - Large-scale product photography, dramatic typography, immersive full-width sections, smooth scroll animations, generous breathing room.

## Typography

**Font Stack**:
- Primary: Inter (400, 500, 600, 700) via Google Fonts
- Accent: Space Grotesk (500, 700) for headings and impact text

**Hierarchy** (Apple-inspired scale):
- Hero H1: 5xl to 8xl (60px-96px), Space Grotesk Bold, tight leading (-0.02em) - Massive homepage headlines
- Section H2: 4xl to 6xl (36px-60px), Space Grotesk Bold - Product section headlines
- H3: 2xl to 3xl (24px-30px), Inter Semibold - Subsection titles
- Large Body: lg to xl (18px-20px), Inter Regular - Hero descriptions, important copy
- Body: base (16px), Inter Regular - Main content, descriptions
- Small/Meta: sm (14px), Inter Medium - Labels, captions, metadata

**Typography Guidelines**:
- Line height: 1.1-1.2 for headlines, 1.6-1.7 for body text
- Letter spacing: Tight (-0.02em to -0.01em) for large headlines, normal for body
- Max width for body text: 65-75 characters (prose class)

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
5. **Purple** (#9333EA / HSL: 271, 81%, 56%) - Anti-Dashboard AI
   - Innovation, intelligence, future-forward

**Usage Guidelines**:
- Each product section uses its designated color for gradients and accents
- Primary CTAs use Electric Blue across the site
- Gradient overlays on product images for brand cohesion
- Maintain accessibility with proper contrast ratios

## Layout System (Apple-Inspired)

**Spacing Primitives**: 
- Small: 4, 6, 8 - Component internal spacing
- Medium: 12, 16, 20 - Between elements
- Large: 24, 32, 40 - Between sections
- XL: 48, 64, 80, 96 - Major section padding (Apple's generous spacing)

**Grid Structure**:
- Container: max-w-7xl with px-6 to px-8 responsive padding
- Section spacing: py-20 to py-32 (much more generous than typical sites)
- Full-width sections: w-full with container-constrained content
- Asymmetric layouts: 60/40 or 40/60 splits for visual interest

**Apple-Style Layout Principles**:
- Full-width, edge-to-edge product showcases
- Generous vertical rhythm (at least 80-120px between major sections)
- Content breathing room - never cramped
- Large product imagery dominating the viewport
- Minimal UI chrome - let content shine

## Animation System

**Philosophy**: Smooth, purposeful motion that enhances rather than distracts

**Scroll Animations** (using Framer Motion):
- Fade-in on scroll: Elements appear with opacity 0→1 and subtle Y translation (-20px → 0)
- Parallax effects: Background images move at 0.5x scroll speed
- Stagger animations: Sequential reveal of list items (50ms delay between)
- Threshold: Trigger at 10-20% visibility for early anticipation

**Interaction Animations**:
- Button hover: Subtle scale (1.02) and brightness increase
- Card hover: Gentle lift (translateY -4px) with shadow enhancement
- Link hover: Underline grows from center outward
- Smooth scroll: scroll-behavior: smooth for anchor links

**Performance**:
- Use transform and opacity for animations (GPU-accelerated)
- Prefer CSS transitions for simple states
- Use Framer Motion for complex orchestrations
- Respect prefers-reduced-motion

**Timing Functions**:
- Ease-out: For entering elements (cubic-bezier(0, 0, 0.2, 1))
- Ease-in-out: For state changes (cubic-bezier(0.4, 0, 0.2, 1))
- Spring: For playful interactions (Framer Motion spring presets)

## Homepage Structure (Apple-Inspired)

### Hero Section
- **Full viewport height** (min-h-screen)
- **Large-scale background image** with subtle gradient overlay
- **Massive headline**: 72px-96px, center-aligned
- **Concise subheadline**: 24px-30px, max-w-3xl
- **Floating CTA**: Single prominent button with generous padding
- **Scroll indicator**: Subtle animated arrow at bottom

### Product Showcase Sections
- **Full-width stacked sections** (not card grid)
- Each product gets entire viewport section with:
  - Large product-specific image (50-60% of viewport)
  - Dramatic headline (48px-60px)
  - Concise description (20px-24px)
  - Product color accent via gradient overlay or border
  - Dual CTAs: "Learn More" + "Request Demo"
- **Alternating layout**: Image left/right for visual rhythm
- **Scroll animations**: Fade and slide as user scrolls

### Simplified Structure
- Remove testimonial carousel in favor of clean product focus
- Streamline footer to essential links only
- Minimize header chrome - logo + minimal nav + CTA

## Navigation

### Header (Apple-Style)
- **Minimal height**: h-16 to h-20 (shrinks on scroll to h-14)
- **Backdrop blur**: backdrop-blur-md with bg-white/80 transparency
- **Sticky positioning**: sticky top-0 with high z-index
- **Content**: Logo left, centered nav links, CTA button right
- **Scroll behavior**: Shrinks and increases transparency on scroll down
- **Mobile**: Clean hamburger menu, full-screen overlay

## Visual Treatment

**Images**:
- Large-scale hero and product images (min 1920px wide)
- Modern aspect ratios: 16:9 for landscape, 3:4 for portrait products
- Gradient overlays for brand consistency
- Lazy loading below fold
- Optimized formats (WebP with JPG fallback)

**Cards & Containers**:
- Minimize use of cards - prefer full-width sections
- When used: Subtle borders, rounded-2xl, minimal shadow
- Generous internal padding (p-8 to p-12)

**Buttons**:
- Large touch targets: min-h-12 to min-h-14
- Rounded: rounded-full for primary, rounded-lg for secondary
- Generous padding: px-8 py-4 for primary CTAs
- Clear hierarchy: Solid primary, outline secondary, ghost tertiary

## Accessibility

- WCAG 2.1 AA compliant contrast ratios
- Focus visible states on all interactive elements
- Semantic HTML throughout
- Alt text for all images
- Keyboard navigation fully supported
- Reduced motion support for animations
- Form labels properly associated
- Sufficient click/tap target sizes (min 44x44px)

## Responsive Design

**Breakpoints**:
- Mobile: < 640px - Single column, stack everything
- Tablet: 640px-1024px - Simplified layouts, reduce image sizes
- Desktop: 1024px+ - Full experience with large imagery

**Mobile Priorities**:
- Headline sizes scale down proportionally (50-60% of desktop)
- Generous touch targets (min 44x44px)
- Simplified navigation (hamburger menu)
- Stacked product sections (image → text → CTAs)
- Maintain spacing ratios even when absolute values shrink

## Image Assets

All AI-generated product images located in `attached_assets/generated_images/`:
- **Hero**: `Automotive_dealership_hero_image_d17995ec.png` - Main homepage hero
- **Facebook Ads**: `Facebook_Ads_pink_theme_3fd45300.png` - Pink themed
- **PPC Ads**: `PPC_Ads_orange_theme_7bcb5a76.png` - Orange themed  
- **SEO**: `SEO_green_theme_1cae63d8.png` - Green themed
- **Websites**: `Dealer_Websites_blue_theme_2aaf45c2.png` - Blue themed
- **Anti-Dashboard AI**: `Anti-Dashboard_AI_purple_theme_4cd41597.png` - Purple themed

Import using `@assets` alias:
```jsx
import heroImage from '@assets/generated_images/Automotive_dealership_hero_image_d17995ec.png'
```

This design creates a premium, Apple-inspired experience that emphasizes visual storytelling, generous spacing, and smooth interactions while maintaining the vibrant multi-product brand identity.
