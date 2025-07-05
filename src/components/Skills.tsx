import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SASS/SCSS', level: 85 }
      ],
      gradient: 'from-gray-800 to-gray-900'
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'GraphQL', level: 70 }
      ],
      gradient: 'from-gray-700 to-gray-800'
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 80 },
        { name: 'Jest', level: 75 },
        { name: 'Webpack', level: 70 }
      ],
      gradient: 'from-gray-800 to-black'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-600/5 to-gray-800/5 rounded-full blur-3xl"></div>
      
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
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:border-gray-500/50 transition-all duration-300 group`}
            >
              <h3 className="text-2xl font-semibold text-white mb-8 text-center group-hover:text-gray-100 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-accent-400 text-sm font-semibold bg-gray-800/50 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden border border-gray-700/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-gray-400 via-gray-300 to-white h-full rounded-full relative overflow-hidden"
                        >
                          {/* Animated shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: [-100, 200] }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 