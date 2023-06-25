
// This is your test secret API key.
// const stripe = require("stripe")('sk_test_51NM8u2LGQyKikAGGwFg0GZq0y1Wjc6w06B2RntwLuC28Tsy2QVuGNnP8gGOzx7MrW3z5ZAGArok6Y5bxSIQ76z5k00QE5QYyGV');

// app.use(express.static("public"));
// app.use(express.json());

// const calculateOrderAmount = (items) => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client
//   return 1400;
// };

// import stripe from 'stripe';

// const stripeInstance = stripe('sk_test_51NM8u2LGQyKikAGGwFg0GZq0y1Wjc6w06B2RntwLuC28Tsy2QVuGNnP8gGOzx7MrW3z5ZAGArok6Y5bxSIQ76z5k00QE5QYyGV');

import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51NM8u2LGQyKikAGGwFg0GZq0y1Wjc6w06B2RntwLuC28Tsy2QVuGNnP8gGOzx7MrW3z5ZAGArok6Y5bxSIQ76z5k00QE5QYyGV');

export const PostPayment = async (req, res) => {
    const calculateOrderAmount = (items) => {
        // Replace this constant with a calculation of the order's amount
        // Calculate the order total on the server to prevent
        // people from directly manipulating the amount on the client
        return 1400;
      };
      const { items } = req.body;
       // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
    }


// app.post("/create-payment-intent", async (req, res) => {
//   const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: calculateOrderAmount(items),
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// app.listen(4242, () => console.log("Node server listening on port 4242!"));