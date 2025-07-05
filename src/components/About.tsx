import { motion } from "framer-motion";
import { Code, Palette, Zap, Users, Shield, Cloud } from "lucide-react";

/**
 * About Section Component
 *
 * Detailed information about the developer including:
 * - Professional background and experience
 * - Key highlight cards with expertise areas
 * - Technology stack overview
 * - Interactive animations and hover effects
 */
const About = () => {
  // Professional highlight cards configuration
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Expert in modern web frameworks and microservices architecture",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      icon: Shield,
      title: "Smart Contract Development",
      description: "Specialized in EVM blockchain and Solidity programming",
      gradient: "from-gray-700 to-gray-800",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Kubernetes, Docker and infrastructure automation",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Microservices, Node OP Stack and scalable architectures",
      gradient: "from-gray-700 to-gray-800",
    },
    {
      icon: Palette,
      title: "Enterprise Solutions",
      description: "PowerApp, SharePoint and enterprise integrations",
      gradient: "from-gray-600 to-gray-700",
    },
    {
      icon: Users,
      title: "Project Leadership",
      description: "Direct participation and solution architecture planning",
      gradient: "from-gray-700 to-gray-800",
    },
  ];

  // Complete technology stack
  const technologies = [
    "JavaScript",
    "TypeScript",
    "Solidity",
    "Go",
    "NestJS",
    "NextJS",
    "Kafka",
    "Hardhat",
    "AWS",
    "Kubernetes",
    "Docker",
    "WebSockets",
    "PowerApp",
    "SharePoint",
    "Microservices",
    "GitHub",
    "Node OP Stack",
    "Private Blockchain",
  ];

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
      id="about"
      className="py-20 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Experienced developer with expertise in both traditional web
            development and blockchain technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Professional Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main heading */}
            <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-white leading-tight">
              Full Stack & Smart Contract Developer with
              <span className="text-accent-400"> extensive experience</span>
            </h3>

            {/* Professional background paragraphs */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              {/* Introduction paragraph */}
              <p>
                I'm a seasoned{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
                and
                <span className="text-accent-400 font-semibold">
                  {" "}
                  Smart Contract Engineer
                </span>{" "}
                with deep expertise in
                <span className="text-white font-semibold">
                  {" "}
                  EVM blockchain development
                </span>
                . My technical stack spans modern web technologies, blockchain
                protocols, and enterprise solutions.
              </p>

              {/* Core expertise paragraph */}
              <p>
                My core expertise includes{" "}
                <span className="text-accent-400 font-semibold">
                  JavaScript, TypeScript, Solidity, and Go
                </span>
                , with hands-on experience in building scalable applications
                using
                <span className="text-white font-semibold">
                  {" "}
                  NestJS, NextJS, and Kafka
                </span>
                . I've successfully architected and deployed solutions on{" "}
                <span className="text-accent-400 font-semibold">
                  AWS infrastructure
                </span>{" "}
                using Kubernetes, Docker, and microservices patterns.
              </p>

              {/* Enterprise experience paragraph */}
              <p>
                I have extensive experience with{" "}
                <span className="text-white font-semibold">
                  enterprise technologies
                </span>{" "}
                including PowerApp and SharePoint development, as well as
                blockchain infrastructure like
                <span className="text-accent-400 font-semibold">
                  {" "}
                  Node OP Stack
                </span>{" "}
                and private blockchain networks. My work involves direct
                participation in project planning and solution architecture.
              </p>

              {/* Specialized skills paragraph */}
              <p>
                I specialize in{" "}
                <span className="text-white font-semibold">
                  WebSocket implementations
                </span>
                , microservices architecture, and have contributed to projects
                using
                <span className="text-accent-400 font-semibold">
                  {" "}
                  Hardhat
                </span>{" "}
                for smart contract development and testing.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlight Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl group`}
              >
                {/* Icon container */}
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-black/30 rounded-xl border border-gray-600/50 group-hover:border-gray-500/70 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Card content */}
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technology Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Technologies I Work With
          </h3>

          {/* Technology grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-lg text-gray-300 text-sm hover:border-accent-500/50 hover:text-accent-400 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
