const router = require("express").Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51Ltw3cSACuT8MOu86FV3ySa7Ox2kXLNKBDXlJkI92Ts4jPCpawkSqz61sTvOeYyJWiuN7Z4a0fENcoPp4WkSbX7G00Zl1Jsxjz');

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
