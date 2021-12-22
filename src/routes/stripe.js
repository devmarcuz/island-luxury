const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeResponse) => {
      if (stripeErr) return res.status(500).json(stripeErr);

      return res.status(200).json(stripeResponse);
    },
  );
});

module.exports = router;
