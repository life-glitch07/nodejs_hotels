const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your database name(local host)
// const mongoURL ='mongodb+srv://lifeglitch07:y2cT0e0HLVk7ssXD@cluster0.xsi0t.mongodb.net/' // (hosting on db on mongo db server)
const mongoURL = process.env.MONGODB_URL;
// const mongoURL = process.env.MONGODB_URL_LOCAL 
/*
// Set up MongoDB connection
mongoose.connect(mongoURL,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
*/


// Set up MongoDB connection (no need for deprecated options)
mongoose.connect(mongoURL)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log('MongoDB connection error:', err);
  });


// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;


// Define event listeners for database connection
/* 
db.on('connected',()=>{
    console.log('MongoDB connected successfully');
});
*/

db.on('error',()=>{
    console.log('MongoDB connection error');
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected successfully');
});


// Export the database connection
module.exports = db;