

const Trade = require('../models/tradeCalls');

const getAllTrades = async (req, res) => {
  try {
    const trades = await Trade.find().populate('creator', 'email');
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trades' });
  }
};

const createTrade = async (req, res) => {
  try {
    console.log(req.user._id)
    const newTrade = new Trade({...req.body, creator: req.user._id ,});
    console.log(newTrade)
    await newTrade.save();
    res.status(201).json(newTrade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create trade' });
  }
};

module.exports = {
  getAllTrades,
  createTrade,
};
