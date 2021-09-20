/* eslint-disable object-curly-spacing */
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(
  'sk_test_51JblwLGcgWhBsiYxdHtgmoypd7Lo0x6Fid2XN1zjCVxc7Hk6XRV7Vq1nGSJzKVLHI7TjYkxsMGQXXfwvHSnkn6qR00G6xEnH0f'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment request -- ', total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: 'EUR',
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

//  http://localhost:5001/belen-ciaga/us-central1/api
