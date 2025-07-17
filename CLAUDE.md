# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React 19, TypeScript, and Vite. The site features a modern design with dark mode theme and includes a comprehensive developer tools section with file converters and utilities.

## Development Commands

```bash
# Development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **React 19** with TypeScript
- **Vite 7** for build tooling with HMR
- **Tailwind CSS v3** with custom design system
- **Framer Motion** for animations
- **Zustand** for state management
- **Lucide React** for icons

### Project Structure
```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with routing
│   ├── Hero.tsx        # Landing section
│   ├── Tools.tsx       # Tools preview section on homepage
│   └── tools/          # Individual tool pages
│       ├── ToolsIndex.tsx     # Main tools listing page
│       ├── ExcelToJson.tsx    # Excel/CSV to JSON converter
│       ├── JsonToExcel.tsx    # JSON to CSV converter
│       ├── TimestampToUtc.tsx # Unix timestamp to UTC converter
│       ├── UtcToTimestamp.tsx # UTC to Unix timestamp converter
│       ├── StringConverter.tsx # String case converter
│       └── shared/            # Shared tool components
│           ├── ToolLayout.tsx    # Consistent tool page layout
│           ├── FileDropZone.tsx  # Drag & drop file upload
│           └── Notification.tsx  # Toast notifications
├── hooks/              # Custom React hooks
│   ├── useScrollSpy.ts      # Navigation scroll tracking
│   ├── useNotification.ts   # Toast notification management
│   ├── useFileUtils.ts      # File download and clipboard utilities
│   └── useDebouncedInput.ts # Debounced input handling
├── stores/             # Zustand state stores
│   ├── navigation.ts   # Navigation state
│   └── theme.ts        # Theme management
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── assets/             # Static assets
```

### Key Components

**Tools System (Modular Architecture)**
- **Main Tools Preview (`src/components/Tools.tsx`)** - Shows featured tools on homepage with links to full tools
- **Tools Index (`src/components/tools/ToolsIndex.tsx`)** - Main tools page at `/tools` with all available tools
- **Individual Tool Pages** - Each tool has its own route and component:
  - `/tools/excel-to-json` - Excel/CSV to JSON converter
  - `/tools/json-to-excel` - JSON to CSV converter  
  - `/tools/timestamp-to-utc` - Unix timestamp to UTC converter
  - `/tools/utc-to-timestamp` - UTC to Unix timestamp converter
  - `/tools/string-converter` - String case converter (upper, lower, title, camel, pascal, snake, kebab)

**Shared Components (`src/components/tools/shared/`)**
- **ToolLayout** - Consistent layout with breadcrumbs, back button, and tool header
- **FileDropZone** - Reusable drag & drop file upload component
- **Notification** - Toast notification system

**Custom Hooks (`src/hooks/`)**
- **useNotification** - Toast notification management
- **useFileUtils** - File download and clipboard utilities
- **useDebouncedInput** - Debounced input handling (300ms delay) to prevent UI flickering

**Navigation System**
- Uses React Router for client-side routing
- Header component handles both scroll navigation (on homepage) and route navigation (to tools)
- Uses Zustand store for navigation state management
- Implements scroll spy functionality with Intersection Observer
- Tracks active section for navigation highlighting

**Theme System**
- Dark mode by default (set in `App.tsx`)
- Uses Tailwind CSS with custom CSS variables defined in `src/index.css`
- HSL color system for consistent theming

### State Management Patterns

**Zustand Stores**
- Navigation state: menu open/close, active section tracking
- Theme state: dark/light mode management
- Simple, minimal state management without Redux complexity

**Component State**
- Tools component uses complex local state for converter functionality
- Debounced inputs with separate display and processing state
- Loading states for async operations

### Styling Architecture

**Tailwind CSS Configuration**
- Custom color palette using CSS variables
- Extended with Geist fonts (primary and monospace)
- Custom animations and keyframes
- Responsive design with mobile-first approach

**CSS Variables System**
- Defined in `src/index.css` for light/dark themes
- All colors use HSL values for better manipulation
- Consistent spacing and typography scales

### File Processing Features

**Converter Functions**
- Excel/CSV to JSON: Handles different separators (comma, tab, semicolon)
- JSON to CSV: Properly escapes commas and quotes
- Timestamp conversions: Unix timestamp ↔ ISO UTC strings
- String case transformations: Multiple case styles

**File Upload System**
- Drag & drop interface with visual feedback
- File type validation
- Auto-conversion on successful upload
- Progress indicators during processing

### Performance Optimizations

**Build Configuration**
- Manual chunk splitting for vendor, animations, and utils
- Optimized dependencies for faster loading
- Source maps disabled for production builds

**Component Optimizations**
- useCallback hooks for event handlers
- Debounced input handlers to prevent excessive re-renders
- Optimized state updates to minimize component re-renders

## Development Notes

### Code Patterns
- Functional components with hooks
- TypeScript interfaces for type safety
- Event handlers use preventDefault() to avoid scroll issues
- Debounced inputs prevent flickering during typing

### Styling Conventions
- Tailwind utility classes for styling
- Custom CSS classes defined in `src/index.css`
- Consistent spacing with Tailwind's spacing scale
- Glass morphism effects with backdrop-blur

### Animation Patterns
- Framer Motion for scroll-triggered animations
- Custom Tailwind animations for loading states
- Staggered animations for component reveals

### File Structure Conventions
- Components are single-purpose and focused
- Hooks are extracted for reusable logic
- Types are centralized in `src/types/`
- Utils contain pure functions without side effects

## Key Implementation Details

### Debounced Input System
The Tools component implements a sophisticated debounced input system:
- Immediate UI updates with display state variables
- 300ms debounced state updates for processing
- Prevents UI flickering during rapid typing
- Uses refs to manage timeout clearing

### File Upload Workflow
1. User drags/drops or selects file
2. File validation based on type
3. File content reading with FileReader API
4. Auto-conversion triggers on successful upload
5. Progress indication during processing
6. Download button enables when conversion completes

### State Management Flow
Navigation state flows through:
1. ScrollSpy hook observes section intersections
2. Updates Zustand navigation store
3. Header component reflects active section
4. Smooth scrolling between sections