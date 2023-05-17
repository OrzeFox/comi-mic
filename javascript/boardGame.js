// Elementos importantes
const readyDisplay = document.querySelector('.readyDisplay');
const challengeDisplay = document.querySelector('.challengeDisplay');
const btnPlay = document.getElementById('btnPlay');

//display just the starter page - ready
challengeDisplay.style.display = 'none';

// Event button "Ready"
btnPlay.addEventListener('click', function() {
  // display none when click ready
  readyDisplay.style.display = 'none';
  challengeDisplay.style.display = 'block';
});