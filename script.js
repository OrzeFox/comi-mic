const objects = [
  "Elvis Presley",
  "Spongebob Squarepants",
  "Batman",
];

const actions = [
  "Jumping",
  "Dancing",
  "Running",
];

const btn = document.getElementById("btn");
const result = document.getElementById("result");

let objectListGame = objects;
let actionListGame = actions;

function starter() {
  btn.addEventListener("click", () => {
    const randomIndex1 = Math.floor(Math.random() * objectListGame.length);
    const randomObject = objectListGame[randomIndex1];
    const randomIndex2 = Math.floor(Math.random() * actionListGame.length);
    const randomAction = actionListGame[randomIndex2];

    result.innerText = `You've got ${randomObject} and your action is ${randomAction}!`;

    objectListGame.splice(randomIndex1, 1);
    actionListGame.splice(randomIndex2, 1);
    if (objectListGame.length === 0) {
      btn.disabled = true;
      result.innerText = `"THE END!"`;
    }
  });
}

starter();

btnrestart.addEventListener("click", () => {
  location.reload();
});
