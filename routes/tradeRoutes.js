
const express = require('express');
const auth = require('../middleware/auth');
const { getAllTrades, createTrade } = require('../controllers/tradeController');
const router = express.Router();

router.get('/', getAllTrades);
router.post('/', createTrade);

module.exports = router;
