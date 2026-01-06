# 🎨 Krishana Loan - Design Specifications

## Color Palette

### Primary Colors
- **Primary Blue:** `#0066FF` - Main brand color, used for CTAs and links
- **Primary Dark:** `#0047B3` - Darker blue for hover states
- **Success Green:** `#00C853` - Success states and positive actions
- **Accent Orange:** `#FF6B35` - Highlights and attention elements

### Neutral Colors
- **White:** `#FFFFFF` - Clean backgrounds
- **Light Gray:** `#F8F9FA` - Section backgrounds
- **Medium Gray:** `#E9ECEF` - Borders and dividers
- **Text Dark:** `#1A1A1A` - Primary text
- **Text Gray:** `#6C757D` - Secondary text

## Typography

### Font Family
**Inter** - Modern, clean, highly readable sans-serif font from Google Fonts

### Font Sizes
- **Hero Title:** 56px (42px tablet, 32px mobile)
- **Section Titles:** 42px (32px tablet, 28px mobile)
- **Subheadings:** 28px
- **Body Text:** 16-18px
- **Small Text:** 14px

### Font Weights
- **Regular:** 400
- **Medium:** 500
- **Semibold:** 600
- **Bold:** 700
- **Extrabold:** 800
- **Black:** 900

## Layout Specifications

### Container
- **Max Width:** 1200px
- **Padding:** 20px (left/right)

### Section Spacing
- **Vertical Padding:** 80px (top/bottom)
- **Mobile Padding:** 40-60px

### Grid Systems
- **Features Grid:** 3 columns (auto-fit, min 280px)
- **Providers Grid:** 3 columns (auto-fit, min 250px)
- **Steps:** 3 columns with arrows between

## Component Specifications

### Buttons

#### Primary CTA Button
```
Background: Linear gradient (Blue to Green)
Padding: 18px
Font Size: 18px
Font Weight: 700
Border Radius: 12px
Shadow: Medium (0 4px 16px rgba(0,0,0,0.12))
Hover: Lift effect (-2px translateY)
```

#### Sticky Button
```
Background: White
Color: Primary Blue
Full Width on Mobile
Fixed to bottom
Appears after scrolling past hero
```

### Form Elements

#### Text Inputs
```
Padding: 14px 16px
Border: 2px solid #E9ECEF
Border Radius: 12px
Font Size: 16px
Focus: Blue border + shadow glow
```

#### Range Slider
```
Height: 8px
Thumb: 24px circle, Primary Blue
Track: Light Gray
Hover: Scale 1.2 on thumb
```

#### Radio Buttons (Custom)
```
Display: Grid (2 columns)
Padding: 14px
Border: 2px solid gray
Selected: Blue border + light blue background
```

### Cards

#### Feature Cards
```
Background: White
Padding: 32px
Border Radius: 20px
Shadow: Small (default) → Large (hover)
Hover: Lift -8px + border color change
Icon: 48px emoji with bounce animation
```

#### Form Card
```
Background: Glassmorphism gradient
Backdrop Filter: Blur 20px
Padding: 40px
Border Radius: 24px
Shadow: Extra Large
Border: 1px white semi-transparent
```

#### Provider Cards
```
Background: White gradient
Padding: 32px
Border: 2px solid light gray
Hover: Green border + lift effect
Logo Area: 60px height, blue background
```

## Animations

### Keyframe Animations

#### Pulse (WhatsApp Button)
```
0%, 100%: Shadow ring at 0
50%: Shadow ring expands to 15px, fades out
Duration: 2s infinite
```

#### Bounce (Feature Icons)
```
0%, 100%: translateY(0)
50%: translateY(-10px)
Duration: 2s infinite
```

#### Slide In Right (Form Card)
```
From: opacity 0, translateX(30px)
To: opacity 1, translateX(0)
Duration: 0.6s ease-out
```

#### Fade In (Modal)
```
From: opacity 0
To: opacity 1
Duration: 0.3s ease
```

### Transition Effects

#### Standard Hover
```
Property: all
Duration: 0.3s
Easing: ease
```

#### Button Hover
```
Transform: translateY(-2px)
Shadow: Increase to large
```

#### Card Hover
```
Transform: translateY(-8px)
Shadow: Increase to extra large
Border: Color change to brand color
```

## Responsive Breakpoints

### Desktop (Default)
- **Min Width:** 969px
- **Hero:** 2-column grid (text + form)
- **Features:** 3 columns
- **Steps:** Horizontal with arrows

### Tablet
- **Max Width:** 968px
- **Hero:** Single column (stacked)
- **Hero Title:** 42px
- **Form Padding:** Reduced to 32px

### Mobile
- **Max Width:** 640px
- **Hero Title:** 32px
- **Hero Padding:** 40px vertical
- **Form Padding:** 24px
- **All Grids:** Single column
- **Sticky Button:** Always visible when scrolled
- **WhatsApp Button:** Positioned above sticky bar

## Special Effects

### Glassmorphism
```css
background: linear-gradient(135deg, 
  rgba(255,255,255,0.95) 0%, 
  rgba(255,255,255,0.98) 100%);
backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.5);
```

### Gradient Backgrounds
```css
/* Hero Gradient */
background: linear-gradient(135deg, 
  #0047B3 0%, 
  #0066FF 50%, 
  #00C853 100%);

/* Button Gradient */
background: linear-gradient(135deg, 
  #0066FF 0%, 
  #00C853 100%);
```

### Shadow System
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
--shadow-md: 0 4px 16px rgba(0,0,0,0.12);
--shadow-lg: 0 8px 32px rgba(0,0,0,0.16);
--shadow-xl: 0 16px 48px rgba(0,0,0,0.2);
```

## Accessibility Features

### Focus States
- All interactive elements have visible focus indicators
- Blue glow shadow on form inputs
- Keyboard navigation supported

### Color Contrast
- Text meets WCAG AA standards
- White text on blue background: 4.5:1 ratio
- Dark text on white background: 15:1 ratio

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Form labels associated with inputs
- ARIA labels where needed

## Performance Optimizations

### CSS
- Uses CSS custom properties for theming
- Hardware-accelerated transforms
- Will-change hints for animations
- Minimal repaints/reflows

### JavaScript
- Intersection Observer for scroll animations
- Debounced scroll events
- Event delegation where possible
- No jQuery or heavy frameworks

### Loading
- Google Fonts preconnected
- Minimal external dependencies
- Inline critical CSS (optional)
- Lazy loading ready for images

## Section-by-Section Breakdown

### 1. Hero Section
- **Height:** 100vh minimum
- **Background:** Gradient with radial overlays
- **Layout:** 2-column (text left, form right)
- **Key Elements:** Trust badges, gradient text, feature list

### 2. Why Choose Section
- **Background:** Light gray (#F8F9FA)
- **Grid:** 3 columns, auto-fit
- **Cards:** 6 feature cards with icons
- **Animation:** Fade in on scroll

### 3. Loan Providers Section
- **Background:** White
- **Grid:** 3 columns, auto-fit
- **Cards:** 6 provider cards
- **Hover:** Green border effect

### 4. How It Works Section
- **Background:** Light gray
- **Layout:** 3 cards with arrows between
- **Special:** Step numbers positioned absolutely
- **Mobile:** Stacked, arrows hidden

### 5. About Section
- **Background:** White
- **Layout:** Centered content, max 900px
- **Stats Grid:** 4 columns
- **Numbers:** Gradient text effect

### 6. Contact Section
- **Background:** Light gray
- **Grid:** 3 columns
- **Cards:** Icon, title, link, description
- **Hover:** Lift effect

### 7. Footer
- **Background:** Dark (#1A1A1A)
- **Color:** White text
- **Layout:** Flex (brand left, links right)
- **Border:** Top border on bottom section

## Interactive Elements

### Sticky Apply Button
- **Trigger:** Scrolled past hero section
- **Position:** Fixed bottom
- **Animation:** Slide up from bottom
- **Z-index:** 999

### WhatsApp Float
- **Position:** Fixed bottom-right
- **Size:** 60px circle
- **Animation:** Continuous pulse
- **Z-index:** 998

### Success Modal
- **Overlay:** Dark with blur
- **Content:** Centered card
- **Animation:** Fade in + slide up
- **Close:** Click outside or button

### Form Interactions
- **Auto-focus:** First input when in view (desktop only)
- **Validation:** HTML5 + custom
- **Slider:** Real-time value update
- **Submit:** Loading state with animation

## Best Practices Implemented

✅ Mobile-first responsive design  
✅ Semantic HTML5 structure  
✅ Accessible form labels and inputs  
✅ Performance-optimized animations  
✅ Cross-browser compatibility  
✅ Touch-friendly interactive elements  
✅ Clear visual hierarchy  
✅ Consistent spacing system  
✅ Professional color palette  
✅ Modern design trends (glassmorphism, gradients)  
✅ Conversion-optimized layout  
✅ Trust-building elements throughout  

---

**Design Philosophy:** Premium, trustworthy, fast, and conversion-focused for Instagram traffic.
