const { Router } = require('express');
const playerSchema = require('../models/Player');

const router = Router();

// GET ALL Players
router.get('/players', (req, res) => {
  playerSchema
    .find()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// GET Player by id
router.get('/players/:id', (req, res) => {
  const { id } = req.params;
  playerSchema
    .findById(id)
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// CREATE Player
router.post('/players', (req, res) => {
  const player = playerSchema(req.body);
  player
    .save()
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// UPDATE Player
router.put('/players/:id', (req, res) => {
  const { id } = req.params;
  const { name, position, team } = req.body;
  playerSchema
    .updateOne({ _id: id }, { $set: { name, position, team } })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

// DELETE Player
router.delete('/players/:id', (req, res) => {
  const { id } = req.params;
  playerSchema
    .deleteOne({ _id: id })
    .then(data => res.json(data))
    .catch(error => res.json({ message: error }));
});

module.exports = router;