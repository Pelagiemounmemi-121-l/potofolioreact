import React from 'react';
import {   Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projet';
import Footer from './components/footter';
import AboutMe from './pages/about';
import ScrollToHashElement from './pages/ScrollToHashElement';
import CompetencesPage from './pages/competences';
import './App.css'
const App: React.FC = () => {
  return (
    <>
      <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projet" element={<Projects />} />
      </Routes>
      <div >
      
        <AboutMe/>
       </div>
       
 <div className=''  >

  <Projects/>
 </div>
 <div>
   <ScrollToHashElement/>
  </div>
   
  <div>
    <CompetencesPage/>
   </div>
   <div>
  <Contact/>
 </div>
    <Footer />
      </ThemeProvider>
  </>
  );
};

export default App;
