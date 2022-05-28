const addNewTask = document.getElementById("addNewTask");
const toDoInput = document.getElementById("toDoInput");
const selectPriority = document.getElementById("selectPriority");
const toDoDeadLine = document.getElementById("toDoDeadLine");

const validToDoInput = document.getElementById("validToDoInput");
const invalidToDoInput = document.getElementById("invalidToDoInput");

const validPriority = document.getElementById("validPriority");
const invalidPriority = document.getElementById("invalidPriority");

const validDate = document.getElementById("validDate");
const invalidDate = document.getElementById("invalidDate");

const validate = (response) => {
  switch (response) {
    case "toDoInput": {
      if (toDoInput.value==="") {
        invalidToDoInput.style.display = 'block'
        validToDoInput.style.display = 'none'
      } else {
        validToDoInput.style.display = 'block'
        invalidToDoInput.style.display = 'none'
      }
      break
    }
      
    case "selectPriority": {
      if (selectPriority.value === "Select Priority") {
        invalidPriority.style.display = 'block'
        validPriority.style.display = 'none'
      } else {
        validPriority.style.display = 'block'
        invalidPriority.style.display = 'none'
      }
      break
    }
      
    case "toDoDeadLine": {
      const Datevalue = moment(toDoDeadLine.value).format("YYYY/MM/DD h:mm A");
      if (!toDoDeadLine.value|| newDate > Datevalue) {
        invalidDate.style.display = 'block'
        validDate.style.display = 'none'
      } else {
        validDate.style.display = 'block'
        invalidDate.style.display = 'none'
      }
      break
      }
  }
}

addNewTask.addEventListener("click", () => {
  const Datevalue = moment(toDoDeadLine.value).format("YYYY/MM/DD h:mm A");
  createToDoCard(toDoInput.value, selectPriority.value, Datevalue);
  toDoInput.value = ''
  selectPriority.value = 'Select Priority'
  toDoDeadLine.value = ''
  invalidToDoInput.style.display = 'none'
  validToDoInput.style.display = 'none'
  invalidPriority.style.display = 'none'
  validPriority.style.display = 'none'
  invalidDate.style.display = 'none'
  validDate.style.display = 'none'
});

const newDate = moment(new Date()).format("YYYY/MM/DD h:mm A");

const toDoBlock = document.getElementById("toDoBlock");
let idCount = 1

/******************DRAG EVENTS*********************/
/* 
	Draggable Elements -
	[draggable = "true"]
	1. ondragStart
	2. ondrag
	Parent Elements (Where you have to drop the draggable element)
	1. ondragover
	2. ondrop
*/

const toDoDragStart = (event) => {
  let toDoCardIdBeingDragged = event.target.id;
  event.dataTransfer.setData("ToDoCard", toDoCardIdBeingDragged);
};

const allowDrop = (event) => {
  event.preventDefault();
};

const toDoDrop = (event) => {
  let toDoCardIdBeingDropped = event.dataTransfer.getData("ToDoCard");
  let toDoCardBeingDropped = document.getElementById(toDoCardIdBeingDropped);
  let parentElement = event.target;
  parentElement.appendChild(toDoCardBeingDropped);
};
/**********************CREATE A NEW TO-DO TASK CARD***************/

const createToDoCard = (newToDo, priority, deadline) => {
  const toDoCardDiv = document.createElement("div");
  const cardHeaderDiv = document.createElement("div");
  const cardHeaderSpan = document.createElement("span");
  const cardHeaderDeadline = document.createElement("span");
  const cardBodyDiv = document.createElement("div");
  const cardTitleH5 = document.createElement("h5");
  const delButton = document.createElement("a");

  toDoCardDiv.classList = "card toDoCard";
  cardHeaderDiv.classList = "card-header";
  cardBodyDiv.classList = "card-body";
  cardTitleH5.classList = "card-title";
  delButton.classList = "btn btn-danger btn-sm delToDo";

  toDoCardDiv.id = `toDoCardId-${idCount}`;

  switch (priority) {
    case "High":
      cardHeaderSpan.classList = "badge rounded-pill bg-danger";
      break;
    case "Medium":
      cardHeaderSpan.classList = "badge rounded-pill bg-warning text-dark";
      break;
    case "Low":
      cardHeaderSpan.classList = "badge rounded-pill bg-info text-dark";
      break;
  }

  cardTitleH5.innerText = `${newToDo[0].toUpperCase()}${newToDo.slice(1)}`;
  cardHeaderSpan.innerText = `${priority} Priority`;
  cardHeaderDeadline.innerText = deadline;
  delButton.innerText = "Delete";

  toDoCardDiv.draggable = "true"
  toDoCardDiv.addEventListener("dragstart", toDoDragStart)
  delButton.addEventListener("click", () => {
    toDoCardDiv.style.display = "none";
  });

  toDoBlock.appendChild(toDoCardDiv);
  toDoCardDiv.appendChild(cardHeaderDiv);
  cardHeaderDiv.appendChild(cardHeaderSpan);
  cardHeaderDiv.appendChild(cardHeaderDeadline);
  toDoCardDiv.appendChild(cardBodyDiv);
  cardBodyDiv.appendChild(cardTitleH5);
  cardBodyDiv.appendChild(delButton);

 
  idCount++;

};
