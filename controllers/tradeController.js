const Trade = require('../models/tradeCalls');
const User = require('../models/users');

// Function to calculate and update the total PnL for a user
const updateUserTotalPnl = async (userId) => {
  try {
    // Fetch all trades for the user
    const trades = await Trade.find({ creator: userId });

    // Calculate total PnL
    const totalPnl = trades.reduce((sum, trade) => sum + trade.pnl, 0);
    console.log(totalPnl)
    // Update user's total PnL
    await User.findByIdAndUpdate(userId, { totalPnl }, { new: true });
  } catch (err) {
    console.error('Error updating total PnL:', err);
  }
};

const getAllTrades = async (req, res) => {
  try {
    //here
    const trades = await Trade.find().populate('creator', 'name');
    res.json(trades);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trades' });
  }
};

const createTrade = async (req, res) => {
  try {
    // Create a new trade linked to the user
    const newTrade = new Trade({ ...req.body, creator: req.user._id });

    await newTrade.save();

    // Update the user's total PnL after saving the trade
    await updateUserTotalPnl(req.user._id);

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

