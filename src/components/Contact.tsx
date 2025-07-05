import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  MapPin,
  Github,
  Linkedin,
  Phone,
  Send,
  Clock,
  Coffee,
  Download,
} from "lucide-react";
import { generateResumePDF } from "../utils/pdfGenerator";

/**
 * Contact Section Component
 *
 * Comprehensive contact interface featuring:
 * - Contact form with validation
 * - Contact information cards
 * - Expertise highlights
 * - Multiple contact methods
 * - Call-to-action for collaboration
 */
const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Handle form input changes
   * @param {React.ChangeEvent} e - Input change event
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle form submission
   * @param {React.FormEvent} e - Form submit event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Add actual form submission implementation
  };

  /**
   * Handle PDF resume download
   */
  const handleDownloadResume = async () => {
    try {
      await generateResumePDF();
    } catch (error) {
      console.error("Error downloading resume:", error);
    }
  };

  // Contact information configuration
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "lehoangvu1209@gmail.com",
      link: "mailto:lehoangvu1209@gmail.com",
      color: "text-gray-400",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+84 905 293 836",
      link: "tel:+84905293836",
      color: "text-gray-400",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Vietnam",
      link: "#",
      color: "text-gray-400",
    },
    {
      icon: Github,
      title: "GitHub",
      content: "github.com/vulh1209",
      link: "https://github.com/vulh1209",
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/vule",
      link: "https://linkedin.com/in/vule",
      color: "text-accent-400",
    },
    {
      icon: Coffee,
      title: "Available for",
      content: "Freelance & Full-time",
      link: "#",
      color: "text-gray-400",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      link: "#",
      color: "text-gray-400",
    },
  ];

  // Services offered for expertise section
  const services = [
    "Smart Contract Development",
    "Full Stack Applications",
    "Microservices Architecture",
    "Enterprise Integration",
    "Blockchain Solutions",
    "Cloud Infrastructure",
    "Performance Optimization",
    "Technical Consulting",
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
      id="contact"
      className="py-20 bg-gradient-to-b from-transparent via-gray-900/40 to-black relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to discuss your next project? Whether it's blockchain
            development, enterprise solutions, or full-stack applications, I'm
            here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction section */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                I'm always excited to work on innovative projects and
                collaborate with forward-thinking teams. With expertise in{" "}
                <span className="text-accent-400 font-semibold">
                  blockchain development
                </span>
                ,
                <span className="text-white font-semibold">
                  {" "}
                  enterprise solutions
                </span>
                , and
                <span className="text-accent-400 font-semibold">
                  {" "}
                  modern web technologies
                </span>
                , I can help turn your vision into reality.
              </p>
            </div>

            {/* Contact Information Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-gray-600/50 transition-all duration-300 group ${
                    info.link === "#" ? "cursor-default" : "cursor-pointer"
                  }`}
                  aria-label={`Contact via ${info.title}`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Contact icon */}
                    <div className="p-3 bg-black/30 rounded-lg border border-gray-600/50 group-hover:border-gray-500/70 transition-colors duration-300">
                      <info.icon
                        className={`w-6 h-6 ${info.color} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>

                    {/* Contact details */}
                    <div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-gray-100 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Expertise Highlights Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl"
            >
              <h4 className="text-xl font-semibold text-white mb-6">
                What I Can Help With
              </h4>

              {/* Services grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="no-print"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Main contact form */}
              <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/30 rounded-2xl hover:border-gray-600/50 transition-all duration-300">
                {/* Form header */}
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <MessageSquare className="mr-3 text-accent-400" size={28} />
                  Send a Message
                </h3>

                <div className="space-y-6">
                  {/* Name input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 font-medium mb-3"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-700/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-200"
                      placeholder="Vu Le"
                      aria-label="Enter your full name"
                    />
                  </div>

                  {/* Email input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 font-medium mb-3"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-gray-700/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-200"
                      placeholder="lehoangvu1209@gmail.com"
                      required
                      aria-label="Enter your email address"
                    />
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-300 font-medium mb-3"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-4 bg-gray-700/30 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, timeline, and how I can help..."
                      required
                      aria-label="Describe your project details"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl text-white font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50 flex items-center justify-center space-x-3"
                    aria-label="Send message"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </div>

              {/* Additional Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Quick email contact */}
                <motion.a
                  href="mailto:lehoangvu1209@gmail.com"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-accent-500/50 transition-all duration-300 text-center group"
                  aria-label="Send quick email"
                >
                  <Mail className="w-8 h-8 text-accent-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-semibold mb-2">Quick Email</h4>
                  <p className="text-gray-400 text-sm">Direct response</p>
                </motion.a>

                {/* Phone contact */}
                <motion.a
                  href="tel:+84905293836"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-accent-500/50 transition-all duration-300 text-center group"
                  aria-label="Call phone number"
                >
                  <Phone className="w-8 h-8 text-accent-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-semibold mb-2">Phone Call</h4>
                  <p className="text-gray-400 text-sm">+84 905 293 836</p>
                </motion.a>

                {/* LinkedIn contact */}
                <motion.a
                  href="https://linkedin.com/in/vule"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-6 bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-accent-500/50 transition-all duration-300 text-center group"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-8 h-8 text-accent-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
                  <p className="text-gray-400 text-sm">Professional network</p>
                </motion.a>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Final Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="p-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/30 rounded-2xl">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need blockchain solutions, enterprise applications, or
              modern web development, I'm here to help you achieve your goals
              with cutting-edge technology and best practices.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Primary action - Start conversation */}
              <motion.a
                href="mailto:lehoangvu1209@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-white font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600/50"
                aria-label="Start email conversation"
              >
                <Mail className="mr-2" size={20} />
                Start a Conversation
              </motion.a>

              {/* Secondary action - Download resume */}
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-gray-600 rounded-full text-gray-300 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 backdrop-blur-sm hover:border-gray-500"
                aria-label="Download resume as PDF"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
