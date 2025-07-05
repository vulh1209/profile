import { motion } from 'framer-motion';
import { Code, Database, Settings, Palette, Cloud, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-gray-400',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'NextJS', level: 85 },
        { name: 'React', level: 90 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'TailwindCSS', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'text-gray-300',
      skills: [
        { name: 'NestJS', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Go', level: 80 },
        { name: 'Kafka', level: 75 },
        { name: 'WebSockets', level: 85 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Blockchain & Smart Contracts',
      icon: Shield,
      color: 'text-accent-400',
      skills: [
        { name: 'Solidity', level: 85 },
        { name: 'Hardhat', level: 80 },
        { name: 'EVM Development', level: 85 },
        { name: 'Smart Contracts', level: 85 },
        { name: 'Node OP Stack', level: 75 },
        { name: 'Private Blockchain', level: 75 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-gray-400',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Docker', level: 85 },
        { name: 'GitHub Actions', level: 80 },
        { name: 'Infrastructure as Code', level: 75 },
        { name: 'CI/CD', level: 80 }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Settings,
      color: 'text-gray-300',
      skills: [
        { name: 'PowerApp', level: 75 },
        { name: 'SharePoint', level: 75 },
        { name: 'Microsoft 365', level: 70 },
        { name: 'Enterprise Integration', level: 80 },
        { name: 'API Development', level: 85 },
        { name: 'System Architecture', level: 80 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Palette,
      color: 'text-gray-400',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Project Management', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 border border-gray-800/30 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 border border-gray-700/20 rounded-full"
        />
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
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive expertise in full stack development, blockchain technology, and enterprise solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300 group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="p-3 bg-black/30 rounded-xl border border-gray-600/50 mr-4 group-hover:border-gray-500/70 transition-colors duration-300">
                  <category.icon className={`w-6 h-6 ${category.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm group-hover/skill:text-gray-400 transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 rounded-full relative overflow-hidden"
                      >
                        {/* Shine effect */}
                        <motion.div
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Key Expertise Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Full Stack Development",
                description: "End-to-end web application development with modern frameworks",
                icon: "🚀"
              },
              {
                title: "Smart Contract Engineering", 
                description: "EVM blockchain development and secure smart contract implementation",
                icon: "⛓️"
              },
              {
                title: "Cloud Architecture",
                description: "AWS infrastructure, Kubernetes orchestration, and scalable solutions",
                icon: "☁️"
              },
              {
                title: "Enterprise Integration",
                description: "PowerApp, SharePoint, and enterprise solution development",
                icon: "🏢"
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-accent-500/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{area.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
                  {area.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 