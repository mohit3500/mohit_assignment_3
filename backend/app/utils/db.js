// app/utils/db.js

const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://mohitsharma8864:mohitsharma@cluster0.fbv1o1i.mongodb.net/?retryWrites=true&w=majority/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
