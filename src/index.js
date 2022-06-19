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
  res.send('Hello World');
});

// mongodb connection
mongoose
  .connect('mongodb://localhost:27018/TP2-DACS-DB')
  .then(() => console.log('Connected to TP2 DataBase'))
  .catch((error) => console.error(error));

app.listen(port, () => console.log(`Server listening on port ${port}`));
