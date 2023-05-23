/* THE MODAL FUNCTIONS */

// Get the modal
const rulesetModal = document.getElementById("ruleset-modal");

// Get the button that opens the modal
const btnRuleset = document.getElementById("btn-ruleset");

const btnCloseRuleset = document.querySelector(".close-ruleset");

// When the user clicks on the button, open the modal
btnRuleset.onclick = function() {
  rulesetModal.style.display = "block";
}

// When the user clicks on xmark, close the modal
btnCloseRuleset.onclick = function() {
    rulesetModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rulesetModal) {
    rulesetModal.style.display = "none";
  }
}

/* DESKTOP VERSION */


// Get the modal
// Get the button that opens the modal
const btnRuleset2 = document.getElementById("btn-ruleset-2");

// When the user clicks on the button, open the modal
btnRuleset2.onclick = function() {
  rulesetModal.style.display = "block";
}

// When the user clicks on xmark, close the modal
btnCloseRuleset.onclick = function() {
    rulesetModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rulesetModal) {
    rulesetModal.style.display = "none";
  }
}