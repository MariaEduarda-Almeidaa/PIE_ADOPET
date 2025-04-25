import React from "react";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo.png";

const Home = () => {
  return (
    <div className="login-container">
    <img src={Logo} alt="Adopet Logo" className="logo-img" />
      <div className="Login-form">
        <label htmlFor="CPF">CPF</label>
        <input
          text="CPF"
          id="CPF"
          placeholder="Digite seu CPF"
          className="input-field"
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          className="input-field"
        />
        <button className="login-button">OK</button>
        <div className="signup-link">Não tenho conta</div>
        <hr className="divider" />
        <button className="google-button">
          <FaGoogle style={{ marginRight: "8px", color: "white" }} />
          Conectar com o Google
        </button>
      </div>
    </div>
  );
};

export default Home;
