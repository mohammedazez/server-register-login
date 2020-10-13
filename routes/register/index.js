var express = require("express");
var router = express.Router();

// Import controller
const {
  getAllRegister,
  postRegister,
  getRegisterById,
  updateRegisterById,
  deleteRegisterById,
  getRegisterInClass,
  loginRegister,
} = require("./controller");

// Import auth helper
const { auth } = require("../../helper/auth")
// Auth adalah penengahnya, jika tidak lolos di auth maka "Hallo user member tidak muncul"
router.get("/me", auth, (req, res) => {
  res.json({
    message: "hallo Member register",
    user: req.body
  })
})

/* GET users listing. */
router.get("/", getAllRegister);
router.get("/:id", getRegisterById);
router.post("/", postRegister);
router.put("/:id", updateRegisterById);
router.delete("/:id", deleteRegisterById);
router.get("/class/:id", getRegisterInClass);
router.post("/login", loginRegister);


// Ekspor
module.exports = router;
