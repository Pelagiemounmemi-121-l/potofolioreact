import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import  { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";
import logo from '../assets/54b1c8043ad148bfa07fd462e52c2b1e-free.png';



const Navbar: React.FC = () => {
    

const [isNavOpen, setIsNavOpen] = useState(false);

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
    
      
<nav className={`navbar navbar-expand-lg navbar-dark bg-dark fade-in fixed-top shadow-sm `} >


      <div className="container-fluid  ms-auto">
         
       
        <NavLink className="navbar-brand" to="/"> <img src={logo} alt="logo" width={100} height={100} className="logo"/></NavLink>
         <button onClick={toggleTheme} className="btnchange">
        {isDarkMode ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
      </button>
        <button
  className="navbar-toggler"
  type="button"
  onClick={() => setIsNavOpen(prev => !prev)}
>
  <span className="navbar-toggler-icon" />
</button>

    <div
  className={`navbar-collapse  ${isNavOpen ? 'open' : 'closed'} navbar-collapse-space`}
  id="navbarNav"
>
 

     <a href="/#home" className={`nav-link me-3 ${activeSection === 'home' ? 'active' : ''}`}>
    Accueil
  </a>
   
  <a href="/#about" className={`nav-link me-3 ${activeSection === 'about' ? 'active' : ''}`}>
    Apropos
  </a>
  <a href="/#project" className={`nav-link me-3 ${activeSection === 'project' ? 'active' : ''}`}>
    projects
  </a>
  <a href="/#comp" className={`nav-link me-3 ${activeSection === 'comp' ? 'active' : ''}`}>
    competences
  </a>

  <a href="/#contact" className={`nav-link me-3 ${activeSection === 'contact' ? 'active' : ''}`}>
    contacts
  </a>
  

        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
