import React, { useState, useEffect } from 'react';

import Hamburger from './Hamburger';

const Sidebar = (props) => {
  const { homeRef, aboutRef, experienceRef, skillsRef } = props;
  const [ isMobile, setIsMobile ] = useState(false);
  const [ sidebarOpen, setSidebarOpen ] = useState(!isMobile);
  const [ activeMenu, setActiveMenu ] = useState("home");

  const refs = [
    homeRef, aboutRef, experienceRef, skillsRef
  ];

  const hamburgerProps = {
    isMobile: isMobile,
    setIsMobile: setIsMobile,
    sidebarOpen: sidebarOpen,
    setSidebarOpen: setSidebarOpen
  }

  let sidebarClass = "sidebar";
  sidebarClass = sidebarClass + ( sidebarOpen ? " open" : "" ); 

  useEffect(() => {
    setIsMobile(window.innerWidth < 768); // ✅ Update after mount
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Trigger when 60% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenu(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    refs.forEach(ref => {
      ref.current && observer.observe(ref.current)
    }
    );

    return () => {
      refs.forEach(ref => ref.current && observer.unobserve(ref.current));
    };
  }, [homeRef, aboutRef, experienceRef, skillsRef]);

  return (
    <>
      <Hamburger {...hamburgerProps} />
      
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

