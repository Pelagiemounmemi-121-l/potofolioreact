// ContactForm.tsx
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import { FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './contact.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validate = (data: FormData) => {
    const newErrors: Partial<FormData> = {};
    if (!data.name || data.name.length < 2) newErrors.name = 'Nom requis (min 2 caractères)';
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email invalide';
    if (!data.message || data.message.length < 10) newErrors.message = 'Message trop court (min 10 caractères)';
    return newErrors;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const data: FormData = {
      name: (form.current.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (form.current.elements.namedItem('email') as HTMLInputElement)?.value || '',
      message: (form.current.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
    };

    const foundErrors = validate(data);
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setSuccess(false);
      return;
    }

    emailjs.sendForm('service_2mnapyp', 'template_2n8gr6w', form.current, 't3pKLOugIuZ4TnA8y')
      .then(() => {
        setSuccess(true);
        setErrors({});
        form.current?.reset();
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setSuccess(false);
      });
  };

  return (
    <section id="contact">
      <div
        className="d-flex justify-content-center align-items-start formucontaint"
       
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-4 rounded shadow contact-form "
          data-aos="fade-up"
          
        >
          <h3 className="text-center mb-4">
            <FaEnvelope size={30} color="aqua" /> Contactez-
            <span >moi</span>
          </h3>

          <div className="mb-3">
            <input type="text" name="name" className="form-control" placeholder="Votre nom" />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          <div className="mb-3">
            <input type="email" name="email" className="form-control" placeholder="Votre email" />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <textarea name="message" className="form-control" rows={4} placeholder="Votre message" />
            {errors.message && <small className="text-danger">{errors.message}</small>}
          </div>

          <button
            type="submit"
            className="btn w-100 rounded-pill"
           
          >
            Envoyer le message
          </button>

          {success && (
            <div className="alert alert-success mt-3 text-center">
              Votre message a été envoyé avec succès !
            </div>
          )}
        </form>
      </div>
  
<section className="container my-5" id="infos-contact" data-aos="fade-up">
  <h2 className="text-center mb-4">Nos coordonnées</h2>
  <div className="row text-center">
    <div className="col-md-4">
      <i className="bi bi-envelope" ></i>
      <p className="mt-2">pelagimounmemi@gmail.com</p>
    </div>
    <div className="col-md-4">
      <i className="bi bi-telephone" ></i>
      <p className="mt-2">+237 6 90 316 908</p>
    </div>
    <div className="col-md-4">
      <i className="bi bi-geo-alt" ></i>
      <p className="mt-2">Douala, Cameroun</p>
    </div>
  </div>
</section>
    </section>
  );
};

export default ContactForm;
