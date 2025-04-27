// src/Components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Adopet - Todos os direitos reservados</p>
        <div className="footer-links">
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;