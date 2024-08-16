$(document).ready(function () {
    $(".radio-btn").click(function () {
      $(".radio-inner").toggleClass("active");
      $("body").toggleClass("dark");
    });
  });