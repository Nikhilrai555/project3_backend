// middlewares/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/users');

const auth = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); 

  if (!token) {
    console.log('Token missing');
    return res.status(401).json({ error: 'Not authorized, token missing' });
  }

  try {
    // Log the token
    console.log('Token:', token);

    const decoded = jwt.verify(token, 'test');

    // Log the decoded token data
    console.log('Decoded token:', decoded);

    const user = await User.findById(decoded.id);

    if (!user) {
      console.log('User not found');
      throw new Error('User not found');
    }

    req.user = user;
    console.log(req.user)
    next();
  } catch (err) {
    console.log('Error:', err); // Log the error
    res.status(401).json({ error: 'Not authorized' });
  }
};


module.exports = auth;
