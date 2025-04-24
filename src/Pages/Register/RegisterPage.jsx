import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Register.css";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="Register-container">
          <h1 className="Logo-Home">Adopet</h1>
          <div className="Register-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
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
            <button className="google-button">Conectar com o Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
