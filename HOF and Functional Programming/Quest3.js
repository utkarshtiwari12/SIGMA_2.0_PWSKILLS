/* Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees. */

const listItemsPrice = {
    box: 12,
    pen: 2,
    mouse: 5,
    keyboard: 10,
    cabinet: 40
};

const conversionRate = 80;

const indianListPrice = new Map();

for (let key in listItemsPrice)
{
    indianListPrice.set(key, listItemsPrice[key]*conversionRate);
}

console.log(indianListPrice);