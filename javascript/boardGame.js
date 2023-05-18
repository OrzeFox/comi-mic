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
let randomSelectionTimer;
let selectionInterval = 100;
const selectionTime = 800;
let stopSelectionTimeout;

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
  startRandomSelection();
});

// Btn "Finish"
btnFinish.addEventListener('click', () => {
  readyDisplay.style.display = 'flex';
  readyDisplay.style.justifyContent = 'center';
  readyDisplay.style.alignItems = 'center';
  challengeDisplay.style.display = 'none';

  clearInterval(randomSelectionTimer);
  clearTimeout(stopSelectionTimeout);

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
// import { objects } from './script.js';
// import { actions } from './script.js';

// // Elementos importantes
// const readyDisplay = document.querySelector('.readyDisplay');
// const challengeDisplay = document.querySelector('.challengeDisplay');
// const btnPlay = document.getElementById('btnPlay');
// const btnFinish = document.querySelector('.game-btn button:nth-of-type(1)');
// const btnNext = document.querySelector('.game-btn button:nth-of-type(2)');
// const resultGame = document.getElementById('resultGame');

// let objectListGame = objects;
// let actionListGame = actions;
// let selectionInterval = 100;
// let stopSelectionTimeout;

// // Ocultar challengeDisplay inicialmente
// challengeDisplay.style.display = 'none';

// function startRandomSelection() {
//   randomSelectionTimer = setInterval(selectRandomWords, selectionInterval);
// }
// function startRandomSelection() {
//   randomSelectionTimer = setInterval(selectRandomWords, selectionInterval);
// }

// function selectRandomWords() {
//   const randomIndex1 = Math.floor(Math.random() * objectListGame.length);
//   const randomObject = objectListGame[randomIndex1];
//   const randomIndex2 = Math.floor(Math.random() * actionListGame.length);
//   const randomAction = actionListGame[randomIndex2];

//   resultGame.innerText = `You've got ${randomObject} and your action is ${randomAction}!`;
// }

// function stopRandomSelection() {
//   clearInterval(randomSelectionTimer);
//   clearTimeout(stopSelectionTimeout);

//   const randomIndex1 = Math.floor(Math.random() * objectListGame.length);
//   const randomObject = objectListGame[randomIndex1];
//   const randomIndex2 = Math.floor(Math.random() * actionListGame.length);
//   const randomAction = actionListGame[randomIndex2];

//   resultGame.innerText = `You've got ${randomObject} and your action is ${randomAction}!`;

//   objectListGame.splice(randomIndex1, 1);
//   actionListGame.splice(randomIndex2, 1);

//   if (objectListGame.length === 0) {
//     btnNext.disabled = true;
//     resultGame.innerText = `"THE END!"`;
//   }
// }

// // Evento "Ready"
// btnPlay.addEventListener('click', function() {
//   readyDisplay.style.display = 'none';
//   challengeDisplay.style.display = 'block';
//   startRandomSelection();

//   stopSelectionTimeout = setTimeout(stopRandomSelection, 100); 
// });



// // Btn "Finish"
// btnFinish.addEventListener('click', () => {

//   readyDisplay.style.display = 'flex'; // Exibir display ready 
//   readyDisplay.style.justifyContent = 'center';
//   readyDisplay.style.alignItems = 'center';
//   challengeDisplay.style.display = 'none';

//   location.reload();
  
// });

// // Btn "Next"
// btnNext.addEventListener('click', () => {
//   if (objectListGame.length === 0) {
//     btnNext.disabled = true;
//     resultGame.innerText = `"THE END!"`;
//     return;
//   }

//   startRandomSelection();
// });





