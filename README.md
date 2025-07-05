# Vu Le - Developer Portfolio

A modern, responsive developer portfolio website showcasing expertise in Full Stack Development and Smart Contract Engineering. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live portfolio: [Portfolio Website](https://vule.dev)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Components Overview](#components-overview)
- [Customization](#customization)
- [Performance](#performance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Core Features
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Dark Theme** - Gray and black color scheme with blue accents
- **Interactive Animations** - Framer Motion powered micro-interactions
- **SEO Optimized** - Proper meta tags and semantic HTML structure
- **Accessibility** - ARIA labels, focus states, and keyboard navigation

### Sections
- **Hero Section** - Profile introduction with social links and tech highlights
- **About Section** - Professional background and expertise areas
- **Skills Section** - Categorized technical skills with progress indicators
- **Projects Section** - Portfolio showcase with filtering capabilities
- **Contact Section** - Contact form and multiple communication channels

### Technical Features
- **TypeScript** - Type-safe development
- **Component-based Architecture** - Modular and reusable components
- **Animation System** - Consistent animations with Framer Motion
- **Form Handling** - Contact form with validation
- **Code Documentation** - Comprehensive comments and JSDoc

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation and gesture library
- **Lucide React** - Beautiful, customizable icons

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── images/            # Profile images and assets
│   └── vite.svg          # Vite logo
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── Hero.tsx      # Hero section component
│   │   ├── About.tsx     # About section component
│   │   ├── Skills.tsx    # Skills section component
│   │   ├── Projects.tsx  # Projects section component
│   │   ├── Contact.tsx   # Contact section component
│   │   ├── Header.tsx    # Navigation header
│   │   └── Footer.tsx    # Footer component
│   ├── assets/           # Assets and resources
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── App.css          # Global styles
│   └── index.css        # Tailwind imports and custom styles
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vulh1209/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 🧩 Components Overview

### Hero Component (`src/components/Hero.tsx`)
- **Purpose**: Landing section with profile introduction
- **Features**: 
  - Animated profile image
  - Gradient text effects
  - Social media links
  - Tech stack highlights
  - Call-to-action buttons

### About Component (`src/components/About.tsx`)
- **Purpose**: Professional background and expertise
- **Features**:
  - Detailed professional description
  - Highlight cards with expertise areas
  - Technology stack grid
  - Interactive hover effects

### Skills Component (`src/components/Skills.tsx`)
- **Purpose**: Technical skills showcase
- **Features**:
  - 6 categorized skill sections
  - Animated progress bars
  - Skill level indicators
  - Expertise area summaries

### Projects Component (`src/components/Projects.tsx`)
- **Purpose**: Portfolio project showcase
- **Features**:
  - Category-based filtering
  - Interactive project cards
  - Technology tags
  - External links to demos/repos

### Contact Component (`src/components/Contact.tsx`)
- **Purpose**: Contact information and form
- **Features**:
  - Contact form with validation
  - Multiple contact methods
  - Expertise highlights
  - Call-to-action sections

## 🎨 Customization

### Personal Information
Update personal details in the following files:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Professional background
- `src/components/Contact.tsx` - Contact information

### Skills & Technologies
Modify skill categories and levels in:
- `src/components/Skills.tsx` - Update `skillCategories` array

### Projects
Add or modify projects in:
- `src/components/Projects.tsx` - Update `projects` array

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Fonts**: Update font imports in `src/index.css`
- **Animations**: Customize in individual component files

### Assets
- Replace profile image in `public/images/avatar.png`
- Add resume PDF as `public/resume.pdf`

## ⚡ Performance

### Optimization Features
- **Code Splitting** - Automatic code splitting with Vite
- **Image Optimization** - Optimized image loading
- **CSS Optimization** - Tailwind CSS purging
- **Bundle Analysis** - Vite bundle analyzer
- **Lazy Loading** - Components loaded on demand

### Performance Metrics
- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

### Custom Server
1. Build: `npm run build`
2. Serve `dist` folder with any static server
3. Configure server for SPA routing

## 🔧 Development

### Code Style
- **ESLint** - Code linting rules
- **Prettier** - Code formatting (optional)
- **TypeScript** - Type checking
- **Conventional Commits** - Commit message format

### Component Guidelines
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Add comprehensive JSDoc comments
- Follow consistent naming conventions
- Implement accessibility features

### Animation Guidelines
- Use Framer Motion for complex animations
- Implement consistent easing curves
- Respect user motion preferences
- Optimize for performance

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

**Vu Le** - Full Stack & Smart Contract Developer

- **Email**: [lehoangvu1209@gmail.com](mailto:lehoangvu1209@gmail.com)
- **GitHub**: [vulh1209](https://github.com/vulh1209)
- **LinkedIn**: [linkedin.com/in/vule](https://linkedin.com/in/vule)

---

## 🙏 Acknowledgments

- **Tailwind CSS** - For the amazing utility-first CSS framework
- **Framer Motion** - For smooth and beautiful animations
- **Lucide React** - For the beautiful icon set
- **Vite** - For the fast and efficient build tool
- **React Community** - For the excellent ecosystem and resources

---

**Built with ❤️ by Vu Le**
# profile
