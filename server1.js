var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);
fs.appendFile('greeting.txt', 'Hello ' + user.username + '!\n', ()=>{
    console.log('file has been saved');
});

console.log(fs); // this tells us all the methods available in the fs module




// import modules from other files
const notes = require('./notes.js');
console.log('server file is available');
var age = notes.age;
var result = notes.addNumber(age+18,10);
console.log(age);
console.log('result is now ' +result);



// lodash is a library that provides utility functions for common programming tasks
var _ = require('lodash');
var data = ["person", "person", 1, 2, 1, 2, 'name','age',2];
var filter = _.uniq(data); // filter out duplicate values
console.log(filter);
