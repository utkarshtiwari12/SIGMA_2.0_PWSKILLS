// Suppose you are building a payment checkout page and must display the final price after the discount.
// Create a simple discount calculator that takes two values from the variables - the total cost and the
// discount percentage - and prints the discounted value.


let totalCost = 2000;
let discountPer = 20;

let discount = (totalCost * discountPer) / 100;

let result = totalCost - discount;

console.log(`The final price after discount is : Rs.${result}`);