/* eslint-disable no-console */
import express from 'express';
import { connect } from 'mongoose';
import { urlencoded, json } from 'body-parser';
import productRouter from './routes/products';

const app = express();
const PORT = process.env.PORT || 6600;

connect(
  'mongodb://127.0.0.1:27017/express',
  { useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    console.log('Successfully connected mongoDB');
  },
);
// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }));

// parse application/json
app.use(json());

app.use('/api/products', productRouter);

app.listen(PORT, () => {
  console.log(`Server started and running on PORT ${PORT}`);
});

module.exports = app;
