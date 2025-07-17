import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Tools from './components/Tools';
import ToolsIndex from './components/tools/ToolsIndex';
import ExcelToJson from './components/tools/ExcelToJson';
import JsonToExcel from './components/tools/JsonToExcel';
import TimestampToUtc from './components/tools/TimestampToUtc';
import UtcToTimestamp from './components/tools/UtcToTimestamp';
import StringConverter from './components/tools/StringConverter';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  useScrollSpy();

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            {/* Main page route */}
            <Route path="/" element={
              <>
                <Hero />
                
                {/* Placeholder sections */}
                <section id="about" className="section-padding">
                  <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
                    <p className="text-center text-muted-foreground">Coming soon...</p>
                  </div>
                </section>
                
                <section id="skills" className="section-padding">
                  <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
                    <p className="text-center text-muted-foreground">Coming soon...</p>
                  </div>
                </section>
                
                <section id="experience" className="section-padding">
                  <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
                    <p className="text-center text-muted-foreground">Coming soon...</p>
                  </div>
                </section>
                
                <section id="projects" className="section-padding">
                  <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
                    <p className="text-center text-muted-foreground">Coming soon...</p>
                  </div>
                </section>
                
                <Tools />
                
                <section id="contact" className="section-padding">
                  <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
                    <p className="text-center text-muted-foreground">Coming soon...</p>
                  </div>
                </section>
              </>
            } />
            
            {/* Tools routes */}
            <Route path="/tools" element={<ToolsIndex />} />
            <Route path="/tools/excel-to-json" element={<ExcelToJson />} />
            <Route path="/tools/json-to-excel" element={<JsonToExcel />} />
            <Route path="/tools/timestamp-to-utc" element={<TimestampToUtc />} />
            <Route path="/tools/utc-to-timestamp" element={<UtcToTimestamp />} />
            <Route path="/tools/string-converter" element={<StringConverter />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;