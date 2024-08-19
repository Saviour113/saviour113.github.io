$(document).ready(function () {
    var hamburger = $(".hamburger-toggler");
    hamburger.click(function () {
      $(this).toggleClass("active");
    });
  });