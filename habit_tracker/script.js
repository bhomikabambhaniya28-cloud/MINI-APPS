let meditateStreak = 0;

document.getElementById("meditate-btn").addEventListener("click", function () {
  meditateStreak++;
  document.getElementById("meditate-streak").textContent = meditateStreak;
});
