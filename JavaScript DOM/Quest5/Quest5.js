const toggleBtn = document.getElementById("toggle");

const image = document.getElementById("image");

const heading = document.getElementById("heading");

let visible = true;

toggleBtn.addEventListener("click", () => {
    if (visible)
    {
        image.classList.add("hidden");
        heading.innerText = "Your Image is Hidden";
        visible = false;
    }
    else
    {
        image.classList.remove("hidden");
        heading.innerText = "Your Image is Visible";
        visible = true;
    }
});