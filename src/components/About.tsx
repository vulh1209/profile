import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive interfaces',
      gradient: 'from-gray-700 to-gray-800'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed',
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams',
      gradient: 'from-gray-700 to-gray-800'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
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
              About Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-white leading-tight">
              I'm a passionate developer who loves creating 
              <span className="text-accent-400"> digital experiences</span>
            </h3>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                With over <span className="text-white font-semibold">3 years</span> of experience in web development, 
                I specialize in creating modern, responsive, and user-friendly applications. My journey 
                in tech started with a curiosity about how websites work, and it has 
                evolved into a passion for crafting digital solutions.
              </p>
              <p>
                I enjoy working with <span className="text-accent-400 font-semibold">cutting-edge technologies</span> and 
                frameworks to build applications that not only look great but also provide exceptional user 
                experiences. I'm always eager to learn new technologies and take on 
                challenging projects.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to <span className="text-white font-semibold">open-source projects</span>, or sharing knowledge with the 
                developer community.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl group`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-black/30 rounded-xl border border-gray-600/50 group-hover:border-gray-500/70 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
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
      </div>
    </section>
  );
};

export default About; 