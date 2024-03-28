const fileBtn = document.getElementById("inp-file");

const image = document.getElementById("image");

fileBtn.onchange = function() {
    const reader = new FileReader();

    reader.onload = function (e) {
        image.src = e.target.result;
    };

    reader.readAsDataURL(fileBtn.files[0]);
}