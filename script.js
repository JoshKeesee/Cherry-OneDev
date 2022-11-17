var projectType;

function openProject(id) {
  projectType = id;
  sessionStorage.setItem("type", id);
  $("#choice").removeClass("opacity-0").removeClass("-z-10");
  setTimeout(loadEditor, 300);
  window.history.replaceState({}, null, "/templates/" + projectType + "-editor");
}

function loadEditor() {
  $("#pageContent").load("/templates/" + projectType + "-editor.html");
}