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
