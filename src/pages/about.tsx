import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // pour les animations
import cloud from '../assets/IMG_20250729_17045.jpg'
import './about.css'
function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container py-5 mt-4" id='about'  >
    
    
      <div className="row p-4"  >
        {/* Colonne gauche - Texte */}
        <h1 className="text-center mb-4 fs-1"   data-aos="fade-down"> <span >À </span> propos de moi</h1>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center content  "  data-aos="fade-right">
      <div className="float-container ">
      <img src={cloud} alt="Nuage flottant" className="float-image" />
    </div> 
        </div>

        {/* Colonne droite - Image */}
         
           <div className="col-md-6 mt-4 p-4 col-12" data-aos="fade-left"  >

           <p >
            Bonjour ! Je suis un développeur front-end passionné par le design interactif
            et les interfaces modernes. J’ai une forte expertise en React, Bootstrap,
            et j’adore créer des expériences utilisateur fluides et dynamiques.
          </p>
          <p >
            Mon objectif est de construire des sites performants, accessibles et beaux.
            J’aime aussi explorer les nouvelles tendances web et relever des défis créatifs.
          </p>
             <div className='row rowcont' >
                <div className="col-md-6 col-12"></div>
                 <div className="col-md-6 col-12"> <a className='p-2 plus'
                  href="/documents/cvdevpelagie.pdf" // Chemin relatif vers le fichier .doc
               
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
