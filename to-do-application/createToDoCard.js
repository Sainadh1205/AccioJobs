const toDoBlock = document.getElementById("toDoBlock");
let idCount = 1

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
