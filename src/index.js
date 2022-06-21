const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/player');

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api', playerRoutes);

// routes
app.get('/', (req, res) => {
  res.send('GET INTO /API/PLAYERS');
});

// mongodb connection
//if you want to use your connection local you change localhost instead of mongo
mongoose
  .connect('mongodb://mongo:27017/TP2-DACS-DB')
  .then(() => console.log('Connected to TP2 DataBase'))
  .catch((error) => console.error(error));

app.listen(port, () => console.log(`Server listening on port ${port}`));
