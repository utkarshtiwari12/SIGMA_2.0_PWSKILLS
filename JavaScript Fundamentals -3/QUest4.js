/* Develop a program that accepts an object and a property name, and checks if the object has the specified
property. */

const obj = {
  x: 1,
  y: 2,
  z: 3,
  a: 0,
};

function checkProp(obj, prop) {
  return obj.hasOwnProperty(prop);
}

console.log(checkProp(obj, "x"));
console.log(checkProp(obj, "m"));
