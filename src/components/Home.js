import React from 'react';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center p-8">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-amber-500">Shailesh Vishwakarma</span>
        </h1>
        <h2 className="text-2xl text-gray-400">
          Senior Full Stack Developer specializing in WordPress
        </h2>
        <p className="text-gray-400 max-w-2xl">
          With over 6 years of experience in WordPress development, I create robust and scalable web solutions. 
          I specialize in custom plugin development, theme customization, and full-stack web applications.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/shaileshdevs" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors"
          >
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/shailesh-vishwakarma-20a798104/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors"
          >
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

