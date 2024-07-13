var countDownDate = new Date("July 14, 2024 10:00:00").getTime();

var countdownfunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countDown").innerHTML =
    days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countDown").innerHTML = "HAPPY BIRTHDAY!!";
    window.location = "#";
  }
}, 1000);

var mySong = document.getElementById("songs");
var clickable = document.getElementById("middle");
var count = 0;

function playpause() {
  if (count == 0) {
    count = 1;
    mySong.play();
  } else {
    count = 0;
    mySong.pause();
  }
}

document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  false
);
