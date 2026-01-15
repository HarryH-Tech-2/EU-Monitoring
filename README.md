# MONITORING THE SITUATION

A satirical single-page web application parodying bureaucratic monitoring culture. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Military Dashboard Design**: Dark tactical theme with operational status displays
- **Overview Panel**: Real-time status tiles, threat levels, and live feed ticker
- **Statement Generator**: Create realistic bureaucratic statements with customizable parameters
- **Concern Index Dashboard**: Visual metrics with charts and monitoring intensity indicators
- **Committees & Working Groups**: Searchable and filterable committee management interface
- **About Section**: Mission statement and disclaimers
- **Support Integration**: Buy Me a Coffee integration for operational funding

## Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Architecture**: Single-page application (no routing)

## Installation

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

After building, preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. Install Netlify CLI (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

Or drag and drop the `dist` folder to Netlify's web interface.

### Deploy to Cloudflare Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Connect your repository to Cloudflare Pages with these settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/`

## Project Structure

```
EU-Monitoring/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── TopBar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   ├── Overview.tsx
│   │   ├── StatementGenerator.tsx
│   │   ├── ConcernDashboard.tsx
│   │   ├── Committees.tsx
│   │   ├── About.tsx
│   │   └── Support.tsx
│   ├── lib/            # Utilities and data
│   │   ├── random.ts   # Deterministic random number generation
│   │   ├── data.ts     # Static data and templates
│   │   └── generator.ts # Statement generation logic
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # This file
```

## Features Overview

### Overview Panel
- Dynamic status tiles showing threat level, concern index, active committees, and document count
- Rotating live feed ticker with satirical operational updates
- All values are deterministically random per session (stable on refresh)

### Statement Generator
- Topic selection dropdown
- Severity slider (1-5)
- Optional toggles for stakeholder consultation, timeline, and joint statement
- Generates realistic bureaucratic statements
- Copy to clipboard functionality
- "CLASSIFIED: PUBLIC RELEASE" stamp

### Concern Dashboard
- Large concern index display (0-100)
- Monitoring intensity indicator (LOW/ELEVATED/HIGH/MAXIMUM)
- Bar chart showing concern by directorate
- Sparkline chart for situation volatility
- Status badges

### Committees Panel
- 20 procedurally generated committees
- Search functionality
- Status filter dropdown
- Progress bars (stuck at 92-99%)
- Meeting cadence and next meeting date

### About Section
- Mission statement
- Clear parody disclaimer
- Monitoring methodology
- Technical specifications

### Support Section
- Buy Me a Coffee integration
- Fake budget dashboard
- Expenditure breakdown
- Funding priorities

## Customization

### Colors
Edit `tailwind.config.js` to customize the ops color scheme:

```js
colors: {
  ops: {
    dark: '#0a0e14',
    panel: '#0f1419',
    border: '#1a2530',
    green: '#00ff88',
    amber: '#ffb347',
    red: '#ff4444',
    blue: '#00d4ff',
  }
}
```

### Content
- Edit `src/lib/data.ts` to modify live feed messages, committee templates, and directorates
- Edit `src/lib/generator.ts` to customize statement generation logic

## License

This is a parody project for entertainment purposes. No affiliation with any governmental or intergovernmental institution is implied or intended.

## Support

Support the monitoring operations: [Buy Me a Coffee](https://buymeacoffee.com/harryhh)
