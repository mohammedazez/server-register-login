var express = require("express");
var router = express.Router();

// Import controller
const {
  getAllMotto,
  postMotto,
  getMottoById,
  updateMottoById,
  deleteMottoById,
} = require("./controller");

/* GET users listing. */
router.get("/", getAllMotto);
router.get("/:id", getMottoById);
router.post("/", postMotto);
router.put("/:id", updateMottoById);
router.delete("/:id", deleteMottoById);

module.exports = router;
