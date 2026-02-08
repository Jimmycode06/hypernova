# Hypernovation - Ultra-Premium Portfolio Website

A futuristic, ultra-modern portfolio website for Hypernovation studio, specializing in AI, iOS Apps, SaaS, Web Design, E-commerce, and premium UI/UX.

## 🚀 Tech Stack

- **Next.js 14** - App Router for modern React development
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## ✨ Features

- 🌟 **Ultra-Premium Design** - Dark futuristic theme with glassmorphism effects
- 🎨 **Animated Backgrounds** - Aurora, grid, and particle effects inspired by Aceternity UI
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Smooth Animations** - Framer Motion powered interactions
- 🔍 **Project Filtering** - Smart search and category filters
- 💎 **Glassmorphism UI** - Modern glass cards with glowing effects
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

## 📄 Pages

- **Home** (`/`) - Hero section with services, portfolio preview, process, testimonials, and CTA
- **Projects** (`/projects`) - Full portfolio with filtering and search
- **About** (`/about`) - Studio information, values, and expertise
- **Contact** (`/contact`) - Contact form with social links

## 🎨 Design System

### Colors
- Background: `#0B1020` / `#0F172A`
- Accent: Cyan `#22D3EE`
- Secondary: Purple/Pink gradients

### Typography
- Font: Inter (system font)
- Smooth, Apple-like hierarchy

### Components
- `GlassCard` - Reusable glass morphism card
- `ProjectCard` - Portfolio project display
- `ServiceCard` - Service offering card
- `Button` - Multiple variants (primary, secondary, outline)
- `AnimatedBackground` - Aurora, Grid, and Dots variants

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Hypernova/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles & utilities
│   ├── projects/           # Projects page with filtering
│   ├── about/              # About page
│   └── contact/            # Contact page with form
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer component
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       ├── ProjectCard.tsx
│       ├── ServiceCard.tsx
│       ├── Button.tsx
│       ├── AnimatedBackground.tsx
│       └── ParticleEffect.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/                 # Static assets
```

## 🎯 Key Features Explained

### Glassmorphism
All cards use a custom glass effect with:
- Backdrop blur
- Semi-transparent backgrounds
- Glowing borders on hover
- Smooth transitions

### Animations
- Fade-in on scroll using Framer Motion
- Hover lift effects
- Smooth page transitions
- Particle effects
- Animated gradients (Aurora)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Optimized typography scaling
- Touch-friendly interactions

## 🛠️ Customization

### Update Colors
Edit `tailwind.config.ts` and `app/globals.css` to change the color scheme.

### Modify Content
- Projects: Edit `app/projects/page.tsx`
- Services: Edit `components/sections/ServicesSection.tsx`
- About info: Edit `app/about/page.tsx`

### Add New Pages
Create new folders in `/app` directory following Next.js App Router conventions.

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Railway

## 📝 License

This project is private and proprietary.

## 🤝 Contact

For inquiries: contact@hypernovation.com

---

Built with ❤️ by Hypernovation
