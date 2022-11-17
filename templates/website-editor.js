var templateStart = '';
var container = '<div class="bg-gray-100 min-h-screen mt-16 pt-2">';
var title;
var theme;
var fileUrl;
var type = sessionStorage.getItem("type");
var bgFile;
var parallax = '';
var bgimage = '';
var header = '';
var headerPosition = 'center';
var headerColor = '#ffffff';
var body = '';
var bodyPosition = 'center';
var bodyColor = '#ffffff';
var bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var textColor = "#000000";
var textSize = "text-lg";
var font = "font-sans";

function openMenu() {
  $("#menu").removeClass("-right-full").addClass("right-0");
}

function closeMenu() {
  $("#menu").removeClass("right-0").addClass("-right-full");
}

function openSettingsForApp() {
  $("#content").html("What is the title of your " + type + "?");
  $("#container").removeClass("opacity-0");
}

function addTitle(value) {
  title = value;
  if (title.length !== 0) {
    sessionStorage.setItem("title", value);
    $("#content").html("What colors do you want in your " + type + "?");
    $("#settings").get(0).type = "color";
    $("#settings").get(0).onkeydown = "";
    $("#submit").removeClass("hidden");
  }
}

function addTheme() {
  var value = $("#settings").get(0).value;
  theme = value;
  $("#submit").get(0).onclick = "";
  sessionStorage.setItem("theme", value);
  templateStart = '<!DOCTYPE html><html><head><title>' + title + '</title><script src="https://cdn.tailwindcss.com"></script><script src="https://code.jquery.com/jquery-3.6.0.min.js"></script></head><body>';
  header = '<div class="bg-[' + headerColor + '] border-b-4 ' + 'border-[' + theme + ']' + ' font-bold fixed top-0 left-0 right-0 p-4 text-' + headerPosition + ' text-4xl shadow-lg select-none z-20">' + title + '</div>';
  body = '<div class="bg-[' + bodyColor + '] border-t-4 ' + 'border-[' + theme + ']' + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyPosition + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' shadow-lg select-none z-10">' + bodyText + '</div>';
  createFile();
  $("#choice").removeClass("bg-blue-500").addClass("bg-[" + value + "]");
  $("#container").addClass("scale-50");
  setTimeout('$("#choice").addClass("bottom-full")', 400);
  setTimeout(createProject, 600);
}

function createFile() {
  URL.revokeObjectURL(fileUrl);
  var bodyContent = bgimage + body + parallax;
  var fileContent = [templateStart + header + container + bodyContent + '</div><style>::-webkit-scrollbar {width: 0;}</style></body></html>'];
  var file = new Blob(fileContent, { type: "text/html" });
  fileUrl = URL.createObjectURL(file);
  $("#preview").get(0).data = fileUrl;
}

function createProject() {
  $("#container").remove();
  $("#editor").removeClass("hidden");
}

document.getElementById("bgimage").onchange = (event) => {
  document.getElementById("parallax").checked = false;
  bgFile = URL.createObjectURL(event.target.files[0]);
  bgimage = '<img src="' + bgFile + '" class="mx-auto inset-0 min-h-screen w-screen" />';
  createFile();
}

document.getElementById("headerBar").onchange = (event) => {
  if (event.target.checked) {
    header = '<div class="bg-[' + headerColor + '] border-b-4 ' + 'border-[' + theme + ']' + ' font-bold text-' + themeIsLight(headerColor) + ' fixed top-0 left-0 right-0 p-4 text-' + headerPosition + ' text-4xl shadow-lg select-none z-20">' + title + '</div>';
    container = '<div class="bg-gray-100 min-h-screen mt-16 pt-2">';
  } else {
    header = '<div class="font-bold text-' + themeIsLight(headerColor) + ' fixed top-0 left-0 right-0 p-4 text-' + headerPosition + ' text-4xl select-none z-20">' + title + '</div>';
    container = '<div class="bg-gray-100 min-h-screen">';
  }
  createFile();
}

function removeBg() {
  document.getElementById("parallax").checked = false;
  bgFile = '';
  bgimage = '';
  createFile();
}

document.getElementById("headerColor").onchange = (event) => {
  headerColor = event.target.value;
  header = '<div class="bg-[' + headerColor + '] border-b-4 ' + 'border-[' + theme + ']' + ' font-bold text-' + themeIsLight(headerColor) + ' fixed top-0 left-0 right-0 p-4 text-' + headerPosition + ' text-4xl shadow-lg select-none z-20">' + title + '</div>';
  document.getElementById("header").checked = true;
  createFile();
}

document.getElementById("headerPosition").onchange = (event) => {
  headerPosition = event.target.value;
  if (document.getElementById("header").checked) {
    header = '<div class="bg-[' + headerColor + '] border-b-4 ' + 'border-[' + theme + ']' + ' font-bold text-' + themeIsLight(headerColor) + ' fixed top-0 left-0 right-0 p-4 text-' + headerPosition + ' text-4xl shadow-lg select-none z-20">' + title + '</div>';
  } else {
    header = '<div class="font-bold text-' + themeIsLight(headerColor) + ' fixed top-0 left-0 right-0 p-4 text-' + headerPosition + ' text-4xl select-none z-20">' + title + '</div>';
  }
  createFile();
}

document.getElementById("body").onchange = (event) => {
  if (event.target.checked) {
    body = '<div class="bg-[' + bodyColor + '] border-t-4 ' + 'border-[' + theme + ']' + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyPosition + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' shadow-lg select-none z-10">' + bodyText + '</div>';
  } else {
    body = '<div class="absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyPosition + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' select-none z-10">' + bodyText + '</div>';
  }
  createFile();
}

document.getElementById("bodyColor").onchange = (event) => {
  bodyColor = event.target.value;
  body = '<div class="bg-[' + bodyColor + '] border-t-4 ' + 'border-[' + theme + ']' + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyPosition + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' shadow-lg select-none z-10">' + bodyText + '</div>';
  document.getElementById("body").checked = true;
  createFile();
}

document.getElementById("bodyPosition").onchange = (event) => {
  bodyPosition = event.target.value;
  if (document.getElementById("body").checked) {
    body = '<div class="bg-[' + bodyColor + '] border-t-4 ' + 'border-[' + theme + ']' + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyColor + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' shadow-lg select-none z-10">' + bodyText + '</div>';
  } else {
    body = '<div class="absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyPosition + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' select-none z-10">' + bodyText + '</div>';
  }
  createFile();
}

document.getElementById("textColor").onchange = (event) => {
  textColor = event.target.value;
  if (document.getElementById("body").checked) {
    body = '<div class="bg-[' + bodyColor + '] border-t-4 ' + 'border-[' + theme + ']' + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyColor + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' shadow-lg select-none z-10">' + bodyText + '</div>';
  } else {
    body = '<div class="text-' + themeIsLight(bodyColor) + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyPosition + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' select-none z-10">' + bodyText + '</div>';
  }
  createFile();
}

document.getElementById("textSize").onchange = (event) => {
  textSize = event.target.value;
  bodyChecked();
  createFile();
}

document.getElementById("font").onchange = (event) => {
  font = event.target.value;
  bodyChecked();
  createFile();
}

function bodyChecked() {
  if (document.getElementById("body").checked) {
    body = '<div class="bg-[' + bodyColor + '] border-t-4 ' + 'border-[' + theme + ']' + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyColor + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' shadow-lg select-none z-10">' + bodyText + '</div>';
  } else {
    body = '<div class="text-' + themeIsLight(bodyColor) + ' absolute ' + bgImageHidden() + ' left-0 right-0 p-4 text-' + bodyPosition + ' ' + textSize + ' text-[' + textColor + '] ' + font + ' select-none z-10">' + bodyText + '</div>';
  }
}

function stripHtml(html) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

document.getElementById("bodyText").onchange = (event) => {
  bodyText = stripHtml(document.getElementById("bodyText").value);
  bodyChecked();
  createFile();
}

function themeIsLight(color) {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
  if (brightness > 155) {
    return "black";
  } else {
    return "white";
  }
}

function bgImageHidden() {
  if (bgimage !== "") {
    return "top-full";
  } else {
    return "top-18";
  }
}

document.getElementById("parallax").onchange = () => {
  if (document.getElementById("parallax").checked === true) {
    parallax = '<script>function setTranslate(xPos, yPos, element) {element.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";} window.addEventListener("DOMContentLoaded", scrollLoop, false); let xScrollPosition; let yScrollPosition; function scrollLoop() {xScrollPosition = window.pageXOffset; yScrollPosition = window.pageYOffset; setTranslate(0, yScrollPosition * -0.4, document.querySelector("#parallax")); requestAnimationFrame(scrollLoop);}</script>';
    bgimage = '<img id="parallax" src="' + bgFile + '" class="fixed top-0 mx-auto inset-0 min-h-screen w-screen" />';
  } else {
    parallax = '';
    bgimage = '<img src="' + bgFile + '" class="mx-auto inset-0 min-h-screen w-screen" />';
  }
  bodyChecked();
  createFile();
}

function downloadFile() {
  var bodyContent = '';
  if (bgFile !== '') {
    if (parallax !== '') {
      bodyContent = '<img id="parallax" src="' + title + '-background.jpg" class="fixed top-0 mx-auto inset-0 min-h-screen w-screen" />' + body + parallax;
    } else {
      bodyContent = '<img id="parallax" src="' + title + '-background.jpg" class="mx-auto inset-0 min-h-screen w-screen" />' + body;
    }
  }

  var fileContent = [templateStart + header + container + bodyContent + '</div><style>::-webkit-scrollbar {width: 0;}</style></body></html>'];
  var file = new Blob(fileContent, { type: "text/html" });
  var url = URL.createObjectURL(file);

  const link = document.createElement("a");
  link.href = url;
  link.download = title + ".html";
  document.body.appendChild(link);
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );
  document.body.removeChild(link);

  link.href = bgFile;
  link.download = title + "-background.jpg";
  document.body.appendChild(link);
  link.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    })
  );
  document.body.removeChild(link);
}
