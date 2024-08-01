// /models/tradeCalls.js
const mongoose = require('mongoose');


const tradeSchema = new mongoose.Schema({
  ticker: String,
  type: String,
  description: String,
  price: String,
  tp: String,
  sl: String,
  strategy: String
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
