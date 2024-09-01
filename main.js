const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");
const timerDisplay = document.querySelector("#timerDisplay");
const setTime = document.querySelector("#setTime");
const label = document.querySelector("#label");

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;

//set Timer

function numDisplay() {
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  numDisplay();
  checkAlarm();
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  clearInterval(intervalId);
  intervalId = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  numDisplay();
}

startBtn.addEventListener("click", () => {
  intervalId = setInterval(startTimer, 1000);
});
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

//set alarm

label.addEventListener("click", setTimes);

function setTimes() {
  let setHour = window.prompt("set hour", "00");
  let setMin = window.prompt("set minutes", "00");
  let setSec = window.prompt("set seconds", "00");

  setHour = setHour.toString().padStart(2, "0");
  setMin = setMin.toString().padStart(2, "0");
  setSec = setSec.toString().padStart(2, "0");

  setTime.textContent = `${setHour}:${setMin}:${setSec}`;
}

function checkAlarm() {
  let currentTimer = timerDisplay.textContent;
  let userTime = setTime.textContent;

  if (currentTimer == userTime) {
    alert("Alarm!");
    resetTimer();
  }
}
