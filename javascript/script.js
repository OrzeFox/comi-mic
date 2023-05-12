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

const btnRestart = document.getElementById("btnRestart");
const btn = document.getElementById("btnPlay");
const result = document.getElementById("resultGame");

let objectListGame = objects.slice();
let actionListGame = actions.slice();

function starter() {
  btn.addEventListener("click", () => {
    const randomIndex1 = Math.floor(Math.random() * objectListGame.length);
    const randomObject = objectListGame[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * actionListGame.length);
    const randomAction = actionListGame[randomIndex2];

    result.innerText = `You've got ${randomObject} and your action is ${randomAction}!`;

    objectListGame.splice(randomIndex1, 1);
    actionListGame.splice(randomIndex2, 1);
    if (objectListGame.length === 0  || actionListGame.length === 0) {
      btn.disabled = true;
      result.innerText = `"THE END!"`;
    }
  });
}

starter();
  
btnRestart.addEventListener("click", () => {
  objectListGame = objects.slice(); //hago la copia de la lista original
  actionListGame = actions.slice();//hago la copia de la lista original
  result.innerText = ""; //vacía el contenido del elemento HTML que muestra el resultado del juego (<div id="result"></div>), para que se borre cualquier resultado anterior y se pueda comenzar una nueva ronda del juego.
  btn.disabled = false;
});
