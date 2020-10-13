// Import mongoose
const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  password: String,
  gender: String,
  address: String,
  skill: String,
  motto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "motto",
  },
});

// Buat nama databasenya
const Register = mongoose.model("register", RegisterSchema);

// Ekspor
module.exports = Register;
