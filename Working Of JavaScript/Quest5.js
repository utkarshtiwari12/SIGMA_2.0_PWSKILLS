/* Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone. */

function demonstrateTemporalDeadZone() {
    console.log("Before declaration:");
    console.log("letVariable:", letVariable); // Demonstrating the temporal dead zone

    {
        // Using let inside a block scope
        let letVariable = "Let variable value";
    }
}

demonstrateTemporalDeadZone();
