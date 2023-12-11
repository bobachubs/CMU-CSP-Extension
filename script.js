// It shows the pop up window and hides the original prompt when the user clicks on Scotty
function togglePopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show"); // show element
  document.getElementById("scotty-prompt").style.visibility = 'hidden'; // hide the initial prompt
}