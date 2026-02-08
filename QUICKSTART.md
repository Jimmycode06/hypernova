# 🚀 Quick Start Guide

Get your Hypernovation website up and running in 2 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Step 2: Run Development Server

```bash
npm run dev
```

Your site will be available at: **http://localhost:3000**

## Step 3: Preview Your Site

Open your browser and navigate to:
- **Home:** http://localhost:3000
- **Projects:** http://localhost:3000/projects
- **About:** http://localhost:3000/about
- **Contact:** http://localhost:3000/contact

## 🎨 Customization Tips

### Change Colors
Edit `app/globals.css` and look for the `:root` CSS variables to modify colors.

### Update Projects
Edit `app/projects/page.tsx` and modify the `allProjects` array.

### Modify Services
Edit `components/sections/ServicesSection.tsx` and update the `services` array.

### Change Content
All text content can be found in the respective component files in:
- `components/sections/` - For home page sections
- `app/*/page.tsx` - For individual pages

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy!

## 💡 Pro Tips

- All components are fully responsive
- Animations trigger on scroll
- The contact form is frontend-only (add backend as needed)
- Search and filtering work client-side for instant results

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Want to see all available scripts?
Check `package.json` "scripts" section.

---

Need help? Contact: contact@hypernovation.com
