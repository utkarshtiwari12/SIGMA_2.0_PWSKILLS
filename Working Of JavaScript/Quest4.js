/* Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting. */

function showHoisting() {

    console.log("Before Declaration...");
    //console.log(`letVar : ${letVar}`);
    //console.log(`constVar : ${constVar}`);
    console.log(`varVar : ${varVar}`);

    let letVar = 1;
    const constVar = 2;
    var varVar = 3;

    console.log("After Declaration...");
    console.log(`letVar : ${letVar}`);
    console.log(`constVar : ${constVar}`);
    console.log(`varVar : ${varVar}`);
}

showHoisting();