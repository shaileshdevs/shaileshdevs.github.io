import React, { useRef } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div className="app">
      <Sidebar homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} skillsRef={skillsRef} />
      <main className="main-content">
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Experience experienceRef={experienceRef} />
        <Skills skillsRef={skillsRef} />
        {/* <Clients /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
