import './App.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';
import Portfolio from './containers/Portfolio/Portfolio';
import Resume from './containers/Resume/Resume';
import Skills from './containers/Skills/Skills'; 
import Navbar from './components/Navbar/Navbar';
import Particle from './util.js/particle';

function App() {
  const location = useLocation();
  const particlehomeonly = location.pathname === '/';

  const handleInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="App">
      {particlehomeonly && (
        <Particles id="particles" init={handleInit} options={Particle} />
      )}

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
