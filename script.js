$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custome-navbar");
    } else {
      $(".nav-menu").removeClass("custome-navbar");
    }
  });
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("nav-active");
    $(this).addClass("nav-active");
  });
});
