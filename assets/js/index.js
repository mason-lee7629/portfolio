// pagesize function
function resizePage() {
  let vwidth = $(window).innerWidth();
  let vheight = $(window).height();
  $(".onepage").css({ width: vwidth, height: vheight });
}
// scrollUp function
function scrollUp() {
  let vheight = $(window).innerWidth();
  $("html, body").animate(
    {
      scrollTop: (Math.ceil($(window).scrollTop() / vheight) - 1) * vheight,
    },
    500
  );
}
// scrollDown function
function scrollDown() {
  let vheight = $(window).innerWidth();
  $("html, body").animate(
    {
      scrollTop: (Math.ceil($(window).scrollTop() / vheight) + 1) * vheight,
    },
    500
  );
}

$(document).ready(function () {
  resizePage();
  // main-text의 text color 변경 함수
  function changeHeaderColorTimer() {
    let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    $("#changeColor").css("color", colorCode);
  }
  // main-text의 text color 변경 실행함수
  setInterval(changeHeaderColorTimer, 1500);
});

$(document).keydown(function (event) {
  if (event.keyCode == 37 || event.keyCode == 38) {
    scrollUp();
  } else if (event.keyCode == 39 || event.keyCode == 40) {
    scrollDown();
  }
});

$(window).resize(function () {
  resizePage();
});
