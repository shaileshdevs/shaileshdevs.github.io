import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

