import { objects } from './script.js';
import { actions } from './script.js';

// Elementos importantes
const readyDisplay = document.querySelector('.readyDisplay');
const challengeDisplay = document.querySelector('.challengeDisplay');
const btnPlay = document.getElementById('btnPlay');
const btnFinish = document.querySelector('.game-btn button:nth-of-type(1)');
const btnNext = document.querySelector('.game-btn button:nth-of-type(2)');
const resultGame = document.getElementById('resultGame');

let objectListGame = objects;
let actionListGame = actions;

// Ocultar challengeDisplay inicialmente
challengeDisplay.style.display = 'none';


// Evento "Ready"
btnPlay.addEventListener('click', function() {
  readyDisplay.style.display = 'none';
  challengeDisplay.style.display = 'block';
  generateRandomChallenge();
});

// Random
function generateRandomChallenge() {
  const randomIndex1 = Math.floor(Math.random() * objectListGame.length);
  const randomObject = objectListGame[randomIndex1];
  const randomIndex2 = Math.floor(Math.random() * actionListGame.length);
  const randomAction = actionListGame[randomIndex2];

  resultGame.innerText = `You've got ${randomObject} and your action is ${randomAction}!`;

  objectListGame.splice(randomIndex1, 1);
  actionListGame.splice(randomIndex2, 1);

  if (objectListGame.length === 0) {
    btnNext.disabled = true;
    resultGame.innerText = `"THE END!"`;
  }
}



// Btn "Finish"
btnFinish.addEventListener('click', () => {

  readyDisplay.style.display = 'flex'; // Exibir display ready 
  readyDisplay.style.justifyContent = 'center';
  readyDisplay.style.alignItems = 'center';
  challengeDisplay.style.display = 'none';

  location.reload();
  
});

// Btn "Next"
btnNext.addEventListener('click', () => {
  generateRandomChallenge();
});





