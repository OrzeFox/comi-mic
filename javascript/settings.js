/* THE MODAL FUNCTIONS */

// Get the modal
const settingsModal = document.getElementById("settings-modal");

// Get the button that opens the modal
const btnSettings = document.getElementById("btn-settings");

// Get the Xmark element that closes the modal
const btnCloseSettings = document.querySelector(".close-settings");

// When the user clicks on the button, open the modal
btnSettings.onclick = function() {
  settingsModal.style.display = "block";
}

// When the user clicks on xmark, close the modal
btnCloseSettings.onclick = function() {
  settingsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == settingsModal) {
    settingsModal.style.display = "none";
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

