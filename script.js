const d = document;
const $hrInput = d.querySelector(".hours-input");
const $minInput = d.querySelector(".minutes-input");
const $secInput = d.querySelector(".seconds-input");
const $message = d.querySelector(".message");
let $countdown = d.querySelector(".countdown");
let total = 0;
let interval = null;

function TimeRemaining(hours, minutes, seconds) {
  total = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  if (total <= 0) return;
  $message.innerText = "Time Started!!";

  return total;
}

function Timer() {
  let time = total;
  total--;

  if (time >= 0) {
    let hours = ("0" + Math.floor(time / 3600)).slice(-2);
    let minutes = ("0" + Math.floor(time / 60 - hours * 60)).slice(-2);
    let seconds = ("0" + (time - (hours * 3600 + minutes * 60))).slice(-2);

    $countdown.innerHTML = `${hours}:${minutes}:${seconds}`;
  } else {
    $message.innerText = "Countdown Over!!";
    clearInterval(interval);
  }
}

function startTimer() {
  Timer();
  $hrInput.value = "";
  $minInput.value = "";
  $secInput.value = "";
  interval = setInterval(Timer, 1000);
}

d.addEventListener("click", (e) => {
  if (e.target.textContent === "Start") {
    clearInterval(interval);
    TimeRemaining($hrInput.value, $minInput.value, $secInput.value);
    startTimer();
  } else if (e.target.textContent === "Reset") {
    clearInterval(interval);
    $hrInput.value = "";
    $minInput.value = "";
    $secInput.value = "";
    $countdown.innerHTML = "00:00:00";
    $message.innerText = "Introduce the Countdown time";
  }
});
