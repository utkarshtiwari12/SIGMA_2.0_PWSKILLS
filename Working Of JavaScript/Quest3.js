/* Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting. */

function addNums(num1, num2)
{
    console.log("Before assignment LocalVar : " + result);

    var result = num1 + num2;

    return result;
}

console.log(addNums(5, 3));