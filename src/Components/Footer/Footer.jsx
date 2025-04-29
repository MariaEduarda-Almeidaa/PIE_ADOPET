import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="page-container">
      <main className="content-wrap">
        {/* Todo o conteúdo da sua página vai aqui */}
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <Link to="/sobre">Sobre nós</Link>
            <Link to="/privacidade">Política de Privacidade</Link>
          </div>
          <p className="copyright">© 2024 Adopet - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;