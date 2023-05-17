export {objects}
export {actions}

const objects = [
  "Elvis Presley",
  "Spongebob Squarepants",
  "Batman",
  "A baby",
  "Oprah Winfrey",
  "A cat",
  "An owl",
  "Beyonce",
  "Kim Kardashian",
  "A chicken",
  "Santa Claus",
  "A seagull ",
  "A baby",
  "The Hulk",
  "James Bond",
  "A dog",
  "A lion",
  "Lady Gaga",
  "A frog",
  "A monkey",
  "Spider-Man",
  "Superman",
  "Freddie Mercury",
  "A sheep",
  "A horse",
  "The Queen of England",
  "A dolphin squeaking",
  "Thor",
  "A chair",
  "A pair of scissors",
  "A baseball bat",
  "A telephone",
  "A skateboard",
  "A spoon",
  "An egg",
  "A ball",
  "A pencil",
  "A scarf",
  "A key",
  "A witch",
];

const actions = [
  "Jumping",
  "Dancing",
  "Running",
  "Skipping",
  "Singing",
  "Whistling",
  "Laughing",
  "Crying",
  "Screaming",
  "Shouting",
  "Talking",
  "Walking",
  "Climbing",
  "Swimming",
  "Hiking",
  "Boxing",
  "Kicking",
  "Punching",
  "Stretching",
  "Balancing",
  "Skipping rope",
  "Doing push-ups",
  "Doing sit-ups",
  "Lifting weights",
  "Cycling",
  "Skateboarding",
  "Snowboarding",
  "Skiing",
  "Playing football",
  "Playing soccer",
  "Playing tennis",
  "Playing volleyball",
  "Playing golf",
  "Doing yoga",
  "Playing chess",
  "Playing a musical instrument",
  "Painting",
  "Reading",
  "Playing basketball",
  "Doing hockey",
];


const btnPlay = document.getElementById("btnPlay");
const resultGame = document.getElementById("resultGame");

let objectListGame = objects;
let actionListGame = actions;

function starter() {
  btnPlay.addEventListener("click", () => {
    const randomIndex1 = Math.floor(Math.random() * objectListGame.length);
    const randomObject = objectListGame[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * actionListGame.length);
    const randomAction = actionListGame[randomIndex2];

    resultGame.innerText = `You've got ${randomObject} and your action is ${randomAction}!`;

    objectListGame.splice(randomIndex1, 1);
    actionListGame.splice(randomIndex2, 1);
    if (objectListGame.length === 0) {
      btnPlay.disabled = true;
      resultGame.innerText = `"THE END!"`;
    }
  });
}

starter();
/* 
btnRestart.addEventListener("click", () => {
  location.reload();
});
 */