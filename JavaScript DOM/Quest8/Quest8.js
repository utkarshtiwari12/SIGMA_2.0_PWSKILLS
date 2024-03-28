const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateTimer() {
    const currentTime = new Date();
    const currentHours = currentTime.getHours().toString().padStart(2, "0");
    const currentMinutes = currentTime.getMinutes().toString().padStart(2, "0");
    const currentSeconds = currentTime.getSeconds().toString().padStart(2, "0");
    const colorCode = `#${currentHours}${currentMinutes}${currentSeconds}`;

    hours.innerText = currentHours;
    minutes.innerText = currentMinutes;
    seconds.innerText = currentSeconds;

    document.body.style.backgroundColor = colorCode;
}

setInterval(updateTimer, 1000);
