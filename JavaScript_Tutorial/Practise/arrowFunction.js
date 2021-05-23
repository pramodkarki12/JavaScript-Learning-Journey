// Arrow Function

/*

// simple regular function

const pramod = function() {
    console.log("Hello World");
}

// converting it into arrow function
const pramod = () => {
    console.log("Hello World");
}
pramod();

*/

// funtion returning something
// const greet = function() {
//     return "Good Morning";
// }
// console.log(greet);


// function in one line of code, however printing one line of code that do not require the braces in arrow function
// this function automatically call the return statement
// const greet = () => "Good Morning";

// if there is any object that you need to return,

// then we need to cover with the parenthesis.
// const greet = () => ({name : "Pramod", class : "12"});
// console.log(greet());


// we do not have to include the parathesis in function if there is only one argumejt, 
// but we have to include the parathesis if there is multiple parameters.

const greet = (name, ending) => "Good Morning " + name + " " + ending;

console.log(greet("Pramod", "Bye !!!"));