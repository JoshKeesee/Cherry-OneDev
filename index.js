$("#header").slideUp(0);

function setTranslate(xPos, yPos, element) {
  element.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

window.addEventListener("DOMContentLoaded", scrollLoop, false);

let xScrollPosition;
let yScrollPosition;

function scrollLoop() {
  requestAnimationFrame(scrollLoop);
  xScrollPosition = window.pageXOffset;
  yScrollPosition = window.pageYOffset;
  setTranslate(0, yScrollPosition * -0.3, document.querySelector("#parallax"));
  setTranslate(0, yScrollPosition * -0.2, document.querySelector("#animate-in"));
}

$(document).ready(function() {
  setTimeout('$("#parallax").removeClass("opacity-0"); $("#header").slideDown(500);', 100);
  $("#animate-in").addClass("shadow-2xl").switchClass("opacity-0", "", 3000);
});

function scrollDown() {
  document.getElementById("contentStart").scrollIntoView(true);
}

setInterval(changeBgColor, 0);

function changeBgColor() {
  var pos = $(window).scrollTop();
  var content = $("#content");
  if (pos < 200) {
    content.removeClass("bg-green-500").addClass("bg-slate-900");
  } else if (pos > 200) {
    content.removeClass("bg-slate-900").addClass("bg-green-500");
  }
}