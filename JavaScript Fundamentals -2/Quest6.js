/* You are working for an e-commerce company, and you are given an object containing product-related information. Your task is to print the product-related information details as shown in the image below. */

const productDetails = {
    name: "MacBook Max Pro M1",
    price: 82000,
    color: "Grey",
    diskSize: "256 GB"
}

console.log("Here are the Product details...");

for (let key in productDetails)
{
    console.log(`${key} : ${productDetails[key]}`);
}