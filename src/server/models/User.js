const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numero: { type: String, required: false, unique: false },
  cpf: { type: String, required: false, unique: false },
  senha: { type: String, required: false },
  foto: { type: String }, // <-- novo campo
}, {
  timestamps: true
});

module.exports = mongoose.model("User", UserSchema);