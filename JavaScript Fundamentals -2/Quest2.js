/* Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all the products in a customer's cart as input parameters. The function should then calculate and return the total sum of all the product prices. This will help the company easily calculate the total cost of the customer's shopping cart. */

function calcTotalCartValue()
{
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }

    return sum;
}

let sumOfCart = calcTotalCartValue(30, 50, 80, 100);

console.log(`The totak cart value is : ${sumOfCart}`);