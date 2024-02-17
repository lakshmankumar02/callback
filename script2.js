/*************** Functions in JavaScript ***************/

// A function is a block of code that performs a specific task. Dividing a 
// comples problem into smaller chunks makes your program easy to understand 
// and reusable. The syntax of function is as follows

// function name(parameter1, parameter2, parameter3){
//     // code to be executed
//     return something
// }

const a = 12;
const b = 4;
sumOfTwoNumbers(a, b);
// const aPlusB = a + b;
// console.log("the result is", aPlusB);

const c = 2;
const d = 24;
sumOfTwoNumbers(c, d);
// const cPlusD = c + d;
// console.log("the result is", cPlusD);


const e = 5;
const f = 14;
sumOfTwoNumbers(e, f);  // function calling
// const ePlusF = e + f;
// console.log("the result is", ePlusF);

// function creation or declaration
function sumOfTwoNumbers(a, b){
    const sum = a + b;
    console.log("the result is", sum);
    return sum;
    // ab ye function is sum ko return karega 
}

const returned = sumOfTwoNumbers(3, 4); //yaha par bhi ye function call ho raha hai 
// to yaha bhi function execute hoga uske baad isme jo return value hai wo returned 
// ko assign ho jayega 
console.log("returned is", returned);

/********* Function Expression *********/
// A function expression is very similar to and has almost the same syntax as a 
// function declaration. The main difference between a function expression and a 
// function declaration is the function name, which an be omitted in function 
// expressions to create anonymous functions.

// Normal functions me hoisting hota hai usko kahi bhi declare karke kahi se bhi 
// call kar sakte hai magar function expression me declare karne ke baad hi call 
// kar sakte hai isme hoisting ki property nahi hoti hai 

// const variable = function (parameter1, parameter2){
//     // code to be executed
//     return something
// }

const square = function (num){
    return num * num;
}

console.log(square);
console.log(square(8));

/********* Nested Function *********/
// We may nest a function within another function. The nested (inner) function is 
// private to its containing (outer) function.

function addSquares(a, b){
    // const sa = squares(a);
    // const sb = squares(b);
    function squares(x){
        return x * x;
    }
    return squares(a) + squares(b);
    // return sa + sb;
}

const ad = addSquares(2, 3); // returns 13
const bc = addSquares(3, 4); // returns 25

console.log(ad);
console.log(bc);

