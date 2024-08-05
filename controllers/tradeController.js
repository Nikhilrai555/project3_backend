

const Trade = require('../models/tradeCalls');

const getAllTrades = async (req, res) => {
  try {
    const trades = await Trade.find();
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trades' });
  }
};

const createTrade = async (req, res) => {
  try {
    const newTrade = new Trade(req.body);
    await newTrade.save();
    res.status(201).json(newTrade);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create trade' });
  }
};

module.exports = {
  getAllTrades,
  createTrade,
};
