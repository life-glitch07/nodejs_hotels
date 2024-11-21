const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // stored in req.body 


app.get('/',function(req,res){
    res.send('Welcome to our hotel');
})

app.get('/chicken', (req,res)=> {
    res.send('Sure Sir, I would love to serve Chicken')
})
 


// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the router files
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(3000, function(){
    console.log('Server is running on port 3000');
})