import {objects} from './gameEngine.js'

import {actions} from './gameEngine.js'


  const subjectInput = document.getElementById("subject-input"); // use getElementById to get the input element
  const actionInput = document.getElementById("action-input");
  
  const subjectSubmit = document.getElementById("submit-subject"); // use getElementById to get the submit button
  const actionSubmit = document.getElementById("submit-action");
  
  const subjectList = document.querySelector(".subject-list"); // use querySelector to get the list element
  const actionList = document.querySelector(".action-list");

// SUBJECT LIST CREATION

  subjectSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    addNewSubject();
  });
  
  subjectInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      addNewSubject();
    }
  });
  
  function addNewSubject() {
    const newSubjectWord = subjectInput.value;
    if (newSubjectWord !== "") {
      objects.unshift(newSubjectWord);
      updateSubjects();
      subjectInput.value = "";
    }
  }
  
  subjectList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
      const removeIndex = parseInt(event.target.dataset.index, 10);
      objects.splice(removeIndex, 1);
      updateSubjects();
    }
  });
  
  function updateSubjects() {
    subjectList.innerHTML = "";
  
    for (let i = 0; i < objects.length; i++) {
      const addedSubjectItem = document.createElement("li");
      addedSubjectItem.textContent = objects[i];
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "x";
      removeButton.classList.add("remove-button");
      removeButton.dataset.index = i;
  
      addedSubjectItem.appendChild(removeButton);
      subjectList.appendChild(addedSubjectItem);

      setTimeout(() => {
        addedSubjectItem.classList.add("fade-in");
      }, 10);
    }
  }

  updateSubjects()


// ACTIONS LIST CREATION


actionSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  addNewAction();
});

actionInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
    addNewAction();
  }
});

function addNewAction() {
  const newActionWord = actionInput.value;
  if (newActionWord !== "") {
    actions.unshift(newActionWord);
    updateActions();
    actionInput.value = "";
  }
}

actionList.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-button")) {
    const removeIndex = parseInt(event.target.dataset.index, 10);
    actions.splice(removeIndex, 1);
    updateActions();
  }
});

function updateActions() {
  actionList.innerHTML = "";

  for (let i = 0; i < actions.length; i++) {
    const addedActionItem = document.createElement("li");
    addedActionItem.textContent = actions[i];

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.classList.add("remove-button");
    removeButton.dataset.index = i;

    addedActionItem.appendChild(removeButton);
    actionList.appendChild(addedActionItem);

    setTimeout(() => {
      addedActionItem.classList.add("fade-in");
    }, 10);
  }
  
}

updateActions()

