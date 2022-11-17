var type = sessionStorage.getItem("type");
var title;
var blob = new Blob([""], {type: "text/html"});
var url = URL.createObjectURL(blob);

function openSettingsForApp() {
  $("#content").html("What is the title of your " + type + "?");
  $("#container").removeClass("opacity-0");
}

function addTitle(value) {
  title = value;
  $("#title").html(title);
  $("#container").addClass("scale-50");
  setTimeout('$("#choice").addClass("bottom-full")', 400);
  setTimeout(createProject, 600);
}

function createProject() {
  $("#container").remove();
  $("#editor").removeClass("hidden");
}

function runApp() {
  URL.revokeObjectURL(url);
  blob = new Blob([ace.edit("input").getSession().getValue()], {type: "text/html"});
  url = URL.createObjectURL(blob);
  document.getElementById("output").data = url;
}

function downloadFile() {
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
}

$(document).keydown(function (event) {
  if (event.ctrlKey && event.keyCode == 13) {
    runApp();
  }
});

var editorDiv = ace.edit("input");
editorDiv.setTheme("ace/theme/monokai");
editorDiv.session.setMode("ace/mode/html");