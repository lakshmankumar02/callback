/*************** Arrow Functions in JavaScript ***************/

// The arrow function is one of the features introduced in the ES6 version of 
// JavaScript. It allows you to create functions in a cleaner way compared to 
// regular functions. Here are some of the valid syntax for arrow function:

// () => expression;
// (param1, paramN) => expression;
// () => {
//     statements 
// }

// (param1, paramN) => {
//     statements
// }

// Normal Function 
function sumOfTwoNumbers(a, b){
    const sum = a + b;
    console.log("the result is", sum);
    return sum;
}
sumOfTwoNumbers(2, 4);

// Arrow Function
// Anonymous function 
()=>{
    const sum = 3;
    console.log(sum);
}
(param1)=>{
    console.log(param1);
}
// we need to assign the function into a variable
// we can only used return keyword inside parenthesis 
const productOfTwoNumbers = (num1, num2) =>{
    return num1*num2;
}
// productOfTwoNumbers(4, 7);
console.log("productOfTwoNumbers", productOfTwoNumbers(4, 7));
// otherwise, write it like an expression 
const sumOfThreeNumbers = (num1, num2, num3) => num1 + num2 + num3;
// sumOfThreeNumbers(8, 12, 3);
console.log("sumOfThreeNumbers", sumOfThreeNumbers(8, 12, 3));





