import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Shield,
  Cloud,
} from "lucide-react";
import React from "react";

/**
 * Projects Section Component
 *
 * Portfolio showcase featuring:
 * - Category-based project filtering
 * - Interactive project cards with hover effects
 * - Technology stack tags
 * - External links to demos and repositories
 * - Call-to-action for collaboration
 */
const Projects = () => {
  // Project data with comprehensive details
  const projects = [
    {
      title: "DeFi Protocol Platform",
      description:
        "A comprehensive DeFi platform built with smart contracts on EVM blockchain. Features include yield farming, liquidity pools, and governance tokens. Implemented using Solidity and Hardhat framework.",
      image: "/api/placeholder/600/400",
      category: "Blockchain",
      tags: ["Solidity", "Hardhat", "NextJS", "TypeScript", "EVM"],
      demoUrl: "#",
      githubUrl: "#",
      icon: Shield,
      gradient: "from-purple-600/20 to-blue-600/20",
    },
    {
      title: "Enterprise Microservices Platform",
      description:
        "Scalable microservices architecture using NestJS with Kafka message broker. Built for high-throughput enterprise applications with real-time data processing and WebSocket communication.",
      image: "/api/placeholder/600/400",
      category: "Backend",
      tags: ["NestJS", "Kafka", "Microservices", "Docker", "Kubernetes"],
      demoUrl: "#",
      githubUrl: "#",
      icon: Database,
      gradient: "from-green-600/20 to-emerald-600/20",
    },
    {
      title: "Modern Web Application",
      description:
        "Full-stack web application with NextJS frontend and NestJS backend. Features real-time updates via WebSockets, AWS cloud deployment, and CI/CD pipeline with GitHub Actions.",
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      tags: ["NextJS", "NestJS", "TypeScript", "AWS", "WebSockets"],
      demoUrl: "#",
      githubUrl: "#",
      icon: Code,
      gradient: "from-blue-600/20 to-cyan-600/20",
    },
    {
      title: "Node Operator Stack",
      description:
        "Private blockchain infrastructure with Node OP Stack implementation. Includes custom consensus mechanisms, private sharing protocols, and enterprise-grade security features.",
      image: "/api/placeholder/600/400",
      category: "Infrastructure",
      tags: [
        "Go",
        "Node OP Stack",
        "Blockchain",
        "Kubernetes",
        "Private Network",
      ],
      demoUrl: "#",
      githubUrl: "#",
      icon: Cloud,
      gradient: "from-orange-600/20 to-red-600/20",
    },
    {
      title: "SharePoint Enterprise Solution",
      description:
        "Custom SharePoint solution with PowerApp integration for enterprise workflow automation. Features document management, approval workflows, and Microsoft 365 integration.",
      image: "/api/placeholder/600/400",
      category: "Enterprise",
      tags: [
        "SharePoint",
        "PowerApp",
        "Microsoft 365",
        "Workflow",
        "Integration",
      ],
      demoUrl: "#",
      githubUrl: "#",
      icon: Database,
      gradient: "from-indigo-600/20 to-purple-600/20",
    },
    {
      title: "Real-time Trading Platform",
      description:
        "High-performance trading platform with real-time data streaming using WebSockets and Kafka. Built with Go backend for ultra-low latency and TypeScript frontend.",
      image: "/api/placeholder/600/400",
      category: "Trading",
      tags: ["Go", "Kafka", "WebSockets", "TypeScript", "Real-time"],
      demoUrl: "#",
      githubUrl: "#",
      icon: Code,
      gradient: "from-yellow-600/20 to-orange-600/20",
    },
  ];

  // Available project categories for filtering
  const categories = [
    "All",
    "Blockchain",
    "Full Stack",
    "Backend",
    "Infrastructure",
    "Enterprise",
    "Trading",
  ];

  // State for active category filter
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // Animation variants for consistent animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)`,
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
          }}
        ></div>
      </div>

      <div className="container-max-width section-padding relative z-10">
        {/* Section Header */}
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
            Showcase of projects demonstrating expertise in blockchain
            development, enterprise solutions, and modern web technologies
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gray-700 border-gray-500 text-white"
                  : "bg-gray-800/50 border-gray-700/50 text-gray-400 hover:border-gray-600 hover:text-gray-300"
              }`}
              aria-label={`Filter projects by ${category}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/30 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-500"
            >
              {/* Project Image/Icon Section */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`}
                ></div>

                {/* Project icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon
                    size={64}
                    className="text-white/50 group-hover:text-white/70 transition-colors duration-300"
                  />
                </div>

                {/* Hover overlay with action buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
                >
                  {/* Demo link */}
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-700/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
                    aria-label={`View ${project.title} demo`}
                  >
                    <ExternalLink size={20} />
                  </motion.a>

                  {/* GitHub link */}
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-700/80 backdrop-blur-sm rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github size={20} />
                  </motion.a>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-gray-600/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Project title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm text-gray-300 text-xs rounded-full border border-gray-600/30 group-hover:border-gray-500/50 group-hover:text-gray-200 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ x: "100%", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Interested in Working Together?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities and challenging
            projects. Whether it's blockchain development, enterprise solutions,
            or full-stack applications, let's build something amazing together.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50 backdrop-blur-sm"
            aria-label="Navigate to contact section"
          >
            Let's Talk
            <ExternalLink className="ml-2" size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
