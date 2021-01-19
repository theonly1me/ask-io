const express = require('express');
const stripe = require('stripe')(process.env.SECRET_KEY);

//App Router
const router = express.Router();

// const validateUser = (req, res, next) => {
//   if (!req.user) res.status(401).send('Unauthorized!');
//   next();
// };

router.route('/user').get((req, res) => {
  const { user } = req;
  // let status = 'fail';
  // if (user) status = 'success';
  res.status(200).json({ data: user });
});

router.route('/logout').get((req, res) => {
  req.logout();
  res
    .status(200)
    .json({ status: 'success', message: 'Logged out successfully' });
});

router.post('/payments', async (req, res) => {
  try {
    const {
      body: { id: source },
    } = req;
    const charge = await stripe.charges.create({
      source,
      currency: 'usd',
      amount: 500,
      description: 'Add 50 credits to AskIO account',
    });
    req.user.credits += 50;
    const user = await req.user.save();
    res.status(200).json({ data: user });
  } catch (ex) {
    console.error('An error occured: ', ex);
  }
});

module.exports = router;
