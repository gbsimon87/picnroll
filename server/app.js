const express = require('express');
const path = require('path');
const cors = require('cors');

const products = require('./routes/products');

const app = express();
const port = 5000;

app.use(cors());

// Declare '/public' folder as the static assets folder
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.send('This is the / route');
});

app.use('/products', products);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('500 - Something broke!');
});

app.use(function (req, res, next) {
  res.status(404).send("40 -  Sorry can't find that!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
