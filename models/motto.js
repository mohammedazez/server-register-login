// Import
const mongoose = require("mongoose");

const MottoSchema = new mongoose.Schema({
  motto: {
    type: String,
    required: true,
  },
  biography: String,
  age: Number,
});

// Buat nama databasenya
const Motto = mongoose.model("motto", MottoSchema);

// Ekspor
module.exports = Motto;
