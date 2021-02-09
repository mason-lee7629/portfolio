function scrollPage(obj) {
  let scrollSpeed = 700;
  if (!obj) {
    $('html, body').animate({ scrollTop: 0 }, scrollSpeed);
  } else {
    let posTop = $(obj).offset().top;
    $('html, body').animate({ scrollTop: posTop }, scrollSpeed);
  }
}

$('.nav-circle').click(function () {
  let direction = $(this).attr('href');
  scrollPage(direction);
  return false;
});

$('.nav-arrow').click(function () {
  let direction = $(this).attr('href');
  scrollPage(direction);
  return false;
});

$(document).ready(function () {
  // main-text의 text color 변경 함수
  function changeHeaderColorTimer() {
    let colorCode = '#' + Math.round(Math.random() * 0xffffff).toString(16);
    $('#changeColor').css('color', colorCode);
  }
  // main-text의 text color 변경 실행함수
  setInterval(changeHeaderColorTimer, 1500);
});
