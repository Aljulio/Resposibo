// src/components/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mi Práctica de React. Todos los derechos reservados.</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="#" className="text-white"><FaFacebook size={30} /></a>
          <a href="#" className="text-white"><FaTwitter size={30} /></a>
          <a href="#" className="text-white"><FaInstagram size={30} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;