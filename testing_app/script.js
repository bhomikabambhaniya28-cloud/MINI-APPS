let startTime;
let timerInterval;
let isRunning = false;

document.getElementById("input").addEventListener("input", function () {
  if (!isRunning) {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
    isRunning = true;
  }
  const inputText = this.value;
  const originalText = document.getElementById("text").textContent;
  if (inputText === originalText) {
    clearInterval(timerInterval);
    const timeTaken = (Date.now() - startTime) / 1000;
    const wpm = Math.round((originalText.split(" ").length / timeTaken) * 60);
    document.getElementById("wpm").textContent = wpm;
  }
});

function updateTime() {
  const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById("time").textContent = timeElapsed;
}

document.getElementById("reset-btn").addEventListener("click", function () {
  clearInterval(timerInterval);
  document.getElementById("input").value = "";
  document.getElementById("time").textContent = "0";
  document.getElementById("wpm").textContent = "0";
  isRunning = false;
});
