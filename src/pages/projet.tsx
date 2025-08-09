import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "./projet.css"

const projets = [
  {
    titre: "Savon D’Evel",
    image: "img/c19527c5-5f53-4143-afd1-bf66c3b16669.jpg",
    description: "Site vitrine pour une marque artisanale de savons naturels.",
    lien: "https://pelagiemounmemi-121-l.github.io/savon-d-evel/contact.html"
  },
  {
    titre: "todo-list",
    image: "public/img/62e29dad-3189-4db5-9174-de4bd31baac6.jpg",
    description: "application permettent dajouter,de suprimer d'editer,de trier des taches",
    lien: "https://pelagie.netlify.app/"
  },
  {
    titre: "application de gestion de contact",
    image: "img/2b4d921f-8810-46fd-9e70-1d2c0a555493.jpg",
    description: "Formulaire de contact avec validation et envoi via EmailJS.",
    lien: "http://pelagiemounmemi-121-l.github.io/gestion-contact/"
  }
];

const Projet = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container my-5" id="projet">
      <h2 className="text-center mb-4">Mes projets</h2>
      <div className="row g-4">
        {projets.map((projet, index) => (
          <div className="col-md-4 col-sm-6 col-12" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card h-100 shadow-sm">
              <img src={projet.image} className="card-img-top img-fluid" alt={projet.titre} />
              <div className="card-body">
                <h5 className="card-title">{projet.titre}</h5>
                <p className="card-text">{projet.description}</p>
                <a href={projet.lien} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projet;
