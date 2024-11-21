var a=5; //or let a=5;
var b=6;
var ans = a+b;
console.log(ans);

const name = 'Danish'; //const is a variable which always needs to assign a value
console.log(name);
console.log(typeof name); //typeof is a keyword which is used to find the type of the variable

//Array
const cars = ["BMW", "Mercedes", "Audi"]; //Array is a collection of variables
cars.push("Honda");
console.log(cars);
console.log(cars[1]); 


//if else
var hour = 10;
if(hour < 10){
    console.log("Good Morning");
}
else{
    console.log("Good Afternoon");
}


//for loop
var count = 10;
for(var i=1; i<=count; i++){
    console.log(i);
}



// object -> object is a collection of variables and functions
// It stores in key & values (key : values)
const person = { 
    name: "Danish",
    age: 20,
    gender: "Male",
    hobbies: ["Criket","Coding","Football"]
};

console.log(person.name);
console.log(person.hobbies);




//function
//filter -> filter is a function which is used to filter the array
const ages = [32,33,16,40];
const result = ages.filter(checkAge);

function checkAge(age) {
    return age >= 18;
}

console.log(result);




// prompt -> prompt is a function which is used to take input from the user
var prompt = require('prompt');
const age = prompt("Please enter your age:");
if(age<18){
    console.log("You are not eligible to vote");
}
else{
    console.log("You are eligible to vote");
}