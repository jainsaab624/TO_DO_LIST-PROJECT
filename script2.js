const toDoAppContainer = document.querySelector(".todo-app");
const todoApp = document.querySelector(".todo-app");
const inputField = document.createElement("input");
const taskCount = document.getElementById("task-count");

let itemlist = [];

function rendertodolist() {
  const divElement = document.createElement("div");
  divElement.classList.add("row");

  inputField.classList.add("input-box");
  inputField.placeholder = "enter the task";

  const submitbtn = document.createElement("button");
  submitbtn.classList.add("input-btn");
  submitbtn.textContent = "add";

  submitbtn.addEventListener("click", showlist);

  divElement.appendChild(inputField);
  divElement.appendChild(submitbtn);

  toDoAppContainer.appendChild(divElement);
}

function showlist(event) {
  event.preventDefault();

  const listname = inputField.value.trim();

  if (listname === "") {
    alert("please enter the task");
  } else {
    const ul = document.createElement("ul");
    ul.classList.add("to-do-box");

    const listItem = document.createElement("li");
    listItem.textContent = listname;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        listItem.style.textDecoration = "line-through";
        listItem.style.color = "#aaa";
      } else {
        listItem.style.textDecoration = "none";
        listItem.style.color = "white";
      }
      //   updateTaskCount();
    });

    const removeIcon = document.createElement("i");
    removeIcon.classList.add("fas", "fa-times", "remove-icon");

    removeIcon.addEventListener("click", () => {
      ul.remove();
      itemlist.splice(itemlist.indexOf(ul), 1);
      updateTaskCount();
    });

    listItem.appendChild(removeIcon);

    ul.appendChild(checkbox);
    ul.appendChild(listItem);

    itemlist.push(ul);
    todoApp.appendChild(ul);
  }
  inputField.value = "";
  updateTaskCount();
}

function updateTaskCount() {
  taskCount.textContent = itemlist.length;
}

rendertodolist();
