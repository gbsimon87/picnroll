const express = require('express')
const router = express.Router()

const products = [
  {
    id: '1',
    name: 'Basketball',
    price: 25,
    slug: 'basketball',
    image: 'basketball.jpeg'
  },
  {
    id: '2',
    name: 'Basketball shoes',
    price: 120,
    slug: 'basketball-shoes',
    image: 'basketball_shoes.jpeg'
  },
  {
    id: '3',
    name: 'Basketball pump',
    price: 8,
    slug: 'basketball-pump',
    image: 'basketball_pump.jpeg'
  },
  {
    id: '4',
    name: 'Basketball net',
    price: 259,
    slug: 'basketball-net',
    image: 'basketball_net.jpeg'
  },
  {
    id: '5',
    name: 'Basketball jersey',
    price: 259,
    slug: 'basketball-jersey',
    image: 'basketball_jersey.jpeg'
  },
  {
    id: '6',
    name: 'Basketball socks',
    price: 259,
    slug: 'basketball-socks',
    image: 'basketball_socks.jpeg'
  },
]

// define the products/ page route
router.get('/', function (req, res) {
  res.send(products);
})

router.get('/:id', function (req, res) {
  const { id } = req.params;
  const product = products.find(product => product.id === id);
  res.send(product);
})

module.exports = router;
