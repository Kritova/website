// server/routes/controllers/helloController.js
const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Kritova backend!' });
});

module.exports = router;
