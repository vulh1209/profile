import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

const ToolLayout: React.FC<ToolLayoutProps> = ({ title, description, icon: Icon, children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <span>/</span>
            <Link to="/tools" className="hover:text-foreground transition-colors">
              Tools
            </Link>
            <span>/</span>
            <span className="text-foreground">{title}</span>
          </div>
        </nav>

        {/* Back Button */}
        <Link 
          to="/tools" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>

        {/* Tool Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-primary/10 rounded-xl">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground text-lg mt-2">{description}</p>
            </div>
          </div>
        </motion.div>

        {/* Tool Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default ToolLayout;