const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

function validateForm(event)
{
    event.preventDefault();
    if (name.value != "" && email.value != "" && pass.value != "")
    {
        if (name.value.length >= 3 && pass.value.length >= 8) {
            alert("Form Validation Successfull !!");
        } else {
            alert("Form Validation Failed !!");
        }
    }
    else {
        alert("All the rows must be filled.");
    }
}