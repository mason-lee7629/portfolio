$(document).ready(function () {
  function changeHeaderColorTimer() {
    let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    $("#changeColor").css("color", colorCode);
  }

  setInterval(changeHeaderColorTimer, 1000);
});
