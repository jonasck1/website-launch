var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 750);
}

function showPage() {
  document.getElementById("loading-overlay").style.display = "none";
  document.getElementById("hero").style.display = "block"
}