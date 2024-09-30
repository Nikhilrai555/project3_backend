
const mongoose = require('mongoose');


const tradeSchema = new mongoose.Schema({
  ticker: String,
  type: String,
  description: String,
  price: String,
  tp: String,
  sl: String,
  strategy: String,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
