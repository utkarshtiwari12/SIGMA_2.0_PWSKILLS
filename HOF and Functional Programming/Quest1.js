/* The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
2 seconds before reversing the string. The reversed string should then be printed as output. */


let inputStr = "Hey, this is Utkarsh here.";

let outputStr = "";

function reverseStr(Str)
{
    return Str.split("").reverse().join("");;
}

function reverseStrDelay(Str)
{
    setTimeout(() => {
        console.log(`Reversed String after delay is : ${reverseStr(Str)}`);
    }, 2000)
};


outputStr = reverseStr(inputStr);

console.log(outputStr);

reverseStrDelay(inputStr);