/* Create an object representing a car with properties like "make," "model," and "year". Write a function to
display all the properties of the car. */

const car = {
    make: "Hyundai",
    model: "Verna",
    year: 2014
};

function displayCarProperties(car)
{
    for (const key in car)
    {
        console.log(`${key} : ${car[key]}`);
    }
}

displayCarProperties(car);