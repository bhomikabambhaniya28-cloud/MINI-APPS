let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function updateTimer() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }
  if (minutes < 0) {
    clearInterval(timer);
    alert("Time’s up!");
    return;
  }
  document.getElementById("timer").textContent =
    `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

document.getElementById("start-btn").addEventListener("click", function () {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
});

document.getElementById("reset-btn").addEventListener("click", function () {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  document.getElementById("timer").textContent = "25:00";
  isRunning = false;
});
