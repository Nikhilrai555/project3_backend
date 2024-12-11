

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/users') 
const Trade = require('../models/tradeCalls')

 const signin = async (req,res) => {
    const {email,password} = req.body
try{
const existingUser = await User.findOne({email})
if(!existingUser) return res.status(404).json({message:"User does not exist"}) 
const isPasswordCorrect = await bcrypt.compare(password,existingUser.password)
if(!isPasswordCorrect) return res.status(400).json({message:"Invalid credentials"})
const token =jwt.sign({email:existingUser.email,id:existingUser._id},"test",{expiresIn:"1h"})
res.status(200).json({result :existingUser,token})     
}catch(error){
res.status(500).json({message:"Something went wrong."})
console.error(error)


}
}

 const signup = async (req,res)=>{
const {email,password,confirmPassword ,firstName,lastName} = req.body

try{
    const existingUser = await User.findOne({email})
    if(existingUser) return res.status(400).json({message:"User already exists."})
    if(password !== confirmPassword) return res.status(400).json({message:"Passwords do not match."})
    const hashedPassword = await bcrypt.hash(password,12)
    const result = await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`})
    const token =jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"1h"})
    res.status(200).json({result,token})

}catch(error){
    res.status(500).json({message:"Something went wrong."})
    console.error(error)
}}
//only for fetching own data and tradecalls using token.
const getMyData = async (req, res) => {
  try {
    // Fetch user data
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Fetch trade calls created by the user
    const trades = await Trade.find({ creator: req.user._id });

    // Combine user data with trades
    const userData = {
      name: user.name,
      email: user.email,
      totalPnl: user.totalPnl,
      trades, // Include the list of trades
    };

    res.status(200).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
};
//To get any users profile+tradecalls using id.
const getUsersDataById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).select('-password'); // Exclude password for security
    const trades = await Trade.find({ creator: userId }); // Find trades created by the user

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const userData = {
      name: user.name,
      email: user.email,
      totalPnl: user.totalPnl,
      trades, // Include the list of trades
    };

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPnl: -1 }); // Sort by totalPnl in descending order
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard data' });
  }
};  


module.exports = {signin,signup,getMyData,getLeaderboard,getUsersDataById}