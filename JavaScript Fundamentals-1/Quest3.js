// You are working on a currency conversion application. Write a program that has a variable which stores the
// amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current
// exchange rate of 1 USD = 82 INR.

let amount = 850;
let rate = 82;

let result = amount / rate;

console.log(`${amount} INR is ${result} USD.`);