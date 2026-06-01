const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let clockInterval;

function updateClock() {

    const now = new Date();

   
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

   
    let period = "AM";

  
    if (hours >= 12) {
        period = "PM";
    }
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timeElement.textContent =
        `${hours}:${minutes}:${seconds} ${period}`;
    dateElement.textContent =
        now.toDateString();
}

function startClock() {

    clearInterval(clockInterval);
    updateClock();
    clockInterval = setInterval(
        updateClock,1000
    );
}

function stopClock() {

    clearInterval(clockInterval);
}
startBtn.addEventListener(
    "click",startClock
);

stopBtn.addEventListener(
    "click",stopClock
);

startClock();