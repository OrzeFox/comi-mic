import {objects} from './script.js'

import {actions} from './script.js'


  const subjectInput = document.getElementById("subject-input"); // use getElementById to get the input element
  const actionInput = document.getElementById("action-input");
  
  const subjectSubmit = document.getElementById("submit-subject"); // use getElementById to get the submit button
  const actionSubmit = document.getElementById("submit-action");
  
  const subjectList = document.querySelector(".subject-list"); // use querySelector to get the list element
  const actionList = document.querySelector(".action-list");


/* SUBJECT LIST */

  subjectSubmit.addEventListener("click", () => {
    const newSubjectWord = subjectInput.value;
    if (newSubjectWord !== "") {
      objects.push(newSubjectWord);
      updateSubjects();
      subjectInput.value = "";
    }
  });
  
  subjectList.addEventListener("click", (event) => {
    const addToArray = Array.from(subjectList.children).indexOf(event.target);
    if (addToArray !== -1) {
      objects.splice(addToArray, 1);
      updateSubjects();
    }
  });
  
  function updateSubjects() {
    subjectList.innerHTML = "";
    for (let i = 0; i < objects.length; i++) {
      const addedSubjectItem = document.createElement("li");
      addedSubjectItem.textContent = objects[i];
      subjectList.appendChild(addedSubjectItem);
    }
  }

  updateSubjects()


/* ACTIONS LIST */

  actionSubmit.addEventListener("click", () => {
    const newActionWord = actionInput.value;
    if (newActionWord !== "") {
      actions.push(newActionWord);
      updateActions();
      actionInput.value = "";
    }
  });
  
  actionList.addEventListener("click", (event) => {
    const addToArray = Array.from(actionList.children).indexOf(event.target);
    if (addToArray !== -1) {
      actions.splice(addToArray, 1);
      updateActions();
    }
  });
  
  function updateActions() {
    actionList.innerHTML = "";
    for (let i = 0; i < actions.length; i++) {
      const addedActionItem = document.createElement("li");
      addedActionItem.textContent = actions[i];
      actionList.appendChild(addedActionItem);
    }
  }

updateActions()


