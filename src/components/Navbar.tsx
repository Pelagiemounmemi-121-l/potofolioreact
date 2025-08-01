import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import  { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";




const Navbar: React.FC = () => {
    


 const [activeSection, setActiveSection] = useState<string>("");

  // Classes dynamiques pour la navbar

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.6 }
  );

  document.querySelectorAll("section[id]").forEach(section => {
    observer.observe(section);
  });

  return () => observer.disconnect();
}, []);


  return (
    
      
<nav className={`navbar navbar-expand-lg navbar-dark bg-dark fade-in fixed-top shadow-sm w-100`} style={{marginBottom:'100px'}}>


      <div className="container-fluid">
         
       
        <NavLink className="navbar-brand" to="/"> <span className="span">p</span>elagie</NavLink>
         <button onClick={toggleTheme} className="btnchange">
        {isDarkMode ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
      </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto " >
           
            <li className="nav-item d-flex">
  <a href="/#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
    Accueil
  </a>
  <a href="/#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
    Apropos
  </a>
  <a href="/#project" className={`nav-link ${activeSection === 'project' ? 'active' : ''}`}>
    projects
  </a>
  <a href="/#comp" className={`nav-link ${activeSection === 'comp' ? 'active' : ''}`}>
    competences
  </a>

  <a href="/#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
    contacts
  </a>
</li>


            
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;

