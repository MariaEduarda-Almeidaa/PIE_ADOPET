import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo.png";
import { auth, provider } from "../../server/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  
  function formatarCpf(valor) {
    valor = valor.replace(/\D/g, "");
    valor = valor.slice(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
  }

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleLogin = async () => {
    if (!cpf || !senha) {
      setMensagem("❌ Preencha todos os campos!");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpf,
          senha,
        }),
      });

      const data = await resposta.json();

      if (data.error) {
        setMensagem(`❌ ${data.error}`);
      } else {
        setMensagem("✅ Login realizado com sucesso!");
        // Redireciona para a página inicial após login bem-sucedido
        navigate('/');
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("❌ Erro ao conectar com o servidor.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuário logado:", user);
  
      await fetch("http://localhost:5000/google-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: user.displayName,
          email: user.email,
          foto: user.photoURL,
        }),
      });
  
      alert(`✅ Bem-vindo, ${user.displayName}!`);
      navigate('/'); // Redireciona após login com Google
    } catch (error) {
      console.error("Erro ao fazer login com Google:", error);
      alert("❌ Erro ao conectar com o Google.");
    }
  };
  
  return (
    <div className="login-container">
      <img src={Logo} alt="Adopet Logo" className="logo-img" />
      <div className="Login-form">
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          id="cpf"
          placeholder="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(formatarCpf(e.target.value))}
          className="input-field"
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="input-field"
        />

        <button className="login-button" onClick={handleLogin}>
          OK
        </button>

        {mensagem && <p style={{ marginTop: "10px" }}>{mensagem}</p>}

        <div 
          className="signup-link" 
          onClick={() => navigate('/register')}
        >
          Não tenho conta
        </div>

        <hr className="divider" />
        <button className="google-button" onClick={handleGoogleLogin}>
          <FaGoogle style={{ marginRight: "8px", color: "white" }} />
          Conectar com o Google
        </button>
      </div>
    </div>
  );
};

export default Login;