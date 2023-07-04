// index.js

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Connected to Database');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
