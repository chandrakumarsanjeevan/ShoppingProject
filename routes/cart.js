const express = require('express');
const router = express.Router();

let cart = [];

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/add', (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({ message: 'Item added', cart });
});

router.post('/clear', (req, res) => {
  cart = [];
  res.json({ message: 'Cart cleared' });
});

module.exports = router;
