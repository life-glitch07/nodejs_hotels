// json parse as boject
/* 
const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // Output: John



// object to json conversion
const objectToConvert = {name: "Alice", age: 25};
const json = JSON.stringify(objectToConvert); 
console.log(json); // Output: {"name":"Alice","age":25} 
*/



//creating server using express module
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Welcome to my hotel.. How can I help you ?');
})

app.get('/chicken', (req,res)=> {
    res.send('Sure Sir, I would love to serve Chicken')
})

app.get('/idli', (req,res)=> {
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
    res.send(customized_idli)
})

// 3000 port no. shows our sever is active
app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})