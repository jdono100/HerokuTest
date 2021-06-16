const express = require('express');
const path = require('path');
const Table = require ('./lib/table.js')
// Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3001;
const reservations = []
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/api/tables', (req, res) => res.json(reservations))
app.post('/api/tables', (req, res) => {
    const newReservation = req.body
    console.log(newReservation);
    reservations.push(newReservation);
    res.json(newReservation);
  });
 app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));