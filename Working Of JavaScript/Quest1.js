/* Write a function called "addNumbers() that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting. */

let result = addNumbers(10, 5);

console.log(result);

function addNumbers(num1, num2)
{
    return num1 + num2;
}