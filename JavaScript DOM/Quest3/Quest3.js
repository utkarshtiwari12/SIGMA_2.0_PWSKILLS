const incrBtn = document.getElementById("increase");
const decrBtn = document.getElementById("decrease");

const heading = document.getElementById("heading");

console.log(heading);

let count = 0;

incrBtn.addEventListener("click", () => {
    count++;

    heading.innerText = count;
});

decrBtn.addEventListener("click", () => {
    count--;

    if (count < 0)
    {
        alert("Counting is going beyond 0.")
    }

    heading.innerText = count;
});