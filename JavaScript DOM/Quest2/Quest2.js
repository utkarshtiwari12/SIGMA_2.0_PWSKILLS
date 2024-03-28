const spanText = document.getElementById("span-text");

const toggleBtn = document.getElementById("btn");

let light = true;

toggleBtn.addEventListener("click", () => {
    if (light) {
        document.body.classList.add("dark");
        spanText.innerText = "Dark";
        light = false;
    } else {
        document.body.classList.remove("dark");
        spanText.innerText = "Light";
        light = true;
    }
});