/* THE MODAL FUNCTIONS */

// Get the modal
const modal = document.getElementById("settings-modal");

// Get the button that opens the modal
const btnSettings = document.getElementById("btn-settings");

// Get the <span> element that closes the modal
const btnClose = document.getElementsByClassName("close-x")[0];

// When the user clicks on the button, open the modal
btnSettings.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* TAB SWITCH */

const btnSubject = document.getElementById("btn-subject")
const btnAction = document.getElementById("btn-action")

const tabAction = document.getElementById("tab-action");
const tabSubject = document.getElementById("tab-subject");

function tabSwitch (){  

 btnAction.onclick = function(){
    btnSubject.classList.remove("active");
    btnAction.classList.add("active");
    tabSubject.classList.remove("active");
    tabAction.classList.add("active");
   };
  btnSubject.onclick = function() {
  btnAction.classList.remove("active");
  btnSubject.classList.add("active");
  tabAction.classList.remove("active");
  tabSubject.classList.add("active");
 };
}

tabSwitch()


