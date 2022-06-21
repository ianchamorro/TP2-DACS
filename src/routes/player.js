const { Router } = require("express");
const { PlayerController } = require("../controllers/PlayerController");
const playerSchema = require("../models/Player");

let playerController = new PlayerController();
const router = Router();

// GET ALL Players
router.get("/players", playerController.getAll);

// GET Player by id
router.get("/players/:id", (req, res) => {
  const { id } = req.params;
  playerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// CREATE Player
router.post("/players", playerController.createPlayer);

// UPDATE Player
router.put("/players/:id", playerController.updatePlayer);

// DELETE Player
router.delete("/players/:id", playerController.deletePlayer);

module.exports = router;
