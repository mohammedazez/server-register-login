var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Selamat datang di MongoDB express generator menggunakan JWT dan bcrypt");
});

module.exports = router;
