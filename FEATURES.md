# Features & Design Specifications

## Visual Design Theme: Military Operations Dashboard

The entire application is styled as a tactical military command center with:
- Dark theme (very dark background #0a0e14)
- Monospace font for headings
- Grid-based tactical layout
- Thin borders with subtle green glows
- Terminal/command center aesthetic
- Status LEDs and indicators
- Scanning line animations

---

## Component Breakdown

### 1. Top Operations Bar (TopBar.tsx)

**Fixed header spanning full width**

Left section:
- Activity icon (pulsing green)
- "MONITORING THE SITUATION" in ops green

Center section (desktop only):
- Status badge with LED
- "OPERATIONAL STATUS: ACTIVE" text
- Green border box

Right section:
- Live UTC clock updating every second
- Format: "2026-01-14 15:30:45 UTC"
- Small monospace font

Bottom:
- Animated scanning line (green gradient pulse)

---

### 2. Sidebar Navigation (Sidebar.tsx)

**Fixed left sidebar (desktop) / Mobile menu (mobile)**

Navigation items (with icons):
1. 🏠 Overview
2. 📄 Statement Gen
3. 📊 Concern Index
4. 👥 Committees
5. ℹ️ About
6. ☕ Support

Bottom element:
- Animated radar sweep visualization
- 3 concentric circles
- Rotating sweep line
- "RADAR SWEEP" label

Mobile:
- Collapsible hamburger menu
- Floating green button (bottom right)
- Overlay when open

---

### 3. Overview Panel (Overview.tsx)

**First section - Hero introduction**

Header:
- Large "MONITORING THE SITUATION" title
- Subtitle: "A public service dedicated to monitoring. Not resolving."

Status Tiles Grid (4 tiles):
1. **Threat Level**
   - AlertTriangle icon
   - Value: MINIMAL/LOW/MODERATE/ELEVATED/CRITICAL
   - Color-coded by level
   - Blinking LED indicator

2. **Concern Index™**
   - BarChart3 icon
   - Value: 0-100
   - Color: green/amber/red based on value
   - Blinking LED

3. **Active Committees**
   - Users icon
   - Value: 12-48 (random)
   - Blue color
   - Blinking LED

4. **Documents Produced**
   - FileText icon
   - Value: 120-900 (random)
   - Gray color
   - Blinking LED

Live Feed Ticker:
- Red pulsing LED
- "LIVE FEED - OPERATIONAL UPDATES" label
- Rotating messages every 4 seconds
- Fade in/out animations
- 16 different satirical messages

---

### 4. Statement Generator (StatementGenerator.tsx)

**Interactive bureaucratic statement builder**

Left Column - Controls:

1. **Topic Dropdown**
   - 10 topics (AI, fisheries, migration, cheese, bananas, cybersecurity, etc.)
   - Styled dark dropdown

2. **Severity Slider**
   - Range: 1-5
   - Labels: MILD → MODERATE → GRAVE
   - Green accent color

3. **Toggle Checkboxes** (3):
   - Include stakeholder consultation paragraph
   - Include implementation timeline paragraph
   - Include joint statement with partners
   - Hover effects on labels

4. **Action Buttons**:
   - "GENERATE STATEMENT" (primary, green)
   - "COPY" button (appears after generation)
   - Loading spinner during generation

Right Column - Output:

- Dark panel with border
- "CLASSIFIED: PUBLIC RELEASE" stamp (top right)
- Generated statement text
- Multiple paragraphs with spacing
- Fade-in animation
- Copy-to-clipboard functionality

Statement Logic:
- Dynamic based on topic, severity, and toggles
- Realistic EU-style bureaucratic language
- 3-5 paragraphs depending on options
- 900ms generation delay for realism

---

### 5. Concern Index Dashboard (ConcernDashboard.tsx)

**Metrics visualization panel**

Top Row (3 cards):

1. **Concern Index™**
   - Large number display (0-100)
   - Progress bar visualization
   - Activity icon
   - Animated fill

2. **Monitoring Intensity**
   - Text: LOW/ELEVATED/HIGH/MAXIMUM
   - Color-coded by level
   - Pulsing status LED
   - TrendingUp icon

3. **Last Updated**
   - Time in minutes (5-47 random)
   - Clock icon
   - "X min ago" format

Middle Row (2 charts):

1. **Concern by Directorate** (Bar Chart)
   - 6 directorates (DG ADMIN, DG MONITOR, etc.)
   - Horizontal bars (0-100%)
   - Animated on load
   - Different opacity by value

2. **Situation Volatility** (Sparkline)
   - 12 vertical bars
   - Represents hourly data
   - Green color with varying opacity
   - "12H AGO" to "NOW" labels

Bottom Row:
- 4 status badges:
  - ✅ Monitoring (green)
  - 🔁 Monitoring intensifies (amber)
  - 📌 Pending review (blue)
  - 📄 Drafting communiqué (gray)

---

### 6. Committees & Working Groups (Committees.tsx)

**Committee management interface**

Filters (2 columns):
1. **Search Input**
   - Search icon
   - "Search committees..." placeholder
   - Real-time filtering

2. **Status Filter Dropdown**
   - Filter icon
   - Options: All / 6 status types
   - Updates results instantly

Results Counter:
- "SHOWING X OF 20 COMMITTEES"
- Gray monospace text

Committee Cards Grid (3 columns):
Each card shows:
- Committee name (2 lines max)
- Status badge (color-coded):
  - In consultation (blue)
  - Awaiting translation (amber)
  - Under review (green)
  - Deferred (gray)
  - Pending approval (amber)
  - In drafting phase (blue)
- Cadence: Weekly/Bi-weekly/Monthly/Quarterly
- Next meeting date (YYYY-MM-DD)
- Progress bar (stuck at 92-99%)
- Hover effect (green border)

20 Committees Generated:
- Combinations of prefixes + subjects
- Examples:
  - "Subcommittee on Temporal Stakeholder Alignment"
  - "Working Group for Interim Monitoring Protocols"
  - "Committee for Cross-Border Cheese Labeling"
  - "Task Force on Strategic Banana Resilience"

---

### 7. About Section (About.tsx)

**Information and disclaimers**

4 Information Cards:

1. **Mission Statement** (Shield icon, green)
   - Satirical mission description
   - Formal bureaucratic tone

2. **Operational Disclaimer** (AlertCircle icon, amber)
   - **Bold: "This site is parody."**
   - Clear disclaimer about fictional content
   - No affiliation statement
   - No targeting of individuals

3. **Monitoring Methodology**
   - 3-phase process (identify → monitor → continue)
   - Grid layout

4. **Technical Specifications**
   - Framework: React + Vite
   - Language: TypeScript
   - Styling: Tailwind CSS
   - Architecture: Single-page app

---

### 8. Support Section (Support.tsx)

**Funding and Buy Me a Coffee integration**

Left Column:

1. **Funding Priorities Card**
   - List of 4 priorities
   - Bullet points with green arrows
   - Includes "Coffee for monitoring personnel"

2. **Support CTA Card** (large, green border)
   - Large coffee icon
   - "SUPPORT THE MISSION" heading
   - Description text
   - **Large "BUY ME A COFFEE" button**
   - Links to: https://buymeacoffee.com/harryhh
   - Opens in new tab
   - "External funding portal" note below

Right Column:

1. **Current Fiscal Period Card**
   - Budget Allocated (€500-2000K)
   - Budget Spent (with progress bar)
   - Budget Remaining
   - DollarSign and TrendingUp icons

2. **Expenditure Breakdown Card**
   - 5 line items with percentages:
     - Monitoring Operations (42%)
     - Committee Coordination (28%)
     - Documentation Services (18%)
     - Stakeholder Consultations (9%)
     - Miscellaneous Oversight (3%)

---

### 9. Footer (Footer.tsx)

**Bottom footer across full width**

Content:
- "Co-funded by monitoring. Implemented by monitoring. Audited by monitoring."
- Metadata: "OPERATIONAL SINCE 2024 • MONITORING STATUS: PERPETUAL"
- Link: "Support Operations" (to Buy Me a Coffee)
- Gray text on dark panel background

---

## Animation & Interaction Details

### Loading States
- Statement generation: spinner + "GENERATING..." text
- Charts: staggered fade-in with delays
- Progress bars: animated fill from 0 to value

### Hover Effects
- Navigation items: green border + text color change
- Committee cards: green border glow
- Buttons: opacity change + slight transform
- Links: underline

### Continuous Animations
- UTC clock: updates every 1000ms
- Live feed: rotates every 4000ms
- Radar sweep: 3s rotation
- Status LEDs: pulse/blink
- Scanning line: pulse effect

### Page Load
- Components stagger in with 0.1s delays
- Fade in from bottom (y: 20)
- Opacity 0 → 1 transition

---

## Responsive Breakpoints

### Desktop (lg: 1024px+)
- Sidebar visible
- Grid: 3-column committees
- Grid: 2-column most sections
- Full top bar with all elements

### Tablet (md: 768px - 1023px)
- Sidebar hidden (mobile menu)
- Grid: 2-column committees
- Grid: 2-column sections
- Top bar simplified

### Mobile (< 768px)
- Sidebar: bottom floating menu
- Grid: 1-column all sections
- Top bar: minimal (name + clock only)
- Larger touch targets

---

## Accessibility Features

### Keyboard Navigation
- All interactive elements focusable
- Focus visible styles (outline)
- Tab order logical
- Anchor links work with Enter key

### ARIA Labels
- "Toggle navigation menu" on hamburger
- "Select situation topic" on dropdown
- "Adjust concern severity level" on slider
- "Search committees" on search input
- "Filter by status" on filter dropdown
- "Copy statement to clipboard" on copy button
- "Generate statement" on generate button

### Screen Reader Support
- Semantic HTML (nav, section, header, footer)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on icons (decorative marked)
- ARIA live regions for dynamic content

### Color Contrast
- All text meets WCAG AA (4.5:1 minimum)
- Interactive elements have clear states
- Color not sole indicator (uses icons + text)

---

## Performance Optimizations

### Deterministic Randomness
- Single seed per session
- No random recalculation on re-render
- Stable values across component updates

### Efficient Rendering
- useMemo for filtered/computed lists
- Minimal state updates
- No unnecessary re-renders
- Debounced search input (built-in)

### Asset Optimization
- No large images (SVG icons only)
- Minimal external fonts
- Tree-shaken icon imports
- CSS purged by Tailwind

### Bundle Size
- Code splitting not needed (single page)
- Lazy loading not needed (small app)
- All optimizations handled by Vite

---

## Technical Requirements Met

✅ Single-page application (ONE route)
✅ React + Vite + TypeScript
✅ Tailwind CSS for styling
✅ No backend (100% client-side)
✅ Buy Me a Coffee button with correct link
✅ Opens in new tab with rel="noopener noreferrer"
✅ Military dashboard aesthetic
✅ Dark theme
✅ Grid-based layout
✅ Monospace headings
✅ Terminal feel with panels
✅ Status LEDs and badges
✅ Icons (lucide-react)
✅ Animations (framer-motion)
✅ Top bar with site name, status, UTC clock
✅ Radar sweep visual
✅ Charts (bar graph, sparkline)
✅ All 6 sections implemented
✅ Sticky top bar
✅ Left sidebar navigation
✅ Responsive mobile layout
✅ Satirical but safe content
✅ No hate, harassment, or slurs
✅ Clever and dry tone
✅ Production-ready code quality

---

## Content Tone Guidelines

### ✅ Good Examples
- "Stakeholder alignment pending review"
- "Draft framework for interim framework initiated"
- "Working Group for Interim Monitoring Protocols"
- "We remain committed to ensuring appropriate levels of observation"

### ❌ Avoid
- Targeting specific real people
- Hateful content
- Protected group mockery
- Political partisanship
- Genuine harm or harassment

### Philosophy
The humor targets:
- Bureaucratic processes (✓)
- Monitoring culture (✓)
- Administrative complexity (✓)
- Circular logic (✓)

NOT:
- Individuals (✗)
- Protected groups (✗)
- Specific institutions by name (✗)
- Real policy failures (✗)

---

**Design Status**: Complete ✅
**Code Status**: Production Ready ✅
**Documentation**: Comprehensive ✅
**Deployment**: Ready ✅
