import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-gray-700/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container-max-width section-padding py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <div className="flex items-center justify-center space-x-2 text-2xl font-bold">
              <Code2 className="text-accent-400" size={28} />
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Vu Le
              </span>
            </div>
          </motion.div>

          {/* Made with love */}
          <motion.p 
            className="text-gray-400 flex items-center justify-center space-x-2 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>Made with</span>
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1],
                color: ['#ef4444', '#f87171', '#ef4444']
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="inline-block"
            >
              <Heart size={20} fill="currentColor" />
            </motion.span>
            <span>and lots of</span>
            <motion.span
              animate={{ 
                color: ['#0ea5e9', '#38bdf8', '#0ea5e9']
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="font-semibold"
            >
              ☕ Coffee
            </motion.span>
          </motion.p>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-gray-700/50"
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Vu Le. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with React, TypeScript, TailwindCSS & Framer Motion
            </p>
          </motion.div>

          {/* Scroll to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 rounded-full border border-gray-600/50 hover:border-gray-500/70 transition-all duration-300 group shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 