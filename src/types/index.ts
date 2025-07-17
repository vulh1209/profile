export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  category: 'web' | 'blockchain' | 'fullstack' | 'mobile';
  featured?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'blockchain' | 'tools' | 'database';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface NavigationState {
  isMenuOpen: boolean;
  activeSection: string;
  setMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
}