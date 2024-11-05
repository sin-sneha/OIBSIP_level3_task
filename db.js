const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://sneha:root@cluster0.opdyw.mongodb.net/pizza';

mongoose.connect(mongoURL)  // Removed deprecated options

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connection successful');
});

db.on('error', (error) => {
    console.error('MongoDB connection failed:', error);
});

// Fix module.exports typo
module.exports = mongoose;
