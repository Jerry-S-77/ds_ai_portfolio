// dopasowuje wysokość osadzonych notebooków (iframe.notebook) do ich treści - jak w przykładzie z kursu
function dopasujWysokosc(iframe) {
  try {
    iframe.style.height = (iframe.contentWindow.document.documentElement.scrollHeight + 50) + "px";
    iframe.contentDocument.body.style.overflow = "hidden";
  } catch (e) {
    // gdy przeglądarka nie pozwala zajrzeć do ramki, zostaje wysokość z CSS
  }
}

function dopasujWszystkie() {
  document.querySelectorAll("iframe.notebook").forEach(dopasujWysokosc);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("iframe.notebook").forEach(function (iframe) {
    iframe.addEventListener("load", function () { dopasujWysokosc(iframe); });
  });
});
window.addEventListener("resize", dopasujWszystkie);
