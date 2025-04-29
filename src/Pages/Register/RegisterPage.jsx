import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Register.css";
import { FaGoogle } from "react-icons/fa";
import Logo from "../../assets/Logo/Logo.png";
import { auth, provider } from "../../server/firebase"; // ajusta o caminho se precisar
import { signInWithPopup } from "firebase/auth";

const Register = () => {

  // Função para formatar o CPF
  function formatarCpf(valor) {
    valor = valor.replace(/\D/g, ""); // Remove tudo que não é número
    valor = valor.slice(0, 11); // Limita para 11 dígitos
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
  }

  // Função para validar CPF real
  function validarCpf(cpf) {
    cpf = cpf.replace(/\D/g, ""); // Remove pontos e traços
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;

    return true;
  }

  // Função para formatar o telefone
function formatarNumero(valor) {
  valor = valor.replace(/\D/g, ""); // Remove tudo que não é número
  valor = valor.slice(0, 11); // Limita para 11 dígitos
  valor = valor.replace(/(\d{2})(\d)/, "($1) $2"); // Coloca parênteses nos 2 primeiros
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca traço depois de 5 números
  return valor;
}

const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuário logado:", user);
    alert(`✅ Bem-vindo, ${user.displayName}!`);

    // Agora, envia para o backend também:
    await fetch("http://localhost:5000/google-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: user.displayName || "Anônimo",
        email: user.email,
        foto: user.photoURL,
      }),
    });

  } catch (error) {
    console.error("Erro ao fazer login com Google:", error);
    alert("❌ Crie uma conta primeiro!");
  }
};

  // Estados
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  // Função de cadastro
  const handleRegister = async () => {

    setTimeout(() => {
      setMensagem("");
    }, 5000); //5 segundos
    
    if (!cpf || !nome || !email || !numero || !senha || !confirmarSenha) {
      setMensagem("❌ Preencha todos os campos!");
      return;
    }
  
    if (senha !== confirmarSenha) {
      setMensagem("❌ As senhas não coincidem!");
      return;
    }
  
    if (!validarCpf(cpf)) {
      setMensagem("❌ CPF inválido!");
      return;
    }
  
    try {
      const resposta = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          numero, // <-- AGORA ENVIA NÚMERO!
          cpf,
          senha,
        }),
      });
  
      const data = await resposta.json();
  
      if (data.error) {
        setMensagem(`❌ ${data.error}`);
        setTimeout(() => setMensagem(""), 5000); // LIMPA depois de 5 segundos
      } else {
        setMensagem("✅ Usuário cadastrado com sucesso!");
        setTimeout(() => setMensagem(""), 5000); // LIMPA depois de 5 segundos
        setCpf("");
        setNome("");
        setEmail("");
        setNumero("");
        setSenha("");
        setConfirmarSenha("");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("❌ Erro ao conectar com o servidor.");
      setTimeout(() => setMensagem(""), 5000); // LIMPA depois de 5 segundos
    }
  };
  
  return (
    <div>
      <Navbar />
      <div>
      <div id="register-section" className="Register-container">
          <img src={Logo} alt="Adopet Logo" className="logo-img-register" />
          <p className="apresentacao">Primeiro comece criando uma conta!</p>
          <div className="Register-form">
            <label htmlFor="cpf">CPF</label>
            <div className="input-com-tooltip">
            <input
              type="text"
              id="cpf"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(formatarCpf(e.target.value)) && (validarCpf(e.target.value))}
              className="input-field"
            />
            <span className="tooltip-icon">!</span>
            <div className="tooltip-text">Utilizamos CPF para garantir segurança durante as adoções e doações.</div>
            </div>

            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="input-field"
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />

            <label htmlFor="numero">Número de telefone</label>
            <div className="input-com-icone">
            <img
              src="https://flagcdn.com/w40/br.png"
              alt="Bandeira do Brasil"
              className="icone-bandeira"
            />
            <input
              type="numero"
              id="numero"
              placeholder="Digite seu número"
              value={numero}
              onChange={(e) => setNumero(formatarNumero(e.target.value))}
              className="input-field"
            />
            </div>

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="input-field"
            />

            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              placeholder="Confirme sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="input-field"
            />

            <button className="login-button" onClick={handleRegister}>
              OK
            </button>

            {mensagem && <p style={{ marginTop: "10px" }}>{mensagem}</p>}

            <hr className="divider" />
            <button className="google-button" onClick={handleGoogleLogin}>
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