import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Code, 
  Clock, 
  Type, 
  ArrowRight,
  Zap
} from 'lucide-react';

const tools = [
  {
    title: 'Excel/CSV to JSON',
    description: 'Convert Excel/CSV files to JSON format with drag & drop functionality',
    icon: FileText,
    path: '/tools/excel-to-json',
    color: 'text-blue-400'
  },
  {
    title: 'JSON to CSV/Excel',
    description: 'Convert JSON files to CSV format with proper escaping',
    icon: Code,
    path: '/tools/json-to-excel',
    color: 'text-green-400'
  },
  {
    title: 'Timestamp to UTC',
    description: 'Convert Unix timestamps to UTC date format',
    icon: Clock,
    path: '/tools/timestamp-to-utc',
    color: 'text-purple-400'
  },
  {
    title: 'UTC to Timestamp',
    description: 'Convert UTC dates to Unix timestamp format',
    icon: Clock,
    path: '/tools/utc-to-timestamp',
    color: 'text-orange-400'
  },
  {
    title: 'String Converter',
    description: 'Convert text to different case formats (upper, lower, title, camel)',
    icon: Type,
    path: '/tools/string-converter',
    color: 'text-pink-400'
  }
];

const ToolsIndex = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Developer Tools</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Collection of useful utilities for developers and data processing
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={tool.path}
                  className="group glass-card p-6 hover:shadow-xl transition-all duration-300 block h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-primary/10 rounded-lg ${tool.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Enhanced File Processing</h3>
            <p className="text-muted-foreground">
              Drag & drop files, auto-convert on upload, and download results with our streamlined workflow.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToolsIndex;