
const mongoose = require('mongoose');


const tradeSchema = new mongoose.Schema({
  ticker: String,
  type: String,
  description: String,
  price: Number,
  tp: Number,
  sl: Number,
  pnl: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
