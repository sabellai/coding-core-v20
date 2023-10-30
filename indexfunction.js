// Get the modal (indexd)
var indexd = document.getElementsByClassName("indexd");

// Get the button that opens the modal
var indxbtn = document.getElementsByClassName("indexbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeindex")[0];

// When the user clicks on the button, open the modal
indxbtn.onclick = function() {
  indexd.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  indexd.style.display = "none";
  indexbg.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == indexd) {
    indexd.style.display = "none";
    indexbg.style.display = "none";
  }
}