// Import model
const { Motto } = require("../../models");

module.exports = {
  // Read by all
  getAllMotto: (req, res) => {
    Motto.find()
      .then((result) => {
        res.status(200).json({
          message: "Sukses mendapatkan data Motto",
          result,
        });
      })
      .catch((error) => {
        res.status(404).json("data tidak ditemukan", error);
      });
  },
  // Read by id
  getMottoById: async (req, res) => {
    const mottoRooms = await Motto.findById(req.params.id);
    try {
      res.json({
        message: "Sukses mendapatkan data Motto berdasarkan ID",
        mottoRooms,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  // Create
  postMotto: async (req, res) => {
    const mottoRooms = await Motto.create(req.body);
    try {
      res.json({
        message: "Sukses menambahkan data Motto",
        mottoRooms,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  // Update by id
  updateMottoById: async (req, res) => {
    const mottoRooms = await Motto.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    try {
      res.json({
        message: "Sukses update data Motto",
        mottoRooms,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // Delete by id
  deleteMottoById: async (req, res) => {
    const Motto = await Motto.findByIdAndDelete(req.params.id, req.body);
    try {
      res.json({
        message: "Sukses hapus data Motto",
        Motto,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
