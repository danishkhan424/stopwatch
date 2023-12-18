let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
let display = document.getElementById("display");

let ms = 0;
let sec = 0;
let min = 0;

let timer = null;

startbtn.addEventListener("click", function () {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 10);
});

stopbtn.addEventListener("click", function () {
  clearInterval(timer);
});

resetbtn.addEventListener("click", function () {
  clearInterval(timer);
  display.innerHTML = `00m : 00s : 00ms`;
  ms = sec = min = 0;
});

function stopwatch() {
  ms++;
  if (ms == 100) {
    ms = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  let msec = ms < 10 ? `0${ms}` : `${ms}`;
  let secs = sec < 10 ? `0${sec}` : `${sec}`;
  let mins = min < 10 ? `0${min}` : `${min}`;

  display.innerHTML = `${mins}m : ${secs}s : ${msec}ms`;
}

