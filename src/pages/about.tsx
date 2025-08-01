import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // pour les animations
import cloud from '../assets/IMG_20250729_17045.jpg'

function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container py-5 mt-4" id='about'  >
    
    
      <div className="row p-4"  >
        {/* Colonne gauche - Texte */}
        <h1 className="text-center mb-4 fs-1"   data-aos="fade-down"> <span style={{color: 'aqua'}}>À </span> propos de moi</h1>
            <div className="col-md-6 d-flex justify-content-center align-items-center"  data-aos="fade-right" style={{ borderRight: '2px solid aqua' }}>
      <div className="float-container">
      <img src={cloud} alt="Nuage flottant" className="float-image" />
    </div>
        </div>

        {/* Colonne droite - Image */}
        
           <div className="col-md-6 mt-4 p-4" data-aos="fade-left"  >

           <p style={{ fontSize: '24px' }}>
            Bonjour ! Je suis un développeur front-end passionné par le design interactif
            et les interfaces modernes. J’ai une forte expertise en React, Bootstrap,
            et j’adore créer des expériences utilisateur fluides et dynamiques.
          </p>
          <p style={{ fontSize: '24px' }}>
            Mon objectif est de construire des sites performants, accessibles et beaux.
            J’aime aussi explorer les nouvelles tendances web et relever des défis créatifs.
          </p>
             <div className='row' style={{ marginTop: '60px'}}>
                <div className="col-md-6"></div>
                 <div className="col-md-6"> <a className='p-2'
                  href="/documents/cvdevpelagie.pdf" // Chemin relatif vers le fichier .doc
                 style={{ borderRadius: '30px', fontSize:'20px', backgroundColor:'aqua', color: 'black', textDecoration:'none'  }}
                >
                  savoir plus
                </a></div>
               
              </div>
        </div>
      </div>
    
    </section>
  );
}

export default AboutMe;
