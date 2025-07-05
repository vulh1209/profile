import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-demo.vercel.app',
      category: 'Full Stack',
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'Socket.io'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager-demo.vercel.app',
      category: 'Frontend',
      gradient: 'from-gray-700 to-gray-800'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using weather APIs.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      technologies: ['TypeScript', 'React', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com/yourusername/weather-dashboard',
      live: 'https://weather-dashboard-demo.vercel.app',
      category: 'Frontend',
      gradient: 'from-gray-800 to-black'
    },
    {
      title: 'Blog CMS',
      description: 'A content management system for blogs with markdown support, SEO optimization, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b4d3?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'MongoDB', 'TailwindCSS', 'Vercel'],
      github: 'https://github.com/yourusername/blog-cms',
      live: 'https://blog-cms-demo.vercel.app',
      category: 'Full Stack',
      gradient: 'from-gray-700 to-gray-900'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }}></div>
      </div>
      
      <div className="container-max-width section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 group shadow-xl hover:shadow-2xl backdrop-blur-sm`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-white text-sm rounded-full border border-gray-600/50">
                    {project.category}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full transition-colors duration-200 border border-gray-600/50"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-accent-600/80 hover:bg-accent-500/80 text-white rounded-full transition-colors duration-200 border border-accent-500/50"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-700/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 border border-gray-600/50"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-6 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg transition-colors duration-200 border border-accent-500/50"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 backdrop-blur-sm hover:border-gray-500"
          >
            <Code size={20} />
            <span>View More Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 