
const express = require('express');
const authMiddleware = require('../middleware/auth');
const {signin,signup,getUserData} = require('../controllers/users')
const router = express.Router();

router.post('/signin',signin)
router.post('/signup',signup)
router.get('/me',authMiddleware,getUserData)

module.exports = router