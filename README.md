# Analytics Dashboard 📊

A modern, responsive analytics dashboard built with **Next.js 15**, **shadcn/ui**, **Tailwind CSS**, and **Framer Motion**. Features beautiful animations, dark mode support, and comprehensive data visualization.

![Dashboard Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## ✨ Features

- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- 🌙 **Dark Mode** - System-aware theme switching with smooth transitions
- 📱 **Responsive Design** - Mobile-first approach with flexible layouts
- ⚡ **Fast Development** - Turbopack for lightning-fast hot reload
- 🎭 **Smooth Animations** - Framer Motion with orchestrated page transitions
- 📊 **Data Visualization** - Interactive charts with Recharts integration
- 🔍 **Advanced Filtering** - Real-time data filtering and search
- 📋 **Data Tables** - Sortable, paginated tables with status indicators
- 🎯 **Type Safety** - Full TypeScript support with strict typing
- 🍞 **Toast Notifications** - Beautiful toast messages with Sonner

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd demo-dashboard-001
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main dashboard page
│   └── globals.css        # Global styles and CSS variables
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── dashboard-header.tsx
│   ├── metrics-cards.tsx
│   ├── charts-section.tsx
│   ├── data-table.tsx
│   ├── filters-form.tsx
│   ├── mode-toggle.tsx
│   └── theme-provider.tsx
├── data/                 # Data layer
│   └── sample-data.ts    # Mock data generation
├── lib/                  # Utilities
│   └── utils.ts          # Tailwind class merging
└── types.ts              # TypeScript definitions
```

## 🛠️ Built With

### Core Framework
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### UI & Styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icons

### Animations & Interactions
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme switching

### Data & Forms
- **[Recharts](https://recharts.org/)** - Composable charting library
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Development Tools
- **[Turbopack](https://turbo.build/pack)** - Fast bundler for development
- **[ESLint](https://eslint.org/)** - Code linting
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## 🎨 Design System

### Theme Configuration
The project uses a sophisticated theming system:

- **CSS Variables** for semantic color tokens
- **Automatic dark mode** detection
- **Smooth transitions** between themes
- **Consistent spacing** and typography scales

### Animation Patterns
```typescript
// Staggered animations with progressive delays
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.1 }}
```

### Component Architecture
- **Modular design** - Each component handles a specific dashboard section
- **Prop interfaces** - TypeScript definitions for all component props
- **Responsive patterns** - Mobile-first with breakpoint-specific layouts

## 📊 Data Flow

```mermaid
graph LR
    A[FilterValues] --> B[generateSampleData()]
    B --> C[DashboardData]
    C --> D[Components]
    D --> E[UI Rendering]
```

1. **Filter State** - User interactions update filter values
2. **Data Generation** - Mock data generated based on filters
3. **Component Updates** - React re-renders with new data
4. **Animations** - Framer Motion orchestrates smooth transitions

## 🚀 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Component Management
pnpm dlx shadcn@latest add [component]  # Add shadcn/ui components
```

## 🎯 Key Features Explained

### Metrics Cards
- **Real-time updates** with animated counters
- **Trend indicators** with color-coded changes
- **Icon integration** using Lucide React

### Interactive Charts
- **Multiple chart types** - Area, Bar, Pie, Line charts
- **Responsive design** - Adapts to container size
- **Tooltip integration** - Detailed data on hover

### Data Table
- **Advanced filtering** by status, category, date range
- **Sorting capabilities** for all columns
- **Pagination controls** with customizable page sizes
- **Search functionality** across all fields

### Theme System
- **System preference detection**
- **Manual theme switching** with dropdown
- **Persistent theme storage**
- **Smooth transitions** without flash

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing component library
- [Vercel](https://vercel.com) for Next.js and deployment platform
- [Tailwind Labs](https://tailwindlabs.com) for Tailwind CSS
- [Framer](https://www.framer.com) for the motion library

---

<div align="center">
  <p>Built with ❤️ by <a href="https://pierre-drouillet-dev-ai.vercel.app/">Pierre</a>, your friendly AI developer.</p>
</div>
