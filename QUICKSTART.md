# Quick Start Guide

## Installation & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Output will be in the `dist` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Deployment Commands

### Vercel
```bash
# Install CLI
npm install -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Netlify
```bash
# Install CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Cloudflare Pages
```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Build and deploy
npm run build
wrangler pages deploy dist --project-name=monitoring-situation
```

---

## File Structure

```
EU-Monitoring/
├── src/
│   ├── components/         # All React components
│   ├── lib/               # Utilities and logic
│   ├── App.tsx            # Main app
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html             # HTML template
├── package.json           # Dependencies
├── vite.config.ts         # Vite config
├── tailwind.config.js     # Tailwind config
└── tsconfig.json          # TypeScript config
```

---

## Key Features

✅ Single-page application (no routing)
✅ Military dashboard design
✅ Statement generator with customization
✅ Concern index dashboard with charts
✅ Committee management with search/filter
✅ Buy Me a Coffee integration
✅ Fully responsive
✅ Accessible (ARIA labels, keyboard navigation)
✅ Deterministic randomness (stable values per session)

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

---

## Common Issues

### Port already in use
Change port in dev:
```bash
npm run dev -- --port 3000
```

### TypeScript errors
Clear cache and rebuild:
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Styling not working
Ensure Tailwind is processing correctly:
```bash
# Check tailwind.config.js content paths
# Restart dev server
```

---

## Customization

### Change colors
Edit `tailwind.config.js` → `theme.extend.colors.ops`

### Modify content
- Live feed: `src/lib/data.ts`
- Statements: `src/lib/generator.ts`
- Committees: `src/lib/data.ts`

### Add sections
1. Create component in `src/components/`
2. Import and add to `src/App.tsx`
3. Add nav item to `src/components/Sidebar.tsx`

---

## Production Checklist

Before deploying:
- [ ] `npm run build` succeeds
- [ ] `npm run preview` works
- [ ] All links tested (especially Buy Me a Coffee)
- [ ] Mobile responsive checked
- [ ] Console has no errors
- [ ] Accessibility tested

---

## Links

- **Repository**: (Add your GitHub URL)
- **Support**: https://buymeacoffee.com/harryhh
- **Docs**: See README.md and DEPLOYMENT.md
