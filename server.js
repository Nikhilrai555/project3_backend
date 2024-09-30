

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const tradeRoutes = require('./routes/tradeRoutes');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
dotenv.config();
const app = express();

app.use(bodyParser.json()); 
app.use(cors()); 
mongoose.connect(process.env.connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/trades', tradeRoutes);
app.use('/user', userRoutes)


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
