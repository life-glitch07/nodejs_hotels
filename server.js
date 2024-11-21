/* function add(a,b){
    return a+b;
}   

// another way to write function
 var add = function(a,b){
    return a+b;
} 

// arrow function (another way)
// var add = (a,b) => {return a+b;} 
//or
var add = (a,b) => a+b;

var result = add(5, 11);
console.log(result);


//shorthand function
(function(){
    console.log("Danish");
})(); 
*/


// callback function - function that is passed as an argument to another function
function callback(){
    console.log("callback function");
}

const add = function(a,b,callback){
    var result = a+b;
    console.log('result:' + result)
    callback();
}

add(5, 11, callback);


// callback function is used to make sure that a function is called after another function is executed
// differents ways to write function 
add(2,3,function(){
    console.log("add completed");
});

add(2,3, () => console.log("add completed")); //normally we use this way