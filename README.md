# 🚀 VuLe - Personal Portfolio & Developer Tools

A modern, responsive portfolio website built with React 19, TypeScript, and Vite, featuring a comprehensive suite of developer tools and utilities.

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-06B6D4.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

### 🎨 **Modern Design**
- Dark mode by default with elegant UI
- Responsive design optimized for all devices
- Smooth animations powered by Framer Motion
- Custom design system with HSL color variables
- Glass morphism effects with backdrop blur

### 🛠️ **Developer Tools Suite**
- **Excel/CSV to JSON Converter** - Convert spreadsheet data to JSON format
- **JSON to CSV Converter** - Transform JSON arrays to CSV files
- **Timestamp Utilities** - Convert between Unix timestamps and UTC dates
- **String Case Converter** - Transform text between different case formats
- **Drag & Drop File Upload** - Intuitive file processing workflow
- **Auto-conversion** - Automatic processing on file upload
- **Download Results** - One-click download of converted files

### 🏗️ **Architecture**
- **Modular Component Structure** - Each tool is a separate route/page
- **Shared Components** - Reusable UI components for consistency
- **Custom Hooks** - Centralized logic for notifications, file handling, and debounced inputs
- **React Router** - Client-side routing for seamless navigation
- **Zustand State Management** - Lightweight state management solution

### ⚡ **Performance**
- **Debounced Inputs** - Optimized input handling to prevent UI flickering
- **Code Splitting** - Optimized bundle chunks for faster loading
- **TypeScript** - Type safety and better developer experience
- **ESLint** - Code quality and consistency

## 🗂️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header with routing
│   ├── Hero.tsx        # Landing section
│   ├── Tools.tsx       # Tools preview on homepage
│   └── tools/          # Individual tool pages
│       ├── ToolsIndex.tsx     # Main tools listing
│       ├── ExcelToJson.tsx    # Excel/CSV to JSON converter
│       ├── JsonToExcel.tsx    # JSON to CSV converter
│       ├── TimestampToUtc.tsx # Unix timestamp to UTC
│       ├── UtcToTimestamp.tsx # UTC to Unix timestamp
│       ├── StringConverter.tsx # String case converter
│       └── shared/            # Shared components
│           ├── ToolLayout.tsx    # Consistent layout
│           ├── FileDropZone.tsx  # File upload component
│           └── Notification.tsx  # Toast notifications
├── hooks/              # Custom React hooks
│   ├── useScrollSpy.ts      # Navigation scroll tracking
│   ├── useNotification.ts   # Toast notifications
│   ├── useFileUtils.ts      # File utilities
│   └── useDebouncedInput.ts # Debounced input handling
├── stores/             # Zustand state stores
│   ├── navigation.ts   # Navigation state
│   └── theme.ts        # Theme management
├── types/              # TypeScript definitions
├── utils/              # Utility functions
└── assets/             # Static assets
```

## 🛣️ Routes

- **`/`** - Homepage with portfolio sections and tools preview
- **`/tools`** - Main tools page with all available utilities
- **`/tools/excel-to-json`** - Excel/CSV to JSON converter
- **`/tools/json-to-excel`** - JSON to CSV converter
- **`/tools/timestamp-to-utc`** - Unix timestamp to UTC converter
- **`/tools/utc-to-timestamp`** - UTC to Unix timestamp converter
- **`/tools/string-converter`** - String case converter

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Modern web browser with ES6+ support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vulh1209/profile.git
   cd profile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint for code quality checks
```

## 🔧 Tech Stack

### **Frontend**
- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe JavaScript
- **Vite 7** - Fast build tool with HMR
- **React Router DOM** - Client-side routing

### **Styling**
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Custom CSS Variables** - HSL color system for theming
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

### **State Management**
- **Zustand** - Lightweight state management
- **Custom Hooks** - Reusable stateful logic

### **Development**
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Autoprefixer** - CSS vendor prefixing

## 🎯 Key Features Deep Dive

### **File Processing Tools**
- **Drag & Drop Interface** - Intuitive file upload with visual feedback
- **Auto-conversion** - Automatic processing when files are uploaded
- **Format Validation** - File type checking and error handling
- **Progress Indicators** - Loading states with smooth animations
- **Download Results** - One-click download of converted files

### **User Experience**
- **Debounced Inputs** - 300ms delay to prevent UI flickering during typing
- **Toast Notifications** - Non-intrusive feedback system
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Breadcrumb Navigation** - Clear navigation hierarchy
- **Back Button** - Easy navigation between tool pages

### **Developer Experience**
- **TypeScript** - Full type safety throughout the codebase
- **Custom Hooks** - Reusable logic for common operations
- **Shared Components** - Consistent UI components
- **Modern Architecture** - Clean separation of concerns

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Vite Team** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/vulh1209">VuLe</a></p>
  <p>⭐ Star this repository if you find it useful!</p>
</div>