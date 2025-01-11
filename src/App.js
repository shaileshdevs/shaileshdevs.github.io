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
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 ml-[200px] overflow-auto">
        <div className="max-w-6xl mx-auto">
          <Home />
          <About />
          <Experience />
          <Skills />
          <Clients />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;

