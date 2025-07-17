import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useThemeStore, applyTheme } from '../stores/theme';
import { useNavigationStore } from '../stores/navigation';

const Header = () => {
  const { theme, toggleTheme } = useThemeStore();
  const { isMenuOpen, activeSection, setMenuOpen } = useNavigationStore();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'tools', label: 'Tools' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleNavigation = (sectionId: string) => {
    if (sectionId === 'tools') {
      navigate('/tools');
    } else {
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text font-geist-mono"
            >
              &lt;VuLe /&gt;
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  (activeSection === item.id && location.pathname === '/') || 
                  (item.id === 'tools' && location.pathname.startsWith('/tools'))
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left py-2 text-sm font-medium transition-colors hover:text-primary ${
                  (activeSection === item.id && location.pathname === '/') || 
                  (item.id === 'tools' && location.pathname.startsWith('/tools'))
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;