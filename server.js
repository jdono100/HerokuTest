const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
var PORT = process.env.PORT || 3001;

// Empty array for reservations to be added
const reservations = [
  {
    name: 'Jared Donovan',
    id: '6',
    phone: '8153153513',
    email: 'jdono100@gmail.com'
  }
];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/api/tables', (req, res) => res.json(reservations));

app.post('/api/tables', (req, res) => {
    const newReservation = req.body;

    console.log(newReservation);

    reservations.push(newReservation);
    res.json(newReservation);
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));