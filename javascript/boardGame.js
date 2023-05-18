import { objects } from './script.js';
import { actions } from './script.js';


// Elementos importantes
const readyDisplay = document.querySelector('.readyDisplay');
const challengeDisplay = document.querySelector('.challengeDisplay');
const btnPlay = document.getElementById('btnPlay');
const btnFinish = document.querySelector('.game-btn button:nth-of-type(1)');
const btnNext = document.querySelector('.game-btn button:nth-of-type(2)');
const resultGame = document.getElementById('resultGame');
const boardGame = document.querySelector('.boardGame');


let objectListGame = objects;
let actionListGame = actions;
let randomSelectionTimer; //efecto randomwords
let selectionInterval = 90; //efecto randomwords
const selectionTime = 1000; //efecto randomwords
let stopSelectionTimeout; //efecto randomwords

// Ocultar challengeDisplay
challengeDisplay.style.display = 'none';

function startRandomSelection() {
  randomSelectionTimer = setInterval(selectRandomWords, selectionInterval);
  stopSelectionTimeout = setTimeout(stopRandomSelection, selectionTime);
}

function selectRandomWords() {
  const randomIndex1 = Math.floor(Math.random() * objectListGame.length);
  const randomObject = objectListGame[randomIndex1];
  const randomIndex2 = Math.floor(Math.random() * actionListGame.length);
  const randomAction = actionListGame[randomIndex2];

  resultGame.innerText = `You've got ${randomObject} and your action is ${randomAction}!`;
}

function stopRandomSelection() {
  clearInterval(randomSelectionTimer);
  clearTimeout(stopSelectionTimeout);

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


// Evento "Ready"
btnPlay.addEventListener('click', function() {
  readyDisplay.style.display = 'none';
  challengeDisplay.style.display = 'block';
  challengeDisplay.style.transform = 'rotateY(180deg)';
  boardGame.style.transition = 'all 0.8s ease';
  boardGame.style.transform = 'rotateY(180deg)';

  startRandomSelection();
});

// Btn "Finish"
btnFinish.addEventListener('click', () => {
  readyDisplay.style.display = 'flex';
  readyDisplay.style.justifyContent = 'center';
  readyDisplay.style.alignItems = 'center';
  challengeDisplay.style.display = 'none';

  //transition
  boardGame.style.transition = 'all 0.8s ease';
  boardGame.style.transform = 'rotateY(360deg)';
  readyDisplay.style.transform = 'rotateY(360deg)';

  setTimeout(() => {
    location.reload();
  }, 1000);
});

// Btn "Next"
btnNext.addEventListener('click', () => {
  if (objectListGame.length === 0) {
    btnNext.disabled = true;
    resultGame.innerText = `"THE END!"`;
    return;
  }

  clearInterval(randomSelectionTimer);
  clearTimeout(stopSelectionTimeout);

  startRandomSelection();
});





