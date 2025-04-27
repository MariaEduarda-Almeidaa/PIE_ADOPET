import React from "react";
import "./Sobre.css"; // Vamos criar esse CSS também
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from "../../Components/Navbar/Navbar"; // Se quiser manter a navbar

const devs = [
    {
      nome: "Gabriel Fiorio",
      contribuicao: "Infraestrutura e Backend",
      imagem: require("../../assets/Devs/gabriel-fiorio.jpg"),
      github: "https://github.com/gabrielfiorio", // exemplo
      linkedin: "https://www.linkedin.com/in/gabrielfiorio",
      instagram: "https://www.instagram.com/gabrielfiorio",
    },
    {
      nome: "Maria Eduarda Fernandes",
      contribuicao: "Frontend e UI/UX",
      imagem: require("../../assets/Devs/maria-eduarda-fernandes.jpg"),
      github: "https://github.com/mariaeduardafernandes",
      linkedin: "https://www.linkedin.com/in/mariaeduardafernandes",
      instagram: "https://www.instagram.com/mariaeduardafernandes",
    },
    {
      nome: "Rayssa Ferreira",
      contribuicao: "Frontend e Integrações",
      imagem: require("../../assets/Devs/rayssa.jpg"),
      github: "https://github.com/rayssaferreira",
      linkedin: "https://www.linkedin.com/in/rayssaferreira",
      instagram: "https://www.instagram.com/rayssaferreira",
    },
    {
      nome: "Samantha Silva",
      contribuicao: "Documentação e Banco de Dados",
      imagem: require("../../assets/Devs/Samantha.png"),
      github: "https://github.com/samanthasilva",
      linkedin: "https://www.linkedin.com/in/samanthasilva",
      instagram: "https://www.instagram.com/samanthasilva",
    },
    {
      nome: "Victor Pimenta",
      contribuicao: "Backend e Segurança",
      imagem: require("../../assets/Devs/victor-pimenta.jpg"),
      github: "https://github.com/victorpimenta",
      linkedin: "https://www.linkedin.com/in/victorpimenta",
      instagram: "https://www.instagram.com/victorpimenta",
    },  
];

const Sobre = () => {
  return (
    <div className="sobre-nos-container">
      <Navbar />
      <h1 className="titulo-sobre">Sobre Nós</h1>
      <div className="devs-grid">
        {devs.map((dev, index) => (
          <div key={index} className="dev-card">
            <img src={dev.imagem} alt={dev.nome} className="dev-foto" />
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
