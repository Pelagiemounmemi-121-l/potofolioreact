import React from 'react';

import './Home.css'; // pour les animations
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloud from '../assets/IMG_20250729_17045.jpg'
import { FaDownload, FaRegHandPeace } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import MultiTypewriter from '../components/Typewriter';

const Home: React.FC = () => {
    useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="home-container fade-in w-100"  >
      <section  id='home'>
        <div className="row w-100 ms-4" style={{marginTop: '15%'}} >
        <div className="col-md-6 p-4 mt-4 " style={{}}> 
            <div >
                <h1 style={{  alignItems: 'center',fontSize: '40px' }} data-aos="fade-down">     
      <FaRegHandPeace size={40} color="aqua" style={{ marginRight: '8px' }} /> BIENVENUE ! MOI C'EST <div style={{ marginTop: '20px'}}><span style={{}}>MOUNMEMI PELAGIE</span></div> </h1>
            </div>
           <h2 style={{ marginTop: '40px'}}>
            Je suis
        <MultiTypewriter 
          phrases={[
            " passionné par le front-end 🔄",
             " UI designer 💫",
             " développeuse d'applications web 👨‍💻",
          ]}
          speed={80}
          delay={1500}
        />
      </h2>
         
<div className="d-flex  gap-4 fs-5 ms-4" style={{ marginTop: '50px'}}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{color:'aqua', fontSize: '30px', border: '1px solid aqua', borderRadius: '30px',boxShadow: '0px 10px 20px aqua'}}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            
             style={{color:'aqua', fontSize: '30px', border: '1px solid aqua', borderRadius: '30px',boxShadow: '0px 10px 20px aqua'}}
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/237612345678"
            target="_blank"
            rel="noopener noreferrer"
             style={{color:'aqua', fontSize: '30px', border: '1px solid aqua', borderRadius: '30px',boxShadow: '0px 10px 20px aqua'}}
          >
            <FaWhatsapp />
          </a>
        </div>
         <div className='' style={{ marginTop: '60px'}}>
      <a className='p-2'
        href="/documents/cvdevpelagie.pdf" // Chemin relatif vers le fichier .doc
        download="cvdevpelagie.pdf"
       style={{ borderRadius: '30px', fontSize:'20px', backgroundColor:'aqua', color: 'black', textDecoration:'none' }}
      >
        Télécharger mon CV <span>< FaDownload/></span>
      </a>
    </div>
       </div>
         
     <div className="col-md-6" data-aos="zoom-in-up">  
       
       <div className="floating-container">
      <img src={cloud} alt="Nuage flottant" className="floating-image" />
    </div></div>
     
 </div>
 </section>
 
 
 
    </div>
  );
};

export default Home;

