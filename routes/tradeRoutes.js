// /routes/tradeRoutes.js
const express = require('express');
const auth = require('../middleware/auth');
const { getAllTrades, createTrade } = require('../controllers/tradeController');
const router = express.Router();

router.get('/', getAllTrades);
router.post('/',auth, createTrade);

module.exports = router;
