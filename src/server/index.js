require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado ao MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao conectar no Mongo:", err));

// Modelo de usuário
const User = require("./models/User");


// URL POST: http://localhost:5000/register
app.post("/register", async (req, res) => {
  let { nome, email, numero, cpf, senha } = req.body;

  if (!nome || !email || !numero || !cpf || !senha) {
    return res.status(200).json({ error: "Preencha todos os campos!" });
  }

  cpf = cpf.replace(/\D/g, ""); // Remove pontos e traços do CPF

  try {
    // Busca todos usuários que têm o mesmo email, numero ou cpf
    const usuariosEncontrados = await User.find({
      $or: [
        { email: email },
        { numero: numero },
        { cpf: cpf },
      ],
    });

    if (usuariosEncontrados.length > 0) {
      // Agora verifica se existe usuário com TUDO igual: nome + email + numero + cpf
      const usuarioCompleto = await User.findOne({
        nome: nome,
        email: email,
        numero: numero,
        cpf: cpf,
      });

      if (usuarioCompleto) {
        return res.status(200).json({ error: "Usuário já cadastrado!" });
      }

      // Se não, checa individualmente
      const emailExistente = usuariosEncontrados.find((u) => u.email === email);
      if (emailExistente) {
        return res.status(200).json({ error: "E-mail já registrado!" });
      }

      const numeroExistente = usuariosEncontrados.find((u) => u.numero === numero);
      if (numeroExistente) {
        return res.status(200).json({ error: "Número de telefone já registrado!" });
      }

      const cpfExistente = usuariosEncontrados.find((u) => u.cpf === cpf);
      if (cpfExistente) {
        return res.status(200).json({ error: "CPF já registrado!" });
      }
    }

    // Se não existir nenhum usuário, cria o novo
    const senhaHash = await bcrypt.hash(senha, 10);

    const novoUsuario = new User({
      nome,
      email,
      numero,
      cpf,
      senha: senhaHash,
    });

    await novoUsuario.save();

    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno ao cadastrar." });
  }
});

// URL POST: http://localhost:5000/login
app.post("/login", async (req, res) => {
  let { cpf, senha } = req.body;

  if (!cpf || !senha) {
    return res.status(200).json({ error: "Preencha CPF e senha!" });
  }

  // Remove pontos e traço do CPF
  cpf = cpf.replace(/\D/g, "");

  try {
    const usuario = await User.findOne({ cpf });

    if (!usuario) {
      return res.status(200).json({ error: "CPF não encontrado!" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      return res.status(200).json({ error: "Senha incorreta!" });
    }

    res.status(201).json({ message: "Login realizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro interno no servidor." });
  }
});

// URL GET: http://localhost:5000/users
app.get("/users", async (req, res) => {
  try {
    const usuarios = await User.find({}, "-senha"); // "-senha" => exclui o campo senha
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
});


// URL DELETE: http://localhost:5000/user/id
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioDeletado = await User.findByIdAndDelete(id);

    if (!usuarioDeletado) {
      return res.status(200).json({ error: "Usuário não encontrado!" });
    }

    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar usuário." });
  }
});

// Nova rota para login com Google
app.post("/google-register", async (req, res) => {
  const { nome, email, foto } = req.body;

  console.log("Dados recebidos:", { nome, email, foto });

  if (!email || !nome) {
    console.error("Erro: Dados insuficientes.");
    return res.status(400).json({ error: "Dados insuficientes." });
  }
  if (!email || !nome) {
    return res.status(400).json({ error: "Nome e email são obrigatórios." });
  }
  
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Email inválido." });
  }

  try {
    console.log("Verificando se o usuário já existe...");
    let usuarioExistente = await User.findOne({ email });

    if (usuarioExistente) {
      console.log("Usuário já registrado:", usuarioExistente);
      return res.status(200).json({ message: "Usuário já registrado." });
    }

    console.log("Criando novo usuário...");
    const novoUsuario = new User({
      nome,
      email,
      foto,
      senha: "", // Senha vazia para login via Google
    });

    console.log("Salvando novo usuário no banco...");
    await novoUsuario.save();
    console.log("Usuário registrado com sucesso:", novoUsuario);

    res.status(201).json({ message: "Usuário registrado via Google!" });
  } catch (error) {
    console.error("Erro ao registrar usuário Google:", error);
    res.status(500).json({ error: "Erro interno ao registrar usuário Google." });
  }
});