require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado ao MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => console.error("Erro ao conectar no Mongo:", err));

  const User = require("./models/User");

app.post("/register", async (req, res) => {
  const { nome, email, cpf, senha } = req.body;

  if (!nome || !email || !cpf || !senha) {
    return res.status(400).json({ error: "Preencha todos os campos!" });
  }

  try {
    const existe = await User.findOne({ email });
    if (existe) {
      return res.status(409).json({ error: "Usuário já existe com esse e-mail!" });
    }

    const novoUsuario = new User({ nome, email, cpf, senha });
    await novoUsuario.save();

    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar", detalhe: error.message });
  }
});