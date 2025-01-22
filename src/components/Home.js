import React from 'react';

function Home() {
  return (
    <section id="home">
      <h1>Shailesh Vishwakarma</h1>
      <h2 className="profession-title">
        <span>WordPress &</span> <span>Full Stack Developer</span>
      </h2>
      <p>With over 6 years of experience in WordPress development.</p>
      <div className="social-links">
        <a href="https://github.com/shaileshdevs" target="_blank" rel="noopener noreferrer" className="github-link">
          <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.385.6.11.793-.26.793-.577v-2.165c-3.338.726-4.042-1.416-4.042-1.416-.547-1.387-1.334-1.756-1.334-1.756-1.091-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.482 11.482 0 0 1 3.003-.404c1.02.004 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.625-5.478 5.921.431.372.817 1.103.817 2.222v3.293c0 .32.192.693.8.576C20.565 21.796 24 17.298 24 12 24 5.373 18.627 0 12 0z"/>
          </svg>

          <span>GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/shailesh-vishwakarma-20a798104/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
          <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <title>LinkedIn</title>
            <path d="M22.23 0H1.77C.79 0 0 .774 0 1.726v20.548C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.726V1.726C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.56c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06c1.14 0 2.06.92 2.06 2.06s-.92 2.06-2.06 2.06zM20.45 20.452h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.34V9h3.42v1.57h.05c.48-.91 1.67-1.85 3.44-1.85 3.68 0 4.36 2.42 4.36 5.57v6.15z"/>
          </svg>

          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Home;

