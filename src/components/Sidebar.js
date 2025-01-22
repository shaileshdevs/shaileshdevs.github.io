import React, { useState } from 'react';

import Hamburger from './Hamburger';

const Sidebar = () => {
  const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768);
  const [ sidebarOpen, setSidebarOpen ] = useState(!isMobile);
  const [ activeMenu, setActiveMenu ] = useState("home");

  const props = {
    isMobile: isMobile,
    setIsMobile: setIsMobile,
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }

  let sidebarClass = "sidebar";
  sidebarClass = sidebarClass + ( sidebarOpen ? " open" : "" ); 

  return (
    <>
      <Hamburger {...props} />
      
      <aside className={sidebarClass}>
        <nav className="menus">
          <ul>
            <li 
              className={ "home" == activeMenu ? "active" : "" }
              onClick={ () => setActiveMenu( "home" ) }
              >
              <a href="#home">Home</a>
            </li>
            <li 
              className={ "about" == activeMenu ? "active" : "" }
              onClick={ () => setActiveMenu( "about" ) }
              >
              <a href="#about">About</a>
            </li>
            <li 
              className={ "experience" == activeMenu ? "active" : "" }
              onClick={ () => setActiveMenu( "experience" ) }
              >
              <a href="#experience">Experience</a>
            </li>
            <li 
              className={ "skills" == activeMenu ? "active" : "" }
              onClick={ () => setActiveMenu( "skills" ) }
              >
              <a href="#skills">Skills</a>
            </li>
            {/* <li 
              className={ "clients" == activeMenu ? "active" : "" }
              onClick={ () => setActiveMenu( "clients" ) }
              >
              <a href="#clients">Clients</a>
            </li>
            <li 
              className={ "contact" == activeMenu ? "active" : "" }
              onClick={ () => setActiveMenu( "contact" ) }
              >
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

