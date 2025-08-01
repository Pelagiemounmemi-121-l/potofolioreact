import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 w-100" style={{margin: 'auto', width: '100%' }}>

      <div className="container-fluid text-center w-100">
        <p className="mb-3">© {new Date().getFullYear()} MonPortfolio | Tous droits réservés</p>
        <div className="d-flex justify-content-center gap-4 fs-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/237612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
