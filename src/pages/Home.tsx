import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';
import cloud from '../assets/IMG_20250729_17045.jpg';

import { FaDownload, FaRegHandPeace, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import MultiTypewriter from '../components/Typewriter';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="home-container fade-in w-100">
      <section id="home">
        <div className="row w-100 ms-4" >
          <div className="col-md-6 p-4 mt-4">
            <div>
              <h1
                
                data-aos="fade-down"
              >
                <FaRegHandPeace size={40} color="aqua"  className='icon' />
                BIENVENUE ! MOI C'EST
                <div  className='nom'>
                  <span>MOUNMEMI PELAGIE</span>
                </div>
              </h1>
            </div>

            <h2 >
              Je suis
              <MultiTypewriter
                phrases={[
                  ' passionnée par le front-end 🔄',
                  ' UI designer 💫',
                  " développeuse d'applications web 👨‍💻"
                ]}
                speed={80}
                delay={1500}
              />
            </h2>

            <div className="d-flex gap-4 fs-5 ms-4 lien" >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                 className='liencon'
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
               className='liencon'
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/237612345678"
                target="_blank"
                rel="noopener noreferrer"
                className='liencon'
              >
                <FaWhatsapp />
              </a>
            </div>

            <div  className='moncv'>
              <a
                className="p-2 cv"
                href="/documents/cvdevpelagie.pdf"
                download="cvdevpelagie.pdf"
                
              >
                Télécharger mon CV <FaDownload />
              </a>
            </div>
          </div>

          <div className="col-md-6" data-aos="zoom-in-up">
            <div className="floating-container">
              <img src={cloud} alt="Nuage flottant" className="floating-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
