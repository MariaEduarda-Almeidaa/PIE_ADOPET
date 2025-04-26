import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Register.css";
import { FaGoogle } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo.png";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="Register-container">
        <img src={Logo} alt="Adopet Logo" className="logo-img" />
          <div className="Register-form">
            <label htmlFor="CPF">CPF</label>
            <input
              text="CPF"
              id="CPF"
              placeholder="Digite seu CPF"
              className="input-field"
            />
            <label htmlFor="email">E-mail</label>
            <input
              text="email"
              id="email"
              placeholder="Digite seu e-mail"
              className="input-field"
            />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="input-field"
            />
            <label htmlFor="confirmar senha">Confirmar Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Confirme sua senha"
              className="input-field"
            />
            <button className="login-button">OK</button>

            <hr className="divider" />
            <button className="google-button">
              <FaGoogle style={{ marginRight: "8px", color: "white" }} />
              Conectar com o Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
