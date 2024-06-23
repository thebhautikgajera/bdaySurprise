var countDownDate = new Date("July 01, 2024 00:00:00").getTime();

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
    document.getElementById("countDown").innerHTML = "HAPPY BIRTHDAY SWEETY";
    window.location = "https://www.instagram.com/the.bhautikk/";
  }
}, 1000);


var mySong = document.getElementById("songs");
var clickable = document.getElementById("middle");

clickable.onclick = function () {
    if (mySong.pause) {
        mySong.play();
    } else {
        mySong.pause();
    }
}