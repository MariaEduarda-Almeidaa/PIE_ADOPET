import React from "react";
import "./Login.css";

const Home = () => {
  return (
    <div className="login-container">
      <h1 className="Logo-Home">Adopet</h1>
      <div className="Login-form">
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
        <button className="login-button">OK</button>
        <div className="signup-link">Não tenho conta</div>
        <hr className="divider" />
        <button className="google-button">Conectar com o Google</button>
      </div>
    </div>
  );
};

export default Home;
