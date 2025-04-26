const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numero: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);