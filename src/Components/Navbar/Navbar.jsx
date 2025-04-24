import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo/Logo_resized.jpeg";

const Navbar = () => {
  return (
    <header className="Header-Navbar">
      <a href="/" className="Logo">
        <img src={Logo} alt="Logo Adopet" />
      </a>
      <nav className="Navbar">
        <a href="login">Login</a>
        <a href="adocao">Adoção</a>
        <a href="sobre">Sobre nós</a>
      </nav>
    </header>
  );
};

export default Navbar;
