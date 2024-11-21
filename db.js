const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your database name

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