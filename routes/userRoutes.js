
const express = require('express');
const authMiddleware = require('../middleware/auth');
const {signin,signup,getMyData,getLeaderboard,getUsersDataById} = require('../controllers/users')
const router = express.Router();

router.post('/signin',signin)
router.post('/signup',signup)
router.get('/me',authMiddleware,getMyData)
router.get('/leaderboard',getLeaderboard)
router.get('/:userId',getUsersDataById)


module.exports = router