import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/vulh1209',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/vule',
      color: 'hover:text-accent-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:lehoangvu1209@gmail.com',
      color: 'hover:text-primary-400'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-600/10 to-primary-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-max-width section-padding relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-gray-700 via-gray-800 to-black p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700/50 overflow-hidden">
                {/* Profile image */}
                <motion.span 
                  className="text-5xl md:text-6xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <img src="/images/avatar.png" alt="Vu Le" className="w-full h-full object-cover rounded-full" />
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Vu Le
              </span>
            </h1>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-accent-400">Full Stack</span> & <span className="text-accent-400">Smart Contract</span> Developer
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            Experienced <span className="text-white font-semibold">Full Stack Developer</span> and 
            <span className="text-white font-semibold"> Smart Contract Engineer</span> specializing in 
            <span className="text-accent-400 font-semibold"> EVM blockchain development</span>. 
            I create scalable web applications and secure smart contracts with expertise in modern technologies 
            and <span className="text-white font-semibold">microservices architecture</span>.
          </motion.p>

          {/* Tech Stack Highlights */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl mx-auto"
          >
            {['TypeScript', 'Solidity', 'NestJS', 'NextJS', 'AWS', 'Kubernetes'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 text-gray-300 text-sm rounded-full hover:border-accent-500/50 hover:text-accent-400 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-6 mb-10"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 text-gray-400 transition-all duration-300 ${link.color} hover:border-gray-600 hover:bg-gray-700/80 shadow-lg hover:shadow-xl`}
              >
                <link.icon size={24} />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50 backdrop-blur-sm"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-gray-500"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex flex-col items-center"
          >
            <p className="text-gray-500 text-sm mb-4">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full border border-gray-700/50"
            >
              <ArrowDown size={20} className="text-gray-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 