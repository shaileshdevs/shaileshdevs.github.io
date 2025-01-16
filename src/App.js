import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Clients from './components/Clients';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content shvsh">
        <Home />
        <About />
        <Experience />
        <Skills />
        {/* <Clients /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;

