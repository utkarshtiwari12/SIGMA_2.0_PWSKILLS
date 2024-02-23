/* You are working for an e-commerce client, and they provide you with an array of objects containing product names and their prices. Your task is to create a function that finds the product with the maximum amount (the highest price) and the product with the minimum amount(the lowest price) and prints them to the console. */


function findMaxMinPrice(products)
{
    let maxPriceProd = products[0];
    let minPriceProd = products[0];

    for (let product of products)
    {
        if (product.price > maxPriceProd.price)
        {
            maxPriceProd = product;
        }
        if (product.price < minPriceProd.price)
        {
            minPriceProd = product;
        }
    }

    console.log(`The product having highest price is : ${maxPriceProd.name}`);
    console.log(`The product having lowest price is : ${minPriceProd.name}`);
}

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Headphones", price: 100 },
    { name: "Tablet", price: 500 },
    { name: "Camera", price: 1500 },
];

findMaxMinPrice(products);

