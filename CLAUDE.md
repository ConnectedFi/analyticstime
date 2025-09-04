# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a TanStack Start application built with React, TypeScript, and TailwindCSS. The project is an analytics dashboard for UPL (United Phosphorus Limited) that displays sales data, customer insights, and product analytics.

## Development Commands

### Running the Application
```bash
bun install          # Install dependencies
bun run dev          # Start dev server on port 3000
bun run build        # Build for production
bun run start        # Start production server
```

### Code Quality
```bash
bun run lint         # Run Biome linter
bun run format       # Format code with Biome
bun run check        # Run all Biome checks
bun run test         # Run tests with Vitest
```

## Architecture

### Technology Stack
- **Framework**: TanStack Start with React 19
- **Routing**: TanStack Router (file-based routing in `src/routes/`)
- **State Management**: TanStack Query for server state
- **Styling**: TailwindCSS v4 with Vite plugin
- **Bundler**: Vite with TanStack Start plugin
- **Linting/Formatting**: Biome (tabs for indentation, double quotes)
- **Testing**: Vitest

### Project Structure
- `/src/routes/` - File-based routing with TanStack Router
  - `__root.tsx` - Root layout with TanStack DevTools
  - `index.tsx` - Home page with UPL branding
  - `products.tsx` - Products dashboard page
- `/src/components/` - React components
  - UI components in `/ui/` subdirectory (shadcn/ui pattern)
  - Business components (charts, tables, modals)
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions
- `/src/types/` - TypeScript type definitions

### Key Configuration
- **TypeScript**: Strict mode enabled, path alias `@/*` maps to `./src/*`
- **Biome**: Tab indentation, double quotes, ignores `src/routeTree.gen.ts`
- **Vite**: Custom plugins for TanStack Start, React, and TailwindCSS

### Data Flow
The application uses TanStack Query for data fetching with a QueryClient configured in the root router context. Components access this via the router context pattern established in `__root.tsx`.

### Component Architecture
- Uses shadcn/ui component pattern with utilities in `lib/utils.ts`
- Components follow composition pattern with variants
- TailwindCSS classes managed with `clsx` and `tailwind-merge`

## Important Notes
- Routes are automatically generated in `src/routeTree.gen.ts` - do not edit
- Demo files (prefixed with `demo.`) can be safely deleted
- The application uses Bun as the JavaScript runtime
- TanStack DevTools are included for development debugging