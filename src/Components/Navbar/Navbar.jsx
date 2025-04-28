import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo/Logo_resized.jpeg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSmoothNavigation = (path, sectionId = null) => {
    // Navega para a página
    navigate(path);
    
    // Se houver uma seção específica, rola até ela após um pequeno delay
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100); // Pequeno delay para garantir que a página carregou
    } else {
      // Rola para o topo se não houver seção específica
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="Header-Navbar">
      <Link to="/" className="Logo">
        <img src={Logo} alt="Logo Adopet" />
      </Link>
      <nav className="Navbar">
        <Link to="/" onClick={() => handleSmoothNavigation('/')}>Home</Link>
        <Link to="/sobre" onClick={() => handleSmoothNavigation('/sobre')}>Sobre</Link>
        <Link to="/adocao" onClick={() => handleSmoothNavigation('/adocao')}>Adoção</Link>
        <a 
          onClick={() => handleSmoothNavigation('/login', 'login-form')}
          className="nav-link"
        >
          Entrar
        </a>
        <a 
          onClick={() => handleSmoothNavigation('/register', 'register-form')}
          className="nav-link"
        >
          Criar conta
        </a>
      </nav>
    </header>
  )
  
};

export default Navbar;