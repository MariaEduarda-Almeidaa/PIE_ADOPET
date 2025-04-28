const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  foto: { type: String },
  numero: { type: String },
  cpf: { type: String, default: null }, // Permite valores nulos
  senha: { type: String },
}, {
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);