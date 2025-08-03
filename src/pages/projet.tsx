import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projectList = [
    {
      title: "Portfolio Personnel",
      description: "Site web moderne en React + TypeScript avec thème sombre et responsive design.",
      link: "https://pelagie.netlify.app/",
    },
    {
      title: "Application de ToDo",
      description: "Gestionnaire de tâches avec React, Bootstrap et stockage local.",
      link: "#",
    },
    {
      title: "Blog Dev",
      description: "Plateforme de publication d'articles techniques avec Markdown et routing dynamique.",
      link: "#",
    },
  ];
  




  return (
    <section id='project'>
    <div className="container mt-5 " >
      <h1 className="text-center mb-4" data-aos="fade-down"  > <span >Mes</span> Projets 🚀</h1>

      <div className="row" >
        
        {projectList.map((project, index) => (
          <div className="col-md-4 mb-4" key={index} data-aos="zoom-in-up">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <a href={project.link} className="btn btn-outline-primary mt-auto">Voir le projet</a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
