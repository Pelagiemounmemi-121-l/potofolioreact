// ContactForm.js
import  { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
// index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { FaEnvelope } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

AOS.init();

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validate = (data) => {
    const newErrors = {};
    if (!data.name || data.name.length < 2) newErrors.name = 'Nom requis (min 2 caractères)';
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email invalide';
    if (!data.message || data.message.length < 10) newErrors.message = 'Message trop court (min 10 caractères)';
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value
    };

    const foundErrors = validate(formData);
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setSuccess(false);
      return;
    }

    emailjs.sendForm('service_2mnapyp', 'template_2n8gr6w', form.current, 't3pKLOugIuZ4TnA8y')
      .then(() => {
        setSuccess(true);
        setErrors({});
        form.current.reset();
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setSuccess(false);
      });
  };

  return (
    <section  id='contact'>
    <div
    
          className="d-flex justify-content-center align-items-start"
      style={{ minHeight: '100vh', marginTop: '8%' }}
    >
     
           
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" p-4 rounded shadow w-50"
        data-aos="fade-up"
      style={{border: '1px solid aqua '}}
      >
        <h3 className="text-center mb-4"> <FaEnvelope size={30} color="aqua" />   Contactez-<span style={{color: 'aqua'}}>moi </span></h3>

 
        <div className="mb-3 ">
          <input type="text" name="name" className="form-control" placeholder="Votre nom" />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3 ">
          <input type="email" name="email" className="form-control" placeholder="Votre email" />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="mb-3">
          <textarea name="message" className="form-control" rows="4" placeholder="Votre message" />
          {errors.message && <small className="text-danger">{errors.message}</small>}
        </div>

        <button type="submit" className="btn  w-100 rounded-pill" style={{backgroundColor: 'aqua'}}>
         Envoyer le message 

        </button>

        {success && (
          <div className="alert alert-success mt-3 text-center">
            Votre message a été envoyé avec succès !
          </div>
        )}
      </form>
      </div>
      </section>
    
  );
};

export default ContactForm;
