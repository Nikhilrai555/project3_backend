
const express = require('express');
const authMiddleware = require('../middleware/auth');
const { getAllTrades, createTrade } = require('../controllers/tradeController');
const router = express.Router();

router.get('/', getAllTrades);
router.post('/',authMiddleware, createTrade);

module.exports = router;
