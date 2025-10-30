# Blizzard Discord Bot - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from modern AI platforms (OpenAI, Anthropic, Midjourney) combined with premium Discord bot aesthetics (MEE6, Dyno). The design emphasizes futuristic sophistication with glassmorphism effects, subtle animations, and gradient accents.

## Core Design Elements

### Typography
- **Primary Font**: 'Inter' or 'DM Sans' (Google Fonts)
- **Display Font**: 'Space Grotesk' or 'Outfit' for headings
- **Hierarchy**:
  - H1: 3.5rem (56px) - Hero headlines, bold weight
  - H2: 2.5rem (40px) - Section headers, semibold
  - H3: 1.75rem (28px) - Card titles, medium
  - Body: 1.125rem (18px) - Regular text
  - Small: 0.875rem (14px) - Captions, labels

### Layout System
**Tailwind Spacing**: Use units of 4, 8, 12, 16, 20, 24, and 32 for consistent rhythm (p-4, gap-8, mt-12, py-16, etc.)

**Container Widths**:
- Hero/Full sections: w-full with inner max-w-7xl
- Content sections: max-w-6xl mx-auto
- Text content: max-w-4xl for readability

### Color Palette
**Dark Theme Foundation**:
- Background Primary: #0a0e1a (deep navy-black)
- Background Secondary: #111827 (card backgrounds)
- Background Tertiary: #1f2937 (elevated elements)

**Sky Blue Accents**:
- Primary: #38bdf8 (bright sky blue)
- Secondary: #0ea5e9 (deeper sky)
- Gradient: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)

**Supporting Colors**:
- Text Primary: #f9fafb (near white)
- Text Secondary: #9ca3af (muted gray)
- Border: rgba(56, 189, 248, 0.2) (subtle sky blue glow)

### Visual Effects
**Glassmorphism**: Apply to navigation, cards, and modal elements
- Background: rgba(17, 24, 39, 0.7)
- Backdrop-filter: blur(12px)
- Border: 1px solid rgba(56, 189, 248, 0.2)

**Glow Effects**: Sky blue subtle glows on hover states and accent elements
- Box-shadow: 0 0 20px rgba(56, 189, 248, 0.3)

## Homepage Structure

### Navigation Bar
- Fixed top position with glassmorphism backdrop
- Logo "Blizzard" (left) with subtle sky blue glow icon
- Menu items: Home, Features, Commands, About (center/right)
- CTA Button: "Add to Discord" (sky blue gradient, prominent)
- Mobile: Hamburger menu with slide-in drawer

### Hero Section (80vh)
**Layout**: Centered content with decorative background
- Large hero image: Abstract technological/winter theme (crystalline structures, digital particles, futuristic ice patterns) with sky blue accent lighting
- Overlaying headline: "Supercharge Your Discord Server" (H1, gradient text effect)
- Subheadline: "Blizzard brings AI-powered moderation, entertainment, and utility to your community" (text-secondary)
- CTA Buttons: "Add to Discord" (primary, blurred background) + "Explore Features" (secondary outline)
- Floating stats cards: Server count, user count, commands available (glassmorphism cards)

### Features Grid Section (py-24)
**3-column grid** (responsive to 1-column mobile)
- 6-9 feature cards with:
  - Icon (top, sky blue gradient)
  - Title (H3)
  - Description (2-3 lines)
  - Glassmorphism card background
  - Subtle hover: lift effect + enhanced glow

**Feature Examples**: AI Moderation, Custom Commands, Music Player, Leveling System, Welcome Messages, Auto-Roles, Ticketing, Analytics Dashboard

### Bot Statistics Section (py-20)
**Full-width dark gradient background** (#0a0e1a to #111827)
- 4-column stat display (centered)
- Large numbers with sky blue color
- Labels below each stat
- Animated count-up effect on scroll

### Commands Preview Section (py-24)
**2-column layout**: Left side - interactive command list/terminal mockup, Right side - description and benefits
- Simulated Discord message interface showing bot responses
- Code-style formatting for commands
- Sky blue syntax highlighting

### Call-to-Action Section (py-32)
**Centered content** with gradient background overlay
- Compelling headline: "Ready to Transform Your Server?"
- Supporting text about easy setup
- Large "Add to Discord" button (sky blue gradient)
- Trust indicators: "Free • Trusted by X servers • 24/7 uptime"

### Footer (py-16)
**3-column layout** (responsive)
- Column 1: Blizzard branding, tagline, social links (Discord, Twitter, GitHub)
- Column 2: Quick links (Documentation, Support, Invite Bot, Dashboard)
- Column 3: Newsletter signup form (optional), legal links
- Bottom bar: Copyright, Privacy Policy, Terms of Service

## Information/About Page Structure

### Page Hero (60vh)
- Background: Subtle animated gradient
- Title: "About Blizzard" (H1)
- Brief mission statement

### What is Blizzard Section (py-20)
**Single column, max-w-4xl**
- Comprehensive description of bot purpose and capabilities
- 2-3 paragraphs with proper spacing
- Key features highlighted in sky blue

### Feature Deep-Dive Sections (py-16 each)
**Alternating 2-column layouts** (image left/right alternates)
- Each major feature gets a section:
  - Feature image/mockup (Discord screenshots, UI examples)
  - Detailed explanation
  - Technical highlights
  - Benefits list

### Team/Developer Section (py-20)
**Card grid** introducing creators/contributors
- Photo or avatar
- Name, role
- Brief bio
- Social links

### Technology Stack Section (py-16)
**Icon grid** showing technologies used
- Discord.js logo
- Node.js
- Other relevant tech
- Sky blue accent on hover

### FAQ Section (py-20)
**Accordion-style expandable items**
- Common questions about setup, features, pricing
- Glassmorphism cards
- Sky blue accent for active item

## Component Library

### Buttons
- **Primary**: Sky blue gradient background, white text, blurred background when over images
- **Secondary**: Outline style with sky blue border, sky blue text
- **Hover**: Slight scale + enhanced glow, no color changes needed

### Cards
- Glassmorphism background
- Subtle sky blue border
- Padding: p-6 to p-8
- Hover: transform scale(1.02) + glow enhancement

### Form Inputs (if needed)
- Dark background (#1f2937)
- Sky blue border on focus
- Placeholder text: text-secondary

### Navigation Links
- Text-secondary default
- Sky blue on hover
- Underline animation on hover

## Images

### Large Hero Image
**Yes - Critical for impact**
- Placement: Full-width background of hero section
- Style: Abstract futuristic winter/technology theme - think crystalline formations, digital particles, northern lights-inspired sky blue gradients, or sleek AI-inspired geometric patterns
- Treatment: Subtle blur overlay with dark gradient (to ensure text readability)
- Dimensions: 1920x1080 minimum

### Feature Section Images
- Discord interface mockups showing bot in action
- Screenshot examples of commands and responses
- Glassmorphism frame treatment for screenshots

### About Page Images
- Alternating feature showcase images
- Bot dashboard mockups
- Community/server examples
- Each image should demonstrate actual bot functionality

## Accessibility & Performance
- Focus states with sky blue outline
- Minimum text contrast ratio 4.5:1
- Reduced motion preferences respected
- Optimized images (WebP format)
- Lazy loading for below-fold images
- Static-friendly (no server-side dependencies)

## Responsive Breakpoints
- Mobile: < 640px (single column, stacked elements)
- Tablet: 640px - 1024px (2-column where applicable)
- Desktop: > 1024px (full multi-column layouts)

This design creates a premium, modern aesthetic that positions Blizzard as a sophisticated, AI-powered Discord bot while maintaining visual consistency and professional polish throughout.