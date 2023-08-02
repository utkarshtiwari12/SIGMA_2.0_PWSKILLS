// You are building a shipping application. Write a program that takes the type of package ("standard",
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight"
// would be delivered the next day.

let package = "express";

switch (package) {
    case "standard":
        console.log("Delivery might take 3-5 days.");
        break;
    case "express":
        console.log("Delivery might take 1-2 days.");
        break;
    case "overnight":
        console.log("Item will be deilvered within 24 hours.");
        break;
    default:
        console.log("Please select proper delivery type.");
}