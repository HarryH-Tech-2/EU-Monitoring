# Deployment Guide

This guide provides detailed instructions for deploying the MONITORING THE SITUATION application to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:
1. Built the project locally: `npm run build`
2. Verified the build works: `npm run preview`
3. Committed all changes to Git (if using Git-based deployment)

## Vercel Deployment

### Method 1: Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts. For production deployment:
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Web Interface

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Custom Domain (Vercel)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed by Vercel

---

## Netlify Deployment

### Method 1: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login:
   ```bash
   netlify login
   ```

3. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Method 2: Netlify Web Interface (Drag & Drop)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to the deployment area

### Method 3: Netlify Git Integration

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Choose your Git provider and repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Custom Domain (Netlify)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Configure DNS as instructed

---

## Cloudflare Pages Deployment

### Method 1: Cloudflare Dashboard

1. Push your code to GitHub or GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to Pages
4. Click "Create a project"
5. Connect your Git repository
6. Configure build settings:
   - **Production branch**: `main` or `master`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave blank)
7. Click "Save and Deploy"

### Method 2: Wrangler CLI

1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```

2. Login:
   ```bash
   wrangler login
   ```

3. Build:
   ```bash
   npm run build
   ```

4. Deploy:
   ```bash
   wrangler pages deploy dist --project-name=monitoring-situation
   ```

### Custom Domain (Cloudflare Pages)

1. Go to your Pages project
2. Click "Custom domains"
3. Add your domain
4. DNS records will be automatically configured if using Cloudflare DNS

---

## GitHub Pages Deployment

1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deployment script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Update `vite.config.ts` to set base path:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages in repository settings (source: gh-pages branch)

---

## Environment Variables

This application doesn't require environment variables, but if you need to add any:

### Vercel
Add in Project Settings → Environment Variables

### Netlify
Add in Site settings → Build & deploy → Environment

### Cloudflare Pages
Add in Pages project settings → Environment variables

---

## Post-Deployment Checklist

After deploying, verify:

- [ ] All sections load correctly
- [ ] Navigation works (anchor links scroll to sections)
- [ ] Statement Generator produces output
- [ ] Concern Index dashboard displays charts
- [ ] Committee search and filter work
- [ ] Buy Me a Coffee link opens correctly in new tab
- [ ] Mobile responsive design works
- [ ] Animations and transitions are smooth
- [ ] UTC clock updates every second
- [ ] Live feed ticker rotates messages

---

## Troubleshooting

### Build Fails

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```

2. Verify Node.js version (requires Node 18+)

### Blank Page After Deployment

1. Check browser console for errors
2. Verify base path in `vite.config.ts` matches deployment URL
3. Ensure `dist` directory contains `index.html` and assets

### 404 on Refresh (SPA Routing Issue)

Since this is a single-page app with anchor links (not routing), this shouldn't be an issue. If it occurs:

**Vercel**: Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify**: Create `public/_redirects`:
```
/*    /index.html   200
```

**Cloudflare Pages**: Automatically handles SPA routing

---

## Performance Optimization

The build is already optimized, but for additional improvements:

1. Enable compression on your hosting platform (usually automatic)
2. Configure caching headers
3. Use a CDN (Vercel, Netlify, and Cloudflare provide this automatically)

---

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Cloudflare: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
