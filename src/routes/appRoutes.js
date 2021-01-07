const express = require('express');

//App Router
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).json({ status: 'success', message: 'Hi there!' });
});

module.exports = router;
