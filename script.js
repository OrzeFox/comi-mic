let objects = [
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
const btn = document.getElementById("btn");
const result = document.getElementById("result");

let actions = [
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



function starter() {
   
  btn.addEventListener("click", () => {
  const randomIndex1 = Math.floor(Math.random() * objects.length);
  const randomObject = objects[randomIndex1];
  const randomIndex2 = Math.floor(Math.random() * actions.length);
  const randomAction = actions[randomIndex2];

  result.innerText = `You've got ${randomObject} and your action is ${randomAction}!${objects.toString()}${actions.toString()}`;

  objects.splice(randomIndex1, 1);
  actions.splice(randomIndex2, 1);
  if (objects.length === 0) {
    btn.disabled = true;
    result.innerText = `"THE END!"`;

  }
});

 btnrestart.addEventListener("click", () => {
   
 })
}
