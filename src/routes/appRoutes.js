const express = require('express');

//App Router
const router = express.Router();

router.route('/user').get((req, res) => {
  const { user } = req;
  let status = 'fail';
  if (user) status = 'success';
  res.status(200).json({ status, user });
});

router.route('/logout').get((req, res) => {
  req.logout();
  res
    .status(200)
    .json({ status: 'success', message: 'Logged out successfully' });
});

module.exports = router;
