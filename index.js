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
  
  if (pos < 350) {
    $("#card-1").removeClass("shadow-xl").addClass("shadow-sm").removeClass("shadow-red-500").removeClass("-translate-y-2").addClass("bg-black").removeClass("bg-red-500");
    setTimeout('$("#card-2").removeClass("shadow-xl").addClass("shadow-sm").removeClass("shadow-green-500").removeClass("-translate-y-2").addClass("bg-black").removeClass("bg-green-500")', 200);
    setTimeout('$("#card-3").removeClass("shadow-xl").addClass("shadow-sm").removeClass("shadow-blue-500").removeClass("-translate-y-2").addClass("bg-black").removeClass("bg-blue-500")', 400);
  } else if (pos > 350) {
    $("#card-1").addClass("shadow-xl").removeClass("shadow-sm").addClass("shadow-red-500").addClass("-translate-y-2").addClass("bg-red-500").removeClass("bg-black");
    setTimeout('$("#card-2").addClass("shadow-xl").removeClass("shadow-sm").addClass("shadow-green-500").addClass("-translate-y-2").addClass("bg-green-500").removeClass("bg-black")', 200);
    setTimeout('$("#card-3").addClass("shadow-xl").removeClass("shadow-sm").addClass("shadow-blue-500").addClass("-translate-y-2").addClass("bg-blue-500").removeClass("bg-black")', 400);
  }
  
  if (pos < 1000) {
    content.removeClass("bg-indigo-500").addClass("bg-slate-900");
  } else if (pos > 1000) {
    content.removeClass("bg-slate-900").addClass("bg-indigo-500");
  }
}