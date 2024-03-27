/* Write a program that takes an object as input and returns the number of properties it has. */


const obj = {
    x: 1,
    y: 2,
    z: 3,
    a: 0
};


function countProperties(obj)
{
    return Object.keys(obj).length;
}

let keysLen = countProperties(obj);

console.log(keysLen);