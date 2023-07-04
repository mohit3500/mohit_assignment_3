// index.js

const express = require('express');
const connectToDatabase = require('./app/utils/db');
const userRoutes = require('./app/routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
