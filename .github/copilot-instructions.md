# GitHub Copilot Instructions - Analytics Dashboard

## Project Overview
This is a **Next.js 15 analytics dashboard** showcasing modern React patterns with **shadcn/ui**, **Tailwind CSS**, and **Framer Motion**. The project demonstrates a complete dashboard experience with animated components, dark mode support, and responsive design.

## Architecture Patterns

### Component Structure
- **Modular components** in `/components/` - each handles a specific dashboard section
- **UI primitives** in `/components/ui/` - shadcn/ui components with consistent theming
- **Centralized types** in `types.ts` - shared TypeScript interfaces for data flow
- **Mock data generation** in `/data/sample-data.ts` - realistic demo data with filtering

### Data Flow Pattern
```typescript
// Main page.tsx orchestrates state and data flow
FilterValues → generateSampleData() → DashboardData → Components
```

Key pattern: Use `FilterValues` interface to drive data generation, not real API calls. All data is generated client-side using `generateSampleData()`.

### Animation Philosophy
- **Framer Motion** (`motion/react`) for orchestrated animations
- **Staggered animations** with progressive delays (0.1s increments)
- **Layout animations** for responsive behavior
- Pattern: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}`

## Development Workflow

### Essential Commands
```bash
pnpm dev          # Start with Turbopack (fast refresh)
pnpm build        # Production build
pnpm lint         # ESLint with Next.js config
```

### Adding shadcn/ui Components
```bash
pnpm dlx shadcn@latest add [component-name]
```
- Always use this command instead of manual installation
- Components automatically integrate with the existing theme system
- Configuration in `components.json` uses "new-york" style

### Theme System
- **next-themes** for system/dark/light mode switching
- **CSS variables** in `globals.css` for semantic colors
- **ModeToggle component** in header provides theme switching
- Use semantic colors: `bg-background`, `text-foreground`, `border-border`

## Critical Patterns

### Responsive Design
- **Mobile-first** Tailwind classes: `md:grid-cols-2 lg:grid-cols-4`
- **Container-based** layout: `container mx-auto p-6`
- **Flexible grids** for dashboard sections

### State Management
- **Local useState** for filtering and UI state
- **useEffect** for simulated loading states
- **Controlled components** for forms using react-hook-form + zod

### Type Safety
- **Strict TypeScript** with shared interfaces
- **Import pattern**: `import type { Interface } from "../types"`
- **Enum-like unions**: `"active" | "inactive" | "pending"`

## Key Files & Directories

### Core Application
- `app/page.tsx` - Main dashboard orchestration with state management
- `app/layout.tsx` - Root layout with theme provider and metadata
- `types.ts` - Centralized TypeScript definitions
- `data/sample-data.ts` - Mock data generation logic

### Component Categories
- `components/dashboard-header.tsx` - Header with theme toggle
- `components/metrics-cards.tsx` - Animated metric cards with trend indicators
- `components/charts-section.tsx` - Recharts integration with responsive charts
- `components/data-table.tsx` - Sortable/filterable table with pagination
- `components/filters-form.tsx` - Form controls with validation

### Styling & Configuration
- `lib/utils.ts` - Tailwind class merging utility (`cn()`)
- `components.json` - shadcn/ui configuration
- `tailwind.config.js` - Extended Tailwind setup (auto-generated)

## Integration Points

### External Dependencies
- **Recharts** for data visualization - use `ChartContainer` wrapper from shadcn/ui
- **Lucide React** for consistent iconography
- **react-hook-form + zod** for form validation
- **Framer Motion** for animations - import from `motion/react`

### Development Tools
- **Turbopack** enabled for fast refresh
- **ESLint** with Next.js and TypeScript rules
- **pnpm** as package manager

## Anti-Patterns to Avoid
- Don't use `react` import from `framer-motion` - use `motion/react`
- Don't manually install UI components - always use shadcn CLI
- Don't hardcode animations - follow the staggered delay pattern
- Don't bypass the `cn()` utility for conditional classes
