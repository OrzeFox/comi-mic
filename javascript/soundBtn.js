const buttonSound = document.getElementById('buttonSound');
const buttons = document.getElementsByClassName('btnSound');

function playButtonSound() {
  buttonSound.currentTime = 0; 
  buttonSound.play();
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', playButtonSound);
}