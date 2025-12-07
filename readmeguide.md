# Xluma Analytics Dashboard - Project Guide

## 1. Project Overview
**Xluma** is a modern, high-performance **SaaS Enterprise Operating System** dashboard. It is designed to simulate a production-ready admin interface for a high-growth technology company.

Unlike generic templates, Xluma is built with a specific narrative context: managing a B2B SaaS platform's **Revenue**, **System Health**, **Enterprise Clients**, and **Engineering Roadmap**.

### Core Philosophy
-   **Aesthetics First**: Features a premium "Glassmorphism" design with "Oriton" neon accents (Cyan/Purple).
-   **Mobile-First Responsiveness**: A fully adaptive UI that works seamlessly on desktop and mobile (using React Portals for navigation).
-   **Performance**: Built on Next.js 14 with server components and optimized framer-motion animations.

---

## 2. Technology Stack
The project leverages the latest web technologies for a scalable and maintainable codebase:

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Directory, Server Components)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing for robustness)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first, responsive)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth layout transitions, 3D effects)
-   **Charts**: [Recharts](https://recharts.org/) (Data visualization for Revenue, Radar charts)
-   **Icons**: [Lucide React](https://lucide.dev/) (Consistent SVG iconography)
-   **UI Components**: Custom-built accessible components (Cards, Buttons, Badges) inspired by shadcn/ui but styled for the Xluma brand.

---

## 3. Key Features & Modules

### 📊 Dashboard Overview
The command center for the SaaS platform.
-   **Platform Usage**: Tracks Web vs Mobile vs API usage (replacing generic crypto stats).
-   **System Capabilities**: A Radar chart visualizing technical health (Uptime, Security, UX Score).
-   **Activity Feed**: Real-time updates on client interactions and system alerts.

### 👥 Customer Management
A CRM-lite module for B2B relationships.
-   **Enterprise Focus**: Profiles for decision makers (CTOs, VPs) rather than generic users.
-   **Actionable Insights**: Tracks "Next Steps" like Security Audits or Integration Reviews.

### 💼 E-Wallet & Revenue
Financial tracking for the business.
-   **Revenue vs Refunds**: Interactive charts showing financial health.
-   **Transaction History**: Detailed log of corporate expenses (AWS, Stripe, etc.).

### 🛠️ Project Management
Internal engineering roadmap tracking.
-   **Status Boards**: 3D-styled cards for tracking features like "API V2 Refactor" or "Mobile App Beta".
-   **Team Allocation**: Visual indicators of team members assigned to each initiative.

### 🎨 Theming System
A robust centralized theme engine defined in `globals.css`.
-   **Dark Mode**: The default "Oriton" theme with deep blues (`#0C121D`) and neon accents (`#00F0FF`).
-   **Light Mode**: A sophisticated "Cool Gray" professional theme.
-   **Adaptive Colors**: Text and charts automatically switch between Black/White based on the mode using CSS variables (`hsl(var(--foreground))`).

### 📱 Mobile Responsiveness
-   **Portal-Based Navigation**: The mobile sidebar renders at the document root to prevent clipping or z-index issues.
-   **Adaptive Layouts**: Complex grids (`grid-cols-12`) collapse elegantly to single columns on mobile.
-   **Touch Optimization**: Buttons and headers resize for better mobile usability.

---

## 4. Project Structure
```bash
/app                # Next.js App Router pages
  /(dashboard)      # Authenticated routes (Overview, Wallet, etc.)
  /globals.css      # Centralized theme variables
/components         # Reusable React components
  /charts           # Recharts visualizations (Radar, Area, Bar)
  /layout           # Structural components (Sidebar, Navbar, MobileNav)
  /ui               # Primitives (Button, Card, Badge)
/lib                # Utilities and Constants
  constants.ts      # Menu structures and app-wide data
  utils.ts          # Helper functions (cn for class merging)
/public             # Static assets (images, fonts)
```

## 5. Getting Started

### Prerequisites
-   Node.js 18+
-   npm or yarn

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/xluma-dashboard.git
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 6. Customization
To customize the color scheme, edit the CSS variables in `app/globals.css`. 
The `MENU_SECTIONS` in `lib/constants.ts` control the sidebar navigation structure.

---
*Created for Xluma Inc. SaaS Operations.*
