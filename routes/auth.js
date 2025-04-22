const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username } = req.body;
  if (username) {
    res.status(200).json({ success: true, username });
  } else {
    res.status(400).json({ success: false, message: 'Username is required' });
  }
});

module.exports = router;
