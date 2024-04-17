/*Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.
Use function expressions to define the function and call the function Aefore it is declared to demonstrate hoisting. */

// Function call before declaration
console.log("Product:", multiplyNumbers(5, 3));

// Function expression to define the function
var multiplyNumbers = function (num1, num2) {
  return num1 * num2;
};
