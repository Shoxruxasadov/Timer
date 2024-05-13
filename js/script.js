let minute = document.getElementById("minute");
let secund = document.getElementById("secund");
let promtMinute = prompt("Enter the minute");
let promtSecund = prompt("Enter the secund");
let mn = promtMinute;
let sc = promtSecund;
let x = 0;

minute.innerText = promtMinute;
secund.innerText = promtSecund;

function start() {
  x = setInterval(started, 1000);
}

function started() {
  sc--;
  secund.innerText = sc;

  if (secund.innerText < 10 && secund.innerText > 0) {
    secund.innerText = "0" + sc;
  } else if (secund.innerText == 0) {
    secund.innerText = "0" + sc;
    sc = 60;
  } else if (secund.innerText == 59) {
    mn--;
    minute.innerText = mn;

    if (minute.innerText < 10 && minute.innerText > 0) {
      minute.innerText = "0" + mn;
    } else if (minute.innerText == 0) {
      minute.innerText = "0" + mn;
    }
  }
  if (minute.innerText == "00" && secund.innerText == "00") {
    clearInterval(x);
    minute.innerText = "00";
    secund.innerText = "00";

    let audio = new Audio("audio/audio.mp3");
    audio.play();
  } else {
  }
}

if (promtMinute < 10 && promtMinute >= 0) {
  minute.innerText = "0" + mn;
}
if (promtSecund < 10 && promtSecund >= 0) {
  secund.innerText = "0" + sc;
}

function reset() {
  clearInterval(x);
  minute.innerText = "00";
  secund.innerText = "00";
  mn = 0;
  sc = 0;
}