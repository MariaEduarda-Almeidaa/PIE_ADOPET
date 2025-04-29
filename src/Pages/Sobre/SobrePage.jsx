import React from "react";
import "./Sobre.css"; 
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar"; 
import Logo from "../../assets/Logo/Logo.png";


import gabrielImage from "../../assets/Devs/Gabriel.jpg";
import mariaImage from "../../assets/Devs/Maria.jpg";
import rayssaImage from "../../assets/Devs/rayssa.jpg";
import samanthaImage from "../../assets/Devs/Samantha.png";
//import victorImage from "../../assets/Devs/victor-pimenta.jpg";

const devs = [
    {
      nome: "Gabriel Fiorio",
      contribuicao: "Prototipação",
      imagem: gabrielImage,
      github: "https://github.com/gabfiorio",
      linkedin: "https://www.linkedin.com/in/gabrielfiorio",
      instagram: "https://www.instagram.com/gabrielfiorio",
    },
    {
      nome: "Maria Eduarda Fernandes",
      contribuicao: "Frontend e UI/UX",
      imagem: mariaImage,
      github: "https://github.com/mariaeduardafernandes",
      linkedin: "https://www.linkedin.com/in/mariaeduardafernandes",
      instagram: "https://www.instagram.com/maria_eduardaa900",
    },
    {
      nome: "Rayssa Ferreira",
      contribuicao: "Backend e Banco de dados",
      imagem: rayssaImage,
      github: "https://github.com/ferreirayssa",
      linkedin: "https://www.linkedin.com/in/rayssa-ferreira-315508245/",
      instagram: "https://www.instagram.com/ferreirayssa/",
    },
    {
      nome: "Samantha Silva",
      contribuicao: "Documentação",
      imagem: samanthaImage,
      github: "https://github.com/samanthasilva",
      linkedin: "https://www.linkedin.com/in/samanthasilva",
      instagram: "https://www.instagram.com/samanthasilva",
    },
    //{
      //nome: "Victor Pimenta",
      //contribuicao: "Backend e Segurança",
      //imagem: victorImage,
      //github: "https://github.com/victorpimenta",
      //linkedin: "https://www.linkedin.com/in/victorpimenta",
     // instagram: "https://www.instagram.com/victorpimenta",
    //},  
];

const Sobre = () => {
  return (
    <div className="sobre-nos-container">
      <Navbar />
      <img src={Logo} alt="Adopet Logo" className="logo-img-sobre" />
      <p className="apresentacao">Conheça os desenvolvedores do site</p>
      <div className="devs-grid">
        {devs.map((dev, index) => (
          <div key={index} className="dev-card">
            <img 
              src={dev.imagem} 
              alt={dev.nome} 
              className="dev-foto"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/150"; 
              }}
            />
            <h2>{dev.nome}</h2>
            <p>{dev.contribuicao}</p>
            <div className="redes-sociais">
              <a href={dev.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href={dev.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sobre;