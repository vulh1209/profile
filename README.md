# Developer Portfolio Website

A modern, responsive portfolio website built with **Vite**, **React**, **TypeScript**, and **TailwindCSS**. Features smooth animations, dark theme, and mobile-first design.

## 🚀 Features

- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎨 **Modern Design** - Clean, professional UI with dark theme
- 📱 **Fully Responsive** - Works perfectly on all devices
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🎯 **TypeScript** - Full type safety
- 🎪 **Interactive Components** - Engaging user experience
- 📧 **Contact Form** - Functional contact form
- 🔧 **Easy Customization** - Well-structured and documented code

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
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

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your information:

**`src/components/Hero.tsx`**
- Replace "Your Name" with your actual name
- Update the description and title
- Update social media links (GitHub, LinkedIn, Email)

**`src/components/About.tsx`**
- Modify the about section with your story
- Update experience years and description

**`src/components/Contact.tsx`**
- Update contact information (email, phone, location)

**`index.html`**
- Update title, meta description, and social media tags

### 2. Skills & Technologies

**`src/components/Skills.tsx`**
- Modify the `skillCategories` array
- Add/remove skills and adjust proficiency levels
- Update categories as needed

### 3. Projects Showcase

**`src/components/Projects.tsx`**
- Replace project data in the `projects` array
- Update project images, descriptions, and links
- Add your GitHub username in project links

### 4. Styling & Colors

**`tailwind.config.js`**
- Modify the primary color scheme
- Add custom colors or fonts
- Extend theme as needed

**`src/index.css`**
- Update global styles
- Modify custom CSS classes

### 5. Profile Image

Replace the emoji in `src/components/Hero.tsx` with your actual image:

```tsx
// Replace this:
<span className="text-4xl md:text-5xl">👨‍💻</span>

// With this:
<img 
  src="/path-to-your-image.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-full"
/>
```

## 📱 Sections Overview

1. **Header** - Navigation with smooth scroll
2. **Hero** - Introduction with profile image and social links
3. **About** - Personal story and highlights
4. **Skills** - Technical skills with animated progress bars
5. **Projects** - Featured projects with links and technologies
6. **Contact** - Contact form and information
7. **Footer** - Simple footer with copyright

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy Options

1. **Vercel** (Recommended)
   - Connect your GitHub repository
   - Auto-deploys on every push to main branch

2. **Netlify**
   - Drag and drop the `dist` folder
   - Or connect via Git

3. **GitHub Pages**
   - Use GitHub Actions for automatic deployment

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to submit issues and pull requests to improve this template.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding! 🚀**

Don't forget to ⭐ star this repository if you found it helpful!
