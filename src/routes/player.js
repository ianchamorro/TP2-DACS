const { Router } = require("express");
const { PlayerController } = require("../controllers/PlayerController");
const playerSchema = require("../models/Player");

let playerController = new PlayerController();
const router = Router();

// GET ALL Players
router.get("/players", (req, res) => {
  playerController.getAll;
});

// GET Player by id
router.get("/players/:id", (req, res) => {
  const { id } = req.params;
  playerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// CREATE Player
router.post("/players", (req, res) => {
  playerController.createPlayer;
});

// UPDATE Player
router.put("/players/:id", (req, res) => {
  playerController.updatePlayer;
});

// DELETE Player
router.delete("/players/:id", (req, res) => {
  playerController.deletePlayer;
});

module.exports = router;
