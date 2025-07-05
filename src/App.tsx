import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/20 to-transparent"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.02) 2px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
